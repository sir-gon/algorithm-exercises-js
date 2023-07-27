import { logger as console } from '../logger.js';

import { problem0011 } from './problem0011.js';

import matrix from './data/problem0011.json' assert { type: 'json' };

describe('problem 0011', () => {
  it('problem 0011 solution found', () => {
    expect.assertions(1);

    const solutionFound = 70600674;
    const inputLineLength = 4;

    const calculated = problem0011(matrix, inputLineLength);

    console.log(`PROBLEM 0011 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
