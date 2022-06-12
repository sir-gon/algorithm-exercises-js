// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

/// ////////////////////////////////////////////////////////////////////////////

import logger from './logger.js';

// const top
function isPythagoreanTriplet(a, b, c) {
  return a ** 2 + b ** 2 === c ** 2;
}

function problem0009() {
  let a;
  let b;
  let c;

  const balance = 1000;

  a = 1;
  b = 2;
  c = 997;

  logger.info(`a = ${a} | b = ${b} | c = ${c}`);

  let found;

  while (a < b && !found) {
    b = a + 1;

    while (a < b && b < c && !found) {
      // TESTING
      logger.info(`TESTING: a = ${a} b = ${b} c = ${c}`);

      if (isPythagoreanTriplet(a, b, c)) {
        found = { a, b, c };
        // logger.info(`FOUND: a = ${a} b = ${b} c = ${c}`)
      }

      // INCREASE
      b += 1;
      c = balance - b - a;
    }

    a += 1;
  }

  logger.info(`FOUND: a = ${found.a} b = ${found.b} c = ${found.c}`);
  logger.info(`PRODUCT: a * b * c = ${found.a * found.b * found.c}`);

  return found.a * found.b * found.c;
}

export default problem0009;
export { problem0009 };
