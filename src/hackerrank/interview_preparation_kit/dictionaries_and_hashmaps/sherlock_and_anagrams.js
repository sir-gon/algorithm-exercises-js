/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/sherlock_and_anagrams.md]]
 */

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export function sherlockAndAnagrams(s) {
  const candidates = {};
  const size = s.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      const substr = s.substring(i, size - j);

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

  let count = 0;
  // Final Anagram list
  for (const word of Object.keys(candidates)) {
    const quantityOfAnagrams = candidates[word].length;
    const k = 2;

    if (quantityOfAnagrams <= 1) {
      delete candidates[word];
    } else {
      // Binomial coefficient: https://en.wikipedia.org/wiki/Binomial_coefficient
      count += Math.floor(
        factorial(quantityOfAnagrams) /
          (factorial(k) * factorial(quantityOfAnagrams - k))
      );
    }
  }
  console.debug(`filtered candidates: ${count}`);

  return count;
}

export default { sherlockAndAnagrams };
