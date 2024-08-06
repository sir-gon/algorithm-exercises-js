import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { sherlockAndAnagrams } from './sherlock_and_anagrams.js';
import TEST_CASES from './sherlock_and_anagrams.testcases.json';

describe('sherlock_and_anagrams', () => {
  it('sherlockAndAnagrams test cases', () => {
    expect.assertions(15);

    TEST_CASES.forEach((testSet) => {
      testSet.tests.forEach((test) => {
        const answer = sherlockAndAnagrams(test.input);

        console.debug(
          `sherlockAndAnagrams(${test.input}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });
});
