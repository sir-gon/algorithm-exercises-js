// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

/// ////////////////////////////////////////////////////////////////////////////

import logger from './logger.js';

import { isPrime, sum } from './helpers/index.js';

function problem0010() {
  const top = 2000000;
  const bottom = 1;

  const primes = [];
  let i = bottom;

  do {
    i += 1;

    if (isPrime(i)) {
      primes.push(i);
      logger.info(`Prime found ${i} put in position: ${primes.length}`);
    }
  } while (i < top);

  logger.info(`primes count: ${primes.length}`);
  logger.info(`Sum of primes below ${top} is: ${sum(primes)}`);

  return sum(primes);
}

export default problem0010;
export { problem0010 };
