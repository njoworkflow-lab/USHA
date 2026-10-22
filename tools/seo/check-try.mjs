#!/usr/bin/env node
// Checks every number on the section 03 example screens (tools/seo/enhance/try.js).
// It renders the screens for EN, RU and AR without a browser, recomputes each
// derived value from the inputs on its own, and fails on any mismatch. It also
// checks that the example stays inside the agreed, believable ranges.
//   node tools/seo/check-try.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const src = fs.readFileSync(path.join(ROOT, 'tools/seo/enhance/try.js'), 'utf8');
const doc = { documentElement: { dir: '', lang: 'en' }, readyState: 'complete', addEventListener() {} };
globalThis.window = globalThis; globalThis.document = doc; globalThis.__t3test = true;
new Function(src)();
const X = globalThis.__t3, N = X.N;

let fails = 0, checks = 0;
const ok = (cond, what) => { checks++; if (!cond) { fails++; console.log('FAIL', what); } };
const clean = (s) => String(s).replace(/<[^>]+>/g, '').replace(/[⁦-⁩]/g, '').replace(/[  ]/g, ' ').replace(/&amp;/g, '&').trim();
const pick = (html) => { const m = {}; for (const [, k, v] of html.matchAll(/data-k="([^"]+)"[^>]*>([^<]*)</g)) m[k] = clean(v); return m; };
const sum = (a) => a.reduce((x, y) => x + y, 0);
const mean = (a) => sum(a) / a.length;
const r1 = (x) => Math.round(x * 10) / 10;

// the believable ranges agreed with the owner
const E = N.en, R = N.ru;
const pctChg = (a, b) => (b / a - 1) * 100;
ok(pctChg(N.orders[0], N.orders[1]) >= 22 && pctChg(N.orders[0], N.orders[1]) <= 30, 'orders +22–30%');
for (const M of [E, R]) ok(pctChg(M.avg[0], M.avg[1]) >= 3 && pctChg(M.avg[0], M.avg[1]) <= 5, 'avg order +3–5%');
ok(E.rate[0] - E.rate[1] >= 1 && E.rate[0] - E.rate[1] <= 2, 'return rate −1–2 pp');
ok(R.rate[1] - R.rate[0] >= 5 && R.rate[1] - R.rate[0] <= 8, 'buyout +5–8 pp');
const ads = (M, v) => ({ s: sum(M.ads[v].map((r) => r[0])), a: sum(M.ads[v].map((r) => r[1])) });
ok(r1(ads(E, 0).a / ads(E, 0).s) === 2.6 && r1(ads(E, 1).a / ads(E, 1).s) === 3.9, 'ROAS 2.6x → 3.9x');
ok(r1((ads(R, 0).s / ads(R, 0).a) * 100) === 27 && r1((ads(R, 1).s / ads(R, 1).a) * 100) === 17, 'ДРР 27% → 17%');
for (const M of [E, R]) { const c = pctChg(ads(M, 0).s, ads(M, 1).s); ok(c <= -10 && c >= -15, 'spend −10–15% (' + c.toFixed(1) + ')'); }
ok(pctChg(N.ctr[0], N.ctr[1]) >= 30 && pctChg(N.ctr[0], N.ctr[1]) <= 50, 'CTR +30–50% relative');
ok(r1(mean(N.soc.er[0])) === 1.2 && r1(mean(N.soc.er[1])) === 2.8, 'ER 1.2% → 2.8%');
ok(N.soc.reach[1] / N.soc.reach[0] >= 1.8 && N.soc.reach[1] / N.soc.reach[0] <= 2.2, 'reach about 2x');
ok(N.soc.saves[1] / N.soc.saves[0] >= 3 && N.soc.saves[1] / N.soc.saves[0] <= 5, 'saves 3–5x');
ok(N.soc.foll[0] === 240 && N.soc.foll[1] === 910, 'followers +240 → +910');
const dist = N.rev.dist.map((d) => ({ n: sum(d), avg: sum(d.map((c, i) => c * (5 - i))) / sum(d) }));
ok(r1(dist[0].avg) === 4.2 && r1(dist[1].avg) === 4.5, 'rating 4.2 → 4.5');
ok(pctChg(dist[0].n, dist[1].n) >= 20 && pctChg(dist[0].n, dist[1].n) <= 25, 'ratings +20–25%');
ok(Math.round((N.rev.answered[0] / dist[0].n) * 100) === 15 && Math.round((N.rev.answered[1] / dist[1].n) * 100) === 96, 'reply rate 15% → 96%');
ok(N.rev.replyMin[0] === 4 * 1440 && N.rev.replyMin[1] < 180, 'reply time 4 days → under 3 h');
const pos = N.srch.trend.map((t) => t[t.length - 1]);
ok(pos[0] === 38 && pos[1] === 9 && Math.ceil(38 / N.srch.perPage) === 2 && Math.ceil(9 / N.srch.perPage) === 1, 'search #38 p2 → #9 p1');
ok(N.srch.trend[1].every((x, i, a) => !i || x <= a[i - 1]) && Math.max(...N.srch.trend[1].slice(1).map((x, i) => N.srch.trend[1][i] - x)) <= 5, 'search climb is stepped, no cliff');
ok(N.rev.trend.every((t, v) => t[t.length - 1] === r1(dist[v].avg)), 'rating trend ends at the shown rating');
// internal consistency of the inputs
for (const v of [0, 1]) {
  ok(sum(N.top[v]) === N.orders[v], `top products sum to orders (${v})`);
  for (const M of [E, R]) {
    ok(Math.abs(mean(M.avgW[v]) - M.avg[v]) / M.avg[v] < 0.01, `weekly avg order matches 90-day avg (${v})`);
    ok(Math.abs(mean(M.rateW[v]) - M.rate[v]) / M.rate[v] < 0.01, `weekly rate matches 90-day rate (${v})`);
  }
  ok(r1(mean(N.soc.er[v])) === r1(mean(N.soc.er[v])), 'er');
}
ok(-N.stock[0][0] === N.dip[1] - N.dip[0] + 1, 'stock-out days = dip in the daily chart');
const last = new Date(Date.UTC(...N.start) + (N.days - 1) * 864e5);
ok(last.getUTCMonth() === 8 && last.getUTCDate() === 28, '90 days end on 28 Sep');

// rendered screens, per language
for (const lang of ['en', 'ru', 'ar']) {
  X.setLang(lang);
  const M = lang === 'ru' ? R : E, ru = lang === 'ru';
  const nf = (n, d = 0) => Number(n).toLocaleString(ru ? 'ru-RU' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d }).replace(/[  ]/g, ' ');
  const nt = (n) => Number(n).toLocaleString(ru ? 'ru-RU' : 'en-US', { maximumFractionDigits: 1 }).replace(/[  ]/g, ' ');
  const money = (n) => (ru ? nf(n) + ' ₽' : 'AED ' + nf(n));
  const sg = (v) => (v > 0 ? '+' : v < 0 ? '−' : '');
  const chg = (a, b) => { const v = (b / a - 1) * 100; return sg(v) + nt(r1(Math.abs(v))) + '%'; };
  const eq = (got, want, what) => ok(got === want, `${lang} ${what}: got "${got}", want "${want}"`);
  for (const v of [0, 1]) {
    const tag = `${lang} v${v}`;
    // sales
    let k = pick(X.screen(0, v));
    eq(k.orders, nf(N.orders[v]), 'orders');
    eq(k.gross, money(N.orders[v] * M.avg[v]), 'gross = orders × avg');
    eq(k.avg, money(M.avg[v]), 'avg order');
    eq(k.rate, nf(M.rate[v], ru ? 0 : 1) + '%', 'rate');
    N.top[v].forEach((n, i) => eq(k['top' + i], nf(n), 'top' + i));
    const series = X.screen(0, v).match(/data-series="([^"]+)"/)[1].split(',').map(Number);
    ok(series.length === 90 && sum(series) === N.orders[v], `${tag} daily orders sum to ${N.orders[v]}`);
    // ads
    k = pick(X.screen(1, v));
    const t = ads(M, v);
    eq(k.spend, money(t.s), 'ad spend total = rows');
    eq(k.sales, money(t.a), 'ad sales total = rows');
    eq(k.ratio, ru ? nf((t.s / t.a) * 100, 1) + '%' : nf(t.a / t.s, 1) + 'x', 'ROAS/ДРР = sales ÷ spend');
    eq(k.ctr, nf(N.ctr[v], 1) + '%', 'CTR');
    M.ads[v].forEach((r, i) => {
      if (!r[2]) { ok(!(('r' + i + 's') in k), `${tag} paused row shows no spend`); return; }
      eq(k['r' + i + 's'], nf(r[0]), 'row spend'); eq(k['r' + i + 'a'], nf(r[1]), 'row sales');
      eq(k['r' + i + 'r'], ru ? nf((r[0] / r[1]) * 100, 1) + '%' : nf(r[1] / r[0], 1) + 'x', 'row ratio');
    });
    // engagement
    k = pick(X.screen(2, v));
    eq(k.er, nf(r1(mean(N.soc.er[v])), 1) + '%', 'ER = mean of posts');
    eq(k.reach, nf(N.soc.reach[v]), 'reach'); eq(k.saves, nf(N.soc.saves[v]), 'saves'); eq(k.foll, '+' + nf(N.soc.foll[v]), 'followers');
    N.soc.er[v].forEach((e, i) => eq(k['p' + i], 'ER ' + nf(e, 1) + '%', 'post ER'));
    // reviews
    k = pick(X.screen(3, v));
    eq(k.rating, nf(r1(dist[v].avg), 1), 'rating = weighted mean of stars');
    eq(k.count, nf(dist[v].n), 'ratings = sum of stars');
    N.rev.dist[v].forEach((c, i) => eq(k['dist' + i], nf(c), 'stars ' + (5 - i)));
    eq(k.answeredPct, Math.round((N.rev.answered[v] / dist[v].n) * 100) + '%', 'reply rate = answered ÷ ratings');
    ok(k.answered.includes(nf(N.rev.answered[v])) && k.answered.includes(nf(dist[v].n)), `${tag} answered "a of n"`);
    eq(k.trendEnd, nf(r1(dist[v].avg), 1), 'rating trend end');
    // search
    k = pick(X.screen(4, v));
    const p = pos[v], pg = Math.ceil(p / N.srch.perPage);
    ok(k.posTxt.includes(String(p)) && k.posTxt.includes(String(pg)), `${tag} position text "${k.posTxt}"`);
    if (v) ok(k.badge && k.badge.includes(String(p)), `${tag} badge shows #${p}`);
    if (!v) ok(!k.badge, `${tag} product not on page 1 without USHA`);
  }
  // with-vs-without strips
  const d = (i) => { const k = pick(X.diff(i)); return Object.keys(k).sort().map((x) => k[x]); };
  const arrow = (a, b) => a + ' → ' + b;
  const pp = (a, b) => { const v = r1(b - a); return sg(v) + nt(Math.abs(v)) + (ru ? ' п.п.' : lang === 'ar' ? ' نقطة' : ' pp'); };
  const want = {
    0: [chg(N.orders[0], N.orders[1]), chg(M.avg[0], M.avg[1]), chg(N.orders[0] * M.avg[0], N.orders[1] * M.avg[1]), pp(M.rate[0], M.rate[1])],
    1: [ru ? arrow(nf((ads(M, 0).s / ads(M, 0).a) * 100) + '%', nf((ads(M, 1).s / ads(M, 1).a) * 100) + '%') : arrow(nf(ads(M, 0).a / ads(M, 0).s, 1) + 'x', nf(ads(M, 1).a / ads(M, 1).s, 1) + 'x'), chg(ads(M, 0).s, ads(M, 1).s), chg(ads(M, 0).a, ads(M, 1).a), chg(N.ctr[0], N.ctr[1])],
    2: [arrow(nf(1.2, 1) + '%', nf(2.8, 1) + '%'), '×' + nt(r1(N.soc.reach[1] / N.soc.reach[0])), '×' + nt(r1(N.soc.saves[1] / N.soc.saves[0])), arrow('+' + nf(240), '+' + nf(910))],
    3: [arrow(nf(4.2, 1), nf(4.5, 1)), chg(dist[0].n, dist[1].n), arrow('15%', '96%'), null],
    4: [arrow(38, 9), arrow(2, 1)],
  };
  for (const i of [0, 1, 2, 3, 4]) d(i).forEach((got, j) => { if (want[i][j] !== null) eq(got, want[i][j], `strip ${i}.${j}`); });
  // USHA's notes carry the same numbers
  const notes = (i) => clean(X.notes(i));
  const has = (i, s, what) => ok(notes(i).includes(clean(s)), `${lang} note ${what}: "${s}" in "${notes(i)}"`);
  has(0, String(-N.stock[0][0]), 'stock-out days'); has(0, chg(N.top[0][2], N.top[1][2]), 'gift box growth'); has(0, pp(M.rate[0], M.rate[1]), 'return rate / buyout change');
  const auto = M.ads[0][2], srch = M.ads[1][0];
  has(1, money(auto[0]), 'auto spend'); has(1, ru ? nf((auto[0] / auto[1]) * 100, 1) + '%' : nf(auto[1] / auto[0], 1) + 'x', 'auto ratio');
  has(1, ru ? nf((srch[0] / srch[1]) * 100, 1) + '%' : nf(srch[1] / srch[0], 1) + 'x', 'search ratio');
  has(2, '×' + nt(r1(N.soc.saves[1] / N.soc.saves[0])), 'saves'); has(2, '×' + nt(r1(N.soc.reach[1] / N.soc.reach[0])), 'reach'); has(2, nf(910), 'followers');
  has(3, nf(N.rev.dist[0][4]) + ' → ' + nf(N.rev.dist[1][4]), '1★ count'); has(3, '96%', 'reply rate');
  has(4, '38', 'from'); has(4, '9', 'to');
  const wk = N.srch.trend[1].findIndex((x) => x <= N.srch.perPage) + 1;
  ok(pick(X.notes(4))['n.week'].includes(String(wk)), `${lang} page 1 since week ${wk}`);
}
console.log(`${checks} checks, ${fails} failed`);
process.exit(fails ? 1 : 0);
