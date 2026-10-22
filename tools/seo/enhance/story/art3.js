// USHA's story: drawings for chapters 11 to 15 (the clients, now, and you).
(() => {
  const A = window.USHA_ART;
  const G = '#2A2420', E = '#FF5A1F', P = '#FFB48A';
  const N = (c, i) => (c.n || [])[i];
  const stamp = (x, y, r, inner, col = '#E9C9A6') => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-26" y="-32" width="52" height="64" fill="${col}"/><rect x="-26" y="-32" width="52" height="64" fill="none" stroke="#FBF7EF" stroke-width="5" stroke-dasharray="3 3"/><rect x="-21" y="-27" width="42" height="54" fill="none" stroke="${G}" stroke-width="1.4"/>${inner}</g>`;
  const postmark = (x, y, t) => `<g transform="translate(${x} ${y})" opacity=".55" fill="none" stroke="${G}" stroke-width="1.6"><circle r="26"/><circle r="20"/><path d="M30 -8 c10 -6 20 6 30 0 s20 6 30 0 M30 2 c10 -6 20 6 30 0 s20 6 30 0 M30 12 c10 -6 20 6 30 0 s20 6 30 0"/><text y="4" font-family="ui-monospace,monospace" font-size="8" fill="${G}" stroke="none" text-anchor="middle">${t}</text></g>`;

  // ================= 11 · The Gulf — two postcards on a table =================
  A.by.gulf = (c) => {
    const crowd = [[468, 560], [502, 566], [536, 556], [572, 568], [606, 558]];
    return A.base(`
<rect width="760" height="690" fill="#C9A87C" opacity=".35" filter="url(#ns-smudge)"/>
<rect width="760" height="690" fill="url(#ns-hatch2)" opacity=".12"/>
<!-- Dubai -->
<g transform="rotate(-5 230 190)">
  <rect x="38" y="70" width="400" height="260" fill="${G}" opacity=".2" filter="url(#ns-b8)"/>
  <rect x="30" y="60" width="400" height="260" fill="#FBF3E6"/>
  <rect x="44" y="74" width="372" height="232" fill="#F7D9B4" opacity=".75"/>
  <circle cx="330" cy="140" r="34" fill="#FFC690" opacity=".8" filter="url(#ns-b8)"/>
  <path d="M44 260 C120 230 200 250 260 236 C320 224 380 240 416 232 V306 H44 Z" fill="#E3B98A"/>
  <g fill="#C9B7A2" opacity=".9"><path d="M90 236 V170 h20 v66 Z M116 236 V140 h14 v96 Z M148 236 V118 l8 -40 l8 40 V236 Z M176 236 V160 h22 v76 Z M206 236 V186 h16 v50 Z"/></g>
  ${A.ink('<rect x="30" y="60" width="400" height="260"/><rect x="44" y="74" width="372" height="232" stroke-width="1.6"/><path d="M90 236 V170 h20 v66 M116 236 V140 h14 v96 M148 236 V118 l8 -40 l8 40 V236 M176 236 V160 h22 v76 M206 236 V186 h16 v50 M44 260 C120 230 200 250 260 236 C320 224 380 240 416 232" stroke-width="1.8"/>', 2.6)}
  <text x="60" y="108" font-family="ui-monospace,monospace" font-weight="700" font-size="22" letter-spacing="6" fill="${E}">DUBAI</text>
  <!-- the product: oud -->
  <g transform="translate(110 270)"><path d="M-16 0 C-22 -30 -10 -40 -8 -48 H8 C10 -40 22 -30 16 0 Z" fill="#8B3A4A"/><path d="M-6 -48 h12 v-10 h-12 Z" fill="#E0A73A"/><circle cy="-64" r="8" fill="#E0A73A"/>${A.ink('<path d="M-16 0 C-22 -30 -10 -40 -8 -48 H8 C10 -40 22 -30 16 0 Z M-6 -48 h12 v-10 h-12 Z"/><circle cy="-64" r="8"/>', 2)}<text y="-16" class="ns-hand" font-size="12" fill="#FBF3E6" text-anchor="middle">oud</text></g>
  <!-- the budget: two coffees -->
  <g transform="translate(350 282)"><g id="ns-c11-f"><path d="M-10 -10 h20 l-4 14 h-12 Z" fill="#FBF7EF"/><path d="M-10 -10 h20 l-4 14 h-12 Z" fill="none" stroke="${G}" stroke-width="1.8"/></g><use href="#ns-c11-f" x="26"/></g>
  ${stamp(392, 110, 6, `<path d="M-10 18 C-10 0 0 -10 0 -16 C0 -10 10 0 10 18 Z M-14 -2 c6 -8 22 -8 28 0" fill="none" stroke="${G}" stroke-width="1.6"/>`)}
</g>
<!-- Riyadh -->
<g transform="rotate(4 525 470)">
  <rect x="328" y="352" width="410" height="260" fill="${G}" opacity=".2" filter="url(#ns-b8)"/>
  <rect x="320" y="340" width="410" height="260" fill="#FBF3E6"/>
  <rect x="334" y="354" width="382" height="232" fill="#EFE0C8"/>
  <!-- the café -->
  <rect x="380" y="410" width="250" height="140" fill="#E9D4B0"/>
  <path d="M370 410 h270 l-14 -30 h-242 Z" fill="#C98E8E"/>
  <g fill="#FBF7EF">${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${388 + i * 36} 380 h18 l6 30 h-18 Z"/>`).join('')}</g>
  <rect x="400" y="440" width="110" height="80" fill="#9FB4C6" opacity=".7"/>
  ${A.ink('<rect x="320" y="340" width="410" height="260"/><rect x="334" y="354" width="382" height="232" stroke-width="1.6"/><rect x="380" y="410" width="250" height="140"/><path d="M370 410 h270 l-14 -30 h-242 Z"/><rect x="400" y="440" width="110" height="80"/><rect x="540" y="450" width="56" height="100"/>', 2.4)}
  <text x="350" y="580" font-family="ui-monospace,monospace" font-weight="700" font-size="20" letter-spacing="6" fill="${E}">RIYADH</text>
  <!-- inside: him, filming himself for the wrong app -->
  <circle cx="440" cy="474" r="12" fill="#C99B78" stroke="${G}" stroke-width="2"/><path d="M426 520 C426 494 454 494 454 520" fill="#5A4E45" stroke="${G}" stroke-width="2"/>
  <path d="M478 520 L488 486 L498 520 M488 486 v-8" stroke="${G}" stroke-width="1.8" fill="none"/><rect x="480" y="466" width="16" height="12" rx="2" fill="#2A2420"/>
  ${stamp(690, 388, -5, `<path d="M0 -14 C-14 -4 -14 14 0 18 C14 14 14 -4 0 -14 Z M0 -14 V18" fill="none" stroke="${G}" stroke-width="1.6"/>`, '#BFD3B0')}
  ${postmark(620, 386, 'RUH')}
</g>`, true)
    // the Lamborghini, imagined: a dotted outline that never quite arrives
    + A.sp([220, 190, 200, 80], 'a-drift', `<g transform="rotate(-5 230 190)"><path class="ns-flow" d="M232 254 L240 240 L292 232 L316 214 L356 214 L378 230 L404 240 L404 254 Z M300 232 L322 220 L352 220 L366 232 Z" fill="none" stroke="${E}" stroke-width="2.6" stroke-dasharray="4 7" stroke-linecap="round"/><circle cx="268" cy="256" r="11" fill="none" stroke="${E}" stroke-width="2.4" stroke-dasharray="3 5"/><circle cx="374" cy="256" r="11" fill="none" stroke="${E}" stroke-width="2.4" stroke-dasharray="3 5"/></g>`, null, '--d:3s;--x:8px')
    // heat over the dunes
    + A.sp([60, 210, 340, 40], 'a-drift', `<g transform="rotate(-5 230 190)" fill="none" stroke="#fff" stroke-width="2" opacity=".6"><path d="M80 236 c20 -6 40 6 60 0 s40 6 60 0 M240 228 c20 -6 40 6 60 0 s40 6 60 0"/></g>`, null, '--d:2.4s;--x:10px')
    // the customers, outside, on the other app
    + crowd.map(([x, y], i) => A.sp([x - 18, y - 70, 36, 90], 'a-drift', `<g transform="rotate(4 525 470)"><circle cx="${x}" cy="${y - 50}" r="10" fill="#C99B78" stroke="${G}" stroke-width="2"/><path d="M${x - 14} ${y + 14} C${x - 14} ${y - 30} ${x + 14} ${y - 30} ${x + 14} ${y + 14}" fill="${['#9DB7D6', '#F3EEE8', '#B9D3A0', '#F3EEE8', '#D9A6B8'][i]}" stroke="${G}" stroke-width="2"/><rect x="${x - 4}" y="${y - 36}" width="10" height="16" rx="2" fill="#FFE45C" stroke="${G}" stroke-width="1.4"/></g>`, null, `--d:${2 + i * 0.3}s;--x:${i % 2 ? 2 : -2}px;--y:-2px`)).join('')
    // his music, going nowhere
    + A.sp([500, 430, 40, 40], 'a-bob', `<g transform="rotate(4 525 470)"><path d="M512 462 v-22 l14 -4 v20" stroke="${G}" stroke-width="2" fill="none"/><circle cx="508" cy="462" r="4" fill="${G}"/><circle cx="522" cy="456" r="4" fill="${G}"/></g>`, null, '--d:1.2s;--a:-6px')
    // the pigeon delivered these, obviously
    + A.sp([684, 560, 52, 50], 'a-peck', A.pigeon(708, 604, .9, true) + A.pigeonHead(708, 604, .9, true), null, '--d:2.8s')
    + A.base(`
  ${A.note(N(c, 0), 476, 60, 270, { s: 23 })}
  ${A.arrow('M480 86 C440 120 410 170 400 210')}
  ${A.note(N(c, 1), 476, 200, 270, { s: 23 })}
  ${A.arrow('M480 220 C440 250 410 270 396 280')}
  ${A.note(N(c, 2), 14, 420, 280, { s: 23 })}
  ${A.arrow('M150 470 C260 520 380 540 440 540')}
  ${A.note(N(c, 3), 14, 650, 640, { s: 22, c: 'g' })}`);
  };

  // ================= 12 · Cairo · Moscow — a scale and a doll =================
  A.by.cairo = (c) => {
    const doll = (x, y, s, col, inner = '') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 0 C-34 -40 -26 -70 -18 -80 C-30 -96 -24 -124 0 -124 C24 -124 30 -96 18 -80 C26 -70 34 -40 30 0 Z" fill="${col}"/><ellipse cy="-98" rx="14" ry="13" fill="#F6DCC6"/><circle cx="-5" cy="-100" r="1.8" fill="${G}"/><circle cx="5" cy="-100" r="1.8" fill="${G}"/><circle cx="-8" cy="-93" r="3" fill="#E89A9A" opacity=".7"/><circle cx="8" cy="-93" r="3" fill="#E89A9A" opacity=".7"/><path d="M-12 -46 C-12 -30 12 -30 12 -46 C12 -60 -12 -60 -12 -46 Z" fill="#FBF7EF" opacity=".85"/>${inner}<path d="M-30 0 C-34 -40 -26 -70 -18 -80 C-30 -96 -24 -124 0 -124 C24 -124 30 -96 18 -80 C26 -70 34 -40 30 0 Z" fill="none" stroke="${G}" stroke-width="${2.4 / s}"/></g>`;
    return A.base(`
<defs><clipPath id="ns-c12-r"><path d="M392 0 L760 0 L760 690 L360 690 L380 520 L366 340 L388 170 Z"/></clipPath></defs>
<!-- Cairo: warm -->
<rect width="760" height="690" fill="#F2D1A8" opacity=".55"/>
<path d="M30 300 L120 180 L210 300 Z M170 300 L240 206 L310 300 Z" fill="#E3B98A"/>
${A.ink('<path d="M30 300 L120 180 L210 300 M170 300 L240 206 L310 300 M120 180 L132 300 M240 206 L250 300" stroke-width="2"/><path d="M0 300 H380" stroke-width="1.6"/>')}
<path d="M300 300 v-50 l26 44 Z" fill="#FBF7EF" stroke="${G}" stroke-width="1.8"/><path d="M286 300 h46 l-6 8 h-34 Z" fill="#8B6A4E"/>
<!-- the scale's stand -->
<path d="M190 300 V560 M150 560 h80" stroke="#B88A3A" stroke-width="8" stroke-linecap="round"/>
${A.ink('<path d="M186 300 V556 M194 300 V556 M146 556 h88 v10 h-88 Z"/>', 2)}
<circle cx="190" cy="296" r="9" fill="#E0A73A" stroke="${G}" stroke-width="2"/>
<!-- tea, three sugars -->
<g transform="translate(300 600)"><path d="M-18 -50 h36 l-5 52 h-26 Z" fill="#C8572F" opacity=".75"/><path d="M-18 -50 h36 l-5 52 h-26 Z" fill="none" stroke="${G}" stroke-width="2.2"/><ellipse cy="-50" rx="18" ry="4" fill="#E9A866" stroke="${G}" stroke-width="1.6"/><path d="M-2 -60 l10 -30" stroke="#B9BDC3" stroke-width="3"/><g fill="#FBF7EF" stroke="${G}" stroke-width="1.4"><rect x="30" y="-12" width="12" height="12"/><rect x="44" y="-12" width="12" height="12"/><rect x="37" y="-24" width="12" height="12"/></g></g>
<!-- Moscow: cold, on the other side of the tear -->
<g clip-path="url(#ns-c12-r)">
  <rect width="760" height="690" fill="#DCE4EA"/>
  <rect width="760" height="690" fill="url(#ns-hatch)" opacity=".18"/>
  <rect x="560" y="60" width="170" height="160" fill="#B9C8D6"/>
  ${A.ink('<rect x="560" y="60" width="170" height="160"/><path d="M645 60 V220 M560 140 H730"/>', 2.6)}
  <g fill="none" stroke="#fff" stroke-width="2" opacity=".8"><path d="M570 210 c10 -20 30 -10 30 -30 M720 70 c-10 20 -30 10 -30 30 M570 70 c20 4 20 20 34 24"/></g>
  <path d="M380 560 H760" stroke="${G}" stroke-width="2" opacity=".5"/>
  <!-- the folder -->
  <g transform="translate(470 190) rotate(-6)"><rect x="-80" y="-60" width="160" height="116" fill="#D8C089"/><path d="M-80 -60 h60 l10 -12 h40 v12" fill="#D8C089"/>${A.ink('<rect x="-80" y="-60" width="160" height="116"/><path d="M-80 -60 h60 l10 -12 h40 v12"/>', 2.4)}<g transform="rotate(-14)"><rect x="-64" y="-14" width="128" height="34" fill="none" stroke="${E}" stroke-width="3"/><text y="10" font-family="ui-monospace,monospace" font-weight="700" font-size="17" fill="${E}" text-anchor="middle">TOP SECRET</text></g></g>
  <!-- the dolls, smaller and smaller, until the truth -->
  ${doll(450, 556, 1.15, '#C8402F')}${doll(552, 556, .9, '#3D6A9E')}${doll(630, 556, .7, '#E0A73A')}${doll(688, 556, .5, '#5E8F5A')}
</g>
<path d="M392 0 L388 170 L366 340 L380 520 L360 690" fill="none" stroke="${G}" stroke-width="3" filter="url(#ns-pencil)"/>
<path d="M396 0 L392 170 L370 340 L384 520 L364 690" fill="none" stroke="#FBF7EF" stroke-width="4" opacity=".9"/>`, true)
    // the scale, never quite balancing: half the advice, half the result
    + A.sp([60, 260, 260, 210], 'a-sway', `<path d="M90 300 H290" stroke="#B88A3A" stroke-width="7" stroke-linecap="round"/>${A.ink('<path d="M90 296 H290 M90 304 H290"/>', 1.6)}
<g fill="none" stroke="${G}" stroke-width="1.6"><path d="M90 300 L60 400 M90 300 L120 400 M290 300 L260 400 M290 300 L320 400"/></g>
<path d="M50 400 C60 424 120 424 130 400 Z" fill="#E0A73A" stroke="${G}" stroke-width="2"/><path d="M250 400 C260 424 320 424 330 400 Z" fill="#E0A73A" stroke="${G}" stroke-width="2"/>
<g transform="translate(90 386)"><path d="M-22 -16 h30 l-6 8 l6 8 l-6 8 h-24 Z" fill="#FBF7EF" stroke="${G}" stroke-width="1.8"/><text x="-8" y="2" class="ns-hand" font-size="12" text-anchor="middle" fill="${G}">½</text></g>
<g transform="translate(290 386)"><path d="M-14 4 v-20 l14 -10 v30 Z" fill="${P}" stroke="${G}" stroke-width="1.8"/><text x="10" y="2" class="ns-hand" font-size="12" fill="${G}">½</text></g>`, [190, 300], '--d:3.6s;--a:5deg')
    // the steam from the tea
    + A.sp([286, 470, 30, 70], 'a-steam', `<path d="M300 540 c-8 -16 8 -24 0 -40 c-6 -12 6 -18 2 -28" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" filter="url(#ns-b4)"/>`, null, '--d:5s')
    // the smallest doll's top, lifting: 32%
    + A.sp([716, 470, 60, 90], 'a-bob', doll(744, 556, .32, '#9C8FB0'), null, '--d:2.2s;--a:-26px')
    + A.base(`<g transform="translate(744 548)"><rect x="-20" y="-14" width="40" height="18" fill="#FBF7EF" stroke="${E}" stroke-width="2"/><text y="0" class="ns-hand" font-size="15" font-weight="700" fill="${E}" text-anchor="middle">32%</text></g>`)
    // snow on the Moscow side
    + [[420, 20], [520, -10], [610, 30], [700, 0], [470, 60]].map(([x, y], i) => A.sp([x - 6, y, 12, 12], 'a-fall', `<circle cx="${x}" cy="${y + 6}" r="3.4" fill="#fff" stroke="#9FB4C6" stroke-width="1"/>`, null, `--d:${7 + i}s;--dl:${-i * 1.7}s;--y:${380 - (i % 2) * 60}px`)).join('')
    + A.base(`
  ${A.note(N(c, 0), 14, 34, 340, { s: 23 })}
  ${A.arrow('M120 64 C140 120 170 200 186 286')}
  ${A.note(N(c, 1), 410, 34, 140, { s: 22 })}
  ${A.arrow('M470 96 C470 110 470 116 470 122')}
  ${A.note(N(c, 2), 430, 640, 320, { s: 22 })}
  ${A.arrow('M700 620 C716 600 730 586 738 566')}
  ${A.note(N(c, 3), 14, 640, 250, { s: 22 })}
  ${A.arrow('M200 640 C230 620 256 606 276 600')}`);
  };

  // ================= 13 · "USHA was wrong!" — a courtroom sketch =================
  A.by.court = (c) => {
    return A.base(`
<rect width="760" height="690" fill="#E6D3BC" opacity=".55"/>
<g opacity=".6" filter="url(#ns-smudge)"><path d="M0 0 H760 V14 H0 Z" fill="#8B6A4E"/><path d="M0 470 H760 V690 H0 Z" fill="#A98A6A" opacity=".5"/></g>
<!-- the bench -->
<path d="M210 150 H550 V240 H210 Z" fill="#8B6A4E"/><path d="M210 150 H550 V240 H210 Z" fill="url(#ns-hatch)" opacity=".5"/>
${A.ink('<path d="M210 150 H550 V240 H210 Z M200 150 H560"/>', 3)}
<g transform="translate(380 200)"><circle r="20" fill="#E0A73A" opacity=".8"/><path d="M-10 -4 h20 M0 -12 v24 M-10 6 h20" stroke="${G}" stroke-width="1.6"/></g>
<!-- the client's podium -->
<path d="M60 440 H230 V610 H60 Z" fill="#9B7A58"/>${A.ink('<path d="M60 440 H230 V610 H60 Z M50 440 H240"/>', 3)}
<!-- the dock, and me in it -->
<path d="M540 380 H730 V560 H540 Z" fill="#9B7A58" opacity=".9"/>
${A.ink('<path d="M540 380 H730 V560 H540 Z M532 380 H738 M570 380 V560 M610 380 V560 M650 380 V560 M690 380 V560" />', 2.6)}
<!-- the bubble -->
<g transform="translate(150 140)"><path d="M-120 -40 H120 Q136 -40 136 -24 V24 Q136 40 120 40 H-20 L-30 66 L-50 40 H-120 Q-136 40 -136 24 V-24 Q-136 -40 -120 -40 Z" fill="#fff"/>${A.ink('<path d="M-120 -40 H120 Q136 -40 136 -24 V24 Q136 40 120 40 H-20 L-30 66 L-50 40 H-120 Q-136 40 -136 24 V-24 Q-136 -40 -120 -40 Z"/>', 2.4)}<text y="10" class="ns-hand" font-size="30" font-weight="700" fill="${E}" text-anchor="middle"${A.dir()}>${A.esc(c.h)}</text></g>
<!-- the exhibits -->
<g transform="translate(300 560) rotate(-6)"><rect x="-50" y="-60" width="100" height="120" fill="#EFE3C4"/><path d="M-40 -40 h80 M-40 -26 h60 M-40 -12 h70 M-40 2 h50 M-40 16 h66" stroke="${G}" stroke-width="2" opacity=".4"/>${A.ink('<rect x="-50" y="-60" width="100" height="120"/><path d="M30 -60 l20 20 M38 -60 l12 12 M44 -60 l6 6" stroke-width="1.2"/>', 2.2)}<text y="44" class="ns-hand" font-size="22" fill="${G}" text-anchor="middle" opacity=".7">’25?</text></g>
<g transform="translate(424 584)"><rect x="-56" y="-36" width="112" height="72" fill="#8B6A4E"/>${A.ink('<rect x="-56" y="-36" width="112" height="72"/><path d="M-56 -36 l20 -16 h112 l-20 16 M56 36 l20 -16 v-72"/>', 2.4)}<text y="-10" font-family="ui-monospace,monospace" font-size="12" font-weight="700" fill="#FBF7EF" text-anchor="middle">SECRET</text></g>
<g transform="translate(560 600) rotate(5)"><rect x="-48" y="-30" width="96" height="60" fill="#FBF7EF"/>${A.ink('<rect x="-48" y="-30" width="96" height="60"/><path d="M-48 -30 L0 6 L48 -30"/>', 2.2)}<circle cy="6" r="9" fill="${E}"/><text x="0" y="24" class="ns-hand" font-size="12" fill="${G}" text-anchor="middle">USHA</text></g>
<g font-family="ui-monospace,monospace" font-size="13" font-weight="700" fill="${G}"><text x="250" y="486">A</text><text x="368" y="532">B</text><text x="508" y="560">C</text></g>`, true)
    // the judge: you've met
    + A.sp([330, 70, 110, 90], 'a-bob', `${A.pigeon(380, 150, 1.6)}${A.pigeonHead(380, 150, 1.6)}<g fill="#FBFCFD" stroke="${G}" stroke-width="1.6"><circle cx="396" cy="114" r="7"/><circle cx="410" cy="110" r="7"/><circle cx="402" cy="100" r="7"/><circle cx="388" cy="104" r="6"/></g>`, null, '--d:3.4s;--a:-3px')
    + A.sp([440, 110, 80, 60], 'a-sway', `<path d="M450 160 L496 126" stroke="#8B6A4E" stroke-width="6" stroke-linecap="round"/><rect x="486" y="112" width="30" height="18" rx="4" transform="rotate(-36 500 122)" fill="#8B6A4E" stroke="${G}" stroke-width="2"/>`, [452, 160], '--d:1.4s;--a:10deg')
    // the client, pointing. a lot.
    + A.sp([60, 230, 200, 230], 'a-drift', `<circle cx="140" cy="290" r="40" fill="#E7C2A3"/><circle cx="140" cy="290" r="40" fill="url(#ns-hatch)" opacity=".35"/><path d="M90 450 C90 360 190 360 190 450 Z" fill="#5A6E8A"/>${A.ink('<circle cx="140" cy="290" r="40"/><path d="M90 450 C90 360 190 360 190 450"/><path d="M120 278 l14 6 M164 278 l-14 6" stroke-width="3.4"/><ellipse cx="142" cy="312" rx="12" ry="9" fill="#6B3A30"/><path d="M106 252 c10 -20 50 -24 66 -4"/>', 2.6)}`, null, '--d:.5s;--x:1px;--y:-2px')
    + A.sp([170, 330, 140, 80], 'a-sway', `<path d="M180 390 L290 350" stroke="#5A6E8A" stroke-width="22" stroke-linecap="round"/><path d="M288 350 l26 -6" stroke="#E7C2A3" stroke-width="9" stroke-linecap="round"/>${A.ink('<path d="M184 380 L286 342 M180 400 L292 360 M290 346 l26 -6 M292 356 l24 -4"/>', 2)}`, [180, 390], '--d:.6s;--a:5deg')
    // me, in the dock, having tea
    + A.sp([570, 300, 130, 90], 'a-bob', `${A.me(626, 350, 2.1)}<g transform="translate(672 372)"><path d="M-10 -8 h20 l-3 16 h-14 Z" fill="#FBF7EF" stroke="${G}" stroke-width="1.8"/><path d="M10 -4 c8 0 8 8 0 8" fill="none" stroke="${G}" stroke-width="1.6"/></g>`, null, '--d:3s;--a:-3px')
    + A.sp([664, 316, 24, 48], 'a-steam', `<path d="M672 360 c-6 -12 6 -18 0 -30" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" filter="url(#ns-b4)"/>`, null, '--d:4s')
    // the secret discount, glowing like a secret shouldn't
    + A.sp([380, 560, 90, 40], 'a-flick', `<g transform="translate(424 584)"><rect x="-30" y="0" width="60" height="26" rx="6" fill="#FF3D7F" opacity=".2" filter="url(#ns-b4)"/><text y="22" font-family="ui-monospace,monospace" font-weight="700" font-size="20" fill="#FF3D7F" text-anchor="middle">−40%</text></g>`, null, '--d:.7s')
    + A.base(`
  ${A.note(N(c, 0), 560, 34, 190, { s: 23 })}
  ${A.note(N(c, 4), 560, 110, 190, { s: 22 })}
  ${A.arrow('M564 128 C520 128 470 122 440 116')}
  ${A.note(N(c, 1), 14, 652, 200, { s: 18 })}
  ${A.arrow('M200 640 C220 630 236 620 250 610')}
  ${A.note(N(c, 2), 236, 668, 340, { s: 18, c: 'g' })}
  ${A.note(N(c, 3), 610, 652, 146, { s: 18 })}
  ${A.arrow('M640 640 C628 634 616 630 604 628')}`);
  };

  // ================= 14 · Now — the city as a pop-up book at 6:30 a.m. =================
  A.by.city = (c) => {
    const bld = (x, w, h, col, win = 1) => {
      let wn = '';
      if (win) for (let yy = 480 - h + 14; yy < 470; yy += 22) for (let xx = x + 8; xx < x + w - 10; xx += 16) wn += `<rect x="${xx}" y="${yy}" width="7" height="10" fill="#FBF0D8" opacity=".85"/>`;
      return `<path d="M${x} 480 V${480 - h} H${x + w} V480 Z" fill="${col}"/><path d="M${x} 480 V${480 - h} H${x + w} V480 Z" fill="url(#ns-hatch2)" opacity=".2"/>${wn}<path d="M${x} 480 V${480 - h} H${x + w} V480" fill="none" stroke="${G}" stroke-width="2.6" filter="url(#ns-pencil)"/><path d="M${x} 480 l-14 18 M${x + w} 480 l14 18" stroke="${G}" stroke-width="1.2" opacity=".5"/>`;
    };
    return A.base(`
<defs><linearGradient id="ns-c14-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9D7C8"/><stop offset=".7" stop-color="#F7D2B0"/><stop offset="1" stop-color="#FFC690"/></linearGradient></defs>
<rect width="760" height="480" fill="url(#ns-c14-sky)" opacity=".8"/>`, true)
    // the sun, coming up slowly
    + A.sp([180, 200, 220, 220], 'a-bob', `<circle cx="290" cy="310" r="90" fill="#FFB27A" opacity=".55" filter="url(#ns-b24)"/><circle cx="290" cy="310" r="58" fill="#FFC690"/>`, null, '--d:14s;--a:-30px')
    + A.base(`
<!-- the open book -->
<path d="M20 480 L380 500 L740 480 L760 640 L380 670 L0 640 Z" fill="#FBF7EF"/>
<path d="M380 500 L380 670" stroke="${G}" stroke-width="2" opacity=".5"/>
<path d="M20 480 L380 500 L380 670 L0 640 Z" fill="url(#ns-hatchh)" opacity=".25"/>
${A.ink('<path d="M20 480 L380 500 L740 480 L760 640 L380 670 L0 640 Z M10 490 L380 512 L750 490"/>', 3)}
<g stroke="${G}" stroke-width="1.4" opacity=".35" fill="none"><path d="M60 560 C140 540 240 600 340 570 M420 580 C500 560 600 610 700 570 M100 610 h120 M480 620 h140"/></g>
<!-- the city, popped up from the page -->
${bld(50, 70, 110, '#C9B7A2')}${bld(130, 80, 150, '#D8C089')}${bld(222, 54, 90, '#B9C8D6')}${bld(290, 74, 180, '#C98E8E')}
${bld(412, 100, 300, '#E9DDCB')}${bld(526, 70, 160, '#B9D3A0')}${bld(606, 90, 120, '#C9B7A2')}${bld(700, 44, 200, '#9DB7D6')}
<!-- NJO's sign, right behind me -->
<g transform="translate(462 150)"><path d="M-46 0 V-10 M46 0 V-10" stroke="${G}" stroke-width="3"/><text y="-14" font-family="Unbounded,ui-sans-serif,sans-serif" font-weight="800" font-size="44" fill="#fff" stroke="${E}" stroke-width="2.4" text-anchor="middle" letter-spacing="2">NJO</text></g>
<!-- the competitor's shop and its tag -->
<path d="M140 430 h60 l-6 -14 h-48 Z" fill="${E}" opacity=".6"/>`)
    // the price tag, flipping at 02:40
    + A.sp([150, 380, 60, 40], 'a-sway', `<path d="M168 386 L176 396" stroke="${G}" stroke-width="1.4"/><g transform="rotate(-8 180 404)"><path d="M160 396 h40 v22 h-40 l-8 -11 Z" fill="#FBF7EF" stroke="${G}" stroke-width="1.8"/><text x="182" y="412" class="ns-hand" font-size="14" font-weight="700" fill="${E}" text-anchor="middle">−5%</text></g>`, [168, 386], '--d:1.2s;--a:14deg')
    // the sources, all flying to me
    + [[90, 380], [170, 330], [260, 410], [330, 300], [570, 330], [650, 380], [720, 300]].map(([x, y], i) => A.sp([x - 10, y - 8, 20, 16], 'a-slide', `<rect x="${x - 9}" y="${y - 6}" width="18" height="12" fill="#FBF7EF" stroke="${G}" stroke-width="1.4" transform="rotate(${(i * 23) % 40 - 20} ${x} ${y})"/><path d="M${x - 5} ${y - 1} h10 M${x - 5} ${y + 3} h7" stroke="${G}" stroke-width="1"/>`, null, `--d:${4 + (i % 3)}s;--dl:${-i * 0.8}s;--x:${462 - x}px;--y:${168 - y}px`)).join('')
    // me, on the roof, reading the city
    + A.sp([420, 140, 100, 60], 'a-bob', `${A.me(462, 168, 1.3)}<g transform="translate(462 186)"><path d="M-22 -4 L0 2 L22 -4 L22 8 L0 14 L-22 8 Z" fill="#FBF7EF" stroke="${G}" stroke-width="1.6"/><path d="M0 2 V14" stroke="${G}" stroke-width="1.2"/></g>`, null, '--d:3s;--a:-2px')
    + A.sp([496, 150, 44, 34], 'a-peck', A.pigeon(516, 180, .8) + A.pigeonHead(516, 180, .8), null, '--d:2.4s')
    + A.base(`<g transform="translate(516 180) scale(.8)">${''}</g>
  ${A.note(N(c, 0), 14, 34, 300, { s: 24 })}
  ${A.note(N(c, 1), 14, 220, 180, { s: 22 })}
  ${A.arrow('M90 290 C120 330 150 370 166 392')}
  ${A.note(N(c, 2), 560, 60, 190, { s: 22 })}
  ${A.arrow('M600 112 C570 130 548 150 532 164')}`);
  };

  // ================= 15 · Your turn — she looks at you =================
  A.by.you = (c) => {
    // the whole story, in a ring of doodles around her
    const ring = ['cup', 'dice', 'jar', 'hammock', 'knight', 'cat', 'cake', 'postcard', 'doll', 'gavel', 'NJO'];
    const doodle = (k) => ({
      cup: '<ellipse rx="14" ry="6"/><path d="M-14 0 v12 c0 8 28 8 28 0 v-12 M14 4 c8 0 8 8 0 8"/>',
      dice: '<rect x="-12" y="-12" width="24" height="24" rx="4"/><circle cx="-5" cy="-5" r="1.6"/><circle cx="5" cy="5" r="1.6"/>',
      jar: '<path d="M-10 -14 h20 v6 c6 2 8 6 8 12 v14 h-36 v-14 c0 -6 2 -10 8 -12 Z"/>',
      hammock: '<path d="M-18 -8 C-10 12 10 12 18 -8 M-18 -8 C-6 -2 6 -2 18 -8"/>',
      knight: '<path d="M-10 14 h20 M-6 14 c0 -10 -4 -14 2 -24 c6 -4 12 2 10 10 l-6 -2 l2 16"/>',
      cat: '<ellipse rx="12" ry="9"/><path d="M-8 -6 l-2 -8 l6 4 M8 -6 l2 -8 l-6 4 M12 4 c8 0 8 -10 2 -12"/>',
      cake: '<path d="M-14 0 v12 h28 v-12 Z M-14 0 c4 4 8 -2 14 2 c6 4 10 -2 14 -2 M0 -2 v-10"/>',
      postcard: '<rect x="-16" y="-11" width="32" height="22"/><rect x="6" y="-8" width="7" height="8"/>',
      doll: '<path d="M-9 14 C-11 2 -8 -6 -5 -8 C-9 -12 -7 -18 0 -18 C7 -18 9 -12 5 -8 C8 -6 11 2 9 14 Z"/>',
      gavel: '<path d="M-12 12 L6 -6 M0 -14 l14 14 l-6 6 l-14 -14 Z"/>',
      NJO: '<text y="6" font-family="Unbounded,sans-serif" font-weight="800" font-size="14" text-anchor="middle" fill="#FF5A1F" stroke="none">NJO</text>',
    }[k]);
    const R = 236, cx = 300, cy = 360;
    const ringG = ring.map((k, i) => { const a = i / ring.length * Math.PI * 2 - Math.PI / 2; return `<g transform="translate(${(cx + Math.cos(a) * R).toFixed(1)} ${(cy + Math.sin(a) * R).toFixed(1)})">${doodle(k)}</g>`; }).join('');
    return A.base(`
<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${G}" stroke-width="1.4" stroke-dasharray="1 9" stroke-linecap="round" opacity=".6"/>
<circle cx="${cx}" cy="${cy}" r="170" fill="url(#ns-glow)" opacity=".7"/>
<!-- your chair, empty for now -->
<g transform="translate(620 560)"><path d="M-40 0 h80 v12 h-80 Z M-34 12 v60 M34 12 v60 M-34 0 v-70 h68 v70" fill="#E9DDCB"/>${A.ink('<path d="M-40 0 h80 v12 h-80 Z M-34 12 v60 M34 12 v60 M-34 0 v-70 h68 v70 M-34 -40 h68"/>', 2.8)}</g>
<!-- the notepad -->
<g transform="translate(110 600) rotate(-8)"><rect x="-60" y="-40" width="120" height="80" fill="#F3E08A"/>${A.ink('<rect x="-60" y="-40" width="120" height="80"/><path d="M-46 -8 h92 M-46 14 h92" stroke-width="1.4"/>', 2.2)}<text x="-46" y="-14" class="ns-hand" font-size="15" fill="${G}">CR: ___ %</text><text x="-46" y="8" class="ns-hand" font-size="15" fill="${G}">margin: ___</text></g>`, true)
    + A.sp([cx - R - 30, cy - R - 30, (R + 30) * 2, (R + 30) * 2], 'a-spin', `<g fill="none" stroke="${G}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${ringG}</g>`, [cx, cy], '--d:90s')
    // me. big. looking right at you.
    + A.sp([160, 230, 280, 260], 'a-breathe', `<ellipse cx="${cx}" cy="${cy}" rx="132" ry="108" fill="${P}"/><ellipse cx="${cx}" cy="${cy}" rx="132" ry="108" fill="url(#ns-hatch2)" opacity=".16"/><ellipse cx="${cx}" cy="${cy}" rx="132" ry="108" fill="none" stroke="${G}" stroke-width="2" opacity=".25" filter="url(#ns-pencil)"/><g class="ns-look"><g class="ns-eyes"><ellipse cx="${cx - 42}" cy="${cy}" rx="15" ry="22" fill="#1B1410"/><ellipse cx="${cx + 42}" cy="${cy}" rx="15" ry="22" fill="#1B1410"/><circle cx="${cx - 37}" cy="${cy - 8}" r="4.5" fill="#fff" opacity=".8"/><circle cx="${cx + 47}" cy="${cy - 8}" r="4.5" fill="#fff" opacity=".8"/></g></g>`, [cx, cy + 108], '--d:4s;--a:1.015')
    // the pigeon, on my head, of course
    + A.sp([276, 214, 60, 44], 'a-peck', A.pigeon(300, 256, .9) + A.pigeonHead(300, 256, .9), null, '--d:2.6s')
    // an hourglass: I'll wait
    + A.sp([650, 250, 60, 90], 'a-sway', `<g transform="translate(680 296)"><path d="M-20 -36 h40 M-20 36 h40 M-16 -36 C-16 -10 16 10 16 36 M16 -36 C16 -10 -16 10 -16 36" fill="none" stroke="${G}" stroke-width="2.6"/><path d="M-10 -26 h20 L0 -4 Z M-12 30 C-6 18 6 18 12 30 Z" fill="#E0A73A"/></g>`, [680, 296], '--d:3s;--a:8deg')
    + A.base(`
  ${A.note(N(c, 0), 560, 420, 190, { s: 34 })}
  ${A.arrow('M600 450 C640 470 680 476 720 470')}
  ${A.note(N(c, 1), 14, 520, 230, { s: 22, v: 'b' })}
  ${A.note(N(c, 2), 560, 170, 190, { s: 22 })}
  ${A.arrow('M650 222 C660 236 668 246 672 254')}`);
  };
})();
