/**
 * @link Problem definition [[docs/projecteuler/problem0012.md]]
 */

import { logger as console } from '../logger.js';
import { divisors } from './helpers/index.js';

function problem0012(_top) {
  let count = 0;
  let triangular = 0;
  let i = 1;

  while (count < _top) {
    triangular += i;
    const d = divisors(triangular);

    console.debug(`Triangular number: ${triangular} has ${d.length} divisors`);

    if (d.length > count) {
      count = d.length;
    }

    i += 1;
  }

  console.log(`FOUND: ${count}`);

  return count;
}

export default problem0012;
export { problem0012 };
