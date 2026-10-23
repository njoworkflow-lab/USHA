// USHA's story: the popup. Loaded on demand by cover.js, together with the
// texts (text.js) and the drawings (art*.js). One chapter at a time, arrows,
// keys and swipe (reversed in Arabic), mini USHA walking along the trail. While
// it is open the soundtrack steps aside ("usha:quiet") and a small toy tune
// plays instead, made live in Web Audio: ukulele, xylophone and a toy ocarina.
(() => {
  const D = document, Hh = D.documentElement;
  const CFG = window.USHA_STORY || {};
  const TX = window.USHA_STORY_TEXT, ART = window.USHA_ART;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = ART.esc;
  const pad = (n) => (L === 'ar' ? n.toLocaleString('ar-EG') : String(n).padStart(2, '0'));

  // ---------- styles ----------
  const F = CFG.fonts || {};
  const CSS = `
@font-face{font-family:'USHA Hand';font-weight:400 700;font-display:swap;src:url(${F.cav}) format('woff2');unicode-range:U+0000-00FF,U+2000-206F,U+2190-21FF,U+20AC,U+2122,U+2212}
@font-face{font-family:'USHA Hand';font-weight:400 700;font-display:swap;src:url(${F.cavc}) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+2116}
@font-face{font-family:'USHA Ruqaa';font-weight:400 700;font-display:swap;src:url(${F.ar}) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+08A0-08FF,U+FB50-FDFF,U+FE70-FEFF}
html.ns-on,html.ns-on body{overflow:hidden!important}
.ns{--hand:'USHA Hand',cursive;--ink:#F3EEE8;--ember:#FF5A1F;--g:#2A2420;position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:20px 24px 18px;background:radial-gradient(1100px 700px at 30% 0,#22140d 0,#0b0a0d 60%) #0b0a0d;color:var(--ink);opacity:0;transition:opacity .45s ease;font:400 16px var(--body,'Onest',system-ui,sans-serif);-webkit-tap-highlight-color:transparent}
.ns[dir=rtl]{--hand:'USHA Ruqaa','USHA Hand',serif}
.ns.in{opacity:1}
.ns *{box-sizing:border-box}
.ns button{font:inherit;color:inherit;cursor:pointer}
.ns-book{position:relative;width:min(1200px,calc(100vw - 48px),calc((100vh - 128px) * 1.7391));aspect-ratio:1200/690;display:grid;grid-template-columns:63.333% 1fr;background:#EFE6D6;border-radius:14px;box-shadow:0 50px 90px rgba(0,0,0,.6),inset 0 0 140px rgba(110,70,30,.22);overflow:hidden;container-type:inline-size;transform:translateY(14px) scale(.985);transition:transform .6s cubic-bezier(.2,.8,.2,1)}
.ns.in .ns-book{transform:none}
.ns-scene{position:relative;aspect-ratio:760/690;overflow:hidden;touch-action:pan-y}
.ns-l{position:absolute;inset:0;width:100%;height:100%;display:block;overflow:visible}
.ns-l:first-child{position:relative;height:auto}
.ns-sp{position:absolute;overflow:visible;will-change:transform;animation-duration:var(--d,6s);animation-delay:var(--dl,0s);animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.ns-n,.ns-hand{font-family:var(--hand)}
.ns-js .ns-sp{animation:none!important}
.ns-cap{display:none;position:absolute;inset-inline-start:10px;bottom:10px;max-width:calc(100% - 20px);align-items:center;gap:8px;padding:7px 12px 7px 8px;background:#FBF7EF;border-radius:10px;box-shadow:0 6px 18px rgba(42,36,32,.25);transform:rotate(-1.2deg);font:700 18px/1.15 var(--hand);color:var(--ember);transition:opacity .35s;pointer-events:none}
.ns[dir=rtl] .ns-cap{transform:rotate(1.2deg)}
.ns-cap svg{flex:none;width:26px;height:22px}
.ns-cap.out{opacity:0}
.a-sway{animation-name:ns-sway;animation-direction:alternate}
.a-drift{animation-name:ns-drift;animation-direction:alternate}
.a-bob{animation-name:ns-bob;animation-direction:alternate}
.a-breathe{animation-name:ns-breathe;animation-direction:alternate}
.a-talk{animation-name:ns-talk;animation-direction:alternate}
.a-flick{animation-name:ns-flick;animation-direction:alternate}
.a-pulse{animation-name:ns-pulse;animation-direction:alternate}
.a-scurry{animation-name:ns-scurry;animation-direction:alternate}
.a-spin{animation-name:ns-spin;animation-timing-function:linear}
.a-ripple{animation-name:ns-ripple;animation-timing-function:ease-out}
.a-steam{animation-name:ns-steam}
.a-peck{animation-name:ns-peck;animation-timing-function:steps(1)}
.a-hop{animation-name:ns-hop}
.a-slide{animation-name:ns-slide}
.a-walk{animation-name:ns-walk;animation-timing-function:linear}
.a-fall{animation-name:ns-fall;animation-timing-function:linear}
.a-tick{animation-name:ns-tick}
.a-scribble{animation-name:ns-scribble;animation-timing-function:linear}
.a-glow{animation-name:ns-glow;animation-direction:alternate}
.ns-tick{animation:ns-tick 14s linear infinite}
@keyframes ns-glow{0%,35%{opacity:.08}65%,100%{opacity:1}}
@keyframes ns-tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.a-swing{animation-name:ns-swing;animation-direction:alternate}
@keyframes ns-sway{from{transform:rotate(calc(var(--a,3deg) * -1))}to{transform:rotate(var(--a,3deg))}}
@keyframes ns-swing{from{transform:rotate(calc(var(--a,3deg) * -1)) translateX(calc(var(--x,0px) * -1))}to{transform:rotate(var(--a,3deg)) translateX(var(--x,0px))}}
@keyframes ns-drift{from{transform:translate(0,0)}to{transform:translate(var(--x,6px),var(--y,0px))}}
@keyframes ns-bob{from{transform:translateY(0)}to{transform:translateY(var(--a,-4px))}}
@keyframes ns-breathe{from{transform:scale(1)}to{transform:scale(var(--a,1.02))}}
@keyframes ns-talk{from{transform:scaleY(1)}to{transform:scaleY(.3)}}
@keyframes ns-flick{from{opacity:1}to{opacity:.12}}
@keyframes ns-pulse{from{opacity:.55;transform:scale(.96)}to{opacity:1;transform:scale(var(--a,1.04))}}
@keyframes ns-scurry{from{transform:translate(0,0) rotate(-3deg)}to{transform:translate(var(--x,-10px),-2px) rotate(3deg)}}
@keyframes ns-spin{to{transform:rotate(360deg)}}
@keyframes ns-ripple{0%{transform:scale(.88);opacity:0}30%{opacity:.8}100%{transform:scale(1.16);opacity:0}}
@keyframes ns-steam{0%{opacity:0;transform:translateY(30px)}40%{opacity:1}100%{opacity:0;transform:translateY(-60px)}}
@keyframes ns-peck{0%{transform:translate(0,0)}25%{transform:translate(3px,1px)}50%{transform:translate(0,0)}75%{transform:translate(-2px,0)}}
@keyframes ns-hop{0%,55%,100%{transform:translateY(0)}20%{transform:translateY(-14px)}40%{transform:translateY(0)}47%{transform:translateY(-4px)}}
@keyframes ns-slide{0%{transform:translate(0,0);opacity:1}70%{transform:translate(var(--x),var(--y));opacity:1}85%{transform:translate(var(--x),var(--y));opacity:0}86%{transform:translate(0,0);opacity:0}100%{transform:translate(0,0);opacity:1}}
@keyframes ns-walk{0%{transform:translateX(0);opacity:0}8%{opacity:1}88%{opacity:1}100%{transform:translateX(var(--x,200px));opacity:0}}
@keyframes ns-fall{0%{transform:translateY(0);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(var(--y,200px));opacity:0}}
@keyframes ns-tick{0%,100%{transform:rotate(0)}20%,40%{transform:rotate(50deg)}60%,80%{transform:rotate(-35deg)}}
@keyframes ns-scribble{0%,50%,100%{transform:translate(0,0)}25%{transform:translate(-6px,2px)}75%{transform:translate(-6px,-2px)}}
.ns-flow{animation:ns-flow 1.2s linear infinite}@keyframes ns-flow{to{stroke-dashoffset:-24}}
.ns-blip{animation:ns-flick .8s infinite alternate}
.ns-look{transition:transform .25s ease-out}
.ns-eyes{transform-box:fill-box;transform-origin:center;animation:ns-blink 4.6s infinite}
@keyframes ns-blink{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.ns-lid{transform-box:fill-box;transform-origin:center top;transform:scaleY(0);animation:ns-lid 5.5s infinite}
@keyframes ns-lid{0%,90%,100%{transform:scaleY(0)}93%,96%{transform:scaleY(3.6)}}
.ns-draw .dr *{stroke-dasharray:1;stroke-dashoffset:1;animation:ns-draw 1.5s cubic-bezier(.5,0,.3,1) forwards}
.ns-draw .ns-n,.ns-draw .ns-ar{opacity:0;animation:ns-in .55s ease forwards;animation-delay:calc(.8s + var(--i,0) * .22s)}
@keyframes ns-draw{to{stroke-dashoffset:0}}
@keyframes ns-in{to{opacity:1}}
.ns-text{position:relative;display:flex;flex-direction:column;justify-content:center;padding:3cqw 3.4cqw 3cqw .6cqw;color:#3E342D;overflow:auto}
.ns[dir=rtl] .ns-text{padding:3cqw .6cqw 3cqw 3.4cqw}
.ns-k{font:500 1.08cqw/1.3 var(--mono,ui-monospace,monospace);letter-spacing:.2em;text-transform:uppercase;color:#8C6E58}
.ns[dir=rtl] .ns-k{font-family:var(--body);letter-spacing:0;font-size:1.25cqw}
.ns-h{margin:1.2cqw 0 0;font:700 3.9cqw/1.02 var(--hand);color:var(--g);letter-spacing:0;text-wrap:balance}
.ns[dir=rtl] .ns-h{font-size:3.3cqw;line-height:1.35}
.ns-u{display:block;width:16cqw;height:1.4cqw;margin:.6cqw 0 1.6cqw;overflow:visible}
.ns-u path{fill:none;stroke:var(--ember);stroke-width:4;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;animation:ns-draw .9s .5s ease forwards}
.ns-p p{margin:0 0 1cqw;font:italic 400 1.5cqw/1.45 'Literata',Georgia,serif;opacity:0;transform:translateY(6px);animation:ns-up .6s ease forwards;animation-delay:calc(.35s + var(--i) * .18s)}
.ns[dir=rtl] .ns-p p{font:400 1.55cqw/1.7 var(--body)}
@keyframes ns-up{to{opacity:1;transform:none}}
.ns-cta{align-self:flex-start;margin-top:1.8cqw;padding:1.1cqw 2.2cqw;border:0;border-radius:999px;background:var(--ember);color:#fff!important;font:600 1.4cqw var(--body,'Onest',sans-serif)!important;box-shadow:0 10px 30px rgba(255,90,31,.35);transition:transform .2s}
.ns-cta:hover{transform:translateY(-2px)}
.ns-bar{display:flex;align-items:center;gap:14px;width:min(1200px,calc(100vw - 48px),calc((100vh - 128px) * 1.7391))}
.ns-trail{position:relative;flex:1;height:40px;margin:0 22px}
.ns-trail>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.ns-dot{position:absolute;top:50%;width:22px;height:22px;margin:-11px 0 0 -11px;border:0;padding:0;background:none}
.ns[dir=rtl] .ns-dot{margin:-11px -11px 0 0}
.ns-dot::after{content:'';position:absolute;inset:7px;border-radius:50%;background:rgba(243,238,232,.4);transition:background .3s,transform .3s}
.ns-dot.seen::after{background:rgba(255,180,138,.85)}
.ns-dot:hover::after{transform:scale(1.4)}
.ns-me{position:absolute;top:50%;width:40px;height:34px;margin:-30px 0 0 -20px;pointer-events:none;transition:inset-inline-start .9s cubic-bezier(.5,0,.3,1)}
.ns[dir=rtl] .ns-me{margin:-30px -20px 0 0}
.ns-me.go svg{animation:ns-hop .45s ease 2}
.ns-ct{font:500 12px var(--mono,ui-monospace,monospace);letter-spacing:.14em;color:rgba(243,238,232,.6);min-width:58px;text-align:center}
.ns-nav{display:flex;gap:10px}
.ns-nav button,.ns-mu,.ns-x{width:48px;height:48px;border-radius:50%;border:1.5px solid rgba(243,238,232,.35);background:none;display:grid;place-items:center;transition:background .2s,border-color .2s,opacity .2s}
.ns-nav button:hover,.ns-mu:hover,.ns-x:hover{border-color:var(--ink)}
.ns-nav .go{background:var(--ember);border-color:var(--ember)}
.ns-nav button:disabled{opacity:.25;cursor:default}
.ns-nav svg,.ns-mu svg,.ns-x svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.ns[dir=rtl] .ns-nav svg{transform:scaleX(-1)}
.ns-mu.off .on,.ns-mu:not(.off) .of{display:none}
.ns-x{position:absolute;top:14px;inset-inline-end:16px;z-index:2;background:rgba(11,10,13,.5)}
.ns button:focus-visible{outline:2px solid var(--ember);outline-offset:3px}
.ns-flip .ns-scene,.ns-flip .ns-tx{animation:ns-turn .5s ease}
@keyframes ns-turn{from{opacity:0;transform:translateX(calc(var(--dir,1) * 18px))}to{opacity:1;transform:none}}
@media (max-width:820px),(max-aspect-ratio:1/1){
  .ns{justify-content:flex-start;padding:60px 12px 12px;gap:12px}
  .ns-book{width:100%;max-width:560px;aspect-ratio:auto;flex:1;min-height:0;grid-template-columns:1fr;grid-template-rows:auto 1fr;overflow:hidden}
  .ns-text{justify-content:flex-start;padding:16px 20px 22px!important;overflow-y:auto}
  .ns-k{font-size:11px}.ns[dir=rtl] .ns-k{font-size:13px}
  .ns-h{font-size:32px;margin-top:8px}.ns[dir=rtl] .ns-h{font-size:28px}
  .ns-u{width:150px;height:12px;margin:6px 0 12px}
  .ns-p p{font-size:16px;margin-bottom:9px}.ns[dir=rtl] .ns-p p{font-size:16px}
  .ns-cta{font-size:15px!important;padding:13px 22px}
  .ns-bar{width:100%;max-width:560px;gap:8px}
  .ns-ct{display:none}
  .ns-dot{width:12px;height:12px;margin:-6px 0 0 -6px}.ns[dir=rtl] .ns-dot{margin:-6px -6px 0 0}.ns-dot::after{inset:4px}
  .ns-scene .ns-n:not(.ns-keep),.ns-scene [marker-end]{display:none}
  .ns-cap{display:flex}
  .ns-nav button,.ns-mu{width:44px;height:44px}
  .ns-x{top:10px}
}
@media (prefers-reduced-motion:reduce){.ns *,.ns *::after{animation:none!important;transition:none!important}.ns-draw .dr *{stroke-dasharray:none}.ns-n,.ns-ar,.ns-p p,.ns-u path{opacity:1!important;stroke-dashoffset:0!important;transform:none!important}}
`;
  const ICON = {
    prev: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    music: '<svg viewBox="0 0 24 24" class="on"><path d="M9 18V6l10-2v12"/><circle cx="7" cy="18" r="2.4"/><circle cx="17" cy="16" r="2.4"/></svg><svg viewBox="0 0 24 24" class="of"><path d="M9 18V6l10-2v12"/><circle cx="7" cy="18" r="2.4"/><circle cx="17" cy="16" r="2.4"/><path d="M3 3l18 18"/></svg>',
  };
  const meSvg = '<svg viewBox="0 0 40 36" aria-hidden="true"><ellipse cx="20" cy="19" rx="18" ry="15" fill="#FFB48A"/><g class="ns-eyes"><ellipse cx="14" cy="19" rx="2.6" ry="3.6" fill="#1b1410"/><ellipse cx="26" cy="19" rx="2.6" ry="3.6" fill="#1b1410"/></g></svg>';

  // ---------- the toy tune ----------
  // C major, 92 bpm, 8 bars: C C Am Am F F G G. Ukulele strums on 1 and 3
  // (Karplus-Strong plucks), a sparse xylophone melody, and every other round
  // a toy ocarina hums along instead. Overall level 30%.
  const Tune = (() => {
    let ac = null, master = null, timer = 0, step = 0, nextT = 0, on = false, round = 0;
    const plucks = new Map();
    const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
    const STEP = 60 / 92 / 2; // eighth notes
    const CH = { C: [67, 60, 64, 72], Am: [69, 60, 64, 69], F: [69, 60, 65, 69], G: [67, 62, 67, 71] };
    const PROG = ['C', 'C', 'Am', 'Am', 'F', 'F', 'G', 'G'];
    const _ = 0;
    const MEL = [76, _, 79, _, 84, _, _, _, _, _, 81, 79, 76, _, _, _, 81, _, 84, _, 88, _, _, _, _, _, 86, 84, 81, _, _, _,
      77, _, 81, _, 84, _, 81, _, 79, _, _, _, 77, _, 76, _, 74, _, 79, _, 83, _, 86, _, 84, _, _, _, _, _, _, _];
    const OCA = [[0, 79, 6], [8, 76, 6], [16, 81, 6], [24, 76, 6], [32, 77, 6], [40, 81, 4], [44, 79, 4], [48, 74, 6], [56, 72, 8]];
    function pluckBuf(m) {
      if (plucks.has(m)) return plucks.get(m);
      const sr = ac.sampleRate, n = Math.floor(sr * 1.4), b = ac.createBuffer(1, n, sr), d = b.getChannelData(0);
      const p = Math.max(2, Math.round(sr / hz(m))), r = new Float32Array(p);
      for (let i = 0; i < p; i++) r[i] = Math.random() * 2 - 1;
      for (let k = 0; k < 3; k++) for (let i = 0; i < p; i++) r[i] = (r[i] + r[(i + 1) % p]) / 2; // a soft, nylon attack
      let j = 0, peak = 0;
      for (let i = 0; i < n; i++) { const a = r[j], nx = (j + 1) % p; d[i] = a; r[j] = 0.993 * 0.5 * (a + r[nx]); j = nx; peak = Math.max(peak, Math.abs(a)); }
      for (let i = 0; i < n; i++) d[i] /= peak || 1;
      for (let i = n - 2000; i < n; i++) d[i] *= (n - i) / 2000;
      plucks.set(m, b);
      return b;
    }
    function uke(t, m, v) {
      const s = ac.createBufferSource(), g = ac.createGain();
      s.buffer = pluckBuf(m); g.gain.value = v;
      s.connect(g); g.connect(bus); s.start(t);
    }
    function xylo(t, m, v = 1) {
      const f = hz(m);
      [[1, 0.26, 1.1], [3.93, 0.06, 0.16], [9.2, 0.02, 0.05]].forEach(([k, a, dcy]) => {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = 'sine'; o.frequency.value = f * k;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(a * v, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + dcy);
        o.connect(g); g.connect(bus); o.start(t); o.stop(t + dcy + 0.05);
      });
    }
    function ocarina(t, m, len) {
      const f = hz(m), end = t + len, o = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain(), lf = ac.createOscillator(), lg = ac.createGain(), lp = ac.createBiquadFilter();
      o.type = 'triangle'; o.frequency.value = f; o2.type = 'sine'; o2.frequency.value = f * 2;
      lf.frequency.value = 5.2; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * 0.007, t + 0.4);
      lf.connect(lg); lg.connect(o.frequency); lg.connect(o2.frequency);
      lp.type = 'lowpass'; lp.frequency.value = 1900;
      const g2 = ac.createGain(); g2.gain.value = 0.12;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.11, t + 0.09); g.gain.setValueAtTime(0.11, end - 0.2); g.gain.exponentialRampToValueAtTime(0.0001, end);
      o.connect(lp); o2.connect(g2); g2.connect(lp); lp.connect(g); g.connect(bus);
      // a little breath
      const nb = ac.createBufferSource(), bp = ac.createBiquadFilter(), ng = ac.createGain();
      nb.buffer = noise(); bp.type = 'bandpass'; bp.frequency.value = f * 2; bp.Q.value = 1.4;
      ng.gain.setValueAtTime(0.0001, t); ng.gain.exponentialRampToValueAtTime(0.02, t + 0.05); ng.gain.exponentialRampToValueAtTime(0.004, t + 0.3); ng.gain.linearRampToValueAtTime(0, end);
      nb.connect(bp); bp.connect(ng); ng.connect(bus);
      [o, o2, lf, nb].forEach((x) => { x.start(t); x.stop(end + 0.05); });
    }
    let nbuf = null;
    function noise() {
      if (nbuf) return nbuf;
      const n = ac.sampleRate * 2; nbuf = ac.createBuffer(1, n, ac.sampleRate);
      const d = nbuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      return nbuf;
    }
    let bus = null;
    function play(i, t) {
      const bar = (i / 8) | 0, inBar = i % 8, chord = CH[PROG[bar]];
      if (inBar === 0 || inBar === 4) chord.forEach((m, k) => uke(t + k * 0.018 + Math.random() * 0.004, m, (inBar ? 0.1 : 0.14) * (k === 3 ? 0.8 : 1)));
      if (inBar === 6 && bar % 2) chord.slice().reverse().forEach((m, k) => uke(t + k * 0.012, m, 0.06)); // a light upstroke
      const alt = round % 2 === 1;
      if (MEL[i] && (!alt || inBar === 0)) xylo(t, MEL[i], alt ? 0.7 : 1);
      if (alt) OCA.forEach(([s, m, len]) => { if (s === i) ocarina(t, m, len * STEP); });
      if (i === 63) xylo(t + STEP * 0.5, 96, 0.35); // a tiny twinkle at the end of each round
    }
    function tick() {
      while (nextT < ac.currentTime + 0.25) {
        play(step, nextT);
        nextT += STEP * (step % 2 ? 0.94 : 1.06); // a gentle swing
        step = (step + 1) % 64; if (!step) round++;
      }
    }
    return {
      start() {
        if (on) return; on = true;
        try {
          const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
          ac = new AC(); master = ac.createGain(); master.gain.value = 0.0001;
          bus = ac.createGain(); bus.gain.value = 1;
          // a small room: one soft echo
          const dl = ac.createDelay(1), fb = ac.createGain(), wet = ac.createGain(), lp = ac.createBiquadFilter();
          dl.delayTime.value = STEP * 3; fb.gain.value = 0.22; wet.gain.value = 0.18; lp.type = 'lowpass'; lp.frequency.value = 2600;
          bus.connect(master); bus.connect(dl); dl.connect(lp); lp.connect(fb); fb.connect(dl); lp.connect(wet); wet.connect(master);
          master.connect(ac.destination);
          master.gain.exponentialRampToValueAtTime(0.3, ac.currentTime + 1.2);
          step = 0; round = 0; nextT = ac.currentTime + 0.35;
          timer = setInterval(tick, 60); tick();
        } catch { on = false; }
      },
      stop() {
        if (!on) return; on = false; clearInterval(timer);
        const a = ac, m = master; ac = null;
        if (!a) return;
        try { m.gain.cancelScheduledValues(a.currentTime); m.gain.setValueAtTime(m.gain.value, a.currentTime); m.gain.linearRampToValueAtTime(0, a.currentTime + 0.4); } catch {}
        setTimeout(() => a.close().catch(() => {}), 600);
        plucks.clear(); nbuf = null;
      },
      pause(p) { if (ac) (p ? ac.suspend() : ac.resume()).catch(() => {}); },
      get on() { return on; },
    };
  })();

  // ---------- motion ----------
  // Every moving layer runs on the Web Animations API. The values come from the
  // layer's own settings (--d duration, --dl delay, --a amount, --x/--y distance
  // in scene units) and distances scale with the drawing, so a pigeon walks the
  // same stretch of table on a phone as on a big screen. (Safari on the Mac does
  // not apply CSS variables inside keyframes, so CSS alone is not enough.)
  const can = typeof Element !== 'undefined' && !!Element.prototype.animate;
  const TF = (s) => ({ transform: s });
  const MOTION = {
    sway: (v) => [[TF(`rotate(${-v.a(3)}deg)`), TF(`rotate(${v.a(3)}deg)`)], 1],
    swing: (v) => [[TF(`rotate(${-v.a(3)}deg) translateX(${-v.x(0)}px)`), TF(`rotate(${v.a(3)}deg) translateX(${v.x(0)}px)`)], 1],
    drift: (v) => [[TF('translate(0px,0px)'), TF(`translate(${v.x(6)}px,${v.y(0)}px)`)], 1],
    bob: (v) => [[TF('translateY(0px)'), TF(`translateY(${v.px(-4)}px)`)], 1],
    breathe: (v) => [[TF('scale(1)'), TF(`scale(${v.a(1.02)})`)], 1],
    talk: () => [[TF('scaleY(1)'), TF('scaleY(.3)')], 1],
    flick: () => [[{ opacity: 1 }, { opacity: 0.12 }], 1],
    pulse: (v) => [[{ opacity: 0.55, transform: 'scale(.96)' }, { opacity: 1, transform: `scale(${v.a(1.04)})` }], 1],
    glow: () => [[{ opacity: 0.08, offset: 0 }, { opacity: 0.08, offset: 0.35 }, { opacity: 1, offset: 0.65 }, { opacity: 1, offset: 1 }], 1],
    scurry: (v) => [[TF('translate(0px,0px) rotate(-3deg)'), TF(`translate(${v.x(-10)}px,-2px) rotate(3deg)`)], 1],
    spin: () => [[TF('rotate(0deg)'), TF('rotate(360deg)')], 0, 'linear'],
    ripple: () => [[{ transform: 'scale(.88)', opacity: 0 }, { opacity: 0.8, offset: 0.3 }, { transform: 'scale(1.16)', opacity: 0 }], 0, 'ease-out'],
    steam: () => [[{ opacity: 0, transform: 'translateY(30px)' }, { opacity: 1, offset: 0.4 }, { opacity: 0, transform: 'translateY(-60px)' }], 0],
    peck: () => [[{ transform: 'translate(0px,0px)', easing: 'steps(1,end)' }, { transform: 'translate(3px,1px)', offset: 0.25, easing: 'steps(1,end)' }, { transform: 'translate(0px,0px)', offset: 0.5, easing: 'steps(1,end)' }, { transform: 'translate(-2px,0px)', offset: 0.75, easing: 'steps(1,end)' }, { transform: 'translate(0px,0px)' }], 0, 'linear'],
    hop: () => [[TF('translateY(0px)'), { transform: 'translateY(-14px)', offset: 0.2 }, { transform: 'translateY(0px)', offset: 0.4 }, { transform: 'translateY(-4px)', offset: 0.47 }, { transform: 'translateY(0px)', offset: 0.55 }, TF('translateY(0px)')], 0],
    slide: (v) => [[{ transform: 'translate(0px,0px)', opacity: 1 }, { transform: `translate(${v.x(0)}px,${v.y(0)}px)`, opacity: 1, offset: 0.7 }, { transform: `translate(${v.x(0)}px,${v.y(0)}px)`, opacity: 0, offset: 0.85 }, { transform: 'translate(0px,0px)', opacity: 0, offset: 0.86 }, { transform: 'translate(0px,0px)', opacity: 1 }], 0],
    // walkers go there and come back, turning round, instead of vanishing into nothing
    walk: (v) => [[TF('translateX(0px) scaleX(1)'), { transform: `translateX(${v.x(200)}px) scaleX(1)`, offset: 0.46 }, { transform: `translateX(${v.x(200)}px) scaleX(-1)`, offset: 0.5 }, { transform: 'translateX(0px) scaleX(-1)', offset: 0.96 }, TF('translateX(0px) scaleX(1)')], 0, 'linear'],
    fall: (v) => [[{ transform: 'translateY(0px)', opacity: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 1, offset: 0.9 }, { transform: `translateY(${v.y(200)}px)`, opacity: 0 }], 0, 'linear'],
    tick: () => [[TF('rotate(0deg)'), { transform: 'rotate(50deg)', offset: 0.2 }, { transform: 'rotate(50deg)', offset: 0.4 }, { transform: 'rotate(-35deg)', offset: 0.6 }, { transform: 'rotate(-35deg)', offset: 0.8 }, TF('rotate(0deg)')], 0],
    scribble: () => [[TF('translate(0px,0px)'), { transform: 'translate(-6px,2px)', offset: 0.25 }, { transform: 'translate(0px,0px)', offset: 0.5 }, { transform: 'translate(-6px,-2px)', offset: 0.75 }, TF('translate(0px,0px)')], 0, 'linear'],
  };
  function runMotion(scene) {
    if (!can) return;
    const k = scene.getBoundingClientRect().width / 760 || 1; // scene units → pixels
    scene.querySelectorAll('.ns-sp').forEach((el) => {
      el.getAnimations().forEach((a) => a.cancel());
      const name = [...el.classList].find((c) => c.startsWith('a-')), m = name && MOTION[name.slice(2)];
      if (!m) return;
      const cs = el.style, get = (p) => cs.getPropertyValue(p).trim();
      const v = {
        a: (d) => { const n = parseFloat(get('--a')); return isNaN(n) ? d : n; },
        px: (d) => { const n = parseFloat(get('--a')); return (isNaN(n) ? d : n) * k; },
        x: (d) => { const n = parseFloat(get('--x')); return (isNaN(n) ? d : n) * k; },
        y: (d) => { const n = parseFloat(get('--y')); return (isNaN(n) ? d : n) * k; },
      };
      const [frames, alt, easing] = m(v);
      const d = (parseFloat(get('--d')) || 6) * 1000 * (reduce ? 1.6 : 1), dl = (parseFloat(get('--dl')) || 0) * 1000;
      try { el.animate(frames, { duration: d, delay: dl, iterations: Infinity, direction: alt ? 'alternate' : 'normal', easing: easing || 'ease-in-out' }); } catch {}
    });
  }

  // ---------- the popup ----------
  let root = null, cur = 0, L = 'en', T = null, lastFocus = null, seen = new Set(), musicOn = true;
  const N = () => T.ch.length;
  const isRtl = () => L === 'ar';

  function build() {
    if (!D.getElementById('ns-css')) { const s = D.createElement('style'); s.id = 'ns-css'; s.textContent = CSS; D.head.appendChild(s); }
    root = D.createElement('div');
    root.className = 'ns';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', T.cover.h.replace(/<[^>]+>/g, ''));
    root.setAttribute('translate', 'no');
    root.dir = isRtl() ? 'rtl' : 'ltr'; root.lang = L;
    if (can) root.classList.add('ns-js');
    const dots = T.ch.map((c, i) => `<button type="button" class="ns-dot" data-i="${i}" style="inset-inline-start:${(i / (N() - 1) * 100).toFixed(3)}%" aria-label="${esc(T.ui.chapter)} ${i + 1}: ${esc(c.k)}"></button>`).join('');
    root.innerHTML = `${ART.defs}
<button type="button" class="ns-x" aria-label="${esc(T.ui.close)}">${ICON.close}</button>
<div class="ns-book"><div class="ns-scene" aria-hidden="true"></div><div class="ns-text" aria-live="polite"><div class="ns-tx"></div></div></div>
<div class="ns-bar">
  <div class="ns-trail"><svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 22 C120 10 240 32 360 20 S620 12 760 24 S920 30 1000 20" fill="none" stroke="rgba(243,238,232,.28)" stroke-width="1.5" stroke-dasharray="1 8" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>${dots}<span class="ns-me">${meSvg}</span></div>
  <span class="ns-ct" aria-hidden="true"></span>
  <button type="button" class="ns-mu" aria-label="${esc(T.ui.music)}" aria-pressed="true">${ICON.music}</button>
  <div class="ns-nav"><button type="button" class="ns-prev" aria-label="${esc(T.ui.prev)}">${ICON.prev}</button><button type="button" class="ns-next go" aria-label="${esc(T.ui.next)}">${ICON.next}</button></div>
</div>`;
    D.body.appendChild(root);
    const q = (s) => root.querySelector(s);
    q('.ns-x').addEventListener('click', () => close());
    q('.ns-prev').addEventListener('click', () => go(cur - 1));
    q('.ns-next').addEventListener('click', () => go(cur + 1));
    root.querySelectorAll('.ns-dot').forEach((b) => b.addEventListener('click', () => go(+b.dataset.i)));
    q('.ns-mu').addEventListener('click', () => setMusic(!musicOn));
    // swipe on the book
    let sx = null, sy = 0;
    const book = q('.ns-book');
    book.addEventListener('touchstart', (e) => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; }, { passive: true });
    book.addEventListener('touchend', (e) => {
      if (sx == null) return;
      const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy; sx = null;
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.3) return;
      go(cur + ((dx < 0) !== isRtl() ? 1 : -1));
    }, { passive: true });
    // on the last page her eyes follow you
    root.addEventListener('pointermove', (e) => {
      const g = root.querySelector('.ns-look'); if (!g || reduce) return;
      const r = q('.ns-scene').getBoundingClientRect(), fx = r.left + r.width * 300 / 760, fy = r.top + r.height * 360 / 690;
      const dx = e.clientX - fx, dy = e.clientY - fy, d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 300);
      g.style.transform = `translate(${(dx / d * 14 * k).toFixed(1)}px,${(dy / d * 10 * k).toFixed(1)}px)`;
    });
  }
  function onKey(e) {
    if (!root) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); go(cur + ((e.key === 'ArrowRight') !== isRtl() ? 1 : -1)); return; }
    if (e.key === 'Tab') { // keep focus inside
      const f = [...root.querySelectorAll('button:not(:disabled)')].filter((b) => b.offsetParent);
      if (!f.length) return;
      const i = f.indexOf(D.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  }
  function setMusic(v) {
    musicOn = v;
    const b = root && root.querySelector('.ns-mu');
    if (b) { b.classList.toggle('off', !v); b.setAttribute('aria-pressed', String(v)); }
    if (v) Tune.start(); else Tune.stop();
  }

  function render(dir) {
    const c = T.ch[cur], q = (s) => root.querySelector(s);
    ART.setLang(L);
    const scene = q('.ns-scene'), tx = q('.ns-tx');
    scene.innerHTML = (ART.by[c.id] || (() => ''))(c);
    runMotion(scene);
    // on phones her notes stay on the drawing: one at a time, in a small handwritten caption
    clearInterval(render.n);
    const notes = scene.querySelector('.ns-n:not(.ns-keep)') ? c.n || [] : [];
    if (notes.length) {
      scene.insertAdjacentHTML('beforeend', `<div class="ns-cap" aria-hidden="true">${meSvg}<span></span></div>`);
      const cap = scene.querySelector('.ns-cap'), span = cap.querySelector('span');
      let ni = 0; span.textContent = notes[0];
      render.n = setInterval(() => { cap.classList.add('out'); setTimeout(() => { ni = (ni + 1) % notes.length; span.textContent = notes[ni]; cap.classList.remove('out'); }, 350); }, 3600);
    }
    // lines draw themselves in; then her notes and arrows appear one by one
    scene.querySelectorAll('.dr path,.dr ellipse,.dr circle,.dr rect,.dr line,.dr polyline,.dr polygon').forEach((p) => p.setAttribute('pathLength', '1'));
    scene.querySelectorAll('.ns-n,[marker-end]').forEach((n, i) => { n.style.setProperty('--i', i); if (n.tagName === 'path') n.classList.add('ns-ar'); });
    if (!reduce) { scene.classList.add('ns-draw'); clearTimeout(render.t); render.t = setTimeout(() => scene.classList.remove('ns-draw'), 1600 + 400 + scene.querySelectorAll('.ns-n,[marker-end]').length * 220); }
    // a countdown that really counts
    clearInterval(render.c);
    const fmt = (n) => n.toLocaleString(L === 'ar' ? 'ar-EG' : L === 'ru' ? 'ru-RU' : 'en-US');
    const cnt = scene.querySelector('[data-count]');
    if (cnt) { let n = +cnt.dataset.count; cnt.textContent = fmt(n); render.c = setInterval(() => { cnt.textContent = fmt(--n); }, 1000); }
    const last = cur === N() - 1;
    tx.innerHTML = `<div class="ns-k">${esc(T.ui.chapter)} ${pad(cur + 1)} ${esc(T.ui.of)} ${pad(N())} · ${esc(c.k)}</div>
<h3 class="ns-h">${esc(c.h)}</h3>
<svg class="ns-u" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M2 10 C60 2 120 16 196 6"/></svg>
<div class="ns-p">${c.p.map((p, i) => `<p style="--i:${i}">${esc(p)}</p>`).join('')}</div>
${last ? `<button type="button" class="ns-cta">${esc(T.ui.ask)}</button>` : ''}`;
    // open the live chat first, so the soundtrack doesn't swell back in between
    if (last) tx.querySelector('.ns-cta').addEventListener('click', () => { dispatchEvent(new CustomEvent('usha:talk')); close(true); });
    q('.ns-text').scrollTop = 0;
    seen.add(cur);
    root.querySelectorAll('.ns-dot').forEach((b, i) => { b.classList.toggle('seen', seen.has(i)); if (i === cur) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
    const me = q('.ns-me');
    me.style.insetInlineStart = (cur / (N() - 1) * 100).toFixed(3) + '%';
    me.classList.remove('go'); void me.offsetWidth; if (dir) me.classList.add('go');
    q('.ns-ct').textContent = `${pad(cur + 1)} / ${pad(N())}`;
    q('.ns-prev').disabled = cur === 0;
    q('.ns-next').disabled = last;
    const book = q('.ns-book');
    if (dir && !reduce) { book.style.setProperty('--dir', dir * (isRtl() ? -1 : 1)); book.classList.remove('ns-flip'); void book.offsetWidth; book.classList.add('ns-flip'); }
  }
  function go(i) {
    if (!root || i < 0 || i >= N() || i === cur) return;
    const dir = i > cur ? 1 : -1; cur = i; render(dir);
  }
  function onVis() { Tune.pause(D.hidden); }
  let rsz = 0;
  function onResize() { clearTimeout(rsz); rsz = setTimeout(() => { if (root) runMotion(root.querySelector('.ns-scene')); }, 200); }

  function open(lang) {
    if (root) return;
    L = TX[lang] ? lang : 'en'; T = TX[L];
    lastFocus = D.activeElement;
    cur = 0; seen = new Set();
    build(); render(0);
    Hh.classList.add('ns-on');
    requestAnimationFrame(() => requestAnimationFrame(() => root && root.classList.add('in')));
    dispatchEvent(new CustomEvent('usha:quiet'));
    let pref = true; try { pref = localStorage.getItem('usha-music') !== 'off'; } catch {}
    setMusic(pref);
    D.addEventListener('visibilitychange', onVis);
    // keys work wherever the focus is while the story is open
    D.addEventListener('keydown', onKey, true);
    addEventListener('resize', onResize);
    root.querySelector('.ns-next').focus({ preventScroll: true });
  }
  function close(toChat) {
    if (!root) return;
    const r = root; root = null;
    clearInterval(render.c); clearInterval(render.n);
    Tune.stop();
    D.removeEventListener('visibilitychange', onVis);
    D.removeEventListener('keydown', onKey, true);
    removeEventListener('resize', onResize);
    r.classList.remove('in');
    Hh.classList.remove('ns-on');
    dispatchEvent(new CustomEvent('usha:resume'));
    setTimeout(() => r.remove(), 460);
    if (!toChat && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  window.UshaStory = { open, close, go: (i) => go(i), get open_() { return !!root; }, get chapter() { return cur; }, get music() { return Tune.on; } };
})();
