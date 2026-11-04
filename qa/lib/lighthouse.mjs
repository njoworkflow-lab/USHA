import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { QA, LANGUAGES } from './config.mjs';
import { audit } from './record.mjs';

export function loadPass(mode, data) {
  return [data.lcpMs, data.cls, data.tbtMs].every(Number.isFinite) && !data.runtimeError && data.cls <= .1 && data.lcpMs <= (mode === 'mobile' ? 4000 : 2500) && (mode !== 'mobile' || data.tbtMs <= 600);
}

async function command(args, env, cwd) {
  return new Promise(resolve => {
    const child = spawn(process.execPath, [path.join(QA, 'node_modules/@lhci/cli/src/cli.js'), ...args], { cwd, env });
    let output = ''; child.stdout.on('data', b => { output += b; }); child.stderr.on('data', b => { output += b; });
    const timer = setTimeout(() => { output += '\nQA: Lighthouse command exceeded its 30-minute deadline.\n'; child.kill('SIGTERM'); }, 1800000);
    child.on('close', code => { clearTimeout(timer); resolve({ code: code ?? 1, output }); });
  });
}
export async function lighthouse(origin, browsers, smoke, completed = new Set()) {
  const results = [];
  // Chrome sends any non-loopback traffic to a deny-only proxy. The proxy has no
  // forwarding implementation, so even a newly added live API cannot be reached.
  const proxy = http.createServer((_req, res) => { res.writeHead(403); res.end('QA external traffic disabled'); });
  proxy.on('connect', (_req, socket) => { socket.end('HTTP/1.1 403 Forbidden\r\n\r\n'); });
  await new Promise(resolve => proxy.listen(0, '127.0.0.1', resolve));
  try {
    for (const mode of ['desktop', 'mobile']) {
      const cell = { id: `lighthouse--${mode}`, browser: 'chromium', profile: mode, lang: 'all' };
      if (completed.has(`${cell.id}/load`)) continue;
      results.push(await audit(cell, 'load', null, async record => {
        if (!browsers.chromium.available) { record.unavailable('Lighthouse needs Chromium'); return; }
        const folder = path.join(QA, '.work/lighthouse', mode); await fs.mkdir(folder, { recursive: true });
        const config = {
          ci: {
            collect: { url: (smoke ? ['/en/'] : Object.values(LANGUAGES)).map(p => origin + p), numberOfRuns: 1, settings: {
              onlyCategories: ['performance'], maxWaitForLoad: 45000, maxWaitForFcp: 30000, ...(mode === 'desktop' ? { preset: 'desktop' } : {}),
              chromeFlags: `--headless --no-sandbox --enable-unsafe-swiftshader --disable-dev-shm-usage --proxy-server=http://127.0.0.1:${proxy.address().port} --proxy-bypass-list=127.0.0.1`,
            } },
            assert: { assertions: { 'cumulative-layout-shift': ['error', { maxNumericValue: .1 }], 'largest-contentful-paint': ['error', { maxNumericValue: mode === 'mobile' ? 4000 : 2500 }], ...(mode === 'mobile' ? { 'total-blocking-time': ['error', { maxNumericValue: 600 }] } : {}) } },
          },
        };
        const configFile = path.join(folder, 'config.json'); await fs.writeFile(configFile, JSON.stringify(config, null, 2));
        const env = { ...process.env, CHROME_PATH: browsers.chromium.executable };
        const collection = await command(['collect', `--config=${configFile}`], env, folder);
        await fs.writeFile(path.join(QA, 'report', `lighthouse-${mode}.log`), collection.output);
        if (collection.code) { await record.fail('Lighthouse CI collection failed', { exitCode: collection.code, log: `lighthouse-${mode}.log` }); return; }
        const assertion = await command(['assert', `--config=${configFile}`], env, folder);
        await fs.writeFile(path.join(QA, 'report', `lighthouse-${mode}-assert.log`), assertion.output);
        record.metrics.pages = [];
        const reports = path.join(folder, '.lighthouseci');
        for (const file of await fs.readdir(reports)) {
          if (!file.startsWith('lhr-') || !file.endsWith('.json')) continue;
          const report = JSON.parse(await fs.readFile(path.join(reports, file), 'utf8'));
          if (!report.audits) continue;
          const a = report.audits, resource = a['resource-summary']?.details?.items || [];
          const data = { lang: new URL(report.requestedUrl).pathname.startsWith('/ar') ? 'ar' : new URL(report.requestedUrl).pathname.startsWith('/en') ? 'en' : 'ru', lcpMs: a['largest-contentful-paint']?.numericValue, cls: a['cumulative-layout-shift']?.numericValue, tbtMs: a['total-blocking-time']?.numericValue, jsBytes: resource.find(r => r.resourceType === 'script')?.transferSize, imageBytes: resource.find(r => r.resourceType === 'image')?.transferSize, runtimeError: report.runtimeError };
          const image = a['final-screenshot']?.details?.data?.match(/^data:image\/(jpeg|png);base64,(.+)$/s);
          if (image) {
            data.screenshot = `evidence/${cell.id}/${data.lang}.${image[1] === 'jpeg' ? 'jpg' : 'png'}`;
            await fs.mkdir(path.join(QA, 'report/evidence', cell.id), { recursive: true });
            await fs.writeFile(path.join(QA, 'report', data.screenshot), Buffer.from(image[2], 'base64'));
          }
          record.metrics.pages.push(data);
          await fs.copyFile(path.join(reports, file), path.join(QA, 'report', `lighthouse-${mode}-${data.lang}.json`));
          const html = file.replace(/\.json$/, '.html');
          await fs.copyFile(path.join(reports, html), path.join(QA, 'report', `lighthouse-${mode}-${data.lang}.html`)).catch(() => {});
          await record.check([data.lcpMs, data.cls, data.tbtMs].every(Number.isFinite) && !data.runtimeError, 'Lighthouse metrics are missing or invalid', data, data.screenshot);
          await record.check(data.cls <= .1, `${data.lang}: CLS ${data.cls} > 0.1`, data, data.screenshot);
          if (mode === 'desktop') await record.check(data.lcpMs <= 2500, `${data.lang}: desktop LCP ${data.lcpMs?.toFixed(0)} ms > 2500 ms`, data, data.screenshot);
          if (mode === 'mobile') {
            await record.check(data.lcpMs <= 4000, `${data.lang}: mobile LCP ${data.lcpMs?.toFixed(0)} ms > 4000 ms`, data, data.screenshot);
            await record.check(data.tbtMs <= 600, `${data.lang}: mobile TBT ${data.tbtMs?.toFixed(0)} ms > 600 ms`, data, data.screenshot);
          }
        }
        await record.check(record.metrics.pages.length === (smoke ? 1 : 3), 'Lighthouse did not produce every requested language report');
        await record.check(assertion.code === 0, 'Lighthouse CI assertions failed', { log: `lighthouse-${mode}-assert.log` });
        record.notes.push('Cold navigation measures the real hold-to-wake intro. Post-wake rendering is measured by the separate real-input smoothness tests. One collection per URL; no median cherry-picking.');
      }));
    }
  } finally { await new Promise(resolve => proxy.close(resolve)); }
  return results;
}
