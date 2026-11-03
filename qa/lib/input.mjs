// Real pointer input without waiting for two identical rendered frames. That
// actionability wait becomes expensive on a software WebGL renderer. Explicit
// hit testing still prevents clicking through overlays or disabled controls.
export async function activate(locator, options = {}, fallback) {
  const count = options.clickCount || 1;
  fallback ||= () => count === 2 ? locator.dblclick(options) : locator.click(options);
  if (options.force || options.trial || options.position || options.modifiers || options.button) return fallback();
  const timeout = options.timeout ?? 60000, started = Date.now();
  let last;
  do {
    last = await locator.evaluateAll(elements => {
      if (!elements.length) return { reason: 'target is not attached' };
      if (elements.length !== 1) throw new Error(`Pointer activation requires one target; found ${elements.length}`);
      const el = elements[0];
      // Preserve Playwright's navigation handling for links, language switches,
      // form submits and other controls with unknown navigation behavior.
      if (!el.matches('button,summary') || el.closest('.lang') || (el.form && el.type === 'submit')) return { fallback: true };
      const css = getComputedStyle(el);
      if (el.matches(':disabled') || css.display === 'none' || css.visibility !== 'visible') return { reason: 'hidden or disabled' };
      let r = el.getBoundingClientRect();
      if (!r.width || !r.height) return { reason: 'no layout box' };
      if (r.top < 0 || r.bottom > innerHeight || r.left < 0 || r.right > innerWidth) {
        el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' });
        r = el.getBoundingClientRect();
      }
      let x = r.left + r.width / 2, y = r.top + r.height / 2;
      let hit = document.elementFromPoint(x, y);
      if (hit && !(hit === el || el.contains(hit)) && hit.closest('header')) {
        // A fixed header may cover a target that is technically in the viewport.
        // Bring it to the center, then verify the actual hit target again.
        el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' });
        r = el.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2;
        hit = document.elementFromPoint(x, y);
      }
      if (!hit || !(hit === el || el.contains(hit))) return { reason: 'pointer is intercepted', hit: hit?.outerHTML.slice(0, 240) };
      return { x, y };
    });
    if (last.fallback) return fallback();
    if (last.x !== undefined) {
      await locator.page().mouse.click(last.x, last.y, { clickCount: count });
      return;
    }
    await locator.page().waitForTimeout(Math.min(100, Math.max(0, timeout - (Date.now() - started))));
  } while (Date.now() - started < timeout);
  throw new Error(`Pointer activation timed out after ${timeout} ms: ${JSON.stringify(last)}`);
}

export const click = (locator, options = {}) => activate(locator, options, () => locator.click(options));
export const doubleClick = (locator, options = {}) => activate(locator, { ...options, clickCount: 2 }, () => locator.dblclick(options));
