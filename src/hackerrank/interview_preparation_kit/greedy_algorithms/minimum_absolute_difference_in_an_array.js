/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/minimum-absolute-difference-in-an-array.md]]
 */

function minimumAbsoluteDifference(arr) {
  const sortedNums = arr.map((x) => x).sort((a, b) => b - a);

  let result = Math.abs(sortedNums.at(-1) - sortedNums[0]);

  for (let i = 0; i < sortedNums.length - 1; i++) {
    const aValue = sortedNums[i];
    const bValue = sortedNums[i + 1];

    const diff = Math.abs(aValue - bValue);

    result = Math.min(result, diff);
  }

  return result;
}

export default { minimumAbsoluteDifference };
export { minimumAbsoluteDifference };
