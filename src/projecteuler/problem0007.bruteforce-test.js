/* istanbul ignore file */
/* c8 ignore start */

import { logger as console } from '../logger.js';

import { problem0007 } from './problem0007.js';

describe('problem 0007 BRUTEFORCE', () => {
  // eslint-disable-next-line jest/no-disabled-tests
  it('problem 0007 BRUTEFORCE large', () => {
    expect.assertions(1);

    const solutionFound = 104743;
    const top = 10001;

    const calculated = problem0007(top);

    console.log(`PROBLEM 0007 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});

/* c8 ignore stop */
