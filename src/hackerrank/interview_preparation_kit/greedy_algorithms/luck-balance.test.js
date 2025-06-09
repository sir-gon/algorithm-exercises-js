import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { luckBalance } from './luck-balance.js';

import TEST_CASES from './luck-balance.testcases.json';

describe('luck-balance', () => {
  it('luckBalance test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const answer = luckBalance(test.k, test.contests);

      console.debug(
        `luckBalance(${test.k}, ${test.contests}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
