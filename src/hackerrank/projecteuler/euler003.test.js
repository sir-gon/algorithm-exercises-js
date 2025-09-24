import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';

import { euler003 } from './euler003.js';

import TEST_CASES from './euler003.testcases.json';

describe('euler003', () => {
  it('euler003 JSON Test cases', () => {
    expect.assertions(3);

    for (const test of TEST_CASES) {
      const calculated = euler003(test.n);
      console.log(`euler003(${test.n}) solution found: ${test.expected}`);

      expect(`${calculated}`).toBe(`${test.expected}`);
    }

    expect(TEST_CASES).toHaveLength(2);
  });

  it('euler003 Edge case', () => {
    expect.assertions(2);

    const expectedMessage = 'n must be greater than 2';

    expect(() => {
      euler003(0);
    }).toThrow(expectedMessage);

    expect(() => {
      euler003(1);
    }).toThrow(expectedMessage);
  });
});
