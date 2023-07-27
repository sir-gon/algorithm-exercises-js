import { logger as console } from '../logger.js';

import { problem0022 } from './problem0022.js';

import inputNames from './data/p022_names.json' assert { type: 'json' };

describe('problem 0022', () => {
  it('problem 0022 solution found', () => {
    expect.assertions(1);

    const solutionFound = 871198282;

    const calculated = problem0022(inputNames);

    console.log(`PROBLEM 0022 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
