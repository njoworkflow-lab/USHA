# SEO & GEO build

`index.html` is a bundled single page whose text is injected by JavaScript. Crawlers and
AI assistants that do not run JavaScript would see an empty page, so `build.mjs`:

- pre-renders all copy into the HTML: Russian at `/` (`index.html`), English at `/en/` (`en/index.html`);
- writes the `<head>` for each language: title, description, canonical, `hreflang`, Open Graph,
  and JSON-LD (Organization, WebSite, WebPage, Service with plans and the free week, FAQPage);
- makes the language follow the URL (`/` = RU, `/en/` = EN, `?lang=` still works), and the
  RU/EN buttons update the address bar;
- generates `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `favicon.png`, `njo-logo.png`.

## Updating the site

Upload the new `index.html` to `main` as usual. The **SEO build** GitHub Action re-runs the
build and commits the regenerated files. To run it yourself: `node tools/seo/build.mjs`.

Titles and descriptions per language are at the top of `build.mjs` (`LANGS`).
If the design bundle is restructured, the build stops with a "Bundle changed" error rather
than publishing a broken page.
