import { logger as console } from '../../logger.js';
import { divisibleSumPairs } from './divisibleSumPairs.js';

describe('divisible Sum Pairs', () => {
  it('divisible Sum Pairs Test case 0', () => {
    expect.assertions(1);

    const n = 6;
    const k = 3;
    const ar = [1, 3, 2, 6, 1, 2];
    const solutionFound = 5;

    const calculated = divisibleSumPairs(n, k, ar);

    console.log(`Divisible Sum Pairs Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
