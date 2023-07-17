/* eslint-disable jest/no-disabled-tests */

/**
 * Summation of primes
 *
 * https://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

// ////////////////////////////////////////////////////////////////////////////
// About solution: BRUTE FORCE
//
// Found:
// ...
// Prime found 1999969 put in position: 148931
// Prime found 1999979 put in position: 148932
// Prime found 1999993 put in position: 148933
// Sum of primes below 2000000 is: 142913828922
//
// ////////////////////////////////////////////////////////////////////////////

import logger from '../logger.js';

import { isPrime, sum } from './helpers/index.js';

function problem0010(bottom, top) {
  const primes = [];
  let i = bottom;

  do {
    i += 1;

    if (isPrime(i)) {
      primes.push(i);
      logger.debug(`Prime found ${i} put in position: ${primes.length}`);
    }
  } while (i < top);

  logger.info(`primes count: ${primes.length}`);
  logger.info(`Sum of primes below ${top} is: ${sum(primes)}`);

  return sum(primes);
}

export default problem0010;
export { problem0010 };
