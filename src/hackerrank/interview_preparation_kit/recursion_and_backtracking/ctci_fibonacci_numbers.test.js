import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { fibonacci } from './ctci_fibonacci_numbers.js';
import TEST_CASES from './ctci_fibonacci_numbers.testcases.json';

describe('ctci_fibonacci_numbers', () => {
  it('fibonacci test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const answer = fibonacci(test.input);

      console.debug(`fibonacci(${test.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
