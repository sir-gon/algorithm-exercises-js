/**
 *
 * https://projecteuler.net/problem=13
 *
 * ////////////////////////////////////////////////////////////////////////////
 * Solution found:
 *
 * First 10 digits of huge sume are 5537376230
 * ////////////////////////////////////////////////////////////////////////////
 */

import logger from './logger.js';

import { problem0013 } from './problem0013.js';

describe('problem 0013', () => {
  it('problem 0013 solution found', () => {
    expect.assertions(1);

    const solutionFound = 5537376230;

    const calculated = problem0013();

    logger.info(`PROBLEM 0013 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
