/**
 * Sum square difference
 *
 * https://projecteuler.net/problem=6
 *
 * The sum of the squares of the first ten natural numbers is,
 *
 * 1² * 2² * ... * 10² = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 * 2 * ... * 10)² = 3025
 *
 * Hence the difference between the sum of the squares of the
 * first ten natural numbers and the square of the sum is
 * 3025 - 385.
 *
 * Find the difference between the sum of the squares of the
 * first one hundred natural numbers and the square of the sum.
 */

// ////////////////////////////////////////////////////////////////////////////
// Solution found:
// Sum of first 100 squares = 338350
// Base for Square Of Sum of first 100 = 5050
// Square Of Sum of first 100 = 25502500
// Difference found 25502500 - 338350 =  25164150
// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';

import { problem0006 } from './problem0006.js';

describe('problem 0006', () => {
  it('problem 0006 solution found', () => {
    expect.assertions(1);

    const solutionFound = 25164150;

    const calculated = problem0006();

    console.log(`PROBLEM 0006 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
