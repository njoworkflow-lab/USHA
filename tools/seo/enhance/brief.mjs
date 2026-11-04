// Patch only the existing free-week brief. Delivery remains Telegram/mailto;
// neither opening a composer nor writing to the clipboard confirms delivery.
export function applyBrief(src) {
  for (const [id, key] of [['bname', 'bf_name'], ['bco', 'bf_co'], ['bct', 'bf_ct']]) {
    const field = new RegExp(`(<label class="field">)(?:<span[^>]*>[^<]*<\\/span>)?(<input id="${id}"[^>]*>)`);
    if (!field.test(src)) throw new Error(`Brief field changed: ${id}`);
    src = src.replace(field, `$1<span class="bf-label" data-t="${key}"></span>$2`);
  }
  for (const [id, error] of [['bq1', 'bq1-error'], ['bq2', 'bq2-error']]) {
    const chips = new RegExp(`<div class="chips" id="${id}"[^>]*><\\/div>(?:<p id="${error}"[^>]*>[^]*?<\\/p>)?`);
    if (!chips.test(src)) throw new Error(`Brief choices changed: ${id}`);
    src = src.replace(chips, `<div class="chips" id="${id}" role="group" aria-describedby="${error}"></div><p id="${error}" class="bf-error" role="alert"></p>`);
  }
  src = src.replace(/(<input id="bct"[^>]*)(>)/, (_, input) => input.replace(/ aria-(?:describedby|required)="[^"]*"/g, '') + ' aria-required="true" aria-describedby="bct-error">');
  src = src.replace(/(<input id="bct"[^>]*><\/label>)(?:<p id="bct-error"[^>]*>[^]*?<\/p>)?/, '$1<p id="bct-error" class="bf-error" role="alert"></p>');
  src = src.replace(/<div class="done" id="bdone"[^>]*>/, '<div class="done" id="bdone" role="status" aria-live="polite">');
  const start = src.includes('/*brief-ui*/') ? src.indexOf('/*brief-ui*/') : src.indexOf('ue("#bnext").onclick=');
  const end = src.indexOf('function vu(', start);
  if (start < 0 || end < 0) throw new Error('Brief submit handler changed');
  return src.slice(0, start) + HANDLER + src.slice(end);
}

const HANDLER = `/*brief-ui*/
function briefError(id,key){
  const field=ue('#'+id),message=ue('#'+id+'-error');
  field.setAttribute('aria-invalid',key?'true':'false');
  message.textContent=key?un()[key]:'';
}
['bq1','bq2','bct'].forEach(id=>ue('#'+id).addEventListener(id==='bct'?'input':'click',()=>briefError(id,'')));
ue('#bnext').onclick=()=>{
  if(mt.step<2){
    const id=mt.step===0?'bq1':'bq2',missing=mt.step===0?mt.sell==null:mt.pain==null;
    if(missing){briefError(id,mt.step===0?'bf_errorSell':'bf_errorPain');vu(ue('#brief'));return;}
    briefError(id,'');hr(mt.step+1);return;
  }
  const contact=ue('#bct').value.trim();
  if(!contact){briefError('bct','bf_errorContact');vu(ue('#bct').parentNode);ue('#bct').focus({preventScroll:true});return;}
  briefError('bct','');
  const e=wl.en,text=['USHA brief · first free week',mt.plan?'Plan: '+mt.plan:'',
    'Sells: '+e.bf_a1[mt.sell],'Pain: '+e.bf_a2[mt.pain],
    'Name: '+(ue('#bname').value.trim()||'-'),'Company: '+(ue('#bco').value.trim()||'-'),
    'Contact: '+contact,'Language: '+fi.toUpperCase()].filter(Boolean).join('\\n');
  ue('#btg').href=Rl.tg;
  ue('#bmail').href='mailto:'+Rl.mail+'?subject='+encodeURIComponent('USHA · free week')+'&body='+encodeURIComponent(text);
  const done=ue('#bdone'),copy=ue('#bcopy');
  const status=(state,heading,body)=>{
    done.dataset.briefState=state;
    const h=done.querySelector('h3'),p=done.querySelector('p');
    h.dataset.t=heading;h.textContent=un()[heading];p.dataset.t=body;p.textContent=un()[body];
  };
  status('prepared','bf_doneH','bf_doneP');
  const copyBrief=async()=>{
    copy.disabled=true;
    try{
      await navigator.clipboard.writeText(text);
      status('copied','bf_copied','bf_doneCopied');
      copy.textContent=un().bf_copied;
    }catch{
      status('prepared','bf_doneH','bf_copyError');
      copy.textContent=un().bf_copy;
    }finally{copy.disabled=false;}
  };
  copy.onclick=()=>{copyBrief();Ae.tick(1500);};
  rt('#brief .step, #bnav, #brief .safe').forEach(s=>s.style.display='none');
  done.classList.add('on');
  copyBrief();
  Ae.voice('happy');ut([10,30,10]);yn({happy:1,blush:1},2);
};
/*/brief-ui*/
`;
