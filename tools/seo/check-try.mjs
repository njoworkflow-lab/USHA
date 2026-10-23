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
ok(X.stkFacts(0).out === N.dip[1] - N.dip[0] + 1 && X.stkFacts(1).out === 0, 'stock-out days = dip in the daily chart');
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
    k = pick(X.screen(3, v));
    eq(k.er, nf(r1(mean(N.soc.er[v])), 1) + '%', 'ER = mean of posts');
    eq(k.reach, nf(N.soc.reach[v]), 'reach'); eq(k.saves, nf(N.soc.saves[v]), 'saves'); eq(k.foll, '+' + nf(N.soc.foll[v]), 'followers');
    N.soc.er[v].forEach((e, i) => eq(k['p' + i], 'ER ' + nf(e, 1) + '%', 'post ER'));
    // reviews
    k = pick(X.screen(9, v));
    eq(k.rating, nf(r1(dist[v].avg), 1), 'rating = weighted mean of stars');
    eq(k.count, nf(dist[v].n), 'ratings = sum of stars');
    N.rev.dist[v].forEach((c, i) => eq(k['dist' + i], nf(c), 'stars ' + (5 - i)));
    eq(k.answeredPct, Math.round((N.rev.answered[v] / dist[v].n) * 100) + '%', 'reply rate = answered ÷ ratings');
    ok(k.answered.includes(nf(N.rev.answered[v])) && k.answered.includes(nf(dist[v].n)), `${tag} answered "a of n"`);
    eq(k.trendEnd, nf(r1(dist[v].avg), 1), 'rating trend end');
    // search
    k = pick(X.screen(10, v));
    const p = pos[v], pg = Math.ceil(p / N.srch.perPage);
    ok(k.posTxt.includes(String(p)) && k.posTxt.includes(String(pg)), `${tag} position text "${k.posTxt}"`);
    if (v) ok(k.badge && k.badge.includes(String(p)), `${tag} badge shows #${p}`);
    if (!v) ok(!k.badge, `${tag} product not on page 1 without USHA`);
  }
  // ---------- the new screens ----------
  const money2 = (n) => (ru ? nf(Math.round(n)) + ' ₽' : 'AED ' + nf(n, 2));
  const p2 = (n) => nf(n, 2) + '%';
  const sadT = (v) => { const r = M.sad[v]; return [0, 1, 2, 3].map((j) => sum(r.map((x) => x[j]))); };
  const wOrders = (v) => sum(M.web.orders[v]);
  const perDay = (v, i) => (i < 3 ? N.top[v][i] : N.stk.extra[v][i - 3]) / 90;
  const cov = (v, i) => Math.round(N.stk.onHand[v][i] / perDay(v, i));
  for (const v of [0, 1]) {
    const tag = `${lang} v${v}`;
    // social ads
    let k = pick(X.screen(2, v));
    const [sp, im, cl, by] = sadT(v);
    eq(k.spend, money(sp), 'social spend = rows'); eq(k.buy, nf(by), 'purchases = rows');
    eq(k.cpm, money2((sp / im) * 1000), 'CPM = spend ÷ impressions × 1000'); eq(k.ctr, p2((cl / im) * 100), 'CTR = clicks ÷ impressions'); eq(k.cpa, money2(sp / by), 'CPA = spend ÷ purchases');
    M.sad[v].forEach((r, i) => { eq(k['r' + i + 's'], nf(r[0]), 'row spend'); eq(k['r' + i + 'm'], money2((r[0] / r[1]) * 1000), 'row CPM'); eq(k['r' + i + 'c'], p2((r[2] / r[1]) * 100), 'row CTR'); eq(k['r' + i + 'b'], nf(r[3]), 'row purchases'); eq(k['r' + i + 'a'], money2(r[0] / r[3]), 'row CPA'); });
    ok(M.web.orders[v][1] === by, `${tag} website paid-ads orders = social/search ad purchases`);
    // SEO
    k = pick(X.screen(4, v));
    const o = N.seo;
    eq(k.clicks, nf(o.clicks[v]), 'clicks'); eq(k.impr, nf(o.impr[v]), 'impressions'); eq(k.ctr, p2((o.clicks[v] / o.impr[v]) * 100), 'search CTR'); eq(k.pos, nf(o.pos[v], 1), 'avg position');
    o.q[v].forEach((r, i) => { eq(k['q' + i + 'c'], nf(r[0]), 'query clicks'); eq(k['q' + i + 'i'], nf(r[1]), 'query impressions'); eq(k['q' + i + 'p'], nf(r[2], 1), 'query position'); });
    o.pages[v].forEach((c, i) => eq(k['pg' + i + 'c'], nf(c), 'page clicks'));
    ok(sum(o.q[v].map((r) => r[0])) <= o.clicks[v] && sum(o.pages[v]) <= o.clicks[v] && sum(o.q[v].map((r) => r[1])) <= o.impr[v], `${tag} top queries and pages fit inside the totals`);
    // website
    k = pick(X.screen(5, v));
    const n = wOrders(v), aov = M.web.aov[v];
    eq(k.ses, nf(N.web.sessions[v]), 'sessions'); eq(k.cr, p2((n / N.web.sessions[v]) * 100), 'conversion = orders ÷ sessions'); eq(k.aov, money(aov), 'avg order'); eq(k.rev, money(n * aov), 'revenue = orders × avg order');
    const shv = M.web.orders[v].map((c) => k['s' + M.web.orders[v].indexOf(c)]);
    M.web.orders[v].forEach((c, i) => { eq(k['o' + i], nf(c), 'channel orders'); eq(k['v' + i], nf(c * aov), 'channel revenue'); const sv = parseFloat(k['s' + i].replace(',', '.')); ok(Math.abs(sv - (c / n) * 100) < 0.1, `${tag} channel share ${i} within rounding (${k['s' + i]})`); });
    ok(Math.abs(sum([0, 1, 2, 3].map((i) => parseFloat(k['s' + i].replace(',', '.')))) - 100) < 1e-6, `${tag} shown channel shares add up to 100`);
    eq(k.ot, nf(n), 'orders total = channels'); eq(k.vt, nf(n * aov), 'revenue total = channels');
    eq(k.ab, nf(N.web.abandoned[v]), 'abandoned'); eq(k.rec, nf(N.web.recovered[v]), 'recovered'); eq(k.recr, nf((N.web.recovered[v] / N.web.abandoned[v]) * 100, 1) + '%', 'recovery rate'); eq(k.recv, money(N.web.recovered[v] * aov), 'recovered revenue');
    ok(N.web.recovered[v] <= M.web.orders[v][2], `${tag} recovered carts fit inside email orders`);
    // service
    k = pick(X.screen(6, v));
    const c = N.crm, cn = sum(c.conv[v]);
    eq(k.conv, nf(cn), 'conversations = channels'); eq(k.res, nf((c.resolved[v] / cn) * 100, 0) + '%', 'resolved %'); eq(k.resn, nf(c.resolved[v]) + ' / ' + nf(cn), 'resolved of total'); eq(k.csat, nf(c.csat[v], 1) + ' / 5', 'CSAT');
    c.conv[v].forEach((x, i) => eq(k['c' + i], nf(x), 'channel conversations'));
    c.pipe[v].forEach((x, i) => { eq(k['pc' + i], nf(x), 'stage count'); eq(k['pv' + i], money(x * M.deal), 'stage value = count × deal'); });
    ok(c.pipe[v].every((x, i, a) => !i || x <= a[i - 1]) && c.resolved[v] <= cn, `${tag} pipeline narrows and resolved ≤ conversations`);
    // stock
    k = pick(X.screen(7, v));
    const covs = [0, 1, 2, 3, 4].map((i) => cov(v, i));
    covs.forEach((d, i) => { eq(k['h' + i], nf(N.stk.onHand[v][i]), 'on hand'); eq(k['d' + i], nf(perDay(v, i), 1), 'per day = units ÷ 90'); ok(k['cv' + i].includes(nf(d)), `${tag} cover ${i} = on hand ÷ per day (${d})`); });
    eq(k.below, nf(covs.filter((d) => d < N.stk.reorderDays).length), 'SKUs below reorder point');
    eq(k.dead, nf(sum(covs.map((d, i) => (d > N.stk.deadDays ? N.stk.onHand[v][i] : 0)))), 'dead stock units');
    eq(k.out, nf(v ? 0 : N.dip[1] - N.dip[0] + 1), 'stock-out days = chart dip');
    const ks = pick(X.screen(0, v));
    [0, 1, 2].forEach((i) => ok(ks['stock' + i].includes(String(covs[i])), `${tag} sales stock pill ${i} = stock screen cover ${covs[i]}`));
    if (v) {
      const qty = Math.round((N.stk.coverTarget * perDay(1, 0)) / 10) * 10, due = new Date(Date.UTC(2026, 6, 1 + 89 + covs[0] - N.stk.reorderDays));
      const dd = due.toLocaleDateString(lang === 'ar' ? 'ar-u-nu-latn' : ru ? 'ru-RU' : 'en-US', { day: 'numeric', month: 'short', timeZone: 'UTC' });
      ok(k.plan.includes(nf(qty)) && k.plan.includes(dd), `${tag} reorder plan "${k.plan}" has ${qty} and ${dd}`);
    }
    // market
    k = pick(X.screen(8, v));
    const sos = N.mkt.sos[v], others = Math.round((100 - sum(sos)) * 10) / 10;
    sos.forEach((x, i) => eq(k['sos' + i], nt(x) + '%', 'share of search')); eq(k.sos4, nt(others) + '%', 'others = 100 − the rest');
    eq(k.sent0, nt(r1(((N.rev.dist[v][0] + N.rev.dist[v][1]) / dist[v].n) * 100)) + '%', 'positive reviews = 4–5★ ÷ ratings');
    eq(k.seen, N.mkt.seen[v] + ' / 3', 'launches spotted');
  }
  // the agreed believable ranges for the new screens
  if (lang !== 'ar') {
    const a = sadT(0), b = sadT(1);
    ok(pctChg(a[3], b[3]) >= 20 && pctChg(a[3], b[3]) <= 35 && pctChg(a[0], b[0]) < 0 && pctChg(a[0], b[0]) >= -10, `${lang} social ads: purchases +20–35% on less spend`);
    ok(pctChg(wOrders(0), wOrders(1)) >= 22 && pctChg(wOrders(0), wOrders(1)) <= 30 && pctChg(M.web.aov[0], M.web.aov[1]) >= 3 && pctChg(M.web.aov[0], M.web.aov[1]) <= 5, `${lang} website orders +22–30%, AOV +3–5%`);
  }
  // with-vs-without strips
  const d = (i) => { const k = pick(X.diff(i)); return Object.keys(k).sort().map((x) => k[x]); };
  const arrow = (a, b) => a + ' → ' + b;
  const pp = (a, b) => { const v = r1(b - a); return sg(v) + nt(Math.abs(v)) + (ru ? ' п.п.' : lang === 'ar' ? ' نقطة' : ' pp'); };
  const want = {
    0: [chg(N.orders[0], N.orders[1]), chg(M.avg[0], M.avg[1]), chg(N.orders[0] * M.avg[0], N.orders[1] * M.avg[1]), pp(M.rate[0], M.rate[1])],
    1: [ru ? arrow(nf((ads(M, 0).s / ads(M, 0).a) * 100) + '%', nf((ads(M, 1).s / ads(M, 1).a) * 100) + '%') : arrow(nf(ads(M, 0).a / ads(M, 0).s, 1) + 'x', nf(ads(M, 1).a / ads(M, 1).s, 1) + 'x'), chg(ads(M, 0).s, ads(M, 1).s), chg(ads(M, 0).a, ads(M, 1).a), chg(N.ctr[0], N.ctr[1])],
    3: [arrow(nf(1.2, 1) + '%', nf(2.8, 1) + '%'), '×' + nt(r1(N.soc.reach[1] / N.soc.reach[0])), '×' + nt(r1(N.soc.saves[1] / N.soc.saves[0])), arrow('+' + nf(240), '+' + nf(910))],
    9: [arrow(nf(4.2, 1), nf(4.5, 1)), chg(dist[0].n, dist[1].n), arrow('15%', '96%'), null],
    10: [arrow(38, 9), arrow(2, 1)],
  };
  const sT = (v) => { const r = M.sad[v]; return [0, 1, 2, 3].map((j) => sum(r.map((x) => x[j]))); }, sa = sT(0), sb = sT(1);
  const wn = (v) => sum(M.web.orders[v]), wcr = (v) => p2((wn(v) / N.web.sessions[v]) * 100);
  const cr = N.crm, crn = (v) => sum(cr.conv[v]), dur = (m) => (ru ? (m >= 60 ? Math.floor(m / 60) + ' ч' + (m % 60 ? ' ' + (m % 60) + ' мин' : '') : m + ' мин') : lang === 'ar' ? (m >= 60 ? Math.floor(m / 60) + ' س' + (m % 60 ? ' ' + (m % 60) + ' د' : '') : m + ' د') : (m >= 60 ? Math.floor(m / 60) + ' h' + (m % 60 ? ' ' + (m % 60) + ' min' : '') : m + ' min'));
  const deadU = (v) => sum([0, 1, 2, 3, 4].map((i) => { const d = Math.round(N.stk.onHand[v][i] / ((i < 3 ? N.top[v][i] : N.stk.extra[v][i - 3]) / 90)); return d > N.stk.deadDays ? N.stk.onHand[v][i] : 0; }));
  const posR = (v) => nt(r1(((N.rev.dist[v][0] + N.rev.dist[v][1]) / dist[v].n) * 100)) + '%';
  Object.assign(want, {
    2: [chg(sa[0], sb[0]), chg(sa[0] / sa[3], sb[0] / sb[3]), arrow(p2((sa[2] / sa[1]) * 100), p2((sb[2] / sb[1]) * 100)), chg(sa[3], sb[3])],
    4: [chg(N.seo.clicks[0], N.seo.clicks[1]), chg(N.seo.impr[0], N.seo.impr[1]), arrow(p2((N.seo.clicks[0] / N.seo.impr[0]) * 100), p2((N.seo.clicks[1] / N.seo.impr[1]) * 100)), arrow(nf(N.seo.pos[0], 1), nf(N.seo.pos[1], 1))],
    5: [chg(wn(0) * M.web.aov[0], wn(1) * M.web.aov[1]), chg(wn(0), wn(1)), arrow(wcr(0), wcr(1)), chg(M.web.aov[0], M.web.aov[1])],
    6: [arrow(dur(cr.frt[0]), dur(cr.frt[1])), arrow(nf((cr.resolved[0] / crn(0)) * 100, 0) + '%', nf((cr.resolved[1] / crn(1)) * 100, 0) + '%'), arrow(nf(cr.csat[0], 1), nf(cr.csat[1], 1)), chg(cr.pipe[0][3], cr.pipe[1][3])],
    7: [arrow(nf(N.dip[1] - N.dip[0] + 1), nf(0)), arrow(nf(deadU(0)), nf(deadU(1))), null],
    8: [arrow(nt(N.mkt.sos[0][0]) + '%', nt(N.mkt.sos[1][0]) + '%'), arrow(posR(0), posR(1)), arrow(N.mkt.seen[0] + ' / 3', N.mkt.seen[1] + ' / 3')],
  });
  for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) d(i).forEach((got, j) => { if (want[i][j] !== null) eq(got, want[i][j], `strip ${i}.${j}`); });
  // USHA's notes carry the same numbers
  const notes = (i) => clean(X.notes(i));
  const has = (i, s, what) => ok(notes(i).includes(clean(s)), `${lang} note ${what}: "${s}" in "${notes(i)}"`);
  has(0, String(N.dip[1] - N.dip[0] + 1), 'stock-out days'); has(0, chg(N.top[0][2], N.top[1][2]), 'gift box growth'); has(0, pp(M.rate[0], M.rate[1]), 'return rate / buyout change');
  const auto = M.ads[0][2], srch = M.ads[1][0];
  has(1, money(auto[0]), 'auto spend'); has(1, ru ? nf((auto[0] / auto[1]) * 100, 1) + '%' : nf(auto[1] / auto[0], 1) + 'x', 'auto ratio');
  has(1, ru ? nf((srch[0] / srch[1]) * 100, 1) + '%' : nf(srch[1] / srch[0], 1) + 'x', 'search ratio');
  has(3, '×' + nt(r1(N.soc.saves[1] / N.soc.saves[0])), 'saves'); has(3, '×' + nt(r1(N.soc.reach[1] / N.soc.reach[0])), 'reach'); has(3, nf(910), 'followers');
  has(9, nf(N.rev.dist[0][4]) + ' → ' + nf(N.rev.dist[1][4]), '1★ count'); has(9, '96%', 'reply rate');
  has(10, '38', 'from'); has(10, '9', 'to');
  has(2, chg(sa[3], sb[3]), 'purchases'); has(2, chg(sa[0], sb[0]), 'social spend'); has(2, money2(sa[0] / sa[3]).replace(/^AED /, ''), 'CPA before');
  has(4, nf(N.seo.q[0][0][2], 1) + ' → ' + nf(N.seo.q[1][0][2], 1), 'query position'); has(4, '+' + nf(N.seo.pages[1][2] - N.seo.pages[0][2]), 'guide clicks');
  has(5, nf(N.web.recovered[0]) + ' → ' + nf(N.web.recovered[1]), 'recovered carts'); has(5, wcr(0) + ' → ' + wcr(1), 'conversion');
  has(6, dur(cr.frt[1]), 'first reply'); has(6, nf(cr.pipe[0][3]) + ' → ' + nf(cr.pipe[1][3]), 'won');
  has(7, nf(deadU(0)) + ' → ' + nf(deadU(1)), 'dead stock'); has(8, nt(N.mkt.sos[0][0]) + '% → ' + nt(N.mkt.sos[1][0]) + '%', 'share of search');
  const wk = N.srch.trend[1].findIndex((x) => x <= N.srch.perPage) + 1;
  ok(pick(X.notes(10))['n.week'].includes(String(wk)), `${lang} page 1 since week ${wk}`);
}
console.log(`${checks} checks, ${fails} failed`);
process.exit(fails ? 1 : 0);
