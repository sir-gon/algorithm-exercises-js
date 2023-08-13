/**
 * @link Problem definition [[docs/projecteuler/problem0013.md]]
 */

import { logger as console } from '../logger.js';
import { bigSumMany } from './helpers/bigNumbers.js';

function problem0013(arrayOfNumbers, _firtsDigits) {
  const radix = 10;

  const sum = bigSumMany(arrayOfNumbers);

  console.debug(`Sum: ${sum}`);

  const first = parseInt(sum.slice(0, _firtsDigits), radix);

  console.log(`First ${_firtsDigits} digits of huge sume are ${first}`);

  return first;
}

export default problem0013;
export { problem0013 };
