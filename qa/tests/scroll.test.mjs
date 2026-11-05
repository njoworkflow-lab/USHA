import { test } from 'node:test';
import assert from 'node:assert/strict';
import { engines, launchOptions } from '../lib/browser.mjs';
import { contextOptions } from '../lib/config.mjs';
import { scrollInput } from '../lib/input.mjs';
import { domTools, waitForReveal } from '../lib/dom.mjs';

for (const name of ['chromium', 'webkit', 'firefox']) test(`${name}: phone scroll input reaches delayed content without forcing visibility`, async t => {
  let browser;
  try { browser = await engines[name].launch(launchOptions(name)); }
  catch (error) {
    if (process.env.GITHUB_ACTIONS === 'true') throw error;
    t.skip(`${name} unavailable locally: ${error.message.split('\n')[0]}`); return;
  }
  try {
    const cell = { browser: name, profile: 'iphone-13', lang: 'en' };
    const page = await browser.newPage(contextOptions(cell));
    const graphics = await page.evaluate(() => {
      const canvas = document.createElement('canvas'), errors = [];
      canvas.addEventListener('webglcontextcreationerror', event => errors.push(event.statusMessage));
      const gl = canvas.getContext('webgl2', { antialias: false, powerPreference: 'high-performance' }) || canvas.getContext('webgl', { antialias: false, powerPreference: 'high-performance' });
      const ext = gl?.getExtension('WEBGL_debug_renderer_info');
      const renderer = gl ? gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) : null;
      gl?.getExtension('WEBGL_lose_context')?.loseContext();
      return { webgl: !!gl, renderer, errors };
    });
    console.log('GRAPHICS', name, JSON.stringify(graphics));
    await page.setContent('<meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;height:3000px}#heading{position:absolute;top:1400px;opacity:0;transition:opacity .3s .1s}#heading.on{opacity:1}#defect{position:absolute;top:1500px;opacity:0}</style><h2 id="heading">Revealed by scrolling</h2><p id="defect">Still hidden</p>');
    await page.evaluate(() => new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) document.querySelector('#heading').classList.add('on');
    }).observe(document.querySelector('#heading')));
    await page.bringToFront();
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    await page.mouse.move(100, 100);
    await scrollInput(page, cell, 400);
    // Wheel deltas are requests: native engines may clamp or coalesce them.
    // Verify real movement, not an engine-specific pixel mapping.
    await page.waitForFunction(() => scrollY > 0, null, { timeout: 5000, polling: 100 });
    await page.evaluate(domTools);
    await page.evaluate(waitForReveal, { selector: '#heading' });
    assert.ok(await page.locator('#heading').evaluate(el => Number(getComputedStyle(el).opacity) >= .9));
    await page.evaluate(waitForReveal, { selector: '#defect' });
    assert.equal(await page.locator('#defect').evaluate(el => getComputedStyle(el).opacity), '0');
    const before = await page.evaluate(() => scrollY);
    await scrollInput(page, cell, -400);
    await page.waitForFunction(previous => scrollY < previous, before, { timeout: 5000, polling: 100 });
  } finally { await browser.close(); }
});
