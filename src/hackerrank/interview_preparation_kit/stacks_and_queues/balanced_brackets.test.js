import { describe, expect, it } from '@jest/globals';

import { isBalanced } from './balanced_brackets.js';
import TEST_CASES from './balanced_brackets.testcases.json';

describe('isBalanced', () => {
  it('isBalanced test cases', () => {
    expect.assertions(10);

    const __YES__ = 'YES';

    let totalTestsCount = 0;

    for (const testSet of TEST_CASES) {
      for (const test of testSet.tests) {
        const result = isBalanced(test.input) === __YES__;

        expect(result).toStrictEqual(test.expected);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(8);
  });
});
