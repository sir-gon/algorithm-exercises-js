/* istanbul ignore file */
/**
 * Summation of primes
 *
 * https://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

// ////////////////////////////////////////////////////////////////////////////
// About solution: BRUTE FORCE
//
// Found:
// ...
// Prime found 1999969 put in position: 148931
// Prime found 1999979 put in position: 148932
// Prime found 1999993 put in position: 148933
// Sum of primes below 2000000 is: 142913828922
//
// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';

import { problem0010 } from './problem0010.js';

describe('problem 0010', () => {
  it('problem 0010 solution found BRUTE FORCE', () => {
    expect.assertions(1);

    const solutionFound = 142913828922;
    const bottom = 1;
    const top = 2000000;

    const calculated = problem0010(bottom, top);

    console.log(`PROBLEM 0010 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
