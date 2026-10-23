// USHA's story: drawings for the three experts and her two worst days.
(() => {
  const A = window.USHA_ART;
  const G = '#2A2420', E = '#FF5A1F', P = '#FFB48A';
  const N = (c, i) => (c.n || [])[i];
  // the words inside the first quotation marks of a line
  A.quote = (s) => ((String(s || '').match(/[“«"]([^”»"]+)[”»"]/) || [])[1] || '').replace(/[.!?؟]$/, '');
  A.qm = () => (A.dir() ? '؟' : '?');

  // ================= Expert no. 37 — the chef, seen from the plate =================
  A.by.chef = (c) => A.base(`
<rect width="760" height="420" fill="url(#ns-grid)" opacity=".35"/>
<rect width="760" height="420" fill="#E3E8E6" opacity=".35"/>
<!-- the wall clock: minute 41 -->
<g transform="translate(680 84)"><circle r="44" fill="#FBF7EF"/><path d="M0 0 V-38 A38 38 0 1 1 -33 19 Z" fill="${E}" opacity=".25"/>${A.ink('<circle r="44"/><path d="M0 0 V-32 M0 0 L-28 16"/>', 2.6)}</g>
<!-- him, from below: jacket, chin, the hat of authority -->
<path d="M90 430 C120 330 220 290 380 290 C540 290 640 330 670 430 Z" fill="#FBFCFD"/>
<path d="M90 430 C120 330 220 290 380 290 C540 290 640 330 670 430 Z" fill="url(#ns-hatch2)" opacity=".18"/>
${A.ink('<path d="M90 430 C120 330 220 290 380 290 C540 290 640 330 670 430"/><path d="M340 296 L380 360 L420 296 M300 330 L330 430 M460 330 L430 430"/>', 3)}
<g fill="#FBFCFD" stroke="${G}" stroke-width="2">${[0, 1, 2].map((i) => `<circle cx="${352}" cy="${372 + i * 22}" r="6"/><circle cx="${408}" cy="${372 + i * 22}" r="6"/>`).join('')}</g>
<ellipse cx="380" cy="214" rx="96" ry="86" fill="#E7C2A3"/><ellipse cx="380" cy="214" rx="96" ry="86" fill="url(#ns-hatch)" opacity=".32"/>
${A.ink('<ellipse cx="380" cy="214" rx="96" ry="86"/><path d="M330 250 q50 40 100 0" stroke-width="2.4"/><ellipse cx="364" cy="232" rx="7" ry="4" fill="#2A2420"/><ellipse cx="396" cy="232" rx="7" ry="4" fill="#2A2420"/><path d="M322 212 c20 -10 40 -8 58 4 c18 -12 38 -14 58 -4" stroke-width="5"/><path d="M336 168 q16 -8 30 0 M394 168 q16 -8 30 0" stroke-width="3"/>', 3)}
<path d="M276 140 C250 60 300 10 340 40 C350 0 410 0 420 40 C460 10 510 60 484 140 Z" fill="#FBFCFD"/>
${A.ink('<path d="M276 140 C250 60 300 10 340 40 C350 0 410 0 420 40 C460 10 510 60 484 140 Z M284 120 H476"/>', 3)}
<!-- the plate, and us on it -->
<ellipse cx="380" cy="640" rx="420" ry="140" fill="#FBFBF8"/>
<ellipse cx="380" cy="650" rx="330" ry="96" fill="#F1EFEA"/>
${A.ink('<ellipse cx="380" cy="640" rx="420" ry="140"/><ellipse cx="380" cy="650" rx="330" ry="96" stroke-width="1.6"/>', 3)}
<path d="M250 600 C260 540 360 520 460 534 C540 546 560 600 500 624 C420 650 290 650 250 600 Z" fill="#8B4A32"/>
<path d="M250 600 C260 540 360 520 460 534 C540 546 560 600 500 624 C420 650 290 650 250 600 Z" fill="url(#ns-hatch)" opacity=".5"/>
<g stroke="#3A1E14" stroke-width="7" stroke-linecap="round" opacity=".8"><path d="M300 560 L340 620 M360 548 L400 624 M420 544 L460 616"/></g>
${A.ink('<path d="M250 600 C260 540 360 520 460 534 C540 546 560 600 500 624 C420 650 290 650 250 600 Z"/>', 2.6)}
<g fill="#E6C27A" opacity=".7"><circle cx="600" cy="640" r="6"/><circle cx="618" cy="656" r="4"/><circle cx="170" cy="630" r="5"/></g>`, true)
  // the spoon, pointing at us. accusingly.
  + A.sp([440, 250, 230, 230], 'a-sway', `<path d="M650 300 C600 330 540 380 500 420" stroke="#FBFCFD" stroke-width="38" stroke-linecap="round" fill="none"/>${A.ink('<path d="M664 286 C614 316 556 366 512 410 M634 312 C590 340 534 388 494 428"/>', 2.6)}<path d="M500 420 L470 450" stroke="#B9BDC3" stroke-width="6" stroke-linecap="round"/><ellipse cx="460" cy="462" rx="20" ry="13" transform="rotate(-45 460 462)" fill="#D6DADF" stroke="${G}" stroke-width="2.4"/>`, [650, 300], '--d:2.4s;--a:4deg')
  // the salt. always the salt.
  + A.sp([80, 60, 140, 120], 'a-sway', `<g transform="rotate(150 140 120)"><rect x="116" y="80" width="48" height="70" rx="10" fill="#FBF7EF"/><path d="M116 92 h48" stroke="${G}" stroke-width="2"/>${A.ink('<rect x="116" y="80" width="48" height="70" rx="10"/>', 2.4)}<g fill="${G}"><circle cx="130" cy="86" r="2"/><circle cx="140" cy="86" r="2"/><circle cx="150" cy="86" r="2"/></g><text x="140" y="130" class="ns-hand" font-size="16" text-anchor="middle" fill="${G}" transform="rotate(180 140 124)">S</text></g>`, [140, 100], '--d:1.4s;--a:6deg')
  + [[140, 0], [160, 1], [126, 2], [178, 3], [150, 4]].map(([x, i]) => A.sp([x - 4, 180, 8, 8], 'a-fall', `<rect x="${x - 2}" y="182" width="4" height="4" fill="#fff" stroke="${G}" stroke-width=".8"/>`, null, `--d:${2.2 + i * .3}s;--dl:${-i * .5}s;--y:${380 + i * 20}px`)).join('')
  // the sizzle, priced separately
  + A.sp([290, 470, 200, 70], 'a-flick', `<g fill="none" stroke="${G}" stroke-width="2.4" stroke-linecap="round"><path d="M310 520 c-6 -12 6 -18 0 -30 M350 512 c-6 -12 6 -18 0 -30 M390 508 c-6 -12 6 -18 0 -30 M430 512 c-6 -12 6 -18 0 -30 M470 520 c-6 -12 6 -18 0 -30"/></g>`, null, '--d:.5s')
  // me on the rim, taking greasy notes
  + A.sp([600, 560, 120, 90], 'a-bob', `${A.me(650, 610, 1.4)}<g transform="translate(688 612) rotate(10)"><rect x="-12" y="-16" width="24" height="30" fill="#FBF7EF" stroke="${G}" stroke-width="1.6"/><circle cx="2" cy="2" r="5" fill="#E6C27A" opacity=".7"/></g>`, null, '--d:2.6s;--a:-3px')
  + A.base(`
  ${A.note(N(c, 0), 590, 300, 166, { s: 22 })}
  ${A.arrow('M600 360 C560 400 520 440 488 456')}
  ${A.note(N(c, 1), 14, 440, 220, { s: 22 })}
  ${A.arrow('M150 470 C200 480 250 490 290 498')}
  ${A.note(N(c, 2), 520, 180, 230, { s: 22 })}
  ${A.arrow('M650 170 C660 156 668 146 672 136')}
  ${A.note(N(c, 3), 470, 680, 280, { s: 20, c: 'g' })}`);

  // ================= Expert no. 88 — sixty-three forks of "it depends" =================
  A.by.pharma = (c) => {
    const word = A.quote(c.h) || '?';
    let br = '', forks = '', lab = '', n = 0;
    const grow = (x, y, a, len, d, path) => {
      const x2 = x + Math.sin(a) * len, y2 = y - Math.cos(a) * len;
      br += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} Q${(x + Math.sin(a) * len * .5 + (d % 2 ? 6 : -6)).toFixed(1)} ${(y - Math.cos(a) * len * .5).toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke-width="${(1 + d * 0.9).toFixed(1)}"/>`;
      if (d > 0) {
        n++;
        forks += `<circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="${2 + d * .6}"/>`;
        if (d >= 4) lab += `<text x="${(x2 + 8).toFixed(1)}" y="${(y2 + 4).toFixed(1)}" class="ns-hand" font-size="${10 + d * 1.6}" fill="${G}" opacity=".8">${A.esc(word)}${A.qm()}</text>`;
        const s = 0.44 - (6 - d) * 0.02;
        grow(x2, y2, a - s, len * 0.74, d - 1, path + 'L');
        grow(x2, y2, a + s, len * 0.74, d - 1, path + 'R');
      }
    };
    grow(380, 650, 0, 120, 6, '');
    let tally = '';
    for (let i = 0; i < 63; i++) { const g = (i / 5) | 0, k = i % 5, x = 30 + (g % 7) * 26 + k * 4, y = 64 + ((g / 7) | 0) * 30; tally += k === 4 ? `<path d="M${x - 18} ${y + 16} L${x + 2} ${y}"/>` : `<path d="M${x} ${y} v18"/>`; }
    // one path through the tree, lit: the map of what it depends on
    let px = 380, py = 650, pa = 0, pl = 120, lit = `M${px} ${py}`;
    [0, 1, 0, 0, 1, 1].forEach((r, i) => { const d = 6 - i; const x2 = px + Math.sin(pa) * pl, y2 = py - Math.cos(pa) * pl; lit += ` L${x2.toFixed(1)} ${y2.toFixed(1)}`; px = x2; py = y2; const s = 0.44 - (6 - d) * 0.02; pa += r ? s : -s; pl *= 0.74; });
    return A.base(`
<rect x="14" y="40" width="210" height="110" fill="#FBF7EF" transform="rotate(-2 120 90)"/>
<g stroke="${G}" stroke-width="2" stroke-linecap="round" transform="rotate(-2 120 90)" filter="url(#ns-pencil)">${tally}</g>
<path d="M300 650 C330 640 430 640 460 650" stroke="${G}" stroke-width="3" fill="none"/>
<g class="dr" fill="none" stroke="#5E4A3A" stroke-linecap="round" filter="url(#ns-pencil)">${br}</g>
<g fill="#B9D3A0" stroke="${G}" stroke-width="1">${forks}</g>
${lab}
<!-- her, on the highest branch, very calm -->
<g transform="translate(560 140)"><path d="M-30 70 C-30 20 30 20 30 70 Z" fill="#FBFCFD"/><circle cy="0" r="22" fill="#E7C2A3"/><path d="M-22 -6 C-22 -30 22 -30 22 -6 C14 -16 -14 -16 -22 -6 Z" fill="#3B2A22"/>${A.ink('<path d="M-30 70 C-30 20 30 20 30 70 M0 30 V70"/><circle r="22"/><circle cx="-8" cy="2" r="6"/><circle cx="8" cy="2" r="6"/><path d="M-6 14 h12"/>', 2.2)}<rect x="22" y="34" width="5" height="34" rx="2" fill="#3D5A80" transform="rotate(20 24 50)"/></g>`, true)
    + A.sp([180, 120, 400, 540], '', `<path class="ns-flow" d="${lit}" fill="none" stroke="${E}" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/>`)
    + A.sp([526, 196, 40, 50], 'a-sway', A.ink('<path d="M548 210 L540 240 M562 210 L566 240"/>', 3), [555, 206], '--d:2s;--a:10deg')
    + A.sp([340, 560, 110, 120], 'a-bob', `${A.me(392, 618, 1.4)}<g transform="translate(392 568)"><circle r="12" fill="#FFE9A8" opacity=".8"/><path d="M-5 10 h10 v6 h-10 Z" fill="#B9BDC3"/>${A.ink('<circle r="12"/>', 1.8)}</g><g transform="translate(436 624) rotate(-8)"><rect x="-16" y="-12" width="32" height="24" fill="#FBF7EF" stroke="${G}" stroke-width="1.6"/><path d="M-10 6 l6 -8 l6 4 l6 -10" stroke="${E}" stroke-width="1.6" fill="none"/></g>`, null, '--d:2.6s;--a:-3px')
    + A.base(`
  ${A.note(N(c, 0), 14, 182, 220, { s: 23 })}
  ${A.note(N(c, 1), 14, 440, 170, { s: 22 })}
  ${A.arrow('M120 470 C170 470 220 460 260 440')}
  ${A.note(N(c, 2), 600, 270, 156, { s: 21 })}
  ${A.arrow('M640 266 C620 240 600 220 590 210')}
  ${A.note(N(c, 3), 480, 640, 276, { s: 22 })}
  ${A.arrow('M482 632 C462 626 446 622 432 620')}`);
  };

  // ================= Expert no. 142 — an old photo: his first ad, twenty years ago =================
  // A faded photograph pinned to the page: his shop at dawn, a fax that will not
  // stop printing orders (3,000), a sad little stack of cartons (1,000), young him
  // apologising on a brick phone, customers at the window. Beside it, him today,
  // and an eye that still twitches at the word "campaign". Russian: New Year, snow.
  A.by.factory = (c) => {
    const L = A.lang(), ru = L === 'ru', T3 = (en, rus, ar) => (L === 'ar' ? ar : ru ? rus : en);
    const num = (n) => (L === 'ar' ? n.toLocaleString('ar-EG') : ru ? n.toLocaleString('ru-RU') : n.toLocaleString('en-US'));
    const PH = 'rotate(-3 290 290)', SEP = '#E4CFAA', INK = '#4A3A2A';
    const inPhoto = (s) => `<g transform="${PH}"><g clip-path="url(#ns-c7-ph)">${s}</g></g>`;
    // the paper ribbon of orders, out of the fax, across the floor, into a heap
    const ribbon = 'M150 268 C150 236 176 232 186 250 C204 286 160 318 200 338 C246 360 214 392 262 396 C300 398 290 430 330 432';
    let heap = '';
    for (let i = 0; i < 26; i++) { const x = 300 + (i % 6) * 18 - (i >> 2) * 2, y = 452 - (i / 6 | 0) * 13 - (i % 3) * 3; heap += `<path d="M${x} ${y} l40 -6 l2 12 l-40 6 Z" fill="#FBF6EA" stroke="${INK}" stroke-width="1.2" transform="rotate(${(i * 37) % 30 - 15} ${x + 20} ${y})"/>`; }
    const carton = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0 0 h34 v22 h-34 Z" fill="#C59B62"/><path d="M0 0 l8 -8 h34 l-8 8 Z" fill="#D8B27A"/><path d="M34 0 l8 -8 v22 l-8 8 Z" fill="#A87E4A"/><path d="M0 0 h34 v22 h-34 Z M0 0 l8 -8 h34 l-8 8 M34 0 l8 -8 v22 l-8 8" fill="none" stroke="${INK}" stroke-width="1.4"/>${ru ? '' : `<path d="M17 18 v-9 M17 9 c-4 -3 -7 -2 -8 0 M17 9 c4 -3 7 -2 8 0" fill="none" stroke="${INK}" stroke-width="1.2"/>`}</g>`;
    const decor = ru
      ? `<path d="M60 74 C120 96 200 96 270 78 C340 96 430 96 520 74" fill="none" stroke="${INK}" stroke-width="1.6"/>${[90, 140, 190, 240, 300, 350, 400, 450, 500].map((x, i) => `<circle cx="${x}" cy="${86 + (i % 2) * 6}" r="5" fill="${['#C8402F', '#E0A73A', '#5E8F5A'][i % 3]}" opacity=".75"/>`).join('')}`
      : `<path d="M270 66 V104" stroke="${INK}" stroke-width="1.6"/>`;
    return A.base(`
<defs><clipPath id="ns-c7-ph"><rect x="56" y="66" width="468" height="404"/></clipPath>
<filter id="ns-c7-old"><feColorMatrix type="matrix" values=".9 .1 0 0 .04  .1 .8 .1 0 .02  .1 .1 .6 0 0  0 0 0 1 0"/></filter></defs>
<!-- the photograph -->
<g transform="${PH}">
  <rect x="48" y="62" width="500" height="476" fill="${G}" opacity=".22" filter="url(#ns-b8)"/>
  <rect x="40" y="50" width="500" height="476" fill="#FBF7EF"/>
  <rect x="56" y="66" width="468" height="404" fill="${SEP}"/>
  <g clip-path="url(#ns-c7-ph)" filter="url(#ns-c7-old)">
    <rect x="56" y="360" width="468" height="110" fill="#D2B88E"/>
    <path d="M56 360 H524" stroke="${INK}" stroke-width="1.4" opacity=".6"/>
    <!-- the window: dawn, and the queue -->
    <rect x="352" y="92" width="150" height="120" fill="#9C8A72"/>
    ${ru ? `<g fill="#FBF7EF" opacity=".8">${[[372, 110], [410, 128], [450, 104], [482, 140], [390, 160], [470, 176]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6"/>`).join('')}</g>` : `<path d="M470 112 a16 16 0 1 0 12 26 a12 12 0 1 1 -12 -26 Z" fill="#F4E2B8"/>`}
    <g fill="#7A6A58">${[384, 418, 452, 486].map((x, i) => `<circle cx="${x}" cy="${196 - (i % 2) * 6}" r="13"/>`).join('')}</g>
    <path d="M352 92 h150 v120 h-150 Z M427 92 V212 M352 152 H502" fill="none" stroke="${INK}" stroke-width="3"/>
    <!-- the clock -->
    <g transform="translate(300 120)"><circle r="24" fill="#FBF6EA" stroke="${INK}" stroke-width="2.4"/><path d="M0 0 V-17 M0 0 V12" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/></g>
    ${decor}
    <!-- the fax on its little table -->
    <path d="M86 300 h120 M96 300 v62 M196 300 v62" stroke="${INK}" stroke-width="3"/>
    <g transform="translate(112 270)"><path d="M0 30 h70 v-22 l-10 -10 h-50 l-10 10 Z" fill="#B9AE9C" stroke="${INK}" stroke-width="2"/><rect x="10" y="12" width="20" height="8" fill="#5E8F5A"/><rect x="46" y="12" width="14" height="10" fill="#7A6A58"/><path d="M20 -2 h30" stroke="${INK}" stroke-width="2"/></g>
    <!-- the orders: a ribbon, then a heap -->
    <path d="${ribbon}" fill="none" stroke="#FBF6EA" stroke-width="16" stroke-linecap="round"/>
    <path d="${ribbon}" fill="none" stroke="${INK}" stroke-width="1" stroke-dasharray="2 6" opacity=".6"/>
    ${heap}
    <!-- the cartons he actually had -->
    ${carton(74, 428)}${carton(110, 428)}${carton(92, 406)}
    <!-- the counter -->
    <path d="M320 300 h204 v62 h-204 Z" fill="#B48A5A" stroke="${INK}" stroke-width="2.4"/>
  </g>
  ${A.ink('<rect x="40" y="50" width="500" height="476"/><rect x="56" y="66" width="468" height="404" stroke-width="1.4"/>', 2.4)}
  <!-- the two numbers of the story, above the old photo's tint -->
  <g transform="translate(360 368) rotate(-4)"><rect x="-42" y="-17" width="84" height="28" rx="5" fill="#FBF7EF" stroke="${E}" stroke-width="2"/><text y="5" font-family="ui-monospace,monospace" font-weight="700" font-size="18" fill="${E}" text-anchor="middle">${num(3000)}</text></g>
  <g transform="translate(112 392) rotate(-4)"><rect x="-42" y="-17" width="84" height="28" rx="5" fill="#FBF7EF" stroke="${G}" stroke-width="2"/><text y="5" font-family="ui-monospace,monospace" font-weight="700" font-size="18" fill="${G}" text-anchor="middle">${num(1000)}</text></g>
  <text x="290" y="508" class="ns-hand" font-size="22" fill="${INK}" text-anchor="middle"${A.dir()}>${A.esc(T3('Ramadan, twenty years ago', 'Новый год, двадцать лет назад', 'رمضان، من عشرين سنة'))}</text>
</g>
<!-- the pin -->
<circle cx="292" cy="58" r="8" fill="${E}" stroke="${G}" stroke-width="1.6"/>
<!-- him today -->
<g transform="rotate(4 650 520)">
  <rect x="566" y="420" width="176" height="200" fill="#FBF7EF"/>
  ${A.ink('<rect x="566" y="420" width="176" height="200"/>', 2)}
  <path d="M610 600 C610 540 698 540 698 600 Z" fill="#9DB7D6" stroke="${G}" stroke-width="2"/>
  <circle cx="654" cy="510" r="30" fill="#E7C2A3" stroke="${G}" stroke-width="2.2"/>
  <path d="M624 500 C626 470 682 470 684 500 C672 488 636 488 624 500 Z" fill="#D8D2CC" stroke="${G}" stroke-width="1.6"/>
  <g fill="none" stroke="${G}" stroke-width="2"><circle cx="642" cy="512" r="9"/><circle cx="668" cy="512" r="9"/><path d="M651 512 h8 M642 530 q12 -4 24 0"/></g>
  <circle cx="642" cy="512" r="2.6" fill="${G}"/>
  <g transform="translate(700 452) rotate(8)"><rect x="-36" y="-14" width="72" height="26" fill="#F3E08A" stroke="${G}" stroke-width="1.4"/><text y="5" class="ns-hand" font-size="15" font-weight="700" fill="${G}" text-anchor="middle"${A.dir()}>${A.esc(T3('campaign?', 'кампания?', 'حملة؟'))}</text></g>
  <text x="590" y="440" class="ns-hand" font-size="15" fill="${G}"${A.dir()}>${A.esc(T3('today', 'сегодня', 'النهارده'))}</text>
</g>`, true)
    // the lantern (or the garland's star), swaying in the shop
    + (ru ? '' : A.sp([244, 96, 56, 80], 'a-sway', inPhoto(`<g filter="url(#ns-c7-old)"><path d="M262 104 h16 l6 12 v26 l-6 12 h-16 l-6 -12 v-26 Z" fill="#E0A73A" stroke="${INK}" stroke-width="1.8"/><path d="M262 116 h16 M262 142 h16" stroke="${INK}" stroke-width="1.2"/><circle cx="270" cy="129" r="16" fill="#FFE2A0" opacity=".35" filter="url(#ns-b8)"/></g>`), [270, 66], '--d:3.6s;--a:5deg'))
    // the fax, still printing: sheets keep coming out of the slot
    + [0, 1, 2].map((i) => A.sp([126, 200, 52, 80], 'a-fall', inPhoto(`<path d="M136 268 h30 v-14 h-30 Z" fill="#FBF6EA" stroke="${INK}" stroke-width="1.2"/><path d="M140 262 h20 M140 258 h14" stroke="${INK}" stroke-width=".8"/>`), null, `--d:1.8s;--dl:${-i * 0.6}s;--y:-46px`)).join('')
    + A.sp([118, 276, 24, 16], 'a-flick', inPhoto(`<rect x="122" y="282" width="20" height="8" fill="#9FE07A"/>`), null, '--d:.4s')
    // young him, on the brick phone, bowing and apologising
    + A.sp([380, 210, 110, 110], 'a-bow', inPhoto(`<g filter="url(#ns-c7-old)"><path d="M396 300 C396 262 470 262 470 300 Z" fill="#8C98A6" stroke="${INK}" stroke-width="2"/><circle cx="432" cy="246" r="20" fill="#E7C2A3" stroke="${INK}" stroke-width="2"/><path d="M414 236 C416 220 448 220 450 236 Z" fill="#3B2A22"/><path d="M432 254 q6 4 12 0" stroke="${INK}" stroke-width="1.6" fill="none"/><path d="M452 246 l10 -2 v-22 l-8 0 Z" fill="#4A4A4A" stroke="${INK}" stroke-width="1.4"/><path d="M450 270 C460 262 462 250 458 244" stroke="#E7C2A3" stroke-width="8" stroke-linecap="round" fill="none"/></g>`), [432, 300], '--d:1.4s;--a:8deg')
    + A.sp([462, 200, 30, 40], 'a-flick', inPhoto(`<path d="M468 208 l8 -6 M470 218 l10 -2 M468 228 l8 4" stroke="${E}" stroke-width="2" stroke-linecap="round"/>`), null, '--d:.25s')
    + A.sp([410, 226, 12, 50], 'a-fall', inPhoto(`<path d="M414 230 c-3 5 -3 8 0 9 c3 -1 3 -4 0 -9 Z" fill="#9FD3FF"/>`), null, '--d:1.6s;--y:30px')
    // the queue at the window, asking
    + A.sp([370, 150, 140, 40], 'a-pulse', inPhoto(`<g transform="translate(432 166)"><path d="M-60 -16 H60 Q68 -16 68 -8 V8 Q68 16 60 16 H-4 L-12 26 L-16 16 H-60 Q-68 16 -68 8 V-8 Q-68 -16 -60 -16 Z" fill="#FBF6EA" stroke="${INK}" stroke-width="1.6"/><text y="6" class="ns-hand" font-size="16" font-weight="700" fill="${INK}" text-anchor="middle"${A.dir()}>${A.esc(T3('where’s my order?', 'где мой заказ?', 'وين طلبي؟'))}</text></g>`), null, '--d:1.2s;--a:1.06')
    // the clock's second hand, at six in the morning
    + A.sp([276, 96, 48, 48], 'a-spin', inPhoto(`<path d="M300 120 L314 112" stroke="${E}" stroke-width="1.6" stroke-linecap="round"/>`), [300, 120], '--d:6s')
    + (ru ? [0, 1, 2, 3].map((i) => A.sp([360 + i * 34, 92, 8, 8], 'a-fall', inPhoto(`<circle cx="${364 + i * 34}" cy="96" r="2.4" fill="#fff"/>`), null, `--d:${3 + i * 0.4}s;--dl:${-i}s;--y:110px`)).join('') : '')
    // him today: the eye twitches at the word
    + A.sp([656, 500, 24, 24], 'a-twitch', `<g transform="rotate(4 650 520)"><path d="M659 512 a9 9 0 0 1 18 0 Z" fill="#E7C2A3" stroke="${G}" stroke-width="1.6"/></g>`, [668, 503], '--d:2.6s')
    + A.base(`
  ${A.note(N(c, 3), 566, 40, 190, { s: 22 })}
  ${A.arrow('M600 70 C520 80 400 100 330 116')}
  ${A.note(N(c, 1), 566, 186, 190, { s: 22 })}
  ${A.arrow('M600 230 C540 290 420 340 368 380')}
  ${A.note(N(c, 0), 14, 600, 260, { s: 22 })}
  ${A.arrow('M90 586 C96 520 100 480 104 452')}
  ${A.note(N(c, 2), 290, 600, 260, { s: 22 })}
  ${A.arrow('M300 586 C240 470 190 360 160 300')}`);
  };

  // ================= Day 27 — the evidence board of my own mistakes =================
  A.by.board = (c) => {
    const pin = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="${E}" stroke="${G}" stroke-width="1.6"/><circle cx="${x - 2}" cy="${y - 2}" r="2" fill="#fff" opacity=".8"/>`;
    return A.base(`
<rect x="20" y="70" width="720" height="560" fill="#C9A06A"/>
<rect x="20" y="70" width="720" height="560" fill="url(#ns-dots)" opacity=".7"/>
${A.ink('<rect x="20" y="70" width="720" height="560"/><rect x="8" y="58" width="744" height="584" stroke-width="2"/>', 3.4)}
<!-- the fever deal -->
<g transform="translate(150 200) rotate(-6)"><rect x="-90" y="-80" width="180" height="150" fill="#FBF7EF"/><text y="-36" font-family="ui-monospace,monospace" font-weight="700" font-size="26" fill="${E}" text-anchor="middle">HOT DEAL</text><g transform="translate(0 16)"><rect x="-8" y="-30" width="16" height="48" rx="8" fill="#fff" stroke="${G}" stroke-width="2"/><circle cy="24" r="12" fill="${E}" stroke="${G}" stroke-width="2"/><rect x="-3" y="-10" width="6" height="34" fill="${E}"/><text x="26" y="0" class="ns-hand" font-size="20" fill="${G}">39.5°</text></g>${A.ink('<rect x="-90" y="-80" width="180" height="150"/>', 2)}</g>
${pin(150, 128)}
<!-- noon, iftar -->
<g transform="translate(400 190) rotate(4)"><rect x="-80" y="-74" width="160" height="140" fill="#FBF7EF"/><circle cy="-4" r="46" fill="none" stroke="${G}" stroke-width="2.4"/><path d="M0 -4 V-40 M0 -4 V-36" stroke="${G}" stroke-width="3"/><text y="-54" class="ns-hand" font-size="13" fill="${G}" text-anchor="middle">12</text><path d="M40 -60 a16 16 0 1 0 14 22 a12 12 0 1 1 -14 -22 Z" fill="#E0A73A"/><path d="M-50 -50 L50 44 M50 -50 L-50 44" stroke="${E}" stroke-width="5" stroke-linecap="round" opacity=".85"/>${A.ink('<rect x="-80" y="-74" width="160" height="140"/>', 2)}</g>
${pin(400, 122)}
<!-- the birthday cards: B won. A never happened. -->
<g transform="translate(610 230) rotate(-3)"><rect x="-74" y="-70" width="148" height="120" fill="#F3D9C4"/><text x="0" y="-38" font-family="ui-monospace,monospace" font-weight="700" font-size="34" fill="${G}" text-anchor="middle">B</text><path d="M-30 20 h60 v18 h-60 Z M-30 20 c6 -8 12 4 20 -2 c8 -6 14 6 20 0 c8 -6 14 4 20 0 M0 18 v-14" fill="#FBF7EF" stroke="${G}" stroke-width="1.8"/><text x="0" y="0" class="ns-hand" font-size="16" fill="${E}" text-anchor="middle">winner</text>${A.ink('<rect x="-74" y="-70" width="148" height="120"/>', 2)}</g>
<g transform="translate(560 410) rotate(8)"><rect x="-60" y="-46" width="120" height="92" fill="#FBF7EF" opacity=".95"/><text y="16" font-family="ui-monospace,monospace" font-weight="700" font-size="44" fill="${G}" text-anchor="middle" opacity=".55">A</text><rect x="-64" y="-12" width="128" height="26" fill="${G}" transform="rotate(-12)"/><text y="6" font-family="ui-monospace,monospace" font-size="12" font-weight="700" fill="#FBF7EF" text-anchor="middle" transform="rotate(-12)">CLASSIFIED</text>${A.ink('<rect x="-60" y="-46" width="120" height="92"/>', 2)}</g>
${pin(610, 168)}${pin(560, 372)}
<!-- the sunscreen, Moscow, January: still on the board -->
<g transform="translate(130 450) rotate(5)"><rect x="-70" y="-56" width="140" height="112" fill="#DCE4EA"/><path d="M-12 -30 h24 l-2 50 h-20 Z" fill="#FBF7EF" stroke="${G}" stroke-width="2"/><text y="0" class="ns-hand" font-size="11" text-anchor="middle" fill="${E}">SPF50</text><g stroke="#6F93B4" stroke-width="2"><path d="M40 -30 v24 M28 -18 h24 M31 -27 l18 18 M49 -27 l-18 18"/></g>${A.ink('<rect x="-70" y="-56" width="140" height="112"/>', 2)}</g>
${pin(130, 398)}
<!-- the red strings: it all connects. to me. -->
<g fill="none" stroke="#C8402F" stroke-width="2.2"><path d="M150 128 C260 150 300 140 400 122 M400 122 C480 130 540 150 610 168 M130 398 C250 360 300 300 400 122 M560 372 C500 330 450 300 400 122"/></g>`, true)
    // the strings tremble, like they know
    + A.sp([126, 116, 500, 270], 'a-drift', `<g fill="none" stroke="#C8402F" stroke-width="1.4" opacity=".6"><path d="M150 128 C260 160 300 150 400 122 M130 398 C250 370 310 310 400 122"/></g>`, null, '--d:2.2s;--x:1px;--y:2px')
    // me, detective, magnifier in hand
    + A.sp([300, 470, 220, 170], 'a-bob', `${A.me(380, 560, 2.2)}<path d="M330 524 C340 496 420 496 430 524 Z M314 526 h132" fill="#8B6A4E" stroke="${G}" stroke-width="2.4"/><g transform="translate(470 520)"><circle r="26" fill="#DCE8F0" opacity=".6"/><circle r="26" fill="none" stroke="${G}" stroke-width="4"/><path d="M-18 18 L-44 44" stroke="${G}" stroke-width="7" stroke-linecap="round"/></g>`, null, '--d:2.8s;--a:-4px')
    + A.base(`
  ${A.note(N(c, 3), 14, 40, 600, { s: 24 })}
  ${A.note(N(c, 0), 30, 300, 230, { s: 21, c: 'g' })}
  ${A.note(N(c, 1), 300, 314, 190, { s: 21, c: 'g' })}
  ${A.note(N(c, 2), 548, 488, 186, { s: 20, c: 'g' })}`);
  };

  // ================= Day 31 — small talk, a comic strip in four panels =================
  A.by.comic = (c) => {
    const pan = [[20, 70], [392, 70], [20, 382], [392, 382]], PW = 348, PH = 296;
    const frame = pan.map(([x, y]) => `<rect x="${x}" y="${y}" width="${PW}" height="${PH}" fill="#FBF7EF"/>`).join('');
    const client = (x, y, mood) => `<g transform="translate(${x} ${y})"><path d="M-40 90 C-40 30 40 30 40 90 Z" fill="#9DB7D6"/><circle r="30" fill="#E7C2A3"/>${A.ink(`<path d="M-40 90 C-40 30 40 30 40 90"/><circle r="30"/><path d="M-14 -4 v4 M14 -4 v4"/>${mood === 'ok' ? '<path d="M-12 12 q12 10 24 0"/>' : mood === 'meh' ? '<path d="M-10 14 h20"/>' : '<ellipse cx="0" cy="14" rx="6" ry="8"/>'}`, 2.4)}</g>`;
    const bub = (x, y, w, t) => `<g><path d="M${x} ${y} h${w} v70 h-${w - 60} l-20 22 l2 -22 h-${40} Z" fill="#fff"/>${A.ink(`<path d="M${x} ${y} h${w} v70 h-${w - 60} l-20 22 l2 -22 h-${40} Z"/>`, 2)}${A.note(t, x + 12, y + 28, w - 24, { s: 19, c: 'g', keep: 1 })}</g>`;
    return A.base(`
<rect width="760" height="690" fill="#D9CDB8" opacity=".4"/>
${frame}
${A.ink(pan.map(([x, y]) => `<rect x="${x}" y="${y}" width="${PW}" height="${PH}"/>`).join(''), 3.4)}
<!-- 1: warmth -->
${A.me(90, 290, 2)}${client(290, 240, 'meh')}${bub(40, 130, 230, c.p[1])}
<!-- 2: more warmth -->
${A.me(462, 290, 2)}${client(662, 240, 'oh')}${bub(412, 130, 236, c.p[2])}
<!-- 3: too much -->
${A.me(90, 600, 2)}
<g fill="none" stroke="${G}" stroke-width="2" opacity=".5"><path d="M200 590 h40 M190 610 h60 M210 630 h40"/></g>
<!-- 4: numbers -->
${A.me(462, 600, 2)}${client(662, 552, 'ok')}
<g transform="translate(530 470)"><rect x="-50" y="-40" width="100" height="72" fill="#FBF7EF"/>${A.ink('<rect x="-50" y="-40" width="100" height="72"/><path d="M-40 20 L-14 -2 L6 8 L36 -28" stroke="#5E8F5A"/>', 2.4)}<path d="M26 -30 l12 -2 l-2 12" stroke="#5E8F5A" stroke-width="2.4" fill="none"/></g>`, true)
    + A.sp([80, 220, 80, 40], 'a-bob', `<path d="M110 240 c-6 -10 -20 -4 -14 6 l14 12 l14 -12 c6 -10 -8 -16 -14 -6 Z" fill="${E}"/>`, null, '--d:1.2s;--a:-10px')
    + A.sp([452, 220, 80, 40], 'a-bob', `<path d="M482 240 c-6 -10 -20 -4 -14 6 l14 12 l14 -12 c6 -10 -8 -16 -14 -6 Z M510 232 c-4 -7 -14 -3 -10 4 l10 8 l10 -8 c4 -7 -6 -11 -10 -4 Z" fill="${E}"/>`, null, '--d:1s;--a:-12px')
    + A.sp([690, 210, 20, 50], 'a-fall', `<path d="M700 214 c-4 6 -4 10 0 12 c4 -2 4 -6 0 -12 Z" fill="#9FD3FF"/>`, null, '--d:1.6s;--y:30px')
    + A.sp([60, 520, 110, 60], 'a-bob', `<g fill="${E}"><path d="M80 540 c-5 -8 -16 -3 -11 5 l11 10 l11 -10 c5 -8 -6 -13 -11 -5 Z"/><path d="M130 530 c-5 -8 -16 -3 -11 5 l11 10 l11 -10 c5 -8 -6 -13 -11 -5 Z"/><path d="M150 560 c-4 -6 -12 -2 -8 4 l8 7 l8 -7 c4 -6 -4 -10 -8 -4 Z"/></g>`, null, '--d:.8s;--a:-8px')
    // the client, leaving the panel at speed
    + A.sp([250, 480, 120, 150], 'a-drift', `<g transform="translate(300 540) rotate(14)"><path d="M-30 60 C-30 14 30 14 30 60 Z" fill="#9DB7D6"/><circle r="24" fill="#E7C2A3"/>${A.ink('<path d="M-30 60 C-30 14 30 14 30 60"/><circle r="24"/><ellipse cx="0" cy="10" rx="5" ry="7"/><path d="M-12 60 l-16 30 M12 60 l20 26"/>', 2.4)}</g>`, null, '--d:.4s;--x:16px')
    + A.base(pan.map(([x, y], i) => `<rect x="${x + 10}" y="${y + 10}" width="${PW - 20}" height="34" fill="#F3E08A"/>${A.ink(`<rect x="${x + 10}" y="${y + 10}" width="${PW - 20}" height="34"/>`, 1.6)}${A.note(N(c, i), x + 20, y + 34, PW - 40, { s: 20, keep: 1 })}`).join(''));
  };
})();
