import { problem0001 } from './problem0001.js';

const DEBUG =
  process.env.DEBUG === 'true' || process.env.DEBUG === '1' || false;

describe('problem 0001', () => {
  it('problem 0001 solution found', () => {
    expect.assertions(1);

    const solutionFound = 233168;
    const calculated = problem0001(DEBUG);

    console.log(calculated);

    expect(calculated).toBe(solutionFound);
  });
});
