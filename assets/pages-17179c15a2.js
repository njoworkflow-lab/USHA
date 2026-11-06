// Markup builders shared by the build (pre-rendered HTML for crawlers) and the
// browser layer (enhance.js). Pure functions: data in, HTML string out.
// The build inlines this file into the browser script with `export` removed.
// Visual language is the site's own: glass, light, peach glow, Geist Light.

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- plans: Core, Pro and Enterprise side by side; every detail in a drawer ----------
const KEY_ROWS = [[0, 0], [0, 1], [2, 1], [2, 2], [1, 1], [1, 2]];
function plansHTML(x, d) {
  const g = x.plansGroups, row = ([gi, ri]) => g[gi] && g[gi][1][ri];
  const keys = KEY_ROWS.map(row).filter(Boolean);
  const extras = g.flatMap(([, list]) => list.filter(([, c]) => c === '—').map(([l]) => l));
  const facts = (k) => keys.map((r) => `<div class="xp-f"><b>${esc(r[k])}</b><span>${esc(r[0])}</span></div>`).join('');
  return `<div class="xp">
  <div class="xp-cards">
    <article class="xp-card xp-core">
      <span class="xp-k">${esc(x.forCore)}</span>
      <h3 class="xp-name">USHA <b>Core</b></h3>
      <p class="xp-desc">${esc(x.plansCore)}</p>
      <div class="xp-facts">${facts(1)}</div>
      <button type="button" class="xp-det" data-k="core">${esc(x.details)} <i aria-hidden="true">↗</i></button>
      <a class="btn btn-g xp-go" href="#free" data-plan="USHA Core"><span>${esc(d.p_cta)}</span></a>
    </article>
    <article class="xp-card xp-pro">
      <i class="xp-aura" aria-hidden="true"></i>
      <span class="xp-k">${esc(x.forPro)}</span><span class="xp-hot">${esc(d.p_rec)}</span>
      <h3 class="xp-name">USHA <b>Pro</b></h3>
      <p class="xp-desc">${esc(x.plansPro)}</p>
      <div class="xp-facts">${facts(2)}</div>
      <div class="xp-plus"><span class="xp-k">${esc(x.proPlus)}</span>${extras.map((e) => `<span class="xp-chip">+ ${esc(e)}</span>`).join('')}</div>
      <button type="button" class="xp-det" data-k="pro">${esc(x.details)} <i aria-hidden="true">↗</i></button>
      <a class="btn btn-p xp-go" href="#free" data-plan="USHA Pro"><span class="d"></span><span>${esc(d.p_cta)}</span></a>
    </article>
    <article class="xp-card xp-ent">
      <span class="xp-k">${esc(x.entKick)}</span>
      <h3 class="xp-name">USHA <b>Enterprise</b></h3>
      <p class="xp-desc">${esc(x.entLead)}</p>
      <div class="xp-plus"><span class="xp-k">${esc(x.entPlus)}</span>${x.entOnlyItems.map(([n, s]) => `<div class="xp-eo"><b>${esc(n)}</b><span>${esc(s)}</span></div>`).join('')}</div>
      <button type="button" class="xp-det" data-k="ent">${esc(x.details)} <i aria-hidden="true">↗</i></button>
      <a class="btn btn-g xp-go" href="#free" data-plan="USHA Enterprise"><span>${esc(d.p_cta)}</span> ↗</a>
    </article>
  </div>
  <p class="xp-both"><b>${esc(x.bothInclude)}</b> ${esc(x.both)}</p>
</div>`;
}

// the floating screen for one plan
function planScreenHTML(x, d, k) {
  const g = x.plansGroups;
  const name = { core: 'Core', pro: 'Pro', ent: 'Enterprise' }[k];
  const lead = { core: x.plansCore, pro: x.plansPro, ent: x.entLead }[k];
  const kick = { core: x.forCore, pro: x.forPro, ent: x.entKick }[k];
  let body;
  if (k === 'ent') {
    body = `<div class="xm-g"><div class="xm-gl">${esc(x.entAll)}</div><p class="xm-note">${esc(x.entAllNote)}</p><div class="xm-tags">${x.entAllItems.map((i) => `<span>${esc(i)}</span>`).join('')}</div></div>
      <div class="xm-g"><div class="xm-gl">${esc(x.entOnly)}</div>${x.entOnlyItems.map(([n, s]) => `<div class="xm-r xm-hi"><span class="xm-l">${esc(n)}</span><span class="xm-v">${esc(s)}</span></div>`).join('')}</div>`;
  } else {
    const col = k === 'core' ? 1 : 2;
    body = g.map(([gn, list]) => `<div class="xm-g"><div class="xm-gl">${esc(gn)}</div>${list.map((r) => {
      const v = r[col], off = v === '—', only = r[1] === '—' && k === 'pro';
      return `<div class="xm-r${off ? ' xm-off' : ''}${only ? ' xm-hi' : ''}"><span class="xm-l">${esc(r[0])}</span><span class="xm-v">${off ? esc(x.inPro) : esc(v)}</span></div>`;
    }).join('')}</div>`).join('');
  }
  return `<div class="xm-panel xm-${k}" role="dialog" aria-modal="true" aria-label="USHA ${name}">
    <i class="xm-aura" aria-hidden="true"></i>
    <header class="xm-hd"><div><span class="xm-k">${esc(kick)}</span><h3>USHA <b>${name}</b></h3><p>${esc(lead)}</p></div>
      <button type="button" class="xm-x" aria-label="${esc(x.close)}"></button></header>
    <div class="xm-body" tabindex="0" role="region" aria-label="USHA ${name}">${body}</div>
    <footer class="xm-ft"><p>${k === 'ent' ? '' : `${esc(x.bothInclude)} ${esc(x.both)}`}</p><a class="btn btn-p xm-go" href="#free" data-plan="USHA ${name}"><span class="d"></span><span>${esc(d.p_cta)}</span></a></footer>
  </div>`;
}

