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
    return clamp((performance.now() - played) / 4200);
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
