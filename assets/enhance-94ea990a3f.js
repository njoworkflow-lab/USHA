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
    <div class="xm-body">${body}</div>
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
  const STORY = '#hero,#noise,#signal,#game';
  if (fine) addEventListener('pointermove', (e) => {
    const t = e.target;
    if (!t || !t.closest) return;
    // popup windows (plans, the live chat, USHA's story) sit above the eyes cursor: they always get the normal pointer
    const inStory = !t.closest('.x-modal,.ns') && (t.closest(STORY) || t.id === 'gl' || !t.closest('main,header,footer,.ov'));
    H.classList.toggle('x-native', !inStory || !!t.closest('.fcard,.hero-t a,.hero-t button'));
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
      cta_k: 'Live · a brief + 4 questions', cta_h: 'Consult your new <i>Marketing Director</i>.', cta_p: 'Brief her on your business, then ask four questions. Real answers on your market and your numbers.', cta_b: 'Ask USHA live',
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
      cta_k: 'Вживую · бриф + 4 вопроса', cta_h: 'Консультация вашего нового <i>директора по маркетингу</i>.', cta_p: 'Расскажите о бизнесе и задайте четыре вопроса. Настоящие ответы про ваш рынок и ваши цифры.', cta_b: 'Спросить USHA',
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
      cta_k: 'مباشر · brief + ٤ أسئلة', cta_h: 'استشر <i>مديرة التسويق</i> الجديدة لديك.', cta_p: 'عرّفها على نشاطك ثم اسأل أربعة أسئلة. إجابات حقيقية عن سوقك وأرقامك.', cta_b: 'اسأل USHA مباشرة',
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
  let modal = null, lastFocus = null, state = { token: '', name: '', left: null, team: false, brief: false, busy: false };

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
    lastFocus = D.activeElement;
    modal = D.createElement('div');
    modal.className = 'x-modal x-live';
    modal.innerHTML = shell('');
    D.body.append(modal);
    H.classList.add('x-modal-on');
    requestAnimationFrame(() => modal && modal.classList.add('on'));
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
    H.classList.remove('x-modal-on');
    if (reduce) m.remove(); else { m.classList.remove('on'); setTimeout(() => m.remove(), 380); }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal) close(); });
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
    en: { b: 'Talk to USHA now', k: 'Live', a: '→' },
    ru: { b: 'Поговорить с USHA', k: 'Онлайн', a: '→' },
    ar: { b: 'تحدّث مع USHA الآن', k: '', a: '←' },
  };
  function heroUI() {
    const row = $('#hero .hero-t .cta'); if (!row) return;
    const h = HX[H.lang] || HX.en;
    let b = $('.xl-hero');
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
  addEventListener('hashchange', () => { if (location.hash === '#ask') { history.replaceState(null, '', location.pathname + location.search); open(); } });

  const later = () => setTimeout(() => { ctaUI(); heroUI(); }, 60);
  new MutationObserver(later).observe(H, { attributes: true, attributeFilter: ['lang'] });
  const talk = $('#talk'); if (talk) new MutationObserver(() => { if (!$('.xl-cta')) later(); }).observe(talk, { childList: true, subtree: true });
  if (location.hash === '#ask') addEventListener('load', () => setTimeout(open, 400));
  const boot = () => { ctaUI(); heroUI(); };
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', boot); else boot();
})();

// The soundtrack player (points 13 and 15; bundle hooks in sound.mjs).
// It starts only after a user gesture, loads the file only once sound is on,
// pauses while the tab is hidden, fades out for the live chat and for anything
// that sends "usha:quiet" (resumed by "usha:resume") and while the game runs.
(() => {
  const D = document, H = D.documentElement, KEY = 'usha-music';
  const VOL = 0.65, FX_MUTED = 0.4; // effects bus runs at .8; half of it is .4
  const pref = () => { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } };
    let on = pref(), el = null, gain = null, pz = 0, armed = false, lastT = -1;
  // ready: the music may sound. New visitors: 3 s after the wake-up burst. Already awake: the first tap.
  let ready = false, waking = false, started = false;
  const quiet = new Set();
  window.__fxL = on ? 0 : FX_MUTED;

  const audio = () => window.__ushaAudio || null;
  function ensure() {
    if (el) return true;
    const A = audio(); if (!A) return false;
    el = new Audio();
    el.loop = true; el.preload = 'none';
    el.src = el.canPlayType('audio/webm; codecs="opus"') ? '/audio/usha-track.webm' : '/audio/usha-track.m4a';
    const src = A.ac.createMediaElementSource(el);
    gain = A.ac.createGain(); gain.gain.value = 0;
    src.connect(gain); gain.connect(A.ac.destination);
    return true;
  }
  const live = () => H.classList.contains('x-modal-on');
  const target = () => (ready && on && !quiet.size && !live() && !D.hidden ? VOL : 0);

  // site effects: silent in music mode and in the live chat, half when muted; open in the game
  function fx() {
    const A = audio(); if (!A) return;
    // in the game her voice and the game's effects are the sound, so the bus opens (full, or half when muted)
    const lvl = live() ? 0 : quiet.has('game') ? (on ? 0.8 : FX_MUTED) : on ? 0 : FX_MUTED;
    window.__fxL = lvl;
    A.fx.gain.setTargetAtTime(lvl, A.ac.currentTime, 0.15);
  }
  function apply() {
    fx();
    const A = audio(); if (!A || !armed) return;
    const t = target();
    if (t === lastT) return; // the page changes classes often; act only on a real change
    lastT = t;
    if (!t && !el) return;
    if (!ensure()) return;
    const g = gain.gain, now = A.ac.currentTime;
    g.cancelScheduledValues(now); g.setValueAtTime(g.value, now);
    clearTimeout(pz);
    if (t) {
      if (A.ac.state === 'suspended') A.ac.resume();
      // the very first start is sharp and from the top of the track; later returns fade in
      const sharp = !started; started = true;
      if (sharp) { try { el.currentTime = 0; } catch {} }
      if (el.paused) el.play().catch(() => {});
      g.linearRampToValueAtTime(t, now + (sharp ? 0.06 : 1.2));
    } else {
      g.linearRampToValueAtTime(0, now + 0.8);
      pz = setTimeout(() => { if (!target()) el.pause(); }, 1000);
    }
  }

  window.UshaSound = {
    set(v) { on = !!v; armed = true; if (!waking) ready = true; lastT = -1; apply(); },
    get on() { return on; },
    // read-only status, for checks
    get playing() { return !!el && !el.paused; },
    get level() { return gain ? +gain.gain.value.toFixed(2) : 0; },
  };
  // the first gesture anywhere (after the bundle has created its audio context)
  // unlock the player inside the gesture (silently), so it may start later on its own
  const unlock = () => { if (!ensure() || started) return; const p = el.play(); if (p) p.then(() => { if (!started) el.pause(); }).catch(() => {}); };
  const first = () => setTimeout(() => {
    if (!audio() || armed) return;
    armed = true; unlock();
    if (!waking && !H.classList.contains('locked')) ready = true;
    apply();
    ['pointerup', 'keydown', 'touchend'].forEach((e) => removeEventListener(e, first, true));
  }, 0);
  ['pointerup', 'keydown', 'touchend'].forEach((e) => addEventListener(e, first, true));
  D.addEventListener('visibilitychange', apply);
  new MutationObserver(apply).observe(H, { attributes: true, attributeFilter: ['class'] });
  addEventListener('usha:quiet', () => { quiet.add('ext'); apply(); });
  addEventListener('usha:resume', () => { quiet.delete('ext'); apply(); });
  addEventListener('usha:wake', () => {
    if (ready || waking) return;
    waking = true;
    setTimeout(() => { waking = false; ready = true; lastT = -1; apply(); }, 3000);
  });
  // the game has its own sound world (point 14): the music stops while it runs
  addEventListener('usha:game-on', () => { quiet.add('game'); apply(); });
  addEventListener('usha:game-off', () => { quiet.delete('game'); apply(); });
})();

