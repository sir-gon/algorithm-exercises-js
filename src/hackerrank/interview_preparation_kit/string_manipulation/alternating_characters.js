/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/string_manipulation/alternating-characters.md]]
 */

export function alternatingCharacters(s) {
  let last = '';
  let newString = '';

  for (const letter of s) {
    if (letter !== last) {
      newString += letter;

      last = letter;
    }
  }

  return s.length - newString.length;
}

export default { alternatingCharacters };
