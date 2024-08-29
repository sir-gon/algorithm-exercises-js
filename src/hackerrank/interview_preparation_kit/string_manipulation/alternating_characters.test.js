import { describe, expect, it } from '@jest/globals';

import { alternatingCharacters } from './alternating_characters.js';
import TEST_CASES from './alternating_characters.testcases.json';

describe('alternatingCharacters', () => {
  it('alternatingCharacters test cases', () => {
    expect.assertions(9);

    TEST_CASES.forEach((testSet) => {
      testSet?.tests.forEach((test) => {
        const result = alternatingCharacters(test.input);

        expect(result).toStrictEqual(test.expected);
      });
    });
  });
});
