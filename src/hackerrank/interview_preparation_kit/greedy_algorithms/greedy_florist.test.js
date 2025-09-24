import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { getMinimumCost } from './greedy_florist.js';

import TEST_CASES from './greedy_florist.testcases.json';

describe('greedy_florist', () => {
  it('getMinimumCost test cases', () => {
    expect.assertions(4);

    for (const test of TEST_CASES) {
      const answer = getMinimumCost(test.k, test.contests);

      console.debug(
        `getMinimumCost(${test.k}, ${test.contests}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(3);
  });
});
