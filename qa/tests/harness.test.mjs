import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { frameStats, fpsFloor, matrix, contextOptions } from '../lib/config.mjs';
import { guardNetwork } from '../lib/browser.mjs';
import { serve } from '../lib/server.mjs';
import { rollupMatrix } from '../scripts/report.mjs';

test('frame percentiles catch a slow tail that average FPS hides', () => {
  const result = frameStats([...Array(90).fill(1000 / 60), ...Array(10).fill(100)]);
  assert.equal(result.p5Fps, 10); assert.equal(result.over50ms, 10);
  assert.ok(result.averageFps > result.p5Fps); assert.equal(result.maxFrameMs, 100);
  assert.throws(() => frameStats([]));
  assert.equal(fpsFloor({ profile: 'android-low' }), 30);
  assert.equal(fpsFloor({ profile: 'desktop-1440' }), 45);
});
test('matrix contains 54 independent cells and correct phone emulation', () => {
  const cells = matrix(); assert.equal(cells.length, 54); assert.equal(new Set(cells.map(c => c.id)).size, 54);
  const iphone = contextOptions({ browser: 'webkit', profile: 'iphone-13', lang: 'ar' });
  assert.deepEqual(iphone.viewport, { width: 390, height: 844 });
  assert.equal(iphone.deviceScaleFactor, 3); assert.equal(iphone.hasTouch, true);
  assert.equal(contextOptions({ browser: 'firefox', profile: 'pixel-7', lang: 'ru' }).isMobile, undefined);
});
test('report retains auxiliary phase failures and never treats missing primary checks as passes', () => {
  const id = 'chromium--desktop-1440--ru';
  const rows = rollupMatrix([
    { id, category: 'console-network', status: 'PASS' },
    { id: id + '--memory', category: 'console-network', status: 'FAIL' },
    { id: id + '--visual', category: 'wake', status: 'PASS' },
  ]);
  assert.equal(rows.length, 540);
  assert.equal(rows.find(r => r.id === id && r.category === 'console-network').status, 'FAIL');
  assert.equal(rows.find(r => r.id === id && r.category === 'wake').status, 'NOT RUN');
  assert.equal(rows.find(r => r.id === id && r.category === 'memory').status, 'NOT RUN');
  const resumed = rollupMatrix([
    { id, category: 'wake', status: 'PASS' },
    { id: id + '--interrupted', category: 'wake', status: 'NOT RUN' },
  ]);
  assert.equal(resumed.find(r => r.id === id && r.category === 'wake').status, 'PASS');
  assert.equal(resumed.find(r => r.id === id && r.category === 'visibility').status, 'NOT RUN');
  const shard = rollupMatrix([], 3);
  assert.equal(shard.length, 90);
  assert.ok(shard.every(r => r.profile === 'iphone-13'));
  const shards = ['chromium', 'webkit', 'firefox'].flatMap(browser => Array.from({ length: 6 }, (_, profile) => rollupMatrix([], profile, browser)));
  const identities = shards.flat().map(r => `${r.id}/${r.category}`).sort();
  assert.ok(shards.every(part => part.length === 30));
  assert.deepEqual(identities, rollupMatrix([]).map(r => `${r.id}/${r.category}`).sort());
  assert.equal(new Set(identities).size, 540);
});
test('network guard mocks any API origin and fails closed for unknown traffic', async () => {
  let handler, ws;
  const log = { errors: [], mocked: [], blocked: [] };
  await guardNetwork({ route: async (_pattern, h) => { handler = h; }, routeWebSocket: async (_pattern, h) => { ws = h; } }, 'http://127.0.0.1:1234', log);
  async function request(url, method = 'GET', navigation = false) {
    let action;
    await handler({ request: () => ({ url: () => url, method: () => method, postDataJSON: () => ({}), resourceType: () => 'fetch', isNavigationRequest: () => navigation }), fulfill: async data => { action = ['mock', data]; }, abort: async reason => { action = ['abort', reason]; }, continue: async () => { action = ['continue']; } });
    return action;
  }
  assert.equal((await request('https://any-future-chat-host.test/api/register', 'POST'))[0], 'mock');
  assert.equal((await request('http://127.0.0.1:1234/api/chat', 'POST'))[0], 'mock');
  assert.equal((await request('https://any-future-chat-host.test/api/unexpected', 'POST'))[1].status, 501);
  assert.equal((await request('https://tracker.test/pixel'))[0], 'abort');
  assert.equal((await request('http://127.0.0.1:1234/collect', 'POST'))[0], 'abort');
  assert.equal((await request('http://127.0.0.1:1234/assets/app.js'))[0], 'continue');
  let closed = false; ws({ url: () => 'wss://live.test', close: () => { closed = true; } }); assert.equal(closed, true);
});
test('static server serves pages and video ranges without exposing tooling or accepting writes', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'usha-qa-test-'));
  await fs.writeFile(path.join(dir, 'index.html'), '<h1>fixture</h1>'); await fs.writeFile(path.join(dir, 'video.mp4'), '0123456789');
  const server = await serve(dir);
  try {
    assert.equal((await fetch(server.origin + '/')).status, 200);
    assert.equal((await fetch(server.origin + '/qa/package.json')).status, 403);
    assert.equal((await fetch(server.origin + '/', { method: 'POST' })).status, 405);
    const range = await fetch(server.origin + '/video.mp4', { headers: { Range: 'bytes=2-5' } });
    assert.equal(range.status, 206); assert.equal(await range.text(), '2345');
  } finally { await server.close(); await fs.rm(dir, { recursive: true, force: true }); }
});
