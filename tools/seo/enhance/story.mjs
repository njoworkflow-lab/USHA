import { PAGES, USHA_DEFS } from './story-art.mjs';
const stEsc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const stText=s=>stEsc(s).replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\b(USHA|NJO)\b/g,'<bdi>$1</bdi>');
export function storyCaptions(x) {
  const s=x.story;
  return s.chapters.map((c,i)=>`<div class="st-copy"><span class="st-k">${stText(c.k)}</span><h3>${stText(c.t)}</h3><p>${stText(c.b)}</p>${i===1?`<small class="st-legend" dir="auto"><bdi>10 · 22 · 700+ · 55+ · 7</bdi><br>${stText(s.legend)}</small>`:''}${i===4?`<s class="st-books">${stText(s.books)}</s>`:''}${i===6?`<ul class="st-beliefs">${s.beliefs.map(b=>`<li>${stText(b)}</li>`).join('')}</ul>`:''}${i===7?`${s.meta?`<span class="st-stamp">${stText(s.meta)}</span><small class="st-legal">${stText(s.legal)}</small>`:''}<a class="st-cta" href="#talk">${stText(s.cta)} <span aria-hidden="true">↗</span></a>`:''}</div>`);
}
export function storyHTML(x,lang) {
  const s=x.story,caps=storyCaptions(x),sizes=[50,65,75,86,96,86,110,110];
  const mini=(i)=>{
    const look=i===2||i===3?'translate(0 9) scale(1 .8) rotate(12 53 45)':i===5?'translate(-13.25 -11.25) scale(1.25)':`translate(${lang==='ar'?-1.5:1.5} 0)`;
    const eyes=i===6?'<path d="M40 47q4-8 8 0m10-2q4-8 8 0" style="stroke:#0b0a0f;stroke-width:3;fill:none"/>':`<use href="#st-eyes" transform="${look}"/>`;
    return `<g${lang==='ar'?' transform="translate(100 0) scale(-1 1)"':''}><use href="#st-${i<5?'drop':'bean'}"/>${eyes}</g>`;
  };
  return `<a class="st-skip" href="#month">${stText(s.skip)} ↓</a>${USHA_DEFS}<div class="st-intro rv" data-st-lang="${lang}"><span class="st-k">${stText(s.kick)}</span><h2 id="st-h">${stText(s.h)}</h2><p>${stText(s.sub)}</p><small>${stText(s.note)}</small><i class="st-seed" aria-hidden="true"></i></div><div class="st-track"><div class="st-stage"><ol class="st-pages">${PAGES.map((page,i)=>`<li class="st-page" data-st-page="${i}" data-crop="${page.crop}" data-rest="${page.rest}" data-weight="${page.weight}"><svg class="st-scene" viewBox="${storyCrop(page.crop,lang==='ar'?-1:1)}" aria-hidden="true" focusable="false"><g class="st-art"${lang==='ar'?' transform="translate(1600 0) scale(-1 1)"':''}>${page.svg}<svg class="st-static" x="${page.point[0]-sizes[i]/2}" y="${page.point[1]-sizes[i]*.78}" width="${sizes[i]}" height="${sizes[i]*.84}" viewBox="0 0 100 84">${mini(i)}</svg></g></svg><div class="st-cap">${caps[i]}</div>${i<7?`<svg class="st-link" viewBox="0 0 358 72" preserveAspectRatio="none" aria-hidden="true"><path d="${i%2?'M340 0C340 45 18 27 18 72':'M18 0C18 45 340 27 340 72'}"/></svg>`:''}</li>`).join('')}</ol><div class="st-slot" aria-hidden="true"></div><nav class="st-nav" aria-label="${stText(s.kick).replace(/<[^>]+>/g,'')}">${s.chapters.map((c,i)=>`<button type="button" data-st-go="${i}" aria-label="${stEsc(s.chapterLabel.replace('{n}',i+1).replace('{title}',c.t.replace(/\*/g,'')))}"><bdi>0${i+1}</bdi></button>`).join('')}</nav><div class="st-lamp" aria-hidden="true"></div><div class="st-mini" aria-hidden="true"><div class="st-shadow"></div><svg viewBox="0 0 100 84"><g class="st-inner"><use class="st-df" href="#st-drop"/><use class="st-bf" href="#st-bean"/><g class="st-eyes"><use href="#st-eyes"/></g><path class="st-he" d="M40 47q4-8 8 0m10-2q4-8 8 0"/><path class="st-ce" d="M40 45q4 7 8 0m10-2q4 7 8 0"/></g></svg></div></div></div>`;
}

