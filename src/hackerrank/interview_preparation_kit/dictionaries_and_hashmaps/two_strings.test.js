import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { twoStrings } from './two_strings.js';
import TEST_CASES from './two_strings.testcases.json';

describe('two_strings', () => {
  it('twoStrings test cases', () => {
    expect.assertions(8);

    TEST_CASES.forEach((testCase) => {
      testCase.tests.forEach((test) => {
        const answer = twoStrings(test.s1, test.s2);

        console.debug(
          `twoStrings(${test.s1}, ${test.s2}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });
});
