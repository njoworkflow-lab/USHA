// Section 03. One transformed clip for the whole desk; no layout reads in a drag.
(() => {
  const D=document,H=D.documentElement,$=(s,r=D)=>r.querySelector(s),$$=(s,r=D)=>[...r.querySelectorAll(s)];
  const media=window.USHA_X3_MEDIA, reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const mp4=!!D.createElement('video').canPlayType('video/mp4; codecs="avc1.64001f,mp4a.40.2"');
  const clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
  const saved={with:{time:0,heard:false},without:{time:0,heard:false}};
  let x=innerWidth<=900?35:50,lang='',copy,labels,board,live,side,rail,knob,clip,p7,controls,abort,resize,observers=[];
  let width=0,rects=[],dx=0,shift=0,raf=0,motion=0,gesture=null,teased=false,interacted=false,pingTimer;
  let active='without',sound=false,manual=false,ended=false,near=false,visible=0,blocked=false,error=false,playGeneration=0,gameVisible=false,pausedByUser=false;
  let chatObserver,chatChips;
  const duck=(on)=>window.USHA_AUDIO?.duck?.('x3-video',on);
  function preferences() {
    const c=navigator.connection;
    return {reducedMotion:reduced.matches,saveData:!!c?.saveData,network:c?.effectiveType||'4g'};
  }
  const previewAllowed=()=>{const p=preferences();return !p.reducedMotion&&!p.saveData&&p.network==='4g';};
  function stopMotion(){cancelAnimationFrame(motion);motion=0;}
  function input(){interacted=true;stopMotion();board?.classList.remove('x3-teasing');}
  function set(v){input();x=clamp(Number(v)||0);write();}
  function animate(v,ms=600,done){
    stopMotion();const start=x,t=performance.now(),target=clamp(v);
    if(reduced.matches){x=target;write();done?.();return;}
    function frame(now){const k=clamp((now-t)/ms,0,1);x=start+(target-start)*(1-Math.pow(1-k,3));write();if(k<1)motion=requestAnimationFrame(frame);else{motion=0;done?.();}}
    motion=requestAnimationFrame(frame);
  }
  function coverage(r){const seam=x/100*width;return clamp((seam-r.start)/r.width,0,1);}
  function write(){
    if(!board)return;
    const direction=lang==='ar'?-1:1;
    clip.style.transform=`translate3d(${(x-100)*direction}%,0,0)`;
    $('.x3-clip-in',board).style.transform=`translate3d(${(100-x)*direction}%,0,0)`;
    const px=(lang==='ar'?100-x:x)/100*width;
    $('.x3-seam',board).style.transform=`translate3d(${px}px,0,0)`;
    knob.style.setProperty('--x3-clamp',`${clamp(px,29,width-29)-px}px`);
    knob.setAttribute('aria-valuenow',String(Math.round(x)));knob.setAttribute('aria-valuetext',copy.b3_val.replace('{x}',Math.round(x)));
    $('.x3-label-on').style.opacity=String(Math.max(.4,x/100));$('.x3-label-off').style.opacity=String(Math.max(.4,1-x/100));
    $$('[data-x3-value]').forEach(b=>b.setAttribute('aria-pressed',String(Math.abs(x-Number(b.dataset.x3Value))<.01)));
    for(const r of rects)if(coverage(r)>.6&&!r.el.classList.contains('x3-won'))r.el.classList.add('x3-won');
    const r=rects.find(r=>r.el.dataset.panel==='7');const next=r&&coverage(r)>=.5?'with':'without';
    if(next!==active){const old=video();if(old){saved[active].time=old.currentTime;old.pause();}active=next;ended=false;error=false;syncMedia();}
  }
  function queueWrite(){if(!raf)raf=requestAnimationFrame(()=>{raf=0;write();});}
  function measure(){
    if(!board)return;
    const br=board.getBoundingClientRect();width=br.width;board.style.setProperty('--x3-travel',`${Math.max(0,br.height-90)}px`);
    // Read the untransformed grid, never the warm clipped layer.
    rects=$$('.x3-off .x3-p',board).map((off,i)=>{const r=off.getBoundingClientRect();return {el:$$('.x3-on .x3-p',board)[i],start:lang==='ar'?br.right-r.right:r.left-br.left,width:r.width};});
    const sr=side.getBoundingClientRect(),wr=$('#talk .wrap.talk').getBoundingClientRect();dx=wr.left+wr.width/2-(sr.left+sr.width/2-shift);
    write();scroll();
  }
  function scroll(){
    if(!live)return;
    const r=live.getBoundingClientRect(),k=1-Math.pow(1-clamp((innerHeight-r.top)/(.85*innerHeight),0,1),3);
    shift=innerWidth>900?k*dx:0;
    side.style.transform=innerWidth>900?`translate3d(${shift.toFixed(2)}px,${(-k*9).toFixed(3)}vh,0)`:'';
    live.classList.toggle('x3-arrived',k>.6);
    rail?.style.setProperty('--x3-chapter',r.top>innerHeight*.6?'.3333':r.bottom>innerHeight*.3?'.6667':'1');
  }
  function pointerDown(e){
    if(e.button!==0||e.target.closest('.x3-controls'))return;
    input();const r=board.getBoundingClientRect();
    gesture={id:e.pointerId,type:e.pointerType,startX:e.clientX,startY:e.clientY,from:x,rect:r,handle:!!e.target.closest('.x3-knob'),horizontal:false};
    if(e.pointerType!=='touch'||gesture.handle){board.setPointerCapture(e.pointerId);if(e.pointerType!=='touch')animate((lang==='ar'?r.right-e.clientX:e.clientX-r.left)/r.width*100,260);}
  }
  function pointerMove(e){
    const g=gesture;if(!g||g.id!==e.pointerId)return;
    const mx=e.clientX-g.startX,my=e.clientY-g.startY;
    if(g.type==='touch'&&!g.handle&&!g.horizontal){
      if(Math.abs(my)>8&&Math.abs(my)>Math.abs(mx)){gesture=null;return;}
      if(Math.abs(mx)<8||Math.abs(mx)<=1.5*Math.abs(my))return;
      g.horizontal=true;board.setPointerCapture(e.pointerId);
    }
    stopMotion();
    x=clamp(g.type==='touch'?g.from+mx/g.rect.width*100*(lang==='ar'?-1:1):(lang==='ar'?g.rect.right-e.clientX:e.clientX-g.rect.left)/g.rect.width*100);
    knob.style.setProperty('--x3-look',`${Math.sign(mx)*2}px`);queueWrite();
  }
  function pointerEnd(e){if(gesture?.id!==e.pointerId)return;gesture=null;if(board.hasPointerCapture(e.pointerId))board.releasePointerCapture(e.pointerId);knob.style.setProperty('--x3-look','0px');}
  function key(e){
    let v=x,step=e.shiftKey?20:5;
    if(e.key==='Home')v=0;else if(e.key==='End')v=100;
    else if(e.key==='PageUp')v+=20;else if(e.key==='PageDown')v-=20;
    else if(e.key==='ArrowRight')v+=step*(lang==='ar'?-1:1);else if(e.key==='ArrowLeft')v-=step*(lang==='ar'?-1:1);else return;
    e.preventDefault();set(v);
  }
  function video(){return board&&$(`.x3-v[data-film="${active}"]`,board);}
  function rendition(film){
    const list=Object.entries(media[film].renditions).sort((a,b)=>Number(a[0])-Number(b[0]));
    const format=(r)=>!mp4&&r.webm?r.webm:r;
    if(innerWidth<=900)return format((list.find(([n])=>n==='480')||list[0])[1]);
    if(innerWidth*devicePixelRatio>=1600&&!preferences().saveData&&media[film].renditions['1080'])return format(media[film].renditions['1080']);
    return format((list.filter(([n])=>Number(n)<=720).pop()||list[0])[1]);
  }
  function load(v){
    if(!v||v.getAttribute('src'))return;
    const film=v.dataset.film;v.src=rendition(film).url;
    v.addEventListener('loadedmetadata',()=>{v.style.setProperty('--ar',`${v.videoWidth}/${v.videoHeight}`);if(saved[film].restart){v.currentTime=0;saved[film].restart=false;}else if(saved[film].time)v.currentTime=Math.min(saved[film].time,v.duration||Infinity);},{once:true});
  }
  function posters(){if(near)$$('.x3-v',board).forEach(v=>{if(!v.poster)v.poster=media[v.dataset.film].poster;});}
  function pauseAll(){++playGeneration;$$('.x3-v',board).forEach(v=>v.pause());duck(false);}
  function updateControls(){
    if(!controls)return;const v=video(),ctl=copy.p7_ctl,duration=v?.duration||media[active].duration||0;
    const time=(n)=>`${Math.floor((n||0)/60)}:${String(Math.floor((n||0)%60)).padStart(2,'0')}`;
    $('.x3-play',controls).textContent=ended?ctl[7]:manual&&!v?.paused?ctl[1]:ctl[0]+(preferences().saveData?` · ${(rendition(active).bytes/1e6).toFixed(1)} MB`:'');
    const sb=$('.x3-sound',controls);sb.textContent=sound?ctl[3]:ctl[2];sb.setAttribute('aria-pressed',String(sound));
    $('.x3-now',controls).textContent=error?labels.notSupported:`${ctl[4]} ${copy[active==='with'?'b3_on':'b3_off']} · ${time(v?.currentTime)} / ${time(Math.round(duration))}`;
    $('.x3-progress i',controls).style.transform=`scaleX(${duration?(v?.currentTime||0)/duration:0})`;
    $$('[data-x3-watch]',controls).forEach(b=>{b.textContent=ended&&Number(b.dataset.x3Watch)===(active==='with'?0:100)?ctl[8]:ctl[Number(b.dataset.x3Watch)===0?5:6];});
  }
  function syncMedia(){
    if(!board)return;
    posters();const v=video(),generation=++playGeneration;
    $$('.x3-v',board).forEach(other=>{if(other!==v)other.pause();});
    const allowed=!blocked&&!D.hidden&&visible>=.2&&!ended&&!error;
    const play=allowed&&(manual||(visible>=.5&&!pausedByUser&&previewAllowed()));
    if(!play){v?.pause();duck(false);updateControls();return;}
    load(v);if(sound&&!saved[active].heard){saved[active].heard=true;saved[active].time=0;if(v.readyState)v.currentTime=0;else saved[active].restart=true;}v.muted=!sound;v.loop=!sound;duck(sound);
    const promise=v.play();promise?.catch(()=>{if(generation!==playGeneration)return;manual=false;duck(false);updateControls();});updateControls();
  }
  function userPlay(){
    input();const v=video();
    if(manual&&!v.paused&&!ended){manual=false;sound=false;pausedByUser=true;pauseAll();updateControls();return;}
    if(ended)v.currentTime=0;ended=false;error=false;pausedByUser=false;manual=true;sound=true;syncMedia();
  }
  function soundToggle(){
    input();sound=!sound;ended=false;error=false;pausedByUser=false;
    if(sound){manual=true;syncMedia();}
    else {manual=false;pausedByUser=true;pauseAll();updateControls();}
  }
  function guard(){
    const next=H.classList.contains('x-modal-on')||H.classList.contains('gaming')||gameVisible;
    if(next!==blocked){blocked=next;if(next){manual=false;sound=false;}syncMedia();}
  }
  function chatUI(){
    const chat=$('#chat'),chips=$('#ichips');if(!chat)return;chat.dataset.tag=copy.b1_tag;
    let next=$('.x3-next');if(!next){next=D.createElement('a');next.className='x3-next';next.href='#x3-live';chat.after(next);}next.textContent=copy.b1_next;
    const sync=()=>{
      next.hidden=!$('.move',chat);
      if(!$('.x3-cycle',chat)){const bar=D.createElement('span');bar.className='x3-cycle';bar.setAttribute('aria-hidden','true');bar.innerHTML='<i></i>';chat.append(bar);}
    };
    chatObserver?.disconnect();chatObserver=new MutationObserver(sync);chatObserver.observe(chat,{subtree:true,childList:true});sync();
    if(chips!==chatChips){chatChips=chips;chips?.addEventListener('pointerdown',()=>chat.classList.add('x3-held'),{passive:true});chips?.addEventListener('click',()=>{const bar=$('.x3-cycle i',chat);if(bar){bar.style.animation='none';requestAnimationFrame(()=>bar.style.animation='');}});}
    const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('x3-run',e.isIntersecting)),{threshold:0});io.observe(chat);observers.push(io);
  }
  function render(c,p,l){
    if(!media||!c)return;
    if(lang===l&&board?.isConnected){chatUI();return;}
    pauseAllSafe();abort?.abort();resize?.disconnect();observers.forEach(o=>o.disconnect());observers=[];stopMotion();
    const hint=$('#talk .hint');hint?.remove();
    lang=l;copy=c;labels=p;live=$('#x3-live');const split=$('#x3-split');side=$('#talk .side');
    if(!live||!split||!side)return;
    if(live.dataset.lang!==l){live.innerHTML=x3LiveHTML(c);live.dataset.lang=l;}
    if(split.dataset.lang!==l){split.innerHTML=x3SplitHTML(c,l,media,p);split.dataset.lang=l;}
    if(hint)$('.x3-hint-slot',live).append(hint);
    const watch=$('#talk .x3-watch');rail=$('.x3-rail');if(rail)rail.outerHTML=x3RailHTML(c);else $('.lead',watch)?.insertAdjacentHTML('afterend',x3RailHTML(c));rail=$('.x3-rail');
    board=$('.x3-board',split);knob=$('.x3-knob',board);clip=$('.x3-clip',board);p7=$('.x3-off .x3-p7',board);controls=$('.x3-controls',board);active='without';visible=0;near=false;error=false;blocked=H.classList.contains('x-modal-on');
    abort=new AbortController();const on=(el,event,fn,opts={})=>el.addEventListener(event,fn,{...opts,signal:abort.signal});
    on(board,'pointerdown',pointerDown);on(board,'pointermove',pointerMove);on(board,'pointerup',pointerEnd);on(board,'pointercancel',pointerEnd);on(knob,'keydown',key);
    $$('[data-x3-value],[data-x3-watch]').forEach(b=>on(b,'click',()=>{input();animate(Number(b.dataset.x3Value??b.dataset.x3Watch));}));
    on($('.x3-play',controls),'click',userPlay);on($('.x3-sound',controls),'click',soundToggle);
    // Capture pointerdown precedes the bundle's first pointerup/click sound enable.
    on(controls,'pointerdown',e=>{if(e.target.closest('.x3-play,.x3-sound'))duck(true);},{capture:true});
    on(controls,'keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.x3-play,.x3-sound'))duck(true);},{capture:true});
    $$('.x3-v',board).forEach(v=>{
      v.muted=!sound;
      on(v,'timeupdate',updateControls);on(v,'play',()=>{if(v!==video()||blocked||D.hidden||visible<.2){v.pause();return;}$$('.x3-v',board).forEach(o=>{if(o!==v)o.pause();});updateControls();});
      on(v,'pause',()=>{if(v===video()){duck(false);updateControls();}});
      on(v,'ended',()=>{ended=true;manual=false;duck(false);updateControls();});
      on(v,'error',()=>{if(v===video()){error=true;manual=false;duck(false);updateControls();}});
    });
    const loops=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.target===live)e.target.classList.toggle('x3-run',e.intersectionRatio>.15);
      else {board.classList.toggle('x3-vis',e.isIntersecting);if(e.isIntersecting&&!teased&&!interacted&&!reduced.matches){
        // Tall desks can never have 35% of their own area on a phone: use
        // 35% of the viewport's available desk area as the entry threshold.
        const visibleHeight=e.intersectionRect.height;if(visibleHeight>=Math.min(board.offsetHeight,innerHeight)*.35){teased=true;const initial=x;board.classList.add('x3-teasing');animate(initial+18,700,()=>animate(initial-10,600,()=>animate(initial,500)));board.classList.add('x3-teasing');setTimeout(()=>board?.classList.remove('x3-teasing'),2400);}
      }}
    }),{threshold:[0,.01,.15,.35,.5]});loops.observe(live);loops.observe(board);observers.push(loops);
    const post=new IntersectionObserver(es=>{near=es[0].isIntersecting;posters();},{rootMargin:'150% 0px'});post.observe(p7);observers.push(post);
    const films=new IntersectionObserver(es=>{visible=es[0].intersectionRatio;if(visible<.2){manual=false;sound=false;}syncMedia();},{threshold:[0,.2,.5,1]});films.observe(p7);observers.push(films);
    resize=new ResizeObserver(measure);resize.observe(board);resize.observe(live);measure();chatUI();
    D.dispatchEvent(new CustomEvent('usha:x3render'));
  }
  function pauseAllSafe(){if(board){$$('.x3-v',board).forEach(v=>saved[v.dataset.film].time=v.currentTime);pauseAll();}}
  function ping(){if(!live)return;clearTimeout(pingTimer);live.classList.remove('x3-ping');requestAnimationFrame(()=>live?.classList.add('x3-ping'));pingTimer=setTimeout(()=>live?.classList.remove('x3-ping'),1400);}
  D.addEventListener('visibilitychange',()=>{if(D.hidden){manual=false;sound=false;pauseAllSafe();}else syncMedia();});
  new MutationObserver(guard).observe(H,{attributes:true,attributeFilter:['class']});
  const gameObserver=new IntersectionObserver(es=>{gameVisible=es[0].isIntersecting;guard();});
  if($('#game'))gameObserver.observe($('#game'));
  reduced.addEventListener('change',syncMedia);navigator.connection?.addEventListener('change',syncMedia);
  window.USHA_X3={render,scroll,set,ping,state:()=>({x,active,sound,manual,visible,near,previewAllowed:previewAllowed(),preferences:preferences(),teased,interacted,playing:board?$$('.x3-v',board).filter(v=>!v.paused).length:0})};
})();
