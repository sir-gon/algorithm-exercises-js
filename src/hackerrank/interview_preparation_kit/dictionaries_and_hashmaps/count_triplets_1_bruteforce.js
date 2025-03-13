/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/count_triplets_1.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/count_triplets_1-solution-notes.md]]
 */
import { logger as console } from '../../../logger.js';

function countTriplets(arr, ratio) {
  const size = arr.length;
  let counter = 0;

  for (let i = 0; i < size - 2; i++) {
    for (let j = i + 1; j < size - 1; j++) {
      for (let k = j + 1; k < size; k++) {
        console.debug(`${arr[i]}, ${arr[j]}, ${arr[k]}`);

        if (ratio * arr[i] === arr[j] && ratio * arr[j] === arr[k]) {
          counter += 1;
        }
      }
    }
  }

  return counter;
}

export default { countTriplets };
export { countTriplets };
