import { test } from 'node:test';
import assert from 'node:assert/strict';
import net from 'node:net';
import { once } from 'node:events';
import { chromium } from '@playwright/test';
import { isAbortedRequest, launchOptions } from '../lib/browser.mjs';
import { waitForReveal, domTools } from '../lib/dom.mjs';
import { tapTargetLevel } from './accessibility.mjs';
import { detectRunnerGpu, enforceFps, relativeGrowth } from './performance.mjs';
import { waitForDisclosure } from './interaction.mjs';
import { loadPass, denyProxy } from '../lib/lighthouse.mjs';
import { smokeMatrix, SMOKE_CATEGORIES } from '../lib/config.mjs';
import { rollupMatrix } from '../scripts/report.mjs';

test('aborted requests are nonfatal but actual local asset errors still fail', () => {
  const origin = 'http://127.0.0.1:1234';
  for (const reason of ['net::ERR_ABORTED', 'NS_BINDING_ABORTED', 'Load request cancelled']) {
    assert.equal(isAbortedRequest({ url: origin + '/en/', reason }, origin), true);
  }
  assert.equal(isAbortedRequest({ url: 'https://third-party.test/font', reason: 'net::ERR_BLOCKED_BY_CLIENT' }, origin), true);
  assert.equal(isAbortedRequest({ url: origin + '/app.js', reason: 'net::ERR_CONNECTION_RESET' }, origin), false);
  assert.equal(isAbortedRequest({ url: origin + '/app.js', reason: 'net::ERR_BLOCKED_BY_CLIENT' }, origin), false);
});

test('tap, mobile load, FPS and leak gates include exact boundary cases', () => {
  assert.equal(tapTargetLevel(24, 24), 'WARNING');
  assert.equal(tapTargetLevel(43.99, 44), 'WARNING');
  assert.equal(tapTargetLevel(23.99, 44), 'FAIL');
  assert.equal(tapTargetLevel(44, 44), 'PASS');
  const good = { lcpMs: 4000, cls: .1, tbtMs: 600 };
  assert.equal(loadPass('mobile', good), true);
  for (const [key, value] of Object.entries({ lcpMs: 4001, cls: .1001, tbtMs: 601 })) assert.equal(loadPass('mobile', { ...good, [key]: value }), false);
  assert.equal(loadPass('mobile', { ...good, tbtMs: undefined }), false);
  assert.equal(enforceFps('ANGLE (SwiftShader Device)', ''), false);
  assert.equal(enforceFps('llvmpipe', '1'), true);
  const gpu = { verified: true, vendor: '0x10de' };
  assert.equal(enforceFps('ANGLE (NVIDIA GeForce RTX)', '', gpu), true);
  assert.equal(enforceFps('ANGLE (NVIDIA GeForce RTX)', ''), false);
  assert.equal(enforceFps('Apple GPU', ''), false);
  assert.equal(enforceFps('Apple GPU', '', gpu), false);
  assert.equal(enforceFps('ANGLE (SwiftShader Device)', '', gpu), false);
  assert.equal(enforceFps('WebKit WebGL', ''), false);
  assert.equal(relativeGrowth(100, 120) < .2, false);
  assert.equal(relativeGrowth(100, 119) < .2, true);
  assert.equal(relativeGrowth(0, 1) < .2, false);
  assert.equal(relativeGrowth(0, 0), 0);
});

test('GPU detection requires an accessible hardware render device, rejecting virtual and missing devices', async () => {
  const io = { readdir: async () => ['card0', 'renderD128'], readFile: async () => '0x10de\n', stat: async () => ({ isCharacterDevice: () => true }), access: async () => {} };
  assert.equal((await detectRunnerGpu({ platform: 'linux', io })).verified, true);
  assert.equal((await detectRunnerGpu({ platform: 'linux', io: { ...io, readFile: async () => '0x1414\n' } })).verified, false);
  assert.equal((await detectRunnerGpu({ platform: 'linux', io: { ...io, access: async () => { throw new Error('EACCES'); } } })).verified, false);
  assert.equal((await detectRunnerGpu({ platform: 'linux', io: { ...io, readdir: async () => [] } })).verified, false);
});

