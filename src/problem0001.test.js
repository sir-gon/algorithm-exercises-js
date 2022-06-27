/**
 * Multiples of 3 and 5
 *
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples
 * of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

import logger from './logger.js';

import { problem0001 } from './problem0001.js';

describe('problem 0001', () => {
  it('problem 0001 solution found', () => {
    expect.assertions(1);

    const solutionFound = 233168;
    const top = 1000;

    const calculated = problem0001(top);

    logger.info(`PROBLEM 0001 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
