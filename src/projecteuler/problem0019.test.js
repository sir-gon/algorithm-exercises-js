import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { __SUNDAY__ } from '../constants/datetime.js';
import { problem0019 } from './problem0019.js';

describe('problem 0019', () => {
  it('problem 0019 partial', () => {
    expect.assertions(1);

    const solutionFound = 2;

    const sinceInput = 1900;
    const untilInput = 1901;

    const calculated = problem0019(__SUNDAY__, sinceInput, untilInput);

    console.log(`PROBLEM 0019 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0019 solution found', () => {
    expect.assertions(1);

    const solutionFound = 171;

    const sinceInput = 1901;
    const untilInput = 2000;

    const calculated = problem0019(__SUNDAY__, sinceInput, untilInput);

    console.log(`PROBLEM 0019 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0019 solution found with default values', () => {
    expect.assertions(1);

    const solutionFound = 171;

    const calculated = problem0019();

    console.log(`PROBLEM 0019 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