// ---------- live findings: a small picture of light for every number ----------
function findingChart(i, lang) {
  const price = lang === 'ru' ? ['1 290 ₽', '1 058 ₽'] : ['AED 129', 'AED 106'];
  const glow = '<defs><linearGradient id="xg" x1="0" x2="1"><stop offset="0" stop-color="#FFC4A0" stop-opacity=".2"/><stop offset="1" stop-color="#FF5A1F"/></linearGradient></defs>';
  if (i === 0) return `<div class="xf xf-price"><s>${price[0]}</s><i aria-hidden="true"></i><span>${price[1]}</span></div>`;
  if (i === 1) return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}<path d="M4 50 C60 49 100 46 140 36 S200 10 236 8" pathLength="1"/><circle cx="236" cy="8" r="3.5"/></svg>`;
  if (i === 2) return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}${Array.from({ length: 24 }, (_, k) => { const h = 6 + ((k * 37) % 23) + (k > 15 ? 18 : 0); return `<rect x="${4 + k * 9.8}" y="${52 - h}" width="4" height="${h}" rx="2" class="${k > 15 ? 'hi' : ''}" style="--k:${k}"/>`; }).join('')}</svg>`;
  return `<svg class="xf" viewBox="0 0 240 56" aria-hidden="true">${glow}<path d="M4 50 C40 50 60 44 90 42 S130 46 150 30 S178 4 190 10 S215 40 236 44" pathLength="1"/><circle cx="186" cy="8" r="3.5"/></svg>`;
}

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
    // the launch replaced the eight roles with the orbits (launch.js); the hidden block stays still
    if (seven.closest('[hidden]') || getComputedStyle(seven).display === 'none') { dept = null; clearInterval(loopT); return; }
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

  // ---------- control: three small live scenes (the approval itself is its own card, launch.js) ----------
  let feedT = 0;
  function ctrlUI() {
    const cards = $$('.ctrl > div'), c = X().ctrl; if (cards.length < 3 || !c) return;
    $$('.x-w').forEach((w) => w.remove());
    const lockSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="sh" d="M7 11V8a5 5 0 0 1 10 0v3"/><rect x="4.5" y="11" width="15" height="10" rx="3"/><circle cx="12" cy="16" r="1.4"/></svg>';
    cards[0].insertAdjacentHTML('afterbegin', `<div class="x-w xw-auto" aria-hidden="true"><div class="xw-top"><span class="xw-ic xw-sw"><i></i></span><span class="xw-lab xw-on">${esc(c.on)}</span></div><span class="xw-feed">${c.feed.map((f, i) => `<span class="${i ? '' : 'cur'}"><b>✓</b>${esc(f)}</span>`).join('')}</span></div>`);
    cards[1].insertAdjacentHTML('afterbegin', `<div class="x-w xw-wait" aria-hidden="true"><div class="xw-top"><span class="xw-ic xw-dot"></span><span class="xw-lab">${esc(c.wait)}</span></div></div>`);
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
  }
  function ctrlCheck() {
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

  // ---------- phones: glide only the visible scenario choices ----------
  function chipsGlide() {
    const row = $('#ichips'); if (!row || reduce || row.dataset.xg) return;
    row.dataset.xg = 1;
    let touched = 0, last = performance.now(), x = 0;
    const stop = () => { touched = performance.now(); x = Math.abs(row.scrollLeft); };
    ['pointerdown', 'touchstart', 'wheel'].forEach((ev) => row.addEventListener(ev, stop, { passive: true }));
    (function tick(now) {
      requestAnimationFrame(tick);
      const dt = Math.min(64, now - last); last = now;
      if (!row.offsetParent || row.closest('[hidden]') || innerWidth > 900 || now - touched < 2500) return;
      const r = row.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      // Language/scenario rendering replaces these buttons; never retain stale nodes.
      const buttons = $$('button:not(.x-clone)', row);
      if (!buttons.length) return;
      if (!row.querySelector('.x-clone')) {
        buttons.forEach((b, i) => {
          const c = b.cloneNode(true); c.classList.add('x-clone'); c.setAttribute('aria-hidden', 'true'); c.tabIndex = -1;
          c.addEventListener('click', () => $$('button:not(.x-clone)', row)[i]?.click()); row.append(c);
        });
      }
      $$('.x-clone', row).forEach((c, i) => c.classList.toggle('on', !!buttons[i]?.classList.contains('on')));
      const half = row.scrollWidth / 2;
      if (!half) return;
      x = (x + dt * 0.035) % half;
      row.scrollLeft = x * (rtl ? -1 : 1);
      // Choosing a scenario is always a visitor action, never a timed click.
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
  let planModal = null, lastFocus = null, keepY = 0;
  function openPlan(k, card) {
    closePlan(true);
    lastFocus = D.activeElement; keepY = scrollY;
    const m = D.createElement('div'); m.className = 'x-modal'; planModal = m;
    m.innerHTML = `<div class="xm-scrim"></div>${planScreenHTML(X(), dictLike(), k)}`;
    D.body.append(m); H.classList.add('x-modal-on');
    const panel = $('.xm-panel', m);
    if (card && panel.animate && !reduce) {
      const a = card.getBoundingClientRect(), b = panel.getBoundingClientRect();
      const sx = a.width / b.width, sy = a.height / b.height, dx = a.left + a.width / 2 - (b.left + b.width / 2), dy = a.top + a.height / 2 - (b.top + b.height / 2);
      panel.animate([{ transform: `translate(${dx}px,${dy}px) scale(${sx},${sy})`, opacity: .4 }, { transform: 'none', opacity: 1 }], { duration: 560, easing: 'cubic-bezier(.16,1,.3,1)' });
    }
    requestAnimationFrame(() => m.classList.add('on'));
    $('.xm-x', m).focus({ preventScroll: true });
    $('.xm-x', m).addEventListener('click', () => closePlan());
    $('.xm-scrim', m).addEventListener('click', () => closePlan());
    $$('a[data-plan]', m).forEach((a) => a.addEventListener('click', (e) => {
      const hidden = $(`#plancards a[data-plan="${a.dataset.plan}"]`) || $('#plancards a');
      closePlan(true);
      if (hidden) { e.preventDefault(); hidden.click(); }
    }));
  }
  function closePlan(now) {
    const m = planModal; if (!m) return; planModal = null;
    m.inert = true;
    H.classList.remove('x-modal-on');
    if (now || reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
    if (Math.abs(scrollY - keepY) > 1) scrollTo({ top: keepY, behavior: 'instant' });
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  D.addEventListener('keydown', (e) => {
    if (!planModal) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closePlan(); return; }
    if (e.key !== 'Tab') return;
    const f = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', planModal)
      .filter((el) => !el.disabled && el.offsetParent !== null && !el.closest('[inert],.ghost'));
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!planModal.contains(D.activeElement)) { e.preventDefault(); (e.shiftKey ? last : first).focus({ preventScroll: true }); }
    else if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus({ preventScroll: true }); }
    else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus({ preventScroll: true }); }
  }, true);

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

// USHA's story: the cover on the page (point 9). A dark card in the site's own
// style, right after the engineers block, with a torn piece of her sketchbook
// and one eye peeking through it. A click loads the story (story bundle, built
// from this folder) and opens it in a popup. Config: window.USHA_STORY.
(() => {
  const D = document, H = D.documentElement;
  const CFG = window.USHA_STORY || {};
  if (!CFG.src || !CFG.cover) return;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const F = CFG.fonts || {};

  const CSS = `
@font-face{font-family:'USHA Hand';font-weight:400 700;font-display:swap;src:url(${F.cav}) format('woff2');unicode-range:U+0000-00FF,U+2000-206F,U+2190-21FF}
@font-face{font-family:'USHA Hand';font-weight:400 700;font-display:swap;src:url(${F.cavc}) format('woff2');unicode-range:U+0400-045F}
@font-face{font-family:'USHA Arabic Hand';font-weight:300 700;font-display:swap;src:url(${F.ar}) format('woff2');unicode-range:U+0600-06FF,U+FB50-FDFF,U+FE70-FEFF}
.x-story{margin:96px 0 0;padding-top:56px;border-top:1px solid var(--line)}
.xs-card{all:unset;box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);align-items:center;gap:48px;width:100%;padding:44px 48px;border-radius:28px;border:1px solid var(--line);background:radial-gradient(600px 300px at 85% 40%,rgba(255,90,31,.10),transparent 70%),linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01));cursor:pointer;position:relative;overflow:hidden;transition:border-color .3s,transform .4s cubic-bezier(.2,.8,.2,1)}
.xs-card:hover{border-color:rgba(255,180,138,.45);transform:translateY(-3px)}
.xs-card:focus-visible{outline:2px solid var(--ember);outline-offset:4px}
.xs-t .kick{color:var(--ink3)}
.xs-t h3{margin:16px 0 14px;font-family:var(--head);font-weight:800;font-size:clamp(30px,3.2vw,52px);line-height:1.02;letter-spacing:-.045em;color:var(--ink)}
.xs-t h3 i{font-style:normal;background:linear-gradient(100deg,#FFD2B8 0%,#FF8A4C 45%,#FF5A1F 100%);-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:.05em}
html[lang=ar] .xs-t h3{line-height:1.3;letter-spacing:0}
.xs-t p{margin:0 0 26px;max-width:460px;color:var(--ink3);font-size:16px;line-height:1.6}
.xs-b{display:inline-flex;align-items:center;gap:12px;padding:14px 22px;border-radius:999px;background:var(--ember);color:#fff;font:600 15px var(--body);box-shadow:0 10px 30px rgba(255,90,31,.3);transition:gap .3s}
.xs-card:hover .xs-b{gap:18px}
.xs-b svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
html[dir=rtl] .xs-b svg{transform:scaleX(-1)}
.xs-art{position:relative;justify-self:center;width:min(100%,440px)}
.xs-art svg{display:block;width:100%;height:auto;overflow:visible}
.xs-paper{transform-origin:50% 60%;transform:rotate(-4deg);transition:transform .6s cubic-bezier(.2,.8,.2,1)}
.xs-card:hover .xs-paper{transform:rotate(-1deg) translateY(-6px)}
.xs-eye{transform-box:fill-box;transform-origin:center;animation:xs-blink 4.2s infinite}
@keyframes xs-blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
.xs-look{transition:transform .3s ease-out}
.xs-pg{animation:xs-peck 2.6s steps(1) infinite}
@keyframes xs-peck{0%{transform:translate(0,0)}30%{transform:translate(3px,2px)}60%{transform:translate(0,0)}80%{transform:translate(-2px,0)}}
.xs-note{font-family:'USHA Hand',cursive;font-weight:700}
html[lang=ar] .xs-note{font-family:'USHA Arabic Hand','USHA Hand',serif}
.xs-card.wait .xs-b{opacity:.7}
@media (max-width:900px){.xs-card{grid-template-columns:1fr;gap:28px;padding:30px 24px}.xs-art{order:-1;width:min(100%,360px)}}
@media (prefers-reduced-motion:reduce){.xs-eye,.xs-pg{animation:none}.xs-card,.xs-paper{transition:none}}
`;
  // the torn page: the cup from chapter one, the pigeon, and a hole she looks through
  const art = (c) => `<svg viewBox="0 0 440 372" aria-hidden="true">
<defs><filter id="xs-pen" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="2" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"/></filter>
<filter id="xs-sh"><feGaussianBlur stdDeviation="14"/></filter>
<clipPath id="xs-hole"><path d="M262 120 C276 96 330 92 344 118 C358 144 334 176 300 176 C270 176 250 146 262 120 Z"/></clipPath></defs>
<g class="xs-paper">
  <path d="M40 40 L392 22 L404 290 L52 300 Z" fill="#000" opacity=".55" filter="url(#xs-sh)" transform="translate(10 16)"/>
  <path d="M34 34 L120 30 L128 22 L170 28 L250 20 L300 26 L396 16 L392 70 L402 120 L396 190 L404 296 L300 300 L240 292 L180 302 L50 298 L44 230 L36 160 L42 100 Z" fill="#EFE6D6"/>
  <path d="M262 120 C276 96 330 92 344 118 C358 144 334 176 300 176 C270 176 250 146 262 120 Z" fill="#0b0a0d"/>
  <g clip-path="url(#xs-hole)"><ellipse cx="300" cy="140" rx="40" ry="34" fill="#FFB48A"/><g class="xs-look"><ellipse class="xs-eye" cx="304" cy="138" rx="9" ry="13" fill="#1B1410"/><circle cx="307" cy="133" r="3" fill="#fff" opacity=".8"/></g></g>
  <g fill="none" stroke="#2A2420" stroke-linecap="round" filter="url(#xs-pen)">
    <path d="M262 120 C276 96 330 92 344 118 C358 144 334 176 300 176 C270 176 250 146 262 120 Z" stroke-width="2.4"/>
    <circle cx="140" cy="168" r="84" stroke-width="3"/><circle cx="140" cy="168" r="62" stroke-width="2"/>
    <path d="M110 150 q12 -8 24 0 M150 148 q12 -8 24 0 M126 196 q16 8 30 0" stroke-width="2.4"/>
    <path d="M34 34 L120 30 L128 22 L170 28 L250 20 L300 26 L396 16 L392 70 L402 120 L396 190 L404 296 L300 300 L240 292 L180 302 L50 298 L44 230 L36 160 L42 100 Z" stroke-width="2" opacity=".5"/>
  </g>
  <g transform="translate(330 262)"><path d="M-22 -4 C-26 -20 -12 -30 4 -26 C18 -22 26 -10 22 0 Z" fill="#9AA2AE"/><path d="M-22 -4 C-26 -20 -12 -30 4 -26 C18 -22 26 -10 22 0 L-22 0" fill="none" stroke="#2A2420" stroke-width="2"/><g class="xs-pg"><circle cx="18" cy="-30" r="8" fill="#A9B1BC" stroke="#2A2420" stroke-width="2"/><circle cx="21" cy="-32" r="2" fill="#2A2420"/><path d="M25 -29 l7 2 l-7 2" fill="#E0A73A"/></g></g>
  <text x="70" y="64" font-family="ui-monospace,monospace" font-size="11" letter-spacing="2" fill="#8C6E58">03:07</text>
</g>
<g class="xs-note" fill="#FF5A1F" font-size="22"><text x="220" y="352" text-anchor="middle"${H.dir === 'rtl' ? ' direction="rtl"' : ''}>${esc(c.note)}</text></g>
<path d="M330 330 C372 318 384 250 352 196" fill="none" stroke="#FF5A1F" stroke-width="2.4" stroke-linecap="round"/><path d="M344 206 l7 -11 l8 11" fill="none" stroke="#FF5A1F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  let loading = null;
  function load() {
    if (window.UshaStory) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise((ok, no) => { const s = D.createElement('script'); s.src = CFG.src; s.onload = ok; s.onerror = () => { loading = null; no(); }; D.head.appendChild(s); });
    return loading;
  }
  const lang = () => (CFG.cover[H.lang] ? H.lang : Object.keys(CFG.cover)[0]);

  function mount() {
    const eng = D.querySelector('#njo .eng');
    if (!eng) return;
    let el = D.querySelector('.x-story');
    const L = lang(), c = CFG.cover[L];
    if (el && el.dataset.lang === L && el.previousElementSibling === eng) return;
    if (!D.getElementById('xs-css')) { const s = D.createElement('style'); s.id = 'xs-css'; s.textContent = CSS; D.head.appendChild(s); }
    if (!el) { el = D.createElement('section'); el.className = 'x-story'; el.setAttribute('translate', 'no'); }
    if (el.previousElementSibling !== eng) eng.after(el);
    el.dataset.lang = L;
    el.innerHTML = `<button type="button" class="xs-card" aria-label="${esc(c.b)}: ${esc(c.h.replace(/<[^>]+>/g, ''))}"><div class="xs-t"><span class="kick">${esc(c.k)}</span><h3>${c.h}</h3><p>${esc(c.p)}</p><span class="xs-b">${esc(c.b)}<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div><div class="xs-art">${art(c)}</div></button>`;
    const b = el.querySelector('.xs-card');
    b.addEventListener('pointerenter', () => load().catch(() => {}), { once: true });
    b.addEventListener('focus', () => load().catch(() => {}), { once: true });
    b.addEventListener('click', () => {
      b.classList.add('wait');
      load().then(() => { b.classList.remove('wait'); window.UshaStory.open(L); }).catch(() => b.classList.remove('wait'));
    });
    // her eye follows the pointer over the card
    if (!reduce) b.addEventListener('pointermove', (e) => {
      const g = b.querySelector('.xs-look'), r = b.querySelector('.xs-art svg').getBoundingClientRect();
      const fx = r.left + r.width * 300 / 440, fy = r.top + r.height * 140 / 372, dx = e.clientX - fx, dy = e.clientY - fy, d = Math.hypot(dx, dy) || 1;
      g.style.transform = `translate(${(dx / d * 9).toFixed(1)}px,${(dy / d * 6).toFixed(1)}px)`;
    });
  }
  // the page is rendered by the main bundle and can re-render: check now, on language change, and once in a while
  const later = () => setTimeout(mount, 60);
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', later); else later();
  new MutationObserver(later).observe(H, { attributes: true, attributeFilter: ['lang'] });
  setInterval(mount, 2000);
})();

// The launch blocks (markup: launch.mjs, copy: launch-copy.mjs through data-t).
// Everything is pre-rendered; this only switches what is shown: the gate's
// Enter, the sector picker in 01, the approval card in 04, the orbits in 07,
// the day picker in 08, the consultation buttons and the break's end screen.
// The bundle re-renders the copy on a language switch; the state set here
// (hidden, aria) survives it.
(() => {
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const talk = () => { if (window.USHA_LIVE && window.USHA_LIVE.api) dispatchEvent(new Event('usha:talk')); else { const t = D.getElementById('talk'); if (t) t.scrollIntoView({ behavior: 'smooth' }); } };

  // a row of tabs: click, and arrow keys along the row (mirrored on the Arabic page)
  function tabs(row, sel, pick) {
    row.addEventListener('click', (e) => { const b = e.target.closest(sel); if (b && row.contains(b)) pick(b); });
    row.addEventListener('keydown', (e) => {
      const b = e.target.closest(sel); if (!b) return;
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!step) return;
      e.preventDefault();
      const all = $$(sel, row), k = (all.indexOf(b) + (H.dir === 'rtl' && e.key.startsWith('Arrow') && !e.key.includes('Up') && !e.key.includes('Down') ? -step : step) + all.length) % all.length;
      all[k].focus(); pick(all[k]);
    });
  }

  function boot() {
    // ---------- gate: Enter wakes her without the hold ----------
    const enter = $('#lEnter');
    if (enter) enter.addEventListener('click', (e) => { e.stopPropagation(); if (window.__xEnter) window.__xEnter(); });

    // ---------- 01: pick a sector, the four forces speak its language ----------
    const pickRow = $('.l-pick');
    if (pickRow) tabs(pickRow, 'button[data-s]', (b) => {
      const s = b.dataset.s;
      $$('button[data-s]', pickRow).forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); });
      $$('#noise .alg').forEach((a) => $$('.l-m', a).forEach((m) => { m.hidden = s === '0' ? m.classList.contains('l-sx') : m.dataset.s !== s; }));
      $('#noise').classList.toggle('l-picked', s !== '0');
    });

    // ---------- 04: the approval moment ----------
    const ap = $('.l-appr');
    if (ap) ap.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const st = b.classList.contains('l-ap-yes') || b.classList.contains('l-ap-pby') ? 'ok' : b.classList.contains('l-ap-no') ? 'pb' : b.classList.contains('l-ap-back') ? 'ask' : null;
      if (st) { ap.dataset.st = st; ap.dataset.via = b.classList.contains('l-ap-pby') ? 'pb' : ''; }
    });

    // ---------- 07: one mind, seven orbits ----------
    const op = $('.l-op');
    if (op) {
      tabs($('.l-orb', op), '.l-o', (b) => {
        $$('.l-o', op).forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
        $$('.l-od', op).forEach((p) => { p.hidden = p.dataset.o !== b.dataset.o; });
      });
      $$('.l-o', op).forEach((x, i) => { x.tabIndex = i ? -1 : 0; });
      $('.l-opap', op).addEventListener('click', () => op.classList.add('go'));
    }

    // ---------- 08: a month, day by day ----------
    const mo = $('.l-mo');
    if (mo) {
      const cal = $('.l-cal', mo);
      tabs(cal, 'button[data-d]', (b) => {
        const d = b.dataset.d, has = !!$(`.l-dd[data-d="${d}"]`, mo);
        $$('button[data-d]', cal).forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
        $$('.l-dd', mo).forEach((p) => { p.hidden = has ? p.dataset.d !== d : p.dataset.d !== '0'; });
        if (!has) $('.l-rt .l-rn', mo).textContent = d;
      });
      $$('button[data-d]', cal).forEach((x, i) => { x.tabIndex = i ? -1 : 0; });
    }

    // ---------- consultation buttons (FAQ, the break) ----------
    D.addEventListener('click', (e) => { const b = e.target.closest && e.target.closest('.l-ask'); if (b) { e.preventDefault(); talk(); } });

    // ---------- the break: its end screen leads to a consultation ----------
    const end = $('.l-gend');
    if (end) {
      addEventListener('usha:game-on', () => { end.hidden = true; $('#game').classList.remove('l-ended'); });
      addEventListener('usha:game-off', () => {
        const w = window.__xgS; if (!w) return;
        const tpl = ($('.l-gtpl', end).textContent || '').replace('{l}', w.lv + 1).replace('{s}', w.caught || 0);
        $('.l-gt', end).textContent = tpl;
        end.hidden = false; $('#game').classList.add('l-ended');
      });
      $('.l-again', end).addEventListener('click', () => { end.hidden = true; $('#game').classList.remove('l-ended'); const g = $('#gstart'); if (g) g.click(); });
    }
  }
  // RU and EN share one page and switch in place: the cases page and the guides follow the language
  function links() {
    if (H.lang !== 'en' && H.lang !== 'ru') return;
    const en = H.lang === 'en';
    $$('a[href^="/"],a[href^="https://usha.one/"]').forEach((a) => {
      const u = a.getAttribute('href'), m = u.match(/^(https:\/\/usha\.one)?\/(en\/)?((?:cases|guides)\/.*)$/);
      if (m) a.setAttribute('href', `${m[1] || ''}/${en ? 'en/' : ''}${m[3]}`);
    });
  }
  new MutationObserver(links).observe(H, { attributes: true, attributeFilter: ['lang'] });
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();

// The site map's behaviour, on every page (pages.mjs builds the markup):
// the full-screen menu, page links that follow an in-place language switch on
// the home page, the detail pages' header, and the "trained on" moment: a
// constellation of 700+ project stars drawn into one point, USHA.
(() => {
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  // ---------- the menu ----------
  const menu = $('#xnMenu'), burgers = $$('.xn-burger');
  let lastFocus = null;
  function openMenu(from) {
    if (!menu || !menu.hidden) return;
    lastFocus = D.activeElement;
    const r = from.getBoundingClientRect();
    menu.style.setProperty('--ox', `${r.left + r.width / 2}px`); menu.style.setProperty('--oy', `${r.top + r.height / 2}px`);
    menu.hidden = false; H.classList.add('xn-on');
    burgers.forEach((b) => b.setAttribute('aria-expanded', 'true'));
    requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('on')));
    const first = $('.xn-x', menu); if (first) first.focus({ preventScroll: true });
  }
  function closeMenu(now) {
    if (!menu || menu.hidden) return;
    menu.classList.remove('on'); H.classList.remove('xn-on');
    burgers.forEach((b) => b.setAttribute('aria-expanded', 'false'));
    if (now || reduce) menu.hidden = true; else setTimeout(() => { if (!menu.classList.contains('on')) menu.hidden = true; }, 650);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  if (menu) {
    menu.setAttribute('role', 'dialog'); menu.setAttribute('aria-modal', 'true');
    burgers.forEach((b) => b.addEventListener('click', () => openMenu(b)));
    $('.xn-x', menu).addEventListener('click', () => closeMenu());
    // a link to this page's own section closes the menu and scrolls there
    menu.addEventListener('click', (e) => { const a = e.target.closest && e.target.closest('a'); if (a) closeMenu(true); });
    D.addEventListener('keydown', (e) => {
      if (menu.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
      if (e.key !== 'Tab') return;
      const f = $$('a,button', menu).filter((x) => x.offsetParent !== null);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    addEventListener('resize', () => { if (innerWidth > 1180) closeMenu(true); });
  }

  // ---------- page links follow the language when the home page switches in place ----------
  if ($('#gl')) new MutationObserver(() => {
    if (H.lang !== 'en' && H.lang !== 'ru') return;
    const pre = H.lang === 'en' ? '/en/' : '/';
    $$('a[data-pg]').forEach((a) => a.setAttribute('href', a.getAttribute('href').replace(/^\/(?:en\/|ar\/)?/, pre)));
  }).observe(H, { attributes: true, attributeFilter: ['lang'] });

  // ---------- detail pages: the header turns solid once the page moves ----------
  const ph = $('header.pg-h');
  if (ph) {
    const solid = () => ph.classList.toggle('x-solid', scrollY > 40);
    addEventListener('scroll', solid, { passive: true }); solid();
  }

  // ---------- the "trained on" moment ----------
  const tg = $('#taught');
  if (!tg) return;
  const cv = $('.l-tgcv', tg), stage = $('.l-tgs', tg), me = $('.l-tgu', tg), txt = $('.l-tgt', tg);
  const home = tg.classList.contains('l-tg-home');
  const ctx = cv && cv.getContext && cv.getContext('2d');
  if (!ctx) return;
  tg.classList.add('l-js');
  const nums = $$('.l-num', tg).map((b) => ({ b, n: +b.dataset.n, s: b.dataset.s || '', shown: -1 }));

  // the field: 720 stars in loose clusters around her point, no map shape;
  // 18 burn brighter with a trail; some are dim, a few flicker out
  let seed = 7;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const gauss = () => { let u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const N = 720, BRIGHT = 18;
  const clusters = Array.from({ length: 26 }, () => ({ a: rnd() * Math.PI * 2, r: 0.32 + rnd() * 0.68, s: 0.03 + rnd() * 0.06 }));
  const stars = [];
  for (let i = 0; i < N; i++) {
    const c = i < N * 0.85 ? clusters[i % clusters.length] : null;
    const a = c ? c.a + gauss() * c.s * 2.2 : rnd() * Math.PI * 2;
    const r = c ? clamp(c.r + gauss() * c.s, 0.24, 1.15) : 0.24 + rnd() * 0.9;
    const kind = i < BRIGHT ? 2 : rnd() < 0.24 ? 0 : 1; // 2 bright, 1 normal, 0 dim
    stars.push({ a, r, kind, sz: kind === 2 ? 2.4 : kind === 1 ? 1.1 + rnd() * 1.1 : 0.9 + rnd() * 0.5,
      al: kind === 2 ? 1 : kind === 1 ? 0.55 + rnd() * 0.4 : 0.2 + rnd() * 0.15, fl: kind === 0 && rnd() < 0.3, ph: rnd() * 6.28, sp: 0.6 + rnd() * 1.6,
      app: 0, thr: rnd(), drift: (rnd() - 0.5) * 0.012 });
  }
  // arrival: one by one, then faster, then in waves (a decade arriving)
  const order = stars.map((_, i) => i).sort(() => rnd() - 0.5);
  order.forEach((idx, k) => {
    const s = stars[idx];
    s.app = k < 40 ? 0.03 + k / 40 * 0.11 : k < 240 ? 0.14 + (k - 40) / 200 * 0.14 : 0.28 + Math.floor((k - 240) / 160) * 0.07 + rnd() * 0.05;
  });
  stars.forEach((s) => { if (s.kind === 2) s.thr *= 0.3; });

  let W = 0, Ht = 0, dpr = 1, P = { x: 0, y: 0 }, R = 40, textBottom = 0, scaleX = 1, scaleY = 1;
  function layout() {
    const sr = stage.getBoundingClientRect();
    dpr = Math.min(devicePixelRatio || 1, innerWidth < 820 ? 1.25 : 1.5);
    W = sr.width; Ht = sr.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(Ht * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const mr = me.getBoundingClientRect();
    P = { x: mr.left - sr.left + mr.width / 2, y: mr.top - sr.top + mr.height / 2 };
    R = mr.width * (home ? 0.42 : 0.4);
    const tr = txt.getBoundingClientRect(); textBottom = tr.bottom - sr.top;
    scaleX = Math.max(P.x, W - P.x) * 0.98; scaleY = Math.max(P.y, Ht - P.y) * 1.02;
    for (const s of stars) {
      s.x = P.x + Math.cos(s.a) * s.r * scaleX; s.y = P.y + Math.sin(s.a) * s.r * scaleY;
      const dx = s.x - P.x, dy = s.y - P.y, d = Math.hypot(dx, dy) || 1;
      if (d < R * 1.25) { s.x = P.x + dx / d * R * 1.25; s.y = P.y + dy / d * R * 1.25; }
      const d2 = Math.hypot(s.x - P.x, s.y - P.y) || 1;
      s.ex = P.x + (s.x - P.x) / d2 * R; s.ey = P.y + (s.y - P.y) / d2 * R;
      s.inText = s.y < textBottom;
    }
  }

  const ease = (x) => 1 - Math.pow(1 - x, 3);
  let p = reduce ? 1 : 0, t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, Ht);
    // a deep, near-black field over the galaxy behind, open where she sits
    const field = ctx.createRadialGradient(P.x, P.y, R * 1.02, P.x, P.y, R * 1.9);
    field.addColorStop(0, 'rgba(3,3,4,0)'); field.addColorStop(1, 'rgba(3,3,4,.9)');
    ctx.fillStyle = field; ctx.fillRect(0, 0, W, Ht);
    const threadK = clamp((p - 0.5) / 0.32);
    // threads: faint at the edges, brighter where they converge
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineWidth = 0.6;
    for (const s of stars) {
      const f = clamp((p - 0.5 - s.thr * 0.2) / 0.12);
      if (f <= 0 || p < s.app) continue;
      ctx.strokeStyle = s.kind === 2 ? 'rgba(255,150,100,.34)' : s.kind === 1 ? 'rgba(255,106,43,.12)' : 'rgba(255,106,43,.07)';
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x + (s.ex - s.x) * f, s.y + (s.ey - s.y) * f); ctx.stroke();
    }
    // her point: an ember ring that grows as the threads arrive
    if (threadK > 0) {
      const g = ctx.createRadialGradient(P.x, P.y, R * 0.92, P.x, P.y, R * 2.6);
      g.addColorStop(0, 'rgba(255,106,43,0)'); g.addColorStop(0.08, `rgba(255,106,43,${0.34 * threadK})`); g.addColorStop(0.45, `rgba(255,90,31,${0.1 * threadK})`); g.addColorStop(1, 'rgba(255,90,31,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(P.x, P.y, R * 2.6, 0, Math.PI * 2); ctx.arc(P.x, P.y, R * 0.92, 0, Math.PI * 2, true); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    // stars
    for (const s of stars) {
      const in_ = clamp((p - s.app) / 0.025); if (in_ <= 0) continue;
      let al = s.al * in_;
      if (s.fl) al *= 0.5 + 0.5 * Math.sin(t * s.sp + s.ph) > 0.15 ? 1 : 0.05;
      else if (s.kind) al *= 0.82 + 0.18 * Math.sin(t * s.sp + s.ph);
      if (s.inText) al *= 0.4;
      if (s.kind === 2) {
        // a short trail behind it, along its slow orbit
        const ang = Math.atan2(s.y - P.y, s.x - P.x) - Math.PI / 2, len = 26;
        const tx = s.x + Math.cos(ang) * len, ty = s.y + Math.sin(ang) * len;
        const g = ctx.createLinearGradient(s.x, s.y, tx, ty);
        g.addColorStop(0, `rgba(255,196,160,${0.55 * al})`); g.addColorStop(1, 'rgba(255,196,160,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(tx, ty); ctx.stroke();
        ctx.fillStyle = `rgba(255,236,222,${al})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.sz, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(255,106,43,${0.25 * al})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.sz * 3, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.fillStyle = `rgba(255,${s.kind ? 240 : 214},${s.kind ? 228 : 196},${al})`;
        if (s.sz > 1.5) { ctx.beginPath(); ctx.arc(s.x, s.y, s.sz * 0.62, 0, 6.283); ctx.fill(); } else ctx.fillRect(s.x - s.sz / 2, s.y - s.sz / 2, s.sz, s.sz);
      }
    }
    // the counters tick with the arrivals and stop exactly on their facts
    const k = ease(clamp((p - 0.04) / 0.46));
    for (const c of nums) {
      const v = Math.round(c.n * k), str = v >= c.n ? `${c.n}${c.s}` : String(v);
      if (str !== c.shown) { c.b.textContent = str; c.shown = str; }
    }
    tg.classList.toggle('l-land', p > 0.78);
  }
  // bright stars drift along their orbit; the field breathes
  function step(dt) { for (const s of stars) if (s.kind === 2) { s.a += s.drift * dt; s.x = P.x + Math.cos(s.a) * s.r * scaleX; s.y = P.y + Math.sin(s.a) * s.r * scaleY; const d = Math.hypot(s.x - P.x, s.y - P.y) || 1; s.ex = P.x + (s.x - P.x) / d * R; s.ey = P.y + (s.y - P.y) / d * R; } }

  let visible = false, raf = 0, last = 0, played = 0;
  function progress() {
    if (reduce) return 1;
    if (home) { const r = tg.getBoundingClientRect(); return clamp(-r.top / Math.max(1, r.height - innerHeight)); }
    // /people/: it plays once, over a few seconds, the first time it is seen
    if (!played) return 0;
    return clamp((performance.now() - played) / 2800);
  }
  function frame(now) {
    raf = 0;
    if (!visible || D.hidden) return;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0; last = now; t += dt;
    if (!reduce) step(dt);
    p = progress();
    draw();
    if (!reduce) raf = requestAnimationFrame(frame);
  }
  const go = () => { if (!raf && visible) { last = 0; raf = requestAnimationFrame(frame); } };
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible && !home && !played) played = performance.now(); if (visible) { if (reduce) { p = 1; draw(); } else go(); } }, { rootMargin: '80px' }).observe(tg);
  D.addEventListener('visibilitychange', go);
  let rt = 0;
  const relayout = () => { layout(); p = progress(); draw(); };
  let lw = innerWidth, lh = innerHeight;
  addEventListener('resize', () => { if (innerWidth === lw && Math.abs(innerHeight - lh) < 140) return; lw = innerWidth; lh = innerHeight; clearTimeout(rt); rt = setTimeout(relayout, 120); });
  if (D.fonts && D.fonts.ready) D.fonts.ready.then(relayout);
  relayout();
})();

