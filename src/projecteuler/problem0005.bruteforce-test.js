/* istanbul ignore file */
/* c8 ignore start */

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

import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0005Simple } from './problem0005-simple.js';

describe('problem 0005 simple', () => {
  it('problem 0005 simple solution found by BRUTE FORCE FULL', async () => {
    expect.assertions(1);

    const solutionFound = 232792560;
    const bottom = 1;
    const top = 20;
    const startFrom = solutionFound - 1000;

    const calculated = problem0005Simple(bottom, top, startFrom);

    console.log(`PROBLEM 0005 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});

/* c8 ignore stop */
