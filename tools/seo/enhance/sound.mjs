// The soundtrack replaces the one-tone engine hum (points 13 and 15).
// Sound ON: the track loops at 75%, and taps, hovers and her voice are silent
// so nothing interrupts it. Sound OFF: no music; those effects play at half
// level. While the live chat is open the music fades out and the site's
// effects stop; only the chat's own send and receive sounds play (live.js).
// These swaps patch the main bundle; the player itself is sound.js.
export function applySound(src) {
  const swaps = [
    // the engine hum: its three drone oscillators stay silent
    ['h.gain.value=.05/(l+1),c.connect(h),h.connect(Hn),c.start()', 'h.gain.value=0,c.connect(h),h.connect(Hn),c.start()'],
    // let the soundtrack share the bundle's audio context and effects bus
    ['ln=fe.createGain(),ln.gain.value=0;', 'ln=fe.createGain(),ln.gain.value=0;window.__ushaAudio={ac:fe,fx:ln};'],
    // effects level: 0 in music mode, half when muted, 0 in the live chat (sound.js sets __fxL)
    ['ln.gain.setTargetAtTime(.8,fe.currentTime,.1)', 'ln.gain.setTargetAtTime(window.__fxL??.8,fe.currentTime,.1)'],
    ['ln.gain.setTargetAtTime(.8,fe.currentTime,.2)', 'ln.gain.setTargetAtTime(window.__fxL??.8,fe.currentTime,.2)'],
    // effects run in both modes; their level decides whether they are heard
    ['if(!yt&&!i){yt=!0,', 'if(!yt){yt=!0,'],
    ['Iu()||(Ae.enable(),', '(Ae.enable(),'],
    // the engine tone that rose while holding to wake her: removed in every mode
    ['li.gain.setTargetAtTime(.12,fe.currentTime,.15)', 'li.gain.setTargetAtTime(0,fe.currentTime,.15)'],
    // a fresh setting: an old "off" was about the engine hum, not the music
    ['var Lu="usha-sound"', 'var Lu="usha-music"'],
    // the header button switches the music, not the whole audio engine
    ['e?Ae.enable():Ae.disable(),ue("#snd").classList.toggle("on",e)', 'Ae.enable(),window.UshaSound&&UshaSound.set(e),ue("#snd").classList.toggle("on",e)'],
  ];
  for (const [a, b] of swaps) {
    if (src.includes(b)) continue;
    if (!src.includes(a)) throw new Error(`Bundle changed (sound): ${a.slice(0, 50)}`);
    src = src.replace(a, b);
  }
  return src;
}
