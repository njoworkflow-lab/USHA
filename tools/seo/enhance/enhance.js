// USHA enhancement layer. Runs after the main bundle and only adds to the page,
// in the site's own visual language: header light thread, cursor scope, glass
// that follows the pointer, a light beam down USHA's comparison column, roles
// absorbed into one engine, light meters for the monthly numbers, light drawn
// under each finding, and the plans module with Enterprise. Re-renders when the
// language changes. ui.mjs is inlined above this file by the build.
(() => {
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const XS = window.USHA_X || {};
  const lang = () => (H.lang in XS ? H.lang : Object.keys(XS)[0]);
  const X = () => XS[lang()] || {};
  const rtl = H.dir === 'rtl';
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

  // in-view: .x-io → .x-in, and .rv created by this layer → .in
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add(e.target.classList.contains('x-io') ? 'x-in' : 'in');
    io.unobserve(e.target);
  }), { rootMargin: '0px 0px -12% 0px' });
  const watch = (root = D) => $$('.x-io:not(.x-in),.x-plans .rv:not(.in),.x-plans .glass:not(.in)', root).forEach((el) => io.observe(el));

  // ---------- header ----------
  const header = $('header');
  function onScroll() {
    const y = scrollY, max = D.documentElement.scrollHeight - innerHeight;
    if (header) {
      header.classList.toggle('x-solid', y > 60 && !H.classList.contains('locked'));
      header.style.setProperty('--x-p', max > 0 ? (y / max).toFixed(4) : 0);
    }
  }

  // ---------- pointer: eyes cursor only over the 3D story; glass follows the light ----------
  const STORY = '#hero,#noise,#signal,#game';
  if (fine) addEventListener('pointermove', (e) => {
    const t = e.target;
    if (!t || !t.closest) return;
    const inStory = t.closest(STORY) || t.id === 'gl' || !t.closest('main,header,footer,.ov');
    H.classList.toggle('x-native', !inStory || !!t.closest('.fcard,.hero-t a,.hero-t button'));
    const g = t.closest('.sec .glass');
    if (g) { const r = g.getBoundingClientRect(); g.style.setProperty('--px', e.clientX - r.left + 'px'); g.style.setProperty('--py', e.clientY - r.top + 'px'); }
  }, { passive: true });

  // ---------- comparison: her light runs down the USHA column ----------
  function compareUI() {
    const w = $('.cmpw'), t = $('#cmp'); if (!w || !t) return;
    w.classList.add('x-io');
    $$('tr', t).forEach((tr, r) => $$('td,th', tr).forEach((c) => c.style.setProperty('--r', r)));
    const th = $('th.u', t), logo = $('header .logo svg');
    if (th && logo && !th.querySelector('svg')) { th.textContent = ''; th.append(logo.cloneNode(true)); th.setAttribute('aria-label', 'USHA'); }
    let beam = $('.x-beam', w);
    if (!beam) { beam = D.createElement('i'); beam.className = 'x-beam'; beam.setAttribute('aria-hidden', 'true'); w.append(beam); }
    requestAnimationFrame(() => {
      const c = th && th.getBoundingClientRect(), W = w.getBoundingClientRect();
      if (!c) return;
      beam.style.setProperty('--bx', c.left - W.left + 'px'); beam.style.setProperty('--bw', c.width + 'px'); beam.style.setProperty('--bh', t.offsetHeight + 'px');
    });
    watch(w.parentNode);
  }

  // ---------- roles: absorbed into one engine ----------
  function rolesUI() {
    const box = $('#roles'); if (!box) return;
    const one = $('.one', box); if (!one) return;
    requestAnimationFrame(() => {
      const o = one.getBoundingClientRect(), ox = o.left + o.width / 2, oy = o.top + o.height / 2;
      $$('span:not(.one)', box).forEach((s, i) => {
        const r = s.getBoundingClientRect();
        s.style.setProperty('--tx', ox - (r.left + r.width / 2) + 'px');
        s.style.setProperty('--ty', oy - (r.top + r.height / 2) + 'px');
        s.style.setProperty('--i', i);
      });
    });
  }

  // ---------- monthly numbers: a light meter for each ----------
  let monthPro = true;
  function decorateAreas() {
    $$('#areas .area').forEach((a) => {
      $$('.nums div', a).forEach((row) => {
        const b = $('b', row); if (!b) return;
        const lo = +b.dataset.a, hi = +b.dataset.b, max = hi || 1;
        let m = $('.x-meter', row);
        if (!m) { m = D.createElement('span'); m.className = 'x-meter'; m.setAttribute('aria-hidden', 'true'); m.innerHTML = '<i class="x-pro"></i><i class="x-core"></i>'; row.append(m); }
        m.style.setProperty('--c', (lo / max * 100).toFixed(1) + '%');
        m.style.setProperty('--w', ((monthPro ? hi : lo) / max * 100).toFixed(1) + '%');
      });
      if (!a.classList.contains('x-watched')) {
        a.classList.add('x-watched');
        new IntersectionObserver((es, ob) => es.forEach((e) => { if (e.isIntersecting) { a.classList.add('x-lit'); ob.disconnect(); } }), { rootMargin: '0px 0px -15% 0px' }).observe(a);
      }
    });
  }

  // ---------- live findings: light drawn under each number ----------
  function findingsUI() {
    $$('#fbody .fitem').forEach((f, i) => {
      if ($('.xf', f)) return;
      const v = $('.fv', f); if (v) v.insertAdjacentHTML('afterend', findingChart(i, lang()));
    });
  }

  // ---------- plans ----------
  let plansSet = null;
  function dictLike() {
    const hot = $('#plancards .badge'), cta = $('#plancards a');
    return { p_rec: hot ? hot.textContent : 'Most chosen', p_cta: cta ? cta.textContent.trim() : '' };
  }
  function plansUI() {
    const old = $('#plancards'); if (!old) return;
    let box = $('.x-plans');
    const sel = box?.querySelector('.xp')?.dataset.sel || (monthPro ? 'pro' : 'core');
    if (!box) { box = D.createElement('div'); box.className = 'x-plans'; old.after(box); }
    box.innerHTML = plansHTML(X(), dictLike(), sel);
    const xp = $('.xp', box);
    $$('.xp-r', xp).forEach((r, i) => r.style.setProperty('--d', i));
    const setSel = (s, fromMonth) => {
      xp.dataset.sel = s;
      $$('.xp-tog button', xp).forEach((b) => b.setAttribute('aria-checked', String(b.dataset.p === s)));
      $('.xp-go', xp).dataset.plan = s === 'pro' ? 'USHA Pro' : 'USHA Core';
      if (!fromMonth) { const mb = $(`#mtog button[data-p="${s === 'pro' ? 1 : 0}"]`); if (mb && !mb.classList.contains('on')) mb.click(); }
    };
    $$('.xp-tog button', xp).forEach((b) => b.addEventListener('click', () => setSel(b.dataset.p)));
    $$('a[data-plan]', xp).forEach((a) => a.addEventListener('click', (e) => {
      const hidden = $(`#plancards a[data-plan="${a.dataset.plan}"]`);
      if (hidden) { e.preventDefault(); hidden.click(); }
    }));
    setSel(sel, true);
    plansSet = setSel;
    watch(box);
  }

  // the month toggle drives the meters and the plans switch
  D.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('#mtog button'); if (!b) return;
    monthPro = b.dataset.p === '1';
    decorateAreas();
    if (plansSet) plansSet(monthPro ? 'pro' : 'core', true);
  });

  // ---------- render; again after the bundle re-renders ----------
  const run = (fn) => { try { fn(); } catch (e) { console.warn('[usha-x]', e); } };
  function renderAll() { [compareUI, rolesUI, decorateAreas, findingsUI, plansUI].forEach(run); watch(); onScroll(); }
  const timers = new Map();
  const later = (fn) => { clearTimeout(timers.get(fn)); timers.set(fn, setTimeout(() => run(fn), 40)); };
  new MutationObserver(() => later(renderAll)).observe(H, { attributes: true, attributeFilter: ['lang'] });
  [['#areas', decorateAreas], ['#fbody', findingsUI], ['#cmp', compareUI], ['#roles', rolesUI]].forEach(([s, fn]) => {
    const el = $(s); if (el) new MutationObserver(() => later(fn)).observe(el, { childList: true });
  });
  addEventListener('scroll', onScroll, { passive: true });
  let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { run(compareUI); run(rolesUI); }, 200); });
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', renderAll); else renderAll();
})();
