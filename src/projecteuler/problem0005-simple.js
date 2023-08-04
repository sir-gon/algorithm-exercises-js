/// ///////////////////////////////////////////////////////////////////////////
// NOTE: I think a better way to solve problem 0005.
// If I got prime numbers in beetwen [1,20], can I test them as
// prime factors, testing a combinatorial exponents that satisfies
// the condition that the number found is divisible by all
// the numbers in beetwen [1,20],
// Instead, this solution is brute force.
//
/// ///////////////////////////////////////////////////////////////////////////
// Solution found after a LONG TIME running this routine:
//
// FOUND: 232792560 divisible by any element beetwen 1 and 20
/// ///////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';

function problem0005Simple(_bottom, _top, _startFrom) {
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
        console.debug(`Fail ${test} not divisible by ${i}`);
      } else {
        console.debug(`Testing: ${test} divisible by ${i}`);
      }

      i += 1;
    } while (i <= _top && !fail);

    if (!fail) {
      found = test;
    }

    test += 1;
  } while (!found);

  console.log(
    `FOUND: ${found} divisible by any element beetwen ${_bottom} and ${_top}`
  );

  return found;
}

export default problem0005Simple;
export { problem0005Simple };
