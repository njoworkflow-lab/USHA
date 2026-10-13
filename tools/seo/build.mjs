#!/usr/bin/env node
// SEO + GEO build for usha.one.
//
// The site ships as one bundled index.html whose copy lives in a JS dictionary
// and is only injected at runtime. Crawlers and AI engines that do not run
// JavaScript see an empty page. This script:
//   1. pre-renders the copy into the HTML (Russian at /, English at /en/,
//      Arabic at /ar/ from tools/seo/ar.json, right-to-left),
//   2. writes a per-language <head> (title, description, hreflang, Open Graph,
//      JSON-LD for the organisation, the service, its plans and the FAQ),
//   3. makes the language deterministic per URL so Google indexes the right one,
//   4. renders the guides in tools/seo/guides.mjs (/guides/, /en/guides/),
//   5. emits robots.txt, sitemap.xml, llms.txt and llms-full.txt.
//
// It is idempotent: run it on a freshly uploaded index.html or on its own output.
//   node tools/seo/build.mjs

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { DICT_PATCH, PAIR_PATCH, AREA_LABELS, PRO_ONLY_ADD, X } from './enhance/content.mjs';
import { plansHTML } from './enhance/ui.mjs';
import { applyLife, applyGame, LIFE_BUB } from './enhance/usha-life.mjs';
import { GUIDES, GUIDES_HUB } from './guides.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SITE = 'https://usha.one';
const CONTACT = { email: 'darina@njobusinesssolutions.com', telegram: 'https://t.me/njo_manager', njo: 'https://www.njobusinesssolutions.com/' };

const LANGS = {
  ru: {
    idx: 1, url: `${SITE}/`, file: 'index.html', locale: 'ru_RU',
    title: 'USHA by NJO — движок бизнес-аналитики для брендов и селлеров маркетплейсов',
    description: 'USHA — движок бизнес-аналитики от NJO. Каждый день читает Wildberries, Ozon, Яндекс Маркет, конкурентов и покупателей, объясняет, что изменилось, и делает работу: стратегия, контент, реклама. Первая неделя бесплатно.',
    ogTitle: 'USHA by NJO · Алгоритм, который понимает алгоритмы',
    imageAlt: 'USHA by NJO — движок бизнес-аналитики',
    serviceType: 'Движок бизнес-аналитики и маркетинга',
    freeWeek: 'Бесплатная первая неделя: стратегия, четыре готовых поста и собственный чат с USHA.',
  },
  en: {
    idx: 0, url: `${SITE}/en/`, file: 'en/index.html', locale: 'en_US',
    title: 'USHA by NJO — business intelligence engine for brands and marketplace sellers',
    description: 'USHA by NJO reads your marketplaces, competitors and buyers every day, tells you what changed and why, and does the work: strategy, content, ads. Russia, GCC, Egypt. First week free.',
    ogTitle: 'USHA by NJO · The algorithm that understands algorithms',
    imageAlt: 'USHA by NJO — business intelligence engine',
    serviceType: 'Business intelligence and marketing engine',
    freeWeek: 'Free first week: your strategy, four ready posts and your own USHA chat.',
  },
  // Arabic reuses the bundle's English slot (index 0) with translated text.
  ar: {
    idx: 0, url: `${SITE}/ar/`, file: 'ar/index.html', locale: 'ar_AR', dir: 'rtl',
    title: 'USHA by NJO — محرّك ذكاء الأعمال للعلامات التجارية والبائعين على منصات البيع',
    description: 'كل يوم تتابع USHA ما يجري في منصات البيع ولدى منافسيك وعملائك، فتخبرك بما تغيّر ولماذا، ثم تتولّى التنفيذ: الاستراتيجية والمحتوى والإعلانات. روسيا ودول الخليج ومصر. الأسبوع الأول مجاني.',
    ogTitle: 'USHA by NJO · الخوارزمية التي تفهم الخوارزميات',
    imageAlt: 'USHA by NJO — محرّك ذكاء الأعمال',
    serviceType: 'محرّك ذكاء الأعمال والتسويق',
    freeWeek: 'الأسبوع الأول مجاني: استراتيجيتك، وأربعة منشورات جاهزة لعلامتك، ومحادثتك الخاصة مع USHA.',
  },
};
const X_DEFAULT = LANGS.en.url;
// Search-console ownership codes (tools/seo/verify.json), added to every main page.
const VERIFY = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/seo/verify.json'), 'utf8'));
const VERIFY_TAGS = [['google', 'google-site-verification'], ['yandex', 'yandex-verification'], ['bing', 'msvalidate.01']]
  .filter(([k]) => VERIFY[k]).map(([k, name]) => `<meta name="${name}" content="${String(VERIFY[k]).replace(/[^\w.-]/g, '')}">\n`).join('');
const SECRET = /^sec_/;

// ---------- read source ----------
const SRC_PATH = path.join(ROOT, 'index.html');
const ASSETS = path.join(ROOT, 'assets');
let src = hydrate(fs.readFileSync(SRC_PATH, 'utf8'));

