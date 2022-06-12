/**
 * https://projecteuler.net/problem=1
 *
 * Multiples of 3 and 5
 */

import logger from './logger.js';

function problem0001(_top) {
  let total = 0;

  for (let i = 0; i < _top; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      logger.info(`i = ${i}`);
      total += i;
    }
  }

  logger.info(`TOTAL = ${total}`);

  return total;
}

export default problem0001;
export { problem0001 };
