/**
 *
 * <TITLE>
 *
 * https://projecteuler.net/problem=XX
 *
 * <DESCRIPTION>
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found:
 * ////////////////////////////////////////////////////////////////////////////
 */

import { problem0023 } from './problem0023.js';

const DEBUG =
  process.env._DEBUG === 'true' || process.env.DEBUG === '1' || false;

describe('problem 00XX', () => {
  it('problem 00XX solution found', () => {
    expect.assertions(1);

    const solutionFound = null;

    const calculated = problem0023(DEBUG);

    console.log(`PROBLEM 0023 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
