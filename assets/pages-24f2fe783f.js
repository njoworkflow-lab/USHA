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
  // 0 while the section is still below the fold, 1 once it fills the screen, back to 0 as it scrolls away
  const smooth = (x) => x * x * (3 - 2 * x);
  function fieldK() {
    const r = tg.getBoundingClientRect(), vh = innerHeight;
    return smooth(clamp((vh - r.top) / vh)) * smooth(clamp(r.bottom / vh));
  }
  // once the stage starts to scroll away the 3D USHA leaves her point, so the
  // ring, the threads and the stars go first and leave no empty eclipse behind
  const exitK = () => smooth(clamp((tg.getBoundingClientRect().bottom / innerHeight - 0.78) / 0.22));
  let p = reduce ? 1 : 0, t = 0;
  function draw() {
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, Ht);
    // a deep, near-black field over the galaxy behind, open where she sits
    // On the home page it deepens as the moment scrolls in and lifts as it
    // leaves, so the 3D galaxy above and below reads as one continuous space.
    const fk = home ? fieldK() : 1;
    const field = ctx.createRadialGradient(P.x, P.y, R * 1.02, P.x, P.y, R * 1.9);
    field.addColorStop(0, 'rgba(3,3,4,0)'); field.addColorStop(1, `rgba(3,3,4,${(0.9 * fk).toFixed(3)})`);
    ctx.fillStyle = field; ctx.fillRect(0, 0, W, Ht);
    const threadK = clamp((p - 0.5) / 0.32);
    ctx.globalAlpha = home ? exitK() : 1;
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
  if (reduce && home) addEventListener('scroll', () => { if (visible) requestAnimationFrame(draw); }, { passive: true });
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
// faint galaxy arm) and the section reveals. USHA's likeness: likeness.js.
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

// USHA alive off the home page (every page with her likeness, pages.mjs):
// the home character's life without three.js. CSS breathes and floats her;
// this drives her gaze, blinks and moods through a few CSS variables:
//   gaze     her eyes follow the pointer (the last touch on a phone, and they
//            wander when nobody touches); scrolling pulls them along
//   blink    at random, now and then twice
//   curious  the pointer comes close, or she comes back into view
//   happy    a tap on her, or a finished step: eyes squint, cheeks blush, a hop
//   think    a filter or a choice changes (or 'usha:think'): the ember core pulses
//   sleepy   nothing happens for a while: heavy lids, slow breath
// One loop, only while one of her is on screen and the tab is visible.
// Reduced motion: no loop, she stays still with her eyes open.
(() => {
  const D = document, H = D.documentElement;
  const faces = D.getElementsByClassName('xu');
  // the inner ember glow: a brighter copy of her body, so it never leaves her outline
  const dress = (f) => {
    const s = f.querySelector('.xu-s'), img = s && s.querySelector('img');
    if (!img || s.querySelector('.xu-hot')) return;
    const hot = img.cloneNode(); hot.className = 'xu-hot'; hot.alt = ''; hot.setAttribute('aria-hidden', 'true');
    img.after(hot);
  };
  const dressAll = () => { for (const f of faces) dress(f); };
  dressAll();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    new MutationObserver(dressAll).observe(D.body, { childList: true, subtree: true });
    return;
  }

  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const now = () => performance.now();
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const rnd = (a, b) => a + Math.random() * (b - a);

  // ---------- what she sees and feels ----------
  let px = innerWidth / 2, py = innerHeight * 0.45, hasPointer = false, lastInput = now(), lastTouch = 0;
  let wander = { x: 0, y: 0, at: 0 }, scrollV = 0, lastY = scrollY, lastScrollT = now();
  let mood = 'idle', moodUntil = 0, sleepy = false, thinkT0 = 0;
  const SLEEP_AFTER = 22000;
  const MOODS = {
    idle: { ew: 1, eh: 1, lid: 0, ch: 0, in: 0.12, tl: 0, lf: 0 },
    curious: { ew: 1.14, eh: 1.2, lid: 0, ch: 0.25, in: 0.22, tl: 0, lf: -1.6 },
    happy: { ew: 1.06, eh: 0.34, lid: 0, ch: 0.95, in: 0.45, tl: -2, lf: -1 },
    think: { ew: 0.96, eh: 0.9, lid: 14, ch: 0, in: 0.55, tl: -2.5, lf: -0.6 },
    sleepy: { ew: 1.06, eh: 0.92, lid: 58, ch: 0.12, in: 0.04, tl: 3, lf: 1.6 },
  };
  function set(m, ms) {
    if (m !== 'sleepy') wake(false);
    mood = m; moodUntil = now() + ms;
    if (m === 'think') thinkT0 = now();
    go();
  }
  function wake(startle) {
    if (!sleepy) return;
    sleepy = false;
    for (const f of faces) f.classList.remove('xu-sleep');
    if (startle) { mood = 'curious'; moodUntil = now() + 1300; blinkAt = now() + 120; }
  }
  const input = () => { lastInput = now(); if (sleepy) wake(true); };

  // squash and stretch, like the home character's tap: [time, x, y] keys
  let sq = [];
  function bounce(n = 1) {
    const t = now(); sq = [];
    for (let k = 0; k < n; k++) sq.push([t + k * 300, 0.9, 1.1], [t + k * 300 + 130, 1.07, 0.95], [t + k * 300 + 270, 1, 1]);
    go();
  }

  // ---------- blinks ----------
  let blinkAt = now() + rnd(1500, 4000), blinkT = -1, again = false;
  function blink(t) {
    if (blinkT < 0 && t >= blinkAt) { blinkT = t; again = Math.random() < 0.18; }
    if (blinkT < 0) return 1;
    const k = (t - blinkT) / 150;
    if (k >= 1) {
      blinkT = -1;
      blinkAt = t + (again ? rnd(140, 220) : sleepy ? rnd(4000, 7000) : rnd(2400, 6000));
      again = false;
      return 1;
    }
    return 1 - Math.sin(k * Math.PI) * 0.96;
  }

  // ---------- inputs ----------
  addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') { lastTouch = now(); }
    px = e.clientX; py = e.clientY; hasPointer = true; input(); go();
  }, { passive: true });
  addEventListener('pointerdown', (e) => {
    px = e.clientX; py = e.clientY; hasPointer = true;
    if (e.pointerType !== 'mouse') lastTouch = now();
    input();
    const t = e.target;
    if (t && t.closest && t.closest('.xu')) { set('happy', 1500); bounce(2); }
    go();
  }, { passive: true });
  D.addEventListener('pointerleave', () => { hasPointer = false; });
  addEventListener('keydown', input, { passive: true });
  addEventListener('scroll', () => {
    const t = now(), dt = Math.max(16, t - lastScrollT);
    scrollV = clamp(scrollV * 0.6 + ((scrollY - lastY) / dt) * 0.4, -4, 4);
    lastY = scrollY; lastScrollT = t; input(); go();
  }, { passive: true });

  // she thinks when the page changes what it shows: filters, tabs, choices, a step
  const THINK = '[aria-pressed],[role=tab],[role=radio],[aria-selected],.chips button,.l-pick button,.l-cal button,.l-o,.xp-det,.l-ap-ask button';
  D.addEventListener('click', (e) => {
    const t = e.target && e.target.closest && e.target;
    if (!t || t.closest('.xu,.xn-menu,header')) return;
    if (t.closest(THINK)) set('think', 1700);
    else if (t.closest('summary')) set('curious', 1100);
  });
  D.addEventListener('change', (e) => {
    const t = e.target;
    if (t && t.matches && t.matches('select,input[type=checkbox],input[type=radio],input[type=range]') && !t.closest('.x-modal')) set('think', 1700);
  });
  addEventListener('usha:think', () => set('think', 1700));
  addEventListener('usha:happy', () => { set('happy', 1700); bounce(2); });

  // ---------- which of her are on screen ----------
  const seen = new WeakMap(), state = new WeakMap();
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((e) => {
    const was = seen.get(e.target);
    seen.set(e.target, e.isIntersecting ? 1 : 0);
    if (e.isIntersecting) {
      const st = state.get(e.target);
      // back into view after a while away: she notices you
      if (was === 0 && st && now() - st.left > 3500 && !sleepy) set('curious', 1200);
      go();
    } else { const st = state.get(e.target); if (st) st.left = now(); }
  }), { rootMargin: '60px' }) : null;
  const watched = new WeakSet();
  function track() {
    for (const f of faces) {
      dress(f);
      if (watched.has(f)) continue;
      watched.add(f);
      state.set(f, { ex: 0, ey: 0, ew: 1, eh: 1, lid: 0, ch: 0, in: 0.12, tl: 0, lf: 0, sx: 1, sy: 1, left: 0, w: {} });
      if (io) io.observe(f); else seen.set(f, 1);
    }
  }
  track();
  new MutationObserver(() => { track(); go(); }).observe(D.body, { childList: true, subtree: true });

  // ---------- the loop ----------
  let raf = 0, last = now();
  const go = () => { if (!raf && !D.hidden) { last = now(); raf = requestAnimationFrame(frame); } };
  const put = (f, st, k, v, unit) => { const s = v.toFixed(3); if (st.w[k] !== s) { st.w[k] = s; f.style.setProperty('--' + k, s + unit); } };
  function frame(t) {
    raf = 0;
    const dt = Math.min(0.05, (t - last) / 1000); last = t;
    // the mood of the moment
    if (mood !== 'idle' && t > moodUntil) mood = 'idle';
    if (!sleepy && mood === 'idle' && t - lastInput > SLEEP_AFTER) { sleepy = true; for (const f of faces) f.classList.add('xu-sleep'); }
    const M = MOODS[sleepy ? 'sleepy' : mood];
    const bl = blink(t);
    scrollV *= Math.pow(0.04, dt);
    let sx = 1, sy = 1;
    for (const q of sq) if (q[0] <= t) { sx = q[1]; sy = q[2]; }
    if (sq.length && t > sq[sq.length - 1][0]) sq = [];
    // no pointer to follow (a phone between touches): she looks around on her own
    const free = (!fine && t - lastTouch > 2600) || !hasPointer;
    if (free && t > wander.at) wander = { x: rnd(-0.8, 0.8), y: rnd(-0.5, 0.6), at: t + rnd(1800, 3600) };
    const pulse = mood === 'think' && !sleepy ? 0.5 + 0.5 * Math.sin((t - thinkT0) / 1000 * 7.5) : 0;
    // read every position first, then write, so the page lays out once a frame
    const live = [];
    for (const f of faces) {
      if (!seen.get(f)) continue;
      const st = state.get(f), r = f.getBoundingClientRect();
      if (st && r.width) live.push([f, st, r]);
    }
    const kEye = 1 - Math.exp(-(sleepy ? 3 : 11) * dt), kMood = 1 - Math.exp(-7 * dt), kSq = 1 - Math.exp(-22 * dt);
    for (const [f, st, r] of live) {
      const cx = r.left + r.width * 0.45, cy = r.top + r.height * 0.6;
      let lx, ly;
      if (sleepy) { lx = 0; ly = 0.7; }
      else if (mood === 'think') { lx = 0.55; ly = -0.75; }
      else if (free) { lx = wander.x; ly = wander.y; }
      else {
        const dx = px - cx, dy = py - cy, d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / (r.width * 1.6 + 120));
        lx = dx / d * k; ly = dy / d * k;
        // the pointer comes close: curious (desktop)
        if (fine && mood === 'idle' && d < r.width * 0.75) { mood = 'curious'; moodUntil = t + 900; }
      }
      ly = clamp(ly + scrollV * 0.35, -1, 1);
      const T = {
        ex: lx * 4.4, ey: ly * 3.4 + (M === MOODS.happy ? -1.6 : 0),
        ew: M.ew, eh: M.eh, lid: M.lid, ch: M.ch, in: M.in + pulse * 0.4,
        tl: M.tl + (mood === 'curious' ? lx * 3 : 0), lf: M.lf + clamp(scrollV * 1.1, -2.4, 2.4),
      };
      st.ex += (T.ex - st.ex) * kEye; st.ey += (T.ey - st.ey) * kEye;
      for (const key of ['ew', 'eh', 'lid', 'ch', 'in', 'tl', 'lf']) st[key] += (T[key] - st[key]) * kMood;
      st.sx += (sx - st.sx) * kSq; st.sy += (sy - st.sy) * kSq;
      put(f, st, 'ex', st.ex, '%'); put(f, st, 'ey', st.ey, '%');
      put(f, st, 'ew', st.ew, ''); put(f, st, 'eh', st.eh, ''); put(f, st, 'lid', st.lid, '%'); put(f, st, 'bl', bl, '');
      put(f, st, 'ch', st.ch, ''); put(f, st, 'in', clamp(st.in, 0, 1), '');
      put(f, st, 'tl', st.tl, 'deg'); put(f, st, 'lf', st.lf, '%');
      put(f, st, 'sx', st.sx, ''); put(f, st, 'sy', st.sy, '');
    }
    // she keeps the clock while one of her is on screen (blinks, wandering)
    if (live.length) raf = requestAnimationFrame(frame);
  }
  D.addEventListener('visibilitychange', () => { if (!D.hidden) go(); });
  // test hook: set a mood from the console or a check (usha:mood with {detail:'happy'})
  addEventListener('usha:mood', (e) => { const m = e.detail; if (m === 'sleepy') { lastInput = now() - SLEEP_AFTER - 1; mood = 'idle'; } else if (MOODS[m]) set(m, 2200); go(); });
  go();
})();

