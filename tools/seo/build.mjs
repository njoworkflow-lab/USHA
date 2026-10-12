#!/usr/bin/env node
// SEO + GEO build for usha.one.
//
// The site ships as one bundled index.html whose copy lives in a JS dictionary
// and is only injected at runtime. Crawlers and AI engines that do not run
// JavaScript see an empty page. This script:
//   1. pre-renders the copy into the HTML (Russian at /, English at /en/),
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
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SITE = 'https://usha.one';
const CONTACT = { email: 'darina@njobusinesssolutions.com', telegram: 'https://t.me/njo_manager', njo: 'https://www.njobusinesssolutions.com/' };

const LANGS = {
  ru: {
    idx: 1, url: `${SITE}/`, file: 'index.html', locale: 'ru_RU',
    title: 'USHA by NJO — ИИ-аналитик и маркетолог для брендов и маркетплейсов',
    description: 'USHA — движок бизнес-аналитики от NJO. Каждый день читает Wildberries, Ozon, Яндекс Маркет, конкурентов и покупателей, объясняет, что изменилось, и делает работу: стратегия, контент, реклама. Первая неделя бесплатно.',
    ogTitle: 'USHA by NJO · Алгоритм, который понимает алгоритмы',
    imageAlt: 'USHA by NJO — движок бизнес-аналитики',
    serviceType: 'ИИ-движок бизнес-аналитики и маркетинга',
    freeWeek: 'Бесплатная первая неделя: стратегия, четыре готовых поста и собственный чат с USHA.',
  },
  en: {
    idx: 0, url: `${SITE}/en/`, file: 'en/index.html', locale: 'en_US',
    title: 'USHA by NJO — AI business intelligence & marketing engine for brands',
    description: 'USHA by NJO reads your marketplaces, competitors and buyers every day, tells you what changed and why, and does the work: strategy, content, ads. Russia, GCC, Egypt. First week free.',
    ogTitle: 'USHA by NJO · The algorithm that understands algorithms',
    imageAlt: 'USHA by NJO — business intelligence engine',
    serviceType: 'AI business intelligence and marketing engine',
    freeWeek: 'Free first week: your strategy, four ready posts and your own USHA chat.',
  },
};
const X_DEFAULT = LANGS.en.url;
const SECRET = /^sec_/;

// ---------- read source ----------
const SRC_PATH = path.join(ROOT, 'index.html');
let src = fs.readFileSync(SRC_PATH, 'utf8');

// Evaluate a JS literal that starts at the last character of `marker`.
function grab(s, marker) {
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
  return (0, eval)(`(${s.slice(i, j + 1)})`);
}

const DICT = grab(src, 'var wl={');
const PLANS = grab(src, ',ru=[');
const COMPARE = grab(src, 'Al=[');
const AREAS = grab(src, 'iu=[');
const PRO_ONLY = grab(src, 'su=[');
const PARTNERS = grab(src, 'ir=[');

