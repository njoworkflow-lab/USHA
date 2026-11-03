import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.mp4': 'video/mp4', '.webm': 'audio/webm', '.m4a': 'audio/mp4', '.txt': 'text/plain' };
export async function serve(root) {
  const server = http.createServer(async (req, res) => {
    try {
      if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (pathname.split('/').some(p => p.startsWith('.') || p === 'qa' || p === 'tools')) { res.writeHead(403); res.end(); return; }
      let file = path.resolve(root, '.' + pathname);
      if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
      if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
      const data = await fs.readFile(file), headers = { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store', 'Accept-Ranges': 'bytes' };
      const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
      if (range) {
        const start = Number(range[1]), end = Math.min(data.length - 1, range[2] ? Number(range[2]) : data.length - 1);
        if (start > end) { res.writeHead(416, { 'Content-Range': `bytes */${data.length}` }); res.end(); return; }
        res.writeHead(206, { ...headers, 'Content-Length': end - start + 1, 'Content-Range': `bytes ${start}-${end}/${data.length}` }); res.end(req.method === 'HEAD' ? undefined : data.subarray(start, end + 1));
      } else { res.writeHead(200, { ...headers, 'Content-Length': data.length }); res.end(req.method === 'HEAD' ? undefined : data); }
    } catch { res.writeHead(404); res.end('Not found'); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { origin: `http://127.0.0.1:${server.address().port}`, close: () => new Promise(resolve => server.close(resolve)) };
}
