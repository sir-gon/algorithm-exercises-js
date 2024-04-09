import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0001 } from './problem0001.js';

describe('problem 0001', () => {
  it('problem 0001 solution found', () => {
    expect.assertions(1);

    const solutionFound = 233168;
    const top = 1000;

    const calculated = problem0001(top);

    console.log(`PROBLEM 0001 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
