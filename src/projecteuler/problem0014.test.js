import { logger as console } from '../logger.js';

import { problem0014 } from './problem0014.js';

describe('problem 0014', () => {
  it('problem 0014 solution found', () => {
    expect.assertions(1);

    const solutionFound = 837799;
    const top = 1000000;

    const calculated = problem0014(solutionFound, top);

    console.log(`PROBLEM 0014 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0014 border case bottom is negative', () => {
    expect.assertions(1);

    const bottom = -1;

    expect(() => {
      problem0014(bottom);
    }).toThrow('bottom must be a positive integer');
  });

  it('problem 0014 border case bottom higher than top', () => {
    expect.assertions(1);

    const top = 0;
    const bottom = 10;

    expect(() => {
      problem0014(bottom, top);
    }).toThrow('top must be and integer, higher than bottom');
  });

  it('problem 0014 default values', () => {
    expect.assertions(1);

    const calculated = problem0014();

    console.log(`PROBLEM 0014 solution found: ${calculated}`);

    expect(calculated).toBe(9);
  });
});
