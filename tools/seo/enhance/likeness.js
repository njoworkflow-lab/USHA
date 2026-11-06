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
