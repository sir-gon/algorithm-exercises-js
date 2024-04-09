import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0012 } from './problem0012.js';

describe('problem 0012', () => {
  it('problem 0012 solution found', () => {
    expect.assertions(1);

    const solutionFound = 576;
    const inputTop = 500;

    const calculated = problem0012(inputTop);

    console.log(`PROBLEM 0012 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
