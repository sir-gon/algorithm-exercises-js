import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0015 } from './problem0015.js';

describe('problem 0015', () => {
  it('problem 0015 solution found', () => {
    expect.assertions(1);

    const solutionFound = 137846528820;
    const side = 20;

    const calculated = problem0015(side);

    console.log(`PROBLEM 0015 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0015 solution with default values', () => {
    expect.assertions(1);

    const solutionFound = 137846528820;

    const calculated = problem0015();

    console.log(`PROBLEM 0015 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
