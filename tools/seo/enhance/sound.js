// The soundtrack player (points 13 and 15; bundle hooks in sound.mjs).
// It starts only after a user gesture, loads the file only once sound is on,
// pauses while the tab is hidden, fades out for the live chat and for anything
// that sends "usha:quiet" (resumed by "usha:resume") and while the game runs.
// While it plays, the galaxy pulses and the glow breathes with the beat.
(() => {
  const D = document, H = D.documentElement, KEY = 'usha-music';
  const VOL = 0.7, FX_MUTED = 0.4; // effects bus runs at .8; half of it is .4
  const pref = () => { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let on = pref(), el = null, gain = null, an = null, bins = null, pz = 0, armed = false, lastT = -1;
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
    an = A.ac.createAnalyser(); an.fftSize = 1024; an.smoothingTimeConstant = 0.6;
    bins = new Uint8Array(an.frequencyBinCount);
    src.connect(an);
    return true;
  }
  const live = () => H.classList.contains('x-modal-on');
  const target = () => (ready && on && !quiet.size && !live() && !D.hidden ? VOL : 0);

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

  // ---------- the beat: the galaxy and the light answer the music ----------
  // Kicks (low frequencies rising fast) push the galaxy outward and flare the
  // glow; the overall loudness makes the glow breathe. Only uniforms change, so
  // it costs no extra drawing. Off whenever the music is silent and under
  // reduced motion.
  let raf = 0, slowB = 0, kick = 0, breath = 0, prevB = 0, lastKick = 0, prevT = 0;
  const zero = () => { window.__bB = 0; window.__bG = 0; window.__bF = 0; };
  zero();
  function pulse() {
    if (reduce || raf || !an) return;
    prevT = performance.now();
    raf = requestAnimationFrame(loop);
  }
  function loop(now) {
    raf = 0;
    // decays follow real time (slow devices draw fewer frames); smoothing uses a capped step
    const dtr = Math.min(1, (now - prevT) / 1000), dt = Math.min(0.1, dtr); prevT = now;
    const audible = target() > 0;
    if (audible) {
      an.getByteFrequencyData(bins);
      let b = 0, m = 0;
      for (let i = 1; i <= 5; i++) b += bins[i];
      for (let i = 6; i <= 46; i++) m += bins[i];
      b /= 5 * 255; m /= 41 * 255;
      slowB = slowB ? slowB + (b - slowB) * Math.min(1, dt * 1.5) : b;
      // a kick: bass clearly above its recent level and rising
      if (b > slowB * 1.08 + 0.02 && b > prevB && now - lastKick > 170) { kick = Math.min(1, 0.55 + (b - slowB) * 4); lastKick = now; }
      prevB = b;
      const loud = Math.min(1, b * 0.6 + m * 0.9);
      breath += (loud - breath) * Math.min(1, dt * (loud > breath ? 6 : 1.5));
    }
    kick *= Math.exp(-dtr / 0.2);
    if (!audible) breath *= Math.exp(-dtr / 0.3);
    window.__bB = kick * 0.12 + breath * 0.04;
    window.__bG = kick * 0.55 + breath * 0.5;
    window.__bF = kick * 0.04;
    if (audible || kick > 0.01 || breath > 0.01) raf = requestAnimationFrame(loop);
    else zero();
  }
})();
