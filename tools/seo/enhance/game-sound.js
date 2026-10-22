// The game's own sound world (point 14). While the game runs the soundtrack is
// out (sound.js) and this takes over: a very low ambient pad, generated live,
// and short soft tones for the game's moments instead of USHA's voice sounds.
// Sound ON: pad + tones. Sound OFF: no pad, tones at 50%, like the rest of the
// site. game.js calls UshaGameSound.fx(name) with the names it used for voices.
(() => {
  const D = document;
  const PAD = 0.05, FX = 0.11, MUTED = 0.5; // the pad sits far below the tones
  const audio = () => window.__ushaAudio || null;
  const isOn = () => !window.UshaSound || window.UshaSound.on;
  let out = null, padBus = null, pad = null, inGame = false, chordT = 0;

  function bus() {
    const A = audio(); if (!A) return null;
    if (!out) {
      out = A.ac.createGain(); out.gain.value = 0;
      const lp = A.ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200;
      out.connect(lp); lp.connect(A.ac.destination);
      padBus = A.ac.createGain(); padBus.gain.value = 0; padBus.connect(out);
    }
    return A.ac;
  }
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  // A minor, slowly: Am – F – C – G, voiced low and open
  const CHORDS = [[45, 52, 57, 60], [41, 48, 57, 60], [48, 55, 60, 64], [43, 50, 59, 62]];

  function startPad() {
    const ac = bus(); if (!ac || pad) return;
    const t = ac.currentTime, voices = [];
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520; lp.Q.value = 0.4;
    const lfo = ac.createOscillator(), lg = ac.createGain();
    lfo.frequency.value = 0.07; lg.gain.value = 180; lfo.connect(lg); lg.connect(lp.frequency); lfo.start(t);
    CHORDS[0].forEach((m, i) => {
      [-4, 4].forEach((cents) => {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = i ? 'sine' : 'triangle'; o.frequency.value = hz(m); o.detune.value = cents;
        g.gain.value = 0.22 / (i + 1);
        o.connect(g); g.connect(lp); o.start(t);
        voices.push({ o, i });
      });
    });
    // a breath of air on top
    const n = ac.sampleRate * 2, nb = ac.createBuffer(1, n, ac.sampleRate), d = nb.getChannelData(0);
    for (let k = 0; k < n; k++) d[k] = Math.random() * 2 - 1;
    const ns = ac.createBufferSource(), bp = ac.createBiquadFilter(), ng = ac.createGain();
    ns.buffer = nb; ns.loop = true; bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 0.7; ng.gain.value = 0.03;
    ns.connect(bp); bp.connect(ng); ng.connect(padBus); ns.start(t);
    lp.connect(padBus);
    pad = { voices, lfo, ns };
    let step = 0;
    chordT = setInterval(() => {
      if (!pad) return;
      step = (step + 1) % CHORDS.length;
      const now = ac.currentTime;
      pad.voices.forEach(({ o, i }) => o.frequency.setTargetAtTime(hz(CHORDS[step][i]), now, 1.6));
    }, 9000);
  }
  function stopPad() {
    if (!pad) return;
    const p = pad; pad = null; clearInterval(chordT);
    setTimeout(() => { [...p.voices.map((v) => v.o), p.lfo, p.ns].forEach((x) => { try { x.stop(); } catch {} }); }, 2600);
  }
  // the level of everything, and of the pad, from the game state and the sound switch
  function apply() {
    const ac = bus(); if (!ac) return;
    const t = ac.currentTime, on = isOn(), live = inGame && !D.hidden;
    out.gain.setTargetAtTime(live ? (on ? 1 : MUTED) : 0, t, 0.25);
    padBus.gain.setTargetAtTime(live && on ? PAD : 0, t, live && on ? 1.5 : 0.5);
    if (live && on) startPad(); else if (!inGame || !on) stopPad();
  }

  // a soft tone: sine with a quick attack and a gentle fall, optionally gliding
  function tone(f, { at = 0, dur = 0.35, vol = 1, to = 0, type = 'sine', fifth = 0 } = {}) {
    const ac = bus(); if (!ac) return;
    const t = ac.currentTime + at, o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(FX * vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.05);
    if (fifth) tone(f * 1.5, { at, dur: dur * 0.9, vol: vol * fifth });
  }
  const PENTA = [69, 72, 74, 76, 79, 81, 84]; // A minor pentatonic
  let run = 0, runT = 0;
  const FXMAP = {
    // collecting climbs the scale while you keep going
    collect() { const now = performance.now(); run = now - runT < 900 ? Math.min(run + 1, PENTA.length - 1) : 0; runT = now; tone(hz(PENTA[run]), { dur: 0.28, vol: 0.8 }); },
    pop() { tone(hz(PENTA[(Math.random() * 3) | 0] - 12), { dur: 0.18, vol: 0.55, to: hz(57) }); },
    tap() { tone(hz(84), { dur: 0.08, vol: 0.3 }); },
    found() { tone(hz(76), { dur: 0.5, vol: 0.7, fifth: 0.4 }); tone(hz(81), { at: 0.09, dur: 0.6, vol: 0.6 }); },
    secret() { [76, 79, 84, 88].forEach((m, i) => tone(hz(m), { at: i * 0.08, dur: 0.7, vol: 0.5 })); },
    happy() { tone(hz(72), { dur: 0.35, vol: 0.6 }); tone(hz(76), { at: 0.1, dur: 0.45, vol: 0.6 }); },
    wee() { tone(hz(69), { dur: 0.4, vol: 0.5, to: hz(81) }); },
    laugh() { [79, 76, 79].forEach((m, i) => tone(hz(m), { at: i * 0.07, dur: 0.2, vol: 0.4 })); },
    wake() { tone(hz(57), { dur: 1.2, vol: 0.5, to: hz(69), fifth: 0.3 }); },
    surprise() { tone(hz(74), { dur: 0.3, vol: 0.5, to: hz(79) }); },
    hm() { tone(hz(62), { dur: 0.3, vol: 0.4 }); },
    // getting hurt: a low soft thud, never a buzzer
    grr() { tone(110, { dur: 0.3, vol: 0.9, to: 70 }); },
    sad() { tone(hz(57), { dur: 0.6, vol: 0.6, to: hz(52) }); },
    sob() { tone(hz(57), { dur: 0.9, vol: 0.6, to: hz(45) }); tone(hz(52), { at: 0.25, dur: 1, vol: 0.4, to: hz(40) }); },
    yawn() { tone(hz(64), { dur: 0.9, vol: 0.35, to: hz(57) }); },
    sleep() { tone(hz(60), { dur: 1.2, vol: 0.3, to: hz(48) }); },
  };

  window.UshaGameSound = {
    fx(name) { if (!inGame || D.hidden) return; const f = FXMAP[name]; if (f) try { f(); } catch {} },
    // read-only status, for checks
    get pad() { return !!pad; },
    get level() { return out ? +out.gain.value.toFixed(2) : 0; },
  };
  addEventListener('usha:game-on', () => { inGame = true; apply(); });
  addEventListener('usha:game-off', () => { inGame = false; apply(); });
  D.addEventListener('visibilitychange', apply);
  // the header sound switch changes UshaSound.on; follow it while the game runs
  let lastOn = null;
  setInterval(() => { const o = isOn(); if (o !== lastOn) { lastOn = o; if (inGame) apply(); } }, 400);
})();
