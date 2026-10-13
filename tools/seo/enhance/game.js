function au({scene:i,cam:e,U:t,SND:n,haptic:s,T:r,onBreak:o,onSecret:a,onExit:l}){
// USHA's game: five levels in the noise. Replaces the bundle's one-round game
// (tools/seo/enhance/game.js, swapped in by the build). Everything is drawn as
// glowing points, like the rest of the site. Uses the bundle's three.js names:
// Lt BufferGeometry, st BufferAttribute, lt ShaderMaterial, ms Points,
// Tn additive blending, Ui Raycaster, qt Plane, R Vector3, Qs MathUtils.
const N=6000,pos=new Float32Array(N*3),col=new Float32Array(N*3),siz=new Float32Array(N),alp=new Float32Array(N),geo=new Lt();
geo.setAttribute("position",new st(pos,3));geo.setAttribute("c",new st(col,3));geo.setAttribute("s",new st(siz,1));geo.setAttribute("a",new st(alp,1));
const mat=new lt({transparent:!0,depthWrite:!1,blending:Tn,uniforms:{uPx:{value:1}},
 vertexShader:"attribute vec3 c;attribute float s,a;uniform float uPx;varying vec3 vC;varying float vA;void main(){vC=c;vA=a;vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=s*uPx*(12./-mv.z);}",
 fragmentShader:"varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d);a=a*a*vA;if(a<.004)discard;gl_FragColor=vec4(vC*a,a);}"});
const pts=new ms(geo,mat);pts.frustumCulled=!1;pts.visible=!1;i.add(pts);
const rnd=(a,b)=>a+Math.random()*(b-a),clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),dist=(a,b,c,d)=>Math.hypot(a-c,b-d);
// endless levels: five scenes rotate (scan, price war, ad storm, dark feed,
// the Noise King) and every round through them is harder than the last
const TINT=[[1,.78,.6],[1,.5,.35],[.62,.7,1],[.55,.45,.85],[1,.32,.22]];
function genLevel(n){const ty=n%5,tr=Math.floor(n/5);return{ty,tr,
 sig:[8,10,12,10,0][ty]+tr*2,cl:[3,4,5,3,0][ty]+tr,
 dev:[Math.min(tr,3),3+tr,4+tr,5+tr,1+tr][ty],sp:Math.min(3.2,1.1+n*.12),
 walls:ty===2?2+(tr>>1):ty===3?1+(tr>>1):tr>=2?1:0,wind:ty===2?2:ty===3?1:tr>=1&&ty===1?1:0,
 dark:ty===3||(tr>=3&&ty===1)?1:0,boss:ty===4?6+tr*2:0,house:ty===3?1:0,
 shield:ty>=2||tr>=1?1:0,drift:ty>0||tr>0?1:0,tint:TINT[ty]}}
