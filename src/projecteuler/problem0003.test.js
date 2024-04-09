import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0003 } from './problem0003.js';

describe('problem 0003', () => {
  it('problem 0003 solution found', () => {
    expect.assertions(1);

    const solutionFound = 6857;
    const top = 600851475143;

    const calculated = problem0003(top);

    console.log(`PROBLEM 0003 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0003 border cases', () => {
    expect.assertions(1);

    const solutionFound = 2;
    const top = 16;

    const calculated = problem0003(top);

    console.log(`PROBLEM 0003 border case: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
