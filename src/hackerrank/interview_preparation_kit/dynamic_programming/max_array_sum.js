/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dynamic_programming/max_array_sum.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/dynamic_programming/max_array_sum-solution-notes.md]]
 */

const bigIntMax = (...args) =>
  args.reduce((m, e) => (e > m ? e : m), BigInt(0));

export function maxSubsetSum(arr) {
  const arrCopy = arr.map((x) => BigInt(x));

  if (arrCopy.length === 0) {
    return 0;
  }

  const total = arrCopy.length;

  if (total === 1) {
    return Number(arrCopy[0]);
  }

  let tMax = bigIntMax(arrCopy[0], arrCopy[1]);
  arrCopy[1] = tMax;

  for (let i = 2; i < total; i++) {
    tMax = bigIntMax(arrCopy[i - 2] + arrCopy[i], tMax);
    tMax = bigIntMax(arrCopy[i], tMax);
    arrCopy[i] = tMax;
  }

  return Number(tMax);
}

export default { maxSubsetSum };
