import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { flippingBitsAlt } from './flipping-bits-alt.js';

import TEST_CASES from './flipping-bits.testcases.json';

describe('flipping bits', () => {
  it('flipping bits test cases', () => {
    expect.assertions(10);

    let totalTestsCount = 0;

    for (const testSet of TEST_CASES) {
      for (const test of testSet.tests) {
        const answer = flippingBitsAlt(test.input);

        console.debug(
          `flippingBitsAlt(${test.input}) solution found: ${answer}`
        );

        expect(answer).toStrictEqual(test.expected);

        totalTestsCount += 1;
      }
    }

    expect(TEST_CASES).toHaveLength(3);
    expect(totalTestsCount).toBe(8);
  });
});
