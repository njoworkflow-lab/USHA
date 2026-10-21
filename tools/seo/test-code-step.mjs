// Run with node tools/seo/test-code-step.mjs. No browser, network or sockets.
import test from 'node:test';
import assert from 'node:assert/strict';
import { formatInvitationCode, validInvitationCode, invitationCodeError } from './enhance/code.mjs';

test('formats typing and pasted lowercase, spaces and a dash', () => {
  for (const [input, expected] of [
    ['', ''], ['a', 'A'], ['ab', 'AB'], ['abc', 'ABC'], ['abcd', 'ABC-D'],
    ['abc234', 'ABC-234'], [' abc 234 ', 'ABC-234'], ['abc-234', 'ABC-234'],
  ]) assert.equal(formatInvitationCode(input), expected);
});

test('formatting is idempotent and validation accepts each supported input style', () => {
  for (const typed of ['abc234', 'ABC-234', ' abc 234 ', 'a b c - 2 3 4']) {
    assert.equal(formatInvitationCode(formatInvitationCode(typed)), 'ABC-234');
    assert.equal(validInvitationCode(typed), true);
  }
});

test('does not silently turn extra or invalid characters into a valid code', () => {
  for (const typed of ['ABC2345', 'ABC!234', 'АBC234']) {
    assert.equal(validInvitationCode(typed), false);
    assert.equal(validInvitationCode(formatInvitationCode(typed)), false);
  }
});

test('requires six characters and excludes I, L, O, S, 0 and 1', () => {
  for (const typed of ['', 'ABC23', 'ABC2345', 'ABC---']) assert.equal(validInvitationCode(typed), false);
  for (const char of 'ILOS01ilos') assert.equal(validInvitationCode(`AB${char}-234`), false);
  for (const char of 'ABCDEFGHJKMNPQRTUVWXYZ23456789') assert.equal(validInvitationCode(`AB${char}-234`), true);
});

test('maps only code_required to the generic code error', () => {
  assert.equal(invitationCodeError('code_required', 403), 'error');
  assert.equal(invitationCodeError('bot_check', 403), 'bot_check');
});

test('HTTP 429 takes priority over the generic status', () => {
  for (const status of ['code_required', 'bot_check', undefined]) assert.equal(invitationCodeError(status, 429), 'toomany');
});

test('outages, failed connections and unexpected responses ask the visitor to try again', () => {
  for (const [status, http] of [
    ['code_required', 503], ['code_required', 500], [undefined, 0],
    [undefined, 200], [undefined, 404], ['unexpected', 403],
  ]) assert.equal(invitationCodeError(status, http), 'unavailable');
});
