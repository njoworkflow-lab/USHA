import fs from 'node:fs/promises';
import path from 'node:path';
import { QA, matrix, CATEGORIES } from '../lib/config.mjs';
import { Record } from '../lib/record.mjs';
import { generateReport } from './report.mjs';

const source = path.resolve(process.argv[2] || path.join(QA, '.work/shards'));
const metas = [], files = [];
async function walk(dir) {
  for (const item of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) await walk(file);
    else if (file.includes(`${path.sep}report${path.sep}`)) files.push(file);
  }
}
await walk(source);
await fs.rm(path.join(QA, 'report'), { recursive: true, force: true });
await fs.mkdir(path.join(QA, 'report/results'), { recursive: true });
for (const file of files) {
  const relative = file.slice(file.lastIndexOf(`${path.sep}report${path.sep}`) + 8);
  if (relative === 'run.json') { metas.push(JSON.parse(await fs.readFile(file, 'utf8'))); continue; }
  if (['index.html', 'summary.md', 'data.json'].includes(relative)) continue;
  const target = path.join(QA, 'report', relative);
  await fs.mkdir(path.dirname(target), { recursive: true }); await fs.copyFile(file, target);
}
if (!metas.length) throw new Error('No shard metadata found; refusing to present an empty passing report');
const meta = { ...metas[0], started: Math.min(...metas.map(m => m.started)), finished: Math.max(...metas.map(m => m.finished || Date.now())), shard: null, browserShard: null, notes: [`Combined ${metas.length}/18 browser/device jobs. Wall time includes parallel jobs; each job ran timing tests alone.`, ...new Set(metas.flatMap(m => m.notes).filter(n => !/^(Device|Browser) shard/.test(n)))] };
const missing = [];
for (const cell of matrix()) for (const category of CATEGORIES) {
  try { await fs.access(path.join(QA, 'report/results', `${cell.id}--${category}.json`)); }
  catch { const r = new Record(cell, category); r.status = 'NOT RUN'; r.notes.push('Missing from uploaded shard artifacts'); await r.save(); missing.push(`${cell.id}/${category}`); }
}
const commits = new Set(metas.map(m => m.build?.sourceCommit));
const hashes = new Set(metas.map(m => m.build?.sourceHash));
const expectedShards = new Set(['chromium', 'webkit', 'firefox'].flatMap(browser => Array.from({length: 6}, (_, shard) => `${browser}/${shard}`)));
const actualShards = new Set(metas.map(m => `${m.browserShard}/${m.shard}`));
if (commits.size !== 1 || hashes.size !== 1 || metas.some(m => m.error || !m.finished) || metas.length !== expectedShards.size || actualShards.size !== expectedShards.size || [...expectedShards].some(key => !actualShards.has(key))) meta.error = 'Incomplete, failed or inconsistent shard metadata';
const unavailableShards = metas.filter(m => !m.browsers?.[m.browserShard]?.available).map(m => `${m.browserShard}/${m.shard}`);
if (unavailableShards.length) meta.error = [meta.error, `Scheduled browser unavailable: ${unavailableShards.join(', ')}`].filter(Boolean).join('; ');
await fs.writeFile(path.join(QA, 'report/run.json'), JSON.stringify(meta, null, 2));
const report = await generateReport();
console.log(JSON.stringify({ counts: report.counts, durationMinutes: report.duration, error: meta.error || null, missing: missing.length, shards: metas.length }));
const loadFiles = report.results.filter(r => r.category === 'load');
const loadComplete = loadFiles.length === 2 && ['desktop', 'mobile'].every(profile => loadFiles.some(r => r.profile === profile));
const seoComplete = report.results.some(r => r.id === 'site' && r.category === 'seo' && r.status === 'PASS');
if (report.counts.FAIL || report.counts['NOT RUN'] || missing.length || meta.error || !meta.browsers?.chromium.available || !loadComplete || !seoComplete) process.exitCode = 1;
