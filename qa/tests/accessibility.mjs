import AxeBuilder from '@axe-core/playwright';
import { SECTIONS, isPhone } from '../lib/config.mjs';
import { closePopups, goSection, settle } from '../lib/browser.mjs';
import { domTools } from '../lib/dom.mjs';
import { POPUPS, openPopup } from './performance.mjs';

// Textless inputs and icon buttons are still touch targets. Offscreen controls
// in an active section retain their CSS dimensions and must not escape the gate.
export function phoneTapTargets({ scope, header }) {
  const roots = [...document.querySelectorAll(header ? `${scope},#hdr` : scope)];
  const controls = new Set(roots.flatMap(root => [...root.querySelectorAll('a,button,input,select,textarea,summary,[role=slider]')]));
  return [...controls].filter(el => {
    if (el.closest('[aria-hidden="true"],[hidden],[inert]') || el.matches('input[type=hidden]')) return false;
    if (el.closest('details:not([open])') && !el.closest('summary')) return false;
    let opacity = 1;
    for (let p = el; p; p = p.parentElement) {
      const css = getComputedStyle(p);
      if (css.display === 'none' || css.visibility !== 'visible') return false;
      opacity *= Number(css.opacity);
    }
    const r = el.getBoundingClientRect();
    return opacity > .5 && r.width > 0 && r.height > 0;
  }).map(el => ({ selector: window.__qaDOM.selector(el), rect: el.getBoundingClientRect().toJSON() }));
}

export function tapTargetLevel(width, height) {
  return width < 24 || height < 24 ? 'FAIL' : width < 44 || height < 44 ? 'WARNING' : 'PASS';
}
export async function accessibility(s, cell, record, { smoke = false } = {}) {
  const { page } = s;
  await page.evaluate(domTools);
  record.metrics.scans = [];
  record.metrics.tapTargets = [];
  record.metrics.tapWarnings = [];
  const scan = async (name, scope, header = false) => {
    let screenshot;
    const finding = async (message, details) => {
      screenshot ||= await record.shot(name);
      await record.fail(message, details, screenshot);
    };
    const builder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).include(scope);
    if (header) builder.include('#hdr');
    const results = await builder.analyze();
    record.metrics.scans.push({ name, passes: results.passes.length, incomplete: results.incomplete.map(r => ({ id: r.id, impact: r.impact, nodes: r.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })), violations: results.violations });
    for (const violation of results.violations) {
      if (['serious', 'critical'].includes(violation.impact) || violation.id === 'color-contrast') await finding(`axe ${violation.impact}: ${violation.id} — ${violation.help}`, { state: name, selector: violation.nodes.map(n => n.target.join(' ')).join(', '), nodes: violation.nodes, helpUrl: violation.helpUrl });
    }
    if (isPhone(cell)) {
      const targets = await page.evaluate(phoneTapTargets, { scope, header });
      record.metrics.tapTargets.push({ state: name, targets });
      for (const target of targets) {
        const level = tapTargetLevel(target.rect.width, target.rect.height);
        if (level === 'FAIL') await finding(`Phone tap target smaller than 24×24 px (WCAG 2.2 AA; ${target.rect.width.toFixed(1)}×${target.rect.height.toFixed(1)})`, { state: name, ...target });
        if (level === 'WARNING') record.metrics.tapWarnings.push({ state: name, ...target, message: 'advice: 44 px' });
      }
    }
  };
  for (const id of (smoke ? ['hero', 'plans', 'faqs'] : SECTIONS)) { await goSection(page, id); await scan(id, '#' + id, true); }
  for (const popup of (smoke ? [] : POPUPS)) {
    if (popup.name === 'live-chat') await page.evaluate(() => localStorage.removeItem('usha-live'));
    try { await openPopup(page, popup); await scan(popup.name, popup.root); }
    catch (e) { await record.fail(`Accessibility scan could not reach ${popup.name}`, { error: e.message }); }
    await closePopups(page);
  }
  await goSection(page, 'hero');
  await page.evaluate(() => { document.body.tabIndex = -1; document.body.focus(); document.body.removeAttribute('tabindex'); });
  const expected = ['#hero .xl-hero', '#hero .cta a[href="#free"]', '#hero .cta a[href="#signal"]'];
  if (await page.locator('#hdr a.btn').isVisible()) expected.push('#hdr a.btn');
  const reached = new Set(); record.metrics.keyboardPath = [];
  for (let i = 0; i < 100 && reached.size < expected.length; i++) {
    await page.keyboard.press('Tab');
    const state = await page.evaluate(selectors => ({ selector: window.__qaDOM.selector(document.activeElement), matches: selectors.filter(s => document.querySelector(s) === document.activeElement), readable: window.__qaDOM.visible(document.activeElement).reasons }), expected);
    record.metrics.keyboardPath.push(state);
    for (const match of state.matches) {
      reached.add(match);
      await record.check(!state.readable.length, 'Keyboard-focused main CTA is not readable', { selector: match, reasons: state.readable });
    }
  }
  for (const selector of expected) await record.check(reached.has(selector), 'Main CTA is not reachable by keyboard', { selector });
  record.notes.push('axe cannot prove contrast over every animated/WebGL background. All incomplete contrast checks are retained for manual review; serious/critical and confirmed AA contrast violations fail.');
}

export async function consoleNetwork(s, cell, record) {
  const { page } = s;
  const log = Object.fromEntries(['errors', 'warnings', 'failed', 'badStatus', 'mocked', 'blocked', 'contextLoss', 'aborted'].map(key => [key, s.log[key] || []]));
  const intentional = new Set(log.blocked.map(r => r.url));
  const failures = log.failed.filter(r => !intentional.has(r.url));
  record.metrics = { ...log, failed: failures, intentionallyBlockedRequests: [...intentional] };
  // These are accumulated observations from one session, assessed at its end.
  // One final-state image accompanies the complete log; taking an identical
  // screenshot for every repeated request obscures the useful evidence.
  let screenshot;
  const finding = async (message, details = {}) => {
    screenshot ||= await record.shot('session-end');
    await record.fail(message, details, screenshot);
  };
  const group = entries => {
    const groups = new Map();
    for (const entry of entries) {
      const key = JSON.stringify(entry);
      if (groups.has(key)) groups.get(key).occurrences++;
      else groups.set(key, { ...entry, occurrences: 1 });
    }
    return [...groups.values()];
  };
  for (const error of [...new Set(log.errors)]) await finding('JavaScript/console error: ' + error);
  for (const failure of group(failures)) await finding('Failed network request', failure);
  for (const response of group(log.badStatus)) await finding('HTTP error response', response);
  const losses = [...new Map([...log.contextLoss, ...await page.evaluate(() => window.__qa?.contextLoss || [])].map(loss => [JSON.stringify(loss), loss])).values()];
  if (losses.length) await finding('WebGL context lost', { losses });
  record.notes.push(`${log.warnings.length} console warnings retained in the HTML report.`);
}
