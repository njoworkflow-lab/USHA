// Cases page markup (/cases/, /en/cases/, /ar/cases/). Pure functions over one
// language's data from cases-v2.mjs: the build pre-renders the library with them
// (crawlers, no-JS), and also inlines this file (without "export") into the
// page's script, where cases.js runs the filters and the full-story dialog.
// The case strings are already HTML-safe (escaped, with <b> for the money lines).

const xcEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function xcCount(C, n, lang) {
  const f = C.ui.count;
  let s = f[0];
  if (f.length === 3) { const r = new Intl.PluralRules(lang).select(n); s = f[r === 'one' ? 0 : r === 'few' ? 1 : 2]; }
  return s.replace('{n}', n);
}

function xcCardHTML(c, C, lang, i) {
  return `<li class="xc-card" data-id="${c.id}" data-sector="${c.sector}" data-country="${c.country}" style="--k:${i}">
<article class="xc-in" aria-labelledby="xc-t${c.id}">
<div class="xc-top"><span class="xc-code">${xcEsc(c.code)}</span><span class="xc-ex">${xcEsc(C.ui.ex)}</span></div>
<h3 class="xc-t" id="xc-t${c.id}">${xcEsc(c.title)}</h3>
<p class="xc-mt">${xcEsc(c.meta.split(' · ').slice(0, -1).join(' · '))}</p>
<div class="xc-row xc-res"><span class="xc-l">${xcEsc(C.ui.result)}</span><p>${c.result}</p></div>
<div class="xc-ft"><span class="xc-time">${xcEsc(c.time)}</span><button type="button" class="xc-open" aria-haspopup="dialog" aria-describedby="xc-t${c.id}">${xcEsc(C.ui.open)}</button></div>
</article></li>`;
}

function xcFiltersHTML(C) {
  const groups = [['sector', C.f.sector], ['country', C.f.country]];
  return groups.map(([k, list], n) => `<div class="xc-fg" role="group" aria-labelledby="xc-g${n}"><span class="xc-gl" id="xc-g${n}">${xcEsc(C.ui.g[n])}</span><div class="xc-chips">${list.map(([v, l]) => {
    const on = v === 'all';
    return `<button type="button" class="xc-chip${on ? ' on' : ''}" data-f="${k}" data-v="${v}" aria-pressed="${on}" tabindex="${on ? 0 : -1}">${xcEsc(l)}</button>`;
  }).join('')}</div></div>`).join('');
}

function xcWallHTML(C, lang) {
  return `<div class="xc-bar"><div class="xc-filters">${xcFiltersHTML(C)}</div>
<div class="xc-meta"><span class="xc-count" role="status">${xcEsc(xcCount(C, C.cards.length, lang))}</span><button type="button" class="xc-clear" hidden>${xcEsc(C.ui.clear)}</button></div></div>
<ul class="xc-grid">${C.cards.map((c, i) => xcCardHTML(c, C, lang, i)).join('')}</ul>
<div class="xc-empty" hidden><p>${xcEsc(C.ui.empty)}</p><a class="btn btn-p xc-ask" href="#"><span class="d"></span><span>${xcEsc(C.ui.emptyB)}</span></a></div>`;
}

