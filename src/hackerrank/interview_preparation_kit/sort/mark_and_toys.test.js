import { describe, expect, it } from '@jest/globals';

import { maximumToys } from './mark_and_toys.js';
import TEST_CASES from './mark_and_toys.testcases.json';

describe('maximumToys', () => {
  it('maximumToys test cases', () => {
    expect.assertions(4);

    for (const test of TEST_CASES) {
      const result = maximumToys(test.prices, test.budget);

      expect(result).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(3);
  });
});
