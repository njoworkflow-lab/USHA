import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from '../lib/config.mjs';

const files = execFileSync('git', ['ls-files', '-z', 'qa'], { cwd: ROOT, encoding: 'utf8' }).split('\0').filter(Boolean);
const summary = 'qa/report/summary.md';
const forbidden = files.filter(file => file !== summary && (/\/(report|baseline|screenshots?|evidence|test-results|playwright-report|\.work|node_modules)\//.test(file) || /\.(png|jpe?g|webp|gif|mp4|webm|zip|pdf)$/i.test(file)));
if (forbidden.length) throw new Error('Generated QA artifacts must not be tracked: ' + forbidden.join(', '));
const bytes = fs.readFileSync(path.join(ROOT, summary));
if (bytes.length >= 200_000 || bytes.includes(0)) throw new Error('QA summary must be text under 200 KB');
console.log(`Artifact policy passed: ${files.length} QA source files; summary ${bytes.length} bytes; no tracked reports or media.`);
