import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0007 } from './problem0007.js';

describe('problem 0007 basic', () => {
  it('problem 0007 basic', () => {
    expect.assertions(1);

    const solutionFound = 13;
    const top = 6;

    const calculated = problem0007(top);

    console.log(`PROBLEM 0007 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
