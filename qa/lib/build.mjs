import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { ROOT, QA } from './config.mjs';

const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();
const sourcePaths = () => git('ls-files', '-z').split('\0').filter(p => p && !p.startsWith('qa/') && !p.startsWith('.github/') && p !== 'AGENTS.md');
export async function hashes(root, paths) {
  const out = {};
  for (const name of paths) out[name] = createHash('sha256').update(await fs.readFile(path.join(root, name))).digest('hex');
  return out;
}
async function files(root, prefix = '') {
  const out = [];
  for (const ent of await fs.readdir(path.join(root, prefix), { withFileTypes: true })) {
    const name = path.join(prefix, ent.name);
    if (ent.name === 'qa' || ent.name === '.git' || ent.name === '.github') continue;
    if (ent.isDirectory()) out.push(...await files(root, name));
    else out.push(name);
  }
  return out.sort();
}
function differences(a, b) { return [...new Set([...Object.keys(a), ...Object.keys(b)])].filter(k => a[k] !== b[k]); }
export async function prepareSite() {
  const site = path.join(QA, '.work/site'), control = path.join(QA, '.work/control');
  const paths = sourcePaths(), before = await hashes(ROOT, paths);
  const sourceRef = process.env.QA_SOURCE_REF;
  const sourceCommit = sourceRef ? git('rev-parse', '--verify', `${sourceRef}^{commit}`) : git('rev-parse', 'HEAD');
  for (const dir of [site, control]) {
    await fs.rm(dir, { recursive: true, force: true });
    if (sourceRef) {
      await fs.mkdir(dir, { recursive: true });
      const archive = execFileSync('git', ['archive', sourceCommit], { cwd: ROOT, maxBuffer: 100 * 1024 * 1024 });
      execFileSync('tar', ['-x', '-C', dir, '--exclude=qa', '--exclude=.github', '--exclude=AGENTS.md'], { input: archive });
    } else for (const file of paths) { await fs.mkdir(path.dirname(path.join(dir, file)), { recursive: true }); await fs.copyFile(path.join(ROOT, file), path.join(dir, file)); }
  }
  // A copy of the actual dev tooling is present only in the experiment build.
  await fs.mkdir(path.join(site, 'qa'), { recursive: true });
  for (const entry of await fs.readdir(QA)) {
    if (['node_modules', '.work', 'report', 'baseline', 'test-results', '.lighthouseci'].includes(entry)) continue;
    await fs.cp(path.join(QA, entry), path.join(site, 'qa', entry), { recursive: true });
  }
  const env = { ...process.env };
  delete env.USHA_LIVE_API; delete env.USHA_TURNSTILE_KEY;
  const logs = [];
  for (const dir of [control, site]) logs.push(execFileSync(process.execPath, ['tools/seo/build.mjs'], { cwd: dir, env, encoding: 'utf8', timeout: 120000 }));
  const first = await hashes(site, await files(site));
  const reference = await hashes(control, await files(control));
  logs.push(execFileSync(process.execPath, ['tools/seo/build.mjs'], { cwd: site, env, encoding: 'utf8', timeout: 120000 }));
  const second = await hashes(site, await files(site));
  const qaChanges = differences(reference, first), idempotenceChanges = differences(first, second), checkoutChanges = differences(before, await hashes(ROOT, paths));
  const result = { sourceCommit, mainCommit: git('rev-parse', 'origin/main'), node: process.version, sourceHash: createHash('sha256').update(JSON.stringify(reference)).digest('hex'), files: Object.keys(first).length, qaChanges, idempotenceChanges, checkoutChanges, logs };
  await fs.writeFile(path.join(QA, 'report/build.json'), JSON.stringify(result, null, 2));
  if (qaChanges.length || idempotenceChanges.length || checkoutChanges.length) throw new Error(`Build changed unexpectedly: ${JSON.stringify(result)}`);
  return { site, result };
}