test('FAQ assertions wait for delayed closure and still reject a stuck disclosure', async () => {
  const browser = await chromium.launch(launchOptions('chromium'));
  try {
    const page = await browser.newPage();
    await page.setContent('<details open><summary>Question</summary><p>Answer</p></details><script>document.querySelector("summary").onclick = event => { event.preventDefault(); setTimeout(() => { document.querySelector("details").open = false; }, 650); };</script>');
    const summary = page.locator('summary');
    await summary.click();
    await waitForDisclosure(summary, false, 3000);
    await page.locator('details').evaluate(el => { el.open = true; });
    await assert.rejects(waitForDisclosure(summary, false, 250), /Timeout/);
  } finally { await browser.close(); }
});

test('smoke requires all six cells and all requested categories', () => {
  const cells = smokeMatrix();
  assert.equal(cells.length, 6);
  const results = cells.flatMap(cell => SMOKE_CATEGORIES.map(category => ({ ...cell, category, status: 'PASS' })));
  const rollup = () => rollupMatrix(results, null, null, SMOKE_CATEGORIES, cells);
  assert.equal(rollup().length, 30);
  assert.ok(rollup().every(r => r.status === 'PASS'));
  results.pop();
  assert.equal(rollup().filter(r => r.status === 'NOT RUN').length, 1);
});

test('Lighthouse deny proxy survives reset CONNECT clients and never forwards traffic', { timeout: 5000 }, async () => {
  const guard = denyProxy();
  guard.proxy.listen(0, '127.0.0.1');
  await once(guard.proxy, 'listening');
  try {
    const client = net.connect(guard.proxy.address().port, '127.0.0.1');
    client.on('error', () => {});
    client.write('CONNECT blocked.example.invalid:443 HTTP/1.1\r\nHost: blocked.example.invalid:443\r\n\r\n');
    const [response] = await once(client, 'data');
    assert.match(response.toString(), /^HTTP\/1.1 403/);
    client.destroy();
    const connection = once(guard.proxy, 'connection');
    const resetClient = net.connect(guard.proxy.address().port, '127.0.0.1');
    resetClient.on('error', () => {});
    const [socket] = await connection;
    // Inject the exact asynchronous socket reset that terminated CI. Node's
    // HTTP parser can destroy this connection; the next one must still work.
    socket.emit('error', Object.assign(new Error('read ECONNRESET'), { code: 'ECONNRESET' }));
    resetClient.destroy();
    const denied = await fetch(`http://127.0.0.1:${guard.proxy.address().port}/still-alive`);
    assert.equal(denied.status, 403);
    assert.ok(guard.evidence.denied >= 2);
    assert.ok(guard.evidence.disconnects.includes('ECONNRESET'));
  } finally { await guard.close(); }
});

test('visibility waits for delayed ancestor/word reveals and still detects invisible content', async () => {
  const browser = await chromium.launch(launchOptions('chromium'));
  try {
    const page = await browser.newPage();
    await page.setContent(`<style>body{margin:0}.spacer{height:1200px}#reveal{opacity:0;transition:opacity .6s .35s}#reveal span{opacity:0;transition:opacity .7s .4s}#reveal.on,#reveal.on span{opacity:1}</style><div class="spacer"></div><section id="reveal"><h2 id="heading"><span class="xc">Delayed heading</span></h2></section><p id="invisible" style="opacity:0">Real defect</p>`);
    await page.evaluate(() => new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) document.querySelector('#reveal').classList.add('on');
    }).observe(document.querySelector('#reveal')));
    await page.evaluate(domTools);
    await page.evaluate(waitForReveal, { selector: '#heading' });
    const visible = await page.evaluate(() => window.__qaDOM.visible(document.querySelector('#heading')));
    assert.ok(visible.opacity >= .9);
    assert.ok(!visible.reasons.includes('faded heading word'));
    await page.evaluate(waitForReveal, { selector: '#invisible' });
    assert.equal(await page.locator('#invisible').evaluate(el => getComputedStyle(el).opacity), '0');
  } finally { await browser.close(); }
});
