import { logger as console } from '../logger.js';

import { problem0013 } from './problem0013.js';
import { problem0013alt } from './problem0013-alt.js';
import inputNums from './data/problem0013.json' assert { type: 'json' };

describe('problem 0013', () => {
  it('problem 0013 solution found', () => {
    expect.assertions(2);

    const solutionFound = 5537376230;
    const firtsDigits = 10;

    let calculated;

    calculated = problem0013(inputNums, firtsDigits);
    console.log(`PROBLEM 0013 solution found: ${calculated}`);
    expect(calculated).toBe(solutionFound);

    calculated = problem0013alt(inputNums, firtsDigits);
    console.log(`PROBLEM 0013 Alternative solution found: ${calculated}`);
    expect(calculated).toBe(solutionFound);
  });
});
