import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { launchOptions, observeContextLoss, resetLanguage } from '../lib/browser.mjs';

test('matrix language reset survives a saved preference that redirects the root page', async t => {
  let browser;
  try { browser = await chromium.launch(launchOptions('chromium')); }
  catch (error) { t.skip('Chromium unavailable: ' + error.message.split('\n')[0]); return; }
  try {
    const page = await browser.newPage();
    const origin = 'http://qa-fixture.test';
    await page.route(origin + '/**', route => route.fulfill({
      contentType: 'text/html',
      body: '<script>const saved=localStorage.getItem("usha-lang");if(location.pathname==="/"&&saved==="ar")location.replace("/ar/");document.documentElement.lang=location.pathname==="/ar/"?"ar":location.pathname==="/en/"?"en":"ru";</script>',
    }));
    await page.goto(origin + '/ar/');
    await page.evaluate(() => localStorage.setItem('usha-lang', 'ar'));
    await page.goto(origin + '/');
    await page.waitForURL(origin + '/ar/');
    await resetLanguage(page, origin, 'ru');
    assert.deepEqual(await page.evaluate(() => [location.pathname, document.documentElement.lang, localStorage.getItem('usha-lang')]), ['/', 'ru', 'ru']);
    await page.evaluate(() => {
      localStorage.setItem('usha-lang', 'ar');
      setTimeout(() => location.assign('/ar/'), 0);
    });
    await resetLanguage(page, origin, 'ru');
    assert.deepEqual(await page.evaluate(() => [location.pathname, document.documentElement.lang]), ['/', 'ru']);
  } finally { await browser.close(); }
});

test('a real WebGL context-loss event remains recorded after document navigation', async t => {
  let browser;
  try { browser = await chromium.launch(launchOptions('chromium')); }
  catch (error) { t.skip('Chromium unavailable: ' + error.message.split('\n')[0]); return; }
  try {
    const context = await browser.newContext(), log = {};
    await observeContextLoss(context, log);
    await context.route('http://qa-fixture.test/**', route => route.fulfill({ contentType: 'text/html', body: '<canvas id="fixture"></canvas>' }));
    const page = await context.newPage();
    await page.goto('http://qa-fixture.test/');
    await page.evaluate(() => {
      const canvas = document.getElementById('fixture');
      canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); window.lossObserved = true; });
      const gl = canvas.getContext('webgl');
      if (!gl) throw new Error('WebGL fixture could not create a context');
      gl.getExtension('WEBGL_lose_context').loseContext();
    });
    await page.waitForFunction(() => window.lossObserved);
    await page.goto('http://qa-fixture.test/next');
    assert.equal(await page.evaluate(() => window.lossObserved), undefined);
    assert.equal(log.contextLoss.length, 1);
    assert.equal(log.contextLoss[0].id, 'fixture');
    assert.equal(log.contextLoss[0].url, 'http://qa-fixture.test/');
  } finally { await browser.close(); }
});
