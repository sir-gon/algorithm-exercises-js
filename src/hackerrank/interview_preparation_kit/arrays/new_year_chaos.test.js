import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import testingModule from './new_year_chaos.js';

import TEST_CASES from './new_year_chaos.testcases.json';

describe('new_year_chaos', () => {
  it('minimumBribes Test Cases', () => {
    expect.assertions(5);

    TEST_CASES.forEach((test) => {
      const answer = testingModule.minimumBribesText(test.input);
      testingModule.minimumBribes(test.input);

      console.debug(
        `minimumBribesText(${test.input}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
