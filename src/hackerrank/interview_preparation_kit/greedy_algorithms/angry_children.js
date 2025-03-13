/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/angry-children.md]]
 */

function maxMin(k, arr) {
  const sortedlist = arr.map((x) => x).sort((a, b) => a - b);

  let result = sortedlist[sortedlist.length - 1] - sortedlist[0];

  for (let i = 0; i < sortedlist.length - k + 1; i++) {
    const tmin = sortedlist[i];
    const tmax = sortedlist[i + k - 1];
    result = Math.min(result, tmax - tmin);
  }

  return result;
}

export default { maxMin };
export { maxMin };
