import { logger as console } from '../logger.js';

import { problem0006 } from './problem0006.js';

describe('problem 0006', () => {
  it('problem 0006 solution found', () => {
    expect.assertions(1);

    const solutionFound = 25164150;

    const calculated = problem0006();

    console.log(`PROBLEM 0006 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
