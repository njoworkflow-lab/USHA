import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { audit } from '../lib/record.mjs';

test('resume archives previous findings but only the final attempt determines status', async t => {
  const prior = { status: 'NOT RUN', started: 1, durationMs: 200,
    issues: [{ message: 'Earlier failure', screenshot: 'evidence/earlier.jpg' }],
    metrics: { steps: ['Earlier step'] } };
  let saved;
  t.mock.method(fs, 'readFile', async () => JSON.stringify(prior));
  t.mock.method(fs, 'mkdir', async () => {});
  t.mock.method(fs, 'writeFile', async (_file, data) => { saved = JSON.parse(data); });
  const args = [...process.argv];
  process.argv.push('--resume');
  try {
    await audit({ id: 'resume-fixture', browser: 'fixture', profile: 'fixture', lang: 'en' }, 'interaction', null, async record => {
      record.metrics.steps = ['New step'];
    });
    assert.equal(saved.status, 'PASS');
    assert.deepEqual(saved.issues, []);
    assert.deepEqual(saved.metrics.incompleteAttempts[0].issues.map(i => i.message), ['Earlier failure']);
    assert.deepEqual(saved.metrics.incompleteAttempts[0].metrics.steps, ['Earlier step']);
    assert.deepEqual(saved.metrics.steps, ['New step']);
  } finally { process.argv.splice(0, process.argv.length, ...args); }
});
