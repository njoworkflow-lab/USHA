// USHA's story: drawings for the team, two more clients, the fight, the good part and the news.
(() => {
  const A = window.USHA_ART;
  const G = '#2A2420', E = '#FF5A1F', P = '#FFB48A', LIGHT = '#F3D9C4';
  const N = (c, i) => (c.n || [])[i];

  // ================= The strategist — an interrogation room for ideas =================
  A.by.strategist = (c) => {
    const q = A.quote(c.h) || '?';
    return A.base(`
<defs><radialGradient id="ns-c-int" cx=".5" cy=".55" r=".65"><stop offset="0" stop-color="#4A3E3A"/><stop offset="1" stop-color="#151214"/></radialGradient></defs>
<rect width="760" height="690" fill="url(#ns-c-int)"/>
<rect width="760" height="690" filter="url(#ns-grain)" opacity=".6"/>
<!-- the one-way mirror, and who is behind it -->
<rect x="40" y="90" width="200" height="140" fill="#2E3650" opacity=".9"/>
<rect x="40" y="90" width="200" height="140" fill="none" stroke="#6E6670" stroke-width="5"/>
<g opacity=".55">${A.me(140, 170, 1.6)}</g>
<path d="M60 110 l40 -10 M70 210 l60 -20" stroke="#fff" stroke-width="3" opacity=".15"/>
<!-- the table -->
<path d="M150 470 L610 470 L660 560 L100 560 Z" fill="#6B5444"/>
<path d="M100 560 h560 v16 h-560 Z" fill="#4A3A30"/>
<g stroke="#2A2420" stroke-width="2" fill="none" opacity=".8"><path d="M150 470 L610 470 L660 560 L100 560 Z"/></g>
<!-- the idea's chair -->
<path d="M220 360 v150 M300 360 v150 M220 360 h80" stroke="#8B7A6A" stroke-width="6" fill="none"/>
<!-- him, across the table, arms crossed -->
<g transform="translate(560 380)"><path d="M-70 90 C-70 10 70 10 70 90 Z" fill="#1E1A1C"/><circle cy="-30" r="38" fill="#2A2224"/><path d="M-60 50 C-20 30 20 30 60 50 L50 66 C20 50 -20 50 -50 66 Z" fill="#3A3034"/><circle cx="-12" cy="-32" r="4" fill="${LIGHT}" opacity=".6"/><circle cx="12" cy="-32" r="4" fill="${LIGHT}" opacity=".6"/></g>
<!-- a cold cup, untouched -->
<g transform="translate(470 470)"><path d="M-14 -24 h28 l-4 24 h-20 Z" fill="#FBF7EF" opacity=".8"/></g>`, true)
    // the lamp, swinging slowly over the suspect
    + A.sp([180, 0, 400, 520], 'a-sway', `<path d="M380 0 V160" stroke="#9A8A80" stroke-width="2"/><path d="M380 300 L250 520 L510 520 Z" fill="#FFE9B8" opacity=".14"/><path d="M340 196 Q380 150 420 196 Z" fill="#6E6670" stroke="${G}" stroke-width="2"/><ellipse cx="380" cy="198" rx="12" ry="6" fill="#FFF4D6"/><ellipse cx="380" cy="230" rx="90" ry="40" fill="#FFE9B8" opacity=".12" filter="url(#ns-b24)"/>`, [380, 0], '--d:5s;--a:4deg')
    // the idea, sweating
    + A.sp([210, 300, 110, 160], 'a-drift', `<g transform="translate(260 380)"><circle r="40" fill="#FFF2B8"/><path d="M-16 36 h32 v22 h-32 Z" fill="#B9BDC3" stroke="${G}" stroke-width="2"/><path d="M-14 44 h28 M-14 50 h28" stroke="${G}" stroke-width="1.4"/><circle r="40" fill="none" stroke="${G}" stroke-width="2.4"/><ellipse cx="-12" cy="-4" rx="4" ry="6" fill="${G}"/><ellipse cx="12" cy="-4" rx="4" ry="6" fill="${G}"/><path d="M-10 16 q10 -8 20 0" stroke="${G}" stroke-width="2.4" fill="none"/><path d="M-26 -30 c6 -4 10 0 8 6" stroke="${G}" stroke-width="2" fill="none"/></g>`, null, '--d:.6s;--x:2px')
    + A.sp([296, 340, 16, 60], 'a-fall', `<path d="M304 344 c-5 8 -5 12 0 14 c5 -2 5 -6 0 -14 Z" fill="#9FD3FF"/>`, null, '--d:1.4s;--y:40px')
    // "so what?" — three times, as is tradition
    + A.sp([430, 160, 300, 150], 'a-pulse', [0, 1, 2].map((i) => `<text x="${590 - i * 18}" y="${210 + i * 40}" class="ns-hand" font-size="${36 - i * 6}" font-weight="700" fill="#FFE2C8" text-anchor="middle" opacity="${1 - i * .3}"${A.dir()}>${A.esc(q)}${A.qm()}</text>`).join(''), null, '--d:1.6s;--a:1.04')
    + A.base(`
  ${A.note(N(c, 0), 470, 40, 280, { s: 23 })}
  ${A.arrow('M480 66 C450 100 420 140 400 176')}
  ${A.note(N(c, 1), 14, 620, 260, { s: 22 })}
  ${A.arrow('M150 612 C190 560 220 490 240 440')}
  ${A.note(N(c, 2), 470, 620, 280, { s: 22, c: LIGHT })}
  ${A.note(N(c, 3), 14, 268, 240, { s: 22 })}
  ${A.arrow('M100 260 C110 240 120 226 128 214')}`);
  };

  // ================= The media buyer — intensive care for one ad account =================
  A.by.media = (c) => A.base(`
<rect width="760" height="690" fill="#D7E4E0" opacity=".7"/>
<rect y="520" width="760" height="170" fill="#C3D3CE" opacity=".8"/>
<!-- the clock: 2:00 -->
<g transform="translate(380 70)"><circle r="40" fill="#FBF7EF"/>${A.ink('<circle r="40"/><path d="M0 0 V-30 M0 0 L22 -12"/>', 2.6)}</g>
<!-- the bed -->
<path d="M190 430 h400 v60 h-400 Z" fill="#FBFCFD"/><path d="M190 490 v70 M590 490 v70 M170 380 v180 M610 410 v150" stroke="${G}" stroke-width="5"/>
<path d="M230 400 C300 380 520 380 590 410 L590 470 L230 470 Z" fill="#9DB7D6"/><path d="M230 400 C300 380 520 380 590 410 L590 470 L230 470 Z" fill="url(#ns-hatch2)" opacity=".3"/>
${A.ink('<path d="M190 430 h400 v60 h-400 Z M230 400 C300 380 520 380 590 410 L590 470"/>', 2.6)}
<ellipse cx="250" cy="400" rx="60" ry="22" fill="#FBFCFD" stroke="${G}" stroke-width="2"/>
<!-- the patient: an ad account, very pale -->
<g transform="translate(270 360) rotate(-8)"><rect x="-44" y="-34" width="88" height="56" rx="6" fill="#2E3650"/><rect x="-38" y="-28" width="76" height="44" rx="3" fill="#DCE8F0"/><path d="M-26 -6 v4 M26 -6 v4" stroke="${G}" stroke-width="3" stroke-linecap="round"/><path d="M-10 8 q10 -6 20 0" stroke="${G}" stroke-width="2" fill="none"/><path d="M-50 22 h100 l-8 8 h-84 Z" fill="#B9BDC3" stroke="${G}" stroke-width="1.6"/></g>
<path d="M300 372 C340 330 380 260 400 210" stroke="#9FB4C6" stroke-width="2" fill="none"/>
<!-- the drip: budget -->
<path d="M110 120 V560 M90 560 h40" stroke="${G}" stroke-width="3"/>
<g transform="translate(150 150)"><path d="M-22 -30 h44 v50 c0 12 -44 12 -44 0 Z" fill="#F3E08A" opacity=".9"/>${A.ink('<path d="M-22 -30 h44 v50 c0 12 -44 12 -44 0 Z M0 30 V44"/>', 2)}<text y="0" class="ns-hand" font-size="14" fill="${G}" text-anchor="middle">budget</text></g>
<path d="M150 194 C150 280 220 330 250 352" stroke="#9FB4C6" stroke-width="2" fill="none"/>
<!-- the monitor -->
<path d="M660 300 V560 M630 560 h60" stroke="${G}" stroke-width="3"/>
<rect x="560" y="140" width="180" height="140" rx="10" fill="#1B2024"/>
${A.ink('<rect x="560" y="140" width="180" height="140" rx="10"/>', 2.6)}
<text x="574" y="268" font-family="ui-monospace,monospace" font-size="13" fill="#7FE0B0">CPC 0.42 · CTR 1.8</text>
<!-- her: headset, scrubs, coffee -->
<g transform="translate(480 470)"><path d="M-40 160 L-36 40 C-30 10 30 10 36 40 L40 160 Z" fill="#7FA9A0"/><circle cy="-10" r="28" fill="#C99B78"/><path d="M-28 -16 C-28 -48 28 -48 28 -16 C20 -30 -20 -30 -28 -16 Z" fill="#2A1E18"/><path d="M-30 -10 C-34 -40 34 -40 30 -10" stroke="${G}" stroke-width="3" fill="none"/><path d="M-30 -6 l-4 18 l14 6" stroke="${G}" stroke-width="2.4" fill="none"/>${A.ink('<path d="M-40 160 L-36 40 C-30 10 30 10 36 40 L40 160"/><circle cy="-10" r="28"/><path d="M-10 0 h20 M-10 -14 v4 M10 -14 v4"/>', 2.4)}</g>`, true)
  // the heartbeat of the account
  + A.sp([570, 160, 160, 80], '', `<path class="ns-flow" d="M570 210 h30 l8 -24 l10 46 l10 -34 l8 12 h30 l8 -24 l10 46 l10 -34 l8 12 h28" fill="none" stroke="#7FE0B0" stroke-width="2.6" stroke-dasharray="14 4"/>`)
  + A.sp([140, 194, 20, 60], 'a-fall', `<path d="M150 196 c-4 6 -4 10 0 12 c4 -2 4 -6 0 -12 Z" fill="#9FD3FF"/>`, null, '--d:1.8s;--y:20px')
  // her coffee, also on a monitor
  + A.sp([360, 470, 90, 80], 'a-bob', `<g transform="translate(400 510)"><path d="M-18 -20 h36 l-4 40 h-28 Z" fill="#FBF7EF" stroke="${G}" stroke-width="2"/><path d="M18 -10 c10 0 10 14 0 14" fill="none" stroke="${G}" stroke-width="2"/><path d="M-14 0 h6 l3 -8 l4 14 l3 -6 h8" stroke="${E}" stroke-width="1.8" fill="none"/></g>`, null, '--d:2s;--a:-2px')
  + A.sp([440, 420, 80, 60], 'a-breathe', `<path d="M452 470 C460 440 500 440 508 470" stroke="#C99B78" stroke-width="12" fill="none" stroke-linecap="round"/>`, [480, 470], '--d:3s;--a:1.03')
  + A.base(`
  ${A.note(N(c, 3), 14, 40, 300, { s: 23 })}
  ${A.arrow('M200 56 C260 60 310 66 336 70')}
  ${A.note(N(c, 1), 560, 330, 190, { s: 22 })}
  ${A.arrow('M640 330 C646 310 650 296 652 286')}
  ${A.note(N(c, 0), 200, 630, 340, { s: 22 })}
  ${A.arrow('M250 610 C250 540 260 470 266 400')}
  ${A.note(N(c, 2), 560, 620, 196, { s: 21 })}
  ${A.arrow('M560 610 C480 600 440 560 420 530')}`);

  // ================= The engineers — my head, opened like a doll's house =================
  A.by.engineers = (c) => A.base(`
<defs><clipPath id="ns-c-head"><ellipse cx="380" cy="380" rx="300" ry="250"/></clipPath></defs>
<ellipse cx="380" cy="380" rx="300" ry="250" fill="${P}"/>
<g clip-path="url(#ns-c-head)">
  <rect x="80" y="300" width="600" height="340" fill="#3A3330"/>
  <rect x="80" y="300" width="600" height="340" fill="url(#ns-hatch)" opacity=".35"/>
  <path d="M80 470 H680" stroke="#8B7A6A" stroke-width="8"/>
  <!-- pipes -->
  <g fill="none" stroke="#B9BDC3" stroke-width="14" stroke-linecap="round"><path d="M120 340 H360 V440 M420 330 V400 H640 M200 500 V600 M200 520 H520 V600"/></g>
  <g fill="none" stroke="${G}" stroke-width="2"><path d="M120 333 H353 V440 M120 347 H367 V440 M413 330 V393 H640 M427 330 V407 H640"/></g>
  <!-- the boiler -->
  <rect x="560" y="490" width="80" height="120" rx="10" fill="#C8402F"/><circle cx="600" cy="540" r="18" fill="#FBF7EF" stroke="${G}" stroke-width="2"/>
  ${A.ink('<rect x="560" y="490" width="80" height="120" rx="10"/>', 2.4)}
  <!-- the quick fix: duct tape, many layers -->
  <g transform="translate(300 340)"><rect x="-26" y="-14" width="52" height="28" fill="#B9BDC3" transform="rotate(20)"/><rect x="-26" y="-14" width="52" height="28" fill="#9EA3AA" transform="rotate(-24)"/><path d="M-30 -10 l60 20 M-30 10 l60 -24" stroke="${G}" stroke-width="1.2"/></g>
  <!-- the ladder and the engineer on it -->
  <path d="M260 460 L290 350 M290 460 L320 350 M264 440 h30 M270 420 h30 M276 400 h30 M282 380 h30" stroke="#E0A73A" stroke-width="3"/>
  <g transform="translate(300 360)"><circle r="10" fill="#C99B78" stroke="${G}" stroke-width="1.6"/><path d="M-11 -4 C-11 -16 11 -16 11 -4 Z" fill="#E8D27A" stroke="${G}" stroke-width="1.4"/><path d="M0 10 v24 M0 16 l-12 -10 M0 16 l12 -14 M0 34 l-8 16 M0 34 l8 16" stroke="${G}" stroke-width="2.4"/></g>
  <!-- the one with the laptop: "technically" -->
  <g transform="translate(420 560)"><circle r="11" fill="#E7C2A3" stroke="${G}" stroke-width="1.6"/><path d="M-12 -4 C-12 -18 12 -18 12 -4 Z" fill="#E8D27A" stroke="${G}" stroke-width="1.4"/><path d="M0 11 v26 M0 37 l-10 18 M0 37 l10 18 M0 20 l14 6" stroke="${G}" stroke-width="2.4"/><rect x="10" y="22" width="30" height="20" fill="#2E3650" stroke="${G}" stroke-width="1.4"/></g>
  <!-- the one asleep on a beanbag -->
  <g transform="translate(140 580)"><ellipse rx="40" ry="22" fill="#9DB7D6" stroke="${G}" stroke-width="2"/><circle cx="-6" cy="-24" r="11" fill="#C99B78" stroke="${G}" stroke-width="1.6"/><path d="M-12 -24 h4 M0 -24 h4" stroke="${G}" stroke-width="1.6"/><text x="20" y="-40" class="ns-hand" font-size="16" fill="${LIGHT}">z z</text></g>
  <!-- the ticket on a nail -->
  <g transform="translate(470 360) rotate(6)"><rect x="-34" y="-14" width="68" height="40" fill="#F3E08A"/><circle cy="-8" r="3" fill="${G}"/><text y="14" font-family="ui-monospace,monospace" font-size="11" fill="${G}" text-anchor="middle">#4512 · Tue</text></g>
</g>
${A.ink('<ellipse cx="380" cy="380" rx="300" ry="250"/><path d="M84 300 H676" stroke-width="2.4"/>', 3.4)}
<g fill="#1B1410"><ellipse cx="320" cy="210" rx="16" ry="24"/><ellipse cx="440" cy="210" rx="16" ry="24"/></g>`, true)
  + A.sp([580, 516, 40, 40], 'a-sway', `<path d="M600 540 L600 526" stroke="${E}" stroke-width="3" stroke-linecap="round"/>`, [600, 540], '--d:.8s;--a:40deg')
  + A.sp([620, 420, 50, 70], 'a-steam', `<path d="M640 480 c-8 -14 8 -20 0 -34 c-6 -10 6 -14 2 -22" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" filter="url(#ns-b4)"/>`, null, '--d:3s')
  + A.sp([354, 440, 12, 50], 'a-fall', `<path d="M360 446 c-4 6 -4 10 0 12 c4 -2 4 -6 0 -12 Z" fill="#9FD3FF"/>`, null, '--d:1.5s;--y:24px')
  + A.base(`
  ${A.note(N(c, 0), 14, 40, 300, { s: 24 })}
  ${A.arrow('M120 70 C150 120 190 170 230 200')}
  ${A.note(N(c, 1), 470, 40, 280, { s: 23 })}
  ${A.arrow('M520 70 C440 160 360 260 318 330')}
  ${A.note(N(c, 2), 470, 666, 286, { s: 21 })}
  ${A.arrow('M520 650 C480 640 456 620 450 600')}
  ${A.note(N(c, 3), 600, 640, 156, { s: 21 })}
  ${A.arrow('M650 620 C620 520 560 420 512 384')}`);

  // ================= Jeddah — the brief, built as an impossible object =================
  A.by.jeddah = (c) => {
    const parts = (A.quote(c.p[0]) || '').split(/[.。]\s*/).filter(Boolean);
    const lab = [parts[0], parts[1], parts[2]].map((t) => A.esc(t || ''));
    return A.base(`
<rect width="760" height="690" fill="#E3D7C4" opacity=".5"/>
<g transform="translate(110 210)">
  <!-- three round prongs on the left… -->
  <g fill="#F6EFE2" stroke="${G}" stroke-width="3" filter="url(#ns-pencil)">
    <path d="M0 0 H330 V40 H0 Z M0 80 H190 V120 H0 Z M0 160 H330 V200 H0 Z" stroke="none"/>
  </g>
  <path d="M330 0 H520 V80 H330 Z M330 120 H520 V200 H330 Z" fill="#E9DDCB"/>
  <path d="M330 0 H520 V80 H330 Z M330 120 H520 V200 H330 Z" fill="url(#ns-hatch2)" opacity=".25"/>
  ${A.ink(`<path d="M0 0 H520 M0 200 H520 M0 40 H330 M0 160 H330 M0 80 H190 M0 120 H190 M330 80 H520 M330 120 H520 M520 0 V80 M520 120 V200 M330 80 V120"/>
  <ellipse cx="0" cy="20" rx="9" ry="20"/><ellipse cx="0" cy="100" rx="9" ry="20"/><ellipse cx="0" cy="180" rx="9" ry="20"/>`, 3)}
  <g class="ns-hand" font-size="21" fill="${G}"${A.dir()}><text x="${A.dir() ? 300 : 30}" y="28">${lab[0]}</text><text x="${A.dir() ? 180 : 30}" y="108">${lab[1]}</text><text x="${A.dir() ? 300 : 30}" y="188">${lab[2]}</text></g>
</g>
<!-- the calendar -->
<g transform="translate(650 110) rotate(5)"><rect x="-56" y="-60" width="112" height="120" fill="#FBF7EF"/><rect x="-56" y="-60" width="112" height="30" fill="${E}"/>${A.ink('<rect x="-56" y="-60" width="112" height="120"/>', 2.2)}<text y="26" font-family="ui-monospace,monospace" font-weight="700" font-size="40" fill="${G}" text-anchor="middle">THU</text></g>`, true)
    // the client, walking the object forever
    + A.sp([110, 160, 60, 56], 'a-walk', `<g transform="translate(130 206)"><circle cy="-36" r="9" fill="#E7C2A3" stroke="${G}" stroke-width="1.6"/><path d="M-10 -40 h20 l-2 -4 h-16 Z" fill="#FBF7EF"/><path d="M0 -27 v16 M0 -11 l-8 11 M0 -11 l8 11 M0 -22 l-8 6 M0 -22 l8 6" stroke="${G}" stroke-width="2.2"/></g>`, null, '--d:9s;--x:400px')
    // me, with scissors, choosing one
    + A.sp([520, 430, 200, 200], 'a-bob', `${A.me(620, 560, 2.4)}<g transform="translate(560 470) rotate(-30)"><circle cx="-10" cy="16" r="8" fill="none" stroke="${G}" stroke-width="3"/><circle cx="10" cy="16" r="8" fill="none" stroke="${G}" stroke-width="3"/><path d="M-6 8 L10 -30 M6 8 L-10 -30" stroke="#B9BDC3" stroke-width="4" stroke-linecap="round"/></g>`, null, '--d:2.4s;--a:-4px')
    + A.sp([430, 410, 120, 20], 'a-flick', `<path d="M440 420 h100" stroke="${E}" stroke-width="3" stroke-dasharray="6 6"/>`, null, '--d:.8s')
    + A.base(`
  ${A.note(N(c, 0), 14, 40, 420, { s: 23 })}
  ${A.note(N(c, 1), 14, 470, 320, { s: 23 })}
  ${A.arrow('M100 456 C110 440 120 430 126 420')}
  ${A.note(N(c, 2), 410, 100, 170, { s: 22 })}
  ${A.arrow('M520 150 C560 150 580 140 592 130')}
  ${A.note(N(c, 3), 14, 620, 320, { s: 23 })}`);
  };

  // ================= Kazan — forty-seven photos, fanned like a panic =================
  A.by.kazan = (c) => {
    const cards = Array.from({ length: 11 }, (_, i) => {
      const a = -55 + i * 11, n = [1, 4, 7, 9, 12, 18, 23, 30, 36, 41, 47][i];
      const bg = ['#F3D9C4', '#DCE4EA', '#E9DDCB', '#F3E08A', '#D9A6B8', '#B9D3A0', '#9DB7D6', '#F2B38E', '#E3E8E6', '#C9B7A2', '#FBF7EF'][i];
      return `<g transform="rotate(${a} 380 760)"><rect x="330" y="300" width="100" height="140" rx="4" fill="#FBF7EF"/><rect x="338" y="308" width="84" height="100" fill="${bg}"/><g transform="translate(380 370) rotate(${(i * 37) % 60 - 30})"><path d="M-18 14 C-22 -10 22 -10 18 14 Z" fill="#8B6A4E"/><path d="M18 0 c10 0 12 10 4 14 M-6 -10 v-6 h12 v6" fill="none" stroke="${G}" stroke-width="2"/></g>${A.ink('<rect x="330" y="300" width="100" height="140" rx="4"/>', 1.8)}<text x="380" y="430" font-family="ui-monospace,monospace" font-size="13" fill="${n === 9 ? E : G}" text-anchor="middle">#${n}</text></g>`;
    }).join('');
    return A.base(`
<rect width="760" height="690" fill="#D9D2C6" opacity=".5"/>
<!-- photo number one, framed on the wall -->
<g transform="translate(110 130) rotate(-4)"><rect x="-70" y="-80" width="140" height="160" fill="#8B6A4E"/><rect x="-56" y="-66" width="112" height="132" fill="#F3D9C4"/><g transform="translate(0 0)"><path d="M-22 18 C-26 -12 26 -12 22 18 Z" fill="#8B6A4E"/><path d="M22 0 c12 0 14 12 4 16 M-8 -12 v-8 h16 v8" fill="none" stroke="${G}" stroke-width="2.4"/></g>${A.ink('<rect x="-70" y="-80" width="140" height="160"/><rect x="-56" y="-66" width="112" height="132"/>', 2.4)}<path d="M30 60 l14 34 l8 -10 l12 4 l-14 -32" fill="${E}"/><text y="52" font-family="ui-monospace,monospace" font-size="14" fill="${G}" text-anchor="middle">#1</text></g>
${cards}`, true)
    // his thumb, twitching at the corner of the deck
    + A.sp([300, 560, 200, 140], 'a-drift', `<path d="M330 700 C320 640 350 600 390 596 C430 594 450 630 444 700 Z" fill="#E7C2A3"/>${A.ink('<path d="M330 700 C320 640 350 600 390 596 C430 594 450 630 444 700"/><path d="M360 614 C370 600 410 600 420 616" stroke-width="1.6"/>', 2.6)}`, null, '--d:.35s;--x:3px;--y:-4px')
    // the algorithm, packing up after photo nine
    + A.sp([560, 230, 120, 70], 'a-walk', `<g transform="translate(580 260)"><rect x="0" y="0" width="52" height="36" rx="4" fill="#1B1714"/><circle cx="14" cy="12" r="3.4" fill="#F6EFE2"/><path d="M6 24 l5 -6 l5 6 l5 -6 l5 6" fill="none" stroke="#F6EFE2" stroke-width="1.6"/><g stroke="${G}" stroke-width="2.4" stroke-linecap="round"><path d="M10 36 l-4 10 M24 36 l3 10 M38 36 l-4 10"/></g><rect x="54" y="14" width="26" height="20" rx="3" fill="#C98E8E" stroke="${G}" stroke-width="1.6"/><path d="M62 14 v-4 h10 v4" fill="none" stroke="${G}" stroke-width="1.6"/></g>`, null, '--d:8s;--x:150px')
    + A.base(`
  ${A.note(N(c, 0), 300, 40, 440, { s: 24 })}
  ${A.note(N(c, 1), 440, 150, 316, { s: 22 })}
  ${A.arrow('M560 196 C580 214 590 226 596 236')}
  ${A.note(N(c, 2), 14, 270, 210, { s: 22 })}
  ${A.arrow('M80 250 C90 230 96 220 100 214')}
  ${A.note(N(c, 3), 470, 640, 286, { s: 22 })}
  ${A.arrow('M480 632 C470 630 460 630 450 632')}`);
  };

  // ================= Round 9 — a boxing ring, seen from the cheap seats =================
  A.by.ring = (c) => {
    let crowd = '';
    for (let i = 0; i < 26; i++) crowd += `<circle cx="${20 + i * 29}" cy="${640 + (i % 2) * 14}" r="11" fill="none" stroke="${G}" stroke-width="1.6" stroke-dasharray="3 3"/>`;
    for (let i = 0; i < 18; i++) crowd += `<circle cx="${110 + i * 32}" cy="${236 - (i % 2) * 10}" r="9" fill="none" stroke="${G}" stroke-width="1.4" stroke-dasharray="3 3" opacity=".7"/>`;
    return A.base(`
<rect width="760" height="690" fill="#D8CDBB" opacity=".5"/>
<!-- the scoreboard -->
<g transform="translate(380 90)"><rect x="-150" y="-50" width="300" height="96" rx="8" fill="#2A2420"/><text x="-80" y="22" font-family="ui-monospace,monospace" font-weight="700" font-size="52" fill="#FF8A4C" text-anchor="middle">0</text><text x="80" y="22" font-family="ui-monospace,monospace" font-weight="700" font-size="52" fill="#7FE0B0" text-anchor="middle">9</text><text y="-22" font-family="ui-monospace,monospace" font-size="13" fill="#F3EEE8" text-anchor="middle" letter-spacing="3">ROUND 9</text><path d="M0 -6 v40" stroke="#F3EEE8" stroke-width="2" opacity=".4"/></g>
<!-- the ring -->
<path d="M150 300 L610 300 L700 580 L60 580 Z" fill="#E9DDCB"/>
<path d="M150 300 L610 300 L700 580 L60 580 Z" fill="url(#ns-hatch2)" opacity=".2"/>
<g stroke="${G}" stroke-width="7" stroke-linecap="round"><path d="M150 300 v-70 M610 300 v-70 M60 580 v-110 M700 580 v-110"/></g>
<g fill="none" stroke="#C8402F" stroke-width="3"><path d="M150 250 H610 M150 270 H610 M60 490 H700 M60 520 H700 M60 550 H700 M150 250 L60 490 M150 270 L60 520 M610 250 L700 490 M610 270 L700 520"/></g>
${A.ink('<path d="M150 300 L610 300 L700 580 L60 580 Z"/>', 2.6)}
<!-- the team's corner: towels, opinions -->
<g transform="translate(170 420)">${[[-20, 0, '#4A3A30'], [30, -14, '#C9A87C'], [70, 6, '#2A2420']].map(([x, y, h]) => `<g transform="translate(${x} ${y})"><path d="M-22 50 C-22 10 22 10 22 50 Z" fill="#9DB7D6"/><circle r="17" fill="${h}"/><path d="M-20 6 h40" stroke="#FBF7EF" stroke-width="6"/></g>`).join('')}</g>
<!-- my corner: a stool, tea -->
<path d="M560 470 h60 M570 470 l-6 40 M610 470 l6 40" stroke="${G}" stroke-width="4"/>
${crowd}`, true)
    + A.sp([150, 380, 140, 70], 'a-flick', `<text x="220" y="410" class="ns-hand" font-size="30" font-weight="700" fill="${G}" text-anchor="middle">!!?!</text>`, null, '--d:.5s')
    + A.sp([550, 380, 130, 100], 'a-bob', `${A.me(590, 440, 1.8)}<g transform="translate(640 448)"><path d="M-10 -8 h20 l-3 16 h-14 Z" fill="#FBF7EF" stroke="${G}" stroke-width="1.8"/></g>`, null, '--d:3s;--a:-2px')
    + A.sp([350, 360, 80, 70], 'a-peck', `${A.pigeon(380, 420, 1.3)}${A.pigeonHead(380, 420, 1.3)}<path d="M396 386 l-8 6 l8 6 Z M404 386 l8 6 l-8 6 Z" fill="${G}"/>`, null, '--d:2.2s')
    + A.sp([0, 620, 760, 50], 'a-flick', `<g fill="${E}" opacity=".5"><circle cx="78" cy="640" r="3"/><circle cx="252" cy="654" r="3"/><circle cx="426" cy="640" r="3"/><circle cx="600" cy="654" r="3"/></g>`, null, '--d:.9s')
    + A.base(`
  ${A.note(N(c, 0), 560, 40, 196, { s: 23 })}
  ${A.arrow('M560 70 C548 80 538 86 530 90')}
  ${A.note(N(c, 1), 14, 620, 320, { s: 21, v: 'b' })}
  ${A.note(N(c, 2), 14, 40, 210, { s: 22 })}
  ${A.arrow('M120 100 C220 220 300 340 356 392')}
  ${A.note(N(c, 3), 470, 640, 286, { s: 21, v: 'b' })}
  ${A.arrow('M560 612 C570 560 580 520 586 484')}`);
  };

  // ================= The good part — a town at night, lighting up =================
  A.by.lights = (c) => {
    const blocks = [];
    for (let r = 0; r < 4; r++) for (let q = 0; q < 6; q++) blocks.push([40 + q * 118, 120 + r * 136, 96, 112]);
    let base = '', wins = '';
    const lit = { 2: ['bakery', 0], 7: ['perfume', 1], 9: ['family', 2], 14: ['clinic', 3], 16: ['seller', 4], 20: ['', 5], 4: ['', 6], 12: ['', 7] };
    blocks.forEach(([x, y, w, h], i) => {
      base += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#26304A"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#ns-hatch2)" opacity=".25"/>`;
      for (let k = 0; k < 6; k++) base += `<rect x="${x + 10 + (k % 3) * 28}" y="${y + 14 + ((k / 3) | 0) * 44}" width="16" height="22" fill="#1B2236"/>`;
      if (lit[i]) {
        const [kind, d] = lit[i];
        let inner = '';
        for (let k = 0; k < 6; k++) inner += `<rect x="${x + 10 + (k % 3) * 28}" y="${y + 14 + ((k / 3) | 0) * 44}" width="16" height="22" fill="#FFD27A"/>`;
        inner += `<rect x="${x - 6}" y="${y - 6}" width="${w + 12}" height="${h + 12}" fill="#FFD27A" opacity=".14" filter="url(#ns-b8)"/>`;
        wins += A.sp([x - 10, y - 10, w + 20, h + 20], 'a-glow', inner, null, `--d:${5 + d % 3}s;--dl:${-d * 0.9}s`);
        const ic = { bakery: `<path d="M${x + 30} ${y + 100} c0 -14 36 -14 36 0 Z" fill="#E0A73A"/>`, perfume: `<path d="M${x + 42} ${y + 104} h12 v-12 h-12 Z M${x + 45} ${y + 92} v-5 h6 v5" fill="#C98E8E"/>`, clinic: `<path d="M${x + 44} ${y + 84} h8 v8 h8 v8 h-8 v8 h-8 v-8 h-8 v-8 h8 Z" fill="#FBF7EF"/>`, family: `<path d="M${x + 48} ${y + 104} c-6 -8 -18 -2 -12 6 l12 10 l12 -10 c6 -8 -6 -14 -12 -6 Z" fill="${E}"/>`, seller: `<rect x="${x + 36}" y="${y + 88}" width="24" height="20" fill="#C9A87C" stroke="${G}" stroke-width="1"/>` }[kind] || '';
        base += ic;
      }
    });
    let queue = '';
    for (let i = 0; i < 7; i++) queue += `<circle cx="${290 + i * 12}" cy="${244 + (i % 2) * 3}" r="4" fill="#F3D9C4"/>`;
    return A.base(`
<rect width="760" height="690" fill="#141A2C"/>
<rect width="760" height="690" filter="url(#ns-grain)" opacity=".5"/>
<g stroke="#3A4566" stroke-width="2">${[0, 1, 2, 3, 4, 5, 6].map((q) => `<path d="M${28 + q * 118} 100 V690"/>`).join('')}${[0, 1, 2, 3, 4].map((r) => `<path d="M0 ${110 + r * 136} H760"/>`).join('')}</g>
${base}${queue}`, true)
    + wins
    // the moon is me
    + A.sp([600, 4, 150, 110], 'a-pulse', `<circle cx="676" cy="56" r="60" fill="${P}" opacity=".25" filter="url(#ns-b24)"/>${A.me(676, 56, 1.8)}`, null, '--d:4s;--a:1.03')
    + A.base(`
  ${A.note(N(c, 0), 14, 40, 280, { s: 23, c: LIGHT })}
  ${A.arrow('M200 66 C240 110 270 160 286 230')}
  ${A.note(N(c, 1), 300, 40, 280, { s: 22, c: LIGHT })}
  ${A.arrow('M400 66 C380 110 340 200 320 260')}
  ${A.note(N(c, 2), 14, 676, 380, { s: 22 })}
  ${A.note(N(c, 3), 470, 150, 200, { s: 22 })}
  ${A.arrow('M600 136 C620 120 636 106 642 96')}`);
  };

  // ================= Meanwhile — the news, and the kitchen next door =================
  A.by.news = (c) => {
    const said = A.esc(A.quote(c.h) || c.h);
    return A.base(`
<defs><clipPath id="ns-c-tv"><rect x="70" y="150" width="390" height="260"/></clipPath><clipPath id="ns-c-tick"><rect x="70" y="372" width="390" height="38"/></clipPath></defs>
<rect width="760" height="690" fill="#E3D3BE" opacity=".6"/>
<rect width="760" height="690" fill="url(#ns-hatchh)" opacity=".15"/>
<!-- the TV -->
<rect x="50" y="130" width="430" height="300" rx="16" fill="#2A2420"/>
<rect x="70" y="150" width="390" height="260" fill="#33405A"/>
<g clip-path="url(#ns-c-tv)">
  <rect x="70" y="150" width="390" height="260" fill="url(#ns-grid)" opacity=".2"/>
  <!-- the expert, very serious -->
  <path d="M190 410 C190 320 340 320 340 410 Z" fill="#1E2632"/><path d="M252 330 L265 400 L278 330 Z" fill="#C8402F"/>
  <circle cx="265" cy="270" r="44" fill="#E7C2A3"/><path d="M221 262 C220 220 310 220 309 262 C290 246 240 246 221 262 Z" fill="#B9BDC3"/>
  <g fill="none" stroke="${G}" stroke-width="2.4"><circle cx="248" cy="270" r="10"/><circle cx="282" cy="270" r="10"/><path d="M258 270 h14 M234 252 l16 6 M296 252 l-16 6"/></g>
  <rect x="80" y="160" width="100" height="26" fill="#C8402F"/><text x="130" y="178" font-family="ui-monospace,monospace" font-weight="700" font-size="13" fill="#fff" text-anchor="middle">BREAKING</text>
  <rect x="70" y="372" width="390" height="38" fill="#C8402F"/>
</g>
${A.ink('<rect x="50" y="130" width="430" height="300" rx="16"/><path d="M200 430 l-20 40 M330 430 l20 40 M160 470 h210"/>', 3)}
<!-- the window into the kitchen next door -->
<rect x="510" y="110" width="220" height="300" fill="#FBEFD8"/>
<g transform="translate(0 0)">
  <path d="M520 200 H720 M520 260 H720" stroke="#8B6A4E" stroke-width="5"/>
  ${[0, 1, 2, 3, 4].map((i) => `<g transform="translate(${540 + i * 38} 196)"><path d="M-12 0 v-26 c0 -4 24 -4 24 0 v26 Z" fill="#C8402F" opacity=".85"/><rect x="-13" y="-34" width="26" height="8" fill="#E0A73A"/></g>`).join('')}
  ${[0, 1, 2, 3, 4].map((i) => `<g transform="translate(${540 + i * 38} 256)"><path d="M-12 0 v-26 c0 -4 24 -4 24 0 v26 Z" fill="#7A3A6A" opacity=".85"/><rect x="-13" y="-34" width="26" height="8" fill="#E0A73A"/></g>`).join('')}
  <g transform="translate(620 150) rotate(-8)"><rect x="-64" y="-18" width="128" height="34" fill="#FBF7EF" stroke="${E}" stroke-width="3"/><text y="6" font-family="ui-monospace,monospace" font-weight="700" font-size="16" fill="${E}" text-anchor="middle">SOLD OUT</text></g>
  <!-- her: bun, apron, laptop -->
  <g transform="translate(590 340)"><path d="M-36 70 C-36 10 36 10 36 70 Z" fill="#D9A6B8"/><path d="M-20 30 h40 v40 h-40 Z" fill="#FBF7EF"/><circle cy="-10" r="24" fill="#E7C2A3"/><circle cy="-36" r="12" fill="#D8D2CC"/><path d="M-24 -14 C-24 -36 24 -36 24 -14 C14 -24 -14 -24 -24 -14 Z" fill="#D8D2CC"/>${A.ink('<path d="M-36 70 C-36 10 36 10 36 70"/><circle cy="-10" r="24"/><path d="M-8 -10 v3 M8 -10 v3 M-8 2 q8 6 16 0"/>', 2.2)}</g>
  <g transform="translate(680 380)"><path d="M-34 -36 h56 v40 h-56 Z" fill="#2E3650"/><path d="M-40 4 h68 l-6 8 h-56 Z" fill="#B9BDC3"/>${A.me(-6, -16, .7)}</g>
</g>
${A.ink('<rect x="510" y="110" width="220" height="300"/><path d="M620 110 V410 M510 260 H520" stroke-width="2"/>', 3)}
<!-- the sofa: his audience, my clients -->
<path d="M30 690 C30 600 70 580 160 580 H600 C690 580 730 600 730 690 Z" fill="#7A5A48"/>
${A.ink('<path d="M30 690 C30 600 70 580 160 580 H600 C690 580 730 600 730 690"/>', 3)}
${[[200, '#3B2A22'], [330, '#C9A87C'], [470, '#2A1E18']].map(([x, h]) => `<circle cx="${x}" cy="566" r="30" fill="${h}"/>`).join('')}
<g transform="translate(380 600)"><rect x="-20" y="-24" width="40" height="34" fill="#E8D27A" stroke="${G}" stroke-width="1.6"/><path d="M-10 -24 c0 -12 20 -12 20 0" fill="none" stroke="${G}" stroke-width="1.6"/></g>`, true)
    // the ticker, crawling
    + A.sp([70, 372, 390, 38], '', `<g clip-path="url(#ns-c-tick)"><g class="ns-tick"><text x="80" y="398" font-family="ui-monospace,monospace" font-weight="700" font-size="16" fill="#fff"${A.dir()}>${said} · ${said} · ${said} · ${said}</text></g></g>`)
    + A.sp([240, 290, 50, 30], 'a-talk', `<ellipse cx="265" cy="300" rx="12" ry="7" fill="#6B3A30" stroke="${G}" stroke-width="2"/>`, [265, 300], '--d:.3s')
    + A.sp([70, 150, 120, 50], 'a-flick', `<circle cx="186" cy="173" r="5" fill="#fff"/>`, null, '--d:.6s')
    + A.sp([560, 120, 40, 60], 'a-steam', `<path d="M580 176 c-6 -12 6 -18 0 -30" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" filter="url(#ns-b4)"/>`, null, '--d:4s')
    + A.base(`
  ${A.note(N(c, 0), 14, 40, 330, { s: 23 })}
  ${A.arrow('M150 70 C140 100 132 130 130 158')}
  ${A.note(N(c, 1), 510, 456, 240, { s: 22 })}
  ${A.arrow('M600 440 C610 300 616 220 620 172')}
  ${A.note(N(c, 2), 14, 520, 300, { s: 22, v: 'b' })}
  ${A.arrow('M140 530 C160 540 176 548 186 554')}
  ${A.note(N(c, 3), 500, 40, 250, { s: 22 })}
  ${A.arrow('M640 70 C664 200 676 300 676 346')}`);
  };
})();
