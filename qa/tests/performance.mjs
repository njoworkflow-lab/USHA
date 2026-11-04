import fs from 'node:fs/promises';
import { constants } from 'node:fs';
import { click as qaClick, scrollInput, scrollInputName, usesProgrammaticScroll } from '../lib/input.mjs';
import { frameStats, fpsFloor, isPhone, SECTIONS } from '../lib/config.mjs';
import { closePopups, goSection, settle } from '../lib/browser.mjs';

export async function smoothness(s, cell, record, smoke) {
  const { page, cdp } = s;
  if (cell.profile === 'android-low' && !cdp) { record.unavailable('CPU 4× / Fast 3G requires Chromium CDP. No unthrottled result is presented as low-end.'); return; }
  record.metrics.runs = [];
  const renderer = await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const ext = gl?.getExtension('WEBGL_debug_renderer_info');
    const name = gl ? gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) : 'unavailable';
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    return name;
  });
  const runnerGpu = await detectRunnerGpu();
  const enforce = enforceFps(renderer, process.env.QA_STRICT_FPS, runnerGpu);
  Object.assign(record.metrics, { renderer, runnerGpu, strict: process.env.QA_STRICT_FPS === '1', informationalOnly: !enforce });
  if (!enforce) record.notes.push('Software or unverified GPU: FPS and frame-time limits are informational only. Set QA_STRICT_FPS=1 to enforce them.');
  if (usesProgrammaticScroll(cell)) record.notes.push('Mobile WebKit has no Playwright wheel/swipe API. Programmatic scrollBy measures rendered scrolling, not a native touch gesture or fling.');
  record.metrics.cpuThrottle = cell.profile === 'android-low' ? 4 : 1;
  record.metrics.network = cell.profile === 'android-low' ? 'Fast 3G: 150 ms RTT, 1.6 Mbps down, 750 Kbps up' : 'local, unthrottled';
  for (const mode of ['slow-wheel', 'fast-wheel', 'fling']) {
    if (record.metrics.runs.some(run => run.mode === mode && run.reachedBottom)) continue;
    console.log(`SCROLL      ${cell.id} ${mode}`);
    await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' })); await settle(page);
    await page.evaluate(() => { Object.assign(window.__qa, { frames: [], longtasks: [], recording: true }); });
    const started = Date.now();
    const size = page.viewportSize();
    // Actual wheel input; phone fling uses compositor touch gestures over CDP.
    // Other modes record their actual wheel/programmatic input explicitly.
    let iterations = 0;
    while (Date.now() - started < (smoke ? 12000 : 300000)) {
      const pos = await page.evaluate(() => ({ y: scrollY, end: document.documentElement.scrollHeight - innerHeight }));
      if (pos.y >= pos.end - 3) break;
      if (mode === 'fling' && isPhone(cell) && cdp) {
        // Direct touch events scroll Chromium builds where synthesizeScrollGesture
        // acknowledges a touch gesture without actually dispatching it.
        const startY = Math.floor(size.height * .85), endY = 60;
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 30, y: startY }] });
        for (let step = 1; step <= 12; step++) {
          await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 30, y: startY + (endY - startY) * step / 12 }] });
          await page.waitForTimeout(16);
        }
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      } else if (cdp) {
        // Stream native wheel input at a fixed speed on the compositor. Awaiting
        // one Playwright wheel call per frame would make the input itself crawl
        // on a slow renderer and prevent a complete top-to-bottom measurement.
        await cdp.send('Input.synthesizeScrollGesture', {
          x: 30, y: Math.floor(size.height * .7),
          yDistance: -Math.ceil(pos.end - pos.y),
          speed: mode === 'slow-wheel' ? 400 : mode === 'fast-wheel' ? 1800 : 6000,
          gestureSourceType: 'mouse', preventFling: mode !== 'fling',
        });
      } else {
        await page.mouse.move(size.width / 2, size.height * .6);
        await scrollInput(page, cell, mode === 'slow-wheel' ? 160 : mode === 'fast-wheel' ? 800 : size.height * 3);
      }
      await page.waitForTimeout(mode === 'slow-wheel' ? 70 : mode === 'fast-wheel' ? 45 : 50);
      iterations++;
    }
    await page.waitForTimeout(350);
    const data = await page.evaluate(() => { window.__qa.recording = false; return { frames: window.__qa.frames, longtasks: window.__qa.longtasks, longtaskSupported: PerformanceObserver.supportedEntryTypes?.includes('longtask'), scrollY, end: document.documentElement.scrollHeight - innerHeight }; });
    if (!data.frames.length) {
      record.metrics.runs.push({ mode, reachedBottom: data.scrollY >= data.end - 3, measurement: 'No animation frames recorded' });
      if (enforce) await record.fail(`${mode}: no animation frames recorded`);
      else record.notes.push(`${mode}: no frames on software/unverified renderer; informational only.`);
      continue;
    }
    const stats = frameStats(data.frames);
    if (!data.longtaskSupported && !record.notes.includes('Long-task observer API is unavailable in this browser.')) record.notes.push('Long-task observer API is unavailable in this browser.');
    const screenshot = data.scrollY < data.end - 3 || stats.p5Fps < fpsFloor(cell) || stats.maxFrameMs > 200 ? await record.shot(mode) : undefined;
    record.metrics.runs.push({ mode, input: mode === 'fling' && isPhone(cell) && cdp ? 'CDP touch fling' : cdp ? 'continuous native CDP wheel' : scrollInputName(cell), ...stats, longtasks: data.longtasks, longtaskSupported: data.longtaskSupported, durationMs: Date.now() - started, iterations, reachedBottom: data.scrollY >= data.end - 3 });
    if (enforce) {
      await record.check(data.scrollY >= data.end - 3, `${mode}: did not reach document bottom`, { finalY: data.scrollY, bottom: data.end }, screenshot);
      await record.check(stats.p5Fps >= fpsFloor(cell), `${mode}: p5 ${stats.p5Fps.toFixed(1)} fps < ${fpsFloor(cell)}`, { ...stats }, screenshot);
      await record.check(stats.maxFrameMs <= 200, `${mode}: frame ${stats.maxFrameMs.toFixed(1)} ms > 200 ms`, { ...stats }, screenshot);
    }

  }
  if (!enforce) record.status = 'INFO';
}

