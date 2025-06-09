import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { birthdayCakeCandles } from './birthdayCakeCandles.js';

describe('birthdayCakeCandles', () => {
  it('miniMaxSum border case', () => {
    expect.assertions(1);

    expect(() => {
      birthdayCakeCandles([]);
    }).toThrow('Empty input');
  });

  it('birthdayCakeCandles Test case 0', () => {
    expect.assertions(3);

    const tests = [
      { input: [3, 2, 1, 3], answer: 2 },
      { input: [1, 2, 3, 3], answer: 2 }
    ];

    for (const test of tests) {
      const calculated = birthdayCakeCandles(test.input);
      console.log(
        `birthdayCakeCandles(${test.input}) Test case 0: ${calculated}`
      );

      expect(calculated).toBe(test.answer);
    }

    expect(tests).toHaveLength(2);
  });
});