// ---------- speed: inline bundle <-> cached files ----------
// The uploaded index.html inlines ~250 KB of fonts and a ~640 KB script into
// every page. Output pages reference shared, content-hashed files instead, so
// they are cached across pages and visits and each font subset only downloads
// when a page uses that alphabet. hydrate() undoes this so the build can also
// run on its own output.
function hydrate(h) {
  h = h.replace(/<!--enh-->[^]*?<!--\/enh-->\n?/, '');
  h = h.replace(/url\(\/assets\/fonts\/([\w.-]+\.woff2)\)/g, (_, f) =>
    `url(data:font/woff2;base64,${fs.readFileSync(path.join(ASSETS, 'fonts', f)).toString('base64')})`);
  h = h.replace(/<link rel="preload" href="\/assets\/[^"]+"[^>]*>\n?/g, '');
  return h.replace(/<script src="\/assets\/(app-[\w]+\.js)"><\/script>/, (_, f) =>
    `<script>${fs.readFileSync(path.join(ASSETS, f), 'utf8')}</script>`);
}
const hash = (b) => createHash('sha256').update(b).digest('hex').slice(0, 10);
const written = new Set();
function emit(rel, data) {
  fs.mkdirSync(path.dirname(path.join(ASSETS, rel)), { recursive: true });
  fs.writeFileSync(path.join(ASSETS, rel), data);
  written.add(rel);
  return `/assets/${rel}`;
}
function dehydrate(h, lang) {
  const preload = [];
  h = h.replace(/@font-face\{([^}]*)\}/g, (face, body) => {
    const m = body.match(/src:url\(data:font\/woff2;base64,([^)]+)\)/);
    if (!m) return face;
    const fam = body.match(/font-family:'?([^;']+)/)[1].toLowerCase().replace(/\s+/g, '-');
    const weight = body.match(/font-weight:(\d+(?: \d+)?)/)[1].replace(' ', '-');
    const style = /font-style:italic/.test(body) ? '-italic' : '';
    const subset = /U\+0400/.test(body) ? 'cyrillic' : /U\+0600/.test(body) ? 'arabic' : 'latin';
    const buf = Buffer.from(m[1], 'base64');
    const url = emit(`fonts/${fam}-${weight}${style}-${subset}-${hash(buf)}.woff2`, buf);
    // Headline (Geist 300) and body (Golos 400) in the page's own alphabet.
    const want = { ru: 'cyrillic', ar: 'arabic' }[lang] || 'latin';
    if (subset === want && ((fam === 'geist' && weight === '300') || (fam === 'golos-text' && weight === '400') ) && !TYPE_FACES) preload.push(url);
    return face.replace(m[0], `src:url(${url})`);
  });
  h = h.replace(/<script>(\(\(\)=>\{[^]*?)<\/script>/, (s, js) => js.length < 100000 ? s : `<script src="${emit(`app-${hash(js)}.js`, js)}"></script>`);
  h = h.replace(/(class="fnjo"[^>]*><img )([^>]*?)src="data:image\/png;base64,[^"]+"/, '$1loading="lazy" decoding="async" $2src="/njo-logo.png"');
  if (TYPE_FACES) preload.push(...TYPE_PRELOAD[{ ru: 'cyrillic' }[lang] || 'latin']);
  const links = preload.map((u) => `<link rel="preload" href="${u}" as="font" type="font/woff2" crossorigin>\n`).join('');
  return h.replace(/(<!-- seo:start)/, `${links}$1`);
}

// Evaluate a JS literal that starts at the last character of `marker`.
function grab(s, marker) { return grabAt(s, marker).value; }
function grabAt(s, marker) {
  const at = s.indexOf(marker);
  if (at < 0) throw new Error(`Bundle changed: cannot find ${marker}`);
  let i = at + marker.length - 1, depth = 0, q = null, j = i;
  for (; j < s.length; j++) {
    const c = s[j];
    if (q) { if (c === '\\') { j++; continue; } if (c === q) q = null; continue; }
    if (c === '"' || c === "'" || c === '`') { q = c; continue; }
    if (c === '{' || c === '[') depth++;
    else if ((c === '}' || c === ']') && --depth === 0) break;
  }
  return { value: (0, eval)(`(${s.slice(i, j + 1)})`), start: i, end: j + 1 };
}

const DICT = grab(src, 'var wl={');
const PLANS = grab(src, ',ru=[');
let COMPARE = grab(src, 'Al=[');
let AREAS = grab(src, 'iu=[');
let PRO_ONLY = grab(src, 'su=[');
const PARTNERS = grab(src, 'ir=[');
const FEED = ',Ms=[', CHATS = ',Tl=[', WEEK = ',Ta=[';
const isPair = (v) => Array.isArray(v) && v.length >= 2 && typeof v[0] === 'string' && typeof v[1] === 'string' && (/[\u0400-\u04FF]/.test(v[1]) || v[0] === v[1]);

// ---------- content updates from the decks (tools/seo/enhance/content.mjs) ----------
// Applied to the bundle's own data so every language and the pre-rendered HTML
// carry them. Re-running is harmless: patched strings no longer match the keys.
for (const l of ['en', 'ru']) for (const [k, v] of Object.entries(DICT_PATCH[l])) {
  if (k === 'faq3') DICT[l].faq[3] = v; else DICT[l][k] = v;
}
for (const l of ['en', 'ru']) Object.assign(DICT[l].bub, LIFE_BUB[l]);
const patchPairs = (v, map) => isPair(v) ? (map[v[0]] ? [...map[v[0]], ...v.slice(2)] : v) : Array.isArray(v) ? v.map((x) => patchPairs(x, map))
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, patchPairs(x, map)])) : v;
COMPARE = patchPairs(COMPARE, PAIR_PATCH);
AREAS = patchPairs(patchPairs(AREAS, PAIR_PATCH), AREA_LABELS);
for (const add of PRO_ONLY_ADD) if (!PRO_ONLY.some((x) => x[0] === add[0])) PRO_ONLY = [...PRO_ONLY, add];
for (const [marker, value] of [['var wl={', { en: DICT.en, ru: DICT.ru }], ['Al=[', COMPARE], ['iu=[', AREAS], ['su=[', PRO_ONLY],
  [FEED, patchPairs(grab(src, FEED), PAIR_PATCH)], [CHATS, patchPairs(grab(src, CHATS), PAIR_PATCH)], [WEEK, patchPairs(grab(src, WEEK), PAIR_PATCH)]]) {
  const { start, end } = grabAt(src, marker);
  src = src.slice(0, start) + JSON.stringify(value) + src.slice(end);
}

// ---------- Arabic ----------
// tools/seo/ar.json maps every English string to Arabic. The bundle stores
// text either in the wl dictionary or as [en, ru, ...] pairs, so Arabic
// replaces the English entry of each pair.
const AR = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/seo/ar.json'), 'utf8'));
// AR_COLLECT=1 lists every missing string in tools/seo/ar-missing.json instead of stopping.
const AR_MISSING = new Set();
const tr = (s) => {
  if (s in AR) return AR[s];
  if (!/[A-Za-z]/.test(s)) return s; // numbers, symbols
  if (process.env.AR_COLLECT) { AR_MISSING.add(s); return s; }
  throw new Error(`Missing Arabic for: ${s}`);
};
const trAll = (v) => typeof v === 'string' ? tr(v) : Array.isArray(v) ? v.map(trAll)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, trAll(x)])) : v;
const trPairs = (v) => isPair(v) ? [tr(v[0]), ...v.slice(1)] : Array.isArray(v) ? v.map(trPairs)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, trPairs(x)])) : v;
DICT.ar = trAll(DICT.en);
// Enhancement-layer content for one language ([en, ru] pairs → one string).
const pickX = (v, i) => isPair(v) ? v[i] : Array.isArray(v) ? v.map((x) => pickX(x, i))
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, pickX(x, i)])) : v;
const XL = { en: pickX(X, 0), ru: pickX(X, 1) };
XL.ar = trAll(XL.en);
const DATA = { PLANS, COMPARE, AREAS, PRO_ONLY };
const data = (lang) => lang === 'ar' ? Object.fromEntries(Object.entries(DATA).map(([k, v]) => [k, trPairs(v)])) : DATA;

