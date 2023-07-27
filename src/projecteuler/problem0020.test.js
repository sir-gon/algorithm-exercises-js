import { logger as console } from '../logger.js';

import { problem0020 } from './problem0020.js';

describe('problem 0020', () => {
  it('problem 0020 solution found', () => {
    expect.assertions(1);

    // const digitsFound = '4613732';
    const solutionFound = '648';
    const inputLimit = 100;

    const calculated = problem0020(inputLimit);

    console.log(`PROBLEM 0020 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
