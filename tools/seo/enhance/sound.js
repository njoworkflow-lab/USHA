// The soundtrack player (points 13 and 15; bundle hooks in sound.mjs).
// It starts only after a user gesture, loads the file only once sound is on,
// pauses while the tab is hidden, fades out for the live chat and for anything
// that sends "usha:quiet" (resumed by "usha:resume"). On desktop a very faint
// glow at the top and bottom edges answers strong low beats; it switches
// itself off under reduced motion, on phones, and if the page drops below
// 50 frames a second.
(() => {
  const D = document, H = D.documentElement, KEY = 'usha-sound';
  const VOL = 0.75, FX_MUTED = 0.4; // effects bus runs at .8; half of it is .4
  const pref = () => { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = () => matchMedia('(pointer:fine)').matches && innerWidth >= 1024;
  let on = pref(), el = null, gain = null, an = null, bins = null, pz = 0, armed = false, lastT = -1;
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
    an = A.ac.createAnalyser(); an.fftSize = 1024; an.smoothingTimeConstant = 0.6;
    bins = new Uint8Array(an.frequencyBinCount);
    src.connect(an);
    return true;
  }
  const live = () => H.classList.contains('x-modal-on');
  const target = () => (on && !quiet.size && !live() && !D.hidden ? VOL : 0);

  // site effects: silent in music mode and in the live chat, half when muted
  function fx() {
    const A = audio(); if (!A) return;
    const lvl = live() ? 0 : on ? 0 : FX_MUTED;
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
      if (el.paused) el.play().catch(() => {});
      g.linearRampToValueAtTime(t, now + 1.5);
      pulse();
    } else {
      g.linearRampToValueAtTime(0, now + 0.8);
      pz = setTimeout(() => { if (!target()) el.pause(); }, 1000);
    }
  }

  window.UshaSound = {
    set(v) { on = !!v; armed = true; lastT = -1; apply(); },
    get on() { return on; },
    // read-only status, for checks
    get playing() { return !!el && !el.paused; },
    get level() { return gain ? +gain.gain.value.toFixed(2) : 0; },
  };
  // the first gesture anywhere (after the bundle has created its audio context)
  const first = () => setTimeout(() => {
    if (!audio() || armed) return;
    armed = true; apply();
    ['pointerup', 'keydown', 'touchend'].forEach((e) => removeEventListener(e, first, true));
  }, 0);
  ['pointerup', 'keydown', 'touchend'].forEach((e) => addEventListener(e, first, true));
  D.addEventListener('visibilitychange', apply);
  new MutationObserver(apply).observe(H, { attributes: true, attributeFilter: ['class'] });
  addEventListener('usha:quiet', () => { quiet.add('ext'); apply(); });
  addEventListener('usha:resume', () => { quiet.delete('ext'); apply(); });

  // ---------- the beat glow (desktop only) ----------
  let glow = null, raf = 0, avg = 0, last = 0, frames = 0, t0 = 0, slow = 0, off = reduce;
  function pulse() {
    if (off || raf || !desktop() || !an) return;
    if (!glow) {
      glow = D.createElement('div'); glow.className = 'x-beat'; glow.setAttribute('aria-hidden', 'true');
      const gl = D.getElementById('gl'); (gl ? gl.after(glow) : D.body.prepend(glow));
    }
    t0 = performance.now(); frames = 0;
    raf = requestAnimationFrame(loop);
  }
  function loop(now) {
    raf = 0;
    if (!target() || !desktop()) { glow.style.opacity = 0; return; }
    // a fair frame-rate check: if the glow costs smoothness, it stops for good
    frames++;
    if (now - t0 > 3000) {
      const fps = frames * 1000 / (now - t0); frames = 0; t0 = now;
      if (fps < 50 && ++slow >= 2) { off = true; glow.remove(); return; }
      if (fps >= 50) slow = 0;
    }
    an.getByteFrequencyData(bins);
    const low = (bins[1] + bins[2] + bins[3] + bins[4]) / 4;
    avg = avg ? avg * 0.95 + low * 0.05 : low;
    if (low > 150 && low > avg * 1.25 && now - last > 280) { last = now; glow.style.opacity = Math.min(1, (low - avg) / 60).toFixed(2); }
    else if (now - last > 120) glow.style.opacity = 0;
    raf = requestAnimationFrame(loop);
  }
})();
