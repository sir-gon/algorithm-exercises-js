/**
 * Largest prime factor
 *
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

import logger from './logger.js';

import { divisors, isPrime } from './helpers/index.js';

function problem0003(_top) {
  const divs = divisors(_top);
  let i;

  // not-unique divisors are always even, then the middle term is:
  const middle = Math.ceil(divs.length / 2) - 1;

  // check half divisors, each is Prime? wich is largest?
  let maxPrimeFactor;

  logger.info(`Divisors of ${_top}: ${divs}`);

  i = middle;
  do {
    const prime = isPrime(divs[i]);

    logger.debug(`${divs[i]} is Prime? ${prime}`);

    if (prime) maxPrimeFactor = divs[i];

    i -= 1;
  } while (i >= 0 && !maxPrimeFactor);

  logger.info(`${maxPrimeFactor}`); // Solution found 6857

  return maxPrimeFactor;
}

export default problem0003;
export { problem0003 };