const ROMAN=["","II","III","IV","V","VI","VII","VIII","IX","X"];
const lvName=c=>tx("g_l"+(c.ty+1))+(c.tr?" "+(ROMAN[c.tr]||c.tr+1):"");
let LVc=genLevel(0);
let W=9,Hh=5.5;
const w={active:!1,paused:!1,lv:0,score:0,lvScore:0,combo:1,comboT:0,best:0,bestLv:0,phase:"intro",pt:0,sig:0,burst:0,house:!1,lives:3,inv:0,shield:0,done:!1,still:0,secretOn:!1,secretGot:!1,yawn:0,hurt:0,anger:0,dance:0};
const L={x:0,y:0,vx:0,vy:0,dash:0,tx:0,ty:0,steer:!1};
let sigs=[],clouds=[],devs=[],walls=[],winds=[],powers=[],orbs=[],boss=null,house=null,stars=[],sec={x:0,y:0};
const keys={},hinted={};let toastT=0;
try{const b=JSON.parse(localStorage.getItem("usha-game")||"{}");w.best=b.s||0;w.bestLv=b.l||0}catch(_){}
function saveBest(){if(w.score>w.best||w.lv+1>w.bestLv){w.best=Math.max(w.best,w.score);w.bestLv=Math.max(w.bestLv,w.lv+1);try{localStorage.setItem("usha-game",JSON.stringify({s:w.best,l:w.bestLv}))}catch(_){}}}
function addScore(v,combo){if(combo){w.combo=w.comboT>0?Math.min(5,w.combo+1):1;w.comboT=2.2}w.score+=v*(combo?w.combo:1);hud()}
const tasksEl=document.getElementById("tasks"),toastEl=document.getElementById("toast");
const tx=(k,f)=>{const d=r()||{};return d[k]||f||""};
function toast(m,d=2.6){if(!toastEl)return;toastEl.textContent=m;toastEl.classList.add("on");toastT=d}
function hud(){
 if(!tasksEl)return;const c=LVc,row=(ok,label,v,k)=>'<div class="g-goal '+k+(ok?" ok":"")+'"><span>'+label+"</span><b>"+v+"</b></div>";
 let h='<div class="g-lv"><span>'+tx("g_lv","Level")+" "+(w.lv+1)+"</span><b>"+lvName(c)+'</b></div><div class="g-sc"><b>'+w.score.toLocaleString()+"</b>"+(w.combo>1?"<em>×"+w.combo+"</em>":"")+"<span>"+tx("g_best","Best")+" "+Math.max(w.best,w.score).toLocaleString()+" · "+tx("g_lv","Level")+" "+Math.max(w.bestLv,w.lv+1)+"</span></div>"+'<div class="g-life">'+[0,1,2].map(k=>'<i class="'+(k<w.lives?"on":"")+'"></i>').join("")+(w.shield>0?'<em class="g-sh"></em>':"")+"</div>";
 if(c.sig)h+=row(w.sig>=c.sig,tx("g_o1","Signals"),Math.min(w.sig,c.sig)+"/"+c.sig,"g-s");
 if(c.cl)h+=row(w.burst>=c.cl,tx("g_o2","Noise clouds"),Math.min(w.burst,c.cl)+"/"+c.cl,"g-c");
 if(c.house)h+=row(w.house,tx("g_o3","Engineers’ house"),(w.house?1:0)+"/1","g-h");
 if(c.boss&&boss)h+=row(boss.hp<=0,tx("g_o4","Noise King"),'<span class="g-hp">'+Array.from({length:Math.min(boss.max,12)},(_,k)=>'<i class="'+(k<Math.ceil(boss.hp*Math.min(boss.max,12)/boss.max)?"on":"")+'"></i>').join("")+"</span>","g-k");
 tasksEl.innerHTML=h}
function bounds(){const h=Math.tan(Qs.degToRad(e.fov/2))*12;Hh=h*1.5;W=h*e.aspect*1.5}
function spot(min){let x,y,k=0;do{x=rnd(-W*.86,W*.86);y=rnd(-Hh*.8,Hh*.8)}while(dist(x,y,L.x,L.y)<min&&++k<40);return[x,y]}
function mkCloud(x,y,r,drift){const c={x,y,r,burst:0,vx:drift?rnd(-.35,.35):0,vy:drift?rnd(-.25,.25):0,p:[]};
 for(let k=0;k<190;k++){const A=rnd(0,6.28),B=Math.acos(rnd(-1,1)),d=Math.cbrt(Math.random())*r;c.p.push({ox:Math.sin(B)*Math.cos(A)*d,oy:Math.sin(B)*Math.sin(A)*d*.8,oz:Math.cos(B)*d*.6,vx:0,vy:0,vz:0})}return c}
