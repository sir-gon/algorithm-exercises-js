/**
 * @link Problem definition [[docs/hackerrank/warmup/diagonalDifference.md]]
 */

import { logger as console } from '../../logger.js';

function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  const last = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diag1 += arr[i][j];
        diag2 += arr[last - i][j];
      }
    }
  }
  console.log(`diag1 ${String(diag1)}`);
  console.log(`diag2 ${String(diag2)}`);

  return Math.abs(diag1 - diag2);
}

export default { diagonalDifference };
export { diagonalDifference };
