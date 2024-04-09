import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0025 } from './problem0025.js';

describe('problem 0025', () => {
  it('problem 0025 small case', () => {
    expect.assertions(1);

    const solutionFound = 12; // 12 => 144

    const calculated = problem0025(3);

    console.log(`PROBLEM 0025 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0025 solution found', () => {
    expect.assertions(1);

    const solutionFound = 4782; // 12 => 144

    const calculated = problem0025(1000);

    console.log(`PROBLEM 0025 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
