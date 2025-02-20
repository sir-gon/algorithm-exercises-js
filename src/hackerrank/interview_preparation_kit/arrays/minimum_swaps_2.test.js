import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import ms2 from './minimum_swaps_2.js';

import TEST_CASES from './minimum_swaps_2.testcases.json';

describe('minimum swaps 2', () => {
  it('minimumSwaps', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const answer = ms2.minimumSwaps(test.input);

      console.debug(`minimumSwaps(${test.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
