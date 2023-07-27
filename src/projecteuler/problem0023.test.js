import { logger as console } from '../logger.js';

import { problem0023 } from './problem0023.js';

describe('problem 0023', () => {
  it('problem 0023 solution found', () => {
    expect.assertions(1);

    const solutionFound = 4179871;
    const inputUnderLimit = 12;
    const inputSuperLimit = 28123;

    const calculated = problem0023(inputUnderLimit, inputSuperLimit);

    console.log(`PROBLEM 0023 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
