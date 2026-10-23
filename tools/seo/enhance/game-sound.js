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
