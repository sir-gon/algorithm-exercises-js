/**
 * Large sum
 *
 * https://projecteuler.net/problem=13
 *
 * Work out the first ten digits of the sum of the following
 * one-hundred 50-digit numbers.
 *
 * See: src/data/problem0013.json
 */

import logger from '../logger.js';
import { bigSumMany } from './helpers/bigNumbers.js';

function problem0013(arrayOfNumbers, _firtsDigits) {
  const radix = 10;

  const sum = bigSumMany(arrayOfNumbers);

  logger.debug(`Sum: ${sum}`);

  const first = parseInt(sum.slice(0, _firtsDigits), radix);

  logger.info(`First ${_firtsDigits} digits of huge sume are ${first}`);

  return first;
}

export default problem0013;
export { problem0013 };
