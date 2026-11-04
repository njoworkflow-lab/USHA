import fs from 'node:fs/promises';
import path from 'node:path';
import { QA } from './config.mjs';
export const slug = s => s.replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 140);
let interruption;
const active = new Set();
export async function interruptAudits(reason) {
  interruption = reason;
  for (const record of active) { record.status = 'NOT RUN'; record.notes.push(reason); await record.save(); }
}
export class Record {
  constructor(cell, category, page) { Object.assign(this, cell); this.category = category; this.page = page; this.issues = []; this.metrics = {}; this.notes = []; this.started = Date.now(); this.status = 'PASS'; }
  async shot(label) {
    const file = `evidence/${this.id}/${this.category}-${slug(label)}.jpg`;
    await fs.mkdir(path.join(QA, 'report', path.dirname(file)), { recursive: true });
    await this.page.screenshot({ path: path.join(QA, 'report', file), type: 'jpeg', quality: 80, scale: 'css', timeout: 60000 });
    return file;
  }
  async fail(message, details = {}, screenshot) {
    if (interruption) { this.status = 'NOT RUN'; if (!this.notes.includes(interruption)) this.notes.push(interruption); return; }
    this.status = 'FAIL';
    if (!screenshot && this.page && !this.page.isClosed()) screenshot = await this.shot(String(this.issues.length + 1)).catch(() => undefined);
    this.issues.push({ message, ...details, screenshot });
    console.log(`FINDING     ${this.id} ${this.category}: ${message.split('\n')[0]}`);
  }
  async check(condition, message, details = {}, screenshot) { if (!condition) await this.fail(message, details, screenshot); }
  unavailable(reason) { if (this.status === 'PASS') this.status = 'UNAVAILABLE'; this.notes.push(reason); }
  async save() {
    const { page, ...data } = this; data.durationMs = Date.now() - this.started;
    await fs.mkdir(path.join(QA, 'report/results'), { recursive: true });
    await fs.writeFile(path.join(QA, 'report/results', `${this.id}--${this.category}.json`), JSON.stringify(data, null, 2));
    if (!['UNAVAILABLE', 'NOT RUN'].includes(this.status)) console.log(`${this.status.padEnd(11)} ${this.id} ${this.category} (${(data.durationMs / 1000).toFixed(1)}s; ${this.issues.length} findings)`);
    return data;
  }
}
export async function audit(cell, category, page, fn) {
  console.log(`START       ${cell.id} ${category}`);
  const record = new Record(cell, category, page);
  let incompleteAttempts = [];
  if (process.argv.includes('--resume')) {
    try {
      const prior = JSON.parse(await fs.readFile(path.join(QA, 'report/results', `${cell.id}--${category}.json`), 'utf8'));
      incompleteAttempts = prior.metrics.incompleteAttempts || [];
      if (prior.status === 'NOT RUN' && category !== 'visual') {
        const { incompleteAttempts: _history, ...metrics } = prior.metrics;
        if (Object.keys(metrics).length) incompleteAttempts.push({ started: prior.started, durationMs: prior.durationMs, status: prior.status, issues: prior.issues, metrics });
        if (incompleteAttempts.length) record.notes.push('Prior attempts are retained as evidence only. The final attempt determines status.');
      }
    } catch { /* no previous result */ }
  }
  if (incompleteAttempts.length) record.metrics.incompleteAttempts = incompleteAttempts;
  active.add(record);
  try { await fn(record); } catch (error) { await record.fail(error.message, { stack: error.stack }); }
  if (incompleteAttempts.length) record.metrics.incompleteAttempts = incompleteAttempts;
  if (interruption) { record.status = 'NOT RUN'; if (!record.notes.includes(interruption)) record.notes.push(interruption); }
  active.delete(record);
  return record.save();
}
