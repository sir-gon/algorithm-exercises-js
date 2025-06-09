import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../logger.js';

import { euler001 } from './euler001.js';

import TEST_CASES from './euler001.testcases.json';

describe('euler001', () => {
  it('euler001 JSON Test Cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((test) => {
      const calculated = euler001(test.a, test.b, test.n);
      console.log(
        `euler001(${test.a}, ${test.b}, ${test.n}) solution found: ${test.answer}`
      );

      expect(calculated).toStrictEqual(test.answer);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
