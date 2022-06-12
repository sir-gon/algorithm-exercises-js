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

import logger from './logger.js';

import { problem0000template } from './problem0000-template.js';

describe('problem 00XX', () => {
  it('problem 00XX solution found', () => {
    expect.assertions(1);

    const solutionFound = null;

    const calculated = problem0000template();

    logger.info(`PROBLEM 00XX solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
