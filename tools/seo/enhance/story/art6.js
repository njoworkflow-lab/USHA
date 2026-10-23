// USHA's story: a second layer of small acted moments, one or a few per
// chapter, drawn on top of each scene (below her notes). Each one acts out a
// beat of the chapter: words flying into the jar, a die landing, the "so
// what?" bulb flickering, sheets landing on Jojo's pile, a gavel's bang.
(() => {
  const A = window.USHA_ART;
  const G = '#2A2420', E = '#FF5A1F';
  const X = (A.extra = A.extra || {});
  const T3 = (en, ru, ar) => (A.lang() === 'ar' ? ar : A.lang() === 'ru' ? ru : en);
  const word = (x, y, t, o = {}) => `<text x="${x}" y="${y}" class="ns-hand" font-size="${o.s || 18}" font-weight="700" fill="${o.c || E}" text-anchor="middle"${A.dir()}>${A.esc(t)}</text>`;
  const bubble = (x, y, t, w = 110) => `<g transform="translate(${x} ${y})"><path d="M${-w / 2} -16 H${w / 2} Q${w / 2 + 8} -16 ${w / 2 + 8} -8 V8 Q${w / 2 + 8} 16 ${w / 2} 16 H6 L-4 28 L-6 16 H${-w / 2} Q${-w / 2 - 8} 16 ${-w / 2 - 8} 8 V-8 Q${-w / 2 - 8} -16 ${-w / 2} -16 Z" fill="#fff" stroke="${G}" stroke-width="1.8"/>${word(0, 6, t, { c: G, s: 17 })}</g>`;

  // 1 · the cup: his slide gets worse, the spoon splashes
  X.cup = () => A.sp([428, 236, 40, 40], 'a-pop', word(448, 262, '?!', { s: 26 }), null, '--d:5s;--dl:-1s')
    + [0, 1, 2].map((i) => A.sp([296 + i * 12, 352, 14, 14], 'a-pop', `<circle cx="${303 + i * 12}" cy="${358 - (i % 2) * 6}" r="3" fill="#E7C9A6" stroke="${G}" stroke-width=".8"/>`, null, `--d:3.2s;--dl:${-i * 0.15}s`)).join('');

  // 2 · ten years: another die lands on the board
  X.dice = () => A.sp([392, 252, 76, 76], 'a-stamp', `<g transform="translate(430 290) rotate(-18)"><rect x="-24" y="-24" width="48" height="48" rx="8" fill="#FBF7EF" stroke="${G}" stroke-width="2.4"/>${word(0, 9, '?', { s: 30, c: G })}</g>`, null, '--d:5.5s');

  // 3 · locked away: something bites
  X.xray = () => [0, 1].map((i) => A.sp([570, 460, 54, 24], 'a-ripple', `<ellipse cx="597" cy="472" rx="20" ry="5" fill="none" stroke="#fff" stroke-width="1.6"/>`, [597, 472], `--d:2.2s;--dl:${-i * 1.1}s`)).join('');

  // 4 · the listening: their words fly into the jar
  X.jar = () => [['CPM', 160, 346, 210, 140], ['ROAS', 170, 330, 190, 170], ['%', 594, 356, -210, 140], [T3('salt', 'соль', 'ملح'), 600, 340, -200, 170]]
    .map(([t, x, y, dx, dy], i) => A.sp([x - 30, y - 20, 60, 30], 'a-slide', word(x, y, t, { s: 16, c: G }), null, `--d:3.4s;--dl:${-i * 0.85}s;--x:${dx}px;--y:${dy}px`)).join('');

  // 5 · the chef: the steak, still sizzling
  X.chef = () => [0, 1, 2].map((i) => A.sp([316 + i * 60, 440, 30, 80], 'a-steam', `<path d="M${330 + i * 60} 512 c-8 -16 8 -24 0 -40 c-6 -12 6 -18 2 -28" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" filter="url(#ns-b4)"/>`, null, `--d:4s;--dl:${-i * 1.3}s`)).join('');

  // 6 · it depends: she says it again
  X.pharma = (c) => A.sp([580, 40, 150, 70], 'a-pop', bubble(650, 66, (A.quote(c.h) || '?') + A.qm(), 120), null, '--d:4s;--dl:-.5s');

  // 8 · growing up: every day she was lights up, one after the other
  X.door = () => [[262, 0.9, 586], [300, 1.2, 528], [346, 1.5, 452], [394, 1.9, 352]].map(([x, s, top], i) => {
    const cy = top + 18 * s;
    return A.sp([x - 24 * s, cy - 20 * s, 48 * s, 40 * s], 'a-glow', `<ellipse cx="${x}" cy="${cy}" rx="${22 * s}" ry="${18 * s}" fill="#FFB48A" opacity=".55"/>`, null, `--d:2.4s;--dl:${-2.4 + i * 0.6}s`);
  }).join('');

  // 9 · the evidence board: the strings carry the blame along
  X.board = () => A.sp([126, 116, 500, 290], '', `<g fill="none" stroke="#FFE2A0" stroke-width="2.4" stroke-linecap="round"><path class="ns-flow" d="M150 128 C260 150 300 140 400 122 C480 130 540 150 610 168" stroke-dasharray="2 14"/><path class="ns-flow" d="M130 398 C250 360 300 300 400 122" stroke-dasharray="2 14"/><path class="ns-flow" d="M560 372 C500 330 450 300 400 122" stroke-dasharray="2 14"/></g>`);

  // 11 · Jojo: layout after layout lands on the pile
  X.jojo = () => [0, 1].map((i) => A.sp([580, 530, 90, 64], 'a-slide', `<g transform="translate(624 560) rotate(${i ? 8 : -6})"><rect x="-40" y="-26" width="80" height="52" fill="#FBF7EF" stroke="${G}" stroke-width="1.6"/><rect x="-32" y="-18" width="26" height="22" fill="#E8D27A" opacity=".7"/><path d="M2 -14 h28 M2 -6 h22" stroke="${G}" stroke-width="1.4" opacity=".6"/></g>`, null, `--d:3s;--dl:${-i * 1.5}s;--x:-430px;--y:40px`)).join('');

  // 12 · Alfons: still deciding
  X.alfons = () => A.sp([450, 286, 50, 40], 'a-pop', word(474, 314, '?!', { s: 28 }), null, '--d:3.6s');

  // 13 · Darina: the typo, found again
  X.darina = () => A.sp([128, 214, 60, 60], 'a-pulse', `<circle cx="158" cy="244" r="20" fill="none" stroke="${E}" stroke-width="3"/>`, null, '--d:.8s;--a:1.3');

  // 14 · the strategist: the idea's light is failing
  X.strategist = () => A.sp([210, 330, 100, 100], 'a-flick', `<circle cx="260" cy="380" r="44" fill="#FFF2B8" opacity=".55" filter="url(#ns-b8)"/>`, null, '--d:.18s');

  // 15 · the media buyer: the price jumps
  X.media = () => A.sp([590, 150, 120, 40], 'a-pop', `<rect x="606" y="156" width="88" height="26" rx="4" fill="#C8402F"/>${word(650, 175, 'CPC ↑', { s: 16, c: '#fff' })}`, null, '--d:4.5s;--dl:-2s');

  // 16 · the engineers: the quick fix trembles
  X.engineers = () => A.sp([270, 316, 60, 50], 'a-shake', `<g transform="translate(300 340)"><rect x="-26" y="-14" width="52" height="28" fill="#C5C9CE" transform="rotate(8)" stroke="${G}" stroke-width="1"/></g>`, [300, 340], '--d:2.4s');

  // 17 · my people: the arguments, one by one
  X.people = () => A.sp([130, 270, 130, 50], 'a-pop', bubble(196, 294, T3('Tuesday?', 'вторник?', 'الثلاثاء؟'), 92), null, '--d:5s;--dl:-1s')
    + A.sp([410, 432, 130, 50], 'a-pop', bubble(476, 456, T3('lunch?', 'обед?', 'الغدا؟'), 80), null, '--d:5s;--dl:-3.5s');

  // 19 · the Gulf: the imagined Lamborghini goes by, fast
  X.gulf = () => A.sp([200, 214, 70, 40], 'a-pop', `<g stroke="${E}" stroke-width="2" stroke-linecap="round" transform="rotate(-5 230 190)"><path d="M210 230 h30 M204 240 h36 M214 250 h26"/></g>`, null, '--d:1.6s');

  // 21 · Jeddah: premium sparkles on an impossible object
  X.jeddah = () => [[300, 222], [470, 312], [220, 392]].map(([x, y], i) => A.sp([x - 14, y - 14, 28, 28], 'a-pop', `<path d="M${x} ${y - 10} L${x + 3} ${y - 3} L${x + 10} ${y} L${x + 3} ${y + 3} L${x} ${y + 10} L${x - 3} ${y + 3} L${x - 10} ${y} L${x - 3} ${y - 3} Z" fill="#E0A73A"/>`, null, `--d:2.4s;--dl:${-i * 0.8}s`)).join('');

  // 22 · St Petersburg: photo number forty-eight, coming
  X.kazan = () => A.sp([480, 560, 80, 40], 'a-pop', word(520, 586, '#48?', { s: 22 }), null, '--d:2.6s');

  // 23 · the court: the bang
  X.court = () => A.sp([480, 84, 80, 70], 'a-pop', `<g stroke="${G}" stroke-width="2.4" stroke-linecap="round"><path d="M508 96 l-8 -10 M522 92 l2 -14 M536 98 l10 -8 M540 112 l14 0"/></g>`, null, '--d:1.4s');

  // 24 · round 9: the bell
  X.ring = () => A.sp([150, 70, 110, 50], 'a-pop', word(205, 104, T3('DING!', 'ДЗЫНЬ!', 'تِن!'), { s: 28 }), null, '--d:3s');
})();
