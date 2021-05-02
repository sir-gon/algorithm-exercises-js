/**
 * Special Pythagorean triplet
 *
 * https://projecteuler.net/problem=9
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 * ////////////////////////////////////////////////////////////////////////////
 * Solution found:
 * FOUND: a = 200 b = 375 c = 425
 * PRODUCT: a * b * c = 31875000
 * ////////////////////////////////////////////////////////////////////////////
 */

import { problem0009 } from './problem0009.js';

const DEBUG =
  process.env.DEBUG === 'true' || process.env.DEBUG === '1' || false;

describe('problem 0009', () => {
  it('problem 0009 solution found', () => {
    expect.assertions(1);

    const solutionFound = 31875000;

    const calculated = problem0009(DEBUG);

    console.log(`PROBLEM 0009 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