const hardwareVendors = { '0x10de': /NVIDIA|GeForce/i, '0x1002': /AMD|Radeon/i, '0x8086': /Intel/i };
export async function detectRunnerGpu({ platform = process.platform, io = fs } = {}) {
  // Renderer strings can be privacy-masked (including a hardware brand on a
  // software-only Linux runner). Require an accessible hardware render device.
  if (platform === 'linux') for (const name of await io.readdir('/sys/class/drm').catch(() => [])) {
    if (!/^renderD\d+$/.test(name)) continue;
    try {
      const vendor = (await io.readFile(`/sys/class/drm/${name}/device/vendor`, 'utf8')).trim().toLowerCase();
      if (!hardwareVendors[vendor]) continue;
      const device = `/dev/dri/${name}`;
      if (!(await io.stat(device)).isCharacterDevice()) continue;
      await io.access(device, constants.R_OK | constants.W_OK);
      return { verified: true, vendor, device };
    } catch { /* Missing/inaccessible/virtual devices do not prove a real GPU. */ }
  }
  return { verified: false, reason: 'No accessible, identified hardware render device; FPS is informational unless QA_STRICT_FPS=1.' };
}
export function enforceFps(renderer, strict, runnerGpu = { verified: false }) {
  return strict === '1' || !!(runnerGpu.verified && hardwareVendors[runnerGpu.vendor]?.test(renderer) && !/swiftshader|llvmpipe|softpipe|lavapipe|swrast|software|basic render|unavailable/i.test(renderer));
}

