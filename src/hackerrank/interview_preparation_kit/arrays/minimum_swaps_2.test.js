import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { minimumSwaps } from './minimum_swaps_2.js';

import TEST_CASES from './minimum_swaps_2.testcases.json';

describe('minimum swaps 2', () => {
  it('minimumSwaps', () => {
    expect.assertions(4);

    for (const test of TEST_CASES) {
      const answer = minimumSwaps(test.input);

      console.debug(`minimumSwaps(${test.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(3);
  });
});
