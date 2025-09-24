import { describe, expect, it } from '@jest/globals';

import { alternatingCharacters } from './alternating_characters.js';
import TEST_CASES from './alternating_characters.testcases.json';

describe('alternatingCharacters', () => {
  it('alternatingCharacters test cases', () => {
    expect.assertions(11);

    let totalTestsCount = 0;

    for (const testSet of TEST_CASES) {
      for (const test of testSet.tests) {
        const result = alternatingCharacters(test.input);

        expect(result).toStrictEqual(test.expected);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(9);
  });
});