export const POPUPS = [
  { name: 'scenario', opener: '[data-open="sc"]', root: '.t3-modal:not([hidden])', close: '.t3-mx' },
  { name: 'forecast', opener: '[data-open="ff"]', root: '.t3-modal:not([hidden])', close: '.t3-mx' },
  ...['core', 'pro', 'ent'].map(k => ({ name: k, opener: `.xp-det[data-k="${k}"]`, root: '.x-modal:not(.x-live)', close: '.xm-x' })),
  { name: 'story', opener: '.xs-card', root: '.ns', close: '.ns-x' },
  { name: 'live-chat', opener: '.t3-go', root: '.x-live', close: '.xm-x' },
];
export async function openPopup(page, popup) {
  await page.locator(popup.opener).first().scrollIntoViewIfNeeded(); await settle(page, 1400);
  const scrollBefore = await page.evaluate(() => scrollY);
  await qaClick(page.locator(popup.opener).first());
  await page.locator(popup.root).waitFor({ state: 'visible', timeout: 15000 });
  await settle(page, 650);
  return { scrollBefore };
}
export async function closePopup(page, popup, { timeout = 15000 } = {}) {
  await qaClick(page.locator(`${popup.root} ${popup.close}`));
  await page.locator(popup.root).waitFor({ state: 'hidden', timeout });
  await settle(page, 420);
}
export async function memory(s, cell, record, smoke) {
  const { page, cdp, context } = s;
  // Warm lazy-loaded modules before the first forced GC: loading is not a leak.
  for (const popup of POPUPS) {
    try { await openPopup(page, popup); await closePopup(page, popup); }
    catch (error) { await record.fail(`Memory warm-up could not exercise ${popup.name}`, { error: error.message }); await closePopups(page); }
  }
  const measure = async () => {
    if (cdp) {
      await cdp.send('HeapProfiler.collectGarbage');
      const heap = await cdp.send('Runtime.getHeapUsage'), dom = await cdp.send('Memory.getDOMCounters');
      return { heapBytes: heap.usedSize, ...dom, liveNodes: await page.locator('*').count() };
    }
    return { heapBytes: null, liveNodes: await page.locator('*').count() };
  };
  await closePopups(page); await goSection(page, 'hero');
  record.metrics.before = await measure();
  record.metrics.samples = [];
  const start = Date.now(), duration = smoke ? 15000 : 300000;
  let rounds = 0, cycles = 0;
  record.metrics.popupCompleted = Object.fromEntries(POPUPS.map(p => [p.name, 0]));
  while (Date.now() - start < duration || rounds < (smoke ? 1 : 10) || cycles < (smoke ? 1 : 5)) {
    if (rounds < (smoke ? 1 : 10)) {
      for (const ids of [SECTIONS, [...SECTIONS].reverse()]) {
        for (const id of ids) { await goSection(page, id, { delay: 100 }); }
      }
      rounds++;
    }
    if (cycles < (smoke ? 1 : 5)) {
      for (const popup of POPUPS) {
        try {
          await openPopup(page, popup);
          const tabs = page.locator(`${popup.root} [role=tab]`);
          for (let i = 0; i < await tabs.count(); i++) { await qaClick(tabs.nth(i)); }
          await closePopup(page, popup);
          record.metrics.popupCompleted[popup.name]++;
        } catch (error) { await record.fail(`Memory cycle ${cycles + 1}: ${popup.name} could not complete`, { error: error.message }); await closePopups(page); }
      }
      for (const tab of await page.locator('.vs-tabs button').all()) {
        try { await qaClick(tab); } catch (error) { await record.fail('Memory comparison tab could not activate', { error: error.message }); }
      }
      const other = await context.newPage(); await other.goto('about:blank'); await other.bringToFront(); await settle(page, 300); await page.bringToFront(); await other.close();
      cycles++;
    }
    record.metrics.samples.push({ elapsedMs: Date.now() - start, ...(await measure()) });
    if (rounds >= (smoke ? 1 : 10) && cycles >= (smoke ? 1 : 5)) await settle(page, 1000);
  }
  await closePopups(page); await goSection(page, 'hero');
  record.metrics.after = await measure();
  Object.assign(record.metrics, { durationMs: Date.now() - start, scrollRoundTrips: rounds, popupCycles: cycles, popups: POPUPS.map(p => p.name), forcedGC: !!cdp });
  const before = record.metrics.before, after = record.metrics.after;
  record.metrics.domGrowth = after.liveNodes - before.liveNodes;
  record.metrics.growth = {};
  for (const popup of POPUPS) await record.check(record.metrics.popupCompleted[popup.name] >= 5, `${popup.name}: fewer than five completed open/close cycles`);
  for (const key of cdp ? ['liveNodes', 'nodes', 'jsEventListeners'] : ['liveNodes']) {
    const growth = relativeGrowth(before[key], after[key]);
    record.metrics.growth[key] = growth;
    await record.check(Number.isFinite(growth) && growth < .20, `${key} grew ${(growth * 100).toFixed(1)}% (must be <20%)`, { before: before[key], after: after[key] });
  }
  if (cdp) {
    const growth = after.heapBytes / before.heapBytes - 1;
    record.metrics.heapGrowth = growth;
    await record.check(growth <= .30, `Heap grew ${(growth * 100).toFixed(1)}% (limit 30%)`, { before, after });
  } else record.unavailable('JS heap measurements and forced GC are not exposed by Playwright in this engine. Attached DOM growth is enforced; retained DOM nodes, event listeners, heap and forced GC are unavailable in this engine. Chromium enforces all leak gates.');
  const losses = [...new Map([...(s.log.contextLoss || []), ...await page.evaluate(() => window.__qa.contextLoss)].map(loss => [JSON.stringify(loss), loss])).values()];
  record.metrics.webglContextLoss = losses;
  await record.check(!losses.length, 'WebGL context was lost', { losses });
}

export function relativeGrowth(before, after) {
  if (!Number.isFinite(before) || !Number.isFinite(after)) return NaN;
  return before === 0 ? (after === 0 ? 0 : Infinity) : (after - before) / before;
}
