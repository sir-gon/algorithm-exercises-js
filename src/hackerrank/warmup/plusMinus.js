/**
 * @link Problem definition [[docs/hackerrank/warmup/plusMinus.md]]
 */

export function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  for (const num of arr) {
    if (num > 0) {
      positives += 1;
    } else if (num < 0) {
      negatives += 1;
    } else if (num === 0) {
      zeros += 1;
    }
  }

  const result = [];

  result.push((positives / arr.length).toFixed(6));
  result.push((negatives / arr.length).toFixed(6));
  result.push((zeros / arr.length).toFixed(6));

  return result.join(`\n`);
}

export default { plusMinus };
