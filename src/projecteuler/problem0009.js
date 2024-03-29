/**
 * @link Problem definition [[docs/projecteuler/problem0009.md]]
 */
// ////////////////////////////////////////////////////////////////////////////
// Solution found:
// FOUND: a = 200 b = 375 c = 425
// PRODUCT: a * b * c = 31875000
// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';

// const top
function isPythagoreanTriplet(a, b, c) {
  return a ** 2 + b ** 2 === c ** 2;
}

function problem0009(_limit) {
  let a = 1;
  let b = 2;
  let c = 997;

  console.log(`a = ${a} | b = ${b} | c = ${c}`);

  let found;

  while (a < b && !found) {
    b = a + 1;

    while (a < b && b < c && !found) {
      // TESTING
      console.debug(`TESTING: a = ${a} b = ${b} c = ${c}`);

      if (isPythagoreanTriplet(a, b, c)) {
        found = { a, b, c };
        console.debug(`FOUND: a = ${a} b = ${b} c = ${c}`);
      }

      // INCREASE
      b += 1;
      c = _limit - b - a;
    }

    a += 1;
  }

  console.log(`FOUND: a = ${found.a} b = ${found.b} c = ${found.c}`);
  console.log(`PRODUCT: a * b * c = ${found.a * found.b * found.c}`);

  return found.a * found.b * found.c;
}

export default problem0009;
export { problem0009 };
