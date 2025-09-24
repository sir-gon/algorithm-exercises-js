import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { flippingBits } from './flipping-bits.js';
import TEST_CASES from './flipping-bits.testcases.json';

describe('flipping bits', () => {
  it('flipping bits test cases', () => {
    expect.assertions(10);

    let totalTestsCount = 0;

    for (const testSet of TEST_CASES) {
      for (const test of testSet.tests) {
        const answer = flippingBits(test.input);

        console.debug(`flippingBits(${test.input}) solution found: ${answer}`);

        expect(answer).toStrictEqual(test.expected);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(8);
  });

  it('flipping bits isolated test case', () => {
    expect.assertions(1);

    const input = 9;
    const expected = 4294967286;

    const answer = flippingBits(input);

    console.debug(`flippingBits(${input}) solution found: ${answer}`);

    expect(answer).toStrictEqual(expected);
  });
});
