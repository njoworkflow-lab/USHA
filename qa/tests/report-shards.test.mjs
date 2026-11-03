import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { execFile } from 'node:child_process';
import { QA, CATEGORIES, PROFILES, matrix } from '../lib/config.mjs';

const exec = promisify(execFile);
test('CI aggregation requires all 18 distinct browser/device jobs and all matrix results', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'usha-qa-report-test-'));
  const fixture = path.join(dir, 'qa'), artifacts = path.join(fixture, '.work/shards');
  try {
    for (const file of ['lib/config.mjs', 'lib/record.mjs', 'scripts/report.mjs', 'scripts/merge-reports.mjs']) {
      await fs.mkdir(path.dirname(path.join(fixture, file)), { recursive: true });
      await fs.copyFile(path.join(QA, file), path.join(fixture, file));
    }
    await fs.symlink(path.join(QA, 'node_modules'), path.join(fixture, 'node_modules'), 'dir');
    const json = async (file, value) => {
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, JSON.stringify(value));
    };
    const result = (cell, category) => ({ ...cell, category, status: 'PASS', issues: [], metrics: {}, notes: [], durationMs: 1 });
    for (const browser of ['chromium', 'webkit', 'firefox']) for (let shard = 0; shard < 6; shard++) {
      const report = path.join(artifacts, `${browser}-${shard}`, 'report');
      await json(path.join(report, 'run.json'), {
        started: 1, finished: 2, shard, browserShard: browser, notes: [],
        build: { sourceCommit: 'fixture', sourceHash: 'same-site-bytes', qaChanges: [], idempotenceChanges: [], checkoutChanges: [] },
        browsers: Object.fromEntries(['chromium', 'webkit', 'firefox'].map(engine => [engine, { available: true }])),
      });
      for (const cell of matrix([browser]).filter(c => c.profile === Object.keys(PROFILES)[shard])) {
        for (const category of CATEGORIES) await json(path.join(report, 'results', `${cell.id}--${category}.json`), result(cell, category));
      }
      if (browser === 'chromium' && shard === 0) for (const profile of ['desktop', 'mobile']) {
        const cell = { id: `lighthouse--${profile}`, profile, browser: 'chromium', lang: 'all' };
        await json(path.join(report, 'results', `${cell.id}--load.json`), result(cell, 'load'));
      }
    }
    await json(path.join(artifacts, 'chromium-0/report/results/site--seo.json'), result({ id: 'site', browser: 'HTTP', profile: 'all', lang: 'all' }, 'seo'));
    const run = () => exec(process.execPath, ['scripts/merge-reports.mjs'], { cwd: fixture });
    const read = async () => JSON.parse(await fs.readFile(path.join(fixture, 'report/data.json'), 'utf8'));
    await run();
    assert.equal((await read()).counts.PASS, 543);
    assert.equal((await read()).meta.error, undefined);

    // CI must exercise its scheduled engine; the local installation fallback
    // cannot make a complete job with 30 UNAVAILABLE results pass.
    const unavailableFile = path.join(artifacts, 'webkit-5/report/run.json');
    const availableMeta = JSON.parse(await fs.readFile(unavailableFile, 'utf8'));
    const unavailableCells = matrix(['webkit']).filter(c => c.profile === Object.keys(PROFILES)[5]);
    await json(unavailableFile, { ...availableMeta, browsers: { ...availableMeta.browsers, webkit: { available: false, reason: 'fixture launch failure' } } });
    for (const cell of unavailableCells) for (const category of CATEGORIES) {
      await json(path.join(artifacts, 'webkit-5/report/results', `${cell.id}--${category}.json`), { ...result(cell, category), status: 'UNAVAILABLE' });
    }
    await assert.rejects(run(), error => error.code === 1);
    assert.equal((await read()).counts.UNAVAILABLE, 30);
    assert.match((await read()).meta.error, /Scheduled browser unavailable: webkit\/5/);
    await json(unavailableFile, availableMeta);
    for (const cell of unavailableCells) for (const category of CATEGORIES) {
      await json(path.join(artifacts, 'webkit-5/report/results', `${cell.id}--${category}.json`), result(cell, category));
    }

    // A duplicate metadata identity cannot stand in for the omitted device job,
    // even when all 540 result files are present.
    const metaFile = path.join(artifacts, 'webkit-5/report/run.json');
    const meta = JSON.parse(await fs.readFile(metaFile, 'utf8'));
    await json(metaFile, { ...meta, shard: 4 });
    await assert.rejects(run(), error => error.code === 1);
    assert.match((await read()).meta.error, /inconsistent shard metadata/);
    assert.match(await fs.readFile(path.join(fixture, 'report/summary.md'), 'utf8'), /Run error:.*inconsistent shard metadata/);
    assert.match(await fs.readFile(path.join(fixture, 'report/index.html'), 'utf8'), /Incomplete coverage<\/strong>.*inconsistent shard metadata/);
    await json(metaFile, meta);

    await json(metaFile, { ...meta, build: { ...meta.build, sourceHash: 'different-site-bytes' } });
    await assert.rejects(run(), error => error.code === 1);
    await json(metaFile, meta);

    // An uploaded job with a missing primary audit must also fail the gate.
    await fs.rm(path.join(artifacts, 'firefox-2/report/results/firefox--tablet-1024--ar--interaction.json'));
    await assert.rejects(run(), error => error.code === 1);
    const missing = await read();
    assert.equal(missing.counts['NOT RUN'], 1);
    assert.equal(missing.results.find(r => r.id === 'firefox--tablet-1024--ar' && r.category === 'interaction').status, 'NOT RUN');
    const restored = { id: 'firefox--tablet-1024--ar', browser: 'firefox', profile: 'tablet-1024', lang: 'ar' };
    await json(path.join(artifacts, 'firefox-2/report/results/firefox--tablet-1024--ar--interaction.json'), result(restored, 'interaction'));
    await fs.rm(path.join(artifacts, 'chromium-0/report/results/site--seo.json'));
    await assert.rejects(run(), error => error.code === 1);
    assert.equal((await read()).counts['NOT RUN'], 1);
    assert.equal((await read()).results.find(r => r.id === 'site' && r.category === 'seo').status, 'NOT RUN');
    assert.match(await fs.readFile(path.join(fixture, 'report/summary.md'), 'utf8'), /incomplete coverage/);
    await json(path.join(artifacts, 'chromium-0/report/results/site--seo.json'), result({ id: 'site', browser: 'HTTP', profile: 'all', lang: 'all' }, 'seo'));
    await fs.rm(path.join(artifacts, 'chromium-0/report/results/lighthouse--mobile--load.json'));
    await assert.rejects(run(), error => error.code === 1);
    assert.equal((await read()).counts['NOT RUN'], 1);
    assert.equal((await read()).results.find(r => r.id === 'lighthouse--mobile' && r.category === 'load').status, 'NOT RUN');
  } finally { await fs.rm(dir, { recursive: true, force: true }); }
});
