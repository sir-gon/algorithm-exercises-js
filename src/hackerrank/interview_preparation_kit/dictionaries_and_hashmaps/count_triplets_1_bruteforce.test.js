import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { countTriplets } from './count_triplets_1_bruteforce.js';

import SMALL_TEST_CASES from './count_triplets_1.small.testcases.json';

describe('count_triplets_1', () => {
  it('countTriplets test cases', () => {
    expect.assertions(5);

    SMALL_TEST_CASES.forEach((test) => {
      const answer = countTriplets(test.input, test.r);

      console.debug(
        `countTriplets(${test.input}, ${test.r}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });

    expect(SMALL_TEST_CASES).toHaveLength(4);
  });
});
