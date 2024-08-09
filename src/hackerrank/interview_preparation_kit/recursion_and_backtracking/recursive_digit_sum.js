/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/recursive-digit-sum.md]]
 */

const RADIX = 10;

export function superDigitCompute(n) {
  if (n.length === 1) {
    return parseInt(n, RADIX);
  }

  let partial = 0;
  for (const digit of n) {
    partial += parseInt(digit, RADIX);
  }

  return superDigitCompute(`${partial}`);
}

export function superDigit(n, k) {
  const accumulator = `${superDigitCompute(n)}`;

  let result = '';
  for (let i = 0; i < k; i++) {
    result = `${result}${accumulator}`;
  }

  return superDigitCompute(result);
}

export default { superDigit };
