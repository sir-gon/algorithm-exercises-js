/**
 * @link Problem definition [[docs/projecteuler/problem0025.md]]
 */

import { logger as console } from '../logger.js';
import { bigNum, bigSum, bigNumToString } from './helpers/index.js';

export function problem0025(_top) {
  let last1 = bigNum('1');
  let last2 = bigNum('1');
  let counter = 2;
  let fibo = '0';

  do {
    fibo = bigSum(bigNumToString(last1), bigNumToString(last2));
    console.debug(`Fibonacci (${counter}) = ${fibo}`);

    // next keys:
    last2 = last1;
    last1 = bigNum(fibo);
    counter += 1;
  } while (fibo.length < _top);

  console.log(`RESULT ${counter} => ${fibo}`);
  return counter;
}

export default { problem0025 };
