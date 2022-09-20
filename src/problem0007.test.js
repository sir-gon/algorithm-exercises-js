/**
 * 10001st prime
 *
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
 * we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 *
 */

import logger from './logger.js';

import { problem0007 } from './problem0007.js';

describe('problem 0007', () => {
  it('problem 0007 basic', () => {
    expect.assertions(1);

    const solutionFound = 13;
    const top = 6;

    const calculated = problem0007(top);

    logger.info(`PROBLEM 0007 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('problem 0007 full', () => {
    expect.assertions(1);

    const solutionFound = 104743;
    const top = 10001;

    const calculated = problem0007(top);

    logger.info(`PROBLEM 0007 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
