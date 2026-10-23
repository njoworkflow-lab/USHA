// The soundtrack player (points 13 and 15; bundle hooks in sound.mjs).
// It starts only after a user gesture, loads the file only once sound is on,
// pauses while the tab is hidden, fades out for the live chat and for anything
// that sends "usha:quiet" (resumed by "usha:resume") and while the game runs.
// While it plays, the galaxy pulses and the glow breathes with the beat.
(() => {
  const D = document, H = D.documentElement, KEY = 'usha-music';
  const VOL = 0.65, FX_MUTED = 0.4; // effects bus runs at .8; half of it is .4
  const pref = () => { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      pulse();
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

  // ---------- the visualizer: the galaxy and the light play the track ----------
  // The track was analysed once (tools/audio/analyse-track.py): bass, mid and
  // high levels, section loudness, and every kick, snare and hi-hat. The scene
  // follows that timeline at the music's exact playback time:
  //   kick   the galaxy pulses outward, every star grows and brightens, the glow flares
  //   snare  the galaxy draws in and warms (a heartbeat)
  //   hi-hat / highs   shimmer: the stars' turbulence quickens
  //   bass   the light beams brighten along their lanes
  //   section loudness  scales everything: a calm intro, strong drops; the glow breathes
  // Only existing shader values change, so it costs no extra drawing. Off when
  // the music is silent and under reduced motion.
  let map = null, raf = 0;
  const OUTS = ['__bB', '__bH', '__bC', '__bS', '__bG', '__bF'];
  const zero = () => OUTS.forEach((k) => { window[k] = 0; });
  zero();
  function loadMap() {
    if (map) return;
    map = { loading: true };
    fetch('/audio/usha-track.map.json').then((r) => r.json()).then((d) => {
      const raw = atob(d.env), env = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) env[i] = raw.charCodeAt(i);
      const hits = (a) => ({ t: a.filter((_, i) => i % 2 === 0), s: a.filter((_, i) => i % 2 === 1).map((v) => v / 99), i: 0 });
      map = { fps: d.fps, n: d.frames, env, kick: hits(d.kick), snare: hits(d.snare), hat: hits(d.hat) };
    }).catch(() => { map = null; });
  }
  // the newest hit at or before t, decayed; a 25 ms rise so it lands with the sound
  function hitEnv(h, t, tau) {
    if (h.i >= h.t.length || (h.i > 0 && h.t[h.i - 1] > t)) { // seek: find the position again
      let lo = 0, hi = h.t.length; while (lo < hi) { const m = (lo + hi) >> 1; if (h.t[m] <= t) lo = m + 1; else hi = m; } h.i = lo;
    }
    while (h.i < h.t.length && h.t[h.i] <= t) h.i++;
    let v = 0;
    for (let k = h.i - 1; k >= 0 && k >= h.i - 3; k--) {
      const dt = t - h.t[k]; if (dt > tau * 5) break;
      v = Math.max(v, h.s[k] * Math.exp(-dt / tau));
    }
    if (h.i < h.t.length) { const ahead = h.t[h.i] - t; if (ahead < 25) v = Math.max(v, h.s[h.i] * (1 - ahead / 25)); }
    return Math.min(1, v * 1.4);
  }
  function envAt(t, ch) {
    const f = Math.max(0, Math.min(map.n - 1.001, (t / 1000) * map.fps)), i = f | 0, k = f - i;
    return (map.env[i * 4 + ch] * (1 - k) + map.env[(i + 1) * 4 + ch] * k) / 255;
  }
  function pulse() {
    loadMap();
    if (reduce || raf) return;
    raf = requestAnimationFrame(loop);
  }
  function loop() {
    raf = 0;
    if (!target() || !el || !map || map.loading) {
      zero();
      if (target() && map && map.loading) raf = requestAnimationFrame(loop);
      return;
    }
    const A = audio();
    const lat = A ? ((A.ac.outputLatency || 0) + (A.ac.baseLatency || 0)) * 1000 : 0;
    const t = el.currentTime * 1000 - lat;
    const bass = envAt(t, 0), high = envAt(t, 2), energy = envAt(t, 3);
    const kick = hitEnv(map.kick, t, 170), snare = hitEnv(map.snare, t, 230), hat = hitEnv(map.hat, t, 70);
    const S = 0.35 + 0.65 * energy;                        // calm intro, strong drops
    // strengths tuned on rendered frames: a clear pulse, the text stays readable
    window.__bB = (kick * 0.03 + bass * 0.005) * S;        // outward pulse
    window.__bH = snare * 0.1 * S;                         // draw in and warm
    window.__bC = (high * 0.06 + hat * 0.08) * S;          // shimmer
    window.__bS = (kick * 0.42 + snare * 0.15) * S + bass * 0.06; // stars swell, light beams flare
    window.__bG = kick * 0.25 * S + energy * 0.1 + snare * 0.07;  // the glow breathes and flares
    window.__bF = energy > 0.55 ? kick * 0.02 * energy : 0;       // a soft flash on strong hits
    raf = requestAnimationFrame(loop);
  }
})();
