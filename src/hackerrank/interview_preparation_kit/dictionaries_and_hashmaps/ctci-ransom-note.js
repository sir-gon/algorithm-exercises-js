/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/ctci-ransom-note.md]]
 */

const __YES__ = 'Yes';
const __NO__ = 'No';

function checkMagazineCompute(magazine, note) {
  const dictionary = {};

  for (const word of magazine) {
    if (word in dictionary) {
      dictionary[word] += 1;
    } else {
      dictionary[word] = 1;
    }
  }

  for (const word of note) {
    if (word in dictionary && dictionary[word] > 0) {
      dictionary[word] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

function checkMagazineText(magazine, note) {
  return checkMagazineCompute(magazine, note) ? __YES__ : __NO__;
}

function checkMagazine(magazine, note) {
  console.log(checkMagazineCompute(magazine, note) ? __YES__ : __NO__);
}

export default { checkMagazine, checkMagazineText };
export { checkMagazine, checkMagazineText };
