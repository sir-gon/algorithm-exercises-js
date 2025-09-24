/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/count_triplets_1.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/count_triplets_1-solution-notes.md]]
 */

function countTriplets(arr, ratio) {
  let triplets = 0;

  const aCounter = arr.reduce((accumulator, entry) => {
    if (entry in accumulator) {
      accumulator[entry] += 1;
    } else {
      accumulator[entry] = 1;
    }
    return accumulator;
  }, {});

  const bCounter = {};

  for (const x of arr) {
    const j = Math.floor(x / ratio);
    const k = x * ratio;
    aCounter[x] -= 1;
    if (bCounter[j] && aCounter[k] && x % ratio === 0) {
      triplets += bCounter[j] * aCounter[k];
    }

    if (x in bCounter) {
      bCounter[x] += 1;
    } else {
      bCounter[x] = 1;
    }
  }

  return triplets;
}

export default { countTriplets };
export { countTriplets };