// ---------- runtime patch: language comes from the URL ----------
// Original: ?lang= → localStorage → browser language. Googlebot renders with an
// en-US browser, so "/" would be indexed in English. Now: ?lang= → /en/ path →
// on "/" a saved choice (never present for bots) → Russian. Switching language
// rewrites the URL so every view has a shareable, indexable address.
const DETECT = /fi=\(\(\)=>\{(?:try\{)?let e=location\.search\.match\(\/lang=\(en\|ru\)\/\)[^]*?"ru"\}\)\(\)/;
const DETECT_NEW = 'fi=(()=>{let e=location.search.match(/lang=(en|ru)/);if(e)return e[1];if(/^\\/en(\\/|$)/.test(location.pathname))return"en";try{let t=localStorage.getItem("usha-lang");if(t==="ar")location.replace("/ar/"+location.hash);if(t==="en"){history.replaceState(null,"","/en/"+location.hash);return t}}catch{}return"ru"})()';
const SWITCH = /fi=i\.dataset\.l;try\{localStorage\.setItem\("usha-lang",fi\)[^]*?kl\(\)/;
const SWITCH_NEW = 'fi=i.dataset.l;try{localStorage.setItem("usha-lang",fi);history.replaceState(null,"",(fi==="en"?"/en/":"/")+location.hash)}catch{}document.title=fi==="en"?' + JSON.stringify(LANGS.en.title) + ':' + JSON.stringify(LANGS.ru.title) + ';kl()';
const JUMP = /(rt\("\.lang button"\)\.forEach\(i=>i\.onclick=\(\)=>\{)(?:\/\*ar\*\/[^]*?\/\*\/ar\*\/)?/;
const jump = (code) => (m, open) => `${open}/*ar*/${code}/*/ar*/`;
function patch(s, re, to, what) {
  if (!re.test(s)) throw new Error(`Bundle changed: ${what} not found`);
  return s.replace(re, to);
}
src = patch(src, DETECT, DETECT_NEW, 'language detection');
src = patch(src, SWITCH, SWITCH_NEW, 'language switch');
src = patch(src, JUMP, jump('if(i.dataset.l==="ar"){try{localStorage.setItem("usha-lang","ar")}catch{}location.href="/ar/"+location.hash;return}'), 'language buttons');
if (!src.includes('data-l="ar"')) src = patch(src, /(<button data-l="ru">RU<\/button>)/, '$1<button data-l="ar">AR</button>', 'language pill');

// USHA's size per scene: smaller in "Try her" and the game so she sits beside
// the content instead of covering it (desktop, phone).
src = src.replace('us:e?.62:1,ch:.25', 'us:e?.42:.66,ch:.25').replace('us:e?.62:.78,ch:.5', 'us:e?.5:.6,ch:.5');
if (!src.includes('us:e?.42:.66,ch:.25') && !src.includes('us:e?.6:.66,ch:e?.1:.25')) throw new Error('Bundle changed: USHA scene sizes not found');

// USHA's personality: moods, tears, new sounds, surprises (enhance/usha-life.mjs)
src = applyLife(src);
src = applyGame(src, fs.readFileSync(path.join(ROOT, 'tools/seo/enhance/game.js'), 'utf8'));

// The Arabic page runs its own copy of the bundle: English slot → Arabic.
let srcAr = src;
for (const [marker, value] of [['var wl={', { en: DICT.ar, ru: DICT.ru }], [',ru=[', trPairs(PLANS)], ['Al=[', trPairs(COMPARE)], ['iu=[', trPairs(AREAS)],
  ['su=[', trPairs(PRO_ONLY)], [FEED, trPairs(grab(src, FEED))], [CHATS, trPairs(grab(src, CHATS))], [WEEK, trPairs(grab(src, WEEK))]]) {
  const { start, end } = grabAt(srcAr, marker);
  srcAr = srcAr.slice(0, start) + JSON.stringify(value) + srcAr.slice(end);
}
srcAr = patch(srcAr, DETECT, 'fi="en"', 'language detection');
srcAr = patch(srcAr, /document\.documentElement\.lang=fi/, 'document.documentElement.lang="ar"', 'lang attribute');
srcAr = patch(srcAr, /i\.classList\.toggle\("on",i\.dataset\.l===fi\)/, 'i.classList.toggle("on",i.dataset.l==="ar")', 'active language');
// Arabic mirrors the 3D canvas (CSS scaleX(-1)) so the scene reads right to
// left; screen ↔ world conversions flip with it.
for (const [a, b] of [['new ve(i/innerWidth*2-1,', 'new ve(1-i/innerWidth*2,'], ['let e=i.clientX/innerWidth*2-1,t=', 'let e=1-i.clientX/innerWidth*2,t='],
  ['or.set(i.clientX/innerWidth*2-1,', 'or.set(1-i.clientX/innerWidth*2,'], ['let g=(bs.x+1)/2*innerWidth;', 'let g=(1-bs.x)/2*innerWidth;'],
  ['hn((bs.x+1)/2*innerWidth,_,innerWidth-_)', 'hn((1-bs.x)/2*innerWidth,_,innerWidth-_)']]) {
  if (!srcAr.includes(a)) throw new Error(`Bundle changed: ${a}`);
  srcAr = srcAr.split(a).join(b);
}
srcAr = patch(srcAr, JUMP, jump('if(i.dataset.l!=="ar"){try{localStorage.setItem("usha-lang",i.dataset.l)}catch{}location.href=(i.dataset.l==="en"?"/en/":"/")+location.hash;return}'), 'language buttons');

// Arabic glyphs: Hacen Saudi Arabia, served exactly as supplied (its licence
// forbids modifying the file, so no subsetting or woff2 conversion). It sits
// after the Latin/Cyrillic fonts so Latin words keep the house type, and has
// one weight, so the browser must not fake bold. Rules use html[lang=ar] so
// they outrank the page's own :root.
const HACEN = fs.readFileSync(path.join(ROOT, 'tools/seo/fonts/Hacen_Saudi_Arabia.ttf'));
const HACEN_URL = emit(`fonts/hacen-saudi-arabia-${hash(HACEN)}.ttf`, HACEN);
const AR_LATE = "html[lang=ar]:root{--head:'Unbounded','Hacen Saudi Arabia',system-ui,sans-serif;--body:'Onest','Hacen Saudi Arabia',system-ui,sans-serif}";
const AR_CSS = `<link rel="preload" href="${HACEN_URL}" as="font" type="font/ttf" crossorigin>\n<style id="ar-type">` +
  `@font-face{font-family:'Hacen Saudi Arabia';font-style:normal;font-weight:400;font-display:swap;src:url(${HACEN_URL}) format('truetype');unicode-range:U+0600-06FF,U+0750-077F,U+08A0-08FF,U+200C-200F,U+FB50-FDFF,U+FE70-FEFF}` +
  "html[lang=ar]{--head:'Unbounded','Hacen Saudi Arabia',system-ui,sans-serif;--body:'Onest','Hacen Saudi Arabia',system-ui,sans-serif;font-synthesis:none}" +
  'html[lang=ar] *{letter-spacing:0!important}html[lang=ar] h1,html[lang=ar] h2{line-height:1.3}' +
  'html[lang=ar] i{font-family:inherit;font-style:normal;color:var(--peach)}' +
  // Figures read left to right; arrows point the reading way; the section 02
  // paragraph keeps the English position, clear of the signal stream.
  '[dir=rtl] .fitem .fv,[dir=rtl] .stat b{direction:ltr;text-align:right}[dir=rtl] .nums b,[dir=rtl] .prep b{direction:ltr;unicode-bidi:isolate}' +
  "[dir=rtl] .fitem .mv::before{content:'←'}[dir=rtl] .s-t p{margin-right:auto;margin-left:0}[dir=rtl] .plan .badge{right:auto;left:22px}" +
  '</style>';

// ---------- assets that must be real URLs ----------
function writeDataUri(re, out) {
  const m = src.match(re);
  if (m) fs.writeFileSync(path.join(ROOT, out), Buffer.from(m[1], 'base64'));
}
writeDataUri(/<link rel="icon" href="data:image\/png;base64,([^"]+)"/, 'favicon.png');
writeDataUri(/class="fnjo"[^>]*><img[^>]*src="data:image\/png;base64,([^"]+)"/, 'njo-logo.png');

// ---------- helpers ----------
const strip = (h) => h.replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const lastmod = (() => {
  try { return execSync('git log -1 --format=%cs -- index.html', { cwd: ROOT }).toString().trim() || today(); } catch { return today(); }
})();
function today() { return new Date().toISOString().slice(0, 10); }

// ---------- structured data ----------
function jsonLd(lang) {
  const L = LANGS[lang], d = DICT[lang], i = L.idx, { PLANS } = data(lang);
  const org = {
    '@type': 'Organization', '@id': `${SITE}/#njo`,
    name: 'NJO Business Solutions', alternateName: ['NJO', 'NJO · New Journey Onward'],
    url: CONTACT.njo, logo: `${SITE}/njo-logo.png`, foundingDate: '2016', email: CONTACT.email,
    areaServed: ['RU', 'SA', 'AE', 'QA', 'KW', 'BH', 'OM', 'EG'],
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: CONTACT.email, url: CONTACT.telegram, availableLanguage: ['ru', 'en'] }],
    sameAs: [CONTACT.njo, CONTACT.telegram],
  };
  const service = {
    '@type': 'Service', '@id': `${SITE}/#usha`,
    name: 'USHA', alternateName: 'USHA by NJO', url: L.url,
    serviceType: L.serviceType, description: strip(d.sub), slogan: strip(d.h1),
    provider: { '@id': `${SITE}/#njo` }, brand: { '@type': 'Brand', name: 'USHA' },
    image: `${SITE}/og.jpg`, areaServed: org.areaServed,
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: CONTACT.telegram, name: 'Telegram' },
    offers: { '@type': 'Offer', name: strip(d.tr1), description: L.freeWeek, price: '0', priceCurrency: lang === 'ru' ? 'RUB' : 'USD', url: `${L.url}#free` },
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: strip(d.p_k.replace(/^\d+\s*·\s*/, '')),
      itemListElement: PLANS.map((p) => ({
        '@type': 'Offer', url: `${L.url}#plans`,
        itemOffered: { '@type': 'Service', name: p.n, description: `${p.t[i]} ${p.pts.map((x) => x[i]).join('; ')}.` },
      })),
    },
  };
  const graph = [
    org,
    { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'USHA by NJO', inLanguage: Object.keys(LANGS), publisher: { '@id': `${SITE}/#njo` } },
    {
      '@type': 'WebPage', '@id': `${L.url}#webpage`, url: L.url, name: L.title, description: L.description,
      inLanguage: lang, isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': `${SITE}/#usha` },
      primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE}/og.jpg`, width: 1200, height: 630 }, dateModified: lastmod,
    },
    service,
    {
      '@type': 'FAQPage', '@id': `${L.url}#faqs`, inLanguage: lang,
      mainEntity: d.faq.map(([q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })),
    },
  ];
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

