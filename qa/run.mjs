import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { QA, CATEGORIES, PROFILES, SECTIONS, matrix } from './lib/config.mjs';
import { prepareSite } from './lib/build.mjs';
import { serve } from './lib/server.mjs';
import { discover, session, wake, closePopups } from './lib/browser.mjs';
import { audit, Record, interruptAudits } from './lib/record.mjs';
import { smoothness, memory } from './tests/performance.mjs';
import { visibility, layout, visual } from './tests/content.mjs';
import { interactions, stress } from './tests/interaction.mjs';
import { accessibility, consoleNetwork } from './tests/accessibility.mjs';
import { seo } from './tests/seo.mjs';
import { lighthouse } from './lib/lighthouse.mjs';
import { generateReport } from './scripts/report.mjs';

const args = new Set(process.argv.slice(2));
const smoke = args.has('--smoke'), baseline = args.has('--baseline');
const resume = args.has('--resume');
if (smoke && baseline) throw new Error('A smoke run cannot create a baseline');
const workers = Math.max(1, Math.min(6, Number(process.env.QA_WORKERS || 2)));
const functionalWorkers = Math.max(1, Math.min(workers, Number(process.env.QA_FUNCTIONAL_WORKERS || workers)));
const selected = (process.env.QA_BROWSERS || 'chromium,webkit,firefox').split(',');
const phases = (process.env.QA_PHASES || 'smoothness,load,visual,functional,memory').split(',');
const shard = process.env.QA_SHARD === undefined ? null : Number(process.env.QA_SHARD);
const browserShard = process.env.QA_BROWSER_SHARD || null;
if (shard !== null && (!Number.isInteger(shard) || shard < 0 || shard >= Object.keys(PROFILES).length)) throw new Error('QA_SHARD must be 0–5');
if (browserShard !== null && !['chromium', 'webkit', 'firefox'].includes(browserShard)) throw new Error('QA_BROWSER_SHARD must be chromium, webkit or firefox');
if (phases.some(p => !['smoothness', 'load', 'visual', 'functional', 'memory'].includes(p))) throw new Error('Invalid QA_PHASES');
if (selected.some(b => !['chromium', 'webkit', 'firefox'].includes(b))) throw new Error('Invalid QA_BROWSERS');
const prior = resume ? JSON.parse(await fs.readFile(path.join(QA, 'report/run.json'), 'utf8')) : null;
if (prior && (prior.smoke !== smoke || prior.baseline !== baseline || prior.shard !== shard || (prior.browserShard ?? null) !== browserShard || prior.workers !== workers)) throw new Error('Resume must use the original mode, shard and worker count');
const meta = prior || { started: Date.now(), node: process.version, platform: `${os.platform()} ${os.release()}`, cpus: os.cpus().length, workers, smoke, baseline, notes: [] };
if (resume) { meta.notes.push(`Resumed unfinished checks at ${new Date().toISOString()}; completed passes and failures were retained. Wall time includes interruption.`); delete meta.error; delete meta.finished; }
meta.shard = shard;
meta.browserShard = browserShard;
meta.functionalWorkers = functionalWorkers;
if (shard !== null) meta.notes.push(`Device shard ${shard + 1}/6: ${Object.keys(PROFILES)[shard]}. The aggregate CI report verifies the complete matrix.`);
if (browserShard !== null) meta.notes.push(`Browser shard: ${browserShard}. The aggregate CI report verifies all three engines.`);
if (process.env.QA_ENV_NOTE) meta.notes.push(process.env.QA_ENV_NOTE);
if (!resume) await fs.rm(path.join(QA, 'report'), { recursive: true, force: true });
await fs.mkdir(path.join(QA, 'report/results'), { recursive: true });
const completed = new Set();
if (resume) for (const file of await fs.readdir(path.join(QA, 'report/results'))) {
  const result = JSON.parse(await fs.readFile(path.join(QA, 'report/results', file), 'utf8'));
  const unfinishedScroll = result.category === 'smoothness' && result.metrics.runs?.some(run => !run.reachedBottom);
  const unfinishedVisual = baseline && result.category === 'visual' && result.status !== 'UNAVAILABLE' && (result.metrics.sections?.length || 0) < SECTIONS.length;
  if (['PASS', 'FAIL', 'UNAVAILABLE'].includes(result.status) && !unfinishedScroll && !unfinishedVisual) completed.add(`${result.id}/${result.category}`);
}
const pending = (cell, category) => !completed.has(`${cell.id}/${category}`);
let server;
let stopping = false;
const saveMeta = async () => fs.writeFile(path.join(QA, 'report/run.json'), JSON.stringify(meta, null, 2));
for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, async () => {
  stopping = true;
  meta.error = `Interrupted by ${signal}; unfinished checks are not passing results.`;
  await interruptAudits(meta.error);
  meta.finished = Date.now(); await saveMeta();
  await generateReport().catch(error => console.error(error.message));
  process.exit(1);
});
const unavailable = async (cell, categories, reason, status = 'UNAVAILABLE') => {
  for (const category of categories) { const record = new Record(cell, category); record.status = status; record.notes.push(reason); await record.save(); }
};
async function pool(cells, fn, concurrency = workers) {
  let i = 0;
  await Promise.all(Array.from({ length: concurrency }, async () => { while (i < cells.length) { const cell = cells[i++]; await fn(cell); } }));
}
async function withSession(cell, categories, fn, options = {}) {
  if (stopping) return;
  let s;
  try {
    s = await session(cell, server.origin, { humanChat: true, ...options });
    const wakeCell = { ...cell, id: `${cell.id}--${categories[0]}` };
    const woke = await audit(wakeCell, 'wake', s.page, async record => { record.metrics = await wake(s.page, server.origin, cell.lang, !!options.visualClock); });
    const wakePath = path.join(QA, 'report/results', `${cell.id}--wake.json`);
    let earlier; try { earlier = JSON.parse(await fs.readFile(wakePath, 'utf8')); } catch {}
    if (earlier?.status !== 'FAIL') await fs.writeFile(wakePath, JSON.stringify({ ...woke, id: cell.id }, null, 2));
    if (woke.status === 'PASS') await fn(s);
    else await unavailable(cell, categories, 'Blocked by failed real hold/hello wake', 'NOT RUN');
  } catch (error) {
    if (stopping) { await unavailable(cell, categories, meta.error, 'NOT RUN'); return; }
    const record = new Record(cell, categories[0], s?.page); await record.fail('Harness/session failure: ' + error.message); await record.save();
    await unavailable(cell, categories.slice(1), 'Session setup failed', 'NOT RUN');
  } finally { if (s) await s.close(); }
}
try {
  const build = await prepareSite();
  if (resume && (meta.build?.sourceCommit !== build.result.sourceCommit || meta.build?.sourceHash !== build.result.sourceHash)) throw new Error('Source changed: cannot resume a baseline from different site bytes');
  meta.build = build.result;
  server = await serve(build.site);
  const browsers = await discover();
  if (resume && JSON.stringify(meta.browsers) !== JSON.stringify(browsers)) throw new Error('Browser availability/version changed: start a new run');
  meta.browsers = browsers;
  console.log('Browser availability:', Object.fromEntries(Object.entries(meta.browsers).map(([k, v]) => [k, v.available ? v.version : 'unavailable'])));
  const cells = [];
  for (const cell of matrix()) {
    if (shard !== null && cell.profile !== Object.keys(PROFILES)[shard]) continue;
    if (browserShard !== null && cell.browser !== browserShard) continue;
    if (!meta.browsers[cell.browser].available) await unavailable(cell, CATEGORIES, meta.browsers[cell.browser].reason);
    else if (!selected.includes(cell.browser) || (smoke && (cell.profile !== 'iphone-13' || cell.lang !== 'en' || cell.browser !== 'chromium')) || (process.env.QA_FILTER && !cell.id.includes(process.env.QA_FILTER))) await unavailable(cell, CATEGORIES, 'Excluded by explicit diagnostic selection; not a full matrix result', 'NOT RUN');
    else cells.push(cell);
  }
  meta.selectedCells = cells.map(c => c.id); await saveMeta();
  if (phases.length !== 5 && !resume) {
    meta.notes.push(`Diagnostic phase selection: ${phases.join(', ')}; omitted phases are NOT RUN.`);
    for (const cell of cells) await unavailable(cell, CATEGORIES, 'Not yet run / excluded by diagnostic phase selection', 'NOT RUN');
  }
  if (pending({ id: 'site' }, 'seo')) await audit({ id: 'site', browser: 'HTTP', profile: 'all', lang: 'all' }, 'seo', null, record => seo(server.origin, record));
  // Never compete with other browser sessions while collecting frame timing.
  if (phases.includes('smoothness')) for (const cell of cells.filter(c => pending(c, 'smoothness'))) await withSession(cell, ['smoothness'], async s => {
    await audit(cell, 'smoothness', s.page, record => smoothness(s, cell, record, smoke));
    await audit({ ...cell, id: `${cell.id}--performance` }, 'console-network', s.page, record => consoleNetwork(s, cell, record));
  });
  if (phases.includes('load') && (shard === null || shard === 0) && (browserShard === null || browserShard === 'chromium')) await lighthouse(server.origin, meta.browsers, smoke, completed);
  if (phases.includes('visual')) for (const cell of cells.filter(c => pending(c, 'visual'))) await withSession(cell, ['visual'], async s => {
    await audit(cell, 'visual', s.page, record => visual(s, cell, record, baseline));
  }, { visualClock: true });
  const functional = ['visibility', 'layout', 'interaction', 'stress', 'accessibility', 'console-network'];
  if (phases.includes('functional')) await pool(cells.filter(c => functional.some(cat => pending(c, cat))), cell => withSession(cell, functional.filter(cat => pending(cell, cat)), async s => {
    for (const [category, fn] of [
      ['visibility', record => visibility(s, cell, record)],
      ['layout', record => layout(s, cell, record)],
      ['interaction', record => interactions(s, cell, record, server.origin)],
      ['accessibility', record => accessibility(s, cell, record)],
      ['stress', record => stress(s, cell, record, server.origin)],
      ['console-network', record => consoleNetwork(s, cell, record)],
    ]) {
      if (pending(cell, category)) await audit(cell, category, s.page, fn);
      await closePopups(s.page).catch(() => {});
    }
  }), functionalWorkers);
  if (phases.includes('memory')) await pool(cells.filter(c => pending(c, 'memory')), cell => withSession(cell, ['memory'], async s => {
    await audit(cell, 'memory', s.page, record => memory(s, cell, record, smoke));
    await audit({ ...cell, id: `${cell.id}--memory` }, 'console-network', s.page, record => consoleNetwork(s, cell, record));
  }));
} catch (error) {
  meta.error = error.stack; console.error(error.stack); process.exitCode = 1;
} finally {
  if (server) await server.close();
  if (browserShard && meta.browsers && !meta.browsers[browserShard]?.available) {
    meta.error ||= `Scheduled browser ${browserShard} is unavailable: ${meta.browsers[browserShard]?.reason || 'launch failed'}`;
  }
  meta.finished = Date.now(); await saveMeta();
  const report = await generateReport();
  if (baseline) {
    await fs.mkdir(path.join(QA, 'baseline'), { recursive: true });
    await fs.writeFile(path.join(QA, 'baseline/manifest.json'), JSON.stringify({ ...meta, capturedCells: report.results.filter(r => r.category === 'visual' && r.status === 'PASS').map(r => r.id), browserProfiles: matrix(), thresholds: { pixelmatch: .25, maxDifferentPixelRatio: .02 } }, null, 2));
  }
  console.log(`Report: ${path.join(QA, 'report/index.html')} (${report.duration} min)`, report.counts);
  // Skipping an installed browser/cell cannot manufacture a green full check.
  // Installation failures are the allowed unsharded local fallback. An explicit
  // browser shard must launch its scheduled engine, including on GitHub runners.
  if (report.counts.FAIL || (!smoke && report.counts['NOT RUN']) || !meta.browsers?.chromium.available || meta.error) process.exitCode = 1;
}
