import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { applyBrief } from './brief.mjs';

const source = `<div class="chips" id="bq1"></div><div class="chips" id="bq2"></div>
<label class="field"><input id="bname" data-ph="bf_name"></label>
<label class="field"><input id="bco" data-ph="bf_co"></label>
<label class="field"><input id="bct" data-ph="bf_ct"></label>
<div class="done" id="bdone"><h3></h3><p></p></div>
<script>ue("#bnext").onclick=()=>{oldSubmit()};function vu(){}</script>`;

test('rebuilding translated labels retains every field and produces identical markup', () => {
  const first = applyBrief(source);
  const translated = first.replace(/(<span class="bf-label" data-t="([^"]+)">)<\/span>/g, '$1Имя / الاسم / Company</span>');
  const second = applyBrief(translated);
  assert.equal(second, first);
  assert.equal(applyBrief(second), first);
  for (const id of ['bname', 'bco', 'bct']) assert.equal((second.match(new RegExp(`id="${id}"`, 'g')) || []).length, 1);
  assert.equal((second.match(/class="bf-label"/g) || []).length, 3);
});

function fixture(writeText) {
  const nodes = new Map();
  function element(selector) {
    if (!nodes.has(selector)) nodes.set(selector, { value: '', textContent: '', dataset: {}, style: {}, disabled: false, attributes: {},
      setAttribute(k,v) { this.attributes[k]=v; }, addEventListener() {}, focus() {}, classList: { add() {} },
      querySelector(s) { return element(selector+' '+s); } });
    return nodes.get(selector);
  }
  const dictionary = new Proxy({ bf_a1: ['Goods'], bf_a2: ['Growth'] }, { get: (o,k) => o[k] ?? k });
  const sandbox = { ue: element, rt: () => [], un: () => dictionary, wl: { en: dictionary }, fi: 'en',
    mt: { step: 2, sell: 0, pain: 0, plan: null }, Rl: { tg: 'https://t.me/example_manager', mail: 'manager@example.invalid' },
    navigator: { clipboard: { writeText } }, Ae: { tick() {}, voice() {} }, ut() {}, yn() {}, vu() {}, hr(step) { sandbox.mt.step=step; } };
  const code=applyBrief(source).split('/*brief-ui*/')[1].split('/*/brief-ui*/')[0];
  vm.runInNewContext(code,sandbox);
  return { ...sandbox, element };
}
const flush = () => new Promise(resolve => setImmediate(resolve));

test('clipboard rejection retains Prepared; retry confirms Copied only after success', async () => {
  let reject,resolve;
  const f=fixture(()=>new Promise((yes,no)=>{resolve=yes;reject=no;}));
  f.element('#bct').value='qa@example.invalid';
  f.element('#bnext').onclick();
  assert.equal(f.element('#bdone').dataset.briefState,'prepared');
  assert.equal(f.element('#bcopy').disabled,true);
  reject(new Error('Permission denied'));await flush();
  assert.equal(f.element('#bdone').dataset.briefState,'prepared');
  assert.equal(f.element('#bdone p').textContent,'bf_copyError');
  assert.equal(f.element('#bcopy').disabled,false);
  f.element('#bcopy').onclick();
  assert.equal(f.element('#bdone').dataset.briefState,'prepared');
  resolve();await flush();
  assert.equal(f.element('#bdone').dataset.briefState,'copied');
  assert.equal(f.element('#bdone p').textContent,'bf_doneCopied');
  assert.equal(f.element('#btg').href,'https://t.me/example_manager');
  assert.match(f.element('#bmail').href,/^mailto:manager@example\.invalid\?subject=/);
  const payload=new URL(f.element('#bmail').href).searchParams.get('body');
  assert.equal(payload, 'USHA brief · first free week\nSells: Goods\nPain: Growth\nName: -\nCompany: -\nContact: qa@example.invalid\nLanguage: EN');
  assert.notEqual(f.element('#bdone').dataset.briefState,'sent');
});

test('missing choices and contact show inline errors without preparing or copying', () => {
  let copies=0;const f=fixture(()=>{copies++;return Promise.resolve();});
  for(const [step,key,id] of [[0,'bf_errorSell','bq1'],[1,'bf_errorPain','bq2'],[2,'bf_errorContact','bct']]) {
    Object.assign(f.mt,{step,sell:null,pain:null});f.element('#bnext').onclick();
    assert.equal(f.element('#'+id+'-error').textContent,key);
    assert.equal(f.element('#'+id).attributes['aria-invalid'],'true');
  }
  assert.equal(copies,0);assert.equal(f.element('#bdone').dataset.briefState,undefined);
});