// ---------- house type: Unbounded (display), Onest (text), JetBrains Mono (labels) ----------
// Variable fonts, latin + cyrillic subsets, self-hosted (SIL OFL). Each subset
// downloads only when the page uses that alphabet. Arabic glyphs fall through
// to Hacen Saudi Arabia (AR_CSS).
const RANGES = {
  latin: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
  cyrillic: 'U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116',
};
const TYPE_PRELOAD = { latin: [], cyrillic: [] };
const TYPE_FACES = [['Unbounded', 'unbounded', '200 900'], ['Onest', 'onest', '100 900'], ['JetBrains Mono', 'jetbrains-mono', '400 800']].map(([fam, file, w]) =>
  Object.keys(RANGES).map((sub) => {
    const buf = fs.readFileSync(path.join(ROOT, `tools/seo/fonts/${file}-${sub}.woff2`));
    const url = emit(`fonts/${file}-var-${sub}-${hash(buf)}.woff2`, buf);
    if (file !== 'jetbrains-mono') TYPE_PRELOAD[sub].push(url);
    return `@font-face{font-family:'${fam}';font-style:normal;font-weight:${w};font-display:swap;src:url(${url}) format('woff2');unicode-range:${RANGES[sub]}}`;
  }).join('')).join('');

// ---------- service worker: hashed assets come from the device after the first visit ----------
// /assets/* names carry a content hash, so they are cached forever (cache first);
// pages are network first, so a new deploy shows at once and the cached copy
// covers a flaky connection.
fs.writeFileSync(path.join(ROOT, 'sw.js'), `const V='usha-v2';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
 if(u.pathname.startsWith('/assets/')||/\\.(png|jpg|svg|woff2|ttf)$/.test(u.pathname)){e.respondWith(caches.open(V).then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}))));return}
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r)))}});
`);