// The game's sound world (point 14). USHA keeps her own voice in the game; this
// adds what is around her. While the game runs the soundtrack is out (sound.js)
// and this plays a very low ambient bed, generated live, whose mood follows the
// level (morning scan, price war, ad storm, dark feed, the Noise King), plus
// soft sounds for her surroundings: a shiver when imps get close, a whoosh in
// the ad winds and on a dash, the King's slow heartbeat, a small chime when a
// level clears, and a soft accent under her voice. game.js shares what is
// around her in window.__gsnd (read-only) and calls UshaGameSound.fx(name).
// Sound ON: bed + effects. Sound OFF: no bed, effects at 50%, like the site.
(() => {
  const D = document;
  const BED = 0.06, FX = 0.1, MUTED = 0.5;
  // the site's shared audio engine; with music off it may not exist yet, so the game makes its own
  let own = null;
  const audio = () => {
    if (window.__ushaAudio) return window.__ushaAudio;
    if (!own) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; try { own = { ac: new AC() }; } catch { return null; } }
    if (own.ac.state === 'suspended') own.ac.resume().catch(() => {});
    return own;
  };
  const isOn = () => !window.UshaSound || window.UshaSound.on;
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  let ac = null, out = null, bedBus = null, bed = null, noiseBuf = null, inGame = false, tick = 0;

  function setup() {
    const A = audio(); if (!A) return false;
    if (ac === A.ac && out) return true;
    ac = A.ac;
    out = ac.createGain(); out.gain.value = 0;
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3600;
    out.connect(lp); lp.connect(ac.destination);
    bedBus = ac.createGain(); bedBus.gain.value = 0; bedBus.connect(out);
    const n = ac.sampleRate * 2; noiseBuf = ac.createBuffer(1, n, ac.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let k = 0; k < n; k++) d[k] = Math.random() * 2 - 1;
    return true;
  }

  // ---------- the bed: one mood per level type ----------
  // chord (MIDI, low and open), filter, how fast it breathes, how much air
  const MOODS = [
    { ch: [45, 52, 57, 64], f: 620, lfo: 0.06, air: 0.025 },  // morning scan: calm A minor
    { ch: [43, 50, 55, 62], f: 700, lfo: 0.22, air: 0.02 },   // price war: G, breathing faster
    { ch: [41, 48, 57, 60], f: 560, lfo: 0.1, air: 0.07 },    // ad storm: F, more wind
    { ch: [40, 47, 52, 55], f: 380, lfo: 0.05, air: 0.02 },   // the dark feed: low E minor, closed
    { ch: [38, 45, 50, 53], f: 440, lfo: 0.14, air: 0.03 },   // the Noise King: D minor, a drone
  ];
  let moodNow = -1;
  function startBed() {
    if (bed || !setup()) return;
    const t = ac.currentTime, lp = ac.createBiquadFilter(), lfo = ac.createOscillator(), lg = ac.createGain();
    lp.type = 'lowpass'; lp.frequency.value = 560; lp.Q.value = 0.4;
    lfo.frequency.value = 0.06; lg.gain.value = 160; lfo.connect(lg); lg.connect(lp.frequency); lfo.start(t);
    const voices = [];
    for (let i = 0; i < 4; i++) for (const cents of [-5, 5]) {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = i ? 'sine' : 'triangle'; o.frequency.value = hz(MOODS[0].ch[i]); o.detune.value = cents;
      g.gain.value = 0.22 / (i + 1); o.connect(g); g.connect(lp); o.start(t);
      voices.push({ o, i });
    }
    const ns = ac.createBufferSource(), bp = ac.createBiquadFilter(), air = ac.createGain();
    ns.buffer = noiseBuf; ns.loop = true; bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 0.6; air.gain.value = 0.025;
    ns.connect(bp); bp.connect(air); air.connect(bedBus); ns.start(t);
    lp.connect(bedBus);
    bed = { voices, lp, lfo, air, ns };
    moodNow = -1;
  }
  function mood(i) {
    if (!bed || i === moodNow) return;
    moodNow = i;
    const m = MOODS[i] || MOODS[0], t = ac.currentTime;
    bed.voices.forEach(({ o, i: v }) => o.frequency.setTargetAtTime(hz(m.ch[v]), t, 1.4));
    bed.lp.frequency.setTargetAtTime(m.f, t, 1.2);
    bed.lfo.frequency.setTargetAtTime(m.lfo, t, 1);
    bed.air.gain.setTargetAtTime(m.air, t, 1.2);
  }
  function stopBed() {
    if (!bed) return;
    const b = bed; bed = null;
    setTimeout(() => { [...b.voices.map((v) => v.o), b.lfo, b.ns].forEach((x) => { try { x.stop(); } catch {} }); }, 2600);
  }

  // ---------- small sounds ----------
  function tone(f, { at = 0, dur = 0.35, vol = 1, to = 0, type = 'sine' } = {}) {
    if (!setup()) return;
    const t = ac.currentTime + at, o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(FX * vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.05);
  }
  // filtered noise: wind, whoosh, shiver
  function air({ at = 0, dur = 0.5, vol = 1, from = 600, to = 1800, q = 1.2 } = {}) {
    if (!setup()) return;
    const t = ac.currentTime + at, s = ac.createBufferSource(), bp = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = noiseBuf; bp.type = 'bandpass'; bp.Q.value = q;
    bp.frequency.setValueAtTime(from, t); bp.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(FX * 0.6 * vol, t + dur * 0.3); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(bp); bp.connect(g); g.connect(out); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  const PENTA = [69, 72, 74, 76, 79, 81, 84];
  let run = 0, runT = 0;
  // a soft accent under her voice, never instead of it
  const ACCENT = {
    collect() { const now = performance.now(); run = now - runT < 900 ? Math.min(run + 1, PENTA.length - 1) : 0; runT = now; tone(hz(PENTA[run] + 12), { dur: 0.25, vol: 0.45 }); },
    pop() { air({ dur: 0.18, vol: 0.5, from: 2400, to: 800, q: 2 }); },
    found() { tone(hz(81), { dur: 0.6, vol: 0.4 }); tone(hz(88), { at: 0.08, dur: 0.7, vol: 0.3 }); },
    secret() { [76, 79, 84, 88, 91].forEach((m, i) => tone(hz(m), { at: i * 0.09, dur: 0.8, vol: 0.35 })); },
    laugh() { [72, 76, 79, 84].forEach((m, i) => tone(hz(m), { at: 0.1 + i * 0.11, dur: 0.7, vol: 0.4 })); }, // level clear
    wake() { air({ dur: 1.2, vol: 0.6, from: 300, to: 1400 }); tone(hz(57), { dur: 1.3, vol: 0.3, to: hz(69) }); },
    grr() { tone(90, { dur: 0.35, vol: 0.7, to: 55 }); },
    sad() { tone(hz(52), { dur: 0.8, vol: 0.35, to: hz(45) }); },
    sob() { tone(hz(45), { dur: 1.4, vol: 0.4, to: hz(38) }); air({ at: 0.2, dur: 1.2, vol: 0.4, from: 900, to: 300 }); },
  };

  // ---------- what is around her, checked ten times a second ----------
  let lastShiver = 0, lastWind = 0, lastBeat = 0, wasDash = false, lastPhase = '';
  function around() {
    const g = window.__gsnd; if (!g || !inGame || D.hidden || g.paused) return;
    const now = performance.now();
    mood(g.ty);
    // imps close: a quiet shiver, closer = more often and a little louder
    if (g.phase === 'play' && g.threat < 2.6 && now - lastShiver > 500 + g.threat * 500) {
      lastShiver = now; const k = 1 - g.threat / 2.6;
      air({ dur: 0.35, vol: 0.25 + k * 0.5, from: 3000, to: 4200, q: 6 });
    }
    // in an ad wind lane: a soft gust
    if (g.wind && now - lastWind > 900) { lastWind = now; air({ dur: 1, vol: 0.7, from: 400, to: 900, q: 0.8 }); }
    // a dash: a short whoosh
    if (g.dash && !wasDash) air({ dur: 0.4, vol: 0.8, from: 500, to: 2600, q: 0.9 });
    wasDash = g.dash;
    // the Noise King: a low, slow heartbeat that quickens as he weakens
    if (g.boss > 0 && now - lastBeat > 600 + g.boss * 700) { lastBeat = now; tone(62, { dur: 0.22, vol: 0.9, to: 48 }); tone(58, { at: 0.18, dur: 0.22, vol: 0.6, to: 46 }); }
    lastPhase = g.phase;
  }

  // ---------- levels ----------
  function apply() {
    if (!setup()) return;
    const t = ac.currentTime, on = isOn(), live = inGame && !D.hidden;
    out.gain.setTargetAtTime(live ? (on ? 1 : MUTED) : 0, t, 0.25);
    bedBus.gain.setTargetAtTime(live && on ? BED : 0, t, live && on ? 1.5 : 0.5);
    if (live && on) startBed(); else if (!inGame || !on) stopBed();
    clearInterval(tick); if (live) tick = setInterval(around, 100);
  }

  window.UshaGameSound = {
    fx(name) { if (!inGame || D.hidden) return; const f = ACCENT[name]; if (f) try { f(); } catch {} },
    // read-only status, for checks
    get bed() { return !!bed; },
    get mood() { return moodNow; },
    get level() { return out ? +out.gain.value.toFixed(2) : 0; },
  };
  addEventListener('usha:game-on', () => { inGame = true; apply(); });
  addEventListener('usha:game-off', () => { inGame = false; apply(); });
  D.addEventListener('visibilitychange', () => { if (inGame) apply(); });
  // the header sound switch changes UshaSound.on; follow it while the game runs
  let lastOn = null;
  setInterval(() => { const o = isOn(); if (o !== lastOn) { lastOn = o; if (inGame) apply(); } }, 400);
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
    const eng = D.querySelector('#control .eng');
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

// Section 03 "Try her": one wide, centred stage in the galaxy, under USHA
// (the 3D scene centres her on #talk .side, which the CSS places above the
// stage). Three panels with a segmented control: 1 Scenarios (the bundle's own
// chips and chat, moved in), 2 USHA Live (opens the live chat via usha:talk),
// 3 "One month, two endings": five example app screens with a USHA-faced
// divider (without her on the reading start side, with USHA on the end side)
// plus the two videos. Arrows on desktop, swipe on phones, vertical page scroll
// is never captured. Videos fire usha:quiet while playing, usha:resume after.
// Every derived number is computed from the inputs in N (see tools/seo/check-try.mjs).
(() => {
  const W = typeof window !== 'undefined' ? window : globalThis;
  const D = W.document, H = D.documentElement;
  const $ = (s, r = D) => r.querySelector(s), $$ = (s, r = D) => [...r.querySelectorAll(s)];
  const reduce = W.matchMedia ? W.matchMedia('(prefers-reduced-motion: reduce)').matches : true;
  const fine = W.matchMedia ? W.matchMedia('(hover:hover) and (pointer:fine)').matches : false;
  const rtl = () => H.dir === 'rtl';
  const iso = (s) => '⁦' + s + '⁩';
  const bare = (s) => String(s).replace(/[⁦-⁩]/g, '');
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // ---------- inputs: the only typed numbers ----------
  // Same brand, same 90 days (1 Jul – 28 Sep 2026); index 0 = without USHA, 1 = with.
  const N = {
    days: 90, start: [2026, 6, 1],
    orders: [3720, 4650], dip: [51, 61], // without: the best-seller is out of stock on days 51–61
    top: [[1560, 1240, 920], [1860, 1430, 1360]], // units of the three products; their stock is in stk
    ctr: [1.8, 2.5],
    en: {
      avg: [120, 125], rate: [8.4, 6.9], // return rate, %
      avgW: [[119, 121, 120, 119, 120, 121, 120, 119, 120, 121, 120, 120, 120], [122, 123, 124, 124, 125, 125, 125, 126, 126, 126, 126, 126, 127]],
      rateW: [[8.3, 8.5, 8.4, 8.6, 8.3, 8.4, 8.5, 8.4, 8.3, 8.4, 8.5, 8.3, 8.4], [7.4, 7.3, 7.2, 7.1, 7.0, 6.9, 6.9, 6.8, 6.8, 6.7, 6.6, 6.6, 6.5]],
      ads: [[[9800, 32340, 1], [7100, 17040, 1], [4700, 6780, 1]], [[11400, 49020, 1], [7500, 24690, 1], [0, 0, 0]]],
      price: 119, comp: [99, 75, 139, 85, 109, 65, 129, 89, 115],
      sad: [[[6000, 400000, 4800, 120], [3000, 300000, 3000, 40]], [[5400, 380000, 5700, 140], [3000, 330000, 4290, 70]]], // spend, impressions, clicks, purchases
      web: { aov: [160, 166], orders: [[260, 160, 130, 230], [320, 210, 210, 245]] }, // organic, paid ads, email, direct
      deal: 2400,
    },
    ru: {
      avg: [2340, 2440], rate: [64, 71], // buyout (выкуп), %
      avgW: [[2330, 2350, 2340, 2330, 2340, 2350, 2340, 2330, 2340, 2350, 2340, 2340, 2340], [2400, 2410, 2420, 2430, 2430, 2440, 2440, 2450, 2450, 2450, 2460, 2460, 2480]],
      rateW: [[63, 64, 65, 64, 63, 64, 65, 64, 63, 64, 64, 65, 64], [68, 69, 69, 70, 70, 71, 71, 71, 72, 72, 72, 73, 75]],
      ads: [[[245000, 1120000, 1], [180000, 640000, 1], [115000, 240000, 1]], [[290000, 1860000, 1], [186000, 940000, 1], [0, 0, 0]]],
      price: 2390, comp: [1990, 1450, 2790, 1690, 2190, 1290, 2490, 1790, 2290],
      sad: [[[180000, 1500000, 15000, 120], [240000, 800000, 24000, 160]], [[160000, 1450000, 18850, 150], [230000, 820000, 28700, 210]]],
      web: { aov: [2900, 3010], orders: [[260, 280, 100, 140], [310, 360, 170, 145]] },
      deal: 48000,
    },
    // website, SEO, service, stock and market (same brand, same 90 days)
    web: { sessions: [52000, 58000], abandoned: [2400, 2450], recovered: [72, 150] }, // recovered orders are part of the email channel
    seo: {
      clicks: [4200, 5460], impr: [180000, 210000], pos: [18.4, 14.2],
      q: [[[900, 30000, 12.1], [520, 14000, 9.8], [310, 22000, 21.5]], [[1380, 36000, 7.9], [760, 16500, 6.2], [520, 26000, 14.8]]], // clicks, impressions, position
      pages: [[1600, 1100, 240], [2300, 1500, 690]],
      weekly: [[300, 320, 330, 310, 320, 340, 330, 320, 310, 330, 340, 330, 320], [330, 350, 370, 380, 400, 410, 420, 430, 440, 450, 460, 470, 480]], // shape only, scaled to the clicks
    },
    crm: { conv: [[920, 540, 380], [1080, 630, 440]], frt: [320, 12], resolved: [1306, 1978], csat: [4.1, 4.5], pipe: [[60, 30, 14, 5], [72, 40, 20, 8]], waits: [[120, 360, 540, 1440], [4, 9, 12, 20]] },
    stk: { onHand: [[156, 524, 245, 420, 300], [640, 572, 408, 300, 160]], extra: [[210, 18], [330, 60]], reorderDays: 21, leadDays: 14, coverTarget: 45, deadDays: 120 },
    mkt: { sos: [[4, 18, 14, 9], [6.5, 17, 13.5, 8.5]], sent: [86, 79, 74], seen: [0, 3] }, // share of search %, competitors' positive reviews %
    soc: { posts: 36, er: [[1.0, 1.4, 1.1, 1.3, 1.2, 1.2], [2.4, 3.3, 2.6, 3.0, 2.7, 2.8]], reach: [4100, 8300], saves: [18, 72], foll: [240, 910] },
    rev: {
      dist: [[255, 75, 30, 18, 32], [360, 85, 25, 15, 20]], // new ratings in 90 days, 5★ … 1★
      answered: [62, 485], replyMin: [5760, 160], // median reply time in minutes (4 days, 2 h 40 min)
      trend: [[4.2, 4.2, 4.2, 4.1, 4.2, 4.2, 4.2, 4.1, 4.2, 4.2, 4.2, 4.2, 4.2], [4.2, 4.2, 4.2, 4.3, 4.3, 4.3, 4.4, 4.4, 4.4, 4.4, 4.5, 4.5, 4.5]], // rolling 90-day rating, weekly
    },
    srch: { perPage: 30, results: 2140, trend: [[38, 39, 37, 40, 38, 36, 39, 41, 38, 37, 39, 38, 38], [38, 38, 36, 36, 33, 29, 29, 24, 20, 16, 13, 11, 9]], rating: [4.2, 4.5], compRating: [4.8, 4.6, 4.7, 4.5, 4.9, 4.6, 4.7, 4.4, 4.6] },
  };

  // ---------- derived numbers (one place; the check script recomputes them independently) ----------
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  const mean = (a) => sum(a) / a.length;
  function dailySeries(v) {
    const n = N.days, total = N.orders[v], raw = [];
    for (let i = 0; i < n; i++) {
      const wk = 1 + 0.09 * Math.sin((i / 7) * Math.PI * 2 + 1.2) + 0.04 * Math.sin(i * 1.9 + v * 3);
      let base = v ? 44 + (i / (n - 1)) * 16 : 41.5 + Math.sin(i / 14) * 1.2;
      if (!v && i >= N.dip[0] && i <= N.dip[1]) base *= 0.56; // best-seller out of stock
      raw.push(base * wk);
    }
    const k = total / sum(raw), f = raw.map((x) => x * k), out = f.map(Math.floor);
    let rest = total - sum(out);
    f.map((x, i) => [x - Math.floor(x), i]).sort((a, b) => b[0] - a[0]).slice(0, rest).forEach(([, i]) => out[i]++);
    return out;
  }
  const weekly = (d) => Array.from({ length: Math.ceil(d.length / 7) }, (_, w) => sum(d.slice(w * 7, w * 7 + 7)));
  function derive(lang) {
    const M = N[lang === 'ru' ? 'ru' : 'en'], o = N.orders, gross = [o[0] * M.avg[0], o[1] * M.avg[1]];
    const ads = M.ads.map((rows) => ({ spend: sum(rows.map((r) => r[0])), sales: sum(rows.map((r) => r[1])) }));
    const dist = N.rev.dist.map((d) => ({ n: sum(d), avg: sum(d.map((c, i) => c * (5 - i))) / sum(d) }));
    return { M, gross, ads, dist, daily: [dailySeries(0), dailySeries(1)] };
  }

  // ---------- copy ----------
  const P = {
    en: ['Assorted chocolates box, 24 pcs', 'Chocolate-coated dates, 500 g', 'Gift box “Celebration”'],
    ru: ['Набор конфет «Ассорти», 24 шт', 'Финики в шоколаде, 500 г', 'Подарочная коробка «Праздник»'],
    ar: ['علبة شوكولاتة مشكّلة، 24 قطعة', 'تمر بالشوكولاتة، 500 غ', 'علبة هدايا «احتفال»'],
  };
  const COMP = {
    en: ['Chocolate box, 18 pcs', 'Assorted chocolate, 300 g', 'Gift chocolates, 32 pcs', 'Praline gift set, 250 g', 'Truffles, 16 pcs', 'Chocolate bar set, 12 pcs', 'Dates & nuts gift tray', 'Milk chocolate hearts, 24 pcs', 'Dark chocolate box, 20 pcs'],
    ru: ['Набор конфет, 18 шт', 'Шоколад ассорти, 300 г', 'Конфеты в коробке, 32 шт', 'Пралине подарочное, 250 г', 'Трюфели, 16 шт', 'Набор шоколада, 12 шт', 'Финики с орехами, поднос', 'Сердечки из молочного шоколада, 24 шт', 'Горький шоколад, 20 шт'],
    ar: ['علبة شوكولاتة، 18 قطعة', 'شوكولاتة مشكّلة، 300 غ', 'شوكولاتة هدايا، 32 قطعة', 'برالين هدية، 250 غ', 'ترافل، 16 قطعة', 'ألواح شوكولاتة، 12 قطعة', 'صينية تمر ومكسرات', 'قلوب شوكولاتة بالحليب، 24 قطعة', 'شوكولاتة داكنة، 20 قطعة'],
  };
  const T = {
    en: {
      ex: 'Example', without: 'Without her', with: 'With USHA', dragA: 'Compare without and with USHA',
      diffH: 'Same 90 days · with USHA vs without',
      scArt: { chips: ['Sweets', 'Cafés', 'Beauty'], q: 'Why did orders drop?', a: 'Found it. Here’s the fix.' },
      ill: 'Illustrative example, not client results. Brand names anonymised.', move: 'Her move',
      live: {
        k: 'Live now', h: 'Consult your new <i>Marketing Director</i>.',
        p: 'Brief her on your business, then ask four questions. Real answers on your market and your numbers.',
        hi: 'Hi, I’m USHA. Tell me what you sell and where, and I’ll read your market before I answer.',
        ask: 'You could ask', qs: ['Why did my sales drop this month?', 'Is my ad budget working?', 'What should I post next week?'],
        steps: ['Your brief', '4 questions', 'Your project manager follows up'], b: 'Ask USHA live', typing: 'USHA is online',
      },
      days: '90 days', search: 'Search products, orders…', all: 'All products', exp: 'Export', week: 'week',
      tip: (d, n) => `${d} · ${n} orders`, onPage: (w) => `On page 1 since <b data-k="n.week">week ${w}</b>`,
      cards: {
        sc: ['Scenarios', 'Pick a business and watch how she thinks: a finding, a reason, a move.', 'Open scenarios →'],
        ff: ['Fast-forward 90 days', 'See your business 90 days from now: without USHA, and with her.', 'Fast-forward →'],
      },
      close: 'Close', ffSub: 'Same brand, same 90 days (1 Jul – 28 Sep 2026). Drag the line to compare.', grip: 'Drag left or right',
      screens: [['Marketplace sales', 'Orders, stock, gross sales'], ['Marketplace ads', 'Spend, ROAS, campaigns'], ['Social ads', 'Meta and TikTok: CPA, purchases'], ['Social media', 'Reach, saves, followers'], ['SEO', 'Clicks, queries, pages'], ['Website sales', 'Sessions, conversion, revenue'], ['Customer service', 'Inbox, replies, leads'], ['Stock', 'Cover, reorders, dead stock'], ['Market and competitors', 'Prices, share of search, gaps'], ['Reviews', 'Rating and replies'], ['Search position', 'The main query on noon'], ['Content', 'Two videos side by side']],
      moves: [
        'Reordered the best-seller before it ran out and moved the season’s demand onto the gift box.',
        'Paused the auto campaign that ran below break-even and moved its budget to gift-box searches.',
        'Rebuilt the creatives around the gift box and cut audiences that never bought.',
        'Swapped static product photos for short videos built on what buyers save.',
        'Rewrote titles for the queries buyers use and added a gift guide that ranks.',
        'Fixed the product pages that lost buyers and switched on cart reminders by WhatsApp and email.',
        'Answers every channel from one inbox, with ready replies for delivery and gift questions, and passes corporate leads to your manager.',
        'Plans reorders from real sales speed and turns slow stock into bundles before it goes stale.',
        'Watches competitors’ prices, launches and reviews every day, and points to the gap they left open.',
        'Answers reviews within hours and fixed the packaging buyers complained about.',
        'Rewrote the title and photos around how buyers search, then backed the climb with ads.',
        'Videos without filming: idea, script and edit in the brand’s own style.',
      ],
      sad: { app: 'Ads Manager · Meta + TikTok', brand: 'meta', k: ['Spend', 'CPM', 'CTR', 'CPA', 'Purchases'], cols: ['Campaign', 'Spend', 'CPM', 'CTR', 'Purchases', 'CPA'], names: ['Meta · Gift box Reels', 'TikTok · Gift unboxing'],
        notes: (x) => [['cpa', `CPA <b>${x.cpa0} → ${x.cpa1}</b>: creatives rebuilt around the gift box`, 'a'], ['buy', `Purchases <b>${x.buy}</b> on <b>${x.spend}</b> spend`, 'b']] },
      seo: { app: 'Search Console · Performance', brand: 'gsc', k: ['Clicks', 'Impressions', 'CTR', 'Avg position'], chart: 'Clicks by week', q: 'Top queries', pg: 'Top pages', cols: ['Query', 'Clicks', 'Impr.', 'Pos.'], pcol: ['Page', 'Clicks'],
        qs: ['chocolate gift box', 'dates in chocolate', 'chocolate delivery dubai'], pages: ['/gift-boxes', '/dates', '/blog/how-to-choose-a-gift'],
        notes: (x) => [['q0', `“${x.q0}”: position <b>${x.p0}</b>`, 'b'], ['pg2', `New gift guide: <b>${x.guide}</b> clicks`, 'b']] },
      web: { app: 'Store analytics · brand website', brand: 'web', k: ['Sessions', 'Conversion rate', 'Avg order', 'Revenue'], ch: 'Revenue by channel', cols: ['Channel', 'Orders', 'Revenue, AED', 'Share'], chans: ['Organic search', 'Paid ads', 'Email', 'Direct'],
        cart: 'Abandoned carts', ck: ['Abandoned', 'Recovered', 'Recovery rate', 'Recovered revenue'],
        notes: (x) => [['cr', `Product pages fixed: conversion <b>${x.cr}</b>`, 'a'], ['rec', `Cart reminders: <b>${x.rec}</b> orders recovered`, 'b']] },
      crm: { app: 'Inbox · all channels', brand: 'crm', k: ['Conversations', 'First reply (median)', 'Resolved', 'CSAT'], ch: 'By channel', chans: ['WhatsApp', 'Instagram DM', 'noon chat'], inbox: 'Inbox',
        msgs: [['Mariam', 'Can you deliver 40 boxes to our office?'], ['Ahmed', 'Is the gift box available for Friday?'], ['Lina', 'My order arrived without a card'], ['Yousef', 'Do you ship to Al Ain?']],
        wait: (m) => (m >= 1440 ? `Waiting ${m / 1440} day` : m >= 60 ? `Waiting ${m / 60} h` : `Replied in ${m} min`),
        pipe: 'Corporate gift orders', stages: ['New', 'Qualified', 'Proposal', 'Won'],
        notes: (x) => [['frt', `First reply <b>${x.frt}</b>`, 'a'], ['won', `Corporate orders won: <b>${x.won}</b>`, 'b']] },
      stk: { app: 'Inventory · stock planner', brand: 'stk', k: ['Below reorder point', 'Dead stock (units)', 'Stock-out days'], cols: ['SKU', 'On hand', 'Per day', 'Cover', 'Status'], skus: ['Dark chocolate set, 12 pcs', 'Sugar-free truffles, 16 pcs'],
        st: ['OK', 'Reorder now', 'Dead stock'], days: (d) => `${d} days`, plan: 'Reorder plan', none: 'No reorder planned. Best-seller: {d} days of cover, below the {r}-day reorder point.',
        sug: (q, d) => `Reorder ${q} boxes of Assorted chocolates by ${d} (lead time 14 days).`,
        notes: (x) => [['dead', `Slow stock sold in bundles: dead stock <b>${x.dead}</b>`, 'a'], ['plan', `Reorder <b>${x.qty}</b> boxes by <b>${x.date}</b>`, 'b']] },
      mkt: { app: 'Market radar · chocolate gifts', brand: 'mkt', map: 'Price and rating', sos: 'Share of search', sent: 'Positive reviews (4–5★)', you: 'You', others: 'Others', brands: ['Brand B', 'Brand C', 'Brand D'],
        launch: 'New launches', launches: [['Brand B', 'Ramadan gift box', 149, 'Sep 3'], ['Brand C', 'Dates & nuts tray', 129, 'Sep 11'], ['Brand D', 'Mini truffles, 8 pcs', 59, 'Sep 19']], seen: 'Spotted', missed: 'Not tracked',
        gap: 'Gap', gapT: 'No dates-and-chocolate gift box under AED 100. A 12-piece box at AED 89 would sit alone there.', gapN: 'Gap analysis: not tracked',
        notes: (x) => [['sos', `Share of search <b>${x.sos}</b>`, 'a'], ['gap', 'Found the price gap the competitors left open', 'b']] },
      sales: { app: 'noon · Seller dashboard', brand: 'noon', title: 'Sales', k: ['Orders', 'Gross sales', 'Return rate', 'Avg order'], chart: 'Orders per day', top: 'Top products', cols: ['Product', 'Orders', 'Stock'],
        stock: (d) => (d < 0 ? `Out ${-d} days` : `${d} days left`), rateLowGood: true,
        notes: (x) => [['stock0', `Reordered in time: no <b>${x.dip}-day</b> stock-out`, 'b'], ['top2', `Gift box pushed into the season: <b>${x.gift}</b>`, 'b'], ['rate', `Thermal packaging: returns <b>${x.rateChg}</b>`, 'a']] },
      ads: { app: 'noon Ads · Campaigns', brand: 'noon', k: ['Spend', 'Ad sales', 'ROAS', 'CTR'], target: 'Target 3.0x+', cols: ['Campaign', 'Status', 'Spend', 'Ad sales', 'ROAS'], names: ['Search · gift boxes', 'Category · chocolate', 'Auto · all products'], on: 'Active', off: 'Paused', chart: 'Spend and ad sales by week',
        notes: (x) => [['r2x', `Paused Auto: <b>${x.autoSpend}</b> spent at <b>${x.autoRatio}</b>`, 'b'], ['r0x', `Budget moved to gift-box search: <b>${x.searchRatio}</b>`, 'b'], ['ratio', `Spend <b>${x.spendChg}</b>, ad sales <b>${x.salesChg}</b>`, 'a']] },
      soc: { app: 'Instagram · Insights', brand: 'ig', handle: '@brand_a', posts: (n) => `${n} posts in 90 days`, last: 'Latest 6 posts', k: ['Engagement rate', 'Avg reach / post', 'Saves / post', 'New followers'], photo: 'Photo', reel: 'Reel',
        notes: (x) => [['saves', `Gift-box Reels: saves <b>${x.saves}</b>`, 'a'], ['p4', `Posted at buyers’ peak hours: reach <b>${x.reach}</b>`, 'b'], ['foll', `<b>+${x.foll1}</b> followers, not +${x.foll0}`, 'a']] },
      rev: { app: 'noon · Ratings & reviews', brand: 'noon', rating: 'Rating, rolling 90 days', newR: 'New ratings in 90 days', replies: 'Reviews answered', time: 'Median reply time', trend: 'Rolling rating by week',
        dur: (m) => (m >= 1440 ? `${m / 1440} days` : `${Math.floor(m / 60)} h` + (m % 60 ? ` ${m % 60} min` : '')), of: (a, n) => `${a} of ${n}`,
        a: ['Sara', 'Box arrived crushed and the chocolates had melted. Not fit for a gift.'], none: 'No reply from the seller',
        reply: ['Seller', 'We’re sorry. A replacement is on its way, and every box now ships in a thermal bag.'],
        b0: ['Omar', 'Too pricey for the size.'], b1: ['Omar', 'Fresh and beautifully packed. Bought it as a gift.'],
        notes: (x) => [['reply', `<b>${x.rate1}</b> of reviews answered, median <b>${x.time1}</b>`, 'b'], ['rev2', `Thermal bags: 1★ reviews <b>${x.one0} → ${x.one1}</b>`, 'b']] },
      srch: { app: 'noon · Search', brand: 'noon', q: 'chocolate gift box', filters: ['Relevance', 'Price', 'Rating 4+', 'Express'], results: (n, p) => `${n} results · ${p} per page`, yours: 'Your product', badge: (n) => `Your product · #${n}`, pos: (n, p) => `#${n} · page ${p}`, rank: 'Position by week', ad: 'Ad',
        notes: (x) => [['badge', `New title and photos: <b>#${x.p0} → #${x.p1}</b>`, 'b'], ['trend', x.since, 'a']] },
      vid: { t: ['Generic AI clip: the same look as everyone else’s.', 'Made with USHA: a concept, a story and a cinematic finish.'], play: 'Play video' },
      diff: {
        sad: (x) => [['Spend', x.spend], ['CPA', x.cpa], ['CTR', x.ctr], ['Purchases', x.buy]],
        seo: (x) => [['Clicks', x.clicks], ['Impressions', x.impr], ['CTR', x.ctr], ['Avg position', x.pos]],
        web: (x) => [['Revenue', x.rev], ['Orders', x.orders], ['Conversion', x.cr], ['Avg order', x.aov]],
        crm: (x) => [['First reply', x.frt], ['Resolved', x.res], ['CSAT', x.csat], ['Corporate orders', x.won]],
        stk: (x) => [['Stock-out days', x.out], ['Dead stock', x.dead], ['Below reorder point', x.below]],
        mkt: (x) => [['Share of search', x.sos], ['Positive reviews', x.pos], ['Launches spotted', x.seen]],
        sales: (x) => [['Orders', x.orders], ['Avg order', x.avg], ['Gross sales', x.gross], ['Return rate', x.rate]],
        ads: (x) => [['ROAS', x.ratio], ['Spend', x.spend], ['Ad sales', x.sales], ['CTR', x.ctr]],
        soc: (x) => [['Engagement', x.er], ['Reach', x.reach], ['Saves', x.saves], ['Followers', x.foll]],
        rev: (x) => [['Rating', x.rating], ['New ratings', x.count], ['Answered', x.answered], ['Reply time', x.time]],
        srch: (x) => [['Position', x.pos], ['Page', x.page]],
      },
    },
    ru: {
      ex: 'Пример', without: 'Без USHA', with: 'С USHA', dragA: 'Сравнение: без USHA и с USHA',
      diffH: 'Те же 90 дней: разница с USHA', ill: 'Пример для наглядности, а не результаты клиента. Названия брендов изменены.', move: 'Что сделала USHA',
      live: { k: 'Онлайн', h: 'Задайте вопрос своему <i>директору по маркетингу</i>.', p: 'Расскажите о бизнесе и задайте четыре вопроса — получите ответы по вашему рынку и вашим цифрам.', b: 'Спросить USHA' },
      scArt: { chips: ['Сладости', 'Кофейни', 'Красота'], q: 'Почему упали заказы?', a: 'Нашла причину. Вот что делать.' },
      days: '90 дней', search: 'Поиск по товарам и заказам…', all: 'Все товары', exp: 'Выгрузить',
      tip: (d, n) => `${d} · ${n} ${plural(n, 'заказ', 'заказа', 'заказов')}`, onPage: (w) => `На первой странице с <b data-k="n.week">${w}-й недели</b>`,
      cards: {
        sc: ['Сценарии', 'Выберите нишу и посмотрите, как думает USHA: что нашла, почему и что делать дальше.', 'Смотреть сценарии →'],
        ff: ['Перемотать на 90 дней вперёд', 'Ваш бизнес через 90 дней: без USHA и с ней.', 'Перемотать →'],
      },
      close: 'Закрыть', ffSub: 'Тот же бренд и те же 90 дней: с 1 июля по 28 сентября 2026 года. Сдвиньте линию, чтобы сравнить.', grip: 'Сдвиньте влево или вправо',
      screens: [['Продажи на маркетплейсе', 'Заказы, остатки, сумма заказов'], ['Реклама на маркетплейсе', 'Расход, ДРР, кампании'], ['Таргет и контекст', 'VK Реклама и Директ: стоимость заказа'], ['Соцсети', 'Охват, сохранения, подписчики'], ['SEO', 'Клики, запросы, страницы'], ['Продажи на сайте', 'Визиты, конверсия, выручка'], ['Сервис и CRM', 'Обращения, скорость ответа, заявки'], ['Склад', 'Оборачиваемость, дозаказ, неликвид'], ['Рынок и конкуренты', 'Цены, доля поиска, свободные ниши'], ['Отзывы и рейтинг', 'Рейтинг и ответы на отзывы'], ['Позиция в выдаче', 'Главный запрос на WB'], ['Контент', 'Два ролика для сравнения']],
      moves: [
        'Вовремя дозаказала хит продаж и перевела сезонный спрос на подарочную коробку.',
        'Отключила автокампанию с убыточным ДРР и перенесла бюджет в поиск по подаркам.',
        'Пересобрала креативы вокруг подарочной коробки и отключила аудитории, которые не покупают.',
        'Заменила статичные фото короткими видео — про то, что подписчики сохраняют.',
        'Переписала заголовки под реальные запросы покупателей и добавила гид по подаркам, который выходит в поиске.',
        'Исправила карточки товаров, с которых уходили покупатели, и включила напоминания о брошенной корзине в Telegram и на почту.',
        'Отвечает во всех каналах из одного окна, держит готовые ответы про доставку и подарки и передаёт корпоративные заявки менеджеру.',
        'Планирует дозаказ по реальной скорости продаж и собирает из залежавшегося товара наборы, пока он не стал неликвидом.',
        'Каждый день следит за ценами, новинками и отзывами конкурентов и показывает нишу, которую они упустили.',
        'Отвечает на отзывы в течение нескольких часов и исправила упаковку, на которую жаловались покупатели.',
        'Переписала название и фото карточки под то, как ищут покупатели, и поддержала рост рекламой.',
        'Видео без съёмок: идея, сценарий и монтаж в стиле бренда.',
      ],
      sad: { app: 'VK Реклама · Яндекс Директ', brand: 'vkads', k: ['Расход', 'CPM', 'CTR', 'Стоимость заказа', 'Заказы'], cols: ['Кампания', 'Расход', 'CPM', 'CTR', 'Заказы', 'Стоимость заказа'], names: ['VK Реклама · клипы с подарками', 'Директ · поиск подарков'],
        notes: (x) => [['cpa', `Стоимость заказа <b>${x.cpa0} → ${x.cpa1}</b>: креативы вокруг подарочной коробки`, 'a'], ['buy', `Заказов <b>${x.buy}</b> при расходе <b>${x.spend}</b>`, 'b']] },
      seo: { app: 'Яндекс Вебмастер · Поисковые запросы', brand: 'ywm', k: ['Клики', 'Показы', 'CTR', 'Средняя позиция'], chart: 'Клики по неделям', q: 'Топ запросов', pg: 'Топ страниц', cols: ['Запрос', 'Клики', 'Показы', 'Позиция'], pcol: ['Страница', 'Клики'],
        qs: ['подарочный набор конфет', 'финики в шоколаде', 'конфеты с доставкой'], pages: ['/podarki', '/finiki', '/blog/kak-vybrat-podarok'],
        notes: (x) => [['q0', `«${x.q0}»: позиция <b>${x.p0}</b>`, 'b'], ['pg2', `Новый гид по подаркам: <b>${x.guide}</b> кликов`, 'b']] },
      web: { app: 'Аналитика магазина · сайт бренда', brand: 'web', k: ['Визиты', 'Конверсия', 'Средний чек', 'Выручка'], ch: 'Выручка по каналам', cols: ['Канал', 'Заказы', 'Выручка, ₽', 'Доля'], chans: ['Поиск', 'Реклама', 'Рассылки', 'Прямые заходы'],
        cart: 'Брошенные корзины', ck: ['Брошено', 'Вернули', 'Доля возврата', 'Выручка с возвратов'],
        notes: (x) => [['cr', `Карточки исправлены: конверсия <b>${x.cr}</b>`, 'a'], ['rec', `Напоминания о корзине: вернули <b>${x.rec}</b> заказов`, 'b']] },
      crm: { app: 'Обращения · все каналы', brand: 'crm', k: ['Обращения', 'Первый ответ (медиана)', 'Решено', 'Оценка сервиса'], ch: 'По каналам', chans: ['Telegram', 'VK', 'Чат WB'], inbox: 'Входящие',
        msgs: [['Марина', 'Сможете привезти 40 наборов в офис?'], ['Алексей', 'Подарочная коробка будет к пятнице?'], ['Ольга', 'Заказ пришёл без открытки'], ['Игорь', 'Доставляете в Подольск?']],
        wait: (m) => (m >= 1440 ? 'Ждёт ответа 1 день' : m >= 60 ? `Ждёт ответа ${m / 60} ч` : `Ответ за ${m} мин`),
        pipe: 'Корпоративные заказы', stages: ['Новые', 'В работе', 'КП отправлено', 'Сделка'],
        notes: (x) => [['frt', `Первый ответ <b>${x.frt}</b>`, 'a'], ['won', `Корпоративных сделок: <b>${x.won}</b>`, 'b']] },
      stk: { app: 'Склад · планирование остатков', brand: 'stk', k: ['Ниже точки дозаказа', 'Неликвид, шт.', 'Дней без товара'], cols: ['Товар', 'Остаток', 'Продаж в день', 'Хватит на', 'Статус'], skus: ['Горький шоколад, набор 12 шт.', 'Трюфели без сахара, 16 шт.'],
        st: ['В норме', 'Дозаказать', 'Неликвид'], days: (d) => `${d} дн.`, plan: 'План дозаказа', none: 'Дозаказ не запланирован. Хита хватит на {d} дн. — это ниже точки дозаказа ({r} дн.).',
        sug: (q, d) => `Дозаказать ${q} наборов «Ассорти» до ${d} (срок поставки — 14 дней).`,
        notes: (x) => [['dead', `Залежавшийся товар ушёл в наборах: неликвид <b>${x.dead}</b> шт.`, 'a'], ['plan', `Дозаказ <b>${x.qty}</b> наборов до <b>${x.date}</b>`, 'b']] },
      mkt: { app: 'Радар рынка · подарочные конфеты', brand: 'mkt', map: 'Цена и рейтинг', sos: 'Доля поиска', sent: 'Доля положительных отзывов (4–5★)', you: 'Вы', others: 'Остальные', brands: ['Бренд B', 'Бренд C', 'Бренд D'],
        launch: 'Новинки конкурентов', launches: [['Бренд B', 'Новогодний набор', 2990, '3 сен.'], ['Бренд C', 'Поднос с финиками и орехами', 2490, '11 сен.'], ['Бренд D', 'Мини-трюфели, 8 шт.', 1190, '19 сен.']], seen: 'Замечено', missed: 'Не отслеживали',
        gap: 'Свободная ниша', gapT: 'Никто не продаёт подарочный набор «финики + шоколад» дешевле 2 000 ₽. Набор из 12 штук за 1 790 ₽ окажется без конкурентов.', gapN: 'Анализ ниш не ведётся',
        notes: (x) => [['sos', `Доля поиска <b>${x.sos}</b>`, 'a'], ['gap', 'Нашла ценовую нишу, которую упустили конкуренты', 'b']] },
      sales: { app: 'Wildberries · Личный кабинет продавца', brand: 'wb', title: 'Продажи', k: ['Заказы', 'Заказано на сумму', 'Выкуп', 'Средний чек'], chart: 'Заказы по дням', top: 'Топ товаров', cols: ['Товар', 'Заказы', 'Остаток'],
        stock: (d) => `на ${d} дн.`, rateLowGood: false,
        notes: (x) => [['stock0', `Дозаказала вовремя: без <b>${x.dip} дней</b> пустой полки`, 'b'], ['top2', `Подарочную коробку — в сезон: <b>${x.gift}</b>`, 'b'], ['rate', `Термопакеты: выкуп <b>${x.rateChg}</b>`, 'a']] },
      ads: { app: 'Wildberries · Продвижение', brand: 'wb', k: ['Расход', 'Продажи с рекламы', 'ДРР', 'CTR'], target: 'Цель: до 20%', cols: ['Кампания', 'Статус', 'Расход', 'Продажи', 'ДРР'], names: ['Поиск · подарочные наборы', 'Каталог · шоколад', 'Автокампания · все товары'], on: 'Активна', off: 'На паузе', chart: 'Расход и продажи с рекламы по неделям',
        notes: (x) => [['r2x', `Автокампания на паузе: <b>${x.autoSpend}</b> при ДРР <b>${x.autoRatio}</b>`, 'b'], ['r0x', `Бюджет — в поиск по подаркам: ДРР <b>${x.searchRatio}</b>`, 'b'], ['ratio', `Расход <b>${x.spendChg}</b>, продажи с рекламы <b>${x.salesChg}</b>`, 'a']] },
      soc: { app: 'VK · Статистика сообщества', brand: 'vk', handle: 'Бренд A', posts: (n) => `${n} публикаций за 90 дней`, last: 'Последние 6 публикаций', k: ['Вовлечённость (ER)', 'Средний охват публикации', 'Сохранений на публикацию', 'Новых подписчиков'], photo: 'Фото', reel: 'Клип',
        notes: (x) => [['saves', `Клипы с подарочной коробкой: сохранений <b>${x.saves}</b>`, 'a'], ['p4', `Публикации в часы активности покупателей: охват <b>${x.reach}</b>`, 'b'], ['foll', `<b>+${x.foll1}</b> подписчиков вместо +${x.foll0}`, 'a']] },
      rev: { app: 'Wildberries · Отзывы и вопросы', brand: 'wb', rating: 'Рейтинг за 90 дней', newR: 'Новых оценок за 90 дней', replies: 'Отзывов с ответом', time: 'Медиана времени ответа', trend: 'Рейтинг по неделям',
        dur: (m) => (m >= 1440 ? `${m / 1440} дня` : `${Math.floor(m / 60)} ч` + (m % 60 ? ` ${m % 60} мин` : '')), of: (a, n) => `${a} из ${n}`,
        a: ['Анна', 'Коробка пришла мятой, конфеты подтаяли. В подарок не годится.'], none: 'Продавец не ответил',
        reply: ['Продавец', 'Простите нас. Замену уже отправили, а теперь каждую коробку упаковываем в термопакет.'],
        b0: ['Ольга', 'Дороговато для такого размера.'], b1: ['Ольга', 'Свежие и красиво упакованы, брали в подарок.'],
        notes: (x) => [['reply', `Ответ на <b>${x.rate1}</b> отзывов, медиана — <b>${x.time1}</b>`, 'b'], ['rev2', `Термопакеты: отзывов на 1★ <b>${x.one0} → ${x.one1}</b>`, 'b']] },
      srch: { app: 'Wildberries · Поиск', brand: 'wb', q: 'подарочный набор конфет', filters: ['По популярности', 'Цена', 'Рейтинг от 4', 'Быстрая доставка'], results: (n, p) => `${n} товаров · ${p} на странице`, yours: 'Ваш товар', badge: (n) => `Ваш товар · №${n}`, pos: (n, p) => `№${n} в выдаче · стр. ${p}`, rank: 'Позиция по неделям', ad: 'Реклама',
        notes: (x) => [['badge', `Новое название и фото: <b>№${x.p0} → №${x.p1}</b>`, 'b'], ['trend', x.since, 'a']] },
      vid: { t: ['Типичный ИИ-ролик: такой же, как у всех.', 'Сделано с USHA: идея, история и кинокартинка.'], play: 'Смотреть видео' },
      diff: {
        sad: (x) => [['Расход', x.spend], ['Стоимость заказа', x.cpa], ['CTR', x.ctr], ['Заказы', x.buy]],
        seo: (x) => [['Клики', x.clicks], ['Показы', x.impr], ['CTR', x.ctr], ['Средняя позиция', x.pos]],
        web: (x) => [['Выручка', x.rev], ['Заказы', x.orders], ['Конверсия', x.cr], ['Средний чек', x.aov]],
        crm: (x) => [['Первый ответ', x.frt], ['Решено', x.res], ['Оценка сервиса', x.csat], ['Корпоративные сделки', x.won]],
        stk: (x) => [['Дней без товара', x.out], ['Неликвид', x.dead], ['Ниже точки дозаказа', x.below]],
        mkt: (x) => [['Доля поиска', x.sos], ['Положительные отзывы', x.pos], ['Замечено новинок', x.seen]],
        sales: (x) => [['Заказы', x.orders], ['Средний чек', x.avg], ['Заказано на сумму', x.gross], ['Выкуп', x.rate]],
        ads: (x) => [['ДРР', x.ratio], ['Расход', x.spend], ['Продажи с рекламы', x.sales], ['CTR', x.ctr]],
        soc: (x) => [['Вовлечённость', x.er], ['Охват', x.reach], ['Сохранения', x.saves], ['Подписчики', x.foll]],
        rev: (x) => [['Рейтинг', x.rating], ['Новые оценки', x.count], ['С ответом', x.answered], ['Время ответа', x.time]],
        srch: (x) => [['Позиция', x.pos], ['Страница', x.page]],
      },
    },
    ar: {
      ex: 'مثال', without: 'بدون ' + iso('USHA'), with: 'مع ' + iso('USHA'), dragA: 'قارن النتائج بدون ' + iso('USHA') + ' ومعها',
      diffH: 'الفرق خلال الـ90 يومًا نفسها', ill: 'مثال توضيحي، وليس نتائج عميل حقيقي. أسماء العلامات التجارية مُغيَّرة.', move: 'خطوة ' + iso('USHA'),
      live: { k: 'متاحة الآن', h: 'اسأل <i>مديرة التسويق</i> الجديدة لديك.', p: 'عرّفها بنشاطك التجاري، ثم اطرح أربعة أسئلة واحصل على إجابات حقيقية عن سوقك وأرقامك.', b: 'تحدّث مع ' + iso('USHA') + ' الآن' },
      scArt: { chips: ['حلويات', 'مقاهٍ', 'تجميل'], q: 'لماذا انخفضت الطلبات؟', a: 'وجدت السبب، وهذه الخطوة التالية.' },
      days: '90 يومًا', search: 'ابحث عن منتج أو طلب…', all: 'كل المنتجات', exp: 'تصدير',
      tip: (d, n) => `${d} · ${n} طلبًا`, onPage: (w) => `في الصفحة الأولى منذ <b data-k="n.week">الأسبوع ${w}</b>`,
      cards: {
        sc: ['سيناريوهات حقيقية', 'اختر مجال نشاطك وشاهد كيف تحلّل ' + iso('USHA') + ': ماذا اكتشفت، ولماذا، وما الخطوة التالية.', 'شاهد السيناريوهات ←'],
        ff: ['نتائج ٩٠ يوم', 'هكذا سيبدو نشاطك بعد 90 يومًا: بدون ' + iso('USHA') + ' ومعها.', 'اعرض النتائج ←'],
      },
      close: 'إغلاق', ffSub: 'العلامة التجارية نفسها والفترة نفسها: من 1 يوليو إلى 28 سبتمبر 2026. اسحب الخط للمقارنة.', grip: 'اسحب يمينًا أو يسارًا',
      screens: [['مبيعات المنصّة', 'الطلبات والمخزون وإجمالي المبيعات'], ['إعلانات المنصّة', 'الإنفاق والعائد والحملات'], ['إعلانات السوشيال ميديا', iso('Meta') + ' و' + iso('TikTok') + ': تكلفة الشراء والمشتريات'], ['حسابات السوشيال ميديا', 'الوصول والحفظ والمتابعون'], ['الظهور في البحث', 'النقرات وكلمات البحث والصفحات'], ['مبيعات الموقع', 'الزيارات ومعدل التحويل والإيرادات'], ['خدمة العملاء', 'الرسائل وسرعة الرد والعملاء المحتملون'], ['المخزون', 'مدة التغطية وإعادة الطلب والراكد'], ['السوق والمنافسون', 'الأسعار وحصة البحث والفرص'], ['التقييمات', 'متوسط التقييم والردود'], ['الترتيب في البحث', 'كلمة البحث الرئيسية على ' + iso('noon')], ['المحتوى', 'فيديوهان للمقارنة']],
      moves: [
        'طلبت كمية جديدة من المنتج الأكثر مبيعًا قبل أن ينفد، ووجّهت طلب الموسم نحو علبة الهدايا.',
        'أوقفت الحملة التلقائية التي كانت تخسر، ونقلت ميزانيتها إلى إعلانات البحث عن علب الهدايا.',
        'بنت الإعلانات من جديد حول علبة الهدايا، واستبعدت الجماهير التي لم تشترِ قط.',
        'استبدلت صور المنتج الثابتة بفيديوهات قصيرة مبنية على ما يحفظه المتابعون فعلًا.',
        'أعادت كتابة العناوين بالكلمات التي يبحث بها العملاء، وأضافت دليلًا للهدايا يتصدّر نتائج البحث.',
        'أصلحت صفحات المنتجات التي كان العملاء يغادرونها، وفعّلت رسائل تذكير بالسلة عبر واتساب والبريد الإلكتروني.',
        'ترد على كل القنوات من صندوق رسائل واحد، بردود جاهزة لأسئلة التوصيل والهدايا، وتحوّل طلبات الشركات مباشرة إلى مديرك.',
        'تخطط لإعادة الطلب حسب سرعة البيع الفعلية، وتحوّل المخزون البطيء إلى باقات قبل أن يتكدّس.',
        'تتابع يوميًا أسعار المنافسين ومنتجاتهم الجديدة وتقييماتهم، وتكشف لك الفرصة التي تركوها.',
        'ترد على التقييمات خلال ساعات، وعالجت مشكلة التغليف التي اشتكى منها العملاء.',
        'أعادت صياغة العنوان والصور بحسب طريقة بحث العملاء، ثم دعمت الصعود بالإعلانات.',
        'فيديوهات بدون تصوير: الفكرة والسيناريو والمونتاج بهوية علامتك.',
      ],
      sad: { app: iso('Ads Manager · Meta + TikTok'), brand: 'meta', k: ['الإنفاق', 'تكلفة الألف ظهور', 'نسبة النقر', 'تكلفة الشراء', 'المشتريات'], cols: ['الحملة', 'الإنفاق', iso('CPM'), 'نسبة النقر', 'المشتريات', 'تكلفة الشراء'], names: [iso('Meta') + ' · فيديوهات علبة الهدايا', iso('TikTok') + ' · فتح علبة الهدايا'],
        notes: (x) => [['cpa', `تكلفة الشراء <b>${iso(x.cpa0 + ' → ' + x.cpa1)}</b> بعد إعلانات مبنية حول علبة الهدايا`, 'a'], ['buy', `المشتريات <b>${x.buy}</b> مع إنفاق أقل <b>${x.spend}</b>`, 'b']] },
      seo: { app: iso('Search Console') + ' · الأداء', brand: 'gsc', k: ['النقرات', 'مرات الظهور', 'نسبة النقر', 'متوسط الترتيب'], chart: 'النقرات أسبوعيًا', q: 'أهم كلمات البحث', pg: 'أهم الصفحات', cols: ['كلمة البحث', 'النقرات', 'الظهور', 'الترتيب'], pcol: ['الصفحة', 'النقرات'],
        qs: ['علبة شوكولاتة هدية', 'تمر بالشوكولاتة', 'توصيل شوكولاتة دبي'], pages: [iso('/gift-boxes'), iso('/dates'), iso('/blog/how-to-choose-a-gift')],
        notes: (x) => [['q0', `«${x.q0}»: الترتيب <b>${iso(x.p0)}</b>`, 'b'], ['pg2', `دليل الهدايا الجديد: <b>${x.guide}</b> نقرة إضافية`, 'b']] },
      web: { app: 'تحليلات المتجر · موقع العلامة', brand: 'web', k: ['الزيارات', 'معدل التحويل', 'متوسط قيمة الطلب', 'الإيرادات'], ch: 'الإيرادات حسب القناة', cols: ['القناة', 'الطلبات', 'الإيرادات (' + iso('AED') + ')', 'الحصة'], chans: ['البحث المجاني', 'الإعلانات المدفوعة', 'البريد الإلكتروني', 'الزيارات المباشرة'],
        cart: 'السلال المتروكة', ck: ['سلال متروكة', 'طلبات مستعادة', 'نسبة الاستعادة', 'إيرادات مستعادة'],
        notes: (x) => [['cr', `بعد إصلاح صفحات المنتجات: معدل التحويل <b>${iso(x.cr)}</b>`, 'a'], ['rec', `رسائل تذكير السلة: الطلبات المستعادة <b>${iso(x.rec)}</b>`, 'b']] },
      crm: { app: 'صندوق الرسائل · كل القنوات', brand: 'crm', k: ['المحادثات', 'أول رد (الوسيط)', 'تم حلّها', 'رضا العملاء'], ch: 'حسب القناة', chans: ['واتساب', 'رسائل ' + iso('Instagram'), 'محادثات ' + iso('noon')], inbox: 'الرسائل الواردة',
        msgs: [['مريم', 'هل يمكن توصيل 40 علبة إلى مكتبنا؟'], ['أحمد', 'هل علبة الهدايا متوفرة يوم الجمعة؟'], ['لينا', 'وصل طلبي بدون بطاقة الإهداء'], ['يوسف', 'هل يوجد توصيل إلى العين؟']],
        wait: (m) => (m >= 1440 ? 'بانتظار الرد · يوم' : m >= 60 ? `بانتظار الرد · ${m / 60} س` : `تم الرد خلال ${m} د`),
        pipe: 'طلبات هدايا الشركات', stages: ['جديدة', 'مؤهَّلة', 'عرض سعر', 'تمّت الصفقة'],
        notes: (x) => [['frt', `أول رد للعميل <b>${iso(x.frt)}</b>`, 'a'], ['won', `صفقات الشركات: <b>${iso(x.won)}</b>`, 'b']] },
      stk: { app: 'المخزون · تخطيط إعادة الطلب', brand: 'stk', k: ['تحت حد إعادة الطلب', 'مخزون راكد (قطعة)', 'أيام نفاد المخزون'], cols: ['المنتج', 'المتوفر', 'المبيع يوميًا', 'يكفي لـ', 'الحالة'], skus: ['شوكولاتة داكنة، 12 قطعة', 'ترافل بدون سكر، 16 قطعة'],
        st: ['جيد', 'أعد الطلب الآن', 'راكد'], days: (d) => `${d} يومًا`, plan: 'خطة إعادة الطلب', none: 'لا توجد إعادة طلب مخططة. المنتج الأكثر مبيعًا يكفي {d} أيام فقط، أي أقل من حد إعادة الطلب ({r} يومًا).',
        sug: (q, d) => `أعد طلب ${q} علبة من الشوكولاتة المشكّلة قبل ${d} (مدة التوريد 14 يومًا).`,
        notes: (x) => [['dead', `المخزون البطيء بِيع في باقات: الراكد <b>${iso(x.dead)}</b> قطعة`, 'a'], ['plan', `إعادة طلب <b>${x.qty}</b> علبة قبل <b>${x.date}</b>`, 'b']] },
      mkt: { app: 'رادار السوق · هدايا الشوكولاتة', brand: 'mkt', map: 'السعر مقابل التقييم', sos: 'حصة البحث', sent: 'التقييمات الإيجابية (4–5★)', you: 'علامتك', others: 'أخرى', brands: ['علامة ب', 'علامة ج', 'علامة د'],
        launch: 'منتجات جديدة لدى المنافسين', launches: [['علامة ب', 'علبة هدايا رمضان', 149, '3 سبتمبر'], ['علامة ج', 'صينية تمر ومكسرات', 129, '11 سبتمبر'], ['علامة د', 'ترافل صغير، 8 قطع', 59, '19 سبتمبر']], seen: 'تم رصده', missed: 'لم يُرصد',
        gap: 'فرصة في السوق', gapT: 'لا توجد علبة هدايا تجمع التمر والشوكولاتة بسعر أقل من ' + iso('AED 100') + '. علبة من 12 قطعة بسعر ' + iso('AED 89') + ' ستكون بلا منافس.', gapN: 'تحليل الفرص: غير متاح',
        notes: (x) => [['sos', `حصة البحث <b>${iso(x.sos)}</b>`, 'a'], ['gap', 'اكتشفت فرصة سعرية تركها المنافسون', 'b']] },
      sales: { app: iso('noon') + ' · لوحة البائع', brand: 'noon', title: 'المبيعات', k: ['الطلبات', 'إجمالي المبيعات', 'نسبة المرتجعات', 'متوسط قيمة الطلب'], chart: 'الطلبات يوميًا', top: 'المنتجات الأكثر مبيعًا', cols: ['المنتج', 'الطلبات', 'المخزون'],
        stock: (d) => `${d} يومًا`, rateLowGood: true,
        notes: (x) => [['stock0', `طلبت الكمية في وقتها: لا نفاد لمدة <b>${x.dip}</b> يومًا`, 'b'], ['top2', `علبة الهدايا في موسمها: <b>${x.gift}</b>`, 'b'], ['rate', `التغليف الحراري: المرتجعات <b>${x.rateChg}</b>`, 'a']] },
      ads: { app: iso('noon Ads') + ' · الحملات', brand: 'noon', k: ['الإنفاق', 'مبيعات الإعلانات', 'العائد على الإنفاق (' + iso('ROAS') + ')', 'نسبة النقر'], target: 'الهدف ' + iso('3.0x+'), cols: ['الحملة', 'الحالة', 'الإنفاق', 'المبيعات', iso('ROAS')], names: ['بحث · علب الهدايا', 'فئة · الشوكولاتة', 'تلقائية · كل المنتجات'], on: 'نشطة', off: 'متوقفة', chart: 'الإنفاق ومبيعات الإعلانات أسبوعيًا',
        notes: (x) => [['r2x', `أوقفت الحملة التلقائية: <b>${x.autoSpend}</b> بعائد <b>${x.autoRatio}</b> فقط`, 'b'], ['r0x', `الميزانية انتقلت إلى البحث عن علب الهدايا: <b>${x.searchRatio}</b>`, 'b'], ['ratio', `الإنفاق <b>${x.spendChg}</b> ومبيعات الإعلانات <b>${x.salesChg}</b>`, 'a']] },
      soc: { app: iso('Instagram') + ' · الإحصاءات', brand: 'ig', handle: iso('@brand_a'), posts: (n) => `${n} منشورًا خلال 90 يومًا`, last: 'آخر 6 منشورات', k: ['معدل التفاعل', 'متوسط الوصول لكل منشور', 'الحفظ لكل منشور', 'متابعون جدد'], photo: 'صورة', reel: iso('Reel'),
        notes: (x) => [['saves', `فيديوهات ${iso('Reels')} لعلبة الهدايا: الحفظ <b>${x.saves}</b>`, 'a'], ['p4', `النشر في أوقات نشاط العملاء: الوصول <b>${x.reach}</b>`, 'b'], ['foll', `<b>${iso('+' + x.foll1)}</b> متابع جديد بدلًا من ${iso('+' + x.foll0)}`, 'a']] },
      rev: { app: iso('noon') + ' · التقييمات', brand: 'noon', rating: 'متوسط التقييم (آخر 90 يومًا)', newR: 'تقييمات جديدة خلال 90 يومًا', replies: 'نسبة الرد على التقييمات', time: 'وقت الرد المعتاد', trend: 'متوسط التقييم أسبوعيًا',
        dur: (m) => (m >= 1440 ? `${m / 1440} أيام` : m === 60 ? 'ساعة' : `${Math.floor(m / 60)} س` + (m % 60 ? ` ${m % 60} د` : '')), of: (a, n) => `${a} من ${n}`,
        a: ['سارة', 'وصلت العلبة متضررة والشوكولاتة ذائبة، لا تصلح هدية.'], none: 'لا يوجد رد من البائع',
        reply: ['البائع', 'نعتذر لك. أرسلنا بديلًا، وأصبحنا نشحن كل علبة في كيس حراري.'],
        b0: ['عمر', 'السعر مرتفع مقارنة بالحجم.'], b1: ['عمر', 'طازجة وتغليفها أنيق، اشتريتها هدية.'],
        notes: (x) => [['reply', `ردّت على <b>${x.rate1}</b> من التقييمات، وعادةً خلال <b>${x.time1}</b>`, 'b'], ['rev2', `بعد الأكياس الحرارية: تقييمات النجمة الواحدة <b>${iso(x.one0 + ' → ' + x.one1)}</b>`, 'b']] },
      srch: { app: iso('noon') + ' · البحث', brand: 'noon', q: 'علبة شوكولاتة هدية', filters: ['الأكثر صلة', 'السعر', 'تقييم 4+', iso('Express')], results: (n, p) => `${n} نتيجة · ${p} في كل صفحة`, yours: 'منتجك', badge: (n) => `منتجك · المركز ${n}`, pos: (n, p) => `المركز ${n} · الصفحة ${p}`, rank: 'الترتيب أسبوعيًا', ad: 'إعلان',
        notes: (x) => [['badge', `عنوان وصور جديدة: <b>${iso('#' + x.p0 + ' → #' + x.p1)}</b>`, 'b'], ['trend', x.since, 'a']] },
      vid: { t: ['مقطع ذكاء اصطناعي تقليدي: يشبه ما ينشره الجميع.', 'بإشراف ' + iso('USHA') + ': فكرة وقصة وصورة سينمائية.'], play: 'تشغيل الفيديو' },
      diff: {
        sad: (x) => [['الإنفاق', x.spend], ['تكلفة الشراء', x.cpa], ['نسبة النقر', x.ctr], ['المشتريات', x.buy]],
        seo: (x) => [['النقرات', x.clicks], ['مرات الظهور', x.impr], ['نسبة النقر', x.ctr], ['متوسط الترتيب', x.pos]],
        web: (x) => [['الإيرادات', x.rev], ['الطلبات', x.orders], ['معدل التحويل', x.cr], ['متوسط قيمة الطلب', x.aov]],
        crm: (x) => [['أول رد', x.frt], ['تم حلّها', x.res], ['رضا العملاء', x.csat], ['صفقات الشركات', x.won]],
        stk: (x) => [['أيام النفاد', x.out], ['المخزون الراكد', x.dead], ['تحت حد إعادة الطلب', x.below]],
        mkt: (x) => [['حصة البحث', x.sos], ['التقييمات الإيجابية', x.pos], ['منتجات المنافسين المرصودة', x.seen]],
        sales: (x) => [['الطلبات', x.orders], ['متوسط قيمة الطلب', x.avg], ['إجمالي المبيعات', x.gross], ['نسبة المرتجعات', x.rate]],
        ads: (x) => [[iso('ROAS'), x.ratio], ['الإنفاق', x.spend], ['مبيعات الإعلانات', x.sales], ['نسبة النقر', x.ctr]],
        soc: (x) => [['معدل التفاعل', x.er], ['الوصول', x.reach], ['الحفظ', x.saves], ['المتابعون الجدد', x.foll]],
        rev: (x) => [['متوسط التقييم', x.rating], ['تقييمات جديدة', x.count], ['نسبة الرد', x.answered], ['وقت الرد', x.time]],
        srch: (x) => [['الترتيب', x.pos], ['الصفحة', x.page]],
      },
    },
  };

  // ---------- formatting ----------
  let L = 'en';
  const tx = () => T[L] || T.en;
  const loc = () => (L === 'ru' ? 'ru-RU' : 'en-US');
  function fmt(n, d = 0) { return Number(n).toLocaleString(loc(), { minimumFractionDigits: d, maximumFractionDigits: d }); }
  const fmtT = (n) => Number(n).toLocaleString(loc(), { minimumFractionDigits: 0, maximumFractionDigits: 1 }); // 25 → "25", 30.2 → "30.2"
  function plural(n, one, few, many) { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many; }
  const A = (s) => (L === 'ar' ? iso(s) : s); // Latin/number runs inside Arabic
  const money = (n) => (L === 'ru' ? fmt(n) + ' ₽' : A('AED ' + fmt(n)));
  const pct = (n, d = 1) => A(fmt(n, d) + '%');
  const xr = (n) => A(fmt(n, 1) + 'x');
  const MINUS = '−';
  const sign = (v) => (v > 0 ? '+' : v < 0 ? MINUS : '');
  const chg = (a, b) => { const v = (b / a - 1) * 100; return A(sign(v) + fmtT(Math.round(Math.abs(v) * 10) / 10) + '%'); };
  const ppU = () => (L === 'ru' ? ' п.п.' : L === 'ar' ? ' نقطة' : ' pp');
  const pp = (a, b) => { const v = Math.round((b - a) * 10) / 10; return L === 'ar' ? iso(sign(v) + fmtT(Math.abs(v))) + ppU() : sign(v) + fmtT(Math.abs(v)) + ppU(); };
  const times = (a, b) => A('×' + fmtT(Math.round((b / a) * 10) / 10));
  const arrow = (a, b) => A(a + ' → ' + b);
  const FMT = { int: (v) => fmt(Math.round(v)), money: (v) => money(Math.round(v)), p1: (v) => pct(v, 1), p0: (v) => pct(v, 0), x1: (v) => xr(v), r1: (v) => fmt(v, 1), plus: (v) => A('+' + fmt(Math.round(v))) };
  // a number that counts up; data-k marks it for the check script
  const C = (k, v, f, cls = '') => `<b class="t3-cu ${cls}" data-k="${k}" data-to="${v}" data-f="${f}">${FMT[f](v)}</b>`;
  const K = (k, s, tag = 'span', cls = '') => `<${tag} data-k="${k}"${cls ? ` class="${cls}"` : ''}>${s}</${tag}>`;
  const dayDate = (i, o) => { const [y, m, d] = N.start; return new Date(Date.UTC(y, m, d + i)).toLocaleDateString(L === 'ar' ? 'ar-u-nu-latn' : loc(), Object.assign({ timeZone: 'UTC' }, o)); };
  const range = () => `${dayDate(0, { day: 'numeric', month: 'short' })} – ${dayDate(N.days - 1, { day: 'numeric', month: 'short', year: 'numeric' })}`;

  // ---------- small drawings ----------
  function path(vals, w, h, { max, min, inv = false } = {}) {
    const hi = max ?? Math.max(...vals), lo = min ?? Math.min(...vals), span = hi - lo || 1;
    return vals.map((v, i) => { const t = (v - lo) / span; return [(i / (vals.length - 1)) * w, (inv ? t : 1 - t) * (h - 6) + 3]; });
  }
  const d2 = (pts) => pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
  function lineSVG(vals, { max, min, cls = '', inv = false, h = 90, area = true, step = false, data = '' } = {}) {
    const w = 300; let pts = path(vals, w, h, { max, min, inv });
    if (step) pts = pts.flatMap((p, i) => (i ? [[p[0], pts[i - 1][1]], p] : [p]));
    const d = d2(pts);
    const grid = [0.25, 0.5, 0.75].map((g) => `<line x1="0" x2="${w}" y1="${(g * h).toFixed(1)}" y2="${(g * h).toFixed(1)}"/>`).join('');
    return `<svg class="sc-chart sc-draw ${cls}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"${data}><g class="g">${grid}</g>${area ? `<path class="a" d="${d}L${w} ${h}L0 ${h}Z"/>` : ''}<path class="l" d="${d}"/></svg>`;
  }
  const spark = (vals, good) => `<svg class="sc-spark-l sc-draw ${good ? 'good' : 'flat'}" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true"><path d="${d2(path(vals, 100, 24))}"/></svg>`;
  // product art: 0 chocolate box, 1 dates, 2 gift box; competitors get other shapes and hues
  function shot(kind, hue = 24) {
    const bg = `hsl(${hue} 45% 94%)`, c = `hsl(${hue} 52% 44%)`, c2 = `hsl(${hue} 60% 60%)`;
    let art;
    if (kind === 0) art = `<rect x="16" y="30" width="68" height="46" rx="6" fill="${c}"/><rect x="20" y="34" width="60" height="38" rx="4" fill="#F4E3CF"/>${[0, 1, 2].map((r) => [0, 1, 2, 3].map((q) => `<circle cx="${29 + q * 14}" cy="${43 + r * 10.5}" r="4.8" fill="${(r + q) % 2 ? '#6B3A22' : '#3A1F14'}"/><circle cx="${27.5 + q * 14}" cy="${41.5 + r * 10.5}" r="1.4" fill="rgba(255,255,255,.35)"/>`).join('')).join('')}`;
    else if (kind === 1) art = `<ellipse cx="50" cy="72" rx="32" ry="8" fill="rgba(0,0,0,.1)"/><path d="M18 52h64c0 14-14 22-32 22s-32-8-32-22z" fill="#E9D7BF"/><ellipse cx="50" cy="52" rx="32" ry="7" fill="#F6EBDD"/>${[[36, 46, -20], [50, 43, 10], [63, 47, -8], [43, 51, 25], [58, 51, -30]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="4.6" transform="rotate(${r} ${x} ${y})" fill="#4A2412"/><ellipse cx="${x - 2}" cy="${y - 1.5}" rx="3" ry="1.2" transform="rotate(${r} ${x} ${y})" fill="rgba(255,255,255,.25)"/>`).join('')}`;
    else if (kind === 2) art = `<ellipse cx="50" cy="80" rx="30" ry="6" fill="rgba(0,0,0,.1)"/><rect x="22" y="40" width="56" height="38" rx="4" fill="${c}"/><rect x="18" y="31" width="64" height="12" rx="3" fill="${c2}"/><rect x="46" y="31" width="8" height="47" fill="#F3C969"/><path d="M50 31c-9-12-22-8-14-1 3 2 9 2 14 1zm0 0c9-12 22-8 14-1-3 2-9 2-14 1z" fill="#F3C969"/>`;
    else if (kind === 3) art = `<path d="M30 40h40l-5 36H35z" fill="${c}"/><ellipse cx="50" cy="40" rx="20" ry="6" fill="${c2}"/>${[0, 1, 2].map((q) => `<circle cx="${42 + q * 8}" cy="36" r="4.5" fill="#4A2A1A"/>`).join('')}`;
    else if (kind === 4) art = `<path d="M50 74C26 58 22 42 33 35c7-4 13 0 17 6 4-6 10-10 17-6 11 7 7 23-17 39z" fill="${c}"/>`;
    else art = `<rect x="22" y="34" width="56" height="40" rx="3" fill="${c}"/>${[0, 1, 2, 3].map((q) => `<rect x="${26 + q * 13}" y="38" width="10" height="32" rx="1.5" fill="${c2}"/>`).join('')}`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="100" height="100" fill="${bg}"/>${art}</svg>`;
  }
  const star = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 .8l1.6 3.4 3.7.4-2.8 2.5.8 3.7L6 9 2.7 10.8l.8-3.7L.7 4.6l3.7-.4z"/></svg>';
  const IC = {
    home: '<path d="M3 10l7-6 7 6v7H3z"/>', chart: '<path d="M3 17V9M8 17V4M13 17v-6M18 17V7"/>', ads: '<path d="M3 8v4l9 4V4zM12 6h3a2 2 0 010 8h-3"/>', star: '<path d="M10 2.5l2.3 4.8 5.2.6-3.9 3.6 1 5.1L10 14l-4.6 2.6 1-5.1L2.5 7.9l5.2-.6z"/>',
    box: '<path d="M3 6l7-3 7 3v8l-7 3-7-3zM3 6l7 3 7-3M10 9v8"/>', users: '<circle cx="8" cy="7" r="3"/><path d="M2.5 17c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5M14 4.5a3 3 0 010 5.5M15 12.5c1.7.5 2.8 2 3 4.5"/>', search: '<circle cx="9" cy="9" r="5.5"/><path d="M13 13l4.5 4.5"/>',
    cal: '<rect x="3" y="4.5" width="14" height="12.5" rx="2"/><path d="M3 8.5h14M7 2.5v4M13 2.5v4"/>', bell: '<path d="M5 14V9a5 5 0 0110 0v5l1.5 2h-13zM8.5 18.5h3"/>', gear: '<circle cx="10" cy="10" r="2.6"/><path d="M10 2.5v2.2M10 15.3v2.2M2.5 10h2.2M15.3 10h2.2M4.7 4.7l1.6 1.6M13.7 13.7l1.6 1.6M4.7 15.3l1.6-1.6M13.7 6.3l1.6-1.6"/>',
    target: '<circle cx="10" cy="10" r="7"/><circle cx="10" cy="10" r="3.5"/><circle cx="10" cy="10" r=".6"/>', globe: '<circle cx="10" cy="10" r="7.5"/><path d="M2.5 10h15M10 2.5c2.5 2.6 2.5 12.4 0 15M10 2.5c-2.5 2.6-2.5 12.4 0 15"/>',
    cart: '<path d="M2.5 3.5h2.2l1.8 9h9l1.7-6.5H6"/><circle cx="8" cy="16" r="1.3"/><circle cx="15" cy="16" r="1.3"/>', chat: '<path d="M3 4.5h14v9H8l-4 3v-3H3z"/><path d="M6.5 8h7M6.5 10.5h4.5"/>',
    radar: '<circle cx="10" cy="10" r="7.5"/><circle cx="10" cy="10" r="4"/><path d="M10 10l5.3-5.3"/><circle cx="13" cy="12.5" r="1"/>', play: '<path d="M6 4l10 6-10 6z"/>',
    down: '<path d="M10 3v10M5.5 9l4.5 4.5L14.5 9M4 17h12"/>', filt: '<path d="M3 5h14M6 10h8M8.5 15h3"/>',
  };
  const ic = (n) => `<svg class="ic" viewBox="0 0 20 20" aria-hidden="true">${IC[n]}</svg>`;
  const RAIL = { sales: 'chart', ads: 'ads', sad: 'target', soc: 'users', seo: 'globe', web: 'cart', crm: 'chat', stk: 'box', mkt: 'radar', rev: 'star', srch: 'search' };
  function frame(key, app, brand, title, body) {
    const t = tx();
    const rail = ['home', 'chart', 'ads', 'target', 'globe', 'cart', 'chat', 'box', 'radar', 'star', 'search'].map((n) => `<i class="${n === RAIL[key] ? 'on' : ''}">${ic(n)}</i>`).join('');
    return `<div class="sc sc-${brand}"><div class="sc-bar"><span class="sc-win" aria-hidden="true"><i></i><i></i><i></i></span><span class="sc-app"><i class="sc-mark" aria-hidden="true"></i>${app}</span><span class="sc-find">${ic('search')}<span>${esc(t.search)}</span></span><span class="sc-bell">${ic('bell')}<i></i></span><span class="sc-me" aria-hidden="true">BA</span><span class="sc-ex">${esc(t.ex)}</span></div>
      <div class="sc-main"><nav class="sc-rail" aria-hidden="true">${rail}<i class="end">${ic('gear')}</i></nav><div class="sc-body">
      <div class="sc-h"><b>${title}</b><div class="sc-tools"><span class="sc-sel">${ic('cal')}${range()} · ${esc(t.days)}</span><span class="sc-sel hide-s">${ic('filt')}${esc(t.all)} ▾</span><span class="sc-sel ghost hide-m">${ic('down')}${esc(t.exp)}</span></div></div>
      ${body}</div></div></div>`;
  }

  // ---------- the five screens; v = 0 without, 1 with ----------
  function sSales(v, X) {
    const t = tx(), S = t.sales, M = X.M, o = N.orders[v], avg = M.avg[v], gross = X.gross[v], rate = M.rate[v];
    const wk = weekly(X.daily[v]), rateGood = S.rateLowGood ? M.rateW[v][12] <= M.rateW[v][0] : M.rateW[v][12] >= M.rateW[v][0];
    const kp = [
      [S.k[0], C('orders', o, 'int'), spark(wk, v === 1), v ? 'ok' : 'bad'],
      [S.k[1], C('gross', gross, 'money'), spark(wk.map((x) => x * avg), v === 1), ''],
      [S.k[2], C('rate', rate, L === 'ru' ? 'p0' : 'p1'), spark(M.rateW[v], rateGood), ''],
      [S.k[3], C('avg', avg, 'money'), spark(M.avgW[v], v === 1), ''],
    ];
    const ax = [0, 31, 62, 89].map((i) => `<span style="left:${(i / 89) * 100}%">${dayDate(i, { day: 'numeric', month: 'short' })}</span>`).join('');
    const rows = P[L].map((name, i) => {
      const s = cover(v, i);
      return `<tr><td><span class="sc-pi">${shot(i, [24, 32, 350][i])}</span><span class="sc-ell">${esc(name)}</span></td><td class="num">${C('top' + i, N.top[v][i], 'int')}</td><td>${K('stock' + i, esc(S.stock(s)), 'span', 'sc-pill ' + (s < N.stk.reorderDays ? 'bad' : 'ok'))}</td></tr>`;
    }).join('');
    const data = ` data-series="${X.daily[v].join(',')}"`;
    return frame('sales', S.app, S.brand, esc(S.title), `<div class="sc-kpis">${kp.map(([a, b, c, h]) => `<div class="sc-kpi${h ? ' hl ' + h : ''}"><span>${esc(a)}</span>${b}${c}</div>`).join('')}</div>${NB(v, 'sales', 'a')}
      <div class="sc-row2"><div class="sc-card sc-main-chart"><div class="sc-ct"><span>${esc(S.chart)}</span><small>${esc(range())}</small></div><div class="sc-plot">${lineSVG(X.daily[v], { max: 75, min: 0, cls: v ? 'good' : 'flat', data })}${v ? '' : `<span class="sc-band" style="left:${(N.dip[0] / 89) * 100}%;width:${((N.dip[1] - N.dip[0]) / 89) * 100}%"></span>`}</div><div class="sc-ax">${ax}</div></div>
      <table class="sc-t"><thead><tr><th>${esc(S.top)}</th><th class="num">${esc(S.cols[1])}</th><th>${esc(S.cols[2])}</th></tr></thead><tbody>${rows}</tbody></table></div>${NB(v, 'sales', 'b')}`);
  }
  function sAds(v, X) {
    const t = tx(), Ad = t.ads, M = X.M, rows = M.ads[v], { spend, sales } = X.ads[v], ru = L === 'ru';
    const ratio = (sp, sa) => (sa ? (ru ? pct((sp / sa) * 100, 1) : xr(sa / sp)) : '—');
    const good = (sp, sa) => (ru ? sp / sa <= 0.2 : sa / sp >= 3);
    const kp = [[Ad.k[0], C('spend', spend, 'money')], [Ad.k[1], C('sales', sales, 'money')], [Ad.k[2], ru ? C('ratio', Math.round((spend / sales) * 1000) / 10, 'p1') : C('ratio', Math.round((sales / spend) * 10) / 10, 'x1'), good(spend, sales) ? 'ok' : 'bad'], [Ad.k[3], C('ctr', N.ctr[v], 'p1')]];
    const body = rows.map((r, i) => `<tr data-k="r${i}"><td><span class="sc-st ${r[2] ? 'on' : ''}" aria-hidden="true"></span><span class="sc-ell">${esc(Ad.names[i])}</span></td><td class="hide-s"><span class="sc-pill ${r[2] ? 'ok' : 'mute'}">${esc(r[2] ? Ad.on : Ad.off)}</span></td><td class="num">${r[2] ? K('r' + i + 's', fmt(r[0])) : '—'}</td><td class="num">${r[2] ? K('r' + i + 'a', fmt(r[1])) : '—'}</td><td class="num" data-k="r${i}x">${r[2] ? K('r' + i + 'r', ratio(r[0], r[1]), 'b', good(r[0], r[1]) ? 'ok' : 'bad') : '—'}</td></tr>`).join('');
    // spend vs ad sales by week: shape from the daily orders, scaled to the totals
    const wk = weekly(X.daily[v]), ws = sum(wk);
    const wt = wk.map((x, i) => (v ? 1 - i * 0.012 : 1)), sp = wt.map((w) => (spend * w) / sum(wt)), sa = wk.map((x) => (sales * x) / ws);
    const top = Math.max(...sp, ...sa);
    const bars = wk.map((_, i) => `<div class="sc-wk"><i style="--h:${(sp[i] / top) * 100}%"></i><i class="s" style="--h:${(sa[i] / top) * 100}%"></i></div>`).join('');
    return frame('ads', Ad.app, Ad.brand, esc(t.screens[1][0]), `<div class="sc-kpis">${kp.map(([a, b, c]) => `<div class="sc-kpi ${c ? 'hl ' + c : ''}"><span>${a}</span>${b}${c ? `<small>${Ad.target}</small>` : ''}</div>`).join('')}</div>${NB(v, 'ads', 'a')}
      <div class="sc-card sc-bars"><div class="sc-ct"><span>${esc(Ad.chart)}</span><span class="sc-leg"><i class="sw"></i>${Ad.k[0]}<i class="sw s"></i>${Ad.k[1]}</span></div><div class="sc-wks sc-grow">${bars}</div></div>
      <table class="sc-t ads"><thead><tr><th>${esc(Ad.cols[0])}</th><th class="hide-s">${esc(Ad.cols[1])}</th><th class="num">${esc(Ad.cols[2])}</th><th class="num">${esc(Ad.cols[3])}</th><th class="num">${Ad.cols[4]}</th></tr></thead><tbody>${body}</tbody></table>${NB(v, 'ads', 'b')}`);
  }
  function sSoc(v) {
    const t = tx(), S = t.soc, n = N.soc, er = n.er[v];
    const kp = [[S.k[0], C('er', Math.round(mean(er) * 10) / 10, 'p1'), v ? 'ok' : 'bad'], [S.k[1], C('reach', n.reach[v], 'int')], [S.k[2], C('saves', n.saves[v], 'int')], [S.k[3], C('foll', n.foll[v], 'plus')]];
    const hues = v ? [18, 200, 330, 40, 260, 150] : [30, 30, 210, 30, 30, 210];
    const tiles = er.map((e, i) => `<div class="sc-post"><span class="sc-th">${shot(v ? [2, 0, 1, 2, 0, 1][i] : [0, 1, 0, 2, 0, 1][i], hues[i])}</span>${v ? '<span class="sc-play" aria-hidden="true"></span>' : ''}<span class="sc-ty">${esc(v ? S.reel : S.photo)}</span>${K('p' + i, A('ER ' + fmt(e, 1) + '%'), 'span', 'sc-er')}</div>`).join('');
    const bars = er.map((e) => `<i style="--h:${(e / 4) * 100}%"></i>`).join('');
    return frame('soc', S.app, S.brand, `<span class="sc-prof"><span class="sc-av" aria-hidden="true"></span><span><b>${S.handle}</b><small>${esc(S.posts(n.posts))}</small></span></span>`, `<div class="sc-kpis">${kp.map(([a, b, h]) => `<div class="sc-kpi${h ? ' hl ' + h : ''}"><span>${esc(a)}</span>${b}</div>`).join('')}</div>${NB(v, 'soc', 'a')}
      <div class="sc-row2 soc"><div class="sc-card"><div class="sc-ct"><span>${esc(S.last)}</span></div><div class="sc-posts">${tiles}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.k[0])}</span><small>${esc(S.last)}</small></div><div class="sc-cols sc-grow">${bars}</div></div></div>${NB(v, 'soc', 'b')}`);
  }
  function sRev(v, X) {
    const t = tx(), R = t.rev, d = N.rev.dist[v], x = X.dist[v], ans = N.rev.answered[v];
    const stars = (k) => `<span class="sc-stars" aria-hidden="true">${[1, 2, 3, 4, 5].map((s) => `<i class="${s <= k ? 'on' : ''}">${star}</i>`).join('')}</span>`;
    const mx = Math.max(...N.rev.dist.flat());
    const dist = d.map((c, i) => `<div class="sc-dr"><span>${5 - i}</span><i><b style="--w:${(c / mx) * 100}%"></b></i>${K('dist' + i, fmt(c), 'small')}</div>`).join('');
    const reply = v ? `<div class="sc-reply" data-k="reply"><b>${esc(R.reply[0])} · ${esc(R.dur(60))}</b><p>${esc(R.reply[1])}</p></div>` : `<div class="sc-reply none" data-k="reply"><p>${esc(R.none)}</p></div>`;
    const b = v ? R.b1 : R.b0;
    return frame('rev', R.app, R.brand, `<span class="sc-prod"><span class="sc-pi lg">${shot(0, 24)}</span><span><b class="sc-ell">${esc(P[L][0])}</b><small>${money(N[L === 'ru' ? 'ru' : 'en'].price)}</small></span></span>`, `<div class="sc-row2 rev"><div class="sc-col">
      <div class="sc-rate"><div class="sc-big"><small>${esc(R.rating)}</small>${C('rating', Math.round(x.avg * 10) / 10, 'r1')}${stars(Math.round(x.avg))}<small>${esc(R.newR)}: ${K('count', fmt(x.n), 'b')}</small></div><div class="sc-dist">${dist}</div></div>
      <div class="sc-kpis two"><div class="sc-kpi hl ${v ? 'ok' : 'bad'}"><span>${esc(R.replies)}</span>${C('answeredPct', Math.round((ans / x.n) * 100), 'p0')}<small>${K('answered', esc(R.of(fmt(ans), fmt(x.n))))}</small></div><div class="sc-kpi"><span>${esc(R.time)}</span>${K('time', esc(R.dur(N.rev.replyMin[v])), 'b')}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(R.trend)}</span>${K('trendEnd', fmt(N.rev.trend[v][12], 1), 'small')}</div>${lineSVG(N.rev.trend[v], { max: 4.7, min: 3.9, h: 50, cls: v ? 'good' : 'flat', step: true })}</div></div>
      <div class="sc-col"><div class="sc-rev"><div class="sc-rh"><span class="sc-avr">${esc(R.a[0][0])}</span><b>${esc(R.a[0])}</b>${stars(1)}</div><p>${esc(R.a[1])}</p>${reply}</div>
      <div class="sc-rev" data-k="rev2"><div class="sc-rh"><span class="sc-avr">${esc(b[0][0])}</span><b>${esc(b[0])}</b>${stars(v ? 5 : 2)}</div><p>${esc(b[1])}</p></div></div></div>${NB(v, 'rev', 'b')}`);
  }
  function sSearch(v) {
    const t = tx(), S = t.srch, M = N[L === 'ru' ? 'ru' : 'en'], pos = N.srch.trend[v][12], page = Math.ceil(pos / N.srch.perPage);
    const cards = COMP[L].map((name, i) => ({ name, price: M.comp[i], r: N.srch.compRating[i], kind: [3, 4, 5, 3, 1, 5, 1, 4, 0][i], hue: [12, 300, 36, 200, 340, 48, 30, 350, 20][i] }));
    if (pos <= 9) cards[pos - 1] = { name: P[L][0], price: M.price, r: N.srch.rating[v], kind: 0, hue: 24, mine: true };
    const grid = cards.map((c, i) => `<div class="sc-card sc-pc${c.mine ? ' mine' : ''}"><span class="sc-th">${shot(c.kind, c.hue)}</span>${c.mine ? K('badge', esc(S.badge(pos)), 'span', 'sc-you') : i === 0 ? `<span class="sc-adt">${esc(S.ad)}</span>` : ''}<b>${money(c.price)}</b><span class="sc-ell">${esc(c.name)}</span><small>${star}${fmt(c.r, 1)}</small></div>`).join('');
    return frame('srch', S.app, S.brand, `<span class="sc-search">${ic('search')}<span>${esc(S.q)}</span></span>`, `<div class="sc-filt"><span class="sc-res">${esc(S.results(fmt(N.srch.results), N.srch.perPage))}</span>${S.filters.map((f, i) => `<span class="${i ? '' : 'on'}">${f}</span>`).join('')}</div>
      <div class="sc-posrow"><div class="sc-pos ${v ? 'ok' : 'bad'}" data-k="pos"><small>${esc(S.yours)}</small>${K('posTxt', esc(S.pos(pos, page)), 'b')}</div><div class="sc-spark" data-k="trend"><small>${esc(S.rank)}</small>${lineSVG(N.srch.trend[v], { max: 42, min: 1, inv: true, h: 34, cls: v ? 'good' : 'flat', step: true })}</div></div>${NB(v, 'srch', 'a')}
      <div class="sc-grid">${grid}</div>${NB(v, 'srch', 'b')}`);
  }
  // ---------- the new screens ----------
  const units = (v, i) => (i < 3 ? N.top[v][i] : N.stk.extra[v][i - 3]);
  const perDay = (v, i) => units(v, i) / N.days;
  function cover(v, i) { return Math.round(N.stk.onHand[v][i] / perDay(v, i)); }
  const M_ = () => N[L === 'ru' ? 'ru' : 'en'];
  const ru_ = () => L === 'ru';
  const money2 = (n) => (ru_() ? fmt(Math.round(n)) + ' ₽' : A('AED ' + fmt(n, 2)));
  const pct2 = (n) => A(fmt(n, 2) + '%');
  const sadTot = (v) => { const r = M_().sad[v]; return { spend: sum(r.map((x) => x[0])), impr: sum(r.map((x) => x[1])), clicks: sum(r.map((x) => x[2])), buy: sum(r.map((x) => x[3])) }; };
  // shares to one decimal that always add up to 100 (largest remainder)
  function shares(a) { const t = sum(a), raw = a.map((x) => (x / t) * 1000), out = raw.map(Math.floor); let r = 1000 - sum(out); raw.map((x, i) => [x - Math.floor(x), i]).sort((p, q) => q[0] - p[0]).slice(0, r).forEach(([, i]) => out[i]++); return out.map((x) => x / 10); }
  const kpis = (list, cls = '') => `<div class="sc-kpis ${cls}">${list.map(([a, b, h, sm]) => `<div class="sc-kpi${h ? ' hl ' + h : ''}"><span>${a}</span>${b}${sm || ''}</div>`).join('')}</div>`;
  function sSad(v) {
    const t = tx(), S = t.sad, rows = M_().sad[v], x = sadTot(v);
    const cpm = (r) => (r[0] / r[1]) * 1000, ctr = (r) => (r[2] / r[1]) * 100, cpa = (r) => r[0] / r[3];
    const tot = [x.spend, x.impr, x.clicks, x.buy];
    const kp = [[S.k[0], C('spend', x.spend, 'money')], [S.k[1], K('cpm', money2(cpm(tot)), 'b')], [S.k[2], K('ctr', pct2(ctr(tot)), 'b')], [S.k[3], K('cpa', money2(cpa(tot)), 'b'), v ? 'ok' : 'bad'], [S.k[4], C('buy', x.buy, 'int')]];
    const body = rows.map((r, i) => `<tr><td><span class="sc-st on" aria-hidden="true"></span><span class="sc-ell">${esc(S.names[i])}</span></td><td class="num">${K('r' + i + 's', fmt(r[0]))}</td><td class="num hide-s">${K('r' + i + 'm', money2(cpm(r)))}</td><td class="num hide-s">${K('r' + i + 'c', pct2(ctr(r)))}</td><td class="num">${K('r' + i + 'b', fmt(r[3]))}</td><td class="num">${K('r' + i + 'a', money2(cpa(r)), 'b')}</td></tr>`).join('');
    const wk = N.seo.weekly[v].map((w, i) => w * (1 + Math.sin(i) * 0.05));
    return frame('sad', S.app, S.brand, esc(t.screens[2][0]), `${kpis(kp, 'five')}${NB(v, 'sad', 'a')}
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.k[4])}</span><small>${esc(range())}</small></div>${lineSVG(wk, { h: 70, cls: v ? 'good' : 'flat', min: 0 })}</div>
      <table class="sc-t sad"><thead><tr>${S.cols.map((c, i) => `<th class="${i ? 'num' : ''}${i === 2 || i === 3 ? ' hide-s' : ''}">${c}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>${NB(v, 'sad', 'b')}`);
  }
  function sSeo(v) {
    const t = tx(), S = t.seo, o = N.seo, c = o.clicks[v], im = o.impr[v];
    const wk = o.weekly[v], ws = sum(wk), wcl = wk.map((w) => (c * w) / ws);
    const kp = [[S.k[0], C('clicks', c, 'int'), v ? 'ok' : ''], [S.k[1], C('impr', im, 'int')], [S.k[2], K('ctr', pct2((c / im) * 100), 'b')], [S.k[3], K('pos', fmt(o.pos[v], 1), 'b')]];
    const q = o.q[v].map((r, i) => `<tr data-k="q${i}"><td><span class="sc-ell">${esc(S.qs[i])}</span></td><td class="num">${K('q' + i + 'c', fmt(r[0]))}</td><td class="num">${K('q' + i + 'i', fmt(r[1]))}</td><td class="num">${K('q' + i + 'p', fmt(r[2], 1), 'b')}</td></tr>`).join('');
    const pg = o.pages[v].map((n, i) => `<tr data-k="pg${i}"><td><span class="sc-ell">${S.pages[i]}</span></td><td class="num">${K('pg' + i + 'c', fmt(n))}</td></tr>`).join('');
    return frame('seo', S.app, S.brand, esc(t.screens[4][0]), `${kpis(kp)}
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.chart)}</span><small>${esc(range())}</small></div>${lineSVG(wcl, { h: 70, min: 0, max: 520, cls: v ? 'good' : 'flat' })}</div>
      <div class="sc-row2 seo"><table class="sc-t"><thead><tr>${S.cols.map((h, i) => `<th class="${i ? 'num' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${q}</tbody></table>
      <table class="sc-t"><thead><tr><th>${S.pcol[0]}</th><th class="num">${S.pcol[1]}</th></tr></thead><tbody>${pg}</tbody></table></div>${NB(v, 'seo', 'b')}`);
  }
  function sWeb(v) {
    const t = tx(), S = t.web, W2 = M_().web, o = W2.orders[v], n = sum(o), aov = W2.aov[v], ses = N.web.sessions[v], rev = n * aov;
    const kp = [[S.k[0], C('ses', ses, 'int')], [S.k[1], K('cr', pct2((n / ses) * 100), 'b'), v ? 'ok' : 'bad'], [S.k[2], C('aov', aov, 'money')], [S.k[3], C('rev', rev, 'money')]];
    const sh = shares(o);
    const rows = o.map((k, i) => `<tr><td><span class="sc-ell">${esc(S.chans[i])}</span></td><td class="num">${K('o' + i, fmt(k))}</td><td class="num">${K('v' + i, fmt(k * aov))}</td><td class="num hide-s"><span class="sc-share"><i style="--w:${(k / n) * 100}%"></i>${K('s' + i, A(fmt(sh[i], 1) + '%'))}</span></td></tr>`).join('');
    const ab = N.web.abandoned[v], rc = N.web.recovered[v];
    const cart = [[S.ck[0], K('ab', fmt(ab), 'b')], [S.ck[1], K('rec', fmt(rc), 'b')], [S.ck[2], K('recr', pct((rc / ab) * 100, 1), 'b')], [S.ck[3], K('recv', money(rc * aov), 'b')]];
    return frame('web', S.app, S.brand, esc(t.screens[5][0]), `${kpis(kp)}${NB(v, 'web', 'a')}
      <div class="sc-row2 web"><div class="sc-col"><table class="sc-t"><thead><tr>${S.cols.map((h, i) => `<th class="${i ? 'num' : ''}${i === 3 ? ' hide-s' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${rows}<tr class="tot"><td>Σ</td><td class="num">${K('ot', fmt(n), 'b')}</td><td class="num">${K('vt', fmt(rev), 'b')}</td><td class="num hide-s">${A(fmt(100, 1) + '%')}</td></tr></tbody></table></div>
      <div class="sc-card sc-cart"><div class="sc-ct"><span>${esc(S.cart)}</span><small>${esc(range())}</small></div><div class="sc-mini">${cart.map(([a, b]) => `<div><small>${esc(a)}</small>${b}</div>`).join('')}</div></div></div>${NB(v, 'web', 'b')}`);
  }
  const dur = (m) => (L === 'ru' ? (m >= 60 ? `${Math.floor(m / 60)} ч${m % 60 ? ' ' + (m % 60) + ' мин' : ''}` : `${m} мин`) : L === 'ar' ? (m >= 60 ? `${Math.floor(m / 60)} س${m % 60 ? ' ' + (m % 60) + ' د' : ''}` : `${m} د`) : m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ' ' + (m % 60) + ' min' : ''}` : `${m} min`);
  function sCrm(v) {
    const t = tx(), S = t.crm, o = N.crm, cv = o.conv[v], n = sum(cv), deal = M_().deal;
    const kp = [[S.k[0], C('conv', n, 'int')], [S.k[1], K('frt', esc(dur(o.frt[v])), 'b'), v ? 'ok' : 'bad'], [S.k[2], K('res', A(fmt((o.resolved[v] / n) * 100, 0) + '%'), 'b'), '', `<small>${K('resn', fmt(o.resolved[v]) + ' / ' + fmt(n))}</small>`], [S.k[3], K('csat', fmt(o.csat[v], 1) + ' / 5', 'b')]];
    const ch = cv.map((c, i) => `<div class="sc-chan"><i class="ch${i}" aria-hidden="true"></i><span>${S.chans[i]}</span>${K('c' + i, fmt(c), 'b')}</div>`).join('');
    const inbox = S.msgs.map(([nm, msg], i) => { const w = o.waits[v][i]; return `<div class="sc-msg"><span class="sc-avr">${esc(nm[0])}</span><span class="sc-mt"><b>${esc(nm)}</b><small>${esc(msg)}</small></span><span class="sc-pill ${w <= 60 ? 'ok' : 'bad'}">${esc(S.wait(w))}</span></div>`; }).join('');
    const pp = o.pipe[v].map((c, i) => `<div class="sc-stage${i === 3 ? ' won' : ''}"${i === 3 ? ' data-k="won"' : ''}><small>${esc(S.stages[i])}</small>${K('pc' + i, fmt(c), 'b')}${K('pv' + i, money(c * deal), 'small')}</div>`).join('');
    return frame('crm', S.app, S.brand, esc(t.screens[6][0]), `${kpis(kp)}${NB(v, 'crm', 'a')}
      <div class="sc-row2"><div class="sc-card"><div class="sc-ct"><span>${esc(S.inbox)}</span></div><div class="sc-inbox">${inbox}</div></div>
      <div class="sc-col"><div class="sc-card"><div class="sc-ct"><span>${esc(S.ch)}</span></div><div class="sc-chans">${ch}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.pipe)}</span></div><div class="sc-pipe">${pp}</div></div></div></div>${NB(v, 'crm', 'b')}`);
  }
  function stkFacts(v) {
    const n = 5, cov = Array.from({ length: n }, (_, i) => cover(v, i));
    const below = cov.filter((c) => c < N.stk.reorderDays).length;
    const dead = sum(cov.map((c, i) => (c > N.stk.deadDays ? N.stk.onHand[v][i] : 0)));
    const qty = Math.round((N.stk.coverTarget * perDay(v, 0)) / 10) * 10;
    const due = cov[0] - N.stk.reorderDays;
    return { cov, below, dead, qty, date: dayDate(N.days - 1 + due, { day: 'numeric', month: 'short' }), out: v ? 0 : N.dip[1] - N.dip[0] + 1 };
  }
  function sStk(v) {
    const t = tx(), S = t.stk, f = stkFacts(v), names = [...P[L], ...S.skus];
    const kp = [[S.k[0], K('below', fmt(f.below), 'b'), f.below ? 'bad' : 'ok'], [S.k[1], K('dead', fmt(f.dead), 'b')], [S.k[2], K('out', fmt(f.out), 'b'), f.out ? 'bad' : 'ok']];
    const rows = names.map((nm, i) => {
      const c = f.cov[i], st = c < N.stk.reorderDays ? 1 : c > N.stk.deadDays ? 2 : 0;
      return `<tr data-k="s${i}"><td><span class="sc-pi">${shot([0, 1, 2, 5, 3][i], [24, 32, 350, 20, 300][i])}</span><span class="sc-ell">${esc(nm)}</span></td><td class="num">${K('h' + i, fmt(N.stk.onHand[v][i]))}</td><td class="num hide-s">${K('d' + i, fmt(perDay(v, i), 1))}</td><td class="num">${K('cv' + i, esc(S.days(fmt(c))), 'b', st === 1 ? 'bad' : st === 2 ? 'warn' : '')}</td><td>${K('st' + i, esc(S.st[st]), 'span', 'sc-pill ' + ['ok', 'bad', 'mute'][st])}</td></tr>`;
    }).join('');
    const bar = f.cov.map((c, i) => `<i class="${c < N.stk.reorderDays ? 'bad' : c > N.stk.deadDays ? 'dead' : ''}" style="--w:${Math.min(100, (c / 120) * 100)}%"></i>`).join('');
    const plan = v ? K('plan', esc(S.sug(fmt(f.qty), f.date)), 'p') : K('plan', esc(S.none.replace('{d}', f.cov[0]).replace('{r}', N.stk.reorderDays)), 'p', 'warn');
    return frame('stk', S.app, S.brand, esc(t.screens[7][0]), `${kpis(kp, 'three')}${NB(v, 'stk', 'a')}
      <table class="sc-t stk"><thead><tr>${S.cols.map((h, i) => `<th class="${i && i < 4 ? 'num' : ''}${i === 2 ? ' hide-s' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>
      <div class="sc-card sc-plan ${v ? 'ok' : 'bad'}"><div class="sc-ct"><span>${esc(S.plan)}</span><small>${esc(range())}</small></div>${plan}<div class="sc-covbar" aria-hidden="true">${bar}<s style="--r:${(N.stk.reorderDays / 120) * 100}%"></s></div></div>${NB(v, 'stk', 'b')}`);
  }
  function sMkt(v, X) {
    const t = tx(), S = t.mkt, M = M_(), o = N.mkt, sos = o.sos[v], others = Math.round((100 - sum(sos)) * 10) / 10;
    const ours = Math.round(((N.rev.dist[v][0] + N.rev.dist[v][1]) / X.dist[v].n) * 1000) / 10;
    const pr = M.comp, all = [...pr, M.price], lo = Math.min(...all), hi = Math.max(...all);
    const dot = (p, r, cls) => `<circle class="${cls}" cx="${8 + ((p - lo) / (hi - lo)) * 284}" cy="${8 + ((4.95 - r) / 0.8) * 84}" r="${cls ? 6 : 4}"/>`;
    const map = `<svg class="sc-map" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="50" x2="300" y2="50"/><line x1="150" y1="0" x2="150" y2="100"/>${pr.map((p, i) => dot(p, N.srch.compRating[i], '')).join('')}${dot(M.price, N.srch.rating[v], 'me')}</svg>`;
    const sosRows = [[S.you, sos[0], 'me'], ...S.brands.map((b, i) => [b, sos[i + 1], '']), [S.others, others, 'oth']];
    const sb = sosRows.map(([b, p, c], i) => `<div class="sc-sos ${c}"><span>${esc(b)}</span><i><b style="--w:${p}%"></b></i>${K('sos' + i, A(fmtT(p) + '%'), 'small')}</div>`).join('');
    const sent = [[S.you, ours, 'me'], ...S.brands.map((b, i) => [b, o.sent[i], ''])].map(([b, p, c], i) => `<div class="sc-sos ${c}"><span>${esc(b)}</span><i><b style="--w:${p}%"></b></i>${K('sent' + i, A(fmtT(p) + '%'), 'small')}</div>`).join('');
    const la = S.launches.map(([b, nm, p, d], i) => `<div class="sc-launch"><span><b>${esc(b)}</b><small>${esc(nm)} · ${money(p)} · ${esc(d)}</small></span>${v ? `<span class="sc-pill ok">${esc(S.seen)}</span>` : `<span class="sc-pill mute">${esc(S.missed)}</span>`}</div>`).join('');
    return frame('mkt', S.app, S.brand, esc(t.screens[8][0]), `<div class="sc-row2"><div class="sc-card" data-k="map"><div class="sc-ct"><span>${esc(S.map)}</span><small>${money(lo)} – ${money(hi)}</small></div>${map}</div>
      <div class="sc-card" data-k="sos"><div class="sc-ct"><span>${esc(S.sos)}</span></div><div class="sc-soss">${sb}</div></div></div>${NB(v, 'mkt', 'a')}
      <div class="sc-row2"><div class="sc-card"><div class="sc-ct"><span>${esc(S.sent)}</span></div><div class="sc-soss">${sent}</div></div>
      <div class="sc-card"><div class="sc-ct"><span>${esc(S.launch)}</span>${K('seen', fmt(o.seen[v]) + ' / 3', 'small')}</div>${la}</div></div>
      <div class="sc-card sc-gap ${v ? 'ok' : ''}" data-k="gap"><div class="sc-ct"><span>${esc(S.gap)}</span></div><p>${v ? S.gapT : esc(S.gapN)}</p></div>${NB(v, 'mkt', 'b')}`);
  }
  const SCREENS = [['sales', sSales, 'chart'], ['ads', sAds, 'ads'], ['sad', sSad, 'target'], ['soc', sSoc, 'users'], ['seo', sSeo, 'globe'], ['web', sWeb, 'cart'], ['crm', sCrm, 'chat'], ['stk', sStk, 'box'], ['mkt', sMkt, 'radar'], ['rev', sRev, 'star'], ['srch', sSearch, 'search']];

  // ---------- with-vs-without strip and USHA's notes, all computed ----------
  function facts(key, X) {
    const M = X.M, ru = L === 'ru';
    if (key === 'sad') {
      const a = sadTot(0), b = sadTot(1), cpa = (x) => x.spend / x.buy, ctr = (x) => (x.clicks / x.impr) * 100;
      return {
        diff: { spend: chg(a.spend, b.spend), cpa: chg(cpa(a), cpa(b)), ctr: arrow(bare(pct2(ctr(a))), bare(pct2(ctr(b)))), buy: chg(a.buy, b.buy) },
        note: { cpa0: bare(money2(cpa(a))), cpa1: bare(money2(cpa(b))), buy: chg(a.buy, b.buy), spend: chg(a.spend, b.spend) },
      };
    }
    if (key === 'seo') {
      const o = N.seo, ctr = (v) => (o.clicks[v] / o.impr[v]) * 100;
      return {
        diff: { clicks: chg(o.clicks[0], o.clicks[1]), impr: chg(o.impr[0], o.impr[1]), ctr: arrow(bare(pct2(ctr(0))), bare(pct2(ctr(1)))), pos: arrow(fmt(o.pos[0], 1), fmt(o.pos[1], 1)) },
        note: { q0: tx().seo.qs[0], p0: fmt(o.q[0][0][2], 1) + ' → ' + fmt(o.q[1][0][2], 1), guide: A('+' + fmt(o.pages[1][2] - o.pages[0][2])) },
      };
    }
    if (key === 'web') {
      const W2 = M_().web, n = W2.orders.map(sum), rev = [n[0] * W2.aov[0], n[1] * W2.aov[1]], cr = (v) => (n[v] / N.web.sessions[v]) * 100;
      return {
        diff: { rev: chg(rev[0], rev[1]), orders: chg(n[0], n[1]), cr: arrow(bare(pct2(cr(0))), bare(pct2(cr(1)))), aov: chg(W2.aov[0], W2.aov[1]) },
        note: { cr: arrow(bare(pct2(cr(0))), bare(pct2(cr(1)))), rec: fmt(N.web.recovered[0]) + ' → ' + fmt(N.web.recovered[1]) },
      };
    }
    if (key === 'crm') {
      const o = N.crm, n = o.conv.map(sum), res = (v) => fmt((o.resolved[v] / n[v]) * 100, 0) + '%', d = M_().deal;
      return {
        diff: { frt: arrow(dur(o.frt[0]), dur(o.frt[1])), res: arrow(res(0), res(1)), csat: arrow(fmt(o.csat[0], 1), fmt(o.csat[1], 1)), won: chg(o.pipe[0][3] * d, o.pipe[1][3] * d) },
        note: { frt: arrow(dur(o.frt[0]), dur(o.frt[1])), won: fmt(o.pipe[0][3]) + ' → ' + fmt(o.pipe[1][3]) },
      };
    }
    if (key === 'stk') {
      const a = stkFacts(0), b = stkFacts(1);
      return {
        diff: { out: arrow(fmt(a.out), fmt(b.out)), dead: arrow(fmt(a.dead), fmt(b.dead)), below: arrow(fmt(a.below), fmt(b.below)) },
        note: { dead: fmt(a.dead) + ' → ' + fmt(b.dead), qty: fmt(b.qty), date: b.date },
      };
    }
    if (key === 'mkt') {
      const s = N.mkt.sos, pos = (v) => Math.round(((N.rev.dist[v][0] + N.rev.dist[v][1]) / X.dist[v].n) * 1000) / 10;
      return {
        diff: { sos: arrow(fmtT(s[0][0]) + '%', fmtT(s[1][0]) + '%'), pos: arrow(fmtT(pos(0)) + '%', fmtT(pos(1)) + '%'), seen: arrow(N.mkt.seen[0] + ' / 3', N.mkt.seen[1] + ' / 3') },
        note: { sos: fmtT(s[0][0]) + '% → ' + fmtT(s[1][0]) + '%' },
      };
    }
    if (key === 'sales') {
      return {
        diff: { orders: chg(N.orders[0], N.orders[1]), avg: chg(M.avg[0], M.avg[1]), gross: chg(X.gross[0], X.gross[1]), rate: pp(M.rate[0], M.rate[1]) },
        note: { dip: N.dip[1] - N.dip[0] + 1, gift: chg(N.top[0][2], N.top[1][2]), rateChg: pp(M.rate[0], M.rate[1]) },
      };
    }
    if (key === 'ads') {
      const [a, b] = X.ads, auto = M.ads[0][2], srch = M.ads[1][0];
      const r = (s) => (ru ? pct((s.spend / s.sales) * 100, 0) : xr(s.sales / s.spend));
      return {
        diff: { ratio: arrow(bare(r(a)), bare(r(b))), spend: chg(a.spend, b.spend), sales: chg(a.sales, b.sales), ctr: chg(N.ctr[0], N.ctr[1]) },
        note: { autoSpend: money(auto[0]), autoRatio: ru ? pct((auto[0] / auto[1]) * 100, 1) : xr(auto[1] / auto[0]), searchRatio: ru ? pct((srch[0] / srch[1]) * 100, 1) : xr(srch[1] / srch[0]), spendChg: chg(a.spend, b.spend), salesChg: chg(a.sales, b.sales) },
      };
    }
    if (key === 'soc') {
      const s = N.soc, er = s.er.map((e) => Math.round(mean(e) * 10) / 10);
      return {
        diff: { er: arrow(bare(pct(er[0])), bare(pct(er[1]))), reach: times(s.reach[0], s.reach[1]), saves: times(s.saves[0], s.saves[1]), foll: arrow('+' + fmt(s.foll[0]), '+' + fmt(s.foll[1])) },
        note: { saves: times(s.saves[0], s.saves[1]), reach: times(s.reach[0], s.reach[1]), foll0: fmt(s.foll[0]), foll1: fmt(s.foll[1]) },
      };
    }
    if (key === 'rev') {
      const R = tx().rev, d = X.dist, a = N.rev.answered;
      const rp = [0, 1].map((v) => Math.round((a[v] / d[v].n) * 100));
      return {
        diff: { rating: arrow(fmt(d[0].avg, 1), fmt(d[1].avg, 1)), count: chg(d[0].n, d[1].n), answered: arrow(rp[0] + '%', rp[1] + '%'), time: A(bare(R.dur(N.rev.replyMin[0])) + ' → ' + bare(R.dur(N.rev.replyMin[1]))) },
        note: { one0: fmt(N.rev.dist[0][4]), one1: fmt(N.rev.dist[1][4]), rate1: pct(rp[1], 0), time1: R.dur(N.rev.replyMin[1]) },
      };
    }
    const tr = N.srch.trend, p = [tr[0][12], tr[1][12]], pg = p.map((x) => Math.ceil(x / N.srch.perPage));
    const wk = tr[1].findIndex((x) => x <= N.srch.perPage) + 1;
    return { diff: { pos: arrow(p[0], p[1]), page: arrow(pg[0], pg[1]) }, note: { p0: p[0], p1: p[1], since: tx().onPage(wk) } };
  }

  // ---------- videos ----------
  const VIDS = [['without-usha', '0:28'], ['with-usha', '0:42']];
  let quiet = false;
  const playing = () => $$('.t3-vid video').some((v) => !v.paused && !v.ended);
  function vidHTML() {
    const t = tx();
    return `<div class="t3-vids">${VIDS.map(([f, dur], i) => `<figure class="t3-vid ${i ? 'is-with' : 'is-without'}"><div class="t3-vtag"><span>${i ? t.with : t.without}</span><span class="sc-ex">${esc(t.ex)}</span></div>
      <div class="t3-vbox"><video preload="none" playsinline poster="/media/${f}.jpg" src="/media/${f}.mp4"></video><button type="button" class="t3-vplay" aria-label="${esc(t.vid.play)}: ${esc(bare(i ? t.with : t.without))}"><i aria-hidden="true"></i><span>${dur}</span></button></div>
      <figcaption>${t.vid.t[i]}</figcaption></figure>`).join('')}</div>`;
  }
  function vidWire(root) {
    $$('.t3-vid', root).forEach((fig) => {
      const v = $('video', fig), b = $('.t3-vplay', fig);
      b.addEventListener('click', () => {
        $$('.t3-vid video').forEach((o) => { if (o !== v && !o.paused) o.pause(); });
        v.controls = true; fig.classList.add('on');
        const p = v.play(); if (p && p.catch) p.catch(() => {});
      });
      v.addEventListener('play', () => { if (!quiet) { quiet = true; dispatchEvent(new Event('usha:quiet')); } });
      const done = () => setTimeout(() => { if (quiet && !playing()) { quiet = false; dispatchEvent(new Event('usha:resume')); } }, 60);
      v.addEventListener('pause', done); v.addEventListener('ended', done);
    });
  }
  const stopVideos = () => $$('.t3-vid video').forEach((v) => { if (!v.paused) v.pause(); });

  // ---------- the divider: a slim line with glass grips above and below the screen ----------
  let wwIdx = 0, cut = 50;
  function setCut(stage, x) {
    cut = Math.max(0, Math.min(100, x));
    const box = stage.closest('.t3-cmp'); box.style.setProperty('--x', cut + '%');
    const line = $('.t3-line', stage); if (line) line.setAttribute('aria-valuenow', String(Math.round(cut)));
    const withShare = rtl() ? cut : 100 - cut;
    box.style.setProperty('--wa', Math.min(1, (100 - withShare) / 50).toFixed(2)); box.style.setProperty('--wb', Math.min(1, withShare / 50).toFixed(2));
  }
  function tipAt(stage, e) {
    const tip = $('.t3-tip', stage); if (!tip) return;
    const scr = $('.t3-scr', stage), r = scr.getBoundingClientRect(), xPct = ((e.clientX - r.left) / r.width) * 100;
    const withSide = rtl() ? xPct < cut : xPct > cut;
    const svg = $(`.t3-layer.${withSide ? 'b' : 'a'} .sc-chart[data-series]`, stage);
    if (!svg) { tip.hidden = true; return; }
    const q = svg.getBoundingClientRect();
    if (e.clientX < q.left || e.clientX > q.right || e.clientY < q.top - 8 || e.clientY > q.bottom + 8) { tip.hidden = true; return; }
    const s = svg.dataset.series.split(',').map(Number), i = Math.round(((e.clientX - q.left) / q.width) * (s.length - 1));
    const sr = stage.getBoundingClientRect();
    tip.hidden = false;
    tip.textContent = bare(tx().tip(dayDate(i, { day: 'numeric', month: 'short' }), s[i]));
    tip.style.left = (q.left + (i / (s.length - 1)) * q.width - sr.left) + 'px';
    tip.style.top = (q.top + (1 - s[i] / 75) * (q.height - 6) + 3 - sr.top) + 'px';
  }
  function stageWire(stage) {
    const line = $('.t3-line', stage), scr = $('.t3-scr', stage), cmp = stage.closest('.t3-cmp');
    let drag = false;
    const at = (e) => { const r = scr.getBoundingClientRect(); setCut(stage, ((e.clientX - r.left) / r.width) * 100); };
    stage.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button > 0) return;
      drag = true; stage.classList.add('drag'); stage.classList.remove('anim'); clearTimeout(nudgeT);
      const tip = $('.t3-tip', stage); if (tip) tip.hidden = true;
      try { stage.setPointerCapture(e.pointerId); } catch {}
      at(e);
    });
    stage.addEventListener('pointermove', (e) => { if (drag) at(e); else if (e.pointerType === 'mouse') tipAt(stage, e); });
    stage.addEventListener('pointerleave', () => { const tip = $('.t3-tip', stage); if (tip) tip.hidden = true; });
    const end = () => { drag = false; stage.classList.remove('drag'); };
    stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end); stage.addEventListener('lostpointercapture', end);
    line.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 20 : 5, dir = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
      const go = (x) => { e.preventDefault(); clearTimeout(nudgeT); stage.classList.add('anim'); setCut(stage, x); };
      if (dir) go(cut + dir * step); else if (e.key === 'Home') go(0); else if (e.key === 'End') go(100);
    });
    if (fine && !reduce) {
      const tilt = $('.t3-tilt', cmp);
      cmp.addEventListener('pointermove', (e) => {
        if (drag) return;
        const r = cmp.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `rotateY(${(x * 4).toFixed(2)}deg) rotateX(${(-y * 3).toFixed(2)}deg)`;
      });
      cmp.addEventListener('pointerleave', () => { tilt.style.transform = ''; });
    }
    setCut(stage, cut);
  }
  // a gentle nudge each time a screen opens, so it reads as movable
  let nudgeT = 0;
  function nudge(stage) {
    if (reduce || !stage) return;
    stage.classList.add('anim');
    const steps = [[450, 44], [1100, 56], [1750, 50]];
    const run = (k) => { if (k >= steps.length) return; nudgeT = setTimeout(() => { if (!stage.classList.contains('drag')) setCut(stage, steps[k][1]); run(k + 1); }, k ? steps[k][0] - steps[k - 1][0] : steps[k][0]); };
    run(0);
  }
  // USHA's notes sit in their own row (they never cover data); their targets glow on the "with" side
  function NB(v, key, bar) {
    const f = facts(key, derive(L)), list = tx()[key].notes(f.note).filter((n) => n[2] === bar);
    if (!list.length) return '';
    return `<div class="sc-nbar${v ? '' : ' ghost'}"${v ? '' : ' aria-hidden="true"'}>${list.map(([k, s]) => `<span class="sc-note" data-for="${k}"><span class="t3-face xs" aria-hidden="true"><i></i><i></i></span><span>${s}</span></span>`).join('')}</div>`;
  }
  function markTargets(stage) {
    const b = $('.t3-layer.b', stage); if (!b) return;
    $$('.sc-note', b).forEach((n) => { const t = $(`[data-k="${n.dataset.for}"]`, b); if (t) (t.closest('td,.sc-kpi,.sc-card,tr,.sc-pos,.sc-pc,.sc-rev,.sc-stage') || t).classList.add('sc-hit'); });
  }
  function play(stage) {
    if (!stage) return;
    stage.classList.remove('lit');
    if (reduce) { stage.classList.add('lit'); return; }
    void stage.offsetWidth;
    stage.classList.add('lit');
    const t0 = performance.now(), dur = 1100;
    const els = $$('.t3-cu', stage).map((el) => ({ el, to: +el.dataset.to, f: FMT[el.dataset.f], fin: el.textContent }));
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      els.forEach((o) => { o.el.textContent = k < 1 ? o.f(o.to * e) : o.fin; });
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function renderScreen(i, v) { const X = derive(L); return SCREENS[i][1](v, X); }
  function notesHTML(i) { return renderScreen(i, 1).match(/<span class="sc-note"[^]*?<\/span><\/span>/g)?.join('') || ''; }
  function diffHTML(i) {
    const key = SCREENS[i][0], f = facts(key, derive(L)), list = tx().diff[key](f.diff);
    return `<div class="t3-diff"><small>${tx().diffH}</small><div>${list.map(([a, b], j) => `<span><em>${a}</em><b data-k="d.${key}.${j}">${b}</b></span>`).join('')}</div></div>`;
  }
  const grip = (top) => `<span class="t3-grip ${top ? 'top' : 'bot'}" aria-hidden="true">${top ? '<span class="t3-face xs"><i></i><i></i></span>' : ''}<em>‹</em><em>›</em></span>`;
  function wwStage() {
    const t = tx();
    if (wwIdx === SCREENS.length) return vidHTML();
    return `<div class="t3-cmp" style="--x:${cut}%"><div class="t3-sides" aria-hidden="true"><span class="a">${t.without}</span><span class="b">${t.with}</span></div>
      <div class="t3-tilt"><div class="t3-stage"><div class="t3-scr"><div class="t3-layer a" aria-label="${esc(bare(t.without))}">${renderScreen(wwIdx, 0)}</div><div class="t3-layer b" aria-label="${esc(bare(t.with))}">${renderScreen(wwIdx, 1)}</div></div>
      <div class="t3-line" role="slider" tabindex="0" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(cut)}" aria-label="${esc(bare(t.dragA))}" title="${esc(t.grip)}">${grip(true)}${grip(false)}</div><div class="t3-tip" hidden></div></div></div>
      ${diffHTML(wwIdx)}</div>`;
  }
  function wwRender(box) {
    const t = tx();
    stopVideos(); clearTimeout(nudgeT);
    cut = 50;
    $('.t3-wwbox', box).innerHTML = wwStage();
    $('.t3-move', box).innerHTML = `<b>${esc(t.move)}</b><span>${t.moves[wwIdx]}</span>`;
    $$('.t3-sub button', box).forEach((b, i) => { b.setAttribute('aria-selected', String(i === wwIdx)); if (i === wwIdx && innerWidth <= 1000) { const r = b.parentElement; r.scrollLeft += b.getBoundingClientRect().left - r.getBoundingClientRect().left - 14; } });
    const st = $('.t3-stage', box);
    if (st) { stageWire(st); markTargets(st); play(st); nudge(st); }
    vidWire(box);
  }

  // ---------- pop-ups ----------
  let openK = null, lastFocus = null, keepY = 0;
  const modals = {};
  function modal(kind) {
    if (modals[kind]) return modals[kind];
    const m = D.createElement('div');
    m.className = 't3-modal t3-m-' + kind; m.hidden = true; m.setAttribute('translate', 'no'); m.classList.add('notranslate');
    m.innerHTML = `<div class="t3-mscrim"></div><div class="t3-mpanel" role="dialog" aria-modal="true" aria-labelledby="t3-mt-${kind}"><div class="t3-mhead"><div class="t3-mtt"><h3 id="t3-mt-${kind}"></h3><p></p></div><button type="button" class="t3-mx"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div class="t3-mbody"></div></div>`;
    D.body.append(m);
    $('.t3-mx', m).addEventListener('click', () => closeM());
    $('.t3-mscrim', m).addEventListener('click', () => closeM());
    modals[kind] = m;
    return m;
  }
  function fillFF(m) {
    const t = tx(), body = $('.t3-mbody', m);
    if (!$('.t3-ww', body)) body.innerHTML = `<div class="t3-ww"><div class="t3-sub" role="tablist"></div><div class="t3-wwmain"><div class="t3-wwbox"></div><p class="t3-move"></p><p class="t3-ill"></p></div></div>`;
    const icons = [...SCREENS.map((s) => s[2]), 'play'];
    $('.t3-sub', body).innerHTML = t.screens.map(([s, d], i) => `<button type="button" role="tab" aria-selected="${i === wwIdx}" data-i="${i}">${ic(icons[i])}<span><b>${esc(s)}</b><small>${esc(d)}</small></span></button>`).join('');
    $$('.t3-sub button', body).forEach((b) => b.addEventListener('click', () => { wwIdx = +b.dataset.i; wwRender(body); const sc = $('.t3-wwmain', body); if (innerWidth <= 900) $('.t3-mbody', m).scrollTo({ top: 0 }); else sc.scrollIntoView({ block: 'nearest' }); }));
    $('.t3-ill', body).textContent = t.ill;
    wwRender(body);
  }
  function labelM(kind) {
    const m = modals[kind]; if (!m) return;
    const t = tx(), c = t.cards[kind];
    $('h3', m).innerHTML = c[0];
    $('.t3-mtt p', m).textContent = kind === 'ff' ? bare(t.ffSub) : ($('#talk .lead') || {}).textContent || c[1];
    $('.t3-mx', m).setAttribute('aria-label', t.close);
  }
  const focusables = (m) => $$('button, [href], input, select, textarea, video[controls], [tabindex]:not([tabindex="-1"])', m).filter((e) => !e.disabled && e.offsetParent !== null && !e.closest('[inert],.ghost'));
  function openM(kind, opener) {
    if (openK) closeM(true);
    const m = modal(kind);
    labelM(kind);
    if (kind === 'ff') fillFF(m);
    lastFocus = opener || D.activeElement; keepY = scrollY;
    m.hidden = false; openK = kind;
    H.classList.add('x-modal-on', 't3-modal-on');
    requestAnimationFrame(() => requestAnimationFrame(() => m.classList.add('on')));
    $('.t3-mx', m).focus({ preventScroll: true });
  }
  function closeM(now) {
    if (!openK) return;
    const m = modals[openK]; openK = null;
    stopVideos(); clearTimeout(nudgeT);
    m.classList.remove('on');
    const done = () => { m.hidden = true; };
    if (now || reduce) done(); else setTimeout(done, 380);
    H.classList.remove('x-modal-on', 't3-modal-on');
    if (Math.abs(scrollY - keepY) > 1) scrollTo(0, keepY);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  D.addEventListener('keydown', (e) => {
    if (!openK) return;
    const m = modals[openK];
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeM(); return; }
    if (e.key !== 'Tab') return;
    const f = focusables($('.t3-mpanel', m)); if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!m.contains(D.activeElement)) { e.preventDefault(); first.focus(); return; }
    if (e.shiftKey && D.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && D.activeElement === last) { e.preventDefault(); first.focus(); }
  }, true);

  // ---------- the three cards ----------
  const talk = () => dispatchEvent(new Event('usha:talk'));
  const ART_FF = `<svg class="t3-art-ff" viewBox="0 0 220 120" preserveAspectRatio="none" aria-hidden="true"><defs><clipPath id="t3ffc"><rect class="rv" x="0" y="0" width="220" height="120"/></clipPath><linearGradient id="t3ffg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFB547" stop-opacity=".35"/><stop offset="1" stop-color="#FFB547" stop-opacity="0"/></linearGradient></defs><path class="g" d="M10 30H210M10 60H210M10 90H210"/><path class="a" d="M10 82 L40 80 L70 84 L100 81 L130 85 L160 83 L190 86 L210 84"/><g clip-path="url(#t3ffc)"><path class="ar" d="M10 82 L40 76 L70 70 L100 60 L130 50 L160 40 L190 30 L210 22 L210 112 L10 112Z"/><path class="b" d="M10 82 L40 76 L70 70 L100 60 L130 50 L160 40 L190 30 L210 22"/></g><line class="sw" x1="0" y1="8" x2="0" y2="112"/></svg>`;
  const artSc = () => { const a = tx().scArt; return `<div class="t3-art art-sc" aria-hidden="true"><div class="sa-chips">${a.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div><div class="sa-q">${esc(a.q)}</div><div class="sa-a"><span class="t3-face"><i></i><i></i></span><span>${esc(a.a)}</span></div></div>`; };
  function cardsHTML() {
    const t = tx(), x = t.live, c = t.cards;
    return `<article class="t3-card k-sc"><div class="t3-tex" aria-hidden="true"></div>${artSc()}<h3>${c.sc[0]}</h3><p>${c.sc[1]}</p><button type="button" class="t3-cta" data-open="sc"><span>${c.sc[2]}</span></button></article>
      <article class="t3-card k-live"><div class="t3-tex" aria-hidden="true"></div><div class="t3-lv-glow" aria-hidden="true"></div><div class="t3-lv-head"><div class="t3-lv-top"><span class="t3-onair"><i aria-hidden="true"></i>${esc(x.k)}</span><span class="t3-wave" aria-hidden="true">${'<i></i>'.repeat(9)}</span></div>
        <div class="t3-lv-orb" aria-hidden="true"><span class="t3-face lg"><i></i><i></i></span><s></s><s></s></div></div>
        <h3>${x.h}</h3><p>${esc(x.p)}</p>
        <button type="button" class="t3-go"><span class="t3-go-ring" aria-hidden="true"></span><span class="d" aria-hidden="true"></span><span>${x.b}</span><span class="t3-go-a" aria-hidden="true">${rtl() ? '←' : '→'}</span></button></article>
      <article class="t3-card k-ff"><div class="t3-tex" aria-hidden="true"></div><div class="t3-art"><span class="t3-90" aria-hidden="true"><span dir="ltr">+90</span><small>${esc(bare(t.days))}</small></span>${ART_FF}</div><h3>${c.ff[0]}</h3><p>${c.ff[1]}</p><button type="button" class="t3-cta" data-open="ff"><span>${c.ff[2]}</span></button></article>`;
  }
  let root = null;
  function wireCards() {
    $$('.t3-cta', root).forEach((b) => b.addEventListener('click', () => openM(b.dataset.open, b)));
    $('.t3-go', root).addEventListener('click', talk);
    // a calm tilt toward the pointer (desktop), at most 2.5°
    if (fine && !reduce) $$('.t3-card', root).forEach((c) => {
      c.addEventListener('pointermove', (e) => { const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; c.style.transform = `rotateY(${(x * 5).toFixed(2)}deg) rotateX(${(-y * 4).toFixed(2)}deg)`; });
      c.addEventListener('pointerleave', () => { c.style.transform = ''; });
    });
  }
  function build() {
    const sec = $('#talk'); if (!sec) return;
    const col = $('.talk > div:last-child', sec); const chips = $('#ichips'), chat = $('#chat'); if (!col || !chips || !chat) return;
    L = H.lang in T ? H.lang : 'en';
    sec.classList.add('t3-on');
    root = D.createElement('div'); root.className = 't3 t3-cards'; root.setAttribute('translate', 'no'); root.classList.add('notranslate');
    root.innerHTML = cardsHTML();
    chips.before(root);
    wireCards();
    // the scenarios (the bundle's own chips, chat and hint) live in their pop-up; the bundle finds them by id
    const m = modal('sc'), body = $('.t3-mbody', m);
    body.innerHTML = '<div class="t3-sc"><div class="t3-sc-chips"></div><div class="t3-sc-chat"></div></div>';
    $('.t3-sc-chips', body).append(chips);
    $('.t3-sc-chat', body).append(chat);
    const hint = $('.hint', col); if (hint) $('.t3-sc-chat', body).append(hint);
    [chips, chat, hint].forEach((e) => e && e.classList.add('in'));
    labelM('sc');
    new MutationObserver(() => {
      const n = H.lang in T ? H.lang : 'en'; if (n === L) return;
      L = n; root.innerHTML = cardsHTML(); wireCards(); labelM('sc');
      if (modals.ff) { labelM('ff'); if (openK === 'ff') fillFF(modals.ff); }
    }).observe(H, { attributes: true, attributeFilter: ['lang'] });
  }
  // the number check (tools/seo/check-try.mjs) renders the screens without a page
  if (W.__t3test) { W.__t3 = { N, T, P, derive, facts, setLang: (l) => { L = l; }, screen: (i, v) => renderScreen(i, v), notes: notesHTML, diff: diffHTML, range, keys: SCREENS.map((s) => s[0]), stkFacts, cover }; return; }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', build); else build();
})();
