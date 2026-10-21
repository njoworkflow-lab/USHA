// node tools/seo/media/encode.mjs /path/to/originals
// Swap a source filename or trim in media.json; this command makes the web copies.
// Add a 1080 rendition in the manifest when a higher-quality source arrives.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const dir=path.dirname(fileURLToPath(import.meta.url));
const manifest=JSON.parse(fs.readFileSync(path.join(dir,'media.json'),'utf8'));
if(!process.argv[2]) throw new Error('Usage: node tools/seo/media/encode.mjs ORIGINALS_DIRECTORY');
for(const film of Object.values(manifest)) {
  const input=path.join(process.argv[2],film.source);
  execFileSync('ffmpeg',['-y','-i',input,...(film.trim?['-t',String(film.trim)]:[]),'-vf','scale=848:-2','-c:v','libx264','-profile:v','high','-crf','32','-preset','slow','-pix_fmt','yuv420p','-movflags','+faststart','-c:a','aac','-b:a','96k',path.join(dir,film.renditions['480'].file)],{stdio:'ignore'});
  // VP9/Opus is a fallback for browsers whose build omits H.264 support.
  execFileSync('ffmpeg',['-y','-i',input,...(film.trim?['-t',String(film.trim)]:[]),'-vf','scale=848:-2','-c:v','libvpx-vp9','-crf','38','-b:v','0','-deadline','good','-cpu-used','4','-row-mt','1','-pix_fmt','yuv420p','-c:a','libopus','-b:a','64k',path.join(dir,film.renditions['480'].webm)],{stdio:'ignore'});
  execFileSync('ffmpeg',['-y','-ss',String(film.posterTime),'-i',input,'-frames:v','1','-c:v','libwebp','-q:v','72',path.join(dir,film.poster)],{stdio:'ignore'});
}
