import { click as qaClick } from './input.mjs';
import fs from 'node:fs';
import { chromium, firefox, webkit } from '@playwright/test';
import { contextOptions, FAST_3G, LANGUAGES } from './config.mjs';

export const engines = { chromium, firefox, webkit };
export async function visualTicks(page, ms) {
  // Deterministic checkpoints, not a frame-rate measurement. Advancing in 250 ms
  // steps preserves the app's capped delta clock and input state without running
  // hundreds of costly software-rendered intermediate frames per screenshot.
  for (let elapsed = 0; elapsed < ms; elapsed += 250) await page.clock.fastForward(Math.min(250, ms - elapsed));
}
export function launchOptions(name) {
  if (name !== 'chromium') return { headless: true };
  const executablePath = process.env.QA_CHROMIUM_PATH || (!fs.existsSync(chromium.executablePath()) && fs.existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);
  return { headless: true, executablePath, args: ['--enable-unsafe-swiftshader', '--disable-dev-shm-usage'] };
}
export async function discover() {
  const out = {};
  for (const [name, type] of Object.entries(engines)) {
    try { const b = await type.launch(launchOptions(name)); out[name] = { available: true, version: b.version(), executable: launchOptions(name).executablePath || type.executablePath() }; await b.close(); }
    catch (e) { out[name] = { available: false, reason: e.message.split('\n').slice(0, 5).join('\n') }; }
  }
  return out;
}
export function mockResponse(path, body = {}) {
  if (path === '/api/hello') return { region: 'allowed', invite: false };
  if (path === '/api/check') {
    if (body.field === 'email' && !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(body.email || '')) return { error: 'email_bad' };
    if (body.field === 'phone' && (!/^[\d\s()+-]+$/.test(body.phone || '') || (body.phone || '').replace(/\D/g, '').length < 6)) return { error: 'phone_bad' };
    return {};
  }
  if (path === '/api/register') return { status: 'ok', token: 'qa-local-only-session', name: 'QA Visitor', left: 5, team: false };
  if (path === '/api/session') return { name: 'QA Visitor', left: 5, brief: true, history: [] };
  if (path === '/api/rate') return { status: 'ok' };
  if (path === '/api/chat') return 'data: {"t":"Local QA reply. No server was contacted."}\n\ndata: {"done":true,"left":4,"kind":"answer"}\n\n';
  return null;
}
export async function guardNetwork(context, origin, log) {
  // Fail closed BEFORE creating any page. Includes popups and every HTTP method.
  // No live API hostname is trusted; even a future changed hostname is intercepted.
  await context.route('**/*', async route => {
    const request = route.request(), url = new URL(request.url());
    if (url.pathname.startsWith('/api/')) {
      let body = {}; try { body = request.postDataJSON() || {}; } catch {}
      const response = mockResponse(url.pathname, body);
      log.mocked.push({ path: url.pathname, method: request.method() });
      if (response === null) log.errors.push(`Unrecognised API endpoint blocked: ${url.pathname}`);
      await route.fulfill({ status: response === null ? 501 : 200, contentType: url.pathname === '/api/chat' ? 'text/event-stream' : 'application/json', headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'content-type,authorization,x-usha-device', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS' }, body: typeof response === 'string' ? response : JSON.stringify(response || { status: 'unmocked' }) });
      return;
    }
    if (url.origin === origin && ['GET', 'HEAD'].includes(request.method())) { await route.continue(); return; }
    if (url.hostname === 'challenges.cloudflare.com' && url.pathname === '/turnstile/v0/api.js') {
      log.mocked.push({ path: 'turnstile', method: 'GET' });
      await route.fulfill({ contentType: 'application/javascript', body: 'window.turnstile={render:(_box,options)=>{setTimeout(()=>options.callback("qa-mock-challenge"),0);return 1},reset:()=>{},remove:()=>{}};' });
      return;
    }
    if (['data:', 'blob:'].includes(url.protocol)) { await route.continue(); return; }
    log.blocked.push({ url: request.url(), method: request.method(), type: request.resourceType(), intentional: request.isNavigationRequest() });
    if (!request.isNavigationRequest()) log.errors.push(`Unexpected external request blocked: ${request.url()}`);
    await route.abort('blockedbyclient');
  });
  await context.routeWebSocket('**/*', socket => { log.errors.push(`WebSocket blocked: ${socket.url()}`); socket.close(); });
}
export async function observeContextLoss(context, log) {
  log.contextLoss ||= [];
  await context.exposeBinding('__qaRecordContextLoss', (_source, loss) => { log.contextLoss.push(loss); });
  await context.addInitScript(() => {
    document.addEventListener('webglcontextlost', event => {
      const loss = { id: event.target.id, time: performance.now(), url: location.href };
      window.__qa?.contextLoss.push(loss);
      // Keep the event outside the document: the app reloads after context loss.
      window.__qaRecordContextLoss(loss).catch(() => {});
    }, true);
  });
}
export async function session(cell, origin, { humanChat = false, throttle = true, visualClock = false } = {}) {
  const browser = await engines[cell.browser].launch(launchOptions(cell.browser));
  const context = await browser.newContext(contextOptions(cell));
  const log = { errors: [], warnings: [], failed: [], badStatus: [], mocked: [], blocked: [] };
  await guardNetwork(context, origin, log);
  await observeContextLoss(context, log);
  if (visualClock) await context.addInitScript(() => {
    let seed = 123456789;
    Math.random = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296; };
  });
  if (humanChat) await context.addInitScript(() => {
    // Only the local mocked chat path bypasses the site's automation/incognito gate.
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    if (navigator.storage) navigator.storage.estimate = async () => ({ quota: 100 * 1024 ** 3, usage: 0 });
  });
  await context.addInitScript(() => {
    window.__qa = { contextLoss: [], longtasks: [], recording: false, frames: [], helloPeak: 0 };
    if (PerformanceObserver.supportedEntryTypes?.includes('longtask')) {
      new PerformanceObserver(list => { if (window.__qa.recording) for (const e of list.getEntries()) window.__qa.longtasks.push({ startTime: e.startTime, duration: e.duration }); }).observe({ type: 'longtask', buffered: false });
    }
    let last;
    const frame = now => {
      const q = window.__qa;
      if (q.recording && last !== undefined) q.frames.push(now - last);
      last = q.recording ? now : undefined;
      const hello = document.getElementById('hey');
      if (hello) q.helloPeak = Math.max(q.helloPeak, Number(getComputedStyle(hello).opacity));
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  });
  context.on('page', p => {
    p.on('pageerror', e => log.errors.push(e.message));
    p.on('console', m => { if (m.type() === 'error') log.errors.push(m.text()); if (m.type() === 'warning') log.warnings.push(m.text()); });
    p.on('requestfailed', r => log.failed.push({ url: r.url(), reason: r.failure()?.errorText }));
    p.on('response', r => { if (r.status() >= 400) log.badStatus.push({ url: r.url(), status: r.status() }); });
  });
  const page = await context.newPage();
  if (visualClock) {
    await page.clock.install({ time: new Date('2026-01-01T00:00:00Z') });
    await page.clock.pauseAt(new Date('2026-01-01T00:00:01Z'));
  }
  // Automation budget, not a site-performance gate. Software rendering can
  // delay Playwright's post-action bookkeeping after an input already fired.
  page.setDefaultTimeout(60000); page.setDefaultNavigationTimeout(45000);
  let cdp;
  if (cell.browser === 'chromium') {
    cdp = await context.newCDPSession(page);
    await cdp.send('Performance.enable');
    if (cell.profile === 'android-low' && throttle) {
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
      await cdp.send('Network.enable'); await cdp.send('Network.emulateNetworkConditions', FAST_3G);
    }
  }
  return { browser, context, page, cdp, log, visualClock, close: () => browser.close() };
}
export async function wake(page, origin, lang, visualClock = false) {
  if (new URL(page.url()).origin === origin) {
    await afterNavigation(page, () => page.evaluate(lang => localStorage.setItem('usha-lang', lang), lang));
  }
  await page.goto(origin + LANGUAGES[lang], { waitUntil: 'load' });
  await page.waitForFunction(({ lang, pathname }) => document.documentElement.lang === lang && location.pathname === pathname, { lang, pathname: LANGUAGES[lang] }, { polling: 100 });
  await page.evaluate(() => document.fonts.ready);
  await page.locator('#holdBtn').waitFor({ state: 'visible' });
  const box = await page.locator('#holdBtn').boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  if (visualClock) {
    try {
      await visualTicks(page, 8000);
      if (!await page.evaluate(() => !document.documentElement.classList.contains('locked') && window.__qa.helloPeak >= .9)) throw new Error('Controlled visual clock did not complete real hold and hello');
    } finally { await page.mouse.up(); }
    await visualTicks(page, 1500);
    return page.evaluate(() => ({ helloPeak: window.__qa.helloPeak, hello: document.querySelector('#hey').innerText, unlocked: !document.documentElement.classList.contains('locked'), visualClock: true }));
  }
  try { await page.waitForFunction(() => !document.documentElement.classList.contains('locked'), null, { timeout: 240000 }); }
  finally { await page.mouse.up(); }
  await page.waitForFunction(() => window.__qa.helloPeak >= 0.9 && Number(getComputedStyle(document.querySelector('#hey')).opacity) < 0.05, null, { timeout: 60000 });
  await page.waitForTimeout(1400);
  return page.evaluate(() => ({ helloPeak: window.__qa.helloPeak, hello: document.querySelector('#hey').innerText, unlocked: !document.documentElement.classList.contains('locked') }));
}
export async function settle(page, ms = 1400) { await page.waitForTimeout(ms); }
export async function afterNavigation(page, action) {
  const deadline = Date.now() + 60000;
  while (true) {
    try {
      await page.waitForLoadState('domcontentloaded', { timeout: Math.max(1, deadline - Date.now()) });
      return await action();
    } catch (error) {
      if (Date.now() >= deadline || !/Execution context was destroyed|Cannot find context with specified id|navigation.*interrupted|net::ERR_ABORTED/i.test(error.message)) throw error;
      await settle(page, 100);
    }
  }
}
export async function resetLanguage(page, origin, lang) {
  // The root page intentionally honors a saved language preference. Reset that
  // fixture state after testing language/history controls so later audits retain
  // their matrix language. This does not replace the language-switch assertions.
  await afterNavigation(page, async () => {
    if (new URL(page.url()).origin !== origin) await page.goto(origin + LANGUAGES[lang]);
    await page.evaluate(lang => localStorage.setItem('usha-lang', lang), lang);
    await page.goto(origin + LANGUAGES[lang]);
    await page.waitForFunction(({ lang, pathname }) => document.documentElement.lang === lang && location.pathname === pathname, { lang, pathname: LANGUAGES[lang] }, { polling: 100 });
  });
  await settle(page, 1500);
}
export async function goSection(page, id, { anchor = false, delay = 1400 } = {}) {
  if (anchor) {
    const link = page.locator(`a[href="#${id}"]:visible`).first();
    if (await link.count()) { await qaClick(link); await settle(page, 2000); return 'anchor'; }
  }
  await page.evaluate(id => {
    const el = document.getElementById(id);
    scrollTo({ top: el.offsetTop + (['noise', 'signal'].includes(id) ? innerHeight * 0.45 : 0), behavior: 'instant' });
  }, id);
  await settle(page, delay);
  return 'jump';
}
export async function closePopups(page) {
  const state = await page.evaluate(() => ({
    gaming: document.documentElement.classList.contains('gaming'),
    popup: [...document.querySelectorAll('.ns,.t3-modal:not([hidden]),.x-modal')].some(el => {
      const r = el.getBoundingClientRect(); return getComputedStyle(el).display !== 'none' && r.width > 0 && r.height > 0;
    }),
  }));
  if (!state.gaming && !state.popup) return;
  if (state.gaming) {
    if (await page.locator('#brk.on').isVisible()) await qaClick(page.locator('#gresume'));
    if (await page.locator('#secret.on').isVisible()) await qaClick(page.locator('#sclose'));
    await qaClick(page.locator('#gleave'));
  }
  await page.keyboard.press('Escape'); await settle(page, 450);
  for (const selector of ['.ns-x', '.t3-modal:not([hidden]) .t3-mx', '.x-modal .xm-x']) {
    const button = page.locator(selector).first();
    if (await button.isVisible()) {
      try { await qaClick(button, { timeout: 5000 }); }
      catch (error) {
        // Escape can finish its close transition between isVisible and input.
        // An already-removed close button is successful cleanup, not a defect.
        if (await button.isVisible()) throw error;
      }
      await settle(page, 450);
    }
  }
}
