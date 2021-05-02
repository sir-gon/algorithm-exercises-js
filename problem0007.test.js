/**
 * 10001st prime
 *
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 *
 * ////////////////////////////////////////////////////////////////////////////
 * Solution found: 104743
 * ////////////////////////////////////////////////////////////////////////////
 */

import { problem0007 } from './problem0007.js';

const DEBUG =
  process.env.DEBUG === 'true' || process.env.DEBUG === '1' || false;

describe('problem 0007', () => {
  it('problem 0007 solution found', () => {
    expect.assertions(1);

    const solutionFound = 104743;

    const calculated = problem0007(DEBUG);

    console.log(`PROBLEM 0007 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
