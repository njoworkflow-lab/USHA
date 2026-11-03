export async function seo(origin, record) {
  const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  record.metrics.pages = [];
  await record.check(urls.length === 11, `Expected 11 sitemap pages; found ${urls.length}`);
  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const response = await fetch(origin + pathname), html = await response.text();
    const expectedLang = pathname.startsWith('/ar/') ? 'ar' : pathname.startsWith('/en/') ? 'en' : 'ru';
    const lang = html.match(/<html[^>]*\blang="([^"]+)"/)?.[1];
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    const structured = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    let jsonValid = structured.length > 0;
    for (const [, json] of structured) try { JSON.parse(json); } catch { jsonValid = false; }
    const row = { url, status: response.status, lang, canonical, h1: /<h1[\s>]/.test(html), jsonValid };
    record.metrics.pages.push(row);
    await record.check(response.status === 200 && lang === expectedLang && canonical === url && row.h1 && jsonValid, 'Sitemap page metadata failed', row);
  }
  for (const name of ['robots.txt', 'llms.txt', 'llms-full.txt', 'sw.js']) {
    const response = await fetch(`${origin}/${name}`);
    await record.check(response.status === 200 && (await response.text()).length > 0, `${name} failed to load`, { status: response.status });
  }
}
