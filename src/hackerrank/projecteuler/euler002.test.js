import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';

import { euler002 } from './euler002.js';

import TEST_CASES from './euler002.testcases.json';

describe('euler002', () => {
  it('euler002 JSON Test cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const calculated = euler002(test.n);
      console.log(`euler002(${test.n}) solution found: ${test.expected}`);

      expect(`${calculated}`).toBe(`${test.expected}`);
    });

    expect(TEST_CASES).toHaveLength(2);
  });
});
