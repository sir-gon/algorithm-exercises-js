import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { maxSubsetSum } from './max_array_sum.js';

import TEST_CASES from './max_array_sum.testcases.json';
import TEST_CASE3 from './max_array_sum.testcase3.json';

const ALL_TEST_CASES = [...TEST_CASES, TEST_CASE3];

const DECIMAL_RADIX = 10;

describe('max_array_sum', () => {
  it('maxSubsetSum test cases', () => {
    expect.assertions(5);

    ALL_TEST_CASES.forEach((test) => {
      const answer = maxSubsetSum(test.input).toString(DECIMAL_RADIX);

      console.debug(`maxSubsetSum(${test.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });

    expect(ALL_TEST_CASES).toHaveLength(4);
  });

  it('maxSubsetSum edge case zero', () => {
    expect.assertions(1);

    const input = [];
    const expected = 0;

    const answer = maxSubsetSum(input);

    console.debug(`maxSubsetSum(${input}) solution found: ${answer}`);

    expect(answer).toStrictEqual(expected);
  });

  it('maxSubsetSum edge case one', () => {
    expect.assertions(1);

    const input = [1];
    const expected = 1;

    const answer = maxSubsetSum(input);

    console.debug(`maxSubsetSum(${input}) solution found: ${answer}`);

    expect(answer).toStrictEqual(expected);
  });
});
