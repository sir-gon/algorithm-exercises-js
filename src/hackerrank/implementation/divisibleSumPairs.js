/**
 * @link Problem definition [[docs/hackerrank/implementation/divisibleSumPairs.md]]
 */

import { logger as console } from '../../logger.js';

function divisibleSumPairs(n, k, ar) {
  let pairs = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        console.debug(`i: ${i} => ${ar[i]} | j: ${j} => ${ar[j]}`);
        pairs += 1;
      }
    }
  }

  return pairs;
}

export default { divisibleSumPairs };
export { divisibleSumPairs };
