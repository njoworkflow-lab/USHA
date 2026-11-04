import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { engines, launchOptions } from '../lib/browser.mjs';
import { contextOptions } from '../lib/config.mjs';
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

for (const name of ['chromium', 'webkit', 'firefox']) test(`${name}: compact story input reaches every chapter on narrow trails in both directions`, async t => {
  let browser;
  try { browser = await engines[name].launch(launchOptions(name)); }
  catch (error) {
    if (process.env.GITHUB_ACTIONS === 'true') throw error;
    t.skip(`${name} unavailable locally: ${error.message.split('\n')[0]}`); return;
  }
  try {
    const page = await browser.newPage(contextOptions({ browser: name, profile: 'android-low', lang: 'en' }));
    for (const { count, width } of [{ count: 5, width: 280 }, { count: 28, width: 63.828125 }]) for (const dir of ['ltr', 'rtl']) {
      await page.setContent(`<meta name="viewport" content="width=device-width,initial-scale=1"><div dir="${dir}" class="ns-trail" style="position:absolute;left:34px;top:30px;width:${width}px;height:40px;background:#ddd">
        ${Array.from({ length: count }, (_, i) => `<button class="ns-dot" data-i="${i}" style="position:absolute;inset-inline-start:${i / (count - 1) * 100}%;top:50%;width:12px;height:12px;padding:0;border:0;margin-top:-6px;${dir === 'rtl' ? 'margin-right' : 'margin-left'}:-6px;pointer-events:none">${i}</button>`).join('')}
      </div><script>
        window.trail = document.querySelector('.ns-trail');
        window.trusted = [];
        window.points = [];
        window.choose = i => document.querySelectorAll('.ns-dot').forEach((el, n) => n === i ? el.setAttribute('aria-current', 'step') : el.removeAttribute('aria-current'));
        trail.onclick = e => { trusted.push(e.isTrusted); points.push(e.clientX); const r = trail.getBoundingClientRect(), x = e.clientX - r.left; choose(Math.round(${count - 1} * (${dir === 'rtl' ? 'r.width - x' : 'x'}) / r.width)); };
      </script>`);
      if (count === 28 && dir === 'ltr') {
        const requested = await page.locator('.ns-trail').evaluate(el => { const r = el.getBoundingClientRect(); return { x: r.right - 1, y: r.top + r.height / 2 }; });
        await page.touchscreen.tap(requested.x, requested.y);
        console.log('STORY_EDGE', name, JSON.stringify({ requestedX: requested.x, ...await page.evaluate(() => ({ receivedX: points[0], selected: document.querySelector('[aria-current="step"]')?.dataset.i })) }));
        await page.evaluate(() => { trusted.length = 0; points.length = 0; choose(-1); });
      }
      const sequence = [0, count - 1, Math.floor(count / 2), ...Array.from({ length: count }, (_, i) => i)];
      for (const i of sequence) {
        await clickStoryChapter(page, i, true);
        assert.equal(await page.locator('.ns-dot').nth(i).getAttribute('aria-current'), 'step', `${name} ${dir} ${width}px chapter ${i + 1}`);
      }
      assert.deepEqual(await page.evaluate(() => trusted), sequence.map(() => true));
      await page.evaluate(() => { const cover = document.createElement('div'); cover.id = 'cover'; cover.style = 'position:fixed;inset:0;z-index:10'; document.body.append(cover); });
      await assert.rejects(clickStoryChapter(page, 0, true), /pointer is intercepted/);
      assert.equal(await page.locator('.ns-dot').nth(count - 1).getAttribute('aria-current'), 'step');
      await page.evaluate(() => { document.querySelector('#cover').remove(); document.querySelector('.ns-trail').onclick = null; });
      await clickStoryChapter(page, 0, true);
      assert.equal(await page.locator('.ns-dot').nth(0).getAttribute('aria-current'), null, 'input must not manufacture selection when the site handler is broken');
    }
  } finally { await browser.close(); }
});
