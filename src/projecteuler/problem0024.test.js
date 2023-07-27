import { logger as console } from '../logger.js';

import { problem0024 } from './problem0024.js';

describe('problem 0024', () => {
  it('problem 0024 solution found small case', () => {
    expect.assertions(1);

    const solutionFound = 'ADCB';
    const inputElements = 'ABCD';
    const inputPermutationToFind = 6;

    const calculated = problem0024(inputElements, inputPermutationToFind);

    console.log(`PROBLEM 0024 solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('problem 0024 solution found full solution', () => {
    expect.assertions(1);

    const solutionFound = '2783915460';
    const inputElements = '0123456789';
    const inputPermutationToFind = 1000000;

    const calculated = problem0024(inputElements, inputPermutationToFind);

    console.log(`PROBLEM 0024 solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