// Language-dependent view updates stay with the shared caption renderer.
export function paintStory(S,x) {
  const s=x.story,put=(sel,value)=>S.querySelector(sel).innerHTML=value;
  const caps=storyCaptions(x),intro=S.querySelector('.st-intro');
  if(intro.dataset.stLang===document.documentElement.lang)return caps;
  intro.dataset.stLang=document.documentElement.lang;
  S.querySelectorAll('.st-cap').forEach((el,i)=>el.innerHTML=caps[i]);
  put('.st-intro .st-k',stText(s.kick));put('#st-h',stText(s.h));put('.st-intro p',stText(s.sub));put('.st-intro small',stText(s.note));put('.st-skip',stText(s.skip)+' ↓');
  S.querySelectorAll('[data-st-go]').forEach((b,i)=>b.setAttribute('aria-label',s.chapterLabel.replace('{n}',i+1).replace('{title}',s.chapters[i].t.replace(/\*/g,''))));
  S.querySelector('.st-nav').setAttribute('aria-label',s.kick);return caps;
}

// View-owned finite actions and gaze loops. The controller supplies chapter state;
// cancelling this view stops every Web Animation when it leaves the viewport.
export function storyView(S) {
  const B=S.querySelector('.st-inner'),E=S.querySelector('.st-eyes use'),shadow=S.querySelector('.st-shadow');
  const locks=[...S.querySelectorAll('.st-lock')],knots=[...S.querySelectorAll('.st-knot,.st-loose')];
  let effects=[],hop=null,moving=false,chapter=-1;
  const animate=(el,keys,opts)=>{const a=el.animate(keys,opts);effects.push(a);return a};
  const cancel=()=>{effects.forEach(a=>a.cancel());effects=[];hop=null;moving=false};
  return {cancel,
    enter(k,dir) {cancel();chapter=k;E.setAttribute('transform',`translate(${dir*1.5} 0)`);
      if(k===2)animate(S.querySelector('.st-question'),[{transform:'translateY(-4px)'},{transform:'translateY(4px)'}],{duration:4000,direction:'alternate',iterations:Infinity});
      if(k===4)animate(E,[{transform:'translateX(-1.5px)'},{transform:'translateX(1.5px)'},{transform:'translateX(-1.5px)'}],{duration:2400,iterations:Infinity});
      if(k===7)animate(B,[{transform:'scale(1.12,.86) rotate(-10deg)'},{transform:'translateY(-14px) rotate(10deg)',offset:.5},{transform:'scale(1)'}],{duration:520,iterations:2});
    },
    release(open) {locks.forEach(el=>el.style.transform=open?'translateY(-5px) rotate(20deg)':'none');knots.forEach((el,i)=>el.style.opacity=i?+open:+!open)},
    pull() {animate(B,[{transform:'scale(1)'},{transform:'scale(1.15,.88)',offset:.5},{transform:'scale(1)'}],{duration:420,iterations:2})},
    moving(on) {if(on===moving)return;moving=on;if(on)hop=animate(shadow,[{transform:'scaleX(1)'},{transform:'scaleX(.6)',offset:.5},{transform:'scaleX(1)'}],{duration:520,iterations:Infinity});
      else {hop?.cancel();if(![3,5,7].includes(chapter))animate(B,[{transform:'scale(1.1,.9)'},{transform:'scale(1)'}],{duration:260,easing:'cubic-bezier(.34,1.56,.64,1)'})}
    },
  };
}

// Mirror the entire 1600-unit drawing plane and its crop together. Mirroring
// around a cropped viewport's centre would show a different part of the art.
export function storyCrop(crop,dir) {
  const [x,y,w,h]=crop.split(' ').map(Number);
  return `${dir<0?1600-x-w:x} ${y} ${w} ${h}`;
}
export function storyViewport(page,desktop,dir) {
  page.firstElementChild.setAttribute('viewBox',desktop?'0 0 1600 900':storyCrop(page.dataset.crop,dir));
  page.querySelector('.st-art').setAttribute('transform',dir<0?'translate(1600 0) scale(-1 1)':'');
}