// "Ask USHA live": a real conversation with USHA from the "Try her" section.
// A short form first (who you are, your business, your market), then up to
// five questions answered by the USHA server. The NJO team (their company
// email plus the team code) has no limit. Someone who registered before is
// greeted and passed to their project manager. The server address and the
// Turnstile key come from window.USHA_LIVE (tools/seo/build.mjs); without
// them this module stays off.
(() => {
  const CFG = window.USHA_LIVE || {};
  if (!CFG.api) return;
  const D = document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const API = CFG.api.replace(/\/$/, '');
  const PM_TG = 'https://t.me/njo_manager', PM_MAIL = 'darina@njobusinesssolutions.com';
  const STORE = 'usha-live';

  const T = {
    en: {
      cta_k: 'Live now', cta_h: 'A free consultation with your new <i>marketing director</i>', cta_p: 'She tells you where the money is in your market, where it’s leaking from your business, and the first move she’d make.', cta_b: 'Get a free consultation',
      k: 'USHA · live', h: 'Your business. <b>Her answer.</b>', p: 'Tell her who she is talking to. Then brief her and ask up to 4 questions. Your project manager follows up on these details, so please use real ones.',
      name: 'Your name', email: 'Work email', phone: 'Mobile number', country: 'Country code', business: 'Business name', size: 'Business size', industry: 'Industry', market: 'Main market', team: 'Team code',
      team_hint: 'For the NJO team: unlimited testing.', team_open: 'Have a team code?',
      sizes: {"solo": "Just me / under 5", "2-10": "2–10 people", "11-50": "11–50 people", "51-200": "51–200 people", "201-500": "201–500 people", "501-1000": "501–1,000 people", "1001-5000": "1,001–5,000 people", "5000+": "5,000+ people"},
      industries: [["FMCG & food", {"fmcg-sweets": "Sweets, chocolate & dates", "fmcg-snacks": "Food & snacks", "fmcg-drinks": "Drinks", "fmcg-dairy": "Dairy", "fmcg-household": "Household & cleaning", "fmcg-personal": "Personal care"}], ["Beauty & lifestyle", {"beauty": "Beauty & cosmetics", "perfume": "Perfume & oud", "fashion": "Fashion, footwear & accessories", "jewelry": "Jewellery & watches", "kids": "Kids & toys", "home": "Home & furniture", "electronics": "Electronics & gadgets", "pharma": "Pharmacy & health products", "pets": "Pet products", "sports": "Sports & outdoor"}], ["Retail & e-commerce", {"marketplace-sellers": "Marketplace seller (WB, Ozon, noon, Amazon)", "ecommerce": "E-commerce brand (own store)", "grocery": "Grocery & supermarkets", "retail-chain": "Retail chain", "distribution": "Distribution & wholesale"}], ["Food service & hospitality", {"cafes-restaurants": "Café or restaurant", "bakery": "Bakery, patisserie, sweets shop", "cloud-kitchen": "Cloud kitchen & delivery", "hospitality": "Hotels & tourism"}], ["Property & auto", {"real-estate": "Real estate developer", "real-estate-broker": "Real estate brokerage", "auto-dealers": "Auto dealer", "auto-services": "Auto services & parts"}], ["Services & B2B", {"clinics": "Clinics & medical centres", "education": "Education & training", "fitness": "Gyms & fitness", "salons": "Salons & spas", "events": "Events & weddings", "services": "Agency / professional services", "tech": "Tech, SaaS & apps", "manufacturing": "Manufacturing & B2B"}], ["—", {"other": "Other"}]], other_cc: 'Other (+ code)',
      markets: { uae: 'UAE', ksa: 'Saudi Arabia', egypt: 'Egypt', russia: 'Russia', kuwait: 'Kuwait', qatar: 'Qatar', bahrain: 'Bahrain', oman: 'Oman', other: 'Other' },
      pick: 'Choose…', consent: 'By starting you agree that NJO may contact you about USHA on these details.', start: 'Start the conversation', checking: 'Checking…',
      left: (n) => (n === 1 ? '1 question left' : `${n} questions left`), unlimited: 'Team · unlimited', you: 'You', ask: 'Ask about your business…', send: 'Send',
      reading: 'Reading your market', intro: (n) => `Hello ${n}, I’m **USHA**, your Marketing Director. You can take a consultation from me now.\n\nTell me your brief the way you would brief a new Marketing Director joining your team: what you sell, to whom, where, your numbers, and what you want fixed. The more accurate you are, the better our work will go.`,
      brief_pill: 'Your brief · then 4 questions', brief_ph: 'Write your brief…',
      done_h: 'That was your fourth question.', done_p: 'Your project manager has this conversation and will contact you. Want to start sooner?',
      back_h: (n) => `I remember you, ${n}.`, back_p: 'We’ve talked before. Let’s continue with your project manager: they have our conversation and will take it from here.',
      tg: 'Write on Telegram', mail: 'Email the manager', copy: 'Copy email', copied: 'Copied', free: 'Start the free week',
      locked_h: 'This consultation is closed.', locked_p: 'We drifted off the business a few times. Your project manager will continue with you.',
      used_h: 'This network already had its consultation.', used_p: 'One free consultation per office or home network. Let’s continue with a project manager.',
      region_h: 'The live consultation isn’t open in your region yet.', region_p: 'Our team will gladly talk to you directly.',
      private_h: 'Please open usha.one in a normal window.', private_p: 'The live consultation doesn’t run in private or incognito mode. Open the site in a regular browser window and come back.',
      bot_h: 'This browser looks automated.', bot_p: 'The live consultation is for people. Please open usha.one in your usual browser.',
      device_h: 'Please open this on the device you registered on.', device_p: 'Your consultation is tied to the browser you started it in.',
      team_link: 'NJO team? Continue', loading: 'One moment…',
      code: 'Invitation code', code_hint: 'Your NJO manager gives you this code.', code_none: 'No code yet? Ask your manager',
      rate_q: 'How did USHA do?', rate_star: (n) => `${n} of 5`, rate_note: 'A line for her team (optional)', rate_send: 'Send', rate_thanks: 'Thank you. She reads every one, and takes the low ones personally.', rate_err: 'Couldn’t send. Please try again.',
      new_code: 'Have a new invitation code?', expired_h: 'Your invitation has ended.', expired_p: 'It was valid for 45 days. Your project manager can continue with you, or enter a new code.',
      err: {
        required: 'Please fill this in.', name_len: 'Use 2–60 letters.', name_chars: 'Letters only, please.', name_fake: 'Please enter your real name.',
        biz_len: 'Use 2–80 characters.', biz_chars: 'The name only, no links.', biz_fake: 'Please enter your real business name.',
        email_bad: 'This email doesn’t look right.', email_typo: 'Did you mean {s}?', email_temp: 'Temporary inboxes can’t be used. Please use your real email.', email_fake: 'Please use your real email.', email_domain: 'This email domain doesn’t receive mail.',
        phone_plus: 'For another country, start with + and the country code.', phone_mobile: 'Please enter a mobile number, not a landline.', phone_region: 'Numbers from this country can’t be used here.', phone_bad: 'This isn’t a valid number for the chosen country.', phone_fake: 'Please enter your real number.', phone_country: 'Choose a country code.',
        team_code_needed: 'Enter the team code.', team_code_bad: 'The team code isn’t right.',
        code_needed: 'Enter your invitation code.', code_bad: 'This code isn’t valid or has already been used.',
        bot_check: 'Please complete the check above and try again.', slow_down: 'Too many tries. Please wait a little and try again.', busy: 'USHA is very busy right now. Please try again in a few minutes.',
        failed: 'Something went wrong on our side. Your question wasn’t counted. Please send it again.', cut: 'The answer was cut off. Your question wasn’t counted. Please send it again.', net: 'No connection. Please check your internet and try again.',
        too_long: 'Please keep it under 1,500 characters.', region: 'The live consultation isn’t open in your region yet.', private: 'Please use a normal browser window, not private mode.', device: 'Please continue on the device you registered on.',
      },
      close: 'Close',
    },
    ru: {
      cta_k: 'Онлайн', cta_h: 'Бесплатная консультация с вашим новым <i>директором по маркетингу</i>', cta_p: 'Она скажет, где на вашем рынке деньги, где они утекают из бизнеса и какой ход она сделает первым.', cta_b: 'Получить бесплатную консультацию',
      k: 'USHA · вживую', h: 'Ваш бизнес. <b>Её ответ.</b>', p: 'Расскажите, с кем она говорит. Потом дайте ей бриф и задайте до 4 вопросов. Менеджер проекта свяжется с вами по этим данным, поэтому укажите настоящие.',
      name: 'Ваше имя', email: 'Рабочий email', phone: 'Мобильный номер', country: 'Код страны', business: 'Название бизнеса', size: 'Размер бизнеса', industry: 'Сфера', market: 'Основной рынок', team: 'Код команды',
      team_hint: 'Для команды NJO: безлимитный тест.', team_open: 'Есть код команды?',
      sizes: {"solo": "Только я / до 5", "2-10": "2–10 человек", "11-50": "11–50 человек", "51-200": "51–200 человек", "201-500": "201–500 человек", "501-1000": "501–1 000 человек", "1001-5000": "1 001–5 000 человек", "5000+": "5 000+ человек"},
      industries: [["FMCG и продукты", {"fmcg-sweets": "Сладости, шоколад, финики", "fmcg-snacks": "Продукты и снеки", "fmcg-drinks": "Напитки", "fmcg-dairy": "Молочная продукция", "fmcg-household": "Бытовая химия и товары для дома", "fmcg-personal": "Средства личной гигиены"}], ["Красота и lifestyle", {"beauty": "Косметика и уход", "perfume": "Парфюмерия", "fashion": "Одежда, обувь, аксессуары", "jewelry": "Ювелирные изделия и часы", "kids": "Детские товары и игрушки", "home": "Дом и мебель", "electronics": "Электроника и гаджеты", "pharma": "Аптека и товары для здоровья", "pets": "Товары для животных", "sports": "Спорт и отдых"}], ["Ритейл и e-commerce", {"marketplace-sellers": "Селлер на маркетплейсах (WB, Ozon, Яндекс Маркет)", "ecommerce": "Бренд со своим интернет-магазином", "grocery": "Продуктовые магазины и супермаркеты", "retail-chain": "Розничная сеть", "distribution": "Дистрибуция и опт"}], ["Общепит и гостеприимство", {"cafes-restaurants": "Кафе или ресторан", "bakery": "Пекарня, кондитерская", "cloud-kitchen": "Дарк-китчен и доставка", "hospitality": "Отели и туризм"}], ["Недвижимость и авто", {"real-estate": "Застройщик", "real-estate-broker": "Агентство недвижимости", "auto-dealers": "Автодилер", "auto-services": "Автосервис и запчасти"}], ["Услуги и B2B", {"clinics": "Клиники и медцентры", "education": "Образование и обучение", "fitness": "Фитнес-клубы", "salons": "Салоны красоты и спа", "events": "Мероприятия и свадьбы", "services": "Агентство / профессиональные услуги", "tech": "IT, SaaS и приложения", "manufacturing": "Производство и B2B"}], ["—", {"other": "Другое"}]], other_cc: 'Другая (+ код)',
      markets: { uae: 'ОАЭ', ksa: 'Саудовская Аравия', egypt: 'Египет', russia: 'Россия', kuwait: 'Кувейт', qatar: 'Катар', bahrain: 'Бахрейн', oman: 'Оман', other: 'Другое' },
      pick: 'Выберите…', consent: 'Начиная, вы соглашаетесь, что NJO может связаться с вами по поводу USHA по этим данным.', start: 'Начать разговор', checking: 'Проверяем…',
      left: (n) => `${n} ${n === 1 ? 'вопрос' : n < 5 ? 'вопроса' : 'вопросов'} осталось`, unlimited: 'Команда · безлимит', you: 'Вы', ask: 'Спросите о своём бизнесе…', send: 'Отправить',
      reading: 'Читаю ваш рынок', intro: (n) => `Здравствуйте, ${n}. Я **USHA**, ваш директор по маркетингу. Сейчас вы можете получить у меня консультацию.\n\nРасскажите мне бриф так, как если бы вы брали в команду нового директора по маркетингу: что продаёте, кому, где, ваши цифры и что нужно исправить. Чем точнее, тем лучше пойдёт наша работа.`,
      brief_pill: 'Ваш бриф · потом 4 вопроса', brief_ph: 'Напишите ваш бриф…',
      done_h: 'Это был четвёртый вопрос.', done_p: 'Ваш менеджер проекта видит этот разговор и свяжется с вами. Хотите начать раньше?',
      back_h: (n) => `Я вас помню, ${n}.`, back_p: 'Мы уже разговаривали. Продолжим с вашим менеджером проекта: у него есть наш разговор, дальше он всё возьмёт на себя.',
      tg: 'Написать в Telegram', mail: 'Написать менеджеру', copy: 'Скопировать email', copied: 'Скопировано', free: 'Начать бесплатную неделю',
      locked_h: 'Консультация закрыта.', locked_p: 'Мы несколько раз ушли от бизнеса. Дальше с вами продолжит менеджер проекта.',
      used_h: 'С этой сети консультация уже была.', used_p: 'Одна бесплатная консультация на офисную или домашнюю сеть. Продолжим с менеджером проекта.',
      region_h: 'В вашем регионе живая консультация пока недоступна.', region_p: 'Наша команда с радостью поговорит с вами напрямую.',
      private_h: 'Откройте usha.one в обычном окне.', private_p: 'Живая консультация не работает в режиме инкогнито. Откройте сайт в обычном окне браузера и возвращайтесь.',
      bot_h: 'Похоже, браузер управляется автоматически.', bot_p: 'Живая консультация — для людей. Откройте usha.one в своём обычном браузере.',
      device_h: 'Продолжите на устройстве, где вы регистрировались.', device_p: 'Консультация привязана к браузеру, в котором вы её начали.',
      team_link: 'Команда NJO? Продолжить', loading: 'Секунду…',
      code: 'Код приглашения', code_hint: 'Код выдаёт ваш менеджер NJO.', code_none: 'Нет кода? Напишите менеджеру',
      rate_q: 'Как вам USHA?', rate_star: (n) => `${n} из 5`, rate_note: 'Пара слов для её команды (необязательно)', rate_send: 'Отправить', rate_thanks: 'Спасибо. Она читает каждую оценку, а низкие принимает близко к сердцу.', rate_err: 'Не получилось отправить. Попробуйте ещё раз.',
      new_code: 'Есть новый код приглашения?', expired_h: 'Срок приглашения закончился.', expired_p: 'Оно действовало 45 дней. Менеджер проекта продолжит с вами, или введите новый код.',
      err: {
        required: 'Заполните, пожалуйста.', name_len: 'От 2 до 60 букв.', name_chars: 'Только буквы, пожалуйста.', name_fake: 'Укажите настоящее имя.',
        biz_len: 'От 2 до 80 символов.', biz_chars: 'Только название, без ссылок.', biz_fake: 'Укажите настоящее название бизнеса.',
        email_bad: 'Похоже, в email ошибка.', email_typo: 'Может быть, {s}?', email_temp: 'Временные ящики не подходят. Укажите свой настоящий email.', email_fake: 'Укажите свой настоящий email.', email_domain: 'Этот почтовый домен не принимает письма.',
        phone_plus: 'Для другой страны начните с + и кода страны.', phone_mobile: 'Укажите мобильный номер, не городской.', phone_region: 'Номера этой страны здесь не принимаются.', phone_bad: 'Это не похоже на номер выбранной страны.', phone_fake: 'Укажите настоящий номер.', phone_country: 'Выберите код страны.',
        team_code_needed: 'Введите код команды.', team_code_bad: 'Неверный код команды.',
        code_needed: 'Введите код приглашения.', code_bad: 'Код неверный или уже использован.',
        bot_check: 'Пройдите проверку выше и попробуйте снова.', slow_down: 'Слишком много попыток. Подождите немного.', busy: 'Сейчас у USHA очень много разговоров. Попробуйте через несколько минут.',
        failed: 'Что-то пошло не так на нашей стороне. Вопрос не засчитан, отправьте его ещё раз.', cut: 'Ответ оборвался. Вопрос не засчитан, отправьте его ещё раз.', net: 'Нет соединения. Проверьте интернет и попробуйте снова.',
        too_long: 'Не больше 1 500 символов, пожалуйста.', region: 'В вашем регионе живая консультация пока недоступна.', private: 'Откройте сайт в обычном окне, не в режиме инкогнито.', device: 'Продолжите на устройстве, где вы регистрировались.',
      },
      close: 'Закрыть',
    },
    ar: {
      cta_k: 'متاحة الآن', cta_h: 'استشارة مجانية مع <i>مديرة التسويق</i> الجديدة لديك', cta_p: 'تخبرك أين المال في سوقك، ومن أين يتسرّب من نشاطك، وما أول خطوة ستتخذها.', cta_b: 'احصل على استشارتك المجانية',
      k: 'USHA · مباشر', h: 'نشاطك. <b>وإجابتها.</b>', p: 'عرّفها بمن تتحدث معه، ثم اكتب لها الـbrief واسأل حتى ٤ أسئلة. مدير المشروع سيتواصل معك على هذه البيانات، فاكتب بياناتك الحقيقية.',
      name: 'اسمك', email: 'البريد الإلكتروني للعمل', phone: 'رقم الجوال', country: 'رمز الدولة', business: 'اسم النشاط التجاري', size: 'حجم النشاط', industry: 'القطاع', market: 'السوق الرئيسي', team: 'رمز الفريق',
      team_hint: 'لفريق NJO: تجربة بلا حدود.', team_open: 'لديك رمز الفريق؟',
      sizes: {"solo": "أنا فقط / أقل من ٥", "2-10": "٢–١٠ أشخاص", "11-50": "١١–٥٠ شخصاً", "51-200": "٥١–٢٠٠ شخص", "201-500": "٢٠١–٥٠٠ شخص", "501-1000": "٥٠١–١٠٠٠ شخص", "1001-5000": "١٠٠١–٥٠٠٠ شخص", "5000+": "أكثر من ٥٠٠٠ شخص"},
      industries: [["السلع الاستهلاكية والأغذية", {"fmcg-sweets": "حلويات وشوكولاتة وتمور", "fmcg-snacks": "أغذية وسناكس", "fmcg-drinks": "مشروبات", "fmcg-dairy": "ألبان", "fmcg-household": "منظفات ومنتجات منزلية", "fmcg-personal": "عناية شخصية"}], ["التجميل ونمط الحياة", {"beauty": "تجميل ومستحضرات", "perfume": "عطور وعود", "fashion": "أزياء وأحذية وإكسسوارات", "jewelry": "مجوهرات وساعات", "kids": "منتجات أطفال وألعاب", "home": "منزل وأثاث", "electronics": "إلكترونيات وأجهزة", "pharma": "صيدلية ومنتجات صحية", "pets": "منتجات الحيوانات الأليفة", "sports": "رياضة وأنشطة خارجية"}], ["التجزئة والتجارة الإلكترونية", {"marketplace-sellers": "بائع على المتاجر الإلكترونية (نون، أمازون…)", "ecommerce": "علامة تجارية بمتجر إلكتروني خاص", "grocery": "بقالات وسوبرماركت", "retail-chain": "سلسلة متاجر", "distribution": "توزيع وجملة"}], ["المطاعم والضيافة", {"cafes-restaurants": "مقهى أو مطعم", "bakery": "مخبز أو محل حلويات", "cloud-kitchen": "مطبخ سحابي وتوصيل", "hospitality": "فنادق وسياحة"}], ["العقارات والسيارات", {"real-estate": "مطور عقاري", "real-estate-broker": "وساطة عقارية", "auto-dealers": "وكيل سيارات", "auto-services": "خدمات وقطع غيار السيارات"}], ["الخدمات والأعمال", {"clinics": "عيادات ومراكز طبية", "education": "تعليم وتدريب", "fitness": "نوادٍ رياضية", "salons": "صالونات وسبا", "events": "فعاليات وأعراس", "services": "وكالة / خدمات مهنية", "tech": "تقنية وتطبيقات", "manufacturing": "تصنيع وB2B"}], ["—", {"other": "أخرى"}]], other_cc: 'أخرى (+ الرمز)',
      markets: { uae: 'الإمارات', ksa: 'السعودية', egypt: 'مصر', russia: 'روسيا', kuwait: 'الكويت', qatar: 'قطر', bahrain: 'البحرين', oman: 'عُمان', other: 'أخرى' },
      pick: 'اختر…', consent: 'بالبدء توافق على أن تتواصل معك NJO بخصوص USHA على هذه البيانات.', start: 'ابدأ المحادثة', checking: 'جارٍ التحقق…',
      left: (n) => (n === 1 ? 'بقي سؤال واحد' : n === 2 ? 'بقي سؤالان' : `بقي ${n} أسئلة`), unlimited: 'الفريق · بلا حدود', you: 'أنت', ask: 'اسأل عن نشاطك…', send: 'إرسال',
      reading: 'أقرأ سوقك', intro: (n) => `أهلاً ${n}، أنا **USHA**، مديرة التسويق لديك. يمكنك الآن أن تأخذ مني استشارة.\n\nاكتب لي الـbrief كما لو كنت تعيّن مديراً جديداً للتسويق أو عضواً جديداً في فريقك: ماذا تبيع، لمن، أين، أرقامك، وما الذي تريد إصلاحه. كلما كنت أدق، كان عملنا أفضل.`,
      brief_pill: 'الـbrief أولاً · ثم ٤ أسئلة', brief_ph: 'اكتب الـbrief هنا…',
      done_h: 'كان هذا سؤالك الرابع.', done_p: 'مدير مشروعك لديه هذه المحادثة وسيتواصل معك. تحب تبدأ أسرع؟',
      back_h: (n) => `أتذكرك يا ${n}.`, back_p: 'تحدثنا من قبل. لنكمل مع مدير مشروعك: لديه محادثتنا وسيتابع معك من هنا.',
      tg: 'راسلنا على تيليجرام', mail: 'راسل المدير بالبريد', copy: 'انسخ البريد', copied: 'تم النسخ', free: 'ابدأ الأسبوع المجاني',
      locked_h: 'تم إغلاق هذه الاستشارة.', locked_p: 'ابتعدنا عن العمل أكثر من مرة. مدير مشروعك سيتابع معك.',
      used_h: 'هذه الشبكة استخدمت استشارتها بالفعل.', used_p: 'استشارة مجانية واحدة لكل شبكة مكتب أو منزل. لنكمل مع مدير مشروع.',
      region_h: 'الاستشارة المباشرة غير متاحة في منطقتك حالياً.', region_p: 'فريقنا سيسعد بالتحدث معك مباشرة.',
      private_h: 'افتح usha.one في نافذة عادية.', private_p: 'الاستشارة المباشرة لا تعمل في وضع التصفح الخاص أو المتخفي. افتح الموقع في نافذة متصفح عادية ثم عد.',
      bot_h: 'يبدو أن هذا المتصفح آلي.', bot_p: 'الاستشارة المباشرة للأشخاص. افتح usha.one في متصفحك المعتاد.',
      device_h: 'أكمل على الجهاز الذي سجلت منه.', device_p: 'استشارتك مرتبطة بالمتصفح الذي بدأتها فيه.',
      team_link: 'فريق NJO؟ تابع', loading: 'لحظة…',
      code: 'رمز الدعوة', code_hint: 'يعطيك مدير NJO هذا الرمز.', code_none: 'ليس لديك رمز؟ اطلبه من مديرك',
      rate_q: 'كيف كانت USHA؟', rate_star: (n) => `${n} من ٥`, rate_note: 'كلمة لفريقها (اختياري)', rate_send: 'إرسال', rate_thanks: 'شكراً. تقرأ كل تقييم، وتأخذ المنخفض منها على محمل شخصي.', rate_err: 'تعذّر الإرسال. حاول مرة أخرى.',
      new_code: 'لديك رمز دعوة جديد؟', expired_h: 'انتهت مدة دعوتك.', expired_p: 'كانت صالحة لمدة ٤٥ يوماً. يمكن لمدير مشروعك أن يكمل معك، أو أدخل رمزاً جديداً.',
      err: {
        required: 'يرجى تعبئة هذا الحقل.', name_len: 'من حرفين إلى ٦٠ حرفاً.', name_chars: 'حروف فقط من فضلك.', name_fake: 'يرجى كتابة اسمك الحقيقي.',
        biz_len: 'من حرفين إلى ٨٠ حرفاً.', biz_chars: 'الاسم فقط بدون روابط.', biz_fake: 'يرجى كتابة اسم نشاطك الحقيقي.',
        email_bad: 'يبدو أن البريد غير صحيح.', email_typo: 'هل تقصد {s}؟', email_temp: 'لا يمكن استخدام بريد مؤقت. يرجى استخدام بريدك الحقيقي.', email_fake: 'يرجى استخدام بريدك الحقيقي.', email_domain: 'هذا النطاق لا يستقبل البريد.',
        phone_plus: 'لدولة أخرى ابدأ بـ + ورمز الدولة.', phone_mobile: 'يرجى إدخال رقم جوال وليس رقماً أرضياً.', phone_region: 'لا يمكن استخدام أرقام هذه الدولة هنا.', phone_bad: 'الرقم غير صحيح للدولة المختارة.', phone_fake: 'يرجى كتابة رقمك الحقيقي.', phone_country: 'اختر رمز الدولة.',
        team_code_needed: 'أدخل رمز الفريق.', team_code_bad: 'رمز الفريق غير صحيح.',
        code_needed: 'أدخل رمز الدعوة.', code_bad: 'الرمز غير صحيح أو مستخدم من قبل.',
        bot_check: 'أكمل التحقق أعلاه ثم حاول مجدداً.', slow_down: 'محاولات كثيرة. انتظر قليلاً ثم حاول مجدداً.', busy: 'USHA مشغولة جداً الآن. حاول بعد دقائق.',
        failed: 'حدث خطأ من جهتنا ولم يُحتسب سؤالك. أرسله مرة أخرى.', cut: 'انقطعت الإجابة ولم يُحتسب سؤالك. أرسله مرة أخرى.', net: 'لا يوجد اتصال. تحقق من الإنترنت وحاول مجدداً.',
        too_long: 'أقل من ١٥٠٠ حرف من فضلك.', region: 'الاستشارة المباشرة غير متاحة في منطقتك حالياً.', private: 'استخدم نافذة عادية وليس التصفح الخاص.', device: 'أكمل على الجهاز الذي سجلت منه.',
      },
      close: 'إغلاق',
    },
  };
  const L = () => T[H.lang] || T.en;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // country codes for the phone, main markets first
  // country codes for the phone: the markets USHA serves, then "another country (+ code)"
  const CC = [['AE', '971', '50 123 4567'], ['SA', '966', '55 123 4567'], ['EG', '20', '10 1234 5678'], ['RU', '7', '912 345-67-89'], ['KW', '965', '500 12345'], ['QA', '974', '3312 3456'], ['BH', '973', '3600 1234'], ['OM', '968', '9212 3456'], ['JO', '962', '7 9012 3456'], ['LB', '961', '71 123 456'], ['IQ', '964', '791 234 5678'], ['MA', '212', '650-123456'], ['KZ', '7', '701 234 5678'], ['TR', '90', '501 234 56 78'], ['GB', '44', '7400 123456'], ['US', '1', '201 555 0123'], ['XX', '', '+44 7400 123456']];
  const ccSample = (c) => (CC.find((x) => x[0] === c) || CC[0])[2];
  const MARKET_CC = { uae: 'AE', ksa: 'SA', egypt: 'EG', russia: 'RU', kuwait: 'KW', qatar: 'QA', bahrain: 'BH', oman: 'OM' };
  const flag = (c) => String.fromCodePoint(...[...c].map((x) => 0x1f1a5 + x.charCodeAt(0)));

  const store = {
    get() { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch { return {}; } },
    set(v) { try { localStorage.setItem(STORE, JSON.stringify(v)); } catch {} },
    clear() { try { localStorage.removeItem(STORE); } catch {} },
  };

  // ---------- answer text: a small, safe Markdown ----------
  function inline(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[\s(])\*(?!\s)(.+?)\*(?=[\s).,:;!?]|$)/g, '$1<i>$2</i>').replace(/`([^`]+)`/g, '<code>$1</code>');
  }
  function md(src) {
    const out = [], lines = String(src).replace(/\r/g, '').split('\n');
    let list = null, table = null;
    const flush = () => {
      if (list) { out.push(`<${list.t}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.t}>`); list = null; }
      if (table) {
        const rows = table.filter((r) => !/^\s*\|?\s*:?-{2,}/.test(r)).map((r) => r.replace(/^\s*\||\|\s*$/g, '').split('|').map((c) => c.trim()));
        if (rows.length) out.push(`<div class="xl-tw"><table>${rows.map((r, i) => `<tr>${r.map((c) => (i ? `<td>${inline(c)}</td>` : `<th>${inline(c)}</th>`)).join('')}</tr>`).join('')}</table></div>`);
        table = null;
      }
    };
    for (const line of lines) {
      let m;
      if (/^\s*\|.*\|\s*$/.test(line)) { if (list) flush(); (table ||= []).push(line); continue; }
      if (table) flush();
      if ((m = line.match(/^\s*(?:[-*•]|(\d+)[.)])\s+(.*)$/))) {
        const t = m[1] ? 'ol' : 'ul';
        if (!list || list.t !== t) { flush(); list = { t, items: [] }; }
        list.items.push(m[2]);
        continue;
      }
      flush();
      if ((m = line.match(/^\s*#{1,6}\s+(.*)$/))) out.push(`<h4>${inline(m[1])}</h4>`);
      else if (/^\s*(-{3,}|_{3,})\s*$/.test(line)) out.push('<hr>');
      else if (line.trim()) out.push(`<p>${inline(line)}</p>`);
    }
    flush();
    return out.join('');
  }

  // ---------- this device ----------
  // A random id kept in this browser plus a hash of how the browser looks. The
  // server allows one free consultation per device and binds the session to it.
  let devP = null;
  function device() {
    return devP ||= (async () => {
      let id = '';
      try { id = localStorage.getItem('usha-device') || ''; } catch {}
      if (!/^[a-z0-9-]{16,64}$/i.test(id)) {
        id = (crypto.randomUUID ? crypto.randomUUID() : Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, '0')).join(''));
        try { localStorage.setItem('usha-device', id); } catch {}
      }
      const parts = [navigator.userAgent, (navigator.languages || []).join(','), Intl.DateTimeFormat().resolvedOptions().timeZone, screen.width + 'x' + screen.height + 'x' + screen.colorDepth, devicePixelRatio, navigator.hardwareConcurrency, navigator.deviceMemory, navigator.platform];
      try {
        const c = D.createElement('canvas'); c.width = 220; c.height = 40;
        const g = c.getContext('2d'); g.textBaseline = 'top'; g.font = '16px Arial'; g.fillStyle = '#f60'; g.fillRect(0, 0, 220, 40); g.fillStyle = '#069'; g.fillText('USHA · مرحبا · Привет 🍫', 4, 10);
        parts.push(c.toDataURL());
        const gl = D.createElement('canvas').getContext('webgl'), ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
        if (ext) parts.push(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL), gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
      } catch {}
      let fp = '';
      try { fp = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(parts.join('|')))), (b) => b.toString(16).padStart(2, '0')).join('').slice(0, 40); } catch {}
      return { id, fp };
    })();
  }

  // Private / incognito windows: each browser gives itself away differently
  // (the same checks the detectIncognito library uses). A heuristic, not proof.
  async function privateWindow() {
    try {
      localStorage.setItem('usha-probe', '1'); localStorage.removeItem('usha-probe');
      const ua = navigator.userAgent;
      const firefox = /Firefox|FxiOS/.test(ua), safari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|Android/.test(ua);
      if (firefox && !navigator.serviceWorker) return true;
      if (navigator.storage && navigator.storage.getDirectory) {
        try { await navigator.storage.getDirectory(); } catch (e) { if (/unknown transient|security/i.test(String((e && e.message) || e))) return true; }
      }
      if (!firefox && !safari && navigator.storage && navigator.storage.estimate) {
        const { quota } = await navigator.storage.estimate();
        const heap = (performance.memory && performance.memory.jsHeapSizeLimit) || 1073741824;
        if (quota && quota < heap * 2) return true;
      }
      return false;
    } catch { return true; }
  }

  // ---------- her sounds ----------
  // Small synthesized chimes: opening, asking you something, answering. In the
  // live chat they are the only sounds (the music fades out): full level with
  // sound on, half level with sound off.
  let ac = null;
  const soundOn = () => { try { return localStorage.getItem('usha-music') !== 'off'; } catch { return true; } };
  function chime(kind) {
    const level = soundOn() ? 1 : 0.5;
    try {
      ac ||= new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      const notes = { open: [523.25, 659.25, 783.99, 1046.5], ask: [659.25, 987.77], answer: [783.99, 659.25, 523.25], send: [1318.5] }[kind];
      const t0 = ac.currentTime + 0.02, step = kind === 'send' ? 0 : 0.085;
      notes.forEach((f, i) => {
        const o = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain();
        o.type = 'sine'; o2.type = 'triangle'; o.frequency.value = f; o2.frequency.value = f * 2;
        const t = t0 + i * step, peak = (kind === 'send' ? 0.03 : 0.07) * level, len = kind === 'send' ? 0.12 : 0.55;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
        const g2 = ac.createGain(); g2.gain.value = 0.18;
        o.connect(g); o2.connect(g2); g2.connect(g); g.connect(ac.destination);
        o.start(t); o2.start(t); o.stop(t + len + 0.05); o2.stop(t + len + 0.05);
      });
    } catch {}
  }

  // ---------- server ----------
  async function api(path, { body, token, method = body ? 'POST' : 'GET' } = {}) {
    const dev = await device();
    const r = await fetch(API + path, {
      method,
      headers: { ...(body ? { 'content-type': 'application/json' } : {}), ...(token ? { authorization: 'Bearer ' + token } : {}), 'x-usha-device': dev.id },
      body: body ? JSON.stringify(body) : undefined,
    });
    let j = {};
    try { j = await r.json(); } catch {}
    return { ...j, http: r.status };
  }

  // ---------- Turnstile (Cloudflare's bot check) ----------
  let tsLoad = null, tsId = null, tsToken = '';
  function turnstile(box) {
    if (!CFG.turnstile) return;
    tsLoad ||= new Promise((res, rej) => {
      const s = D.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true; s.onload = res; s.onerror = rej;
      D.head.append(s);
    });
    tsLoad.then(() => {
      if (!box.isConnected || !window.turnstile) return;
      tsToken = '';
      tsId = window.turnstile.render(box, {
        sitekey: CFG.turnstile, theme: 'dark', language: H.lang === 'ar' ? 'ar' : H.lang === 'ru' ? 'ru' : 'en', size: 'flexible',
        callback: (t) => { tsToken = t; }, 'expired-callback': () => { tsToken = ''; }, 'error-callback': () => { tsToken = ''; },
      });
    }).catch(() => {});
  }
  const tsReset = () => { tsToken = ''; try { if (tsId != null && window.turnstile) window.turnstile.reset(tsId); } catch {} };

  // ---------- the window ----------
  // invite: the server asks for an invitation code (GET /api/hello)
  let invite = false;
  let modal = null, lastFocus = null, keepY = 0, state = { token: '', name: '', left: null, team: false, brief: false, busy: false };

  function shell(inner) {
    const x = L();
    return `<div class="xm-scrim"></div><div class="xm-panel xl-panel" role="dialog" aria-modal="true" aria-label="${esc(x.k)}" translate="no">
      <i class="xm-aura" aria-hidden="true"></i>
      <header class="xm-hd xl-hd"><div><span class="xm-k">${esc(x.k)}</span><h3>${x.h}</h3></div>
        <div class="xl-hr"><span class="xl-left" hidden></span><button type="button" class="xm-x" aria-label="${esc(x.close)}"></button></div></header>
      <div class="xl-view">${inner}</div></div>`;
  }

  function open() {
    if (modal) return;
    lastFocus = D.activeElement; keepY = scrollY;
    modal = D.createElement('div');
    modal.className = 'x-modal x-live';
    modal.innerHTML = shell('');
    D.body.append(modal);
    H.classList.add('x-modal-on');
    requestAnimationFrame(() => modal && modal.classList.add('on'));
    $('.xm-x', modal).focus({ preventScroll: true });
    $('.xm-x', modal).addEventListener('click', close);
    $('.xm-scrim', modal).addEventListener('click', close);
    chime('open');
    start();
  }
  // before anything: a person, in a normal window, in a country where it's open
  async function start() {
    const x = L();
    view().innerHTML = `<p class="xl-wait">${esc(x.loading)}</p>`;
    if (navigator.webdriver) { notice(x.bot_h, x.bot_p); return; }
    if (await privateWindow()) { notice(x.private_h, x.private_p); return; }
    if (!modal) return;
    let hi = {};
    try { hi = await api('/api/hello'); } catch {}
    if (!modal) return;
    invite = hi.invite === true;
    const saved = store.get();
    if (saved.token) { resume(saved.token); return; }
    if (hi.region === 'blocked') { handoff(x.region_h, x.region_p, view(), { free: false, team: true }); return; }
    formView();
  }
  function notice(title, text) { handoff(title, text, view(), { contacts: false, free: false }); }
  function close() {
    if (!modal) return;
    const m = modal; modal = null; tsId = null;
    m.inert = true;
    H.classList.remove('x-modal-on');
    if (reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
    if (Math.abs(scrollY - keepY) > 1) scrollTo({ top: keepY, behavior: 'instant' });
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  D.addEventListener('keydown', (e) => {
    if (!modal) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); return; }
    if (e.key !== 'Tab') return;
    const f = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modal)
      .filter((el) => !el.disabled && el.offsetParent !== null && !el.closest('[inert],.ghost'));
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!modal.contains(D.activeElement)) { e.preventDefault(); (e.shiftKey ? last : first).focus({ preventScroll: true }); }
    else if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus({ preventScroll: true }); }
    else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus({ preventScroll: true }); }
  }, true);
  const view = () => $('.xl-view', modal);
  function setLeft() {
    const el = modal && $('.xl-left', modal); if (!el) return;
    const x = L();
    el.hidden = false;
    el.textContent = state.team ? x.unlimited : state.brief ? x.left(state.left) : x.brief_pill;
    el.classList.toggle('low', !state.team && state.left <= 1);
  }

  // ---------- 1. the form ----------
  function formView(prefill = {}) {
    const x = L();
    const opt = (o, sel) => `<option value="">${esc(x.pick)}</option>` + Object.entries(o).map(([k, v]) => `<option value="${k}"${k === sel ? ' selected' : ''}>${esc(v)}</option>`).join('');
    const defCC = prefill.country || (H.lang === 'ru' ? 'RU' : 'AE');
    view().innerHTML = `<form class="xl-form" novalidate>
      <p class="xl-lead">${esc(x.p)}</p>
      <div class="xl-grid">
        ${invite ? `<div class="xl-f xl-code" data-f="code"><label for="xl-code">${esc(x.code)}</label><input id="xl-code" name="code" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="7" placeholder="K7M-4QX" dir="ltr" required><small>${esc(x.code_hint)} <a href="${PM_TG}" target="_blank" rel="noopener">${esc(x.code_none)}</a></small><em class="xl-e" aria-live="polite"></em></div>` : ''}
        ${field('name', x.name, `<input id="xl-name" name="name" autocomplete="name" maxlength="60" required value="${esc(prefill.name || '')}">`)}
        ${field('business', x.business, `<input id="xl-business" name="business" autocomplete="organization" maxlength="80" required value="${esc(prefill.business || '')}">`)}
        ${field('email', x.email, `<input id="xl-email" name="email" type="email" inputmode="email" autocomplete="email" maxlength="120" required dir="ltr" value="${esc(prefill.email || '')}">`)}
        <div class="xl-f xl-phone" data-f="phone"><label for="xl-phone">${esc(x.phone)}</label>
          <div class="xl-pr" dir="ltr"><select name="country" aria-label="${esc(x.country)}">${CC.map(([c, d]) => `<option value="${c}"${c === defCC ? ' selected' : ''}>${c === 'XX' ? '🌐 ' + esc(x.other_cc) : `${flag(c)} +${d}`}</option>`).join('')}</select>
          <input id="xl-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel-national" maxlength="22" required placeholder="${esc(ccSample(defCC))}" value="${esc(prefill.phone || '')}"></div><em class="xl-e" aria-live="polite"></em></div>
        <div class="xl-f xl-team" data-f="teamCode" hidden><label for="xl-team">${esc(x.team)}</label><input id="xl-team" name="teamCode" type="password" autocomplete="off" maxlength="80" dir="ltr"><small>${esc(x.team_hint)}</small><em class="xl-e" aria-live="polite"></em></div>
        ${field('size', x.size, `<select id="xl-size" name="size" required>${opt(x.sizes, prefill.size)}</select>`)}
        ${field('industry', x.industry, `<select id="xl-industry" name="industry" required><option value="">${esc(x.pick)}</option>${x.industries.map(([g, o]) => `<optgroup label="${esc(g)}">${Object.entries(o).map(([k, v]) => `<option value="${k}"${k === prefill.industry ? ' selected' : ''}>${esc(v)}</option>`).join('')}</optgroup>`).join('')}</select>`)}
        ${field('market', x.market, `<select id="xl-market" name="market" required>${opt(x.markets, prefill.market)}</select>`)}
      </div>
      <button type="button" class="xl-team-open">${esc(x.team_open)}</button>
      <div class="xl-hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
      <div class="xl-ts"></div>
      <em class="xl-e xl-form-e" aria-live="polite"></em>
      <div class="xl-go"><button class="btn btn-p" type="submit"><span class="d"></span><span>${esc(x.start)}</span></button><small>${esc(x.consent)}</small></div>
    </form>`;
    const f = $('form', view());
    // the team code is optional: a small link opens it
    const team = $('.xl-team', f), teamBtn = $('.xl-team-open', f);
    teamBtn.addEventListener('click', () => { team.hidden = false; teamBtn.hidden = true; f.elements.teamCode.focus(); });
    const setPh = () => { f.elements.phone.placeholder = ccSample(f.elements.country.value); };
    f.elements.market.addEventListener('change', () => { const c = MARKET_CC[f.elements.market.value]; if (c && !f.elements.phone.value.trim()) { f.elements.country.value = c; setPh(); } });
    // the phone and email are checked by the server as soon as the visitor leaves the field
    const live = async (field) => {
      const body = field === 'phone' ? { field, country: f.elements.country.value, phone: f.elements.phone.value.trim() } : { field, email: f.elements.email.value.trim() };
      if (!(body.phone || body.email)) return;
      let r; try { r = await api('/api/check', { body }); } catch { return; }
      if (!modal || r.http !== 200) return;
      const box = $(`[data-f="${field}"]`, f);
      box.classList.toggle('ok', !r.error);
      if (!r.error) { showErr(f, field, ''); return; }
      let msg = esc(x.err[r.error] || x.err.required);
      if (r.error === 'email_typo' && r.suggest) {
        const fixed = body.email.replace(/@.*$/, '@' + r.suggest);
        msg = esc(x.err.email_typo).replace('{s}', `<button type="button" class="xl-fix">${esc(fixed)}</button>`);
      }
      showErr(f, field, msg);
      const fix = $('.xl-fix', box);
      if (fix) fix.addEventListener('click', () => { f.elements.email.value = fix.textContent; showErr(f, 'email', ''); live('email'); });
    };
    f.elements.phone.addEventListener('blur', () => live('phone'));
    f.elements.country.addEventListener('change', () => { setPh(); if (f.elements.phone.value.trim()) live('phone'); });
    f.elements.email.addEventListener('blur', () => live('email'));
    $$('input,select', f).forEach((el) => el.addEventListener('input', () => showErr(f, el.name === 'country' ? 'phone' : el.name, '')));
    // the code is typed as K7M4QX or k7m-4qx and shown as K7M-4QX
    const code = f.elements.code;
    if (code) code.addEventListener('input', () => {
      const v = code.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
      code.value = v.length > 3 ? v.slice(0, 3) + '-' + v.slice(3) : v;
    });
    f.addEventListener('submit', (e) => { e.preventDefault(); submit(f); });
    turnstile($('.xl-ts', f));
    setTimeout(() => (code || f.elements.name).focus({ preventScroll: true }), reduce ? 0 : 300);
  }
  function field(name, label, control) {
    return `<div class="xl-f" data-f="${name}"><label for="xl-${name}">${esc(label)}</label>${control}<em class="xl-e" aria-live="polite"></em></div>`;
  }
  function showErr(f, name, msg) {
    const box = $(`[data-f="${name}"]`, f) || null;
    if (!box) { const e = $('.xl-form-e', f); if (e) e.textContent = msg; return; }
    box.classList.toggle('bad', !!msg);
    if (msg) box.classList.remove('ok');
    $('.xl-e', box).innerHTML = msg;
  }

  // quick checks before the server's full ones, so typos show at once
  function precheck(f) {
    const v = (n) => (f.elements[n].value || '').trim(), errs = {};
    for (const n of ['name', 'business', 'email', 'phone', 'size', 'industry', 'market']) if (!v(n)) errs[n] = 'required';
    if (v('name') && !/^[\p{L}\p{M}][\p{L}\p{M}' .\-]{1,59}$/u.test(v('name'))) errs.name = /\d/.test(v('name')) ? 'name_chars' : 'name_fake';
    if (v('email') && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v('email'))) errs.email = 'email_bad';
    const digits = v('phone').replace(/\D/g, '');
    if (v('phone') && (digits.length < 6 || digits.length > 15 || /[^\d\s\-()+]/.test(v('phone')))) errs.phone = 'phone_bad';
    else if (f.elements.country.value === 'XX' && v('phone') && !v('phone').startsWith('+')) errs.phone = 'phone_plus';
    if (f.elements.code && !v('teamCode')) {
      if (!v('code')) errs.code = 'code_needed';
      else if (!/^[A-Z2-9]{3}-?[A-Z2-9]{3}$/.test(v('code'))) errs.code = 'code_bad';
    }
    return errs;
  }

  async function submit(f) {
    if (state.busy) return;
    const x = L(), btn = $('button[type=submit]', f);
    $$('[data-f]', f).forEach((b) => showErr(f, b.dataset.f, ''));
    showErr(f, '_', '');
    const pre = precheck(f);
    if (Object.keys(pre).length) {
      for (const [k, c] of Object.entries(pre)) showErr(f, k, esc(x.err[c] || c));
      const first = $('.xl-f.bad input, .xl-f.bad select', f); if (first) first.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(f).entries());
    const dev = await device();
    Object.assign(data, { lang: H.lang in T ? H.lang : 'en', turnstile: tsToken, deviceId: dev.id, fp: dev.fp, private: false });
    state.busy = true; btn.disabled = true; btn.lastElementChild.textContent = x.checking;
    let r;
    try { r = await api('/api/register', { body: data }); } catch { r = { http: 0 }; }
    state.busy = false; btn.disabled = false; btn.lastElementChild.textContent = x.start;
    if (!modal) return;
    if (r.status === 'ok' && r.token) {
      Object.assign(state, { token: r.token, name: r.name, left: r.left, team: !!r.team, brief: !!r.team });
      store.set({ token: r.token });
      chatView([]);
      return;
    }
    if (r.status === 'code_required' && f.elements.code) {
      const why = r.http === 429 ? 'slow_down' : r.http === 503 ? 'busy' : f.elements.code.value.trim() ? 'code_bad' : 'code_needed';
      showErr(f, 'code', esc(x.err[why]));
      tsReset();
      f.elements.code.focus();
      return;
    }
    if (r.status === 'code_required') { invite = true; formView(Object.fromEntries(new FormData(f).entries())); return; }
    if (r.status === 'returning') { handoff(x.back_h(r.name), x.back_p); return; }
    if (r.status === 'used_here') { handoff(x.used_h, x.used_p); return; }
    if (r.status === 'region') { handoff(x.region_h, x.region_p, view(), { free: false }); return; }
    if (r.status === 'private') { notice(x.private_h, x.private_p); return; }
    if (r.status === 'device') { notice(x.device_h, x.device_p); return; }
    if (r.status === 'invalid') {
      for (const [k, c] of Object.entries(r.errors || {})) {
        let msg = esc(x.err[c] || x.err.required);
        if (c === 'email_typo' && r.suggest) {
          const fixed = f.elements.email.value.trim().replace(/@.*$/, '@' + r.suggest);
          msg = esc(x.err.email_typo).replace('{s}', `<button type="button" class="xl-fix">${esc(fixed)}</button>`);
        }
        showErr(f, k, msg);
      }
      const fix = $('.xl-fix', f);
      if (fix) fix.addEventListener('click', () => { f.elements.email.value = fix.textContent; showErr(f, 'email', ''); });
      tsReset();
      const first = $('.xl-f.bad input, .xl-f.bad select', f); if (first) first.focus();
      return;
    }
    const code = r.http === 0 ? 'net' : r.status === 'bot_check' ? 'bot_check' : r.http === 429 ? 'slow_down' : r.status === 'busy' ? 'busy' : 'failed';
    showErr(f, '_', esc(x.err[code]));
    tsReset();
  }

  // ---------- 2. returning visitors and the end of the five ----------
  function handoff(title, text, into = view(), { contacts = true, free = true, team = false, again = false, rate = false } = {}) {
    const x = L();
    into.innerHTML = `<div class="xl-pm">
      <div class="xl-pm-i" aria-hidden="true"><i></i><i></i><i></i></div>
      <h4>${esc(title)}</h4><p>${esc(text)}</p>
      ${rate && state.token ? '<div class="xl-rate"></div>' : ''}
      ${contacts ? `<div class="xl-pm-b">
        <a class="btn btn-p" href="${PM_TG}" target="_blank" rel="noopener"><span class="d"></span><span>${esc(x.tg)}</span></a>
        <a class="btn xl-ghost" href="mailto:${PM_MAIL}"><span>${esc(x.mail)}</span></a>
      </div>
      <div class="xl-pm-m"><span dir="ltr">${PM_MAIL}</span><button type="button" class="xl-copy">${esc(x.copy)}</button></div>` : ''}
      ${free ? `<a class="xl-free" href="#free">${esc(x.free)} →</a>` : ''}
      ${team ? `<button type="button" class="xl-team-go">${esc(x.team_link)}</button>` : ''}
      ${again && invite ? `<button type="button" class="xl-again">${esc(x.new_code)}</button>` : ''}
    </div>`;
    if (team) $('.xl-team-go', into).addEventListener('click', () => formView());
    if (again && invite) $('.xl-again', into).addEventListener('click', newCode);
    if (rate && state.token) rateCard($('.xl-rate', into));
    if (free) $('.xl-free', into).addEventListener('click', () => close());
    if (!contacts) return;
    $('.xl-copy', into).addEventListener('click', (e) => {
      const b = e.currentTarget;
      const done = () => { b.textContent = x.copied; setTimeout(() => { b.textContent = x.copy; }, 1800); };
      (navigator.clipboard ? navigator.clipboard.writeText(PM_MAIL) : Promise.reject()).then(done, () => {
        const r = D.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      });
    });
  }

  // ---------- the rating at the end ----------
  // 1 to 5 stars and an optional line, saved by the server into the Chats sheet.
  // Once sent from this browser, it shows the thank-you instead of asking again.
  function rateCard(box) {
    const x = L();
    if (store.get().rated) { box.innerHTML = `<p class="xl-rate-ok">${esc(x.rate_thanks)}</p>`; return; }
    let stars = 0;
    box.innerHTML = `<p class="xl-rate-q" id="xl-rate-q">${esc(x.rate_q)}</p>
      <div class="xl-stars" role="radiogroup" aria-labelledby="xl-rate-q">${[1, 2, 3, 4, 5].map((n) => `<button type="button" role="radio" aria-checked="false" aria-label="${esc(x.rate_star(n))}" data-n="${n}">★</button>`).join('')}</div>
      <div class="xl-rate-more" hidden><textarea rows="2" maxlength="300" dir="auto" placeholder="${esc(x.rate_note)}" aria-label="${esc(x.rate_note)}"></textarea>
      <button type="button" class="btn btn-p xl-rate-send"><span class="d"></span><span>${esc(x.rate_send)}</span></button><em class="xl-e" aria-live="polite"></em></div>`;
    const btns = $$('.xl-stars button', box), more = $('.xl-rate-more', box), send = $('.xl-rate-send', box);
    const paint = (n) => btns.forEach((b) => b.classList.toggle('on', +b.dataset.n <= n));
    btns.forEach((b) => {
      b.addEventListener('mouseenter', () => paint(+b.dataset.n));
      b.addEventListener('mouseleave', () => paint(stars));
      b.addEventListener('click', () => {
        stars = +b.dataset.n; paint(stars);
        btns.forEach((o) => o.setAttribute('aria-checked', String(o === b)));
        more.hidden = false;
      });
    });
    send.addEventListener('click', async () => {
      if (!stars || state.busy) return;
      const err = $('.xl-e', more); err.textContent = '';
      state.busy = true; send.disabled = true;
      const note = $('textarea', more).value.trim().slice(0, 300);
      let r; try { r = await api('/api/rate', { body: note ? { stars, note } : { stars }, token: state.token }); } catch { r = { http: 0 }; }
      state.busy = false; send.disabled = false;
      if (r.status === 'ok') {
        store.set({ ...store.get(), rated: true });
        box.innerHTML = `<p class="xl-rate-ok">${esc(x.rate_thanks)}</p>`;
        chime('answer');
        return;
      }
      err.textContent = r.http === 429 ? x.err.slow_down : r.http === 0 ? x.err.net : x.rate_err;
    });
  }

  // a new invitation code starts a new consultation: forget the old session here
  function newCode() {
    store.clear();
    Object.assign(state, { token: '', name: '', left: null, team: false, brief: false, busy: false });
    const el = modal && $('.xl-left', modal); if (el) el.hidden = true;
    formView();
  }

  // ---------- 3. the conversation ----------
  async function resume(token) {
    let r;
    try { r = await api('/api/session', { token }); } catch { r = { http: 0 }; }
    if (!modal) return;
    if (r.status === 'device') { notice(L().device_h, L().device_p); return; }
    if (r.status === 'expired') { state.token = token; handoff(L().expired_h, L().expired_p, view(), { again: true, rate: true }); return; }
    if (r.status === 'code_required') { store.clear(); formView(); return; }
    if (r.http !== 200) { if (r.http === 401) store.clear(); start(); return; }
    Object.assign(state, { token, name: r.name, left: r.left, team: !!r.team, brief: !!r.brief || !!r.team });
    if (r.locked) { handoff(L().locked_h, L().locked_p, view(), { rate: true }); return; }
    if (!state.team && state.left <= 0) { setLeft(); handoff(L().done_h, L().done_p, view(), { again: true, rate: true }); return; }
    chatView(r.history || []);
  }

  function chatView(history) {
    const x = L();
    setLeft();
    const ph = state.brief ? x.ask : x.brief_ph;
    view().innerHTML = `<div class="xl-chat"><div class="xl-log" aria-live="polite"></div>
      <form class="xl-in"><textarea rows="1" maxlength="1500" dir="auto" placeholder="${esc(ph)}" aria-label="${esc(ph)}"></textarea><button type="submit" class="xl-send" aria-label="${esc(x.send)}"><i></i></button></form>
      <em class="xl-e xl-chat-e" aria-live="assertive"></em></div>`;
    const log = $('.xl-log', view()), form = $('.xl-in', view()), ta = $('textarea', form);
    bubble(log, 'u-hi', x.intro(state.name));
    for (const m of history) bubble(log, m.role === 'user' ? 'me' : 'her', m.text);
    const grow = () => { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 160) + 'px'; };
    ta.addEventListener('input', grow);
    ta.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(); } });
    form.addEventListener('submit', (e) => { e.preventDefault(); send(); });
    log.scrollTop = log.scrollHeight;
    setTimeout(() => ta.focus({ preventScroll: true }), reduce ? 0 : 300);

    async function send() {
      const q = ta.value.trim();
      if (!q || state.busy) return;
      const err = $('.xl-chat-e', view());
      err.textContent = '';
      state.busy = true; form.classList.add('busy'); ta.value = ''; grow();
      bubble(log, 'me', q);
      chime('send');
      const her = bubble(log, 'her think', '');
      her.innerHTML = `<span class="xl-read">${esc(x.reading)}<i></i><i></i><i></i></span>`;
      log.scrollTop = log.scrollHeight;
      let text = '', end = null, raf = 0;
      const paint = () => { raf = 0; her.innerHTML = md(text); her.classList.remove('think'); };
      try {
        const dev = await device();
        const r = await fetch(API + '/api/chat', { method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + state.token, 'x-usha-device': dev.id }, body: JSON.stringify({ q, lang: H.lang in T ? H.lang : 'en' }) });
        if (!r.ok || !(r.headers.get('content-type') || '').includes('event-stream')) {
          let j = {}; try { j = await r.json(); } catch {}
          end = { error: j.status || 'failed', status: r.status };
        } else {
          const rd = r.body.getReader(), dec = new TextDecoder();
          let buf = '';
          for (;;) {
            const { value, done } = await rd.read();
            if (done) break;
            buf += dec.decode(value, { stream: true });
            let i;
            while ((i = buf.indexOf('\n\n')) >= 0) {
              const line = buf.slice(0, i).replace(/^data: /, ''); buf = buf.slice(i + 2);
              let ev; try { ev = JSON.parse(line); } catch { continue; }
              if (ev.t) { text += ev.t; if (!raf) raf = requestAnimationFrame(paint); }
              if (ev.done || ev.error) end = ev;
            }
          }
        }
      } catch { end = { error: 'net' }; }
      if (raf) cancelAnimationFrame(raf);
      state.busy = false; form.classList.remove('busy');
      if (!modal) return;
      if (end && end.done) {
        paint();
        // the team sees which depth answered, to judge cost against quality
        if (end.tier) her.insertAdjacentHTML('beforeend', `<span class="xl-tier" dir="ltr">${esc(end.tier)} · ${esc(end.model || '')}</span>`);
        state.left = end.left;
        if (end.kind === 'brief' || end.kind === 'business' || end.kind === 'answer') state.brief = true;
        setLeft();
        ta.placeholder = state.brief ? x.ask : x.brief_ph;
        chime(end.asks ? 'ask' : 'answer');
        if (end.locked) {
          setTimeout(() => {
            if (!modal) return;
            const card = D.createElement('div'); card.className = 'xl-end';
            log.append(card); form.remove();
            handoff(x.locked_h, x.locked_p, card, { rate: true });
            card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
          }, 600);
        } else if (!state.team && state.left <= 0) {
          setTimeout(() => {
            if (!modal) return;
            const card = D.createElement('div'); card.className = 'xl-end';
            log.append(card);
            form.remove();
            handoff(x.done_h, x.done_p, card, { again: true, rate: true });
            card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
          }, 600);
        }
      } else {
        her.remove();
        if (end && end.error === 'limit') { state.left = 0; setLeft(); handoff(x.done_h, x.done_p, view(), { again: true, rate: true }); return; }
        if (end && end.error === 'expired') { handoff(x.expired_h, x.expired_p, view(), { again: true, rate: true }); return; }
        if (end && end.error === 'code_required') { store.clear(); formView(); return; }
        if (end && end.error === 'locked') { handoff(x.locked_h, x.locked_p, view(), { rate: true }); return; }
        if (end && end.error === 'device') { notice(x.device_h, x.device_p); return; }
        if (end && end.error === 'region') { handoff(x.region_h, x.region_p, view(), { free: false }); return; }
        if (end && end.status === 401) { store.clear(); start(); return; }
        if (end && end.left != null) { state.left = end.left; setLeft(); }
        ta.value = q; grow();
        err.textContent = x.err[end && x.err[end.error] ? end.error : 'failed'] + (end && end.detail ? ` [${end.detail}]` : '');
      }
      log.scrollTop = log.scrollHeight;
    }
  }
  function bubble(log, who, text) {
    const x = L();
    const el = D.createElement('div');
    el.className = 'xl-m ' + who.split(' ').map((c) => 'xl-' + c).join(' ');
    el.dir = 'auto'; // an English answer on the Arabic page still reads left to right
    if (who.startsWith('me')) el.innerHTML = `<span class="xl-who">${esc(x.you)}</span><p>${esc(text)}</p>`;
    else el.innerHTML = md(text);
    log.append(el);
    return el;
  }

  // ---------- the entry point in "Try her" ----------
  function ctaUI() {
    const chat = $('#chat'); if (!chat) return;
    const x = L();
    let cta = $('.xl-cta');
    if (!cta) {
      cta = D.createElement('div'); cta.className = 'xl-cta rv in'; cta.setAttribute('translate', 'no');
      chat.after(cta);
    }
    if (cta.dataset.lang === H.lang) return;
    cta.dataset.lang = H.lang;
    cta.innerHTML = `<div class="xl-cta-t"><span class="xm-k"><span class="xl-dot" aria-hidden="true"></span>${esc(x.cta_k)}</span><b>${x.cta_h}</b><p>${esc(x.cta_p)}</p></div>
      <button type="button" class="btn btn-p xl-open"><span class="d"></span><span>${esc(x.cta_b)}</span></button>`;
    $('.xl-open', cta).addEventListener('click', open);
  }
  // ---------- the invitation in the first screen, right after she wakes ----------
  const HX = {
    en: { b: 'Get a free consultation', k: 'Live', a: '→' },
    ru: { b: 'Получить бесплатную консультацию', k: 'Онлайн', a: '→' },
    ar: { b: 'احصل على استشارتك المجانية', k: '', a: '←' },
  };
  function heroUI() {
    const row = $('#hero .hero-t .cta'); if (!row) return;
    const h = HX[H.lang] || HX.en;
    let b = $('.xl-hero', row);
    if (!b) {
      b = D.createElement('button'); b.type = 'button'; b.className = 'xl-hero'; b.setAttribute('translate', 'no');
      row.prepend(b);
      b.addEventListener('click', open);
    }
    if (b.dataset.lang !== H.lang) {
      b.dataset.lang = H.lang;
      b.innerHTML = `<span class="xl-hero-face" aria-hidden="true"><i></i><i></i></span><span class="xl-hero-b">${esc(h.b)}</span>${h.k ? `<span class="xl-hero-k"><span class="xl-hero-dot" aria-hidden="true"></span>${esc(h.k)}</span>` : ''}<span class="xl-hero-a" aria-hidden="true">${h.a}</span>`;
    }
    const nav = $('header a[href="#talk"]'); if (nav) nav.classList.add('xl-nav-live');
  }
  // show it once USHA is awake (the page drops its "locked" class)
  const wake = () => { if (!H.classList.contains('locked')) { H.classList.add('xl-awake'); return true; } return false; };
  if (!wake()) { const mo = new MutationObserver(() => { if (wake()) mo.disconnect(); }); mo.observe(H, { attributes: true, attributeFilter: ['class'] }); }
  addEventListener('usha:talk', () => open());
  // every link to the consultation ("…/#ask": the header, the menu, the pages'
  // own buttons) opens it in place, on whichever page the visitor is
  D.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href*="#ask"]');
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const u = new URL(a.getAttribute('href'), location.href);
    if (u.origin !== location.origin || u.hash !== '#ask') return;
    e.preventDefault(); open();
  });
  addEventListener('hashchange', () => { if (location.hash === '#ask') { history.replaceState(null, '', location.pathname + location.search); open(); } });

  const later = () => setTimeout(() => { ctaUI(); heroUI(); }, 60);
  new MutationObserver(later).observe(H, { attributes: true, attributeFilter: ['lang'] });
  const talk = $('#talk'); if (talk) new MutationObserver(() => { if (!$('.xl-cta')) later(); }).observe(talk, { childList: true, subtree: true });
  if (location.hash === '#ask') addEventListener('load', () => setTimeout(open, 400));
  const boot = () => { ctaUI(); heroUI(); };
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();

// The free week's brief on /plans/ (and /en/plans/, /ar/plans/): the same three
// steps as on the home page (what you sell, what hurts, how to reach you), the
// same checks and the same hand-off. The home page runs it inside its 3D
// bundle; here it runs on its own. Copy: window.USHA_BRIEF (tools/seo/build.mjs).
// Delivery stays Telegram or email: nothing is sent from the page, and opening
// a composer or copying the brief is never reported as sent.
(() => {
  const B = window.USHA_BRIEF, D = document;
  const form = D.getElementById('brief');
  if (!B || !form) return;
  const $ = (id) => D.getElementById(id);
  const st = { step: 0, sell: null, pain: null, plan: null };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const think = () => dispatchEvent(new Event('usha:think'));

  function chips() {
    $('bq1').innerHTML = B.a1.map((t, i) => `<button type="button" class="${st.sell === i ? 'on' : ''}" data-i="${i}" aria-pressed="${st.sell === i}">${esc(t)}</button>`).join('');
    $('bq2').innerHTML = B.a2.map((t, i) => `<button type="button" class="${st.pain === i ? 'on' : ''}" data-i="${i}" aria-pressed="${st.pain === i}">${esc(t)}</button>`).join('');
    $('bnextT').textContent = st.step === 2 ? B.send : B.next;
  }
  function go(i) {
    st.step = Math.max(0, Math.min(2, i));
    form.querySelectorAll('.step').forEach((s) => s.classList.toggle('on', +s.dataset.s === st.step));
    $('bstep').textContent = st.step + 1;
    $('bprog').style.width = `${(st.step + 1) / 3 * 100}%`;
    $('bback').style.visibility = st.step ? 'visible' : 'hidden';
    chips();
  }
  function error(id, key) {
    const field = $(id), msg = $(`${id}-error`);
    if (field) field.setAttribute('aria-invalid', key ? 'true' : 'false');
    if (msg) msg.textContent = key ? B[key] : '';
  }
  function shake(el) {
    if (!reduce && el.animate) el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 300 });
  }

  // a choice moves on to the next step, the way it does on the home page
  $('bq1').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-i]'); if (!b) return;
    st.sell = +b.dataset.i; error('bq1', ''); chips(); think(); setTimeout(() => go(1), 260);
  });
  $('bq2').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-i]'); if (!b) return;
    st.pain = +b.dataset.i; error('bq2', ''); chips(); think(); setTimeout(() => go(2), 260);
  });
  $('bct').addEventListener('input', () => error('bct', ''));
  $('bback').addEventListener('click', () => go(st.step - 1));
  // "Choose with your project manager" on a plan card: that plan goes into the brief
  D.addEventListener('click', (e) => { const a = e.target.closest && e.target.closest('a[data-plan]'); if (a) st.plan = a.dataset.plan; });

  $('bnext').addEventListener('click', () => {
    if (st.step < 2) {
      const id = st.step === 0 ? 'bq1' : 'bq2', missing = st.step === 0 ? st.sell == null : st.pain == null;
      if (missing) { error(id, st.step === 0 ? 'errorSell' : 'errorPain'); shake(form); return; }
      error(id, ''); go(st.step + 1); think(); return;
    }
    const contact = $('bct').value.trim();
    if (!contact) { error('bct', 'errorContact'); shake($('bct').parentNode); $('bct').focus({ preventScroll: true }); return; }
    error('bct', '');
    const text = ['USHA brief · first free week', st.plan ? `Plan: ${st.plan}` : '',
      `Sells: ${B.en1[st.sell]}`, `Pain: ${B.en2[st.pain]}`,
      `Name: ${$('bname').value.trim() || '-'}`, `Company: ${$('bco').value.trim() || '-'}`,
      `Contact: ${contact}`, `Language: ${D.documentElement.lang.toUpperCase()}`].filter(Boolean).join('\n');
    $('btg').href = B.tg;
    $('bmail').href = `mailto:${B.mail}?subject=${encodeURIComponent('USHA · free week')}&body=${encodeURIComponent(text)}`;
    const done = $('bdone'), copy = $('bcopy');
    const status = (state, heading, body) => {
      done.dataset.briefState = state;
      done.querySelector('h3').textContent = B[heading];
      done.querySelector('p').textContent = B[body];
    };
    status('prepared', 'doneH', 'doneP');
    const copyBrief = async () => {
      copy.disabled = true;
      try {
        await navigator.clipboard.writeText(text);
        status('copied', 'copied', 'doneCopied'); copy.textContent = B.copied;
      } catch {
        status('prepared', 'doneH', 'copyError'); copy.textContent = B.copy;
      } finally { copy.disabled = false; }
    };
    copy.onclick = copyBrief;
    form.querySelectorAll('.step, #bnav, .safe').forEach((s) => { s.style.display = 'none'; });
    done.classList.add('on');
    copyBrief();
    dispatchEvent(new Event('usha:happy'));
  });
  go(0);
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