// ---------- enhancement layer (tools/seo/enhance) ----------
const ENH = path.join(ROOT, 'tools/seo/enhance');
const ENH_CSS = fs.readFileSync(path.join(ENH, 'enhance.css'), 'utf8').replace(/\/\*[^]*?\*\//g, '').replace(/\s*\n\s*/g, '');
const ENH_JS = fs.readFileSync(path.join(ENH, 'ui.mjs'), 'utf8').replace(/^export /gm, '') + '\n' + fs.readFileSync(path.join(ENH, 'enhance.js'), 'utf8') + '\n' + fs.readFileSync(path.join(ENH, 'live.js'), 'utf8');
// "Ask USHA live": the chat server (usha-brain/worker) and the Turnstile site
// key. Both are public by design. Empty api keeps the live chat switched off.
const LIVE = { api: process.env.USHA_LIVE_API ?? '', turnstile: process.env.USHA_TURNSTILE_KEY ?? '' };
let ENH_URL;
function enhBlock(lang) {
  ENH_URL ||= emit(`enhance-${hash(ENH_JS)}.js`, ENH_JS);
  const xs = lang === 'ar' ? { ar: XL.ar } : { en: XL.en, ru: XL.ru };
  return `<!--enh--><script>window.USHA_X=${JSON.stringify(xs).replace(/</g, '\\u003c')};window.USHA_LIVE=${JSON.stringify(LIVE)}</script><script src="${ENH_URL}"></script><!--/enh-->\n`;
}

function head(lang) {
  const L = LANGS[lang];
  return `<!-- seo:start (generated by tools/seo/build.mjs) -->
<title>${esc(L.title)}</title>
<meta name="description" content="${esc(L.description)}">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
<meta name="author" content="NJO Business Solutions">
${VERIFY_TAGS}<link rel="canonical" href="${L.url}">
${Object.entries(LANGS).map(([l, x]) => `<link rel="alternate" hreflang="${l}" href="${x.url}">\n`).join('')}<link rel="alternate" hreflang="x-default" href="${X_DEFAULT}">
<link rel="alternate" type="text/plain" title="LLM summary" href="/llms.txt">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/favicon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="USHA by NJO">
<meta property="og:url" content="${L.url}">
<meta property="og:title" content="${esc(L.ogTitle)}">
<meta property="og:description" content="${esc(L.description)}">
<meta property="og:locale" content="${L.locale}">
${Object.entries(LANGS).filter(([l]) => l !== lang).map(([, x]) => `<meta property="og:locale:alternate" content="${x.locale}">\n`).join('')}<meta property="og:image" content="${SITE}/og.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(L.imageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(L.ogTitle)}">
<meta name="twitter:description" content="${esc(L.description)}">
<meta name="twitter:image" content="${SITE}/og.jpg">
<script type="application/ld+json">${jsonLd(lang)}</script>
<noscript><style>#intro,#hey,#gl,#cur{display:none!important}[data-in],.rv{opacity:1!important;transform:none!important}.stick{position:relative!important;height:auto!important}#hero,#noise,#signal{height:auto!important}</style></noscript>
<style id="x-type">${TYPE_FACES}</style>
${lang === 'ar' ? AR_CSS + '\n' : ''}<!-- seo:end -->`;
}

// ---------- pre-rendered body content ----------
function containers(lang) {
  const d = DICT[lang], i = LANGS[lang].idx, { PLANS, COMPARE, AREAS, PRO_ONLY } = data(lang);
  return {
    faq: d.faq.map((t) => `<details><summary>${t[0]}</summary><p>${t[1]}</p></details>`).join(''),
    plancards: PLANS.map((t) => `<div class="plan glass rv in${t.hot ? ' hot' : ''}">${t.hot ? `<span class="badge">${d.p_rec}</span>` : ''}<h3>${t.n}</h3><p>${t.t[i]}</p><ul>${t.pts.map((s) => `<li>${s[i]}</li>`).join('')}</ul><a class="btn ${t.hot ? 'btn-p' : 'btn-g'}" href="#free" data-plan="${t.n}">${t.hot ? '<span class="d"></span>' : ''}${d.p_cta}</a></div>`).join(''),
    cmp: `<tr><th></th><th>${d.w_c1}</th><th>${d.w_c2}</th><th>${d.w_c3}</th><th class="u">${d.w_c4}</th></tr>` + COMPARE.map((r) => `<tr>${r.map((n, s) => `<td class="${s === 4 ? 'u' : ''}">${n[i]}</td>`).join('')}</tr>`).join(''),
    roles: d.w_roles.map((t) => `<span>${t}</span>`).join('') + '<span class="one">USHA</span>',
    areas: AREAS.map((e) => `<div class="area glass rv in"><h3>${e.k[i]}</h3><p>${e.t[i]}</p><div class="nums">${e.n.map((t) => `<div><span>${t[0][i]}</span><b data-a="${t[1]}" data-b="${t[2]}">${t[2]}</b></div>`).join('')}</div></div>`).join(''),
    proonly: `<b style="font-weight:600;color:var(--peach)">${d.m_pro}</b>` + PRO_ONLY.map((e) => `<span>${e[i]}</span>`).join(''),
    track: PARTNERS.map((t) => `<span>${t}</span>`).join(''),
  };
}

function render(lang) {
  const d = DICT[lang];
  let h = lang === 'ar' ? srcAr : src;

  // <head>
  h = h.replace(/<html lang="[a-z]+"(?: dir="rtl")?>/, `<html lang="${lang}"${LANGS[lang].dir ? ` dir="${LANGS[lang].dir}"` : ''}>`);
  if (h.includes('<!-- seo:start')) {
    h = h.replace(/<!-- seo:start[^]*?<!-- seo:end -->/, () => head(lang));
  } else {
    const headEnd = h.indexOf('</head>');
    let hd = h.slice(0, headEnd);
    hd = hd
      .replace(/<title>[^<]*<\/title>\n?/, '')
      .replace(/<meta name="(description|robots|author|twitter:[^"]+)"[^>]*>\n?/g, '')
      .replace(/<meta property="og:[^"]+"[^>]*>\n?/g, '')
      .replace(/<link rel="(canonical|alternate|apple-touch-icon)"[^>]*>\n?/g, '')
      .replace(/<link rel="icon"[^>]*>\n?/, '');
    hd = hd.replace(/(<meta name="viewport"[^>]*>\n?)/, (m) => `${m}${head(lang)}\n`);
    h = hd + h.slice(headEnd);
  }

  // the layer's CSS sits last in <head> so it outranks the page's own rules
  h = h.replace(/<!--xcss-->[^]*?<!--\/xcss-->\n?/, '');
  h = h.replace('</head>', `<!--xcss--><style id="x-css">${ENH_CSS}</style>${lang === 'ar' ? `<style>${AR_LATE}</style>` : ''}<!--/xcss-->\n</head>`);

  // data-t elements: values only contain <b>, <i>, <br>, so the first matching
  // closing tag is the element's own. The easter-egg popup stays out of the
  // static HTML so search engines do not give the secret away.
  h = h.replace(/(<([a-z0-9]+)\b[^>]*\bdata-t="([^"]+)"[^>]*>)([^]*?)(<\/\2>)/g, (m, open, tag, key, _inner, close) => {
    const v = SECRET.test(key) ? '' : d[key];
    if (typeof v !== 'string') return m;
    if (v.includes(`</${tag}>`)) throw new Error(`Cannot pre-render ${key}: value nests <${tag}>`);
    return open + v + close;
  });
  h = h.replace(/(<[a-z]+\b[^>]*\bdata-ph="([^"]+)")(?: placeholder="[^"]*")?/g, (m, open, key) =>
    typeof d[key] === 'string' ? `${open} placeholder="${esc(d[key])}"` : m);
  h = h.replace(/(id="holdBtn" aria-label=")[^"]*"/, `$1${esc(strip(d.hold))}"`);

  // footer links to the guides (Russian and English pages)
  const hub = GUIDES_HUB[lang];
  const links = hub ? `<!--seo:guides--><div><small>${hub.nav}</small>${GUIDES.map((g) => `<a href="${guideUrl(lang, g.slug)}">${strip(g[lang].h1)}</a>`).join('')}</div><!--/seo:guides-->` : '';
  h = h.replace(/(<a href="#" id="totop"[^>]*>[^<]*<\/a><\/div>)(?:<!--seo:guides-->[^]*?<!--\/seo:guides-->)?/, (m, a) => a + links);

  // eight roles now (decks): the department stat
  h = h.replace('<b>7 → 1</b>', '<b>8 → 1</b>');

  // plans module, pre-rendered for crawlers (enhance.js takes it over)
  const xplans = `<!--xplans--><div class="x-plans">${plansHTML(XL[lang], d)}</div><!--/xplans-->`;
  h = h.replace(/<!--xplans-->[^]*?<!--\/xplans-->/, '');
  h = h.replace(/(<div class="plans" id="plancards">[^]*?<\/div>)(?=\s*<p class="pnote)/, (m) => m + xplans);
  if (!h.includes('<!--xplans-->')) throw new Error('Bundle changed: #plancards not found');
  h = h.replace(/<\/body>/, () => enhBlock(lang) + '</body>');

  // runtime-built blocks
  for (const [id, html] of Object.entries(containers(lang))) {
    const re = new RegExp(`(<([a-z]+)\\b[^>]*\\bid="${id}"[^>]*>)(?:<!--seo:${id}-->[^]*?<!--/seo:${id}-->)?(?=</\\2>)`);
    if (!re.test(h)) throw new Error(`Bundle changed: #${id} not found`);
    h = h.replace(re, (m, open) => `${open}<!--seo:${id}-->${html}<!--/seo:${id}-->`);
  }
  return h;
}

