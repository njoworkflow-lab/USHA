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
  const live = () => H.classList.contains('x-modal-on') && !H.classList.contains('t3-modal-on');
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
