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
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // in-view: .x-io → .x-in, and .rv created by this layer → .in. Checked on
  // scroll (not observed) because the bundle re-renders and swaps nodes.
  const REV = '.x-io:not(.x-in),.x-plans .xp-cards:not(.in)';
  function revealCheck() {
    $$(REV).forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.88 && r.bottom > 0 && r.height) el.classList.add(el.classList.contains('x-io') ? 'x-in' : 'in');
    });
  }
  const watch = () => revealCheck();

  // ---------- header ----------
  const header = $('header');
  let scrollQ = 0;
  function onScrollQ() { if (!scrollQ) scrollQ = requestAnimationFrame(() => { scrollQ = 0; onScroll(); }); }
  function cacheRects() {
    const fc = $('.fcard'), sh = $('#signal h2');
    if (fc) window.__fc = fc.getBoundingClientRect();
    if (sh) window.__sh = sh.getBoundingClientRect();
  }
  function onScroll() {
    cacheRects();
    wakeCheck(); revealCheck(); vsCheck(); deptScroll(); tilesCheck(); ctrlCheck();
    const y = scrollY, max = D.documentElement.scrollHeight - innerHeight;
    if (header) {
      header.classList.toggle('x-solid', y > 60 && !H.classList.contains('locked'));
      header.style.setProperty('--x-p', max > 0 ? (y / max).toFixed(4) : 0);
    }
  }

  // ---------- pointer: eyes cursor only over the 3D story; glass follows the light ----------
  const STORY = '#hero,#noise,#signal,#game,#talk';
  if (fine) addEventListener('pointermove', (e) => {
    const t = e.target;
    if (!t || !t.closest) return;
    // popup windows (plans, the live chat, USHA's story, section 03 pop-ups) sit above the eyes cursor: they always get the normal pointer
    const inStory = !t.closest('.x-modal,.ns,.t3-modal') && (t.closest(STORY) || t.id === 'gl' || !t.closest('main,header,footer,.ov'));
    H.classList.toggle('x-native', !inStory || !!t.closest('.fcard,.hero-t a,.hero-t button,.t3-cards a,.t3-cards button'));
    const g = t.closest('.sec .glass');
    if (g) { const r = g.getBoundingClientRect(); g.style.setProperty('--px', e.clientX - r.left + 'px'); g.style.setProperty('--py', e.clientY - r.top + 'px'); }
  }, { passive: true });

  // ---------- waking headlines: letters start thin and faint, wake bold when seen ----------
  const WAKE = '.sec h2.big,.eng h3';
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


  // ---------- comparison: a duel, one rival at a time, on a lit spine ----------
  let vsT = 0, vsPicked = false, vsRival = 0;
  const NO = /^(no|нет|لا)\.?$/i;
  function compareUI() {
    const w = $('.cmpw'), t = $('#cmp'); if (!w || !t) return;
    const rows = $$('tr', t), head = $$('th', rows[0]).map((h) => h.textContent.trim());
    const rivals = head.slice(1, -1);
    const data = rows.slice(1).map((tr) => $$('td', tr).map((c) => c.textContent.trim()));
    const logo = $('header .logo svg');
    w.classList.add('x-hid'); $('#cmpm')?.classList.add('x-hid');
    let vs = $('.x-vs');
    if (!vs) { vs = D.createElement('div'); vs.className = 'x-vs'; w.after(vs); }
    vs.innerHTML = `<div class="vs-tabs" role="tablist">${rivals.map((r, i) => `<button type="button" role="tab" data-i="${i}" aria-selected="${i === vsRival}">${esc(r)}</button>`).join('')}</div>
    <div class="vs-head" aria-hidden="true"><span class="vs-rv">${esc(rivals[vsRival])}</span><span class="vs-x">VS</span><span class="vs-us"></span></div>
    <ol class="vs-rows">${data.map((d, r) => `<li style="--r:${r}"><div class="vs-l"><span class="vs-flip">${esc(d[1 + vsRival])}</span></div><div class="vs-c"><span>${esc(d[0])}</span></div><div class="vs-r"><i></i>${esc(d[d.length - 1])}</div></li>`).join('')}</ol>`;
    if (logo) $('.vs-us', vs).append(logo.cloneNode(true)); else $('.vs-us', vs).textContent = 'USHA';
    const show = (i) => {
      vsRival = i;
      $$('.vs-tabs button', vs).forEach((b) => b.setAttribute('aria-selected', String(+b.dataset.i === i)));
      const rv = $('.vs-rv', vs); rv.classList.remove('in'); void rv.offsetWidth; rv.textContent = rivals[i]; rv.classList.add('in');
      $$('.vs-rows li', vs).forEach((li, r) => {
        const f = $('.vs-flip', li), v = data[r][1 + i];
        $('.vs-l', li).dataset.who = rivals[i];
        f.classList.remove('in'); void f.offsetWidth;
        f.textContent = v; li.classList.toggle('no', NO.test(v)); f.classList.add('in');
      });
    };
    $$('.vs-tabs button', vs).forEach((b) => b.addEventListener('click', () => { vsPicked = true; show(+b.dataset.i); }));
    show(vsRival);
    clearInterval(vsT);
    vsT = setInterval(() => {
      if (vsPicked || reduce || D.hidden) return;
      const r = vs.getBoundingClientRect();
      if (r.top < innerHeight * 0.6 && r.bottom > innerHeight * 0.3) show((vsRival + 1) % rivals.length);
    }, 5200);
  }
  function vsCheck() {
    const vs = $('.x-vs:not(.x-in)'); if (!vs) return;
    const r = vs.getBoundingClientRect();
    if (r.top < innerHeight * 0.8 && r.bottom > 0) vs.classList.add('x-in');
  }

  // ---------- 8 → 1: as you scroll, each role hands its job to USHA ----------
  let dept = null, done = -1;
  function rolesUI() {
    const seven = $('.seven'), box = $('#roles'), x = X().hand; if (!seven || !box || !x) return;
    const roles = $$('span:not(.one)', box).map((r) => r.textContent);
    const text = $(':scope > .rv', seven) || $('.x-d1 > .rv', seven);
    seven.classList.add('x-dept');
    let st = $('.x-stick', seven);
    if (!st) {
      st = D.createElement('div'); st.className = 'x-stick';
      st.innerHTML = '<div class="x-dgrid"><div class="x-d1"></div><ol class="x-roles"></ol><div class="x-her glass"></div></div>';
      seven.prepend(st);
      $('.x-d1', st).append(text);
    }
    const d1 = $('.x-d1', st);
    $$('.x-count,.x-cap,.x-bar,.x-dk', d1).forEach((e) => e.remove());
    d1.insertAdjacentHTML('afterbegin', `<span class="x-dk">${esc(x.kick)}</span>`);
    d1.insertAdjacentHTML('beforeend', `<div class="x-count" aria-live="polite">8</div><div class="x-cap">${esc(x.capMany)}</div><div class="x-bar"><i></i></div>`);
    $('.x-roles', st).innerHTML = roles.map((r, i) => `<li><span class="n">0${i + 1}</span><span class="r">${esc(r)}</span><span class="t">${esc(x.tags[i] || '')}</span></li>`).join('');
    $('.x-her', st).innerHTML = `<div class="hd"><div class="x-orb"><b></b><b></b></div><div><strong>USHA</strong><span>${esc(x.her)}</span></div></div>
      <ul class="x-tasks">${x.tags.map((t) => `<li><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7.5 5.5 11 12 3"/></svg>${esc(t)}</li>`).join('')}</ul>
      <p class="x-foot">${esc(x.foot)}</p>`;
    dept = seven; done = -1; loopK = 0; loopHold = 0;
    setDone(0); deptLoop();
  }
  function spark(from, to) {
    if (reduce || !from.animate) return;
    const orb = $('.x-orb', dept), a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
    const sp = D.createElement('i'); sp.className = 'x-spark'; D.body.append(sp);
    const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, x1 = b.left + 16, y1 = b.top + b.height / 2;
    sp.animate([{ transform: `translate(${x0}px,${y0}px) scale(.6)`, opacity: 1 }, { transform: `translate(${(x0 + x1) / 2}px,${Math.min(y0, y1) - 60}px) scale(1.3)`, opacity: 1 }, { transform: `translate(${x1}px,${y1}px) scale(.4)`, opacity: .2 }], { duration: 650, easing: 'cubic-bezier(.5,0,.2,1)' }).onfinish = () => { sp.remove(); orb.classList.add('got'); setTimeout(() => orb.classList.remove('got'), 260); };
  }
  function setDone(n) {
    if (!dept || n === done) return;
    const x = X().hand, rows = $$('.x-roles li', dept), slots = $$('.x-tasks li', dept);
    rows.forEach((r, i) => {
      const was = r.classList.contains('gone'), now = i < n;
      r.classList.toggle('gone', now);
      const step = n - Math.max(done, 0) === 1;
      setTimeout(() => slots[i] && slots[i].classList.toggle('on', now), now && !was && step ? 520 : 0);
      if (now && !was && done >= 0) spark($('.t', r), slots[i]);
    });
    done = n;
    const left = Math.max(1, 8 - n), c = $('.x-count', dept);
    countTo(c, left, n >= 8);
    $('.x-cap', dept).textContent = n >= 8 ? x.capOne : n === 0 ? x.capMany : (left === 1 ? x.leftOne : x.leftMany);
    $('.x-foot', dept).classList.toggle('on', n >= 8);
    dept.classList.toggle('x-all', n >= 8);
    // whatever happened in between, the card ends in step with the counter
    clearTimeout(dept._sync); dept._sync = setTimeout(() => { const live = $$('.x-tasks li', dept); live.forEach((li, k) => li.classList.toggle('on', k < done)); }, 800);
  }
  // the counter walks to its target one step at a time, so a fast scroll
  // still shows 8 → 7 → 6 … instead of jumping
  function countTo(c, target, one) {
    clearInterval(c._t);
    const stepOnce = () => {
      const cur = +c.textContent || 8;
      if (cur === target) { clearInterval(c._t); c.classList.toggle('one', one); return; }
      c.textContent = cur + (target < cur ? -1 : 1);
      c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
      if (+c.textContent === target) { clearInterval(c._t); c.classList.toggle('one', one); }
    };
    c.textContent = target; c.dataset.n = target; c.classList.toggle('one', one);
    c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
  }
  // 8 → 1 loops on its own whenever the section is on screen: it counts down
  // calmly, holds on 1, then starts again. Nothing depends on scrolling.
  let loopT = 0, loopK = 0, loopHold = 0;
  function deptLoop() {
    clearInterval(loopT);
    loopT = setInterval(() => {
      if (!dept || D.hidden) return;
      const r = dept.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      if (loopHold > 0) { loopHold--; return; }
      if (loopK >= 8) { loopK = 0; setDone(0); loopHold = 1; return; }
      loopK++; setDone(loopK); $('.x-bar i', dept).style.setProperty('--p', (loopK / 8).toFixed(3));
      if (loopK >= 8) loopHold = 5;
    }, 650);
  }
  function deptScroll() {}






  // each number becomes the work itself: one tile per deliverable, shaped like
  // it; tiles Pro adds are ember and leave when Core is chosen
  let monthPro = true;
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
    cards[0].insertAdjacentHTML('afterbegin', `<div class="x-w xw-auto" aria-hidden="true"><div class="xw-top"><span class="xw-ic xw-sw"><i></i></span><span class="xw-lab xw-on">${esc(c.on)}</span></div><span class="xw-feed">${c.feed.map((f, i) => `<span class="${i ? '' : 'cur'}"><b>✓</b>${esc(f)}</span>`).join('')}</span></div>`);
    cards[1].insertAdjacentHTML('afterbegin', `<div class="x-w xw-ask"><div class="xw-top"><span class="xw-ic xw-dot" aria-hidden="true"></span><span class="xw-q">${esc(c.ask)}</span></div><div class="xw-act"><div class="xw-btns"><button type="button" class="xw-yes">${esc(c.yes)}</button><button type="button" class="xw-no">${esc(c.later)}</button></div><p class="xw-ok" aria-live="polite">${esc(c.ok)}</p></div></div>`);
    cards[2].insertAdjacentHTML('afterbegin', `<div class="x-w xw-lock" aria-hidden="true"><div class="xw-top"><span class="xw-ic">${lockSvg}</span><span class="xw-lab xw-only">${esc(c.only)}</span></div><span class="xw-chips">${c.lock.map((k) => `<span>${esc(k)}</span>`).join('')}</span></div>`);
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

  // ---------- guarantees: a seal and four promises ----------
  function guarUI() {
    const g = $('.guar'); if (!g) return;
    g.classList.add('x-guar');
    $$('li', g).forEach((li, i) => { li.style.setProperty('--i', i); li.dataset.n = '0' + (i + 1); });
    $('.x-seal', g)?.remove();
    const ring = X().guarRing || '';
    const logo = $('header .logo svg');
    g.insertAdjacentHTML('afterbegin', `<div class="x-seal" aria-hidden="true"><svg viewBox="0 0 200 200"><defs><path id="xsr" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"/></defs><text><textPath href="#xsr" textLength="488" lengthAdjust="spacing">${esc(ring)}</textPath></text></svg><span class="x-seal-c"></span></div>`);
    if (logo) $('.x-seal-c', g).append(logo.cloneNode(true));
  }
  // ---------- free week: the deliverables on a timeline ----------
  function freeUI() {
    const d = $('.deliv'); if (!d) return;
    d.classList.add('x-line');
    $$('li', d).forEach((li, i) => li.style.setProperty('--i', i));
    let end = $('.x-decide'); if (!end) { end = D.createElement('div'); end.className = 'x-decide'; d.after(end); }
    end.textContent = X().decide || '';
  }
  // ---------- small things: chat header, galaxy label numbers ----------
  function sickUI() {
    const p = $('.sick'); if (!p || p.querySelector('.x-hl')) return;
    const t = p.innerHTML; p.innerHTML = `<span class="x-hl">${t}</span>`;
  }
  function smallUI() {
    sickUI(); chipsGlide();
    const chat = $('#chat'); if (chat) chat.dataset.head = X().chatHead || '';
    $$('.alg b').forEach((b, i) => b.dataset.n = '0' + (i + 1));
  }

  // ---------- phones: the industry chips run in a loop, like the partners strip ----------
  function chipsGlide() {
    const row = $('#ichips'); if (!row || reduce) return;
    const orig = $$('button:not(.x-clone)', row);
    if (!orig.length) return;
    if (!row.querySelector('.x-clone')) {
      orig.forEach((b, i) => { const c = b.cloneNode(true); c.classList.add('x-clone'); c.setAttribute('aria-hidden', 'true'); c.tabIndex = -1; c.addEventListener('click', () => orig[i].click()); row.append(c); });
      const sync = () => $$('.x-clone', row).forEach((c, i) => c.classList.toggle('on', orig[i].classList.contains('on')));
      orig.forEach((b) => new MutationObserver(sync).observe(b, { attributes: true, attributeFilter: ['class'] })); sync();
    }
    if (row.dataset.xg) return; row.dataset.xg = 1;
    let touched = 0, last = performance.now(), cycleT = performance.now(), x = 0;
    const stop = () => { touched = performance.now(); x = Math.abs(row.scrollLeft); };
    ['pointerdown', 'touchstart', 'wheel'].forEach((ev) => row.addEventListener(ev, stop, { passive: true }));
    (function tick(now) {
      requestAnimationFrame(tick);
      const dt = Math.min(64, now - last); last = now;
      if (innerWidth > 900 || now - touched < 2500) return;
      const r = row.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      const half = row.scrollWidth / 2;
      x += dt * 0.035; if (x >= half) x -= half;
      row.scrollLeft = x * (rtl ? -1 : 1);
      if (now - cycleT > 9000 && now - touched > 9000) {
        cycleT = now; const i = orig.findIndex((b) => b.classList.contains('on'));
        orig[(i + 1) % orig.length].click();
      }
    })(performance.now());
  }

  // ---------- live parts must not be frozen by browser translation ----------
  function noTranslate() {
    ['.x-dept', '.fcard', '#chat', '#bub', '#tasks', '#toast', '.x-vs', '.ctrl', '#areas', '.x-plans'].forEach((q) => $$(q).forEach((e) => { e.setAttribute('translate', 'no'); e.classList.add('notranslate'); }));
  }
  // ---------- findings card: always leaves room above it for USHA ----------
  function fcardFit() {
    const c = $('.fcard'); if (!c) return;
    c.style.transform = '';
    if (innerWidth <= 900) return;
    const r = c.getBoundingClientRect(), need = 200, h = c.offsetHeight, bottomGap = innerHeight - r.bottom;
    const room = innerHeight - bottomGap - h;
    const k = room < need ? Math.max(.72, (innerHeight - bottomGap - need) / h) : 1;
    if (k < 1) { c.style.transformOrigin = rtl ? '0 100%' : '100% 100%'; c.style.transform = `scale(${k.toFixed(3)})`; }
  }

  // ---------- FAQ: smooth open and close ----------
  function faqUI() {
    $$('#faq details').forEach((dt, i) => {
      const sm = $('summary', dt); if (!sm) return;
      dt.style.setProperty('--i', i); sm.dataset.n = String(i + 1).padStart(2, '0');
      if (dt.dataset.xa) return; dt.dataset.xa = 1;
      sm.addEventListener('click', (e) => {
        const p = $('p', dt); if (!p || reduce || !p.animate) return;
        e.preventDefault();
        if (dt.open) {
          dt.classList.add('closing');
          p.animate([{ opacity: 1, transform: 'none', height: p.offsetHeight + 'px' }, { opacity: 0, transform: 'translateY(-6px)', height: '0px' }], { duration: 320, easing: 'ease' }).onfinish = () => { dt.open = false; dt.classList.remove('closing'); };
        } else {
          dt.open = true;
          const h = p.offsetHeight;
          p.animate([{ opacity: 0, transform: 'translateY(-8px)', height: '0px' }, { opacity: 1, transform: 'none', height: h + 'px' }], { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' });
        }
      });
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
    if (!box) { box = D.createElement('div'); box.className = 'x-plans'; old.after(box); }
    const wasOpen = !!box.querySelector('.xp-more[open]');
    box.innerHTML = plansHTML(X(), dictLike());
    if (wasOpen) $('.xp-more', box).open = true;
    $$('a[data-plan]', box).forEach((a) => a.addEventListener('click', (e) => {
      const hidden = $(`#plancards a[data-plan="${a.dataset.plan}"]`) || $('#plancards a');
      if (hidden) { e.preventDefault(); hidden.click(); }
    }));
    $$('.xp-card', box).forEach((c, i) => c.style.setProperty('--i', i));
    $$('.xp-det', box).forEach((b) => b.addEventListener('click', () => openPlan(b.dataset.k, b.closest('.xp-card'))));
    watch(box);
  }

  // the floating screen for a plan: it grows out of its card
  let lastFocus = null;
  function openPlan(k, card) {
    closePlan(true);
    lastFocus = D.activeElement;
    const m = D.createElement('div'); m.className = 'x-modal';
    m.innerHTML = `<div class="xm-scrim"></div>${planScreenHTML(X(), dictLike(), k)}`;
    D.body.append(m); H.classList.add('x-modal-on');
    const panel = $('.xm-panel', m);
    if (card && panel.animate && !reduce) {
      const a = card.getBoundingClientRect(), b = panel.getBoundingClientRect();
      const sx = a.width / b.width, sy = a.height / b.height, dx = a.left + a.width / 2 - (b.left + b.width / 2), dy = a.top + a.height / 2 - (b.top + b.height / 2);
      panel.animate([{ transform: `translate(${dx}px,${dy}px) scale(${sx},${sy})`, opacity: .4 }, { transform: 'none', opacity: 1 }], { duration: 560, easing: 'cubic-bezier(.16,1,.3,1)' });
    }
    requestAnimationFrame(() => m.classList.add('on'));
    $('.xm-x', m).focus();
    $('.xm-x', m).addEventListener('click', () => closePlan());
    $('.xm-scrim', m).addEventListener('click', () => closePlan());
    $$('a[data-plan]', m).forEach((a) => a.addEventListener('click', (e) => {
      const hidden = $(`#plancards a[data-plan="${a.dataset.plan}"]`) || $('#plancards a');
      closePlan(true);
      if (hidden) { e.preventDefault(); hidden.click(); }
    }));
  }
  function closePlan(now) {
    const m = $('.x-modal'); if (!m) return;
    H.classList.remove('x-modal-on');
    if (now || reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && $('.x-modal')) closePlan(); });

  // the month toggle drives the meters and the plans switch
  D.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('#mtog button'); if (!b) return;
    monthPro = b.dataset.p === '1';
    decorateAreas();
    if (plansSet) plansSet(monthPro ? 'pro' : 'core', true);
  });

  // ---------- render; again after the bundle re-renders ----------
  const run = (fn) => { try { fn(); } catch (e) { console.warn('[usha-x]', e); } };
  function renderAll() { [wakeUI, compareUI, rolesUI, decorateAreas, legendUI, ctrlUI, guarUI, freeUI, faqUI, smallUI, noTranslate, fcardFit, findingsUI, plansUI].forEach(run); watch(); onScroll(); }
  const timers = new Map();
  const later = (fn) => { clearTimeout(timers.get(fn)); timers.set(fn, setTimeout(() => run(fn), 40)); };
  new MutationObserver(() => later(renderAll)).observe(H, { attributes: true, attributeFilter: ['lang'] });
  [['#areas', decorateAreas], ['#fbody', findingsUI], ['#cmp', compareUI], ['#roles', rolesUI], ['#faq', faqUI], ['.sick', sickUI], ['.alg b', smallUI]].forEach(([s, fn]) => {
    const el = $(s); if (el) new MutationObserver(() => later(fn)).observe(el, { childList: true });
  });
  addEventListener('scroll', onScrollQ, { passive: true });
  if ('serviceWorker' in navigator && location.protocol === 'https:') addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  addEventListener('resize', () => run(fcardFit));
  
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', renderAll); else renderAll();
})();