// The detail pages' world (how, people, plans, the stubs and the cases page):
// one light Canvas2D galaxy shared by every page instead of the home page's
// 3D bundle (depth stars, slow drift, an ember and teal nebula per page, a
// faint galaxy arm), USHA's likeness looking around, and the section reveals.
// It pauses when the tab is hidden and draws one still frame for reduced motion.
(() => {
  const D = document;
  const $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- reveals (the home page's bundle does this there) ----------
  const rv = $$('.rv:not(.in)');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add('in'));

  // ---------- her eyes: they follow the pointer, and wander on a phone ----------
  const faces = $$('.xu');
  if (faces.length && !reduce) {
    const look = (x, y) => faces.forEach((f) => {
      const r = f.getBoundingClientRect(); if (!r.width) return;
      const dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height * 0.5), d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 400);
      f.style.setProperty('--ex', `${(dx / d * 3.2 * k).toFixed(2)}%`); f.style.setProperty('--ey', `${(dy / d * 2.4 * k).toFixed(2)}%`);
    });
    if (matchMedia('(hover:hover)').matches) addEventListener('pointermove', (e) => look(e.clientX, e.clientY), { passive: true });
    else setInterval(() => { if (!D.hidden) look(Math.random() * innerWidth, Math.random() * innerHeight); }, 3200);
  }

  // ---------- the galaxy ----------
  const c = D.querySelector('.pg-sky');
  const ctx = c && c.getContext && c.getContext('2d');
  if (!ctx) return;
  const TONE = { ember: [[255, 106, 43], [63, 167, 160]], teal: [[63, 167, 160], [255, 106, 43]], peach: [[255, 150, 100], [63, 167, 160]] }[c.dataset.tone || 'ember'];
  let W = 0, H = 0, dpr = 1, stars = [], neb = null, arm = null, raf = 0, t0 = performance.now();
  let seed = 11;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  function build() {
    seed = 11;
    dpr = Math.min(devicePixelRatio || 1, innerWidth < 820 ? 1.25 : 1.5);
    W = innerWidth; H = Math.max(innerHeight, c.getBoundingClientRect().height || 0);
    c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(760, (W * H) / 1500));
    stars = Array.from({ length: n }, () => {
      const z = rnd(), warm = rnd();
      return { x: rnd() * W, y: rnd() * H, z, r: 0.35 + z * z * 1.5, a: 0.18 + z * 0.7, tw: 0.4 + rnd() * 1.8, ph: rnd() * 6.28,
        col: warm > 0.93 ? '255,190,150' : warm > 0.88 ? '169,236,229' : '255,246,238' };
    });
    // nebula: two tones, soft, drawn once at a third of the size
    neb = D.createElement('canvas'); neb.width = Math.ceil(W / 3); neb.height = Math.ceil(H / 3);
    const n2 = neb.getContext('2d'), w = neb.width, h = neb.height;
    const blob = (x, y, r, [R, G, B], a) => { const g = n2.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, `rgba(${R},${G},${B},${a})`); g.addColorStop(0.5, `rgba(${R},${G},${B},${a * 0.32})`); g.addColorStop(1, `rgba(${R},${G},${B},0)`); n2.fillStyle = g; n2.fillRect(0, 0, w, h); };
    blob(w * 0.82, h * 0.12, Math.max(w, h) * 0.55, TONE[0], 0.2);
    blob(w * 0.08, h * 0.86, Math.max(w, h) * 0.5, TONE[1], 0.13);
    blob(w * 0.5, h * 0.55, Math.max(w, h) * 0.35, TONE[0], 0.06);
    // a faint galaxy arm: dust along two spiral curves
    const S = Math.round(Math.min(W, H) * 1.1);
    arm = D.createElement('canvas'); arm.width = arm.height = Math.ceil(S / 2);
    const a2 = arm.getContext('2d'), m = arm.width / 2;
    for (let k = 0; k < 1400; k++) {
      const branch = k % 2, u = rnd(), th = u * 5.2 + branch * Math.PI, rr = (0.08 + u * 0.92) * m;
      const jx = (rnd() - 0.5) * m * 0.16 * (1 - u * 0.4), jy = (rnd() - 0.5) * m * 0.16 * (1 - u * 0.4);
      a2.fillStyle = rnd() < 0.25 ? `rgba(${TONE[0].join(',')},.5)` : 'rgba(255,240,230,.45)';
      a2.globalAlpha = 0.15 + (1 - u) * 0.5;
      const s = rnd() < 0.08 ? 1.6 : 0.8;
      a2.fillRect(m + Math.cos(th) * rr + jx, m + Math.sin(th) * rr * 0.62 + jy, s, s);
    }
  }
  function frame(now) {
    raf = 0;
    const t = (now - t0) / 1000, sy = scrollY;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#030304'; ctx.fillRect(0, 0, W, H);
    // the nebula drifts slowly and parallaxes a little with the page
    const ox = Math.sin(t * 0.02) * W * 0.03, oy = Math.cos(t * 0.017) * H * 0.03 - (sy * 0.02) % (H * 0.2);
    ctx.drawImage(neb, -W * 0.05 + ox, -H * 0.05 + oy, W * 1.1, H * 1.1);
    // the arm turns, very slowly
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.55;
    ctx.translate(W * 0.74, H * 0.3 - sy * 0.015); ctx.rotate(t * 0.006 + 0.4);
    ctx.drawImage(arm, -arm.width, -arm.height, arm.width * 2, arm.height * 2); ctx.restore();
    // depth stars: the near ones move more with the scroll
    for (const s of stars) {
      let y = (s.y - sy * (0.04 + s.z * 0.16) + t * (0.6 + s.z * 2.2)) % H; if (y < 0) y += H;
      const x = (s.x + t * s.z * 0.8) % W;
      const a = s.a * (0.7 + 0.3 * Math.sin(t * s.tw + s.ph));
      ctx.fillStyle = `rgba(${s.col},${a.toFixed(3)})`;
      if (s.r > 1.2) { ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.283); ctx.fill(); } else ctx.fillRect(x, y, s.r * 1.4, s.r * 1.4);
    }
    if (!reduce && !D.hidden) raf = requestAnimationFrame(frame);
  }
  const go = () => { if (!raf) raf = requestAnimationFrame(frame); };
  let rt = 0;
  let lw = innerWidth, lh = innerHeight;
  // a phone's address bar changes the height while scrolling: only a real resize rebuilds
  addEventListener('resize', () => { if (innerWidth === lw && Math.abs(innerHeight - lh) < 140) return; lw = innerWidth; lh = innerHeight; clearTimeout(rt); rt = setTimeout(() => { build(); go(); }, 150); });
  D.addEventListener('visibilitychange', () => { if (!D.hidden) go(); });
  if (reduce) addEventListener('scroll', go, { passive: true });
  build(); go();
})();

// The Plans counters share their values with the pre-rendered monthly block.
(() => {
  const section = document.getElementById('deliverables');
  if (!section) return;
  const buttons = [...section.querySelectorAll('#mtog button')];
  const numbers = [...section.querySelectorAll('.nums b')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let frame;
  function select(button) {
    cancelAnimationFrame(frame);
    const pro = button.dataset.p === '1';
    buttons.forEach(b => {
      b.classList.toggle('on', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });
    document.getElementById('mn-plan').textContent = pro ? 'Pro' : 'Core';
    const from = numbers.map(b => Number(b.textContent));
    const to = numbers.map(b => Number(pro ? b.dataset.b : b.dataset.a));
    const start = performance.now();
    function tick(now) {
      const progress = reduce.matches ? 1 : Math.min(1, (now - start) / 450);
      const eased = 1 - (1 - progress) ** 3;
      numbers.forEach((b, i) => { b.textContent = Math.round(from[i] + (to[i] - from[i]) * eased); });
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  }
  buttons.forEach(button => button.addEventListener('click', () => select(button)));
})();
