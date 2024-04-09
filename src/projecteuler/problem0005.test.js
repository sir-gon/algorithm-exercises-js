import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0005 } from './problem0005.js';

describe('problem 0005', () => {
  it('problem 0005 solution found BASIC', async () => {
    // Your test
    expect.assertions(1);

    const solutionFound = 2520;
    const bottom = 1;
    const top = 10;

    const calculated = problem0005(bottom, top);

    console.log(`PROBLEM 0005 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0005 solution found FULL', async () => {
    // Your test
    expect.assertions(1);

    const solutionFound = 232792560;
    const bottom = 1;
    const top = 20;

    const calculated = problem0005(bottom, top);

    console.log(`PROBLEM 0005 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
