import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../logger.js';

import { problem0018 } from './problem0018.js';
import inputTriangle from './data/problem0018.json';

describe('problem 0018', () => {
  it('problem 0018 solution found', () => {
    expect.assertions(1);

    const solutionFound = 1074;

    const calculated = problem0018(inputTriangle);

    console.log(`PROBLEM 0018 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
