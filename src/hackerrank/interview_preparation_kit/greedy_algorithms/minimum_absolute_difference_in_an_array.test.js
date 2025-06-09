import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { minimumAbsoluteDifference } from './minimum_absolute_difference_in_an_array.js';

import TEST_CASES from './minimum_absolute_difference_in_an_array.testcases.json';

describe('minimum_absolute_difference_in_an_array', () => {
  it('minimumAbsoluteDifference test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const answer = minimumAbsoluteDifference(test.input);

      console.debug(
        `minimumAbsoluteDifference(${test.input}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
