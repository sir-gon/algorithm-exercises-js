import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0009 } from './problem0009.js';

describe('problem 0009', () => {
  it('problem 0009 basic case', () => {
    expect.assertions(1);

    const solutionFound = 3 * 4 * 5;
    const inputLimit = 3 + 4 + 5;

    const calculated = problem0009(inputLimit);

    console.log(`PROBLEM 0009 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0009 solution found', () => {
    expect.assertions(1);

    const solutionFound = 200 * 375 * 425;
    const inputLimit = 200 + 375 + 425;

    const calculated = problem0009(inputLimit);

    console.log(`PROBLEM 0009 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
