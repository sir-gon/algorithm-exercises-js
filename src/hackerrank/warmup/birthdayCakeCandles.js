/**
 * @link Problem definition [[docs/hackerrank/warmup/birthdayCakeCandles.md]]
 */

function birthdayCakeCandles(ar) {
  if (ar.length === 0) {
    throw new Error('Empty input');
  }

  let counter = 0;
  let max = ar[0];

  for (const num of ar) {
    if (num > max) {
      max = num;
      counter = 1;
    } else if (num === max) {
      counter += 1;
    }
  }

  return counter;
}

export default { birthdayCakeCandles };
export { birthdayCakeCandles };
