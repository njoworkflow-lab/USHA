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

  // ================= Expert no. 142 — the warehouse at 6 a.m., isometric =================
  A.by.factory = (c) => {
    const S = 34, ox = 380, oy = 250;
    const iso = (x, y, z) => [ox + (x - y) * 0.87 * S, oy + (x + y) * 0.5 * S - z * S];
    const pt = (p) => p.map((v) => v.toFixed(1)).join(' ');
    const box = (x, y, z, w, d, h, top, left, right, extra = '') => {
      const a = iso(x, y, z + h), b = iso(x + w, y, z + h), cc = iso(x + w, y + d, z + h), dd = iso(x, y + d, z + h), e = iso(x + w, y + d, z), f = iso(x, y + d, z), g = iso(x + w, y, z);
      return `<path d="M${pt(a)} L${pt(b)} L${pt(cc)} L${pt(dd)} Z" fill="${top}"/><path d="M${pt(dd)} L${pt(cc)} L${pt(e)} L${pt(f)} Z" fill="${left}"/><path d="M${pt(cc)} L${pt(b)} L${pt(g)} L${pt(e)} Z" fill="${right}"/><path d="M${pt(a)} L${pt(b)} L${pt(cc)} L${pt(dd)} Z M${pt(dd)} L${pt(f)} L${pt(e)} L${pt(cc)} M${pt(e)} L${pt(g)} L${pt(b)}" fill="none" stroke="${G}" stroke-width="1.6" stroke-linejoin="round"/>${extra}`;
    };
    const pallet = (x, y, z, load = 1) => box(x, y, z, 1, 1, .18, '#D8B988', '#B8925E', '#C9A170') + (load ? box(x + .08, y + .08, z + .18, .84, .84, .64, '#E3C9A0', '#B99B7A', '#CDB08A') : '');
    let stack = '';
    // the viral campaign: a pyramid of pallets
    const rows = [[0, 4], [1, 3], [2, 2], [3, 1]];
    const items = [];
    rows.forEach(([lv, n]) => { for (let i = 0; i < n; i++) items.push([4 + i + lv * 0.5, 1, lv * 0.82]); });
    items.sort((p, q) => p[2] - q[2] || (p[0] + p[1]) - (q[0] + q[1])).forEach(([x, y, z]) => { stack += pallet(x, y, z); });
    let floor = '';
    for (let i = -2; i <= 10; i++) { const a = iso(i, -2, 0), b = iso(i, 9, 0), cc = iso(-2, i, 0), d = iso(9, i, 0); floor += `<path d="M${pt(a)} L${pt(b)} M${pt(cc)} L${pt(d)}"/>`; }
    const door = [iso(-2, 1, 0), iso(-2, 1, 4), iso(-2, 5, 4), iso(-2, 5, 0)];
    const lbl = iso(5.5, 1, 3.6);
    return A.base(`
<defs><linearGradient id="ns-c-dawn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFC690" stop-opacity=".9"/><stop offset="1" stop-color="#FFC690" stop-opacity="0"/></linearGradient></defs>
<rect width="760" height="690" fill="#D9D2C6" opacity=".5"/>
<g fill="none" stroke="${G}" stroke-width=".8" opacity=".25">${floor}</g>
<!-- the roller door, and the dawn coming in -->
<path d="M${pt(door[0])} L${pt(door[1])} L${pt(door[2])} L${pt(door[3])} Z" fill="#FFE2B8"/>
<path d="M${pt(door[0])} L${pt(door[3])} L${pt(iso(4, 5, 0))} L${pt(iso(4, 1, 0))} Z" fill="url(#ns-c-dawn)" opacity=".6"/>
${A.ink(`<path d="M${pt(door[0])} L${pt(door[1])} L${pt(door[2])} L${pt(door[3])}"/>`, 2.6)}
<g fill="none" stroke="${G}" stroke-width="1" opacity=".4">${[1, 2, 3].map((z) => `<path d="M${pt(iso(-2, 1, 3.4 + z * .15))} L${pt(iso(-2, 5, 3.4 + z * .15))}"/>`).join('')}</g>
<g transform="translate(${iso(-2, 3, 4.6)[0]} ${iso(-2, 3, 4.6)[1]})"><rect x="-30" y="-16" width="60" height="28" rx="4" fill="#2A2420"/><text y="5" font-family="ui-monospace,monospace" font-size="15" fill="#FF8A4C" text-anchor="middle">06:00</text></g>
${stack}
<text x="${lbl[0]}" y="${lbl[1]}" font-family="ui-monospace,monospace" font-weight="700" font-size="15" fill="${E}" text-anchor="middle">VIRAL!!</text>
<!-- the unit of truth, front and centre -->
${pallet(1.2, 6.6, 0, 0)}
<!-- him: hard hat, vest, clipboard -->
<g transform="translate(150 470)"><path d="M-26 90 L-22 20 C-20 4 20 4 22 20 L26 90 Z" fill="#E8D27A"/><path d="M-26 50 h52" stroke="#FBF7EF" stroke-width="5"/><circle cy="-8" r="16" fill="#E7C2A3"/><path d="M-20 -12 C-20 -34 20 -34 20 -12 Z" fill="${E}"/><path d="M-24 -12 h48" stroke="${G}" stroke-width="2"/>${A.ink('<path d="M-26 90 L-22 20 C-20 4 20 4 22 20 L26 90"/><circle cy="-8" r="16"/><path d="M-20 -12 C-20 -34 20 -34 20 -12"/>', 2.2)}<g transform="translate(26 40) rotate(-10)"><rect x="-12" y="-16" width="24" height="32" fill="#FBF7EF" stroke="${G}" stroke-width="1.6"/><path d="M-7 -6 h14 M-7 0 h14 M-7 6 h10" stroke="${G}" stroke-width="1"/></g></g>`, true)
    // the forklift, his emotional support vehicle
    + A.sp([500, 400, 200, 160], 'a-drift', `<g transform="translate(600 480)"><path d="M-60 30 h80 v-40 h-30 l-10 -30 h-30 Z" fill="#E0A73A"/>${A.ink('<path d="M-60 30 h80 v-40 h-30 l-10 -30 h-30 Z M-40 -40 V-10 M-60 -10 h50"/><circle cx="-40" cy="34" r="12"/><circle cx="6" cy="34" r="12"/><path d="M28 -60 V30 M28 20 h36 M28 0 h36" stroke-width="3"/>', 2.6)}<path d="M-22 -26 c-6 -10 -18 -4 -12 6 l12 10 l12 -10 c6 -10 -6 -16 -12 -6 Z" fill="${E}"/></g>`, null, '--d:4s;--x:-40px;--y:-22px')
    + A.base(`
  ${A.note(N(c, 0), 14, 600, 300, { s: 22 })}
  ${A.arrow(`M200 610 C${iso(1.7, 7.1, .2)[0] - 40} 610 ${iso(1.7, 7.1, .2)[0] - 10} ${iso(1.7, 7.1, .2)[1] + 20} ${iso(1.7, 7.1, .2)[0]} ${iso(1.7, 7.1, .2)[1] + 6}`)}
  ${A.note(N(c, 1), 470, 40, 280, { s: 23 })}
  ${A.arrow(`M560 70 C540 90 ${lbl[0] + 30} ${lbl[1] - 40} ${lbl[0] + 10} ${lbl[1] - 20}`)}
  ${A.note(N(c, 2), 540, 620, 216, { s: 22 })}
  ${A.arrow('M600 610 C596 590 594 570 592 546')}
  ${A.note(N(c, 3), 14, 40, 240, { s: 23 })}
  ${A.arrow(`M100 70 C110 110 ${iso(-2, 3, 4.6)[0] - 60} ${iso(-2, 3, 4.6)[1] - 10} ${iso(-2, 3, 4.6)[0] - 34} ${iso(-2, 3, 4.6)[1]}`)}`);
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
    const bub = (x, y, w, t) => `<g><path d="M${x} ${y} h${w} v70 h-${w - 60} l-20 22 l2 -22 h-${40} Z" fill="#fff"/>${A.ink(`<path d="M${x} ${y} h${w} v70 h-${w - 60} l-20 22 l2 -22 h-${40} Z"/>`, 2)}${A.note(t, x + 12, y + 28, w - 24, { s: 19, c: 'g' })}</g>`;
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
    + A.base(pan.map(([x, y], i) => `<rect x="${x + 10}" y="${y + 10}" width="${PW - 20}" height="34" fill="#F3E08A"/>${A.ink(`<rect x="${x + 10}" y="${y + 10}" width="${PW - 20}" height="34"/>`, 1.6)}${A.note(N(c, i), x + 20, y + 34, PW - 40, { s: 20 })}`).join(''));
  };
})();