function mkDevil(x,y){return{x,y,vx:0,vy:0,ph:rnd(0,6.28),stun:0,dead:0}}
function setup(){
 bounds();LVc=genLevel(w.lv);const c=LVc;w.lvScore=w.score;w.combo=1;
 Object.assign(L,{x:0,y:0,vx:0,vy:0,dash:0,steer:!1});
 sigs=[];for(let k=0;k<c.sig;k++){const[x,y]=spot(1.6);sigs.push({x,y,ph:rnd(0,6.28),got:0,fade:0,vx:c.drift?rnd(-.35,.35):0,vy:c.drift?rnd(-.25,.25):0})}
 clouds=[];for(let k=0;k<c.cl;k++){const[x,y]=spot(2.2);clouds.push(mkCloud(x,y,rnd(.45,.72),c.drift))}
 devs=[];for(let k=0;k<c.dev;k++){const[x,y]=spot(4.5);devs.push(mkDevil(x,y))}
 walls=[];for(let k=0;k<c.walls;k++)walls.push({y:(k?-1:1)*Hh*.45,dir:k?1:-1,sp:rnd(.8,1.2),gap:rnd(-W*.4,W*.4),gw:2.8,gph:rnd(0,6)});
 winds=[];for(let k=0;k<c.wind;k++){const y=(k?-1:1)*Hh*rnd(.1,.35);winds.push({y,h:1.5,dir:Math.random()<.5?-1:1,st:Array.from({length:46},()=>({x:rnd(-W,W),y:rnd(-.7,.7),l:rnd(.3,.9)}))})}
 powers=[];if(c.shield){const[x,y]=spot(3);powers.push({k:"shield",x,y,got:0,ph:0})}if(w.lives<3&&w.lv>0){const[x,y]=spot(3);powers.push({k:"heart",x,y,got:0,ph:0})}
 orbs=[];boss=null;
 if(c.boss){boss={x:W*.45,y:0,hp:c.boss,max:c.boss,hit:0,spawn:4,shoot:2.4,flash:0,p:Array.from({length:420},()=>({a:rnd(0,6.28),r:Math.sqrt(Math.random())*1.15,z:rnd(-.4,.4),sp:rnd(.4,1.4)}))}}
 house=null;w.house=!c.house;if(c.house){const sx=Math.random()<.5?-1:1,sy=Math.random()<.5?-1:1;house={x:sx*W*.88,y:sy*Hh*.82}}
 stars=Array.from({length:150},()=>({x:rnd(-W*1.4,W*1.4),y:rnd(-Hh*1.4,Hh*1.4),z:rnd(-4,-1.5),s:rnd(2,7),ph:rnd(0,6.28)}));
 Object.assign(w,{sig:0,burst:0,inv:1.5,shield:0,phase:"intro",pt:2.4,yawn:0,still:0});
 toast(tx("g_lv","Level")+" "+(w.lv+1)+" · "+lvName(c),2.4);hud()}
function start(){
 Object.assign(w,{active:!0,paused:!1,lv:0,lives:3,done:!1,secretOn:!1,secretGot:!1,score:0});
 for(const k in hinted)delete hinted[k];
 pts.visible=!0;setup();n.voice("wee");s([10,30,10])}
function stop(){w.active=!1;pts.visible=!1;toastEl&&toastEl.classList.remove("on")}
function face(p){Object.assign(t.tgt,p)}
function dash(){
 if(!w.active||w.paused)return;
 if(w.phase==="over"){w.lives=3;w.score=w.lvScore;setup();n.voice("wake");face({tear:0,droop:0,tilt:0});return}
 L.dash=.38;w.still=0;t.tgt.sq=.8;t.tgt.stretch=1.25;setTimeout(()=>{t.tgt.sq=1;t.tgt.stretch=1},220);n.voice("surprise");s(12)}
addEventListener("keydown",k=>{if(!w.active)return;keys[k.code]=1;w.still=0;
 if(k.code==="Space"){k.preventDefault();dash()}
 if(k.code==="Escape")w.paused?resume():pause();
 /Arrow/.test(k.code)&&k.preventDefault()});
addEventListener("keyup",k=>{keys[k.code]=0});
function pause(){w.paused=!0;o(!0);n.voice("sleep")}
function resume(){w.paused=!1;o(!1);n.voice("wake")}
const ray=new Ui,plane=new qt(new R(0,0,1),0),hitP=new R;
function steer(p){ray.setFromCamera(p,e);ray.ray.intersectPlane(plane,hitP)&&(L.tx=hitP.x,L.ty=hitP.y,L.steer=!0,w.still=0)}
function hurt(fx,fy){
 if(w.inv>0||w.shield>0||w.phase!=="play")return;
 w.lives--;w.inv=1.8;w.hurt=1;
 const d=dist(L.x,L.y,fx,fy)||1;L.vx+=(L.x-fx)/d*9;L.vy+=(L.y-fy)/d*9;
 face({sq:.7,tear:.9,droop:.8,happy:0});setTimeout(()=>t.tgt.sq=1,200);
 n.voice(w.lives>0?"sad":"sob");s([30,40,30]);
 if(w.lives<=0){saveBest();w.phase="over";face({tear:1,droop:1.3,tilt:-.7,eyeH:.35});toast(tx("g_over","Dash to try again."),99)}
 else toast(tx("g_hit","Ouch!"),1.4);
 hud()}
function levelDone(){
 const c=LVc;
 return w.sig>=c.sig&&w.burst>=c.cl&&w.house&&(!c.boss||(boss&&boss.hp<=0))}
