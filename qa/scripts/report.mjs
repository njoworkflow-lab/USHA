import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadPass } from '../lib/lighthouse.mjs';
import { QA, CATEGORIES, SMOKE_CATEGORIES, PROFILES, matrix, smokeMatrix } from '../lib/config.mjs';

const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const md = value => String(value ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
export function rollupMatrix(results, shard = null, browserShard = null, categories = CATEGORIES, cells = matrix()) {
  const severity = { FAIL: 0, 'NOT RUN': 1, UNAVAILABLE: 2, INFO: 3, PASS: 4 };
  return cells.filter(cell => (shard === null || cell.profile === Object.keys(PROFILES)[shard]) && (browserShard === null || cell.browser === browserShard)).flatMap(cell => categories.map(category => {
    // Interrupted auxiliary attempts have no outcome. Their parent category's
    // primary record still enforces coverage; completed auxiliary failures count.
    const observations = results.filter(r => r.category === category && (r.id === cell.id || (r.id.startsWith(cell.id + '--') && r.status !== 'NOT RUN')));
    // An auxiliary phase check cannot replace the primary functional check.
    if (!observations.some(r => r.id === cell.id)) observations.push({ status: 'NOT RUN' });
    const status = observations.sort((a, b) => severity[a.status] - severity[b.status])[0].status;
    return { ...cell, category, status };
  }));
}
export async function generateReport() {
  const meta = JSON.parse(await fs.readFile(path.join(QA, 'report/run.json'), 'utf8'));
  const results = [];
  const categories = meta.categories || CATEGORIES;
  for (const file of await fs.readdir(path.join(QA, 'report/results'))) if (file.endsWith('.json')) results.push(JSON.parse(await fs.readFile(path.join(QA, 'report/results', file), 'utf8')));
  const globals = [{ id: 'site', category: 'seo', browser: 'HTTP', profile: 'all', lang: 'all' }];
  if (!meta.smoke && !meta.baseline && (meta.shard == null || meta.shard === 0) && (meta.browserShard == null || meta.browserShard === 'chromium')) {
    for (const profile of ['desktop', 'mobile']) globals.push({ id: `lighthouse--${profile}`, category: 'load', browser: 'chromium', profile, lang: 'all' });
  }
  for (const expected of globals) if (!results.some(r => r.id === expected.id && r.category === expected.category)) {
    results.push({ ...expected, status: 'NOT RUN', durationMs: 0, issues: [], metrics: {}, notes: ['Required global audit is missing from the results.'] });
  }
  results.sort((a, b) => a.id.localeCompare(b.id) || CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category));
  const combined = [...rollupMatrix(results, meta.shard ?? null, meta.browserShard ?? null, categories, meta.smoke ? smokeMatrix() : matrix()), ...results.filter(r => ['seo', 'load'].includes(r.category))];
  const counts = {};
  for (const r of combined) counts[r.status] = (counts[r.status] || 0) + 1;
  const priority = { wake: 0, 'console-network': 1, memory: 2, smoothness: 3, visibility: 4, interaction: 5, accessibility: 6, layout: 7, stress: 8, load: 9, visual: 10 };
  const groups = new Map();
  for (const r of results.filter(r => r.status === 'FAIL')) for (const issue of r.issues) {
    if (issue.message === 'Lighthouse CI assertions failed' && r.issues.length > 1) continue;
    const title = issue.message.split('\n')[0]
      .replace(/^(slow-wheel|fast-wheel|fling|ru|en|ar|scenario|forecast|core|pro|ent|story|live-chat): /, '')
      .replace(/(?:forward|reverse) Tab/, 'Tab');
    const selector = ['visibility'].includes(r.category) ? issue.selector || issue.section || '' : '';
    const key = `${r.category}:${title.replace(/Cannot read properties of undefined \(reading '[^']+'\)/g, 'Cannot read properties of undefined').replace(/\d+(\.\d+)?/g, '#')}:${selector}`;
    if (!groups.has(key)) groups.set(key, { ...issue, category: r.category, cell: r.id, occurrences: 0, cells: [] });
    const group = groups.get(key); group.occurrences++;
    if (!group.cells.includes(r.id)) group.cells.push(r.id);
  }
  const worst = [...groups.values()].sort((a, b) => (priority[a.category] ?? 10) - (priority[b.category] ?? 10) || b.occurrences - a.occurrences).slice(0, 10);
  const aggregate = [...new Set(combined.map(r => r.category))].map(category => ({ category, ...Object.fromEntries(['PASS', 'FAIL', 'INFO', 'UNAVAILABLE', 'NOT RUN'].map(status => [status, combined.filter(r => r.category === category && r.status === status).length])) }));
  const duration = ((meta.finished - meta.started) / 60000).toFixed(1);
  const complete = !!meta.finished && !meta.error && !counts['NOT RUN'] && meta.browsers?.chromium.available;
  const lines = [
    '# USHA QA report', '',
    `Source: \`${meta.build?.sourceCommit || 'unknown'}\` (main at capture: \`${meta.build?.mainCommit || 'unknown'}\`).`,
    `Run: ${meta.smoke ? '**SMOKE ONLY — not a full baseline**' : '**FULL SUITE**'}; ${complete ? '**completed**' : '**incomplete coverage**'}; ${meta.baseline ? 'baseline capture' : 'comparison'}; ${duration} minutes wall time. Started ${new Date(meta.started).toISOString()}.`,
    `Node ${meta.node}; ${meta.platform}; ${meta.cpus} logical CPUs; ${meta.functionalWorkers ?? meta.workers} functional / ${meta.workers} memory workers. Smoothness and Lighthouse run alone.`,
    '', `Totals: ${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ')}. A baseline records defects; it does not waive them.`, '',
    ...(meta.error ? [`Run error: ${md(meta.error.split('\n')[0])}`, ''] : []),
    `Counts combine independent phase checks within each cell. Retried attempts are archived separately; only their final result sets status. The HTML report contains all ${results.length} individual observations.`, '',
    '| Test | Pass | Fail | Info | Unavailable | Not run |', '|---|---:|---:|---:|---:|---:|',
    ...aggregate.map(r => `| ${r.category} | ${r.PASS} | ${r.FAIL} | ${r.INFO} | ${r.UNAVAILABLE} | ${r['NOT RUN']} |`), '',
    '## Environment and limits', '',
    ...Object.entries(meta.browsers || {}).map(([name, value]) => `- ${name}: ${value.available ? `${value.version}; ${value.executable}` : `UNAVAILABLE — ${md(value.reason)}`}`),
    ...(meta.notes || []).map(n => `- ${n}`),
    '- Device profiles emulate viewport, DPR, touch and user agent; they are not physical iOS/Android hardware. The low-end throttle uses Chromium CDP only.',
    '- All live-chat HTTP methods and endpoints are mocked before page creation. Turnstile is a local fixture. Service workers and WebSockets are blocked. The live-chat-only automation/incognito gate is mocked to expose form validation.',
    '- Build output is compared with a control copy without qa/, then rebuilt to verify idempotence. The checkout is never built in place.',
    '- UNAVAILABLE/NOT RUN is never a pass. Browser installation gaps, unsupported heap/CDP APIs and manual contrast/linguistic checks remain explicit.', '',
    '## Ten worst observed problems', '',
    ...worst.flatMap((r, i) => [`${i + 1}. **${md(r.category)} — ${md(r.message.split('\n')[0])}** (${r.cells.length} cells; ${r.occurrences} observations; example \`${r.cell}\`). ${r.selector ? `Selector: \`${md(r.selector)}\`.` : ''}`, r.screenshot ? `   [Screenshot](${r.screenshot})` : '   No browser screenshot (tool/infrastructure or load metric).']), '',
    '## Test × browser × viewport × language', '',
    '| Browser | Viewport/profile | Language | ' + categories.join(' | ') + ' |',
    '|---|---|---|' + categories.map(() => '---').join('|') + '|',
    ...matrix().filter(cell => combined.some(r => r.id === cell.id)).map(cell => `| ${cell.browser} | ${cell.profile} | ${cell.lang} | ${categories.map(category => combined.find(r => r.id === cell.id && r.category === category).status).join(' | ')} |`), '',
    '## Load metrics (Lighthouse CI)', '',
    '| Profile | Language | Gate | LCP ms | CLS | TBT ms | JS bytes | Image bytes |', '|---|---|---|---:|---:|---:|---:|---:|',
    ...results.filter(r => r.category === 'load').flatMap(r => (r.metrics.pages || []).map(p => {
      const pass = loadPass(r.profile, p);
      return `| ${r.profile} | ${p.lang} | ${pass ? 'PASS' : 'FAIL'} | ${p.lcpMs?.toFixed(0) ?? 'n/a'} | ${p.cls?.toFixed(4) ?? 'n/a'} | ${p.tbtMs?.toFixed(0) ?? 'n/a'} | ${p.jsBytes ?? 'n/a'} | ${p.imageBytes ?? 'n/a'} |`;
    })), '',
    '## Build and sitemap checks', '',
    `Build: ${meta.build ? `${meta.build.files} files; ${meta.build.qaChanges.length} qa-related changes; ${meta.build.idempotenceChanges.length} idempotence changes; ${meta.build.checkoutChanges.length} checkout changes.` : 'not completed'}`,
    ...results.filter(r => r.category === 'seo').map(r => `Sitemap: ${r.status}; ${r.metrics.pages?.length || 0} pages checked plus robots.txt, llms.txt, llms-full.txt and sw.js.`), '',
    'The [HTML report](index.html) contains every finding, selector, screenshot, metric, warning and coverage note. CI uploads all raw results, Lighthouse reports and diffs.', '',
  ];
  await fs.writeFile(path.join(QA, 'report/summary.md'), lines.map(line => line.trimEnd()).join('\n'));
  const rows = results.map(r => `<details data-status="${r.status}" data-search="${escape(`${r.id} ${r.category}`)}"><summary><b class="${r.status.replace(' ', '-')}">${r.status}</b> ${escape(r.id)} · ${escape(r.category)} · ${(r.durationMs / 1000).toFixed(1)}s · ${r.issues.length} findings</summary>${r.notes.map(n => `<p>${escape(n)}</p>`).join('')}${r.issues.map(i => `<article><h3>${escape(i.message)}</h3>${i.selector ? `<code>${escape(i.selector)}</code>` : ''}${i.screenshot ? `<a href="${escape(i.screenshot)}"><img loading="lazy" src="${escape(i.screenshot)}" alt="${escape(i.message)}"></a>` : ''}<pre>${escape(JSON.stringify(i, null, 2))}</pre></article>`).join('')}<details><summary>Metrics and coverage</summary><pre>${escape(JSON.stringify(r.metrics, null, 2))}</pre></details></details>`).join('\n');
  const html = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>USHA QA report</title><style>body{font:16px system-ui;background:#13151a;color:#f3f3f3;max-width:1200px;margin:32px auto;padding:20px}h1{font-size:32px}a{color:#93c5fd}input,select{font:inherit;padding:10px;margin:8px;border-radius:5px}details{margin:12px 0;border:1px solid #414751;padding:12px;border-radius:8px}summary{cursor:pointer}b{display:inline-block;min-width:110px}.PASS{color:#86efac}.FAIL{color:#fda4af}.INFO,.UNAVAILABLE,.NOT-RUN{color:#fde68a}img{max-width:100%;max-height:600px;object-fit:contain;display:block;margin:12px 0}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:12px ui-monospace}article{border-top:1px solid #414751;padding:12px}code{overflow-wrap:anywhere}</style><h1>USHA QA ${meta.smoke ? 'smoke' : 'full'} report</h1><p>${escape(meta.build?.sourceCommit)} · ${duration} minutes · ${escape(JSON.stringify(counts))}</p><p><strong>${complete ? 'Completed' : 'Incomplete coverage'}</strong>${meta.error ? ' · ' + escape(meta.error.split('\n')[0]) : ''}</p><p><a href="summary.md">Markdown summary</a> · Baseline defects remain failing gates.</p><label>Filter <input id="search" placeholder="browser, profile, language, test"></label><label>Status <select id="status"><option>ALL</option><option>FAIL</option><option>PASS</option><option>INFO</option><option>UNAVAILABLE</option><option>NOT RUN</option></select></label>${rows}<script>const update=()=>{for(const el of document.querySelectorAll('details[data-status]'))el.hidden=!(document.querySelector('#status').value==='ALL'||el.dataset.status===document.querySelector('#status').value)||!el.dataset.search.includes(document.querySelector('#search').value.toLowerCase())};document.querySelector('#search').oninput=update;document.querySelector('#status').onchange=update;</script></html>`;
  await fs.writeFile(path.join(QA, 'report/index.html'), html);
  await fs.writeFile(path.join(QA, 'report/data.json'), JSON.stringify({ meta, counts, aggregate, worst, results }, null, 2));
  return { counts, results, aggregate, worst, duration };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await generateReport();
