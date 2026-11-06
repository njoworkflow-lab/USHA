#!/usr/bin/env node
// Check the restored commitments against the audit's immutable live source.
// Run after building: node tools/seo/check-restored-content.mjs
// Requires the live commit recorded in content-audit-elevation.md in local Git.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const original = p => execFileSync('git', ['show', `871a338:${p}`], { cwd: root, maxBuffer: 8e6 }).toString();
function literal(source, marker) {
  const at = source.indexOf(marker);
  assert.ok(at >= 0, `Missing data marker ${marker}`);
  let i = at + marker.length - 1, depth = 0, quote;
  for (let j = i; j < source.length; j++) {
    const c = source[j];
    if (quote) { if (c === '\\') { j++; continue; } if (c === quote) quote = null; continue; }
    if ('"\'`'.includes(c)) { quote = c; continue; }
    if (c === '[' || c === '{') depth++;
    else if ((c === ']' || c === '}') && --depth === 0) return JSON.parse(source.slice(i, j + 1));
  }
  throw new Error(`Unclosed data ${marker}`);
}
const bundlePath = original('index.html').match(/src="\/(assets\/app-[^"]+\.js)"/)[1];
const bundle = original(bundlePath), dict = literal(bundle, 'var wl={');
const areas = literal(bundle, 'iu=['), compare = literal(bundle, 'Al=[');
const ar = JSON.parse(original('tools/seo/ar.json'));
const clean = s => s.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const section = (html, id) => {
  const match = html.match(new RegExp(`<section[^>]*id="${id}"[^>]*>([^]*?)</section>`));
  assert.ok(match, `Missing section #${id}`); return match[1];
};
let checks = 0;
const contains = (actual, expected, name) => { assert.ok(clean(actual).includes(clean(expected)), name); checks++; };
for (const lang of ['ru', 'en', 'ar']) {
  const prefix = lang === 'ru' ? '' : lang + '/', i = lang === 'ru' ? 1 : 0;
  const d = dict[lang === 'ar' ? 'en' : lang];
  const tr = s => lang === 'ar' ? ar[s] ?? s : s;
  const home = read(prefix + 'index.html'), how = read(prefix + 'how/index.html');
  const plans = read(prefix + 'plans/index.html'), people = read(prefix + 'people/index.html');
  for (const [id, keys] of [
    ['hero', ['tr2', 'tr3']], ['noise', ['n_h', 'n_e1', 'n_e2', 'a0d', 'a1d', 'a2d', 'a3d']],
    ['signal', ['s_p']], ['free', ['fr_2', 'fr_3', 'fr_lim']], ['game', ['g_p']],
  ]) for (const key of keys) contains(section(home, id), tr(d[key]), `${lang} ${id} ${key}`);
  contains(home.match(/<footer[^>]*>([^]*?)<\/footer>/)[1], tr(d.ft_made), `${lang} footer credit`);
  for (const key of ['c_at', 'c_g2']) contains(section(how, 'control'), tr(d[key]), `${lang} guarantee/control ${key}`);
  contains(section(how, 'why'), tr(d.w_sick), `${lang} sick leave`);
  contains(section(people, 'njo'), tr(d.c_e), `${lang} engineers heading`);
  for (const row of compare.filter(r => ['Available', 'Decodes why niche leaders win'].includes(r[0][0]))) {
    for (const cell of row) contains(section(how, 'why'), tr(cell[i]), `${lang} comparison ${cell[0]}`);
  }
  const month = section(plans, 'deliverables');
  for (const key of ['m_h', 'm_p']) contains(month, tr(d[key]), `${lang} monthly ${key}`);
  for (const area of areas) for (const key of ['k', 't']) contains(month, tr(area[key][i]), `${lang} area ${area.k[0]}`);
  const numbers = [...month.matchAll(/data-a="(\d+)" data-b="(\d+)"/g)].map(m => [+m[1], +m[2]]);
  assert.deepEqual(numbers, [[5,10],[1,3],[16,20],[32,40],[4,6],[10,15],[1,2],[10,15],[1,2],[1,2],[10,30]]); checks++;
  for (const [q, a] of d.faq.slice(0, 2)) {
    contains(section(plans, 'faqs'), tr(q), `${lang} FAQ question`);
    contains(section(plans, 'faqs'), tr(a), `${lang} FAQ answer`);
  }
  contains(section(plans, 'faqs'), '24/7', `${lang} FAQ availability`);
  for (const key of ['fr_2', 'fr_3', 'fr_lim']) contains(section(plans, 'free'), tr(d[key]), `${lang} free week ${key}`);
  contains(section(plans, 'plans'), 'LinkedIn', `${lang} B2B coverage`);
  const x = literal(plans, 'window.USHA_X={')[lang];
  for (const ri of [3, 5]) assert.equal(x.plansGroups[2][1][ri][1], lang === 'ru' ? 'до 10' : tr('Up to 10'));
  assert.ok(x.plansGroups[1][1][3][2].includes('10:00–18:00')); checks += 3;
  const currentBundle = read(home.match(/src="\/(assets\/app-[^"]+\.js)"/)[1]);
  const currentDict = literal(currentBundle, 'var wl={')[lang === 'ar' ? 'en' : lang];
  for (const index of [0, 1, 4]) { assert.ok(currentDict.bf_a1.includes(tr(d.bf_a1[index])), `${lang} brief audience`); checks++; }
}
const urls = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]));
assert.equal(urls.length, 29);
for (const url of urls) {
  const html = read(url.pathname.slice(1) + 'index.html');
  const config = literal(html, 'window.USHA_LIVE={');
  assert.ok(config.api && config.turnstile, `${url.pathname} live config`); checks++;
}
console.log(`Passed ${checks} restoration checks in RU/EN/AR; live chat enabled in all ${urls.length} sitemap pages.`);
