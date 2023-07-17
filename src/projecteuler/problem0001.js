/**
 * Multiples of 3 and 5
 *
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples
 * of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

import logger from '../logger.js';

function problem0001(_top) {
  let total = 0;

  for (let i = 0; i < _top; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      logger.debug(`i = ${i}`);
      total += i;
    }
  }

  logger.info(`TOTAL = ${total}`);

  return total;
}

export default problem0001;
export { problem0001 };
