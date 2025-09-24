import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import TEST_CASES from './cruch_testcases_test.json';

import { arrayManipulation } from './cruch_bruteforce.js';

describe('arrays: crush (bruteforce) small cases', () => {
  it('arrayManipulation Test Cases', () => {
    expect.assertions(4);

    for (const test of TEST_CASES) {
      const answer = arrayManipulation(test.n, test.queries);

      console.debug(
        `arrayManipulation(${test.n}, ${test.queries}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(3);
  });
});
