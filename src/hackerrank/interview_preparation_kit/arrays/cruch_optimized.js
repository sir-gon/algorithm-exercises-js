/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/crush.md]]
 */

function arrayManipulation(n, queries) {
  // why adding 2?
  //   first slot to adjust 1-based index and
  //   last slot for storing accumSum result
  const LENGTH = n + 2;
  const INITIAL_VALUE = 0;
  const result = new Array(LENGTH).fill(INITIAL_VALUE);
  let maximum = 0;

  for (const query of queries) {
    const [aStart, bEnd, kValue] = query;

    result[aStart] += kValue;
    result[bEnd + 1] -= kValue;
  }

  let accumSum = 0;

  for (const value of result) {
    accumSum += value;
    maximum = Math.max(maximum, accumSum);
  }

  return maximum;
}

export default { arrayManipulation };
export { arrayManipulation };
