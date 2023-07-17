/**
 * Special Pythagorean triplet
 *
 * https://projecteuler.net/problem=9
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 * a² + b² = c²
 * For example, 3² + 4² = 9 + 16 = 25 = 5².
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

// ////////////////////////////////////////////////////////////////////////////
// Solution found:
// FOUND: a = 200 b = 375 c = 425
// PRODUCT: a * b * c = 31875000
// ////////////////////////////////////////////////////////////////////////////

import logger from '../logger.js';

import { problem0009 } from './problem0009.js';

describe('problem 0009', () => {
  it('problem 0009 basic case', () => {
    expect.assertions(1);

    const solutionFound = 3 * 4 * 5;
    const inputLimit = 3 + 4 + 5;

    const calculated = problem0009(inputLimit);

    logger.info(`PROBLEM 0009 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0009 solution found', () => {
    expect.assertions(1);

    const solutionFound = 200 * 375 * 425;
    const inputLimit = 200 + 375 + 425;

    const calculated = problem0009(inputLimit);

    logger.info(`PROBLEM 0009 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
