// Runs in the browser. Never changes opacity, reveal classes or layout.
export function domTools() {
  const selector = el => {
    if (el.id) return '#' + CSS.escape(el.id);
    const parts = [];
    for (let node = el; node && node !== document.body; node = node.parentElement) {
      if (node.id) { parts.unshift('#' + CSS.escape(node.id)); break; }
      parts.unshift(node.localName + ':nth-child(' + (Array.from(node.parentElement?.children || []).indexOf(node) + 1) + ')');
    }
    return parts.join(' > ');
  };
  const eligible = el => {
    if (!el.textContent.trim() || el.closest('svg,[aria-hidden="true"],[hidden],[inert]')) return false;
    const details = el.closest('details:not([open])');
    if (details && !el.closest('summary')) return false;
    for (let p = el; p; p = p.parentElement) if (getComputedStyle(p).display === 'none') return false;
    return true;
  };
  const rect = r => ({ x: r.x, y: r.y, width: r.width, height: r.height, top: r.top, right: r.right, bottom: r.bottom, left: r.left });
  const visible = el => {
    const r = el.getBoundingClientRect(), reasons = [];
    let opacity = 1;
    for (let p = el; p; p = p.parentElement) {
      const css = getComputedStyle(p), pr = p.getBoundingClientRect();
      opacity *= Number(css.opacity);
      if (css.visibility !== 'visible') reasons.push('visibility:' + css.visibility);
      if (p !== el && p !== document.body && p !== document.documentElement) {
        if (/(hidden|clip|auto|scroll)/.test(css.overflowX) && (r.left < pr.left - 2 || r.right > pr.right + 2)) reasons.push('clipped horizontally by ' + selector(p));
        if (/(hidden|clip|auto|scroll)/.test(css.overflowY) && r.height <= innerHeight && (r.top < pr.top - 2 || r.bottom > pr.bottom + 2)) reasons.push('clipped vertically by ' + selector(p));
      }
      if (/inset\([^)]*100%/.test(css.clipPath)) reasons.push('clip-path:' + css.clipPath);
    }
    if (opacity < 0.9) reasons.push('effective opacity ' + opacity.toFixed(3));
    if (r.width < 1 || r.height < 1) reasons.push('zero area');
    if (r.left < -2 || r.right > innerWidth + 2) reasons.push('outside horizontal viewport');
    if (r.height <= innerHeight && (r.top < -2 || r.bottom > innerHeight + 2)) reasons.push('outside vertical viewport');
    const header = document.querySelector('#hdr')?.getBoundingClientRect();
    if (header && r.top < header.bottom - 2 && r.bottom > header.top && r.top >= 0 && !el.closest('#hdr')) reasons.push('under fixed header');
    // Headline words have their own opacity/transform, independent of the h2.
    for (const span of el.querySelectorAll('.xc,.w > span')) {
      const css = getComputedStyle(span);
      if (Number(css.opacity) * opacity < 0.9) { reasons.push('faded heading word'); break; }
    }
    return { selector: selector(el), text: el.textContent.trim().slice(0, 160), rect: rect(r), opacity, reasons: [...new Set(reasons)] };
  };
  const candidates = root => Array.from(root.querySelectorAll('h1,h2,h3,h4,p,button,a.btn,article,.glass,.fitem,.area,.xp-card,.t3-card')).filter(eligible);
  const textRects = root => Array.from(root.querySelectorAll('h1,h2,h3,h4,p,button,a.btn,summary')).filter(eligible).filter(el => visible(el).opacity >= .9 && getComputedStyle(el).visibility === 'visible').map(el => {
    const range = document.createRange(); range.selectNodeContents(el);
    const rects = Array.from(range.getClientRects()).map(r => {
      let left = Math.max(0, r.left), right = Math.min(innerWidth, r.right);
      let top = Math.max(0, r.top), bottom = Math.min(innerHeight, r.bottom);
      // Range geometry includes text outside overflow-clipped ancestors. Only
      // painted portions can overlap another block or the canvas character.
      for (let p = el; p; p = p.parentElement) {
        const css = getComputedStyle(p), bounds = p.getBoundingClientRect();
        if (/inset\([^)]*100%/.test(css.clipPath)) return null;
        if (/(hidden|clip|auto|scroll)/.test(css.overflowX)) { left = Math.max(left, bounds.left); right = Math.min(right, bounds.right); }
        if (/(hidden|clip|auto|scroll)/.test(css.overflowY)) { top = Math.max(top, bounds.top); bottom = Math.min(bottom, bounds.bottom); }
      }
      if (right - left <= 3 || bottom - top <= 3) return null;
      return { x: left, y: top, left, right, top, bottom, width: right - left, height: bottom - top };
    }).filter(Boolean);
    return { selector: selector(el), rects };
  });
  window.__qaDOM = { selector, eligible, visible, candidates, textRects };
}
