import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0002 } from './problem0002.js';

describe('problem 0002', () => {
  it('problem 0002 solution found', () => {
    expect.assertions(1);

    const solutionFound = 4613732;
    const top = 4000000;

    const calculated = problem0002(top);

    console.log(`PROBLEM 0002 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
