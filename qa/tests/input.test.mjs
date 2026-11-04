import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { launchOptions } from '../lib/browser.mjs';
import { click, doubleClick } from '../lib/input.mjs';
import { closePopup } from './performance.mjs';
import { clickStoryChapter } from './interaction.mjs';

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

test('compact story navigation uses native trail input in both directions without clicking through overlays', async t => {
  let browser;
  try { browser = await chromium.launch(launchOptions('chromium')); }
  catch (error) { t.skip('Chromium unavailable: ' + error.message.split('\n')[0]); return; }
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
    for (const dir of ['ltr', 'rtl']) {
      await page.setContent(`<div dir="${dir}" class="ns-trail" style="position:relative;margin:30px;width:280px;height:40px;background:#ddd">
        ${Array.from({ length: 5 }, (_, i) => `<button class="ns-dot" data-i="${i}" style="position:absolute;inset-inline-start:${i * 25}%;top:50%;width:12px;height:12px;padding:0;border:0;margin-top:-6px;${dir === 'rtl' ? 'margin-right' : 'margin-left'}:-6px;pointer-events:none">${i}</button>`).join('')}
      </div><script>
        window.trail = document.querySelector('.ns-trail');
        window.trusted = [];
        window.choose = i => document.querySelectorAll('.ns-dot').forEach((el, n) => n === i ? el.setAttribute('aria-current', 'step') : el.removeAttribute('aria-current'));
        trail.onclick = e => { trusted.push(e.isTrusted); const r = trail.getBoundingClientRect(), x = e.clientX - r.left; choose(Math.round(4 * (${dir === 'rtl' ? 'r.width - x' : 'x'}) / r.width)); };
      </script>`);
      for (const i of [0, 4, 2, 1, 3]) {
        await clickStoryChapter(page, i, true);
        assert.equal(await page.locator('.ns-dot').nth(i).getAttribute('aria-current'), 'step', `${dir} chapter ${i}`);
      }
      assert.deepEqual(await page.evaluate(() => trusted), [true, true, true, true, true]);
      await page.evaluate(() => { const cover = document.createElement('div'); cover.id = 'cover'; cover.style = 'position:fixed;inset:0;z-index:10'; document.body.append(cover); });
      await assert.rejects(clickStoryChapter(page, 0, true), /pointer is intercepted/);
      assert.equal(await page.locator('.ns-dot').nth(3).getAttribute('aria-current'), 'step');
      await page.evaluate(() => { document.querySelector('#cover').remove(); document.querySelector('.ns-trail').onclick = null; });
      await clickStoryChapter(page, 0, true);
      assert.equal(await page.locator('.ns-dot').nth(0).getAttribute('aria-current'), null, 'input must not manufacture selection when the site handler is broken');
    }
  } finally { await browser.close(); }
});
