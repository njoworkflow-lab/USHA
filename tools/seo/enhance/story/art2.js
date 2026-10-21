// USHA's story: drawings for chapters 6 to 10 (the people, and the day).
(() => {
  const A = window.USHA_ART;
  const G = '#2A2420', E = '#FF5A1F', P = '#FFB48A', LIGHT = '#F3D9C4';
  const N = (c, i) => (c.n || [])[i];

  // ================= 6 · Jojo — from the ground, under his hammock =================
  A.by.jojo = (c) => {
    const net = 'M200 150 C270 330 500 330 570 130 C480 196 290 204 200 150 Z';
    const sheet = (x, y, r, inner = '') => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-70" y="-48" width="140" height="96" fill="#FBF7EF"/><rect x="-70" y="-48" width="140" height="96" fill="none" stroke="${G}" stroke-width="2" filter="url(#ns-pencil)"/>${inner}</g>`;
    const lay = `<rect x="-56" y="-36" width="50" height="40" fill="#E8D27A" opacity=".7"/><path d="M2 -30 h50 M2 -20 h40 M2 -10 h46 M-56 14 h108 M-56 24 h80" stroke="${G}" stroke-width="2" opacity=".55"/>`;
    return A.base(`
<defs><radialGradient id="ns-c6-sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF4DC"/><stop offset="1" stop-color="#FFF4DC" stop-opacity="0"/></radialGradient></defs>
<rect width="760" height="690" fill="#DCE6E4" opacity=".55"/>
<circle cx="390" cy="40" r="200" fill="url(#ns-c6-sun)"/>
<!-- two palms, rising over us -->
<path d="M-20 700 C40 520 120 320 176 120 L196 126 C150 330 80 520 30 700 Z" fill="#B99B7A" filter="url(#ns-smudge)"/>
<path d="M780 700 C720 520 640 320 594 100 L574 108 C610 320 680 520 730 700 Z" fill="#B99B7A" filter="url(#ns-smudge)"/>
${A.ink('<path d="M-20 700 C40 520 120 320 176 120 M30 700 C80 520 150 330 196 126 M780 700 C720 520 640 320 594 100 M730 700 C680 520 610 320 574 108"/><path d="M40 560 l30 8 M70 470 l30 8 M100 380 l28 8 M130 290 l26 8 M690 560 l-30 8 M664 470 l-30 8 M640 380 l-28 8 M620 290 l-26 8" stroke-width="1.6" opacity=".6"/>', 2.6)}
<!-- the ropes -->
${A.ink('<path d="M200 150 L180 122 M570 130 L590 104" stroke-width="2.4"/>')}
<!-- the pile: forty layouts, all mine -->
${sheet(130, 640, -14, lay)}${sheet(180, 620, 9, lay)}${sheet(110, 600, -4, lay)}
${sheet(170, 580, -10, `${lay}<text x="40" y="-28" class="ns-hand" font-size="18" fill="${G}">#41</text><path d="M-50 -34 L50 34 M50 -34 L-50 34" stroke="${E}" stroke-width="5" stroke-linecap="round" opacity=".85"/>`)}`, true)
    // the hammock and him in it, swinging
    + A.sp([170, 96, 430, 300], 'a-sway', `
<path d="${net}" fill="#E9D4B0"/><path d="${net}" fill="url(#ns-hatch)" opacity=".9"/><path d="${net}" fill="url(#ns-hatch2)" opacity=".9"/>
<ellipse cx="390" cy="236" rx="108" ry="38" fill="${G}" opacity=".32" filter="url(#ns-smudge)"/>
<ellipse cx="300" cy="236" rx="36" ry="24" fill="${G}" opacity=".28" filter="url(#ns-smudge)"/>
${A.ink(`<path d="${net}"/><path d="M220 170 C300 230 470 226 556 150 M240 200 C320 260 460 254 540 180" stroke-width="1.4" opacity=".6"/>`, 2.8)}
<!-- his arm, over the edge -->
<path d="M290 250 C286 300 288 350 290 372" stroke="#C99B78" stroke-width="16" stroke-linecap="round" fill="none"/>
${A.ink('<path d="M282 252 C278 310 280 350 282 372 M298 252 C296 310 298 350 298 372"/>', 2.2)}
<!-- his foot, flip-flop hanging on -->
<path d="M484 252 C496 290 508 320 514 338" stroke="#C99B78" stroke-width="16" stroke-linecap="round" fill="none"/>
${A.ink('<path d="M478 256 C490 296 500 322 506 340 M492 250 C504 290 516 318 522 334"/>', 2.2)}
<g transform="rotate(20 516 350)"><ellipse cx="516" cy="352" rx="13" ry="26" fill="#5E8F5A"/><ellipse cx="516" cy="352" rx="13" ry="26" fill="none" stroke="${G}" stroke-width="2"/></g>
<!-- a cloud of "more air" -->
<g transform="translate(420 70)"><path d="M-40 10 C-60 -10 -30 -34 -6 -22 C4 -44 44 -40 46 -14 C70 -14 70 18 44 18 L-30 18 C-50 18 -54 14 -40 10 Z" fill="#fff" opacity=".9"/>${A.ink('<path d="M-40 10 C-60 -10 -30 -34 -6 -22 C4 -44 44 -40 46 -14 C70 -14 70 18 44 18 L-30 18 C-50 18 -54 14 -40 10 Z M-22 2 c10 -8 20 8 30 0 c10 -8 20 8 30 0" />', 2)}<path d="M-20 26 l-10 26" stroke="${G}" stroke-width="2" stroke-dasharray="3 5"/></g>`, [385, 130], '--d:4.2s;--a:2.2deg')
    // the cards: his entire toolkit. YES. NO. YES.
    + A.sp([240, 372, 100, 60], 'a-flick', `<g transform="rotate(-6 290 400)"><rect x="252" y="378" width="76" height="44" rx="4" fill="#B9D3A0"/><rect x="252" y="378" width="76" height="44" rx="4" fill="none" stroke="${G}" stroke-width="2.4"/><text x="290" y="410" font-family="ui-monospace,monospace" font-weight="700" font-size="22" text-anchor="middle" fill="${G}">YES</text></g>`, null, '--d:1.3s')
    + A.sp([240, 372, 100, 60], 'a-flick', `<g transform="rotate(5 290 400)"><rect x="252" y="378" width="76" height="44" rx="4" fill="#E89A7A"/><rect x="252" y="378" width="76" height="44" rx="4" fill="none" stroke="${G}" stroke-width="2.4"/><text x="290" y="410" font-family="ui-monospace,monospace" font-weight="700" font-size="22" text-anchor="middle" fill="${G}">NO</text></g>`, null, '--d:1.3s;--dl:-1.3s')
    // a frond, waving at nobody
    + A.sp([60, 40, 200, 140], 'a-sway', A.ink('<path d="M180 120 C150 80 110 60 70 70 M180 120 C170 70 150 50 120 40 M180 120 C210 70 230 56 250 60"/><path d="M90 66 l-6 16 M110 62 l-4 16 M130 46 l-10 12 M150 48 l-4 14 M220 62 l2 14" stroke-width="1.6"/>', 2.4), [180, 120], '--d:5s;--a:3deg')
    + A.sp([520, 30, 220, 130], 'a-sway', A.ink('<path d="M590 104 C620 70 660 56 710 62 M590 104 C600 60 620 40 650 34 M590 104 C560 70 540 56 520 60"/><path d="M690 60 l4 16 M670 58 l2 16 M640 38 l8 12 M620 44 l2 14 M540 58 l-2 14" stroke-width="1.6"/>', 2.4), [590, 104], '--d:5.6s;--a:-3deg;--dl:-2s')
    // the pigeon on his rope
    + A.sp([590, 66, 50, 46], 'a-peck', A.pigeon(610, 110, .8, true) + A.pigeonHead(610, 110, .8, true), null, '--d:2.6s')
    // me, holding up layout forty-two
    + A.sp([560, 520, 130, 160], 'a-bob', `${A.me(624, 630, 1.7)}<g transform="translate(624 560) rotate(-4)"><rect x="-44" y="-30" width="88" height="56" fill="#FBF7EF" stroke="${G}" stroke-width="2"/><text y="6" class="ns-hand" font-size="18" text-anchor="middle" fill="${G}">#42</text></g><path d="M600 612 L590 584 M648 612 L658 584" stroke="${G}" stroke-width="2.6" stroke-linecap="round"/><path d="M660 640 q4 8 0 12 M668 626 q4 8 0 12" stroke="#6F93B4" stroke-width="2" fill="none"/>`, null, '--d:2.4s;--a:-4px')
    + A.base(`
  ${A.note(N(c, 2), 494, 34, 250, { s: 23 })}
  ${A.arrow('M500 60 C486 66 476 70 470 74')}
  ${A.note(N(c, 1), 340, 452, 200, { s: 23 })}
  ${A.arrow('M352 444 C340 436 330 428 322 422')}
  ${A.note(N(c, 0), 270, 600, 220, { s: 22 })}
  ${A.arrow('M272 610 C256 600 242 594 228 590')}
  ${A.note(N(c, 3), 450, 492, 230, { s: 22 })}
  ${A.arrow('M560 520 C570 540 580 550 590 556')}`);
  };

  // ================= 7 · Alfons — the board from above, and his hand =================
  A.by.alfons = (c) => {
    const T = 'translate(130 140) rotate(5 200 200)';
    let sq = '';
    for (let r = 0; r < 8; r++) for (let q = 0; q < 8; q++) if ((r + q) % 2) sq += `<rect x="${q * 50}" y="${r * 50}" width="50" height="50" fill="url(#ns-hatch)" opacity=".8"/>`;
    const his = (q, r, k) => `<g transform="translate(${q * 50 + 25} ${r * 50 + 25})"><circle r="17" fill="#5A4E45"/><circle r="17" fill="none" stroke="${G}" stroke-width="2.4"/><circle r="10" fill="none" stroke="#F3EEE8" stroke-width="1.4" opacity=".5"/>${k ? `<path d="M-5 0 h10 M0 -5 v10" stroke="#F3EEE8" stroke-width="2"/>` : ''}</g>`;
    const mine = (q, r, crown) => `<g transform="translate(${q * 50 + 25} ${r * 50 + 25})">${A.me(0, 0, .74)}${crown ? `<path d="M-12 -14 l4 -10 l4 6 l4 -8 l4 8 l4 -6 l4 10 Z" fill="#E0A73A" stroke="${G}" stroke-width="1.4"/>` : ''}</g>`;
    return A.base(`
<!-- the table -->
<rect x="0" y="100" width="760" height="590" fill="#C9A87C" opacity=".35" filter="url(#ns-smudge)"/>
<path d="M0 100 H760" stroke="${G}" stroke-width="2" opacity=".4"/>
<!-- the floor beyond: someone passes by -->
<rect x="0" y="0" width="760" height="100" fill="url(#ns-hatchh)" opacity=".5"/>
<g transform="${T}">
  <rect x="8" y="12" width="400" height="400" fill="${G}" opacity=".18" filter="url(#ns-b8)"/>
  <rect width="400" height="400" fill="#F6EFE2"/>${sq}
  ${A.ink('<rect width="400" height="400"/><rect x="-14" y="-14" width="428" height="428" stroke-width="2"/>', 3.2)}
  ${his(4, 0, 1)}${his(3, 0)}${his(5, 1)}${his(6, 1)}${his(2, 2)}${his(7, 3)}
  ${mine(3, 2, 1)}${mine(5, 3)}${mine(1, 6)}${mine(4, 7)}${mine(6, 6)}
  <g fill="none" stroke="${E}" stroke-width="2.6" stroke-dasharray="6 6" stroke-linecap="round" filter="url(#ns-pencil)"><path d="M175 125 C200 90 210 60 225 30" marker-end="url(#ns-ah)"/><path d="M275 175 C300 140 320 110 325 80" marker-end="url(#ns-ah)"/><path d="M325 325 C360 250 370 200 375 175" marker-end="url(#ns-ah)"/></g>
  <text x="380" y="30" class="ns-hand" font-size="22" font-weight="700" fill="${E}">#</text>
</g>
<!-- the scoreboard -->
<g transform="translate(588 230) rotate(4)">
  <rect width="150" height="190" fill="#FBF7EF"/><rect width="150" height="190" fill="url(#ns-hatchh)" opacity=".35"/>
  ${A.ink('<rect width="150" height="190"/><path d="M75 34 V180 M10 34 H140"/>', 2.2)}
  <text x="38" y="26" class="ns-hand" font-size="20" fill="${G}" text-anchor="middle">USHA</text><text x="112" y="26" class="ns-hand" font-size="20" fill="${G}" text-anchor="middle">A.</text>
  <g stroke="${G}" stroke-width="2" filter="url(#ns-pencil)">${[0, 1, 2, 3, 4, 5].map((r) => `<path d="M14 ${52 + r * 22} v14 M22 ${52 + r * 22} v14 M30 ${52 + r * 22} v14 M38 ${52 + r * 22} v14 M10 ${62 + r * 22} l36 -8"/>`).join('')}</g>
  <text x="38" y="186" class="ns-hand" font-size="18" fill="${E}" text-anchor="middle">…212</text>
  <text x="112" y="110" class="ns-hand" font-size="44" fill="${G}" text-anchor="middle">0</text>
</g>
<!-- the chess clock -->
<g transform="translate(640 540)"><rect x="-70" y="-30" width="140" height="64" rx="10" fill="#8B6A4E"/>${A.ink('<rect x="-70" y="-30" width="140" height="64" rx="10"/><circle cx="-34" cy="2" r="22"/><circle cx="34" cy="2" r="22"/><path d="M-34 2 V-14 M34 2 L46 -6 M-44 -30 v-10 h20 v10 M24 -30 v-6 h20 v6"/>', 2.4)}<circle cx="-34" cy="2" r="18" fill="#FBF7EF" opacity=".8"/><circle cx="34" cy="2" r="18" fill="#FBF7EF" opacity=".8"/></g>
<!-- the lucky pen -->
<g transform="rotate(-12 300 650)"><rect x="220" y="642" width="150" height="14" rx="7" fill="#3D5A80"/><path d="M370 642 l20 7 l-20 7 Z" fill="#E0C080"/>${A.ink('<rect x="220" y="642" width="150" height="14" rx="7"/><path d="M370 642 l20 7 l-20 7 M240 642 v-6 h60 v6"/>', 2)}<text x="290" y="653" class="ns-hand" font-size="11" fill="#F3EEE8" text-anchor="middle">LUCKY</text></g>`, true)
    // the tick of the clock
    + A.sp([290 + 316, 520, 36, 36], 'a-spin', `<path d="M674 542 L674 526" stroke="${E}" stroke-width="2.6" stroke-linecap="round"/>`, [674, 542], '--d:3s')
    // his hand, hovering over the knight for the eleventh minute
    + A.sp([330, 330, 220, 360], 'a-drift', `
<path d="M400 690 C396 620 380 560 384 520 C388 470 420 440 460 440 C500 440 520 470 520 510 C524 560 500 620 500 690 Z" fill="#E7C2A3"/>
<path d="M400 690 C396 620 380 560 384 520 C388 470 420 440 460 440 C500 440 520 470 520 510 C524 560 500 620 500 690 Z" fill="url(#ns-hatch)" opacity=".35"/>
<path d="M400 444 C394 410 396 380 404 370 M430 440 C426 396 428 360 438 350 M462 440 C460 400 466 370 476 364 M494 450 C498 420 506 400 514 398" stroke="#E7C2A3" stroke-width="22" stroke-linecap="round" fill="none"/>
${A.ink('<path d="M400 690 C396 620 380 560 384 520 C388 480 396 470 394 450 M500 690 C500 620 524 560 520 510 C522 480 520 470 524 450"/><path d="M392 444 C386 410 388 380 394 364 C400 356 414 358 416 370 L418 440 M420 440 C416 396 418 356 428 344 C436 336 448 342 448 354 L450 440 M452 440 C450 400 456 366 466 358 C476 352 486 360 484 372 L480 440 M484 448 C488 420 496 398 506 392 C516 390 524 398 520 410 L512 456"/><path d="M380 600 c30 10 80 10 120 -2" stroke-width="1.6" opacity=".5"/>', 2.6)}
<g transform="translate(436 336)"><circle r="17" fill="#5A4E45"/><circle r="17" fill="none" stroke="${G}" stroke-width="2.4"/><path d="M-6 -6 C2 -10 8 -2 4 6" stroke="#F3EEE8" stroke-width="2" fill="none"/></g>`, null, '--d:.9s;--x:2px;--y:-3px')
    // the lady with the handbag, passing by. unrelated. probably.
    + A.sp([10, 16, 70, 76], 'a-walk', `<g transform="translate(44 54)"><ellipse cx="0" cy="8" rx="22" ry="16" fill="#8B6A6A" filter="url(#ns-smudge)"/><circle r="15" fill="#9C8FB0"/><circle r="15" fill="none" stroke="${G}" stroke-width="2"/><circle r="22" fill="none" stroke="${G}" stroke-width="2" opacity=".7"/><circle cx="8" cy="-8" r="4" fill="${E}"/><g transform="translate(26 6)"><path d="M-10 -6 C-10 -18 10 -18 10 -6" fill="none" stroke="${G}" stroke-width="2"/><rect x="-12" y="-6" width="24" height="16" rx="3" fill="#C98E8E" stroke="${G}" stroke-width="2"/></g></g>`, null, '--d:16s;--x:380px')
    + A.base(`
  ${A.note(N(c, 1), 450, 34, 300, { s: 22 })}
  ${A.arrow('M450 52 C380 66 260 64 140 60', 1)}
  ${A.note(N(c, 0), 576, 150, 180, { s: 22 })}
  ${A.arrow('M650 196 C656 210 660 222 660 232')}
  ${A.note(N(c, 2), 14, 300, 110, { s: 23 })}
  ${A.arrow('M70 390 C110 380 150 330 196 290')}
  ${A.note(N(c, 3), 14, 600, 200, { s: 22 })}
  ${A.arrow('M140 612 C170 630 196 640 220 646')}`);
  };

  // ================= 8 · Darina — the office as a blueprint, and what she sees through walls =================
  A.by.darina = (c) => {
    const BL = '#2F5584', WH = '#E9F1FA';
    return A.base(`
<defs><clipPath id="ns-c8-brain"><circle cx="650" cy="540" r="76"/></clipPath></defs>
<g transform="rotate(-2 290 370)">
  <rect x="24" y="112" width="540" height="500" fill="${BL}"/>
  <rect x="24" y="112" width="540" height="500" fill="url(#ns-grid)"/>
  <rect x="24" y="112" width="540" height="500" fill="url(#ns-hatch2)" opacity=".18"/>
  <!-- walls -->
  <g fill="none" stroke="${WH}" stroke-width="6" stroke-linecap="square">
    <path d="M44 132 H544 V592 H44 Z"/><path d="M294 132 V250 M294 300 V420 M294 470 V592 M44 362 H140 M190 362 H400 M450 362 H544"/>
  </g>
  <g fill="none" stroke="${WH}" stroke-width="1.6" opacity=".8"><path d="M294 250 A50 50 0 0 1 344 300 M294 420 A50 50 0 0 0 244 470 M140 362 A50 50 0 0 1 190 312 M400 362 A50 50 0 0 0 450 412"/></g>
  <g font-family="ui-monospace,monospace" font-size="11" fill="${WH}" opacity=".85" letter-spacing="1.5"><text x="60" y="154">MEETING</text><text x="310" y="154">KITCHEN</text><text x="310" y="384">D.</text><text x="60" y="384">ARCHIVE · EVERYTHING · FOREVER</text></g>
  <!-- meeting room: a table, a document, a typo -->
  <rect x="90" y="190" width="150" height="110" rx="8" fill="none" stroke="${WH}" stroke-width="2"/>
  <g transform="rotate(-8 150 240)"><rect x="124" y="214" width="56" height="70" fill="#FBF7EF"/><path d="M130 228 h40 M130 238 h34 M130 248 h40 M130 258 h28 M130 268 h36" stroke="${G}" stroke-width="2" opacity=".6"/><circle cx="160" cy="248" r="9" fill="none" stroke="${E}" stroke-width="2.4"/></g>
  <!-- kitchen: counter, kettle, a bowl that says CAT -->
  <path d="M310 170 H530 V200 H310 Z" fill="none" stroke="${WH}" stroke-width="2"/><circle cx="350" cy="185" r="9" fill="none" stroke="${WH}" stroke-width="2"/>
  <ellipse cx="500" cy="320" rx="16" ry="10" fill="none" stroke="${WH}" stroke-width="2"/><text x="500" y="344" font-family="ui-monospace,monospace" font-size="9" fill="${WH}" text-anchor="middle">CAT</text>
  <!-- archive: shelves forever -->
  <g stroke="${WH}" stroke-width="2" opacity=".75"><path d="M64 410 H270 M64 440 H270 M64 470 H270 M64 500 H270 M64 530 H270 M64 560 H270"/></g>
  <!-- her office: a desk, a sticky note, her -->
  <rect x="340" y="470" width="170" height="80" fill="none" stroke="${WH}" stroke-width="2"/>
  <g transform="rotate(6 364 520)"><rect x="350" y="504" width="34" height="32" fill="#F3E08A"/><text x="367" y="518" class="ns-hand" font-size="9" fill="${G}" text-anchor="middle">14.03</text><text x="367" y="530" class="ns-hand" font-size="9" fill="${G}" text-anchor="middle">11:02</text></g>
</g>
<!-- the x-ray of her brain -->
<circle cx="650" cy="540" r="84" fill="#FBF7EF"/>
<g clip-path="url(#ns-c8-brain)">
  <rect x="560" y="450" width="180" height="180" fill="#1E2632"/>
  <path d="M600 560 C590 520 620 490 650 496 C680 486 712 510 704 548 C716 570 696 596 672 590 C660 606 620 604 610 586 C590 584 590 566 600 560 Z" fill="none" stroke="#CFE3F2" stroke-width="2.4"/>
  <g stroke="#7FE0B0" stroke-width="1.6" fill="none"><path d="M616 556 h20 v-20 h24 M636 556 v20 h30 M660 536 h26 v24 M630 520 l10 0 M676 576 l12 0"/></g>
  <g fill="#7FE0B0"><circle cx="660" cy="536" r="3"/><circle cx="636" cy="576" r="3"/><circle cx="686" cy="560" r="3"/></g>
  <g transform="translate(674 520) scale(.7)"><path d="M-10 6 C-12 -6 -6 -12 0 -10 L4 -18 L8 -10 L12 -18 L14 -8 C20 -4 18 8 10 10 Z" fill="none" stroke="${P}" stroke-width="2.4"/></g>
</g>
${A.ink('<circle cx="650" cy="540" r="84"/><circle cx="650" cy="540" r="76" stroke-width="1.4"/>', 3)}
<path d="M432 490 C500 480 540 500 568 520" stroke="${G}" stroke-width="1.6" stroke-dasharray="3 6" fill="none" opacity=".6"/>`, true)
    // the line of sight: through two walls, to the comma
    + A.sp([140, 220, 300, 280], '', `<path class="ns-flow" d="M424 484 C360 420 260 330 166 252" fill="none" stroke="${E}" stroke-width="3" stroke-dasharray="2 10" stroke-linecap="round"/>`)
    // the radar around her: she is always scanning
    + A.sp([354, 418, 140, 140], 'a-spin', `<path d="M424 488 L424 418 A70 70 0 0 1 486 456 Z" fill="${E}" opacity=".16"/>`, [424, 488], '--d:4s')
    // her, from above: a neat bun and a very small antenna
    + A.sp([396, 446, 60, 76], 'a-drift', `<circle cx="424" cy="490" r="22" fill="#C08A5E"/><circle cx="424" cy="490" r="22" fill="none" stroke="${WH}" stroke-width="2.4"/><circle cx="424" cy="482" r="9" fill="#9C6A44" stroke="${WH}" stroke-width="2"/><path d="M406 504 C414 512 434 512 442 504" stroke="${WH}" stroke-width="2" fill="none"/><path d="M432 474 L440 456" stroke="${WH}" stroke-width="2"/><circle class="ns-blip" cx="440" cy="455" r="4" fill="#7FE0B0"/>`, null, '--d:5s;--x:2px;--y:-1px')
    // the cat, head of security, tail at work
    + A.sp([420, 214, 110, 90], 'a-sway', `<g transform="translate(460 256)"><path d="M30 0 C60 10 70 -20 56 -34" stroke="#E9F1FA" stroke-width="7" stroke-linecap="round" fill="none"/></g>`, [490, 256], '--d:1.8s;--a:12deg')
    + A.base(`<g transform="translate(460 256)"><ellipse rx="34" ry="24" fill="#E9A866"/><ellipse rx="34" ry="24" fill="url(#ns-hatch2)" opacity=".35"/><circle cx="-34" cy="-2" r="16" fill="#E9A866"/><path d="M-44 -14 l-4 -12 l12 6 Z M-26 -14 l4 -12 l-12 6 Z" fill="#E9A866" stroke="${G}" stroke-width="2"/>${A.ink('<ellipse rx="34" ry="24"/><circle cx="-34" cy="-2" r="16"/>', 2.4)}<rect x="-4" y="-8" width="20" height="12" rx="2" fill="#F3E08A" stroke="${G}" stroke-width="1.2"/><text x="6" y="1" font-family="ui-monospace,monospace" font-size="6" text-anchor="middle" fill="${G}">SEC</text></g>
  ${A.note(N(c, 0), 14, 34, 520, { s: 23 })}
  ${A.arrow('M120 64 C130 120 140 170 150 206')}
  ${A.note(N(c, 1), 584, 140, 170, { s: 23 })}
  ${A.arrow('M600 200 C580 230 550 250 520 256')}
  ${A.note(N(c, 2), 584, 362, 170, { s: 22 })}
  ${A.arrow('M650 420 C652 434 652 446 650 452')}
  ${A.note(N(c, 3), 14, 646, 470, { s: 22 })}
  ${A.arrow('M300 640 C330 600 350 570 360 546')}`);
  };

  // ================= 9 · My people — the office, from the lamp straight down =================
  A.by.people = (c) => {
    // a person from above: shoulders, head, hair; r = turn
    const who = (x, y, r, hair, shirt, hs = 1) => `<g transform="translate(${x} ${y}) rotate(${r})"><ellipse cx="0" cy="8" rx="${44 * hs}" ry="${22 * hs}" fill="${shirt}" filter="url(#ns-smudge)"/><ellipse cx="0" cy="8" rx="${44 * hs}" ry="${22 * hs}" fill="none" stroke="${G}" stroke-width="2.4" filter="url(#ns-pencil)"/><circle r="${20 * hs}" fill="${hair}"/><circle r="${20 * hs}" fill="url(#ns-hatch)" opacity=".5"/><circle r="${20 * hs}" fill="none" stroke="${G}" stroke-width="2.4" filter="url(#ns-pencil)"/></g>`;
    const laptop = (x, y, r, scr) => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-34" y="-22" width="68" height="40" rx="3" fill="#C9CCD1"/><rect x="-34" y="-36" width="68" height="16" rx="2" fill="#2E3650"/>${scr || ''}${A.ink('<rect x="-34" y="-22" width="68" height="40" rx="3"/><rect x="-34" y="-36" width="68" height="16" rx="2"/>', 2)}</g>`;
    const cup = (x, y) => `<g transform="translate(${x} ${y})"><circle r="11" fill="#FBF7EF"/><circle r="8" fill="#5B3A26"/><circle r="11" fill="none" stroke="${G}" stroke-width="2"/></g>`;
    return A.base(`
<rect width="760" height="690" fill="#CDBFA9" opacity=".55"/>
<rect width="760" height="690" fill="url(#ns-hatchh)" opacity=".25"/>
<!-- the table -->
<ellipse cx="380" cy="372" rx="212" ry="134" fill="#E9DDCB"/>
<ellipse cx="380" cy="372" rx="212" ry="134" fill="url(#ns-hatch2)" opacity=".2"/>
${A.ink('<ellipse cx="380" cy="372" rx="212" ry="134"/>', 3.2)}
${laptop(380, 300, 180, '<path d="M-24 -30 h48 M-24 -26 h30" stroke="#9FB4C6" stroke-width="1.4" transform="rotate(180 0 -28)"/>')}
${laptop(250, 352, 90, '<g stroke="#9FB4C6" stroke-width=".8"><path d="M-30 -32 h60 M-30 -28 h60 M-30 -24 h60 M-14 -36 v16 M2 -36 v16 M18 -36 v16"/></g>')}
${laptop(510, 360, -90)}
${laptop(318, 446, 20, `<text x="0" y="-25" font-family="ui-monospace,monospace" font-size="7" fill="#9FE0B0" text-anchor="middle">quick fix ✓</text>`)}
${laptop(452, 448, -16)}
${cup(300, 300)}${cup(476, 296)}${cup(560, 420)}
<g transform="translate(400 370) rotate(-10)"><rect x="-40" y="-26" width="80" height="52" fill="#FBF7EF"/><path d="M-30 -12 h50 M-30 0 h40 M-30 12 h56" stroke="${G}" stroke-width="2" opacity=".5"/>${A.ink('<rect x="-40" y="-26" width="80" height="52"/>', 1.8)}<text x="30" y="20" class="ns-hand" font-size="20" fill="${E}">?</text></g>
<!-- the plant nobody waters -->
<g transform="translate(680 610)"><circle r="40" fill="#B99B7A"/>${A.ink('<circle r="40"/><circle r="30" stroke-width="1.4"/>', 2.4)}<g fill="#A08B5C" stroke="${G}" stroke-width="1.6"><path d="M0 0 L-30 -40 L-12 -6 Z"/><path d="M0 0 L36 -26 L10 -2 Z"/><path d="M0 0 L20 36 L4 6 Z"/><path d="M0 0 L-38 18 L-8 4 Z"/></g><path d="M50 20 l8 4 M-46 -30 l-8 -4" stroke="#A08B5C" stroke-width="3"/></g>
<!-- a chair left empty: Tuesday -->
<g transform="translate(150 520) rotate(-20)"><rect x="-30" y="-30" width="60" height="60" rx="12" fill="#9DB7D6" opacity=".7"/>${A.ink('<rect x="-30" y="-30" width="60" height="60" rx="12"/><path d="M-30 -36 h60" stroke-width="4"/>', 2.2)}</g>`, true)
    // the five, each at a slightly different idea of urgency
    + A.sp([330, 186, 100, 90], 'a-sway', who(380, 236, 180, '#4A3A30', '#C98E8E'), [380, 236], '--d:4s;--a:5deg')
    + A.sp([150, 310, 90, 100], 'a-sway', who(196, 356, 90, '#C9A87C', '#9DB7D6'), [196, 356], '--d:5s;--a:-6deg;--dl:-1s')
    + A.sp([520, 316, 100, 100], 'a-sway', who(568, 364, -90, '#2A2420', '#B9D3A0', 1.05), [568, 364], '--d:3.4s;--a:4deg;--dl:-2s')
    + A.sp([250, 470, 110, 90], 'a-sway', who(300, 514, 20, '#8B5A3C', '#E8D27A'), [300, 514], '--d:4.6s;--a:-4deg')
    + A.sp([420, 470, 110, 90], 'a-sway', who(470, 516, -16, '#D9C3A0', '#D9A6B8'), [470, 516], '--d:3.8s;--a:5deg;--dl:-.6s')
    // "so what?"
    + A.sp([400, 120, 170, 90], 'a-pulse', `<g transform="translate(470 160)"><path d="M-64 -30 H64 Q76 -30 76 -18 V14 Q76 26 64 26 H-20 L-46 46 L-38 26 H-64 Q-76 26 -76 14 V-18 Q-76 -30 -64 -30 Z" fill="#fff"/>${A.ink('<path d="M-64 -30 H64 Q76 -30 76 -18 V14 Q76 26 64 26 H-20 L-46 46 L-38 26 H-64 Q-76 26 -76 14 V-18 Q-76 -30 -64 -30 Z"/>', 2.2)}<text y="8" class="ns-hand" font-size="26" font-weight="700" fill="${G}" text-anchor="middle">so what?</text></g>`, null, '--d:1.8s;--a:1.03')
    // the light from the lamp: that's me, swinging a little
    + A.sp([60, 40, 640, 640], 'a-drift', `<ellipse cx="380" cy="360" rx="300" ry="300" fill="url(#ns-glow)" opacity=".35"/>`, null, '--d:6s;--x:14px;--y:6px')
    // steam from the cups
    + [[300, 300], [476, 296], [560, 420]].map(([x, y], i) => A.sp([x - 14, y - 70, 28, 70], 'a-steam', `<path d="M${x} ${y - 10} c-8 -16 8 -24 0 -40 c-6 -12 6 -18 2 -28" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" filter="url(#ns-b4)"/>`, null, `--d:5s;--dl:${-i * 1.6}s`)).join('')
    + A.base(`
  ${A.note(N(c, 3), 14, 34, 330, { s: 24 })}
  ${A.note(N(c, 0), 590, 110, 160, { s: 22 })}
  ${A.arrow('M600 134 C580 140 560 146 548 150')}
  ${A.note(N(c, 1), 14, 610, 250, { s: 22 })}
  ${A.arrow('M150 600 C200 560 250 500 286 462')}
  ${A.note(N(c, 2), 400, 616, 220, { s: 22 })}
  ${A.arrow('M600 630 C614 624 626 618 636 614')}`);
  };

  // ================= 10 · The day — from inside the screen, looking out =================
  A.by.day = (c) => {
    const said = ((c.p[0] || '').match(/[“«"]([^”»"]+)[”»"]/) || [])[1] || '';
    const face = (x, y, r, kind) => {
      const hair = { a: `<path d="M${x - r} ${y - 10} C${x - r} ${y - r - 20} ${x + r} ${y - r - 20} ${x + r} ${y - 10} C${x + r * .5} ${y - r * .7} ${x - r * .5} ${y - r * .7} ${x - r} ${y - 10} Z" fill="#2A1E18"/>`,
        b: `<path d="M${x - r - 6} ${y + 20} C${x - r - 20} ${y - r - 30} ${x + r + 20} ${y - r - 30} ${x + r + 6} ${y + 20} C${x + r * .7} ${y - r * .5} ${x - r * .7} ${y - r * .5} ${x - r - 6} ${y + 20} Z" fill="#3B2A22"/>`,
        c: `<path d="M${x - r * .8} ${y - r * .6} q${r * .8} -${r * .6} ${r * 1.6} 0" stroke="#2A1E18" stroke-width="10" fill="none" stroke-linecap="round"/>` }[kind] || '';
      return `<g><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.15}" fill="#3A2A2A"/><ellipse cx="${x}" cy="${y + r * .25}" rx="${r * .9}" ry="${r * .95}" fill="#F2B38E" opacity=".9" filter="url(#ns-b8)"/>${hair}
<g fill="none" stroke="#1B1410" stroke-width="3" stroke-linecap="round"><path d="M${x - r * .45} ${y} q${r * .15} -${r * .14} ${r * .3} 0 M${x + r * .15} ${y} q${r * .15} -${r * .14} ${r * .3} 0"/><path d="M${x - r * .32} ${y + r * .42} q${r * .32} ${r * .3} ${r * .64} 0"/></g></g>`;
    };
    return A.base(`
<defs><radialGradient id="ns-c10-room" cx=".5" cy=".6" r=".7"><stop offset="0" stop-color="#3A2A2E"/><stop offset="1" stop-color="#0E0C12"/></radialGradient>
<linearGradient id="ns-c10-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".1"/><stop offset=".3" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
<rect width="760" height="690" fill="url(#ns-c10-room)"/>
<rect width="760" height="690" filter="url(#ns-grain)" opacity=".6"/>
<!-- a window behind them: the city, still up -->
<g opacity=".5" transform="translate(56 26) scale(.8)"><rect x="520" y="40" width="200" height="150" fill="#1C2236"/><g fill="#F4C9A0">${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<rect x="${534 + (i % 5) * 36}" y="${120 + ((i * 7) % 3) * 18}" width="6" height="8"/>`).join('')}</g><path d="M520 40 h200 v150 h-200 Z M620 40 v150" fill="none" stroke="#5A5060" stroke-width="3"/></g>
<!-- the desk edge, the cake -->
<path d="M0 560 C200 548 560 548 760 560 L760 690 L0 690 Z" fill="#2A2022"/>
<g transform="translate(380 586)"><ellipse cx="0" cy="34" rx="96" ry="20" fill="#F2B38E" opacity=".25" filter="url(#ns-b8)"/><path d="M-80 0 V40 C-80 56 80 56 80 40 V0 Z" fill="#F6E3C6"/><ellipse cx="0" cy="0" rx="80" ry="18" fill="#FFF4E6"/><path d="M-80 10 C-60 30 -40 0 -20 18 C0 32 20 2 40 18 C60 30 70 6 80 12" fill="none" stroke="${E}" stroke-width="5" opacity=".8"/><text y="5" class="ns-hand" font-size="16" fill="${E}" text-anchor="middle">v1.0</text><rect x="-3" y="-34" width="6" height="30" fill="#9DB7D6"/></g>`, true)
    // their faces, lit by me
    + A.sp([90, 200, 220, 260], 'a-drift', face(200, 320, 78, 'b'), null, '--d:7s;--x:2px;--y:-4px')
    + A.sp([270, 150, 220, 280], 'a-drift', face(380, 280, 90, 'a'), null, '--d:6s;--x:-2px;--y:-5px;--dl:-2s')
    + A.sp([450, 220, 210, 250], 'a-drift', face(556, 330, 74, 'c') + `<path d="M500 420 C506 386 530 380 540 400 M612 420 C606 386 582 380 572 400" stroke="#F2B38E" stroke-width="14" stroke-linecap="round" fill="none" opacity=".8"/>`, null, '--d:6.5s;--x:3px;--y:-3px;--dl:-4s')
    // the glow I put on them, breathing
    + A.sp([60, 130, 640, 440], 'a-pulse', `<ellipse cx="380" cy="350" rx="300" ry="200" fill="${P}" opacity=".16" filter="url(#ns-b24)"/>`, null, '--d:3.2s;--a:1.03')
    // the candle
    + A.sp([370, 530, 20, 30], 'a-flick', `<path d="M380 532 C372 544 374 556 380 558 C386 556 388 544 380 532 Z" fill="#FFD27A"/><circle cx="380" cy="552" r="10" fill="#FFD27A" opacity=".4" filter="url(#ns-b4)"/>`, null, '--d:.35s')
    // what they typed, backwards from in here
    + A.base(`<rect width="760" height="690" fill="url(#ns-c10-glass)"/>
<text transform="translate(330 128) scale(-1 1)" class="ns-hand" font-size="${Math.min(46, Math.round(1150 / Math.max(1, said.length)))}" font-weight="700" fill="#FFE2C8" text-anchor="middle" opacity=".9"${A.dir()}>${A.esc(said)}</text>
<rect x="18" y="18" width="724" height="654" rx="18" fill="none" stroke="#000" stroke-width="22" opacity=".5"/>
<text x="740" y="40" font-family="ui-monospace,monospace" font-size="13" fill="#F3D9C4" text-anchor="end" opacity=".8">23:46</text>`)
    // me, in the corner of the screen, with a pixel that is definitely not a tear
    + A.sp([600, 560, 120, 90], 'a-bob', `${A.me(660, 612, 1.4)}`, null, '--d:3s;--a:-3px')
    + A.sp([668, 616, 12, 60], 'a-fall', `<rect x="670" y="618" width="5" height="5" fill="#9FD3FF"/><rect x="671" y="626" width="3" height="3" fill="#9FD3FF" opacity=".6"/>`, null, '--d:2.6s;--y:46px')
    + A.base(`
  <text x="740" y="${c.n ? 532 : 0}" font-family="ui-monospace,monospace" font-size="22" fill="${P}" text-anchor="end" data-count="50399">50399</text>
  ${A.note(N(c, 0), 14, 40, 330, { s: 23, c: LIGHT })}
  ${A.arrow('M100 74 C120 120 140 170 156 230')}
  ${A.note(N(c, 1), 14, 610, 230, { s: 22, c: LIGHT })}
  ${A.arrow('M200 630 C240 630 270 620 296 606')}
  ${A.note(N(c, 2), 470, 600, 120, { s: 22 })}
  ${A.arrow('M590 606 C610 612 626 616 640 618')}
  ${A.note(N(c, 3), 740, 494, 220, { s: 20, c: LIGHT, a: 'end' })}`);
  };
})();
