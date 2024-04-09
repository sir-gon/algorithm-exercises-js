import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0005Simple } from './problem0005-simple.js';

describe('problem 0005 simple', () => {
  it('problem 0005 simple solution found by BRUTE FORCE BASIC', async () => {
    expect.assertions(1);

    const solutionFound = 2520;
    const bottom = 1;
    const top = 10;
    const startFrom = 0;

    const calculated = problem0005Simple(bottom, top, startFrom);

    console.log(`PROBLEM 0005 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
