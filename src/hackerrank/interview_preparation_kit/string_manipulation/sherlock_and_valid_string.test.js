import { describe, expect, it } from '@jest/globals';

import { isValid } from './sherlock_and_valid_string.js';
import TEST_CASES from './sherlock_and_valid_string.testcases.json';

describe('isValid', () => {
  it('isValid test cases', () => {
    expect.assertions(10);

    const __YES__ = 'YES';

    TEST_CASES.forEach((test) => {
      const result = isValid(test.input) === __YES__;

      expect(result).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(9);
  });
});
