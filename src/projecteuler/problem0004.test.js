/**
 * Largest palindrome product
 *
 * https://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit
 * numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

import { logger as console } from '../logger.js';

import { problem0004 } from './problem0004.js';

describe('problem 0004', () => {
  it('problem 0004 solution found', () => {
    expect.assertions(1);

    const solutionFound = 906609;

    const bottom = 111;
    const top = 999;

    const calculated = problem0004(bottom, top);

    console.log(`PROBLEM 0004 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