function clearLevel(){
 const bonus=200+w.lives*50+w.lv*40;w.score+=bonus;
 w.phase="clear";w.pt=2.6;w.dance=2;n.voice("laugh");s([10,30,10,30]);
 face({happy:1,blush:1,tear:0,droop:0,tilt:0});
 if(LVc.ty===4&&!w.done){w.done=!0;w.pt=4;toast(tx("g_done","You beat the noise."),3.8);n.voice("happy")}
 else toast(tx("g_clear","Level clear!")+" +"+bonus,2.4);
 w.lv++;saveBest();w.lv--;hud()}
// ---------- drawing ----------
let Z=0;
const P=(x,y,z,r,g,b,sz,al)=>{if(Z>=N)return;pos[Z*3]=x;pos[Z*3+1]=y;pos[Z*3+2]=z;col[Z*3]=r;col[Z*3+1]=g;col[Z*3+2]=b;siz[Z]=sz;alp[Z]=al;Z++};
function update(dt,time,ptr,moved){
 if(!w.active)return;
 mat.uniforms.uPx.value=Math.min(2,devicePixelRatio||1)*Math.min(1.4,innerHeight/900);
 if(toastT>0&&toastT<90){toastT-=dt;toastT<=0&&toastEl&&toastEl.classList.remove("on")}
 if(w.paused)return;
 const c=LVc,play=w.phase==="play";
 if(w.phase==="intro"){w.pt-=dt;if(w.pt<=0){w.phase="play";const hk="g_h"+(w.lv+1);if(!hinted[hk]&&tx(hk)){hinted[hk]=1;toast(tx(hk),4.2)}}}
 if(w.phase==="clear"){w.pt-=dt;if(w.pt<=0){w.lv++;setup()}}
 // ----- USHA moves -----
 const kx=(keys.ArrowRight||keys.KeyD?1:0)-(keys.ArrowLeft||keys.KeyA?1:0),ky=(keys.ArrowUp||keys.KeyW?1:0)-(keys.ArrowDown||keys.KeyS?1:0);
 if(moved)steer(ptr);
 const canMove=w.phase!=="over";
 if(canMove){if(kx||ky){L.vx+=kx*22*dt;L.vy+=ky*22*dt;L.steer=!1}else if(L.steer){L.vx+=(L.tx-L.x)*6*dt;L.vy+=(L.ty-L.y)*6*dt}}
 const boost=L.dash>0?2.2:1;L.dash-=dt;
 if(L.dash>0){const q=Math.hypot(L.vx,L.vy)||1;L.vx+=L.vx/q*30*dt;L.vy+=L.vy/q*30*dt}
 // ad winds push
 for(const wd of winds)if(Math.abs(L.y-wd.y)<wd.h/2&&play)L.vx+=wd.dir*7*dt;
 const damp=Math.pow(.06,dt);L.vx*=damp;L.vy*=damp;
 const vmax=7*boost,sp=Math.hypot(L.vx,L.vy);if(sp>vmax){L.vx*=vmax/sp;L.vy*=vmax/sp}
 L.x+=L.vx*dt;L.y+=L.vy*dt;
 const bx=W,by=Hh;
 if(Math.abs(L.x)>bx){L.x=Math.sign(L.x)*bx;L.vx*=-.5}
 if(Math.abs(L.y)>by){L.y=Math.sign(L.y)*by;L.vy*=-.5}
 sp<.15&&!(kx||ky)?w.still+=dt:sp>.4&&(w.still=0);
 w.comboT-=dt;if(w.comboT<=0&&w.combo>1){w.combo=1;hud()}w.inv=Math.max(0,w.inv-dt);w.shield=Math.max(0,w.shield-dt);w.hurt=Math.max(0,w.hurt-dt);w.anger=Math.max(0,w.anger-dt);
 const flick=w.inv>0&&play?1+.1*Math.sin(time*42):1;
 let bob=Math.sin(time*3)*.03;
 if(w.dance>0){w.dance-=dt;bob+=Math.abs(Math.sin(time*10))*.18;t.tgt.sq=Math.sin(time*20)>0?.86:1.1}
 t.group.position.set(L.x,L.y+bob,.2);t.group.scale.setScalar(.42*flick);
 t.group.rotation.set(-L.vy*.04,L.vx*.06,-L.vx*.05+(w.dance>0?Math.sin(time*10)*.25:0));
 t.state("present");
 // ----- her face: scared near imps, angry at the King, sleepy when idle -----
 let threat=99,tx0=0,ty0=0;
 for(const d of devs)if(!d.dead){const q=dist(L.x,L.y,d.x,d.y);if(q<threat){threat=q;tx0=d.x;ty0=d.y}}
 if(boss&&boss.hp>0){const q=dist(L.x,L.y,boss.x,boss.y)-1.1;if(q<threat){threat=q;tx0=boss.x;ty0=boss.y}}
 const scared=threat<1.9&&w.phase==="play"&&w.shield<=0;
 if(w.phase!=="over"){
  t.tgt.lookX=scared?clamp((tx0-L.x)*.25,-.6,.6):clamp(L.vx*.12,-.6,.6);
  t.tgt.lookY=scared?clamp((ty0-L.y)*.15,-.3,.3):clamp(L.vy*.06,-.3,.3);
  t.tgt.eyeW=scared?1.28:w.anger>0?1.1:1;t.tgt.eyeH=scared?1.28:w.anger>0?.5:w.yawn>0?.3:1;
  t.tgt.tilt=w.anger>0?.8:0;
  t.tgt.happy=Math.max(0,t.tgt.happy-dt*.8);
  t.tgt.tear=Math.max(0,(t.tgt.tear||0)-dt*.6);t.tgt.droop=Math.max(0,(t.tgt.droop||0)-dt*.8);
  t.tgt.blush=w.phase==="clear"?1:Math.max(0,t.tgt.blush-dt*.5);
 }
 if(play&&w.still>6&&w.yawn<=0){w.yawn=1.4;n.voice("yawn");w.still=0}
 w.yawn=Math.max(0,w.yawn-dt);
 // ----- camera follows -----
 e.position.x+=(L.x*.75-e.position.x)*(1-Math.pow(.03,dt));e.position.y+=(L.y*.75-e.position.y)*(1-Math.pow(.03,dt));e.position.z=12;e.lookAt(e.position.x,e.position.y,0);e.updateMatrixWorld();
 Z=0;
 const vis=(x,y)=>c.dark?clamp(1.5-dist(x,y,L.x,L.y)/3,0,1):1;
 const tn=c.tint;
 // scene: drifting star field in the level's colour
 for(const st0 of stars){const f=.5+.5*Math.sin(time*1.3+st0.ph);P(st0.x+Math.sin(time*.1+st0.ph)*.3,st0.y,st0.z,tn[0],tn[1],tn[2],st0.s,(c.dark?.12:.32)*f)}
 // ----- signals -----
 for(const g of sigs){
  if(play&&!g.got){g.x+=g.vx*dt;g.y+=g.vy*dt;if(Math.abs(g.x)>W*.9)g.vx*=-1;if(Math.abs(g.y)>Hh*.85)g.vy*=-1}
  const yy=g.y+Math.sin(time*1.6+g.ph)*.15;
  if(!g.got&&play&&dist(L.x,L.y,g.x,yy)<.6){g.got=1;w.sig++;n.voice("collect");s(8);t.tgt.happy=1;addScore(10,1);w.combo>2&&toast("×"+w.combo,.8)}
  if(g.got)g.fade=Math.min(1,g.fade+dt*2);
  const v=vis(g.x,yy),f=.8+.2*Math.sin(time*5+g.ph);
  P(g.x,yy+g.fade*.8,0,1,.45+g.fade*.4,.18,(44+g.fade*40)*f,(1-g.fade)*1.2*v);
  P(g.x,yy+g.fade*.8,0,1,.9,.8,11*f,(1-g.fade)*1.5*Math.max(v,c.dark?.18:0));
 }
 // ----- noise clouds -----
 for(const q of clouds){
  if(play&&!q.burst){q.x+=q.vx*dt;q.y+=q.vy*dt;if(Math.abs(q.x)>W*.85)q.vx*=-1;if(Math.abs(q.y)>Hh*.78)q.vy*=-1}
  const d=dist(L.x,L.y,q.x,q.y);
  if(!q.burst&&play&&d<q.r+.38){
   if(L.dash>0||sp>5.2){q.burst=.001;w.burst++;n.voice("pop");s([15,20,15]);addScore(25,1);
    for(const p of q.p){const m=Math.hypot(p.ox,p.oy,p.oz)||1,v=rnd(3,9);p.vx=p.ox/m*v+L.vx*.3;p.vy=p.oy/m*v+L.vy*.3;p.vz=p.oz/m*v}}
   else{L.vx+=(L.x-q.x)/(d||1)*6;L.vy+=(L.y-q.y)/(d||1)*6;n.voice("hm");s(6);if(!hinted.dash){hinted.dash=1;toast(tx("g_hint","Dash into the noise to burst it."),3)}}}
  q.burst&&(q.burst+=dt);
  const v=vis(q.x,q.y);
  for(const p of q.p){let x,y,z,al;
   if(q.burst){const b=q.burst;x=q.x+p.ox+p.vx*b*Math.exp(-b*.8);y=q.y+p.oy+p.vy*b*Math.exp(-b*.8);z=p.oz+p.vz*b*.3;al=Math.max(0,1-b*.6)*.8}
   else{x=q.x+p.ox+Math.sin(time*7+p.ox*40)*.06;y=q.y+p.oy+Math.cos(time*6+p.oy*50)*.06;z=p.oz;al=.55*v}
   if(al>.01)P(x,y,z,.62,.6,.66,5,al)}
 }
 // ----- fake-news imps: they hunt her -----
 for(const d of devs){
  if(d.dead){d.dead+=dt;if(d.dead<1.2)for(let k=0;k<14;k++){const A=k/14*6.28;P(d.x+Math.cos(A)*d.dead*2,d.y+Math.sin(A)*d.dead*2,0,1,.35,.2,8,1.2-d.dead)}continue}
  if(play){
   d.stun=Math.max(0,d.stun-dt);
   const q=dist(L.x,L.y,d.x,d.y)||1,chase=!c.dark||q<5;
   if(!d.stun&&chase){const spd=c.sp*(.7+.3*Math.sin(time*2+d.ph));d.vx+=((L.x-d.x)/q*spd-d.vx)*dt*2.2;d.vy+=((L.y-d.y)/q*spd-d.vy)*dt*2.2}
   else{d.vx*=Math.pow(.2,dt);d.vy*=Math.pow(.2,dt)}
   for(const o2 of devs)if(o2!==d&&!o2.dead){const dd=dist(d.x,d.y,o2.x,o2.y);if(dd<.8&&dd>0){d.vx+=(d.x-o2.x)/dd*dt*6;d.vy+=(d.y-o2.y)/dd*dt*6}}
   d.x+=d.vx*dt;d.y+=d.vy*dt;d.x=clamp(d.x,-W,W);d.y=clamp(d.y,-Hh,Hh);
   if(q<.55){
    if(w.shield>0){d.dead=.001;n.voice("pop");s([20,10,20]);addScore(50)}
    else if(L.dash>0){d.stun=1.6;d.vx=(d.x-L.x)/q*7;d.vy=(d.y-L.y)/q*7;n.voice("tap");s(10)}
    else hurt(d.x,d.y)}
  }
  const v=Math.max(vis(d.x,d.y),.22),j=Math.sin(time*18+d.ph)*.02,stn=d.stun>0;
  const rr=stn?.55:1,gg=stn?.5:.2,bb=stn?.55:.14;
  P(d.x,d.y,-.05,rr,gg*.7,bb,95,.55*v);P(d.x,d.y,0,rr,gg,bb,46,.9*v);
  for(let k=0;k<26;k++){const A=k/26*6.28+time*2;P(d.x+Math.cos(A)*.34+j,d.y+Math.sin(A)*.3,0,rr,gg+.1,bb,16,v)}
  for(const sd of[-1,1])for(let k=0;k<7;k++)P(d.x+sd*(.16+k*.035),d.y+.26+k*.07,0,rr,gg+.15,bb,13-k*1.4,v);
  for(const sd of[-1,1]){P(d.x+sd*.12,d.y+.05,.08,1,.95,.4,stn?6:20,v*(stn?.6:1.4));P(d.x+sd*.12,d.y+.05,.09,.1,.02,.02,stn?2:7,v)}
 }
 // ----- spam walls sweep the feed -----
 for(const wl of walls){
  if(play){wl.y+=wl.dir*wl.sp*dt;if(Math.abs(wl.y)>Hh*.8){wl.y=Math.sign(wl.y)*Hh*.8;wl.dir*=-1}wl.gap=Math.sin(time*.4+wl.gph)*W*.5}
  for(let x=-W;x<=W;x+=.12){if(Math.abs(x-wl.gap)<wl.gw/2)continue;{const yy=wl.y+Math.sin(x*3+time*4)*.04,vv=vis(x,wl.y);P(x,yy,0,.7,.55,1,16,vv);P(x,yy,-.05,.5,.35,1,34,.35*vv)}}
  if(play&&Math.abs(L.y-wl.y)<.32&&Math.abs(L.x-wl.gap)>wl.gw/2-.2){L.vy+=Math.sign(L.y-wl.y||1)*8;hurt(L.x,wl.y)}
 }
 // ----- ad winds -----
 for(const wd of winds)for(const p of wd.st){p.x+=wd.dir*dt*(6+p.l*4);if(p.x>W*1.2)p.x=-W*1.2;if(p.x<-W*1.2)p.x=W*1.2;
  for(let k=0;k<4;k++)P(p.x-wd.dir*k*p.l*.25,wd.y+p.y,-.2,.85,.9,1,6,.45*(1-k/4)*vis(p.x,wd.y+p.y))}
 // ----- power-ups -----
 for(const pw of powers){
  if(pw.got)continue;pw.ph+=dt;
  if(play&&dist(L.x,L.y,pw.x,pw.y)<.6){pw.got=1;
   if(pw.k==="shield"){w.shield=7;toast(tx("g_shield","Shield!"),2.4);n.voice("found");s([10,20,10])}
   else{w.lives=Math.min(3,w.lives+1);toast(tx("g_heart","+1 life"),1.6);n.voice("happy")}hud();continue}
  const v=Math.max(vis(pw.x,pw.y),.3);
  if(pw.k==="shield")for(let k=0;k<18;k++){const A=k/18*6.28+pw.ph*2;P(pw.x+Math.cos(A)*.34,pw.y+Math.sin(A)*.34,0,.55,.85,1,13,v)}
  else for(let k=0;k<16;k++){const A=k/16*6.28,hx=16*Math.pow(Math.sin(A),3)/60,hy=(13*Math.cos(A)-5*Math.cos(2*A)-2*Math.cos(3*A)-Math.cos(4*A))/60;P(pw.x+hx*1.4,pw.y+hy*1.4,0,1,.4,.55,13,v)}
  P(pw.x,pw.y,0,pw.k==="shield"?.6:1,pw.k==="shield"?.9:.5,1,60,.5*v)
 }
 // her shield
 if(w.shield>0)for(let k=0;k<24;k++){const A=k/24*6.28+time*3;P(L.x+Math.cos(A)*.66,L.y+Math.sin(A)*.66,.3,.55,.85,1,11,(w.shield<2?.5+.5*Math.sin(time*20):1)*.8)}
 // ----- the Noise King -----
 if(boss){
  const B=boss;
  if(play&&B.hp>0){
   B.x=W*.45+Math.sin(time*.5)*W*.3;B.y=Math.sin(time*.8)*Hh*.5;
   B.spawn-=dt;if(B.spawn<=0&&devs.filter(d=>!d.dead).length<4+c.tr){B.spawn=Math.max(2.5,6-c.tr*.7);devs.push(mkDevil(B.x,B.y))}
   B.shoot-=dt;if(B.shoot<=0){B.shoot=Math.max(.9,2.2-c.tr*.25);const q=dist(L.x,L.y,B.x,B.y)||1;orbs.push({x:B.x,y:B.y,vx:(L.x-B.x)/q*3.2,vy:(L.y-B.y)/q*3.2,life:6})}
   const ring=(Math.sin(time*1.3)+1)/2,open=ring>.62,q=dist(L.x,L.y,B.x,B.y);
   B.open=open;
   if(q<1.25){
    if(open&&(L.dash>0||w.shield>0)&&B.hit<=0){B.hp--;B.hit=.8;addScore(100);B.flash=.4;w.anger=1.2;n.voice("grr");s([30,20,30]);toast(tx("g_kinghit","Direct hit!"),1.2);L.vx=(L.x-B.x)/q*10;L.vy=(L.y-B.y)/q*10;hud();
     if(B.hp<=0){devs.forEach(d=>d.dead||(d.dead=.001));orbs=[];n.voice("pop")}}
    else if(B.hit<=0){L.vx+=(L.x-B.x)/(q||1)*7;L.vy+=(L.y-B.y)/(q||1)*7;hurt(B.x,B.y)}}
   B.hit=Math.max(0,B.hit-dt);
  }
  B.flash=Math.max(0,B.flash-dt);
  const dead=B.hp<=0,ring=(Math.sin(time*1.3)+1)/2;
  for(const p of B.p){const A=p.a+time*p.sp*(dead?3:1),rr=p.r*(dead?1+(time%10)*.02:1);P(B.x+Math.cos(A)*rr,B.y+Math.sin(A)*rr*.85,p.z,B.flash>0?1:.95,B.flash>0?.85:.18,.1,11,dead?.15:.85)}
  if(!dead){P(B.x,B.y,-.2,1,.15,.08,320,.35);P(B.x,B.y,-.1,.9,.1,.05,170,.4)}
  if(!dead){
   for(let k=0;k<60;k++){const A=k/60*6.28-time;P(B.x+Math.cos(A)*1.4,B.y+Math.sin(A)*1.2,.2,1,B.open?.75:.3,B.open?.3:.15,B.open?18:8,B.open?1.2:.35+ring*.3)}
   for(const sd of[-1,1]){P(B.x+sd*.34,B.y+.2,.4,1,.95,.4,44,1.3);P(B.x+sd*.34,B.y+.17,.42,.1,0,0,14,1)}
   for(let k=0;k<3;k++)for(let m=0;m<8;m++)P(B.x+(k-1)*.38,B.y+.95+m*.09,.3,1,.75,.25,15-m*1.4,1.1)}
 }
 for(const ob of orbs){if(play){ob.x+=ob.vx*dt;ob.y+=ob.vy*dt;ob.life-=dt;if(dist(L.x,L.y,ob.x,ob.y)<.45){ob.life=0;hurt(ob.x,ob.y)}}
  P(ob.x,ob.y,0,1,.3,.2,60,.7);P(ob.x,ob.y,0,1,.85,.7,16,1.2)}
 orbs=orbs.filter(o0=>o0.life>0&&Math.abs(o0.x)<W*1.3&&Math.abs(o0.y)<Hh*1.3);
 // ----- engineers' house -----
 if(house){
  const q=dist(L.x,L.y,house.x,house.y);
  if(!w.house&&play&&q<.8){w.house=!0;n.voice("found");s([10,40,10]);toast(tx("g_house","You found the engineers’ house."),2.6);hud()}
  const v=c.dark?clamp(1.3-q/6,.18,1):1;
  for(let k=0;k<200;k++){const u=k/200*5;let gx,gy;
   u<1?(gx=-1+u*2,gy=-1):u<2?(gx=1,gy=-1+(u-1)*1.2):u<3?(gx=1-(u-2),gy=.2+(u-2)*.9):u<4?(gx=-(u-3),gy=1.1-(u-3)*.9):(gx=-1,gy=.2-(u-4)*1.2);
   P(house.x+gx*.55,house.y+gy*.55,0,w.house?1:.9,w.house?.7:.85,w.house?.45:.8,4,v*(w.house?1:.6)*(.7+.3*Math.sin(time*2+k)))}
 }
 // ----- level flow -----
 if(play&&levelDone())clearLevel();
 // the secret, for those who wait after the last level
 if(w.done&&!w.secretGot&&w.still>3&&!w.secretOn&&w.phase==="clear"){w.secretOn=!0;sec={x:L.x-2,y:L.y-1.2};n.voice("hm")}
 if(w.secretOn&&!w.secretGot){sec.x+=(L.x+1.6-sec.x)*dt*.25;sec.y+=(L.y+1-sec.y)*dt*.25;
  if(dist(L.x,L.y,sec.x,sec.y)<.5){w.secretGot=!0;n.voice("secret");s([20,50,20,50,40]);a()}
  for(let k=0;k<8;k++)P(sec.x+Math.cos(time+k)*.05,sec.y+Math.sin(time*1.3+k)*.05,0,.83,1,.23,30-k*3,.5)}
 for(let k=Z;k<N;k++)alp[k]=0;
 geo.attributes.position.needsUpdate=geo.attributes.c.needsUpdate=geo.attributes.s.needsUpdate=geo.attributes.a.needsUpdate=!0;
}
return{S:w,start,stop,update,dash,pause,resume,renderTasks:hud,jump:k=>{w.lv=k;setup()},get active(){return w.active}}}
