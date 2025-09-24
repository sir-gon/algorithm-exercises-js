import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { sherlockAndAnagrams } from './sherlock_and_anagrams.js';
import TEST_CASES from './sherlock_and_anagrams.testcases.json';

describe('sherlock_and_anagrams', () => {
  it('sherlockAndAnagrams test cases', () => {
    expect.assertions(17);

    let totalTestsCount = 0;

    for (const testSet of TEST_CASES) {
      for (const test of testSet.tests) {
        const answer = sherlockAndAnagrams(test.input);

        console.debug(
          `sherlockAndAnagrams(${test.input}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES).toHaveLength(4);
    expect(totalTestsCount).toBe(15);
  });
});
