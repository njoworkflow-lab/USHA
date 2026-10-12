# SEO & GEO build

`index.html` is a bundled single page whose text is injected by JavaScript. Crawlers and AI
assistants that do not run JavaScript would see an empty page, so `build.mjs` turns it into a
small, fast, multilingual site:

| URL | What |
|---|---|
| `/` | Russian (pre-rendered) |
| `/en/` | English (pre-rendered) |
| `/ar/` | Arabic, right-to-left, from `ar.json`, font Hacen Saudi Arabia |
| `/guides/…`, `/en/guides/…` | Guides from `guides.mjs` |
| `/assets/…` | Fonts and script, content-hashed and shared by all pages |
| `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt` | Crawler and AI-assistant files |

Each page gets its own title, description, canonical, `hreflang`, Open Graph and JSON-LD
(Organization, Service with plans and the free week, FAQPage; Article and BreadcrumbList on guides).
The language follows the URL and the RU / EN / AR buttons move between pages.

## Updating the site

Upload the new `index.html` to `main` as usual. The **SEO build** GitHub Action rebuilds
everything, commits it, waits for the site to go live, then notifies IndexNow (Bing, Yandex and
others) using the key file `<32 hex>.txt` in the root. To run the build yourself:
`node tools/seo/build.mjs`.

- Titles and descriptions: `LANGS` at the top of `build.mjs`.
- Arabic text: `ar.json` (English → Arabic). A missing string stops the build.
- Guides: `guides.mjs`.
- Search console ownership: paste the Google / Yandex / Bing codes into `verify.json`.

If the design bundle is restructured, the build stops with a "Bundle changed" error rather
than publishing a broken page.
