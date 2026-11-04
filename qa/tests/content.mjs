import { click as qaClick } from '../lib/input.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { QA, SECTIONS } from '../lib/config.mjs';
import { goSection, settle, visualTicks, wake } from '../lib/browser.mjs';
import { domTools, waitForReveal } from '../lib/dom.mjs';

async function wheelTo(page, target, cdp) {
  const started = Date.now();
  let y = await page.evaluate(() => scrollY);
  if (Math.abs(target - y) <= 3) return { target, actual: y, reached: true };
  await page.mouse.move(15, page.viewportSize().height * .7);
  if (cdp && Math.abs(target - y) > 3) {
    await cdp.send('Input.synthesizeScrollGesture', {
      x: 15, y: Math.floor(page.viewportSize().height * .7),
      yDistance: -Math.round(target - y), speed: 600,
      gestureSourceType: 'mouse', preventFling: true,
    });
    await settle(page, 180);
    y = await page.evaluate(() => scrollY);
  }
  while (Math.abs(target - y) > 3 && Date.now() - started < 30000) {
    await page.mouse.wheel(0, Math.sign(target - y) * Math.min(500, Math.abs(target - y)));
    // Wheel dispatch returns before a slow renderer processes the scroll. An
    // unchanged immediate sample must not be mistaken for the final position.
    try { await page.waitForFunction(previous => Math.abs(scrollY - previous) >= 1, y, { timeout: 3000 }); }
    catch { break; }
    await settle(page, 180);
    y = await page.evaluate(() => scrollY);
  }
  return { target, actual: y, reached: Math.abs(target - y) <= 3 };
}

export async function visibility(s, cell, record, sections = SECTIONS, modes = ['normal', 'jump']) {
  const { page } = s;
  await page.evaluate(domTools);
  record.metrics.checked = { normal: 0, jump: 0 };
  record.metrics.excluded = 'display:none, hidden/inert/aria-hidden and closed details answers. State-dependent Back/approval controls are tested in interaction. Story content is reached through its declared scroll interval; every finding card is activated via its real dot button.';
  record.metrics.deferred = [];
  for (const mode of modes) {
    if (mode === 'jump') {
      // A fresh reveal state is essential: a normal sweep must not pre-reveal
      // content and accidentally hide a first-jump IntersectionObserver defect.
      await page.evaluate(() => sessionStorage.removeItem('usha-awake'));
      record.metrics.jumpWake = await wake(page, new URL(page.url()).origin, cell.lang);
      await page.evaluate(domTools);
    }
    await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
    for (const id of sections) {
      console.log(`VISIBILITY  ${cell.id} ${mode} ${id}`);
      if (mode === 'normal') {
        const target = await page.locator('#' + id).evaluate(el => el.offsetTop);
        await wheelTo(page, target, s.cdp);
        await settle(page);
      } else await goSection(page, id, { anchor: true });
      const candidates = await page.evaluate(id => window.__qaDOM.candidates(document.getElementById(id)).map(el => {
        const cue = el.closest('[data-in]'), item = el.closest('.fitem');
        let target;
        if (cue) {
          const [chapter, start, end] = cue.dataset.in.split(',').map(Number);
          const section = document.querySelectorAll('main > section.ch')[chapter];
          target = section.offsetTop + Math.max(0, section.offsetHeight - innerHeight) * ((Math.max(0, start) + end) / 2);
        }
        return { selector: window.__qaDOM.selector(el), interaction: el.matches('#bback,.xw-ok,.xw-yes,.xw-no'), cue: !!cue, target, item: item ? [...item.parentElement.children].indexOf(item) : -1, timed: el.matches('.x-foot') };
      }), id);
      console.log(`ELEMENTS    ${cell.id} ${mode} ${id}: ${candidates.length}`);
      let activeCue;
      for (const state of candidates) {
        const { selector } = state;
        try {
          if (process.env.QA_DEBUG) console.log(`ELEMENT     ${cell.id} ${mode} ${selector}`);
          if (state.interaction) { record.metrics.deferred.push({ selector, mode, testedBy: 'interaction: brief/approval state transitions' }); continue; }
          const cueKey = state.cue ? `${state.target}:${state.item}` : null;
          if (state.cue && cueKey !== activeCue) {
            const target = state.target;
            if (mode === 'normal') {
              const approach = await wheelTo(page, target, s.cdp);
              await record.check(approach.reached, 'Normal wheel input did not reach the content activation interval', { section: id, selector, ...approach });
            } else {
              await page.mouse.move(15, page.viewportSize().height * .7);
              await page.mouse.wheel(0, target - await page.evaluate(() => scrollY));
            }
            await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
            if (state.item >= 0) {
              await qaClick(page.locator('#fdots button').nth(state.item), { noWaitAfter: true });
              await settle(page, 750);
            }
          }
          activeCue = cueKey;
          await page.evaluate(waitForReveal, { selector, cue: state.cue });
          const read = () => page.evaluate(selector => window.__qaDOM.visible(document.querySelector(selector)), selector);
          let detail = await read();
          if (state.timed) {
            // The footer appears at the end of the documented automatic 8→1 cycle.
            try { await page.waitForFunction(selector => window.__qaDOM.visible(document.querySelector(selector)).opacity >= .9, selector, {timeout: 12000}); }
            catch { /* retain the measured failure below */ }
            detail = await read();
          }
          // Large cards are inspected through their own heading, paragraph and CTA.
          detail.reasons = detail.reasons.filter(reason => reason !== 'under fixed header');
          record.metrics.checked[mode]++;
          if (detail.reasons.length) await record.fail(`${mode}: ${detail.reasons.join('; ')}`, { section: id, mode, ...detail });
        } catch (error) {
          activeCue = null;
          await record.fail(`${mode}: could not inspect content`, { section: id, mode, selector, error: error.message });
        }
      }
    }
  }
}

