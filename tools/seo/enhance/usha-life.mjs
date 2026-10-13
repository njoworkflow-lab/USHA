// USHA's personality: moods that escalate when she is tapped too much
// (happy → bored → sad → angry → crying → forgiving), new face controls
// (slanted eyes, drooping eyes, tears), new synthesized sounds, and small
// surprises while the visitor reads. Patches the minified bundle in place;
// each anchor is checked so a changed bundle stops the build.

export const LIFE_BUB = {
  en: { bored1: 'Okay, that’s enough.', bored2: 'I’m working, you know.', sad1: 'Why do you keep poking me?', sad2: 'I thought we were friends…', angry1: 'Stop it!', angry2: 'I’m reading your market here!', cry: 'I’m telling NJO…', forgive: 'Okay… I forgive you.', sneeze: 'Achoo! Market dust.', yawn: 'Long night of data.', dance: 'New finding! Happy dance.', hum: 'La-la… reading prices.' },
  ru: { bored1: 'Ладно, хватит.', bored2: 'Я вообще-то работаю.', sad1: 'Зачем ты меня тыкаешь?', sad2: 'Я думала, мы друзья…', angry1: 'Прекрати!', angry2: 'Я тут твой рынок читаю!', cry: 'Я пожалуюсь NJO…', forgive: 'Ладно… прощаю.', sneeze: 'Апчхи! Рыночная пыль.', yawn: 'Длинная ночь данных.', dance: 'Новая находка! Танцую.', hum: 'Ля-ля… читаю цены.' },
};

const MOOD = `var Um_s=0,Um=(()=>{let a=0,last=0,stage=0,flip=0;
const face=(p,d)=>{Object.assign(Ge.tgt,p);de.exprT=d;Um_s=stage};
setInterval(()=>{if(performance.now()-last<4500||a<=0)return;a=Math.max(0,a-1);
 if(stage>=2&&a<4){stage=0;face({tilt:0,droop:0,tear:0,tint:0,inner:1,eyeH:1,happy:1,blush:.6},1.8);tn("forgive",2.6);Ae.voice("happy");ut(10)}
 else if(stage===1&&a<4){stage=0;face({droop:0,eyeH:1,eyeW:1},.5)}},1100);
return function(){last=performance.now();a+=1;flip^=1;
 const s=a<5?0:a<8?1:a<11?2:a<14?3:4;if(s===0)return!1;stage=s;Ge.tgt.sq=.8;setTimeout(()=>Ge.tgt.sq=1,140);
 if(s===1){face({eyeH:.3,eyeW:1.12,happy:0,tilt:0,droop:.5,blush:0,tear:0},3.2);Ae.voice("sigh");tn(flip?"bored1":"bored2",1.8);ut(6)}
 else if(s===2){face({eyeH:.55,eyeW:.9,happy:0,tilt:-.75,droop:1.3,blush:0,tear:.35,inner:.7},3.6);Ae.voice("sad");tn(flip?"sad1":"sad2",2);ut([10,40,10])}
 else if(s===3){face({eyeH:.42,happy:0,tilt:.85,droop:0,blush:1.3,tear:0,eyeW:1.15,tint:.9},3.4);let q=0;const sh=setInterval(()=>{Ge.tgt.lookX=q%2?.07:-.07;if(++q>7){clearInterval(sh);Ge.tgt.lookX=0}},60);Ge.tgt.stretch=1.08;setTimeout(()=>Ge.tgt.stretch=1,220);Ae.voice("grr");tn(flip?"angry1":"angry2",1.8);ut([30,20,30])}
 else{face({eyeH:.3,happy:0,tilt:-.8,droop:1.4,blush:.7,tear:1,eyeW:1,inner:.75},5);Ae.voice("sob");tn("cry",2.4);ut([15,60,15,60,15])}
 return!0}})();
var Gp_=!1,Ua_=0,Un_=(()=>{return function(){const t=performance.now();if(t-Ua_<4e3||Um_s||de.exprT>0)return;Object.assign(Ge.tgt,{eyeW:1.22,eyeH:1.22,happy:.3});de.exprT=.7;Ge.tgt.stretch=1.07;setTimeout(()=>Ge.tgt.stretch=1,180);const r=Math.random();r<.35?Ae.voice("giggle"):r<.55&&Ae.voice("tap")}})();var Ul_=(()=>{const acts=[
 ()=>{Ge.tgt.sq=1.1;setTimeout(()=>{Ge.tgt.sq=.88;Ae.voice("sneeze");ut(20)},480);setTimeout(()=>Ge.tgt.sq=1,800);Object.assign(Ge.tgt,{eyeH:.15});de.exprT=.9;tn("sneeze",2)},
 ()=>{Ge.tgt.stretch=1.16;Object.assign(Ge.tgt,{eyeH:.2,happy:0});de.exprT=1.6;Ae.voice("yawn");setTimeout(()=>Ge.tgt.stretch=1,1100);tn("yawn",2.2)},
 ()=>{const t0=performance.now();(function f(){const k=(performance.now()-t0)/1600;if(k>=1){Ge.tgt.sq=1;Ge.tgt.stretch=1;return}const e=Math.sin(k*Math.PI);Ge.tgt.sq=1+Math.sin(k*Math.PI*6)*.06*e;Ge.tgt.stretch=1-Math.sin(k*Math.PI*6)*.04*e;requestAnimationFrame(f)})();Object.assign(Ge.tgt,{happy:1,blush:.6});de.exprT=1.8;Ae.voice("laugh");tn("dance",2.2)},
 ()=>{Object.assign(Ge.tgt,{happy:.6,eyeH:.9});de.exprT=2;Ae.voice("hum");tn("hum",2.2)}];
let lastAct=0;addEventListener("pointerdown",()=>lastAct=performance.now(),{passive:!0});
(function go(){setTimeout(()=>{try{if(document.visibilityState==="visible"&&je&&!de.asleep&&!Xt.active&&Ge.group.scale.x>.05&&performance.now()-lastAct>7e3&&!Gn&&!Um_s)acts[Math.floor(Math.random()*acts.length)]()}catch(e){}go()},3e4+Math.random()*3e4)})()})();`;

