/**
 * @link Problem definition [[docs/projecteuler/problem0007.md]]
 */

import { logger as console } from '../logger.js';
import { isPrime } from './helpers/index.js';

function problem0007(_top) {
  const primes = [];

  let i = 0;
  let j = 2;
  while (primes.length < _top) {
    i += 1;
    if (isPrime(j)) {
      primes.push(j);

      console.debug(`Prime found ${j} put in position: ${primes.length}`);
    }

    j = 2 * i + 1;
  }

  console.log(`primes count: ${primes.length}`);

  const answer = primes.at(-1);

  const cycles = i;
  console.log(`${_top} prime number is: ${answer} in ${cycles} cycles`);

  return answer;
}

export default problem0007;
export { problem0007 };
