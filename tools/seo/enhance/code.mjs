// Pure invitation helpers, shared by the browser bundle and the offline tests.
// Formatting is for display only; requests keep the visitor's input.
export function formatInvitationCode(value) {
  const chars = value.replace(/[\s-]/g, '').toUpperCase();
  return chars.length > 3 ? chars.slice(0, 3) + '-' + chars.slice(3) : chars;
}

export function validInvitationCode(value) {
  return /^[ABCDEFGHJKMNPQRTUVWXYZ2-9]{6}$/.test(value.replace(/[\s-]/g, '').toUpperCase());
}

export function invitationCodeError(status, http) {
  if (http === 429) return 'toomany';
  if (!http || http >= 500) return 'unavailable';
  if (status === 'bot_check') return 'bot_check';
  if (status === 'code_required') return 'error';
  return 'unavailable';
}
