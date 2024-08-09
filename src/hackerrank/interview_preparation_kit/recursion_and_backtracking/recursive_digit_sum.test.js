import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { superDigit } from './recursive_digit_sum.js';
import TEST_CASES from './recursive_digit_sum.testcases.json';

describe('recursive_digit_sum', () => {
  it('superDigit test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const answer = superDigit(test.n, test.k);

      console.debug(`superDigit(${test.n}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
