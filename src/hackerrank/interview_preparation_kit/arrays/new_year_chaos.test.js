import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { minimumBribes, minimumBribesText } from './new_year_chaos.js';

import TEST_CASES from './new_year_chaos.testcases.json';

describe('new_year_chaos', () => {
  it('minimumBribes Test Cases', () => {
    expect.assertions(6);

    TEST_CASES.forEach((test) => {
      const answer = minimumBribesText(test.input);
      minimumBribes(test.input);

      console.debug(
        `minimumBribesText(${test.input}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(5);
  });
});