const VOICES = `case"laugh":for(let t=0;t<7;t++)xt(e(1000,1250)-t*70,e(700,900)-t*50,.09,.08,"sine",t*.085,6);break;case"sigh":xt(560,300,.7,.07,"triangle");break;case"sad":xt(620,430,.45,.08,"sine",0,5),xt(520,320,.7,.07,"sine",.42,5);break;case"grr":xt(140,115,.42,.08,"sawtooth",0,28),xt(170,120,.3,.07,"sawtooth",.4,28);break;case"sob":for(let t=0;t<5;t++)xt(e(680,760),e(480,540),.16,.06,"sine",t*.2,12);break;case"sneeze":xt(420,900,.3,.05,"sine"),xt(2200,300,.14,.11,"square",.42);break;case"yawn":xt(280,520,.55,.06,"triangle",0,4),xt(520,230,.8,.06,"triangle",.5,4);break;case"hum":[659,587,523,587,659,659].forEach((t,n)=>xt(t,t,.17,.045,"triangle",n*.19,5));break;`;

export function applyLife(src) {
  const swaps = [
    // new face controls on the character
    ['rim:.6,blush:0,eyeW:1,eyeH:1,happy:0}', 'rim:.6,blush:0,eyeW:1,eyeH:1,happy:0,tilt:0,droop:0,tear:0}'],
    ['e.quaternion.setFromRotationMatrix(this._m),e.position.copy(o)', 'e.quaternion.setFromRotationMatrix(this._m),e.rotateZ((t<this.p.lookX?-1:1)*this.p.tilt),e.position.copy(o)'],
    ['h=-.04+n.lookY;', 'h=-.04+n.lookY-n.droop*.07;'],
    // tears: four small drops that run down from the eyes
    ['l.add(c,h),this.body.add(l),l}),this._m=new ht}', 'l.add(c,h),this.body.add(l),l}),this._m=new ht;this.tears=[0,1,2,3].map(()=>{let m=new pt(r,new Yt({color:"#CFEAFF",transparent:!0,opacity:0,fog:!1}));return m.scale.set(.034,.055,.034),m.visible=!1,this.body.add(m),m})}'],
    ['this._eye(this.eyes[1],n.lookX+c,h+(n.lookX>.2?.03:0)+n.happy*.03,a)}', 'this._eye(this.eyes[1],n.lookX+c,h+(n.lookX>.2?.03:0)+n.happy*.03,a);this.tears.forEach((m,k)=>{let E=this.eyes[k%2],f=(t*.85+k*.31)%1;m.visible=n.tear>.12;m.position.copy(E.position);m.position.y-=.1+f*.5;m.position.z+=.03-f*.02;m.material.opacity=Math.min(1,n.tear)*(1-f)*.95})}'],
    // new sounds
    ['case"secret":', VOICES + 'case"secret":'],
    // taps reach her even though the page sections sit above the canvas
    ['Hl.addEventListener("pointerdown",i=>{di=', 'addEventListener("pointerdown",i=>{if(i.target.closest&&i.target.closest("a,button,input,textarea,select,label,summary,header,.lang,.chips,.ov"))return;if(!Gn&&!(i.target===Hl||i.target.closest&&i.target.closest("#hero,#noise,#signal")))return;di='],
    // she notices the cursor arriving
    ['Gn=je&&!l&&m>.05&&ar.intersectObject(Ge.mesh,!1).length>0,', 'Gn=je&&!l&&m>.05&&ar.intersectObject(Ge.mesh,!1).length>0,Gn&&!Gp_&&Un_(),!Gn&&Gp_&&(Ua_=performance.now()),Gp_=Gn,'],
    // the four algorithms sit in one clean row under the headline (desktop)
    ['[[-4.1,-.25,0],[-1.35,-1.55,0],[1.35,-.25,0],[4.1,-1.55,0]]', '[[-4.3,-1.05,0],[-1.45,-1.05,0],[1.45,-1.05,0],[4.3,-1.05,0]]'],
    // their labels always stay on screen
    ['p.style.top=((1-bs.y)/2*innerHeight).toFixed(1)+"px",p.classList.toggle("on",v===d)', 'p.style.top=Math.min((1-bs.y)/2*innerHeight,innerHeight-(p._h||(p._h=p.offsetHeight))-24).toFixed(1)+"px",p.classList.toggle("on",v===d)'],
    // "Try her": a softer ring so it never hazes over USHA
    ['ch:.25,g:.5,gp:[(s.left+s.width*.5)/innerWidth', 'ch:e?.1:.25,g:e?0:.2,gp:[(s.left+s.width*.5)/innerWidth'],
    // phones: hero USHA a little higher so the label clears her
    ['u:e?[0,2.98,0]:[2.75,.1,1.2],us:e?1.02:.95', 'u:e?[0,3.32,0]:[2.75,.1,1.2],us:e?.9:.95'],
    // phones: "Try her" USHA larger and clear, the ring calmer
    ['us:e?.42:.66,ch:', 'us:e?.6:.66,ch:'],
    // "Try her": the particle ring forms behind her, so it frames her instead of hazing over her
    ['s.i<=3&&!l&&bt.u.uC3.value.set(f.x,f.y,f.z-.2)', 's.i<=3&&!l&&bt.u.uC3.value.set(f.x,f.y,f.z-(s.i===3?1.4:.2))'],
    // four algorithms, four related shapes: spiral (feed), ring (search), two arms (auction), soft round (buyer)
    ['C=Qt()*.18*h;vt()<.18&&(_=Qt()*.35*h', 'C=Qt()*.18*h;if(m===1){let q1=vt()*6.2832,q2=(.9+Qt()*.07)*h;_=Math.cos(q1)*q2;T=Math.sin(q1)*q2*.55}else if(m===2){let q1=Math.floor(vt()*2)*3.1416+p*3.4,q2=(.1+p*1.15)*h;_=Math.cos(q1)*q2+Qt()*.05*h;T=Math.sin(q1)*q2*.52+Qt()*.05*h}else if(m===3){let q1=vt()*6.2832,q2=Math.pow(vt(),1.6)*1.05*h;_=Math.cos(q1)*q2;T=Math.sin(q1)*q2*.62}vt()<.18&&(_=Qt()*.35*h'],
    // "Try her": no switching to the eyes-closed reading pose while the chat types
    ['g==="talk"&&(g=As==="found"?"found":Ge.p.read>.5&&de.busy?"reading":"present"),de.busy&&s.i===3&&As!=="found"&&As!=="happy"&&(g="reading")', 'g==="talk"&&(g=As==="found"?"found":"present")'],
    // phones play with the on-screen joystick and dash button, so a tap no longer dashes
    ['cr=1,matchMedia("(pointer:coarse)").matches&&Xt.dash()', 'cr=1'],
    // moods: the tap handler asks the mood engine first
    ['function c_(){if(de.taps++', MOOD + 'function c_(){if(Um())return;if(de.taps++'],
  ];
  // blocks owned by this file are refreshed on every build, so edits here land
  const own = [[src.includes('var Um_s=0,Um=(()=>{') ? 'var Um_s=0,Um=(()=>{' : 'var Um=(()=>{', 'function c_(){', MOOD], ['case"laugh":', 'case"secret":', VOICES]];
  for (const [start, end, body] of own) {
    const i = src.indexOf(start);
    if (i < 0) continue;
    const j = src.indexOf(end, i);
    if (j < 0) throw new Error(`USHA life: no end for ${start}`);
    src = src.slice(0, i) + body + src.slice(j);
  }
  // swaps that match both the original and an earlier applied version
  const live = [
    // findings: beside the card and facing it (desktop), next to the headline (phone)
    [/u:e\?\[t\[0\][+-][.\d]+,t\[1\][+-][.\d]+,\.4\]:\[t\[0\][+-][.\d]+,t\[1\][+-][.\d]+,\.4\],us:e\?[.\d]+:[.\d]+/, 'u:e?[t[0]+1.5,t[1]+1.7,.4]:[t[0]-2.2,t[1]-1.4,.4],us:e?.38:.5'],
    // the problem: bigger, on the headline's line (desktop)
    [/if\(i===1\)return\{u:e\?\[0,-4\.6,0\]:\[[-.\d]+,[-.\d]+,[-.\d]+\],us:e\?\.001:[.\d]+/, 'if(i===1)return{u:e?[0,-4.6,0]:[3.3,1.25,.6],us:e?.001:.62'],
    // the site's own dust levels (an earlier build had dimmed them)
    [/st:"companion",dim:[.0-9]+\}/, 'st:"companion",dim:.5}'],
    [/st:"present",dim:(\.8|\.45)\}/, 'st:"present",dim:.8}'],
    [/de\.exprT<=0&&Object\.assign\(Ge\.tgt,\{eyeW:1,eyeH:1,happy:0,blush:0[^}]*\}\)/, 'de.exprT<=0&&Object.assign(Ge.tgt,{eyeW:1,eyeH:1,happy:0,blush:0,tilt:0,droop:0,tear:0,tint:0,inner:1})'],
    [/opacity:0,fog:!1\}\)\);return m\.scale\.set\([^)]*\)/, 'opacity:0,fog:!1}));return m.scale.set(.034,.055,.034)'],
  ];
  for (const [a, b] of swaps) {
    if (src.includes(b)) continue;
    if (src.includes(b.slice(0, 60)) && !src.includes(a)) continue; // already applied
    if (!src.includes(a)) throw new Error(`Bundle changed (USHA life): ${a.slice(0, 50)}`);
    src = src.replace(a, b);
  }
  for (const [re, b] of live) {
    if (!re.test(src)) throw new Error(`Bundle changed (USHA life): ${re}`);
    src = src.replace(re, b);
  }
  return src;
}

// The game: the bundle's one-round game function is replaced whole by
// tools/seo/enhance/game.js (endless levels). Matched by braces, so the swap
// also refreshes an earlier version of the new game.
export function applyGame(src, code) {
  const i = src.indexOf('function au({');
  if (i < 0) throw new Error('Bundle changed (game): function au not found');
  let k = src.indexOf('){', i) + 1, d = 0, n = k;
  for (; n < src.length; n++) { const ch = src[n]; if (ch === '{') d++; else if (ch === '}' && --d === 0) break; }
  return src.slice(0, i) + code.trim() + src.slice(n + 1);
}
