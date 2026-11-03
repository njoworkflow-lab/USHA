import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { launchOptions } from '../lib/browser.mjs';
import { domTools } from '../lib/dom.mjs';
import { phoneTapTargets } from './accessibility.mjs';

test('layout measures painted text and excludes geometry hidden by an overflow ancestor', async t => {
  let browser;
  try { browser = await chromium.launch(launchOptions('chromium')); }
  catch (error) { t.skip('Chromium unavailable: ' + error.message.split('\n')[0]); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 600, height: 700 } });
    await page.setContent('<style>*{margin:0}#outside{position:absolute;top:20px;left:40px}#card{position:absolute;top:220px;left:40px;width:300px;height:100px;overflow:hidden}#inside{font-size:24px;line-height:30px}#spacer{height:500px}</style><main><h2 id="outside">Visible heading</h2><article id="card"><h3 id="inside">Clipped heading</h3><div id="spacer"></div></article></main>');
    await page.evaluate(domTools);
    await page.locator('#card').evaluate(el => { el.scrollTop = 200; });
    const hidden = await page.evaluate(() => ({
      raw: document.querySelector('#inside').getBoundingClientRect().toJSON(),
      blocks: window.__qaDOM.textRects(document.querySelector('main')),
    }));
    assert.equal(hidden.raw.top, 20); // Raw DOM geometry overlaps #outside.
    assert.equal(hidden.blocks.find(b => b.selector === '#inside').rects.length, 0);
    assert.ok(hidden.blocks.find(b => b.selector === '#outside').rects.length > 0);
    await page.locator('#card').evaluate(el => { el.scrollTop = 0; });
    const shown = await page.evaluate(() => window.__qaDOM.textRects(document.querySelector('main')));
    assert.ok(shown.find(b => b.selector === '#inside').rects.length > 0);
    await page.locator('#card').evaluate(el => { el.scrollTop = 15; });
    const partial = await page.evaluate(() => window.__qaDOM.textRects(document.querySelector('main')).find(b => b.selector === '#inside').rects);
    assert.ok(partial.length > 0);
    assert.ok(partial.every(r => r.top >= 220 && r.bottom <= 320));
  } finally { await browser.close(); }
});

test('phone target audit includes textless and offscreen controls while excluding inactive UI', async t => {
  let browser;
  try { browser = await chromium.launch(launchOptions('chromium')); }
  catch (error) { t.skip('Chromium unavailable: ' + error.message.split('\n')[0]); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.setContent('<style>button,input,summary{box-sizing:border-box;width:30px;height:30px}#below{position:absolute;top:1200px}#hidden-parent{display:none}#faded{opacity:0}</style><main id="content"><button id="icon" aria-label="Close"></button><input id="field" aria-label="Name"><button id="below">Offscreen</button><button id="hidden" hidden>Hidden</button><input id="secret" type="hidden"><div id="hidden-parent"><button>Hidden parent</button></div><button id="faded">Inactive</button><details><summary id="disclosure">More</summary><button id="answer">Closed answer</button></details></main>');
    await page.evaluate(domTools);
    const targets = await page.evaluate(phoneTapTargets, { scope: '#content', header: false });
    assert.deepEqual(targets.map(t => t.selector).sort(), ['#below', '#disclosure', '#field', '#icon']);
    assert.ok(targets.find(t => t.selector === '#below').rect.top > 844);
    assert.ok(targets.every(t => t.rect.width < 44 || t.rect.height < 44));
  } finally { await browser.close(); }
});
