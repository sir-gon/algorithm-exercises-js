/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/sherlock_and_anagrams.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/sherlock_and_anagrams-solution-notes.md]]
 */

import { logger as console } from '../../../logger.js';

function extraLongFactorials(n) {
  const rs = [...new Array(n)].reduce((a, b, i) => a * BigInt(i + 1), 1n);
  return rs;
}

function sherlockAndAnagrams(s) {
  const candidates = {};
  const size = s.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      const substr = s.substring(i, size - j);
      console.debug(
        `i: ${i}, size: ${size}, size - j: ${size - j} | substr: ${substr}`
      );

      // Add substrings to a candidate list.
      // two strings are anagrams if sorted strings are the same.

      const anagramCandidate = substr
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
      if (anagramCandidate in candidates) {
        candidates[anagramCandidate].push(substr);
      } else {
        candidates[anagramCandidate] = [substr];
      }
    }
  }

  let total = BigInt(0);
  let qCandidates = 0;
  // Final Anagram list
  for (const word of Object.keys(candidates)) {
    const quantityOfAnagrams = candidates[word].length;
    const k = 2;

    if (quantityOfAnagrams <= 1) {
      delete candidates[word];
    } else {
      // Binomial coefficient: https://en.wikipedia.org/wiki/Binomial_coefficient
      qCandidates += quantityOfAnagrams;

      const count =
        extraLongFactorials(quantityOfAnagrams) /
        (extraLongFactorials(k) * extraLongFactorials(quantityOfAnagrams - k));
      total += count;

      console.debug(`'Partial anagrams of ${word}: ${count}`);
    }
  }
  console.debug(
    `'sherlockAndAnagrams(${s}) Filtered # candidates: ${qCandidates}`
  );
  console.debug(`'sherlockAndAnagrams(${s}) # anagrams: ${total}`);

  return Number(total);
}

export default { sherlockAndAnagrams };
export { sherlockAndAnagrams };
