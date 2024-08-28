import { describe, expect, it } from '@jest/globals';

import { isBalanced } from './balanced_brackets.js';
import TEST_CASES from './balanced_brackets.testcases.json';

describe('isBalanced', () => {
  it('isBalanced test cases', () => {
    expect.assertions(8);

    const __YES__ = 'YES';

    TEST_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const result = isBalanced(test.input) === __YES__;

        expect(result).toStrictEqual(test.expected);
      });
    });
  });
});
