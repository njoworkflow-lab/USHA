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
//   4. emits robots.txt, sitemap.xml, llms.txt and llms-full.txt.
//
// It is idempotent: run it on a freshly uploaded index.html or on its own output.
//   node tools/seo/build.mjs

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

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
    title: 'USHA by NJO — محرّك ذكاء الأعمال للعلامات التجارية والبائعين على المتاجر الإلكترونية',
    description: 'تقرأ USHA من NJO متاجرك الإلكترونية ومنافسيك وعملاءك كل يوم، وتخبرك بما تغيّر ولماذا، ثم تنجز العمل: الاستراتيجية والمحتوى والإعلانات. روسيا ودول الخليج ومصر. الأسبوع الأول مجاني.',
    ogTitle: 'USHA by NJO · الخوارزمية التي تفهم الخوارزميات',
    imageAlt: 'USHA by NJO — محرّك ذكاء الأعمال',
    serviceType: 'محرّك ذكاء الأعمال والتسويق',
    freeWeek: 'أسبوع أول مجاني: استراتيجيتك، وأربعة منشورات جاهزة، ومحادثتك الخاصة مع USHA.',
  },
};
const X_DEFAULT = LANGS.en.url;
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
    if (subset === want && ((fam === 'geist' && weight === '300') || (fam === 'golos-text' && weight === '400') || fam === 'readex-pro')) preload.push(url);
    return face.replace(m[0], `src:url(${url})`);
  });
  h = h.replace(/<script>(\(\(\)=>\{[^]*?)<\/script>/, (s, js) => js.length < 100000 ? s : `<script src="${emit(`app-${hash(js)}.js`, js)}"></script>`);
  h = h.replace(/(class="fnjo"[^>]*><img )([^>]*?)src="data:image\/png;base64,[^"]+"/, '$1loading="lazy" decoding="async" $2src="/njo-logo.png"');
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
const COMPARE = grab(src, 'Al=[');
const AREAS = grab(src, 'iu=[');
const PRO_ONLY = grab(src, 'su=[');
const PARTNERS = grab(src, 'ir=[');
const FEED = ',Ms=[', CHATS = ',Tl=[', WEEK = ',Ta=[';

// ---------- Arabic ----------
// tools/seo/ar.json maps every English string to Arabic. The bundle stores
// text either in the wl dictionary or as [en, ru, ...] pairs, so Arabic
// replaces the English entry of each pair.
const AR = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/seo/ar.json'), 'utf8'));
const tr = (s) => { if (!(s in AR)) throw new Error(`Missing Arabic for: ${s}`); return AR[s]; };
const trAll = (v) => typeof v === 'string' ? tr(v) : Array.isArray(v) ? v.map(trAll)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, trAll(x)])) : v;
const isPair = (v) => Array.isArray(v) && v.length >= 2 && typeof v[0] === 'string' && typeof v[1] === 'string' && (/[\u0400-\u04FF]/.test(v[1]) || v[0] === v[1]);
const trPairs = (v) => isPair(v) ? [tr(v[0]), ...v.slice(1)] : Array.isArray(v) ? v.map(trPairs)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, trPairs(x)])) : v;
DICT.ar = trAll(DICT.en);
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
srcAr = patch(srcAr, JUMP, jump('if(i.dataset.l!=="ar"){try{localStorage.setItem("usha-lang",i.dataset.l)}catch{}location.href=(i.dataset.l==="en"?"/en/":"/")+location.hash;return}'), 'language buttons');

// Arabic glyphs: Readex Pro (variable, SIL OFL), heavier for headlines. They sit after the Latin/Cyrillic fonts so Latin words keep the
// house type. Rules use html[lang=ar] so they outrank the page's own :root.
const AR_FONT = (family, file, weights) => `@font-face{font-family:'${family}';font-style:normal;font-weight:${weights};font-display:swap;src:url(data:font/woff2;base64,${fs.readFileSync(path.join(ROOT, `tools/seo/fonts/${file}`)).toString('base64')}) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC}`;
const AR_CSS = '<style id="ar-type">' + AR_FONT('Readex Pro', 'readex-pro.woff2', '160 700') +
  "html[lang=ar]{--head:'Geist','Readex Pro',system-ui,sans-serif;--body:'Golos Text','Readex Pro','Geist',system-ui,sans-serif}" +
  'html[lang=ar] *{letter-spacing:0!important}html[lang=ar] h1,html[lang=ar] h2{font-weight:600;line-height:1.25}html[lang=ar] h3{font-weight:600}' +
  'html[lang=ar] i{font-family:inherit;font-style:normal;font-weight:700;color:var(--peach)}' +
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

function head(lang) {
  const L = LANGS[lang];
  return `<!-- seo:start (generated by tools/seo/build.mjs) -->
<title>${esc(L.title)}</title>
<meta name="description" content="${esc(L.description)}">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
<meta name="author" content="NJO Business Solutions">
<link rel="canonical" href="${L.url}">
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

console.log(`Built ${Object.values(LANGS).map((L) => L.file).join(', ')}, robots.txt, sitemap.xml, llms.txt, llms-full.txt (lastmod ${lastmod})`);
