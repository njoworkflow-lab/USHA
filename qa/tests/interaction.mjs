import { click as qaClick, doubleClick as qaDoubleClick } from '../lib/input.mjs';
import { LANGUAGES, isPhone, SECTIONS } from '../lib/config.mjs';
import { visibility } from './content.mjs';
import { afterNavigation, closePopups, goSection, resetLanguage, settle } from '../lib/browser.mjs';
import { POPUPS, openPopup, closePopup } from './performance.mjs';
import { domTools } from '../lib/dom.mjs';

async function step(record, name, fn) {
  console.log(`INTERACTION ${record.id} ${name}`);
  try { await fn(); record.metrics.steps.push({ name, completed: true }); }
  catch (error) { record.metrics.steps.push({ name, completed: false }); await record.fail(`${name}: ${error.message}`); }
}
async function trap(page, root, record, name) {
  const focusable = page.locator(`${root} button:visible:not([disabled]), ${root} a[href]:visible, ${root} input:visible, ${root} select:visible, ${root} textarea:visible, ${root} [tabindex="0"]:visible`);
  if (!(await focusable.count())) { await record.fail(`${name}: dialog has no focusable controls`); return; }
  await focusable.last().focus(); await page.keyboard.press('Tab');
  await record.check(await page.locator(root).evaluate(el => el.contains(document.activeElement)), `${name}: forward Tab escapes the dialog`);
  await focusable.first().focus(); await page.keyboard.press('Shift+Tab');
  await record.check(await page.locator(root).evaluate(el => el.contains(document.activeElement)), `${name}: reverse Tab escapes the dialog`);
}
async function waitClosed(page, popup, record, method) {
  try { await page.locator(popup.root).waitFor({ state: 'hidden', timeout: 5000 }); }
  catch { await record.fail(`${popup.name}: ${method} did not close the popup within 5 s`); }
}
async function movingChipClick(page, chip, touch) {
  await chip.evaluate(el => el.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'instant' }));
  const r = await chip.boundingBox();
  if (!r) throw new Error('Scenario chip has no layout box');
  // Native input also fires the row's pointerdown/touchstart auto-scroll pause.
  // Unlike force:true, this still hits whatever is actually under the pointer.
  if (touch) await page.touchscreen.tap(r.x + r.width / 2, r.y + r.height / 2);
  else await page.mouse.click(r.x + r.width / 2, r.y + r.height / 2);
}
export async function prepareBriefStep(page, wanted) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const current = await page.evaluate(() => Number(document.querySelector('#bstep')?.textContent));
    if (current === wanted) return;
    if (![1, 2, 3].includes(current)) throw new Error(`Brief has no usable step: ${current}`);
    if (current > wanted) await qaClick(page.locator('#bback'));
    else await qaClick(page.locator('#bq1 button').first());
    await page.waitForFunction(previous => Number(document.querySelector('#bstep')?.textContent) !== previous, current, { polling: 100 });
  }
  throw new Error(`Brief could not reach step ${wanted}`);
}
export async function interactions(s, cell, record, origin) {
  const { page, log } = s;
  record.metrics.steps = [];
  await page.evaluate(domTools);
  record.metrics.inventory = await page.evaluate(() => [...document.querySelectorAll('a,button,summary,[role=tab],[role=slider]')].filter(window.__qaDOM.eligible).map(el => ({ selector: window.__qaDOM.selector(el), tag: el.tagName, text: el.textContent.trim().slice(0, 70), href: el.getAttribute('href') })));
  await step(record, 'Hero live-chat CTA and global sound switch', async () => {
    await goSection(page, 'hero'); await qaClick(page.locator('.xl-hero'));
    await record.check(await page.locator('.x-live').isVisible(), 'Hero live CTA did not open chat');
    await closePopups(page);
    const before = await page.locator('#snd').evaluate(el => el.classList.contains('on'));
    await qaClick(page.locator('#snd'));
    await record.check(await page.locator('#snd').evaluate(el => el.classList.contains('on')) !== before, 'Global sound switch did not toggle');
    await qaClick(page.locator('#snd'));
  });
  for (const popup of POPUPS) {
    await step(record, `${popup.name}: close, Esc, focus trap, backdrop, restore`, async () => {
      const { scrollBefore: y } = await openPopup(page, popup);
      await trap(page, popup.root, record, popup.name);
      await page.keyboard.press('Escape'); await settle(page, 500);
      await waitClosed(page, popup, record, 'Escape');
      await record.check(Math.abs(await page.evaluate(() => scrollY) - y) <= 3, `${popup.name}: scroll position was not restored`);
      await record.check(await page.locator(popup.opener).first().evaluate(el => el === document.activeElement), `${popup.name}: focus did not return to the opener`);
      await closePopups(page);
      await openPopup(page, popup);
      const scrim = page.locator(`${popup.root} .xm-scrim, ${popup.root} .t3-mscrim`);
      if (await scrim.count() && !isPhone(cell)) {
        await qaClick(scrim, { position: { x: 2, y: 2 } }); await settle(page, 500);
        await waitClosed(page, popup, record, 'Backdrop');
      } else record.notes.push(`${popup.name}: fullscreen presentation has no exposed backdrop at this viewport; close and Escape exercised.`);
      await closePopups(page);
      await openPopup(page, popup);
      await qaClick(page.locator(`${popup.root} ${popup.close}`)); await settle(page, 500);
      await waitClosed(page, popup, record, 'Close button');
    });
    await closePopups(page);
  }
  await step(record, 'Scenario chips change the conversation', async () => {
    await openPopup(page, POPUPS[0]);
    const chips = page.locator('.t3-sc-chips button:not(.x-clone)');
    await record.check(await chips.count() > 0, 'No scenario chips found');
    for (let i = 0; i < await chips.count(); i++) {
      const before = await page.locator('.t3-sc-chat').innerText();
      const wasOn = await chips.nth(i).evaluate(el => el.classList.contains('on'));
      await movingChipClick(page, chips.nth(i), isPhone(cell));
      await record.check(await chips.nth(i).evaluate(el => el.classList.contains('on')), 'Scenario chip did not activate', { index: i });
      await page.locator('.t3-sc-chat .ill').waitFor({ state: 'visible', timeout: 20000 });
      if (!wasOn) await record.check((await page.locator('.t3-sc-chat').innerText()) !== before, 'Scenario chip did not update the conversation', { index: i });
      await record.check((await page.locator('.t3-sc-chat .ans').innerText()).trim().length > 20, 'Scenario has no completed answer', { index: i });
      const week = page.locator('#wkbtn');
      if (await week.count()) {
        await qaClick(week);
        for (const day of await page.locator('#week .days button').all()) { await qaClick(day); await record.check(await day.evaluate(el => el.classList.contains('on')), 'Scenario day tab did not select'); }
        await qaClick(week);
      }
      await movingChipClick(page, chips.nth(i), isPhone(cell));
      await movingChipClick(page, chips.nth(i), isPhone(cell));
    }
    await closePopups(page);
  });
  await closePopups(page);
  await step(record, 'Forecast tabs, slider and both videos', async () => {
    await openPopup(page, POPUPS[1]);
    const tabs = page.locator('.t3-modal:not([hidden]) [role=tab]'), count = await tabs.count();
    await record.check(count > 1, 'No forecast tabs found');
    for (let i = 0; i < count; i++) {
      await qaClick(tabs.nth(i)); await settle(page, 350);
      await record.check(await tabs.nth(i).getAttribute('aria-selected') === 'true', 'Forecast tab did not select', { index: i });
      const slider = page.locator('.t3-modal:not([hidden]) [role=slider]');
      if (await slider.count()) {
        await slider.focus(); const before = await slider.getAttribute('aria-valuenow');
        await page.keyboard.press('ArrowRight');
        await record.check(await slider.getAttribute('aria-valuenow') !== before, 'Comparison slider does not respond to keyboard', { index: i });
      }
      await qaDoubleClick(tabs.nth(i));
    }
    for (const play of await page.locator('.t3-modal:not([hidden]) .t3-vplay').all()) {
      await qaClick(play); await settle(page, 600);
      const state = await play.evaluate(el => { const v = el.parentElement.querySelector('video'); return { paused: v.paused, error: v.error?.message, time: v.currentTime }; });
      await record.check(!state.paused && !state.error, 'Example video did not start', state);
    }
    await closePopups(page);
    await record.check(await page.locator('video').evaluateAll(vs => vs.every(v => v.paused)), 'A video kept playing after closing its popup');
  });
  await closePopups(page);
  await step(record, 'Story chapters, navigation, sound and RTL arrows', async () => {
    await openPopup(page, POPUPS.find(p => p.name === 'story'));
    const dots = page.locator('.ns-dot'), count = await dots.count();
    for (let i = 0; i < count; i++) {
      try { await qaClick(dots.nth(i), { timeout: 60000, noWaitAfter: true }); }
      catch (error) {
        const hitTest = await page.evaluate(index => {
          const el = document.querySelector(`.ns-dot[data-i="${index}"]`), r = el.getBoundingClientRect();
          const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
          return { selected: el.getAttribute('aria-current'), receivesPointer: !!hit && (hit === el || el.contains(hit)), hit: hit?.outerHTML.slice(0, 400), rect: r.toJSON() };
        }, i);
        await record.fail('Story chapter dot is obstructed or not clickable', { chapter: i + 1, selector: `.ns-dot[data-i="${i}"]`, error: error.message, hitTest });
        if (i) await page.keyboard.press(cell.lang === 'ar' ? 'ArrowLeft' : 'ArrowRight');
      }
      await record.check(await dots.nth(i).getAttribute('aria-current') === 'step', 'Story did not reach the requested chapter', { chapter: i + 1 });
      await record.check((await page.locator('.ns-h').innerText()).trim().length > 0, 'Story chapter is empty', { chapter: i + 1 });
    }
    await qaClick(page.locator('.ns-prev')); const before = await page.locator('.ns-h').innerText();
    await page.keyboard.press(cell.lang === 'ar' ? 'ArrowLeft' : 'ArrowRight');
    await record.check(await page.locator('.ns-h').innerText() !== before, 'Story keyboard navigation did not advance');
    await qaClick(page.locator('.ns-mu')); await record.check(await page.locator('.ns-mu').getAttribute('aria-pressed') === 'false', 'Story sound did not mute');
    if (cell.lang === 'ar') await record.check(await page.locator('.ns-next svg').evaluate(el => getComputedStyle(el).transform.startsWith('matrix(-1')), 'Story next arrow is not mirrored for Arabic');
    await closePopups(page);
  });
  await closePopups(page);
  await step(record, 'Core/Pro toggles update quantities', async () => {
    await goSection(page, 'month');
    const states = [];
    for (const value of ['0', '1']) {
      await qaClick(page.locator(`#mtog button[data-p="${value}"]`)); await settle(page, 1000);
      states.push(await page.locator('#areas .nums').allTextContents());
      await record.check(await page.locator(`#mtog button[data-p="${value}"]`).evaluate(el => el.classList.contains('on')), `Plan toggle ${value} not selected`);
    }
    await record.check(JSON.stringify(states[0]) !== JSON.stringify(states[1]), 'Core and Pro show identical quantities');
  });
  await step(record, 'Comparison tabs and approval buttons', async () => {
    for (const tab of await page.locator('.vs-tabs button').all()) { await qaClick(tab); await record.check(await tab.getAttribute('aria-selected') === 'true', 'Comparison tab did not select'); }
    await page.locator('.xw-no').evaluate(el => el.scrollIntoView({block:'center'}));
    await settle(page, 6500); // Let the automatic demonstration finish first.
    await page.waitForFunction(() => !document.querySelector('.xw-ask').classList.contains('ok'), null, {timeout: 12000});
    await qaDoubleClick(page.locator('.xw-no')); await settle(page, 700);
    await qaDoubleClick(page.locator('.xw-yes')); await settle(page, 800);
    const approval = await page.locator('.xw-ok').evaluate(el => window.__qaDOM.visible(el));
    await record.check(!approval.reasons.length, 'Approval confirmation is not readable', approval);
  });
  await step(record, 'Every FAQ opens and closes', async () => {
    for (const summary of await page.locator('#faq summary').all()) {
      await qaClick(summary); await settle(page, 500);
      await record.check(await summary.evaluate(el => el.parentElement.open), 'FAQ did not open');
      await record.check(await summary.evaluate(el => el.parentElement.querySelector('p').getBoundingClientRect().height > 0), 'FAQ answer has no height');
      for (const answer of await summary.locator('..').locator('p').all()) {
        await answer.evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
        await settle(page, 500);
        const detail = await answer.evaluate(el => window.__qaDOM.visible(el));
        await record.check(!detail.reasons.length, 'Opened FAQ answer is not readable', detail);
      }
      await qaClick(summary); await settle(page, 400);
      await record.check(!await summary.evaluate(el => el.parentElement.open), 'FAQ did not close');
    }
  });
  await step(record, 'Live chat validation and mocked conversation', async () => {
    await openPopup(page, POPUPS.find(p => p.name === 'live-chat'));
    await page.locator('.xl-form').waitFor();
    const registrations = () => log.mocked.filter(r => r.path === '/api/register').length;
    const initial = registrations();
    await qaClick(page.locator('.xl-form [type=submit]'));
    await record.check(await page.locator('.xl-f.bad').count() >= 7, 'Empty live form did not validate all required fields');
    await record.check(registrations() === initial, 'Empty form attempted registration');
    await page.locator('#xl-email').fill('invalid'); await page.locator('#xl-phone').fill('abc');
    await qaClick(page.locator('.xl-form [type=submit]'));
    await record.check(await page.locator('[data-f=email].bad').count() === 1 && await page.locator('[data-f=phone].bad').count() === 1, 'Invalid email/phone did not show field errors');
    await page.locator('#xl-name').fill('QA Visitor'); await page.locator('#xl-business').fill('Local QA Fixture');
    await page.locator('#xl-email').fill('qa@example.test'); await page.locator('[name=country]').selectOption('US'); await page.locator('#xl-phone').fill('2025550146');
    for (const name of ['size', 'industry', 'market']) await page.locator(`#xl-${name}`).selectOption({ index: 1 });
    await qaClick(page.locator('.xl-form [type=submit]'));
    await page.locator('.xl-in textarea').waitFor();
    await page.locator('.xl-in textarea').fill('A local test message.'); await qaClick(page.locator('.xl-in [type=submit]'));
    await page.getByText('Local QA reply. No server was contacted.', { exact: true }).waitFor();
    await record.check(log.mocked.some(r => r.path === '/api/register') && log.mocked.some(r => r.path === '/api/chat'), 'Expected mock API requests were not observed');
    record.metrics.chatRequests = log.mocked;
    await closePopups(page);
  });
  await closePopups(page);
  await step(record, 'Free-week brief, back navigation and local export', async () => {
    await goSection(page, 'free');
    // This form prepares text and contact links locally. It has no submission API.
    if (!await page.locator('#brief').isVisible()) {
      record.notes.push('The legacy #brief is intentionally replaced by the current free-week CTA; its hidden controls are not user-facing.');
      return;
    }
    await qaClick(page.locator('#bnext'));
    await record.check(await page.locator('#bstep').innerText() === '1', 'Empty brief advanced without a business choice');
    for (let i = 0; i < await page.locator('#bq1 button').count(); i++) {
      await qaClick(page.locator('#bq1 button').nth(i));
      await page.waitForFunction(() => document.querySelector('#bstep').textContent === '2');
      await qaDoubleClick(page.locator('#bback'));
    }
    await qaClick(page.locator('#bq1 button').first()); await page.waitForFunction(() => document.querySelector('#bstep').textContent === '2');
    await record.check(await page.locator('#bstep').innerText() === '2', 'Brief did not reach step 2');
    await qaClick(page.locator('#bback')); await record.check(await page.locator('#bstep').innerText() === '1', 'Brief back button failed');
    await qaClick(page.locator('#bnext'));
    for (let i = 0; i < await page.locator('#bq2 button').count(); i++) {
      await qaClick(page.locator('#bq2 button').nth(i));
      await page.waitForFunction(() => document.querySelector('#bstep').textContent === '3');
      await qaClick(page.locator('#bback'));
    }
    await qaClick(page.locator('#bq2 button').first()); await page.waitForFunction(() => document.querySelector('#bstep').textContent === '3');
    await page.locator('#bname').fill('QA Visitor'); await page.locator('#bco').fill('Local QA Fixture'); await page.locator('#bct').fill('qa@example.test');
    await qaClick(page.locator('#bnext'));
    await record.check(await page.locator('#bdone').isVisible(), 'Completed brief has no export state');
    await record.check((await page.locator('#btg').getAttribute('href'))?.startsWith('https://t.me/'), 'Brief Telegram export is missing');
    await record.check((await page.locator('#bmail').getAttribute('href'))?.startsWith('mailto:'), 'Brief mail export is missing');
    await qaClick(page.locator('#bcopy'));
  });
  await step(record, 'Game start, pause, resume and exit', async () => {
    await qaClick(page.locator('#gstart'));
    await record.check(await page.locator('html').evaluate(el => el.classList.contains('gaming')), 'Game did not start');
    await qaClick(page.locator('#gpause')); await record.check(await page.locator('#brk').evaluate(el => el.classList.contains('on')), 'Game did not pause');
    await qaClick(page.locator('#gresume')); await record.check(!await page.locator('#brk').evaluate(el => el.classList.contains('on')), 'Game did not resume');
    await qaClick(page.locator('#gleave')); await record.check(!await page.locator('html').evaluate(el => el.classList.contains('gaming')), 'Game did not exit');
  });
  await closePopups(page);
  await step(record, 'All links resolve safely and anchor CTAs activate', async () => {
    const links = await page.locator('a[href]').evaluateAll(as => as.map(a => ({ href: a.getAttribute('href'), target: a.target, rel: a.rel })));
    record.metrics.links = links;
    for (const link of links) {
      const url = new URL(link.href, origin);
      await record.check(['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol), 'Unsupported link protocol', link);
      if (link.href.startsWith('#') && link.href.length > 1) await record.check(await page.locator(link.href).count() > 0, 'Broken anchor target', link);
      else if ([new URL(origin).hostname, 'usha.one'].includes(url.hostname)) {
        const response = await fetch(origin + url.pathname); await record.check(response.status === 200, 'Internal link is broken', { ...link, status: response.status });
      }
    }
    const anchors = await page.locator('a[href^="#"]:visible').evaluateAll(as => as.map(a => window.__qaDOM.selector(a)));
    for (const selector of anchors) {
      const a = page.locator(selector), href = await a.getAttribute('href');
      await qaClick(a); await settle(page, 700);
      const target = href === '#' ? '#hero' : href;
      await record.check(await page.locator(target).evaluate(el => { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; }), 'Anchor did not scroll to its target', { selector, href });
    }
    record.notes.push('External destination availability is not probed; URLs/rel are checked and all external navigation is blocked. No messages or contact forms leave this fixture.');
  });
  await step(record, 'Language switch and browser history', async () => {
    for (const lang of ['ru', 'en', 'ar']) {
      if (lang === await page.locator('html').getAttribute('lang')) continue;
      await Promise.all([page.waitForURL(url => url.pathname === LANGUAGES[lang]), qaClick(page.locator(`.lang button[data-l="${lang}"]`))]);
      await record.check(await page.locator('html').getAttribute('lang') === lang, 'Language button did not change document language', { lang });
    }
    const last = page.url(); await page.goBack(); const previous = page.url(); await page.goForward();
    await record.check(previous !== last && page.url() === last, 'Back/forward did not restore the language URL');
  });
  await resetLanguage(page, origin, cell.lang);
}

// PR coverage is intentionally bounded; exhaustive chapters, games, language
// history, stress and repeated popup cycles belong to the full run.
export async function smokeInteractions(s, cell, record) {
  const { page } = s;
  record.metrics.steps = [];
  for (const popup of POPUPS.filter(p => ['scenario', 'core', 'live-chat'].includes(p.name))) {
    await step(record, `${popup.name}: open, focus trap and close`, async () => {
      await openPopup(page, popup);
      await trap(page, popup.root, record, popup.name);
      const tabs = page.locator(`${popup.root} [role=tab]`);
      for (const tab of await tabs.all()) {
        await qaClick(tab);
        await record.check(await tab.getAttribute('aria-selected') === 'true', `${popup.name}: tab did not activate`);
      }
      await closePopup(page, popup, { timeout: 5000 });
    });
    await closePopups(page);
  }
  await step(record, 'FAQ disclosure toggles', async () => {
    const faq = page.locator('#faqs details').first();
    await qaClick(faq.locator('summary'));
    await record.check(await faq.getAttribute('open') !== null, 'FAQ did not open');
    await qaClick(faq.locator('summary'));
    await record.check(await faq.getAttribute('open') === null, 'FAQ did not close');
  });
}

export async function stress(s, cell, record, origin) {
  const { page } = s;
  record.metrics.steps = [];
  const initial = page.viewportSize();
  await step(record, 'Rapid breakpoint resize and orientation', async () => {
    for (let cycle = 0; cycle < 3; cycle++) for (const width of [360, 600, 760, 900, 1024, 1280, 1440]) await page.setViewportSize({ width, height: initial.height });
    for (let i = 0; i < 4; i++) { await page.setViewportSize({ width: initial.height, height: initial.width }); await page.setViewportSize(initial); }
    await settle(page, 1000);
    await record.check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Horizontal overflow after resize/orientation');
  });
  await step(record, 'Spam taps on the rendered character', async () => {
    await goSection(page, 'hero');
    // Locate the actual mesh with the same raycast used by the website.
    let point;
    const candidates = [];
    for (const fraction of [cell.lang === 'ar' ? .25 : .75, .5, cell.lang === 'ar' ? .75 : .25]) {
      for (const height of [.5, .65, .35, .8, .2]) candidates.push({ x: Math.round(initial.width * fraction), y: Math.round(initial.height * height) });
    }
    for (let x = 40; x < initial.width; x += Math.max(40, Math.floor(initial.width / 10))) for (let y = 100; y < initial.height; y += 60) candidates.push({ x, y });
    for (const candidate of candidates) {
      const tappable = await page.evaluate(({x, y}) => {
        const el = document.elementFromPoint(x, y);
        return !!el && !el.closest('a,button,input,textarea,select,label,summary,header,.hero-t,.n-t,.s-t,.fcard,.x-modal') && (el.id === 'gl' || !!el.closest('#hero,#noise,#signal'));
      }, candidate);
      if (!tappable) continue;
      await page.mouse.move(candidate.x, candidate.y);
      // A fixed 35 ms delay can read a stale hit under low FPS. Observe two real
      // frames before trusting the app's raycast, then send actual input.
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      if (await page.locator('body').evaluate(el => el.classList.contains('hot'))) { point = candidate; break; }
    }
    await record.check(!!point, 'Could not locate a tappable USHA character');
    if (point) for (let i = 0; i < 35; i++) {
      if (isPhone(cell)) await page.touchscreen.tap(point.x, point.y); else await page.mouse.click(point.x, point.y);
    }
    await record.check(await page.evaluate(() => !getSelection()?.toString()), 'Character tap spam selected page text');
  });
  await step(record, 'Double-click controls', async () => {
    await page.evaluate(domTools);
    const selectors = await page.evaluate(() => {
      const selectors = [...document.querySelectorAll('main button, main summary, main a[href], #hdr a[href], #hdr button, footer a[href], #snd')].filter(window.__qaDOM.eligible).filter(el => !el.matches('#bback,.xw-yes,.xw-no')).map(window.__qaDOM.selector);
      if (selectors.some(selector => selector.startsWith('#bq1 >'))) {
        const secondStep = [...document.querySelectorAll('#bq2 button')].map(window.__qaDOM.selector);
        const next = selectors.indexOf('#bnext');
        selectors.splice(next < 0 ? selectors.length : next, 0, ...secondStep);
      }
      return selectors;
    });
    record.notes.push('Back and approval double-clicks are exercised in their active states by the interaction audit.');
    record.metrics.doubleClicks = [];
    for (const selector of selectors) {
      if (process.env.QA_DEBUG) console.log(`DOUBLE      ${cell.id} ${selector}`);
      const blockedBefore = s.log.blocked.length;
      try {
        if (selector.startsWith('#bq1 >')) await prepareBriefStep(page, 1);
        if (selector.startsWith('#bq2 >')) await prepareBriefStep(page, 2);
        const control = page.locator(selector);
        const activation = await control.evaluate(el => {
          const cue = el.closest('[data-in]'); if (!cue) return null;
          const [chapter, start, end] = cue.dataset.in.split(',').map(Number);
          const section = document.querySelectorAll('main > section.ch')[chapter];
          return section.offsetTop + Math.max(0, section.offsetHeight - innerHeight) * ((Math.max(0, start) + end) / 2);
        });
        if (activation !== null) await page.evaluate(top => scrollTo({top, behavior:'instant'}), activation);
        else await control.evaluate(el => el.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' }));
        await settle(page, 1400); await qaDoubleClick(control, { timeout: 60000 });
        if (selector.startsWith('#bq1 >') || selector.startsWith('#bq2 >')) {
          const expected = selector.startsWith('#bq1 >') ? 2 : 3;
          await page.waitForFunction(expected => Number(document.querySelector('#bstep')?.textContent) === expected, expected, { polling: 100 });
          await settle(page, 350); // The app schedules step changes after 260 ms.
        }
        record.metrics.doubleClicks.push({ selector, status: 'exercised' });
      } catch (e) {
        if (s.log.blocked.slice(blockedBefore).some(request => request.intentional)) record.metrics.doubleClicks.push({selector, status:'external navigation intercepted'});
        else await record.fail('Control could not be double-clicked', { selector, error: e.message.split('\n')[0] });
      }
      for (const popup of s.context.pages()) if (popup !== page) await popup.close();
      await afterNavigation(page, async () => {
        const currentLanguage = await page.evaluate(() => document.documentElement.lang);
        if (new URL(page.url()).origin !== origin || new URL(page.url()).pathname !== LANGUAGES[cell.lang] || currentLanguage !== cell.lang) { await resetLanguage(page, origin, cell.lang); await page.evaluate(domTools); }
        await closePopups(page);
      });
    }
  });
  await step(record, 'Reduced motion remains readable', async () => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(origin + LANGUAGES[cell.lang]); await settle(page, 1500);
    await page.evaluate(domTools);
    await visibility(s, cell, record, SECTIONS, ['jump']);
    record.metrics.reducedMotionElements = record.metrics.checked.jump;
    await page.emulateMedia({ reducedMotion: 'no-preference' }); await page.goto(origin + LANGUAGES[cell.lang]); await settle(page, 1000);
  });
  await page.setViewportSize(initial);
}