// ---------- runtime patch: language comes from the URL ----------
// Original: ?lang= → localStorage → browser language. Googlebot renders with an
// en-US browser, so "/" would be indexed in English. Now: ?lang= → /en/ path →
// on "/" a saved choice (never present for bots) → Russian. Switching language
// rewrites the URL so every view has a shareable, indexable address.
const DETECT_OLD = /fi=\(\(\)=>\{try\{let e=location\.search\.match\(\/lang=\(en\|ru\)\/\);if\(e\)return e\[1\];let t=localStorage\.getItem\("usha-lang"\);if\(t\)return t\}catch\{\}let i=navigator\.languages[^]*?:"ru"\}\)\(\)/;
const DETECT_NEW = 'fi=(()=>{let e=location.search.match(/lang=(en|ru)/);if(e)return e[1];if(/^\\/en(\\/|$)/.test(location.pathname))return"en";try{let t=localStorage.getItem("usha-lang");if(t==="en"){history.replaceState(null,"","/en/"+location.hash);return t}}catch{}return"ru"})()';
const DETECT_MARK = 'if(/^\\/en(\\/|$)/.test(location.pathname))return"en"';
if (!src.includes(DETECT_MARK)) {
  if (!DETECT_OLD.test(src)) throw new Error('Bundle changed: language detection not found');
  src = src.replace(DETECT_OLD, DETECT_NEW);
}
const SWITCH_OLD = 'fi=i.dataset.l;try{localStorage.setItem("usha-lang",fi)}catch{}kl()';
const SWITCH_NEW = 'fi=i.dataset.l;try{localStorage.setItem("usha-lang",fi);history.replaceState(null,"",(fi==="en"?"/en/":"/")+location.hash)}catch{}document.title=fi==="en"?' + JSON.stringify(LANGS.en.title) + ':' + JSON.stringify(LANGS.ru.title) + ';kl()';
if (!src.includes('history.replaceState(null,"",(fi==="en"')) {
  if (!src.includes(SWITCH_OLD)) throw new Error('Bundle changed: language switch not found');
  src = src.replace(SWITCH_OLD, SWITCH_NEW);
}

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
  const L = LANGS[lang], d = DICT[lang], i = L.idx;
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
    { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'USHA by NJO', inLanguage: ['ru', 'en'], publisher: { '@id': `${SITE}/#njo` } },
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
  const L = LANGS[lang], alt = lang === 'ru' ? LANGS.en : LANGS.ru;
  return `<!-- seo:start (generated by tools/seo/build.mjs) -->
<title>${esc(L.title)}</title>
<meta name="description" content="${esc(L.description)}">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1">
<meta name="author" content="NJO Business Solutions">
<link rel="canonical" href="${L.url}">
<link rel="alternate" hreflang="ru" href="${LANGS.ru.url}">
<link rel="alternate" hreflang="en" href="${LANGS.en.url}">
<link rel="alternate" hreflang="x-default" href="${X_DEFAULT}">
<link rel="alternate" type="text/plain" title="LLM summary" href="/llms.txt">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/favicon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="USHA by NJO">
<meta property="og:url" content="${L.url}">
<meta property="og:title" content="${esc(L.ogTitle)}">
<meta property="og:description" content="${esc(L.description)}">
<meta property="og:locale" content="${L.locale}">
<meta property="og:locale:alternate" content="${alt.locale}">
<meta property="og:image" content="${SITE}/og.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(L.imageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(L.ogTitle)}">
<meta name="twitter:description" content="${esc(L.description)}">
<meta name="twitter:image" content="${SITE}/og.jpg">
<script type="application/ld+json">${jsonLd(lang)}</script>
<noscript><style>#intro,#hey,#gl,#cur{display:none!important}[data-in],.rv{opacity:1!important;transform:none!important}.stick{position:relative!important;height:auto!important}#hero,#noise,#signal{height:auto!important}</style></noscript>
<!-- seo:end -->`;
}

// ---------- pre-rendered body content ----------
function containers(lang) {
  const d = DICT[lang], i = LANGS[lang].idx;
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
  let h = src;

  // <head>
  h = h.replace(/<html lang="[a-z]+">/, `<html lang="${lang}">`);
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
  fs.writeFileSync(out, render(lang));
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

USHA is an AI business intelligence and marketing engine, not a chatbot. She works in the client's messenger 24/7: every day she reads about 1,240 sources around the business (marketplaces such as Wildberries, Ozon and Yandex Market, competitors, reviews, search and ads), reports what changed and why, and then does the work: strategy, content, video, photo, design, promotions and ads within an approved plan. NJO's strategists and art directors check every output.

## Pages
- [USHA — Russian (main)](${LANGS.ru.url}): ${LANGS.ru.description}
- [USHA — English](${LANGS.en.url}): ${LANGS.en.description}
- [Full text of the site](${SITE}/llms-full.txt): every section, plan and FAQ answer in English and Russian

## Plans
${PLANS.map((p) => `- ${p.n}: ${p.t[0]} ${p.pts.map((x) => x[0]).join('; ')}.`).join('\n')}
- ${md(en.p_note)}

## Contact
- Telegram: ${CONTACT.telegram}
- Email: ${CONTACT.email}
- NJO Business Solutions: ${CONTACT.njo}
`);

function fullText(lang) {
  const d = DICT[lang], i = LANGS[lang].idx, h2 = (k) => `## ${md(d[k])}`;
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
  `# USHA by NJO — full site text\n\nSource: ${LANGS.en.url} (English) and ${LANGS.ru.url} (Russian). Updated ${lastmod}.\n\n---\n\n${fullText('en')}\n\n---\n\n${fullText('ru')}\n`);

console.log(`Built ${Object.values(LANGS).map((L) => L.file).join(', ')}, robots.txt, sitemap.xml, llms.txt, llms-full.txt (lastmod ${lastmod})`);
