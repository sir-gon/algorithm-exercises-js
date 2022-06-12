/**
 * Largest palindrome product
 *
 * https://projecteuler.net/problem=4
 *
 * Solution found: Largest Palindrome => 993 𝗑 913 = 906609
 */

import logger from './logger.js';

import { problem0004 } from './problem0004.js';

describe('problem 0004', () => {
  it('problem 0004 solution found', () => {
    expect.assertions(1);

    const solutionFound = 906609;

    const bottom = 111;
    const top = 999;

    const calculated = problem0004(bottom, top);

    logger.info(`PROBLEM 0004 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
