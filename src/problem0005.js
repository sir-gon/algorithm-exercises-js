/**
 * Smallest multiple
 *
 * https://projecteuler.net/problem=5
 *
 *
 *  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

/// ////////////////////////////////////////////////////////////////////////////
// NOTE: I think a better way to solve problem 0005.
// If I got prime numbers in beetwen [1,20], can I test them as
// prime factors, testing a combinatorial exponents that satisfies
// the condition that the number found is divisible by all
// the numbers in beetwen [1,20],
// Instead, this solution is brute force.

/// ////////////////////////////////////////////////////////////////////////////
// Solution found after a LONG TIME running this routine:
//
// FOUND: 232792560 divisible by any element beetwen 1 and 20
/// ////////////////////////////////////////////////////////////////////////////

import logger from './logger.js';

function problem0005(_bottom, _top, _startFrom) {
  let found;

  let fail;
  let i;
  let test = _startFrom;

  do {
    i = 2;
    fail = false;
    do {
      fail = test % i !== 0;

      if (fail) {
        logger.info(`Fail ${test} not divisible by ${i}`);
      } else {
        logger.info(`Testing: ${test} divisible by ${i}`);
      }

      i += 1;
    } while (i <= _top && !fail);

    if (!fail) {
      found = test;
    }

    fail = false;
    test += 1;
  } while (!found);

  logger.info(
    `FOUND: ${found} divisible by any element beetwen ${_bottom} and ${_top}`
  );

  return found;
}

export default problem0005;
export { problem0005 };
