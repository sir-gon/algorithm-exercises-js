import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { countTriplets } from './count_triplets_1_optmized.js';
import SMALL_TEST_CASES from './count_triplets_1_testcases.json';

const BIG_TEST_CASES = [
  {
    title: 'Sample Test Case 2',
    input: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    r: 1,
    expected: 161700
  }
];

describe('count_triplets_1 (optimized)', () => {
  it('countTriplets small test cases', () => {
    expect.assertions(4);

    SMALL_TEST_CASES.forEach((test) => {
      const answer = countTriplets(test.input, test.r);

      console.debug(
        `countTriplets(${test.input}, ${test.r}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });

  it('countTriplets big test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const answer = countTriplets(test.input, test.r);

      console.debug(
        `countTriplets(${test.input}, ${test.r}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
