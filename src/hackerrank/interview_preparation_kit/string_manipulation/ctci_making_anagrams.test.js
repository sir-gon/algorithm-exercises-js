import { describe, expect, it } from '@jest/globals';

import { makeAnagram } from './ctci_making_anagrams.js';
import TEST_CASES from './ctci_making_anagrams.testcases.json';

describe('makeAnagram', () => {
  it('makeAnagram test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const result = makeAnagram(test.a, test.b);

      expect(result).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
