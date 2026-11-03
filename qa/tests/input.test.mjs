import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { launchOptions } from '../lib/browser.mjs';
import { click, doubleClick } from '../lib/input.mjs';
import { closePopup } from './performance.mjs';

test('native pointer input rejects blocked controls, emits real events, and verifies popup closure', async t => {
  let browser;
  try { browser = await chromium.launch(launchOptions('chromium')); }
  catch (error) { t.skip('Chromium unavailable: ' + error.message.split('\n')[0]); return; }
  try {
    const page = await browser.newPage();
    await page.setContent('<button id="target" style="position:absolute;left:40px;top:40px;width:100px;height:50px">Target</button><div id="cover" style="position:absolute;left:40px;top:40px;width:100px;height:50px;background:black;z-index:2"></div><script>window.clicks=0;window.doubles=0;target.onclick=()=>clicks++;target.ondblclick=()=>doubles++;</script>');
    await assert.rejects(click(page.locator('#target'), { timeout: 500 }), /pointer is intercepted/);
    assert.equal(await page.evaluate(() => clicks), 0);
    await page.locator('#cover').evaluate(el => el.remove());
    await click(page.locator('#target'));
    assert.equal(await page.evaluate(() => clicks), 1);
    await doubleClick(page.locator('#target'));
    assert.deepEqual(await page.evaluate(() => [clicks, doubles]), [3, 1]);
    await page.locator('#target').evaluate(el => { el.disabled = true; });
    await assert.rejects(click(page.locator('#target'), { timeout: 500 }), /hidden or disabled/);
    assert.equal(await page.evaluate(() => clicks), 3);
    await page.evaluate(() => document.body.append(document.createElement('button')));
    await assert.rejects(click(page.locator('button')), /requires one target/);
    await page.setContent('<div style="height:2200px"></div><header style="position:fixed;inset:0 0 auto;height:120px;background:black;z-index:2"></header><button id="target" style="position:absolute;top:600px;left:40px;width:100px;height:50px">Target</button><script>window.clicks=0;target.onclick=()=>clicks++;</script>');
    await page.evaluate(() => scrollTo(0, 560));
    await click(page.locator('#target'));
    assert.equal(await page.evaluate(() => clicks), 1);
    await page.setContent('<div id="popup"><button id="close" style="width:100px;height:50px">Close</button></div>');
    const popup = { root: '#popup', close: '#close' };
    await assert.rejects(closePopup(page, popup, { timeout: 250 }), /Timeout/);
    assert.equal(await page.locator('#popup').isVisible(), true);
    await page.locator('#close').evaluate(el => { el.onclick = () => document.querySelector('#popup').remove(); });
    await closePopup(page, popup, { timeout: 1000 });
    assert.equal(await page.locator('#popup').count(), 0);
  } finally { await browser.close(); }
});
