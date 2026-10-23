// Deck pass 2: HTML for "How she knows" (the numbers), "Zero risk" inside the
// NJO guarantees, NJO in numbers and the Russian Meta note. Pure functions:
// build.mjs pre-renders them for crawlers, deck.js re-renders on language
// change (the build inlines this file without the export keywords).
// x is the language's deck copy (content.mjs X.deck, Arabic from ar.json).

export function deckNum(n, lang) {
  const s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'ru' ? ' ' : ',');
  return s;
}
const dEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const dIso = (s) => `<span dir="ltr">${s}</span>`;

// the five numbers, then her mind: 12 skill areas and the knowledge base, counted
export function mindHTML(x, lang) {
  const m = x.mind;
  const steps = m.st.map((s, i) => {
    const extra = s.tags ? `<ul class="xm-tags">${s.tags.map((t) => `<li>${dEsc(t)}</li>`).join('')}</ul>`
      : s.bars ? `<div class="xm-bars" aria-label="${dEsc(s.barsK)}">${s.bars.map((b, k) => `<div class="xm-bar${k === 2 ? ' win' : ''}" style="--v:${b.v}"><span>${dEsc(b.t)}</span><i></i><b dir="ltr">${b.v}</b></div>`).join('')}<small>${dEsc(s.barsK)}</small></div>`
      : s.say ? `<div class="xm-say"><span class="xm-face" aria-hidden="true"><i></i><i></i></span><span>${dEsc(s.say)}</span></div>` : '';
    return `<li class="xm-st" data-i="${i}"><div class="xm-n" aria-hidden="true">${dIso(deckNum(s.n, lang) + (s.s ? `<em>${s.s}</em>` : ''))}</div><div class="xm-t"><h3><span class="xm-sr">${deckNum(s.n, lang)}${s.s || ''} </span>${dEsc(s.l)}</h3><p>${dEsc(s.d)}</p>${extra}</div></li>`;
  }).join('');
  const ring = m.areas.join(' · ') + ' · ';
  const brain = m.brain.map((b, i) => `<li style="--k:${i}"><span class="xm-sat"><b dir="ltr">${deckNum(b.n, lang)}</b><span>${dEsc(b.l)}</span></span></li>`).join('');
  return `<section class="ch sec x-mind" id="mind" aria-labelledby="xm-h"><div class="xm-track"><div class="xm-stick">
<canvas class="xm-cv" aria-hidden="true"></canvas>
<div class="xm-head x-io"><div class="kick">${dEsc(m.k)}</div><h2 id="xm-h">${m.h}</h2><p class="lead">${dEsc(m.p)}</p></div>
<ol class="xm-steps">${steps}</ol>
<div class="xm-end"><div class="xm-endt x-io"><div class="kick">${dEsc(m.endK)}</div><h3>${m.endH}</h3><p>${dEsc(m.endP)}</p><ul class="xm-areas">${m.areas.map((a) => `<li>${dEsc(a)}</li>`).join('')}</ul><div class="xm-bk">${dEsc(m.brainK)}</div></div>
<div class="xm-orbit" aria-hidden="false"><svg class="xm-ring" viewBox="0 0 520 520" aria-hidden="true"><defs><path id="xm-rp" d="M260,260 m-214,0 a214,214 0 1,1 428,0 a214,214 0 1,1 -428,0"/></defs><text${lang === 'ar' ? ' text-anchor="middle"' : ''}><textPath href="#xm-rp"${lang === 'ar' ? ' startOffset="50%"' : ' textLength="1336" lengthAdjust="spacing"'}>${dEsc(ring)}</textPath></text></svg><span class="xm-orb" aria-hidden="true"><i></i><i></i></span><ul class="xm-brain">${brain}</ul></div></div>
<div class="xm-hint" aria-hidden="true"><span>${dEsc(m.scroll)}</span><i></i></div>
</div></div></section>`;
}

// inside the NJO guarantees: the ladder to money back, the NDA seal, nothing to install
export function zeroHTML(x, lang) {
  const z = x.zr;
  const msgs = lang === 'ru' ? ['tg', 'wa'] : ['wa'];
  const ICON = {
    wa: '<svg viewBox="0 0 24 24" aria-label="WhatsApp" role="img"><path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.9a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z"/></svg>',
    tg: '<svg viewBox="0 0 24 24" aria-label="Telegram" role="img"><path d="M21.4 3.6 2.9 10.8c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.8.8.4 0 .6-.2.9-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8L22.6 5c.3-1.3-.5-1.9-1.2-1.4ZM8.9 13.4l9.3-5.9c.5-.3.9-.1.5.2l-7.8 7-.3 3.3-1.7-4.6Z"/></svg>',
  };
  const steps = z.steps.map((s, i) => `<li class="x-st${i === 3 ? ' x-money' : ''}" style="--i:${i}"><span class="x-stn"><small>${dEsc(z.step)}</small><b dir="ltr">0${i + 1}</b></span><span class="x-stt">${s}${i === 3 ? `<small class="x-fine">${dEsc(z.fine)}</small>` : ''}</span></li>`).join('');
  return `<div class="x-zr x-io"><div class="x-zr-h"><div class="kick">${dEsc(z.k)}</div><h3>${z.h}</h3><p>${dEsc(z.p)}</p></div>
<ol class="x-lad">${steps}</ol>
<div class="x-zr-c"><div class="x-nda"><div class="x-stamp" aria-hidden="true"><svg viewBox="0 0 160 160"><defs><path id="xzr-s" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0"/></defs><text><textPath href="#xzr-s" textLength="384" lengthAdjust="spacing">${dEsc(z.stamp)}</textPath></text></svg><b>NDA</b></div><div><h4>${dEsc(z.ndaT)}</h4><p>${dEsc(z.ndaP)}</p></div></div>
<div class="x-inst"><div class="x-msg">${msgs.map((k) => ICON[k]).join('')}</div><div><h4>${dEsc(z.instT)}</h4><p>${dEsc(z.instP)}</p><ul class="x-no">${z.no.map((t) => `<li>${dEsc(t)}</li>`).join('')}</ul></div></div></div></div>`;
}

// NJO in numbers, under the engineers' line
export function njoHTML(x, lang) {
  const j = x.njo;
  return `<div class="x-njo x-io"><p class="x-njo-p">${j.promise}</p><ul class="x-njo-n">${j.nums.map((n, i) => `<li style="--i:${i}"><b dir="ltr">${deckNum(n.n, lang)}${n.s ? `<em>${n.s}</em>` : ''}</b><span>${dEsc(n.l)}</span></li>`).join('')}</ul><p class="x-njo-s">${dEsc(j.sub)}</p></div>`;
}

export function metaHTML(x) {
  return x.meta ? `<p class="x-meta">${dEsc(x.meta)}</p>` : '';
}
