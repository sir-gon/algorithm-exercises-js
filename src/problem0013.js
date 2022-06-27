/**
 * Large sum
 *
 * https://projecteuler.net/problem=13
 *
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 *
 * See: src/data/problem0013.json
 */

import logger from './logger.js';

function problem0013(arrayOfNumbers) {
  const divisor = 1000000000000000000000000000000000000000;
  const top = 10000000000;
  let sum = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i] / divisor;
  }

  logger.info(sum);

  while (sum > top) {
    sum = Math.trunc(sum / 10);
    logger.info(sum);
  }

  logger.info(`First 10 digits of huge sume are ${sum}`);

  return sum;
}

export default problem0013;
export { problem0013 };
