/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/string_manipulation/ctci-making-anagrams.md]]
 */

function charToDicMap(word) {
  const output = {};

  for (const letter of word.split('')) {
    output[letter] = output?.[letter] ? output[letter] + 1 : 1;
  }

  return output;
}

function sum(values) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

export function makeAnagram(a, b) {
  const aMap = charToDicMap(a);
  const bMap = charToDicMap(b);

  for (const key of Object.keys(aMap)) {
    if (bMap?.[key]) {
      aMap[key] = Math.abs(aMap[key] - bMap[key]);
      bMap[key] = 0;
    }
  }

  return sum(Object.values(aMap)) + sum(Object.values(bMap));
}

export default { makeAnagram };