for (const lang of Object.keys(LANGS)) {
  const out = path.join(ROOT, LANGS[lang].file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, dehydrate(render(lang), lang));
}
// ---------- guides ----------
const GUIDE_LANGS = Object.keys(GUIDES_HUB);
function guideUrl(lang, slug) { return `${LANGS[lang].url}guides/${slug ? `${slug}/` : ''}`; }
const guideFile = (lang, slug) => path.join(ROOT, new URL(guideUrl(lang, slug)).pathname, 'index.html');
const FONT_FACES = TYPE_FACES;
const LOGO = (src.match(/<a class="logo"[^>]*>(<svg[^]*?<\/svg>)/) || [, 'USHA'])[1];
const GUIDE_CSS = `:root{--ink:#F3EEE8;--ink2:rgba(243,238,232,.84);--ink3:rgba(243,238,232,.6);--line:rgba(243,238,232,.16);--ember:#FF5A1F;--peach:#FFB48A;--head:'Unbounded','Geist',system-ui,sans-serif;--serif:'Unbounded',system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}html{background:#030304}
body{color:var(--ink);font-family:'Onest','Golos Text',system-ui,sans-serif;font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased;background:radial-gradient(1100px 560px at 85% -10%,rgba(255,90,31,.13),transparent 60%),#030304;min-height:100vh}
a{color:inherit}.g-h{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;padding:20px clamp(16px,3.6vw,64px)}
.logo{display:block;height:22px}.logo svg{height:100%;width:auto;display:block}
.g-h nav{display:flex;align-items:center;gap:18px;font-size:14px;font-weight:500;color:var(--ink3)}.g-h nav a{text-decoration:none}.g-h nav a:hover{color:var(--ink)}
.btn{display:inline-flex;align-items:center;gap:10px;height:44px;padding:0 20px;border-radius:99px;background:var(--ink);color:#0b0a0f!important;font-weight:500;font-size:15px;text-decoration:none;box-shadow:0 0 50px -8px rgba(255,170,130,.45)}
.btn::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--ember);box-shadow:0 0 10px var(--ember)}
main{max-width:760px;margin:0 auto;padding:32px 16px 80px}.crumbs{font-size:13px;color:var(--ink3)}.crumbs a{text-decoration:none}
.kick{display:flex;align-items:center;gap:10px;margin-top:40px;font-size:13px;font-weight:500;color:var(--ink3)}.kick::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--ember);box-shadow:0 0 10px var(--ember)}
h1{font-family:var(--head);font-weight:700;font-size:clamp(30px,4.8vw,56px);line-height:1.04;letter-spacing:-.045em;margin-top:18px;text-wrap:balance}
h1 i,h2 i{font-style:normal;font-weight:800;color:#FF6A2B;letter-spacing:inherit}
.lead{margin-top:24px;font-size:19px;color:var(--ink2)}
h2{font-family:var(--head);font-weight:700;font-size:clamp(21px,2.6vw,28px);line-height:1.15;letter-spacing:-.035em;margin:56px 0 14px;text-wrap:balance}
main p,main li,main td{color:var(--ink2)}main p+p,main ul+p,main table+p{margin-top:12px}main ul{margin-top:12px;padding-inline-start:22px}main li{margin-top:8px}main li::marker{color:var(--peach)}b{color:var(--ink);font-weight:600}
table{display:block;overflow-x:auto;width:100%;border-collapse:collapse;margin-top:16px;font-size:15px}th,td{text-align:start;vertical-align:top;padding:12px;border-bottom:1px solid var(--line);min-width:130px}th{color:var(--ink3);font-weight:500;font-size:13px}.u{background:rgba(255,90,31,.08);color:var(--ink)!important}
.box{margin-top:56px;padding:28px;border-radius:24px;background:linear-gradient(150deg,rgba(255,255,255,.085),rgba(255,255,255,.025));box-shadow:inset 0 0 0 1px rgba(255,255,255,.13)}.box h2{margin:0 0 10px}.box .btn{margin-top:20px}
details{border-bottom:1px solid var(--line);padding:16px 0}summary{cursor:pointer;font-weight:500;color:var(--ink)}details p{margin-top:10px}
.cards{display:grid;gap:16px;margin-top:32px}.card{display:block;padding:24px;border-radius:20px;text-decoration:none;background:rgba(255,255,255,.03);box-shadow:inset 0 0 0 1px var(--line)}.card:hover{box-shadow:inset 0 0 0 1px var(--peach)}.card h2{margin:0 0 8px;font-size:24px}.card p{font-size:15px}.card span{display:inline-block;margin-top:12px;font-size:14px;color:var(--peach)}
.ill{margin-top:40px;font-size:13px;color:var(--ink3)}footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;padding:32px clamp(16px,3.6vw,64px);border-top:1px solid var(--line);font-size:14px;color:var(--ink3)}footer a{text-decoration:none}footer a:hover{color:var(--ink)}`;

