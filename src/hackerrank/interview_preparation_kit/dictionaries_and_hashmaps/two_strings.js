/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/two-strings.md]]
 */

const __YES__ = 'YES';
const __NO__ = 'NO';

export function twoStringsCompute(s1, s2) {
  for (const char of s1) {
    if (s2.includes(char)) {
      return true;
    }
  }
  return false;
}

export function twoStrings(s1, s2) {
  return twoStringsCompute(s1, s2) ? __YES__ : __NO__;
}

export default { twoStrings };
