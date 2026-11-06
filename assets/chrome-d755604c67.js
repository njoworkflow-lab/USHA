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