function guideHead(lang, { title, description, url, alt, ld }) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
<link rel="canonical" href="${url}">
${GUIDE_LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${alt[l]}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${alt.en}">
<link rel="icon" type="image/png" href="/favicon.png">
<meta name="theme-color" content="#030304">
<meta property="og:type" content="article">
<meta property="og:site_name" content="USHA by NJO">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:locale" content="${LANGS[lang].locale}">
<meta property="og:image" content="${SITE}/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': ld }).replace(/</g, '\\u003c')}</script>
<style>${FONT_FACES}${GUIDE_CSS}</style>
</head>
<body>`;
}
function guideChrome(lang, otherUrl) {
  const H = GUIDES_HUB[lang], other = lang === 'ru' ? 'en' : 'ru';
  return {
    header: `<header class="g-h"><a class="logo" href="${LANGS[lang].url}" aria-label="USHA by NJO">${LOGO}</a><nav><a href="${guideUrl(lang)}">${H.nav}</a><a href="${otherUrl}" hreflang="${other}" lang="${other}">${other.toUpperCase()}</a><a class="btn" href="${LANGS[lang].url}#free">${H.cta}</a></nav></header>`,
    footer: `<footer><span>USHA by NJO · ${strip(DICT[lang].ft_made)}</span><span><a href="${CONTACT.telegram}" rel="noopener">Telegram · @njo_manager</a> · <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> · <a href="${CONTACT.njo}" rel="noopener">njobusinesssolutions.com</a></span></footer>`,
  };
}
const crumbsLd = (items) => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([name, item], n) => ({ '@type': 'ListItem', position: n + 1, name, item })) });

for (const lang of GUIDE_LANGS) {
  const H = GUIDES_HUB[lang], d = DICT[lang], i = LANGS[lang].idx, { COMPARE } = data(lang);
  const hubAlt = Object.fromEntries(GUIDE_LANGS.map((l) => [l, guideUrl(l)]));
  // hub
  {
    const url = guideUrl(lang), c = guideChrome(lang, guideUrl(lang === 'ru' ? 'en' : 'ru'));
    const ld = [{ '@type': 'CollectionPage', '@id': `${url}#page`, url, name: H.title, description: H.description, inLanguage: lang, isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': `${SITE}/#njo` },
      mainEntity: { '@type': 'ItemList', itemListElement: GUIDES.map((g, n) => ({ '@type': 'ListItem', position: n + 1, url: guideUrl(lang, g.slug), name: strip(g[lang].h1) })) } },
    crumbsLd([['USHA', LANGS[lang].url], [H.nav, url]])];
    const html = guideHead(lang, { title: H.title, description: H.description, url, alt: hubAlt, ld }) + c.header +
      `<main><nav class="crumbs"><a href="${LANGS[lang].url}">USHA</a> / ${H.nav}</nav><p class="kick">USHA by NJO</p><h1>${H.h1}</h1><p class="lead">${H.lead}</p><div class="cards">` +
      GUIDES.map((g) => `<a class="card" href="${guideUrl(lang, g.slug)}"><h2>${g[lang].h1}</h2><p>${g[lang].description}</p><span>${H.more} →</span></a>`).join('') +
      `</div><div class="box"><h2>${H.ctaH}</h2><p>${H.ctaP}</p><a class="btn" href="${LANGS[lang].url}#free">${H.cta}</a></div></main>${c.footer}</body></html>\n`;
    fs.mkdirSync(path.dirname(guideFile(lang)), { recursive: true });
    fs.writeFileSync(guideFile(lang), html);
  }
  // articles
  for (const g of GUIDES) {
    const G = g[lang], url = guideUrl(lang, g.slug), c = guideChrome(lang, guideUrl(lang === 'ru' ? 'en' : 'ru', g.slug));
    const alt = Object.fromEntries(GUIDE_LANGS.map((l) => [l, guideUrl(l, g.slug)]));
    const compare = `<table><tr><th></th>${[d.w_c1, d.w_c2, d.w_c3, d.w_c4].map((x, n) => `<th${n === 3 ? ' class="u"' : ''}>${x}</th>`).join('')}</tr>` +
      COMPARE.map((r) => `<tr>${r.map((cell, n) => n === 0 ? `<th>${cell[i]}</th>` : `<td${n === 4 ? ' class="u"' : ''}>${cell[i]}</td>`).join('')}</tr>`).join('') + '</table>';
    const ld = [
      { '@type': 'Article', '@id': `${url}#article`, headline: strip(G.h1), description: G.description, inLanguage: lang, url, mainEntityOfPage: url,
        datePublished: '2026-10-12', dateModified: lastmod, image: `${SITE}/og.jpg`, author: { '@id': `${SITE}/#njo` }, publisher: { '@id': `${SITE}/#njo` }, about: { '@id': `${SITE}/#usha` } },
      { '@type': 'Organization', '@id': `${SITE}/#njo`, name: 'NJO Business Solutions', url: CONTACT.njo, logo: `${SITE}/njo-logo.png` },
      crumbsLd([['USHA', LANGS[lang].url], [H.nav, guideUrl(lang)], [strip(G.h1), url]]),
      { '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: lang, mainEntity: G.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ];
    const html = guideHead(lang, { title: G.title, description: G.description, url, alt, ld }) + c.header +
      `<main><nav class="crumbs"><a href="${LANGS[lang].url}">USHA</a> / <a href="${guideUrl(lang)}">${H.nav}</a></nav><p class="kick">${G.kicker}</p><h1>${G.h1}</h1><p class="lead">${G.lead}</p>` +
      G.sections.map(([h, body]) => `<h2>${h}</h2>${body.replace('{{compare}}', compare)}`).join('') +
      `<div class="box"><h2>${H.ctaH}</h2><p>${H.ctaP}</p><a class="btn" href="${LANGS[lang].url}#free">${H.cta}</a></div>` +
      `<h2>${H.faq}</h2>${G.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}` +
      `<h2>${H.related}</h2><ul>${G.related.map((r) => `<li><a href="${guideUrl(lang, r)}">${strip(GUIDES.find((x) => x.slug === r)[lang].h1)}</a></li>`).join('')}</ul>` +
      `<p class="ill">${H.ill}</p></main>${c.footer}</body></html>\n`;
    fs.mkdirSync(path.dirname(guideFile(lang, g.slug)), { recursive: true });
    fs.writeFileSync(guideFile(lang, g.slug), html);
  }
}

// drop assets from earlier builds
for (const f of fs.readdirSync(ASSETS, { recursive: true })) {
  const p = path.join(ASSETS, f);
  if (fs.statSync(p).isFile() && !written.has(f.split(path.sep).join('/'))) fs.unlinkSync(p);
}

// ---------- crawler files ----------
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `# usha.one — every search engine and AI assistant is welcome.
User-agent: *
Allow: /

# AI search and assistant crawlers (listed explicitly so the intent is clear)
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: Bingbot
User-agent: YandexBot
User-agent: YandexAdditional
User-agent: GigaBot
User-agent: CCBot
User-agent: meta-externalagent
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);

const alts = Object.entries(LANGS).map(([l, L]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${L.url}"/>`).join('\n') +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${X_DEFAULT}"/>`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.values(LANGS).map((L) => `  <url>
    <loc>${L.url}</loc>
    <lastmod>${lastmod}</lastmod>
