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

  // in-view: .x-io → .x-in, and .rv created by this layer → .in. Checked on
  // scroll (not observed) because the bundle re-renders and swaps nodes.
  const REV = '.x-io:not(.x-in),.x-plans .rv:not(.in),.x-plans .glass:not(.in)';
  function revealCheck() {
    $$(REV).forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.88 && r.bottom > 0 && r.height) el.classList.add(el.classList.contains('x-io') ? 'x-in' : 'in');
    });
  }
  const watch = () => revealCheck();

  // ---------- header ----------
  const header = $('header');
  function onScroll() {
    wakeCheck(); revealCheck(); handCheck(); tilesCheck(); ctrlCheck();
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

  // ---------- waking headlines: letters start thin and faint, wake bold when seen ----------
  const WAKE = '.sec h2.big,.seven h3,.eng h3,.g-in h2';
  // checked on scroll rather than observed: the bundle can swap these nodes
  function wakeCheck() {
    $$('.x-wake:not(.x-lit)').forEach((h) => {
      const r = h.getBoundingClientRect();
      if (r.top > innerHeight * 0.82 || r.bottom < 0 || !r.height) return;
      const n = h.querySelectorAll('.xc').length;
      h.classList.add('x-lit');
      setTimeout(() => h.classList.add('x-done'), n * 18 + 1300);
    });
  }
  function wakeUI() {
    $$(WAKE).forEach((h) => {
      if (h.querySelector('.xc')) return;
      const text = h.textContent;
      let k = 0;
      const walk = (node) => [...node.childNodes].forEach((n) => {
        if (n.nodeType !== 3) { walk(n); return; }
        const frag = D.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((word) => {
          if (!word) return;
          if (/^\s+$/.test(word)) { frag.append(word); return; }
          const w = D.createElement('span'); w.className = 'xw';
          // Arabic letters join, so Arabic wakes word by word
          (rtl ? [word] : [...word]).forEach((ch) => { const c = D.createElement('span'); c.className = 'xc'; c.style.setProperty('--k', k++); c.textContent = ch; w.append(c); });
          frag.append(w);
        });
        n.replaceWith(frag);
      });
      walk(h);
      h.setAttribute('aria-label', text.replace(/\s+/g, ' ').trim());
      h.classList.add('x-wake');
      h.classList.remove('x-lit', 'x-done');
      if (!h.dataset.xwo) {
        h.dataset.xwo = 1;
        new MutationObserver(() => { if (!h.querySelector('.xc')) later(wakeUI); }).observe(h, { childList: true });
      }
    });
  }
  // the letters nearest the cursor get heavier, the way her gaze lights things
  if (fine && !rtl) {
    let raf = 0, ev = null;
    addEventListener('pointermove', (e) => {
      ev = e; if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const h = ev.target.closest && ev.target.closest('.x-wake.x-done');
        $$('.x-wake .xc[style*="font-weight"]').forEach((c) => { if (!h || !h.contains(c)) c.style.fontWeight = ''; });
        if (!h) return;
        $$('.xc', h).forEach((c) => {
          const r = c.getBoundingClientRect(), d = Math.hypot(ev.clientX - (r.left + r.width / 2), ev.clientY - (r.top + r.height / 2));
          const kk = Math.max(0, 1 - d / 150);
          c.style.fontWeight = kk > 0.02 ? Math.round(720 + kk * 180) : '';
        });
      });
    }, { passive: true });
  }

  // ---------- comparison: her light runs down the USHA column ----------
  function compareUI() {
    const w = $('.cmpw'), t = $('#cmp'); if (!w || !t) return;
    w.classList.add('x-io');
    $$('tr', t).forEach((tr, r) => $$('td,th', tr).forEach((c) => c.style.setProperty('--r', r)));
    $$('td:not(.u):not(:first-child)', t).forEach((c) => c.classList.toggle('x-no', /^(no|нет|لا)\.?$/i.test(c.textContent.trim())));
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

  // ---------- 8 → 1: every role hands its job to USHA ----------
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let handRun = 0;
  function rolesUI() {
    const box = $('#roles'), x = X().hand; if (!box || !x) return;
    const roles = $$('span:not(.one)', box).map((r) => r.textContent);
    box.classList.add('x-hid');
    let el = $('.x-hand');
    if (!el) { el = D.createElement('div'); el.className = 'x-hand'; box.after(el); }
    const tick = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 7.5l3 3 6-6.5"/></svg>';
    el.innerHTML = `<ol class="xh-roles">${roles.map((r, i) => `<li><span class="xh-n">0${i + 1}</span><span class="xh-r">${esc(r)}</span><span class="xh-t">${esc(x.tags[i] || '')}</span></li>`).join('')}</ol>
    <div class="xh-side glass">
      <div class="xh-count"><b>8</b><span>${esc(x.capMany)}</span></div>
      <div class="xh-her"><div class="xh-orb" aria-hidden="true"><i></i><i></i></div><div><strong>USHA</strong><span>${esc(x.her)}</span></div></div>
      <ul class="xh-tasks">${x.tags.map((t) => `<li>${tick}<span>${esc(t)}</span></li>`).join('')}</ul>
      <p class="xh-foot">${esc(x.foot)}</p>
      <button type="button" class="xh-replay">↻ ${esc(x.replay)}</button>
    </div>`;
    $('.xh-replay', el).addEventListener('click', () => playHand(el, true));
    el.dataset.played = '';
    handRun++;
    if (reduce) finishHand(el);
  }
  function finishHand(el) {
    $$('.xh-roles li', el).forEach((li) => li.classList.add('gone'));
    $$('.xh-tasks li', el).forEach((li) => li.classList.add('on'));
    const c = $('.xh-count', el); $('b', c).textContent = '1'; c.classList.add('one'); $('span', c).textContent = X().hand.capOne;
    el.classList.add('done');
  }
  function playHand(el, again) {
    if (el.dataset.played && !again) return;
    el.dataset.played = 1;
    const run = ++handRun, x = X().hand;
    const lis = $$('.xh-roles li', el), tasks = $$('.xh-tasks li', el), c = $('.xh-count', el), orb = $('.xh-orb', el);
    el.classList.remove('done'); c.classList.remove('one');
    lis.forEach((li) => li.classList.remove('gone')); tasks.forEach((t) => t.classList.remove('on'));
    $('b', c).textContent = '8'; $('span', c).textContent = x.capMany;
    lis.forEach((li, i) => setTimeout(() => {
      if (run !== handRun) return;
      const from = $('.xh-t', li).getBoundingClientRect(), to = orb.getBoundingClientRect();
      const sp = D.createElement('i'); sp.className = 'xh-spark';
      sp.style.left = from.left + from.width / 2 + 'px'; sp.style.top = from.top + from.height / 2 + 'px';
      D.body.append(sp);
      li.classList.add('gone');
      requestAnimationFrame(() => { sp.style.transform = `translate(${to.left + to.width / 2 - from.left - from.width / 2}px,${to.top + to.height / 2 - from.top - from.height / 2}px) scale(.6)`; });
      setTimeout(() => {
        sp.remove(); if (run !== handRun) return;
        tasks[i] && tasks[i].classList.add('on');
        orb.classList.remove('got'); void orb.offsetWidth; orb.classList.add('got');
        const n = Math.max(1, 7 - i);
        $('b', c).textContent = n;
        if (i === lis.length - 1) { c.classList.add('one'); $('span', c).textContent = x.capOne; el.classList.add('done'); }
      }, 620);
    }, 500 + i * 520));
  }
  function handCheck() {
    const el = $('.x-hand'); if (!el || el.dataset.played || reduce) return;
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.62 && r.bottom > 0) playHand(el);
  }

  // ---------- monthly numbers: a light meter for each ----------
  let monthPro = true;
  // each number becomes the work itself: one tile per deliverable, shaped like
  // it; tiles Pro adds are ember and leave when Core is chosen
  const SHAPES = [['comp', 'mkt'], ['post', 'story'], ['video', 'edit', 'shoot', 'design'], ['promo', 'ads', 'creator']];
  function decorateAreas() {
    $$('#areas .area').forEach((a, ai) => {
      $$('.nums div', a).forEach((row, ri) => {
        const b = $('b', row); if (!b) return;
        const lo = +b.dataset.a, hi = +b.dataset.b;
        row.querySelector('.x-meter')?.remove();
        let t = $('.x-tiles', row);
        if (!t || +t.dataset.n !== hi) {
          t?.remove();
          t = D.createElement('span'); t.className = `x-tiles s-${(SHAPES[ai] || [])[ri] || 'post'}`; t.dataset.n = hi; t.setAttribute('aria-hidden', 'true');
          t.innerHTML = Array.from({ length: hi }, (_, k) => `<i class="${k >= lo ? 'x' : ''}" style="--k:${k}"></i>`).join('');
          row.append(t);
        }
        $$('i.x', t).forEach((i) => i.classList.toggle('off', !monthPro));
      });
      if (!a.classList.contains('x-watched')) a.classList.add('x-watched');
    });
    tilesCheck();
  }
  function tilesCheck() {
    $$('#areas .area:not(.x-lit)').forEach((a) => {
      const r = a.getBoundingClientRect();
      if (r.top < innerHeight * 0.85 && r.bottom > 0) a.classList.add('x-lit');
    });
  }

  function legendUI() {
    const a = $('#areas'); if (!a) return;
    let l = $('.x-legend'); if (!l) { l = D.createElement('div'); l.className = 'x-legend'; a.after(l); }
    l.innerHTML = `<span><i></i>${esc(X().legendCore || '')}</span><span><i class="x"></i>${esc(X().legendPro || '')}</span>`;
  }

  // ---------- control: three small live scenes ----------
  let feedT = 0, askT = 0;
  function ctrlUI() {
    const cards = $$('.ctrl > div'), c = X().ctrl; if (cards.length < 3 || !c) return;
    $$('.x-w').forEach((w) => w.remove());
    const lockSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="sh" d="M7 11V8a5 5 0 0 1 10 0v3"/><rect x="4.5" y="11" width="15" height="10" rx="3"/><circle cx="12" cy="16" r="1.4"/></svg>';
    cards[0].insertAdjacentHTML('afterbegin', `<div class="x-w xw-auto" aria-hidden="true"><span class="xw-sw"><i></i></span><span class="xw-on">${esc(c.on)}</span><span class="xw-feed">${c.feed.map((f, i) => `<span class="${i ? '' : 'cur'}"><b>✓</b>${esc(f)}</span>`).join('')}</span></div>`);
    cards[1].insertAdjacentHTML('afterbegin', `<div class="x-w xw-ask"><p class="xw-q"><span class="xw-dot" aria-hidden="true"></span>${esc(c.ask)}</p><div class="xw-act"><div class="xw-btns"><button type="button" class="xw-yes">${esc(c.yes)}</button><button type="button" class="xw-no">${esc(c.later)}</button></div><p class="xw-ok" aria-live="polite">${esc(c.ok)}</p></div></div>`);
    cards[2].insertAdjacentHTML('afterbegin', `<div class="x-w xw-lock" aria-hidden="true">${lockSvg}<span class="xw-chips">${c.lock.map((k) => `<span>${esc(k)}</span>`).join('')}</span><span class="xw-only">${esc(c.only)}</span></div>`);
    // feed rolls through what she did today
    clearInterval(feedT);
    feedT = setInterval(() => {
      const f = $('.xw-feed'); if (!f || reduce) return;
      const items = $$('span', f), i = items.findIndex((x) => x.classList.contains('cur'));
      items[i].classList.remove('cur'); items[i].classList.add('was');
      setTimeout(() => items[i].classList.remove('was'), 700);
      items[(i + 1) % items.length].classList.add('cur');
    }, 2400);
    // the yes: visitors can press it; on its own it gets pressed once in a while
    const ask = $('.xw-ask');
    const approve = () => { ask.classList.add('ok'); clearTimeout(askT); askT = setTimeout(() => ask.classList.remove('ok'), 4200); };
    $('.xw-yes', ask).addEventListener('click', approve);
    $('.xw-no', ask).addEventListener('click', () => { ask.classList.add('no'); setTimeout(() => ask.classList.remove('no'), 600); });
  }
  function ctrlCheck() {
    const ask = $('.xw-ask'); if (!ask || ask.dataset.auto) return;
    const r = ask.getBoundingClientRect();
    if (r.top < innerHeight * 0.7 && r.bottom > 0) {
      ask.dataset.auto = 1;
      setTimeout(() => { ask.classList.add('press'); setTimeout(() => { ask.classList.remove('press'); ask.classList.add('ok'); setTimeout(() => ask.classList.remove('ok'), 4200); }, 380); }, 1400);
    }
    $$('.xw-lock:not(.shut)').forEach((l) => { const q = l.getBoundingClientRect(); if (q.top < innerHeight * 0.75) l.classList.add('shut'); });
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
  function renderAll() { [wakeUI, compareUI, rolesUI, decorateAreas, legendUI, ctrlUI, findingsUI, plansUI].forEach(run); watch(); onScroll(); }
  const timers = new Map();
  const later = (fn) => { clearTimeout(timers.get(fn)); timers.set(fn, setTimeout(() => run(fn), 40)); };
  new MutationObserver(() => later(renderAll)).observe(H, { attributes: true, attributeFilter: ['lang'] });
  [['#areas', decorateAreas], ['#fbody', findingsUI], ['#cmp', compareUI], ['#roles', rolesUI]].forEach(([s, fn]) => {
    const el = $(s); if (el) new MutationObserver(() => later(fn)).observe(el, { childList: true });
  });
  addEventListener('scroll', onScroll, { passive: true });
  let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { run(compareUI); }, 200); });
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', renderAll); else renderAll();
})();
