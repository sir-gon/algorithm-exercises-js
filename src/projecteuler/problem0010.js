/**
 * @link Problem definition [[docs/projecteuler/problem0010.md]]
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

import { logger as console } from '../logger.js';

import { isPrime, sum } from './helpers/index.js';

function problem0010(bottom, top) {
  const primes = [];
  let i = bottom;

  do {
    i += 1;

    if (isPrime(i)) {
      primes.push(i);
      console.debug(`Prime found ${i} put in position: ${primes.length}`);
    }
  } while (i < top);

  console.log(`primes count: ${primes.length}`);
  console.log(`Sum of primes below ${top} is: ${sum(primes)}`);

  return sum(primes);
}

export default problem0010;
export { problem0010 };
