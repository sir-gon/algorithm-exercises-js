/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/minimum_swaps_2.md]]
 */

export function minimumSwaps(arr) {
  const indexedGroup = arr.map((x) => x - 1);
  let swaps = 0;
  let index = 0;
  const size = indexedGroup.length;

  while (index < size) {
    if (indexedGroup[index] === index) {
      index += 1;
    } else {
      const temp = indexedGroup[index];
      indexedGroup[index] = indexedGroup[temp];
      indexedGroup[temp] = temp;
      swaps += 1;
    }
  }

  return swaps;
}

export default { minimumSwaps };