${alts}
  </url>`).join('\n')}
${[undefined, ...GUIDES.map((g) => g.slug)].flatMap((slug) => GUIDE_LANGS.map((l) => `  <url>
    <loc>${guideUrl(l, slug)}</loc>
    <lastmod>${lastmod}</lastmod>
${GUIDE_LANGS.map((x) => `    <xhtml:link rel="alternate" hreflang="${x}" href="${guideUrl(x, slug)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${guideUrl('en', slug)}"/>
  </url>`)).join('\n')}
</urlset>
`);

// llms.txt: a short, factual brief for AI assistants (llmstxt.org format).
const en = DICT.en, md = (s) => strip(s);
fs.writeFileSync(path.join(ROOT, 'llms.txt'), `# USHA by NJO

> ${md(en.kicker)}. ${md(en.sub)} Built by NJO Business Solutions (since 2016) for brands and marketplace sellers in Russia, the GCC and Egypt. First week free.

USHA is a business intelligence engine, not a chatbot or an agency. She works in the client's messenger 24/7: every day she reads about 1,240 sources around the business (marketplaces such as Wildberries, Ozon and Yandex Market, competitors, reviews, search and ads), reports what changed and why, and then does the work: strategy, content, video, photo, design, promotions and ads within an approved plan. NJO's strategists and art directors check every output.

## Pages
- [USHA — Russian (main)](${LANGS.ru.url}): ${LANGS.ru.description}
- [USHA — English](${LANGS.en.url}): ${LANGS.en.description}
- [USHA — Arabic](${LANGS.ar.url}): ${LANGS.ar.description}
- [Full text of the site](${SITE}/llms-full.txt): every section, plan and FAQ answer in English, Russian and Arabic

## Guides
${GUIDES.map((g) => `- [${strip(g.en.h1)}](${guideUrl('en', g.slug)}): ${g.en.description} Russian: ${guideUrl('ru', g.slug)}`).join('\n')}

## Plans
${PLANS.map((p) => `- ${p.n}: ${p.t[0]} ${p.pts.map((x) => x[0]).join('; ')}.`).join('\n')}
- ${md(en.p_note)}

## Contact
- Telegram: ${CONTACT.telegram}
- Email: ${CONTACT.email}
- NJO Business Solutions: ${CONTACT.njo}
`);

function fullText(lang) {
  const d = DICT[lang], i = LANGS[lang].idx, h2 = (k) => `## ${md(d[k])}`, { PLANS, COMPARE, AREAS, PRO_ONLY } = data(lang);
  return [
    `# ${md(d.kicker)}`, `**${md(d.h1)}** ${md(d.sub)}`, `- ${md(d.tr1)}\n- ${md(d.tr2)}\n- ${md(d.tr3)}`,
    h2('n_h'), md(d.n_p), [0, 1, 2, 3].map((n) => `- **${md(d['a' + n])}**: ${md(d[`a${n}d`])}`).join('\n'), `${md(d.n_e1)} ${md(d.n_e2)}`,
    h2('s_h'), md(d.s_p),
    h2('w_h'), `| | ${md(d.w_c1)} | ${md(d.w_c2)} | ${md(d.w_c3)} | ${md(d.w_c4)} |\n|---|---|---|---|---|\n` + COMPARE.map((r) => `| ${r.map((c) => c[i]).join(' | ')} |`).join('\n'),
    `**${md(d.w_7h)}** ${md(d.w_7p)} (${d.w_roles.join(', ')}). ${md(d.w_sick)}`,
    h2('m_h'), md(d.m_p), AREAS.map((a) => `- **${a.k[i]}**: ${a.t[i]} ${a.n.map((n) => `${n[0][i]}: Core ${n[1]}, Pro ${n[2]}`).join('; ')}.`).join('\n'), `- **${md(d.m_pro)}**: ${PRO_ONLY.map((x) => x[i]).join('; ')}.`,
    h2('p_h'), md(d.p_p), PLANS.map((p) => `### ${p.n}\n${p.t[i]}\n${p.pts.map((x) => `- ${x[i]}`).join('\n')}`).join('\n\n'), md(d.p_note),
    h2('c_h'), md(d.c_p), `- **${md(d.c_a)}**: ${md(d.c_at)}\n- **${md(d.c_y)}**: ${md(d.c_yt)}\n- **${md(d.c_n)}**: ${md(d.c_nt)}`,
    `### ${md(d.c_g)}\n${[1, 2, 3, 4].map((n) => `- ${md(d['c_g' + n])}`).join('\n')}`,
    `### ${md(d.c_e)}\n${md(d.c_ep)} NJO · New Journey Onward · ${md(d.c_since)} · ${md(d.c_mk)}. ${md(d.c_par)}: ${PARTNERS.join(', ')}.`,
    h2('fr_h'), md(d.fr_p), [1, 2, 3].map((n) => `${n}. ${md(d['fr_' + n])}`).join('\n'), `${md(d.fr_then)} ${md(d.bf_safe)}`,
    h2('q_h'), d.faq.map(([q, a]) => `### ${md(q)}\n${md(a)}`).join('\n\n'),
    `## ${md(d.ft_contact)}\n- Telegram: ${CONTACT.telegram}\n- Email: ${CONTACT.email}\n- ${CONTACT.njo}`,
  ].join('\n\n');
}
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'),
  `# USHA by NJO — full site text\n\nSource: ${LANGS.en.url} (English), ${LANGS.ru.url} (Russian) and ${LANGS.ar.url} (Arabic). Updated ${lastmod}.\n\n---\n\n${fullText('en')}\n\n---\n\n${fullText('ru')}\n\n---\n\n${fullText('ar')}\n`);

console.log(`Built ${Object.values(LANGS).map((L) => L.file).join(', ')}, ${GUIDE_LANGS.length * (GUIDES.length + 1)} guide pages, robots.txt, sitemap.xml, llms.txt, llms-full.txt (lastmod ${lastmod})`);
if (process.env.AR_COLLECT) {
  fs.writeFileSync(path.join(ROOT, 'tools/seo/ar-missing.json'), JSON.stringify([...AR_MISSING], null, 1));
  console.log(`${AR_MISSING.size} strings need Arabic`);
}
