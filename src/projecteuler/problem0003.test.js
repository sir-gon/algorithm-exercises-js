/**
 * Largest prime factor
 *
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

import logger from '../logger.js';

import { problem0003 } from './problem0003.js';

describe('problem 0003', () => {
  it('problem 0003 solution found', () => {
    expect.assertions(1);

    const solutionFound = 6857;
    const top = 600851475143;

    const calculated = problem0003(top);

    logger.info(`PROBLEM 0003 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0003 border cases', () => {
    expect.assertions(1);

    const solutionFound = 2;
    const top = 16;

    const calculated = problem0003(top);

    logger.info(`PROBLEM 0003 border case: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
