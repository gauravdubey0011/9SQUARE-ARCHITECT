export const PERSON_NAME_REGEX = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]{0,48}[\p{L}\p{M}.]$/u;

export function isValidPersonName(value) {
  return PERSON_NAME_REGEX.test(value.trim());
}
