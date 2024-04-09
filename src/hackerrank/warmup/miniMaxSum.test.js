import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { miniMaxSum } from './miniMaxSum.js';

describe('miniMaxSum', () => {
  it('miniMaxSum test case 0', () => {
    expect.assertions(1);

    expect(() => {
      miniMaxSum([]);
    }).toThrow('Empty input');
  });

  it('miniMaxSum test case 1', () => {
    expect.assertions(2);

    const tests = [
      { input: [1, 2, 3, 4, 5], answer: '10 14' },
      { input: [5, 4, 3, 2, 1], answer: '10 14' }
    ];

    for (const test of tests) {
      const solutionFound = miniMaxSum(test.input);
      console.log(`miniMaxSum(${test.input}) solution found: ${solutionFound}`);

      expect(solutionFound).toBe(test.answer);
    }
  });
});
