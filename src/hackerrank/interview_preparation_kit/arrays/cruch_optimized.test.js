import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import TEST_CASES from './cruch_testcases_test.json';

import { arrayManipulation } from './cruch_optimized.js';

describe('arrays: crush (optimized)', () => {
  it('arrayManipulation Test Cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const answer = arrayManipulation(test.n, test.queries);

      console.debug(
        `rotLeftOne(${test.n}, ${test.queries}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
