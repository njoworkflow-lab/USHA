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