// The full story: every field of the case library, in its order.
function xcStoryHTML(c, C) {
  const S = C.ui.story;
  const body = (v) => typeof v === 'string' ? `<p>${v}</p>` : Array.isArray(v) ? `<ul>${v.map((x) => `<li>${x}</li>`).join('')}</ul>` : `<p>${v.p}</p><ul>${v.li.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  return `<header class="xm-hd"><div><span class="xm-k">${xcEsc(c.code)} · ${xcEsc(C.ui.ex)}</span><h3 id="xc-mt">${xcEsc(c.title)}</h3><p class="xc-meta-l">${xcEsc(c.meta)}</p></div>
<button type="button" class="xm-x" aria-label="${xcEsc(C.ui.close)}"></button></header>
<div class="xm-body" tabindex="0" role="region" aria-labelledby="xc-mt"><div class="xc-mtop"><div class="xc-mres"><span class="xc-l">${xcEsc(C.ui.result)}</span><p>${c.result}</p></div></div>${c.story.map(([n, v]) => `<div class="xm-g"><div class="xm-gl">${xcEsc(S[n])}</div>${body(v)}</div>`).join('')}</div>
<footer class="xm-ft"><p>${xcEsc(C.ui.last[0])}</p><div class="xc-mbtns"><button type="button" class="btn btn-g xc-next">${xcEsc(C.ui.next)}</button><a class="btn btn-p xc-ask" href="#"><span class="d"></span><span>${xcEsc(C.ui.last[1])}</span></a></div></footer>`;
}

// The cases page (/cases/, /en/cases/, /ar/cases/): filters by sector and
// market; the grid re-flows with a FLIP morph; each card opens its full story
// in the site's dialog (focus trapped, scroll and focus restored on close).
// One motion moment: cards drift in as they come into view.
// No scroll handlers: an IntersectionObserver reveals cards, filters animate
// with transforms only. Content: window.USHA_CASES (built from cases-v2.mjs);
// markup: cases-ui.mjs (inlined above by the build). "Ask" goes to the free
// consultation on the main page (window.USHA_CASES_ASK).
(() => {
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const ALL = window.USHA_CASES || {};
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = 'cubic-bezier(.16,1,.3,1)';
  let app = null, lang = '', C = null, io = null;
  const state = { sector: 'all', country: 'all' };
  const pick = () => (H.lang in ALL ? H.lang : Object.keys(ALL)[0]);
  const talk = () => { if (window.USHA_CASES_ASK) location.href = window.USHA_CASES_ASK; else dispatchEvent(new Event('usha:talk')); };

  // ---------- reveal: cards drift in like signals pulled from the galaxy ----------
  function reveal() {
    if (io) io.disconnect();
    const cards = $$('.xc-card', app);
    if (reduce || !('IntersectionObserver' in window)) { cards.forEach((c) => c.classList.add('xc-on')); return; }
    cards.forEach((c, i) => {
      // a deterministic scatter: each card starts a little off its place, deeper in space
      const a = (c.dataset.id * 2.399) % 6.283;
      c.style.setProperty('--dx', (Math.cos(a) * 46).toFixed(1) + 'px');
      c.style.setProperty('--dy', (70 + Math.sin(a) * 26).toFixed(1) + 'px');
    });
    io = new IntersectionObserver((entries) => {
      let n = 0;
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const c = e.target;
        c.style.setProperty('--w', (n++ * 70) + 'ms');
        c.classList.add('xc-on');
        io.unobserve(c);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    cards.forEach((c) => io.observe(c));
  }

  // ---------- filters ----------
  const matches = (c) => (state.sector === 'all' || c.dataset.sector === state.sector) &&
    (state.country === 'all' || c.dataset.country === state.country);

  const unlift = (c) => ['position', 'left', 'top', 'width', 'height', 'margin'].forEach((p) => c.style.removeProperty(p));
  function apply() {
    const grid = $('.xc-grid', app), cards = $$('.xc-card', app);
    const animate = !reduce && grid.animate;
    const before = new Map();
    if (animate) cards.forEach((c) => { if (!c.hidden) before.set(c, c.getBoundingClientRect()); });
    const g = grid.getBoundingClientRect();
    const leaving = [];
    let n = 0;
    cards.forEach((c) => {
      const on = matches(c);
      if (on) n++;
      if (!on && !c.hidden) {
        if (animate) {
          // lift it out of the flow where it stands, then let it fade
          const r = before.get(c);
          Object.assign(c.style, { position: 'absolute', left: r.left - g.left + 'px', top: r.top - g.top + 'px', width: r.width + 'px', height: r.height + 'px', margin: 0 });
          leaving.push(c);
        } else c.hidden = true;
      } else if (on) { c.hidden = false; if (c.style.position) { c.getAnimations().forEach((x) => x.cancel()); unlift(c); } }
      c.classList.toggle('xc-match', on);
    });
    if (animate) {
      cards.forEach((c) => {
        if (c.hidden || leaving.includes(c)) return;
        c.classList.add('xc-on');
        const was = before.get(c), now = c.getBoundingClientRect();
        if (!was) { c.animate([{ opacity: 0, transform: 'translateY(18px) scale(.96)' }, { opacity: 1, transform: 'none' }], { duration: 520, delay: 120, easing: ease, fill: 'backwards' }); return; }
        const dx = was.left - now.left, dy = was.top - now.top;
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
        c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 560, easing: ease });
      });
      leaving.forEach((c) => {
        const a = c.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.94)' }], { duration: 240, easing: 'ease-out', fill: 'forwards' });
        a.onfinish = () => { c.hidden = !matches(c); a.cancel(); unlift(c); };
      });
    }
    $('.xc-count', app).textContent = xcCount(C, n, lang);
    $('.xc-empty', app).hidden = n > 0;
    $('.xc-clear', app).hidden = state.sector === 'all' && state.country === 'all';
  }

  function setChip(b) {
    const f = b.dataset.f, v = b.dataset.v;
    state[f] = v;
    syncChips();
    apply();
  }
  function syncChips() {
    $$('.xc-fg', app).forEach((g) => {
      const chips = $$('.xc-chip', g);
      let focusable = null;
      chips.forEach((b) => {
        const on = state[b.dataset.f] === b.dataset.v;
        b.classList.toggle('on', on); b.setAttribute('aria-pressed', on);
        if (on) focusable = b;
      });
      chips.forEach((b) => { b.tabIndex = b === (focusable || chips[0]) ? 0 : -1; });
    });
  }
  // one tab stop per group; arrow keys move along it (mirrored on the Arabic page)
  function chipKeys(e) {
    const b = e.target.closest('.xc-chip'); if (!b) return;
    const keys = { ArrowRight: 1, ArrowLeft: -1, Home: 'first', End: 'last' };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const chips = $$('.xc-chip', b.parentNode), i = chips.indexOf(b);
    let k = keys[e.key];
    if (typeof k === 'number' && H.dir === 'rtl') k = -k;
    const next = k === 'first' ? chips[0] : k === 'last' ? chips[chips.length - 1] : chips[(i + k + chips.length) % chips.length];
    chips.forEach((c) => { c.tabIndex = c === next ? 0 : -1; });
    next.focus();
    next.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  // ---------- the full story ----------
  let modal = null, lastFocus = null, keepY = 0, current = null;
  const visibleIds = () => $$('.xc-card', app).filter((c) => !c.hidden && matches(c)).map((c) => +c.dataset.id);
  function fill(id) {
    current = C.cards.find((c) => c.id === id);
    const panel = $('.xm-panel', modal);
    panel.innerHTML = '<i class="xm-aura" aria-hidden="true"></i>' + xcStoryHTML(current, C);
    $('.xm-x', panel).addEventListener('click', () => close());
    $('.xc-next', panel).addEventListener('click', () => {
      const ids = visibleIds(), i = ids.indexOf(current.id);
      fill(ids[(i + 1) % ids.length] || ids[0]);
      $('.xm-body', modal).scrollTop = 0;
      $('.xc-next', modal).focus({ preventScroll: true });
    });
    $('.xc-ask', panel).addEventListener('click', (e) => { e.preventDefault(); close(true); talk(); });
  }
  function open(id, opener) {
    close(true);
    lastFocus = opener || D.activeElement; keepY = scrollY;
    modal = D.createElement('div'); modal.className = 'x-modal xc-modal'; modal.setAttribute('translate', 'no');
    modal.innerHTML = '<div class="xm-scrim"></div><div class="xm-panel xc-panel" role="dialog" aria-modal="true" aria-labelledby="xc-mt"></div>';
    D.body.append(modal); H.classList.add('x-modal-on');
    fill(id);
    $('.xm-scrim', modal).addEventListener('click', () => close());
    const card = opener && opener.closest('.xc-card'), panel = $('.xm-panel', modal);
    if (card && panel.animate && !reduce) {
      const a = card.getBoundingClientRect(), b = panel.getBoundingClientRect();
      const dx = a.left + a.width / 2 - (b.left + b.width / 2), dy = a.top + a.height / 2 - (b.top + b.height / 2);
      panel.animate([{ transform: `translate(${dx}px,${dy}px) scale(${(a.width / b.width).toFixed(3)},${(a.height / b.height).toFixed(3)})`, opacity: .3 }, { transform: 'none', opacity: 1 }], { duration: 520, easing: ease });
    }
    requestAnimationFrame(() => modal && modal.classList.add('on'));
    $('.xm-x', modal).focus({ preventScroll: true });
  }
  function close(now) {
    const m = modal; if (!m) return; modal = null;
    m.inert = true;
    H.classList.remove('x-modal-on');
    if (now || reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
    if (Math.abs(scrollY - keepY) > 1) scrollTo({ top: keepY, behavior: 'instant' });
    if (lastFocus && lastFocus.focus && D.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  }
  D.addEventListener('keydown', (e) => {
    if (!modal) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); return; }
    if (e.key !== 'Tab') return;
    const f = $$('button, [href], [tabindex]:not([tabindex="-1"])', modal).filter((el) => !el.disabled && el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!modal.contains(D.activeElement)) { e.preventDefault(); (e.shiftKey ? last : first).focus({ preventScroll: true }); }
    else if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus({ preventScroll: true }); }
    else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus({ preventScroll: true }); }
  }, true);

  // ---------- render ----------
  function render() {
    const l = pick();
    if (!ALL[l] || l === lang) return;
    lang = l; C = ALL[l];
    state.sector = 'all'; state.country = 'all';
    app.innerHTML = xcWallHTML(C, lang);
    app.dataset.lang = lang;
    reveal();
  }
  function boot() {
    app = $('#cases .xc-app'); if (!app) return;
    app.classList.add('xc-js');
    app.addEventListener('click', (e) => {
      const t = e.target.closest('button,.xc-ask'); if (!t) return;
      if (t.classList.contains('xc-chip')) setChip(t);
      else if (t.classList.contains('xc-clear')) { state.sector = 'all'; state.country = 'all'; syncChips(); apply(); }
      else if (t.classList.contains('xc-open')) open(+t.closest('.xc-card').dataset.id, t);
      else if (t.classList.contains('xc-ask')) { e.preventDefault(); talk(); }
    });
    app.addEventListener('keydown', chipKeys);
    render();
    new MutationObserver(() => setTimeout(render, 40)).observe(H, { attributes: true, attributeFilter: ['lang'] });
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();