export async function layout(s, cell, record, { smoke = false } = {}) {
  const { page } = s;
  await page.evaluate(domTools);
  record.metrics.sections = [];
  for (const id of (smoke ? ['hero', 'plans', 'faqs'] : SECTIONS)) {
    console.log(`LAYOUT      ${cell.id} ${id}`);
    await goSection(page, id, { anchor: true });
    const result = await page.evaluate(id => {
      const root = document.getElementById(id), q = window.__qaDOM;
      const texts = q.textRects(root), overlaps = [];
      for (let a = 0; a < texts.length; a++) for (let b = a + 1; b < texts.length; b++) {
        const x = document.querySelector(texts[a].selector), y = document.querySelector(texts[b].selector);
        if (x.contains(y) || y.contains(x)) continue;
        if (texts[a].rects.some(r => texts[b].rects.some(t => Math.min(r.right, t.right) - Math.max(r.left, t.left) > 3 && Math.min(r.bottom, t.bottom) - Math.max(r.top, t.top) > 3))) overlaps.push([texts[a].selector, texts[b].selector]);
      }
      const heading = root.querySelector('h1,h2'), hr = heading?.getBoundingClientRect(), header = document.querySelector('#hdr').getBoundingClientRect();
      return { width: innerWidth, scrollWidth: document.documentElement.scrollWidth, direction: getComputedStyle(root).direction, overlaps, headingUnderHeader: hr && q.visible(heading).opacity >= .9 && hr.top < header.bottom - 2 && hr.bottom > header.top, heading: heading && q.selector(heading), texts };
    }, id);
    record.metrics.sections.push({ section: id, ...result, texts: undefined });
    await record.check(result.scrollWidth <= result.width + 1, 'Horizontal document overflow', { section: id, ...result, texts: undefined });
    await record.check(!result.headingUnderHeader, 'Anchor target heading is under the fixed header', { section: id, selector: result.heading });
    for (const selectors of result.overlaps) await record.fail('Text blocks overlap', { section: id, selectors });
    if (cell.lang === 'ar') await record.check(result.direction === 'rtl', 'Arabic section is not RTL', { section: id, direction: result.direction });
    // The canvas covers the entire viewport. Its DOM rectangle is NOT the character.
    // Use the site's real 3D raycast hit state while moving over actual text glyphs.
    for (const text of (smoke ? [] : result.texts)) {
      let hit = false;
      for (const rect of text.rects.slice(0, 3)) {
        await page.mouse.move(rect.left + rect.width / 2, rect.top + rect.height / 2);
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        if (await page.evaluate(() => document.body.classList.contains('hot'))) { hit = true; break; }
      }
      if (hit) await record.fail('USHA character intersects text (3D raycast at a text rectangle)', { section: id, selector: text.selector });
    }
  }
  if (cell.lang === 'ar') {
    const rtl = await page.evaluate(() => ({ root: document.documentElement.dir, arrows: [...document.querySelectorAll('.t3-go-a')].map(el => el.textContent.trim()), numbers: [...document.querySelectorAll('[dir=ltr]')].filter(el => /\d/.test(el.textContent)).map(el => ({ text: el.textContent.slice(0, 80), direction: getComputedStyle(el).direction, width: el.getBoundingClientRect().width, scrollWidth: el.scrollWidth })) }));
    record.metrics.rtl = rtl;
    await record.check(rtl.root === 'rtl' && rtl.arrows.every(a => a === '←'), 'Arabic root direction or directional CTA arrow is wrong', rtl);
    for (const n of rtl.numbers) await record.check(n.direction === 'ltr' && (!n.width || n.scrollWidth <= n.width + 2), 'Arabic LTR number is misaligned/clipped', n);
    record.notes.push('RTL checked using section direction, directional CTA/story arrows, LTR numeric runs, text geometry and screenshots. Linguistic correctness still requires a fluent reader.');
  }
}

