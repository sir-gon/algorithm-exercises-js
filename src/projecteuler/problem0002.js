/**
 * @link Problem definition [[docs/projecteuler/problem0002.md]]
 */

import { logger as console } from '../logger.js';

function problem0002(_top) {
  let i = 0;
  let last1 = 1;
  let last2 = 0;
  let evenSum = 0;

  let fibo;
  do {
    fibo = last2 + last1;

    console.debug(`Fibonacci (${i}) = ${fibo}`);

    if (fibo % 2 === 0) {
      evenSum += fibo;
    }

    // next keys:
    last2 = last1;
    last1 = fibo;
    i += 1;
  } while (fibo < _top);

  console.log(`RESULT = ${evenSum}`);
  return evenSum;
}

export default problem0002;
export { problem0002 };
