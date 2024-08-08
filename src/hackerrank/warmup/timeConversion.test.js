import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';
import { timeConversion } from './timeConversion.js';

describe('timeConversion', () => {
  it('timeConversion example', () => {
    expect.assertions(2);

    const tests = [
      { input: '12:01:00PM', answer: '12:01:00' },
      { input: '12:01:00AM', answer: '00:01:00' }
    ];

    for (const test of tests) {
      const calculated = timeConversion(test.input);
      console.log(`timeConversion(${test.input}) Test case 0: ${calculated}`);

      expect(calculated).toBe(test.answer);
    }
  });

  it('timeConversion test case 0', () => {
    expect.assertions(1);

    const input = '07:05:45PM';
    const solutionFound = '19:05:45';

    const calculated = timeConversion(input);

    console.log(`timeConversion solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