export async function visual(s, cell, record, baseline) {
  const { page } = s;
  record.metrics.threshold = { pixelmatch: .25, maxDifferentPixelRatio: .02 };
  record.metrics.sections = [];
  if (!baseline) {
    let manifest;
    try { manifest = JSON.parse(await fs.readFile(path.join(QA, 'baseline/manifest.json'), 'utf8')); }
    catch { await record.fail('Missing CI baseline manifest; record the reference on Linux CI'); return; }
    record.metrics.baseline = { sourceCommit: manifest.build?.sourceCommit, sourceHash: manifest.build?.sourceHash, platform: manifest.platform };
    if (!manifest.platform?.startsWith('linux ') || !manifest.capturedCells?.includes(cell.id) || manifest.browsers?.[cell.browser]?.version !== s.browser.version()) {
      await record.fail('Incompatible or incomplete CI baseline', { reference: record.metrics.baseline, browserVersion: s.browser.version() }); return;
    }
  }
  const checkpoint = async () => {
    if (!baseline || record.metrics.sections.length === SECTIONS.length) return;
    const status = record.status; record.status = 'NOT RUN'; await record.save(); record.status = status;
  };
  for (const id of SECTIONS) {
    console.log(`CAPTURE     ${cell.id} ${id}`);
    await goSection(page, id);
    await page.mouse.move(0, 0);
    if (s.visualClock) await visualTicks(page, 2500);
    else await settle(page, 500);
    const filename = path.join(QA, 'baseline', cell.id, `${id}.png`);
    const current = await page.screenshot({ animations: 'disabled', caret: 'hide', scale: 'css', timeout: 60000 });
    if (baseline) {
      await fs.mkdir(path.dirname(filename), { recursive: true }); await fs.writeFile(filename, current);
      record.metrics.sections.push({ section: id, status: 'RECORDED', screenshot: `../baseline/${cell.id}/${id}.png` }); await checkpoint(); continue;
    }
    let expected;
    try { expected = PNG.sync.read(await fs.readFile(filename)); }
    catch { await record.fail('Missing baseline; record and review it explicitly', { section: id }); continue; }
    const actual = PNG.sync.read(current);
    if (actual.width !== expected.width || actual.height !== expected.height) { await record.fail('Screenshot dimensions changed', { section: id, actual: [actual.width, actual.height], expected: [expected.width, expected.height] }); continue; }
    const diff = new PNG({ width: actual.width, height: actual.height });
    const pixels = pixelmatch(expected.data, actual.data, diff.data, actual.width, actual.height, { threshold: .25 });
    const ratio = pixels / (actual.width * actual.height);
    record.metrics.sections.push({ section: id, ratio, status: ratio > .02 ? 'FAIL' : baseline ? 'RECORDED' : 'PASS', ...(baseline ? { preserved: true, screenshot: `../baseline/${cell.id}/${id}.png` } : {}) });
    if (ratio > .02) {
      const folder = path.join(QA, 'report/evidence', cell.id); await fs.mkdir(folder, { recursive: true });
      await fs.writeFile(path.join(folder, `diff-${id}.png`), PNG.sync.write(diff));
      await fs.writeFile(path.join(folder, `actual-${id}.png`), current);
      await fs.copyFile(filename, path.join(folder, `expected-${id}.png`));
      await record.fail(`Visual change: ${id} (${(ratio * 100).toFixed(2)}% pixels)`, { section: id, ratio, expected: `evidence/${cell.id}/expected-${id}.png`, diff: `evidence/${cell.id}/diff-${id}.png` }, `evidence/${cell.id}/actual-${id}.png`);
    }
    await checkpoint();
  }
  record.notes.push('CSS-pixel viewport checkpoints at the configured browser DPR. Visual-only fixture seeds Math.random and advances the browser clock in 250 ms steps after real input; the canvas and reveal logic remain intact. CSS animations are disabled only during capture. Performance/memory use independent real-time sessions. Renderer/font differences can still cause diffs.');
}
