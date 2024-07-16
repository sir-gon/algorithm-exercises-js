import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { flippingBits } from './flipping-bits.js';

const TEST_CASES = [
  {
    title: 'Sample Test Case 0',
    tests: [
      {
        input: 2147483647,
        expected: 2147483648
      },
      {
        input: 1,
        expected: 4294967294
      },
      {
        input: 0,
        expected: 4294967295
      }
    ]
  },
  {
    title: 'Sample Test Case 1',
    tests: [
      {
        input: 4,
        expected: 4294967291
      },
      {
        input: 123456,
        expected: 4294843839
      }
    ]
  },
  {
    title: 'Sample Test Case 2',
    tests: [
      {
        input: 0,
        expected: 4294967295
      },
      {
        input: 802743475,
        expected: 3492223820
      },
      {
        input: 35601423,
        expected: 4259365872
      }
    ]
  }
];

describe('flipping bits', () => {
  it('flipping bits test cases', () => {
    expect.assertions(8);

    TEST_CASES.forEach((testSet) => {
      testSet.tests.forEach((test) => {
        const answer = flippingBits(test.input);

        console.debug(`luckBalance(${test.input}) solution found: ${answer}`);

        expect(answer).toStrictEqual(test.expected);
      });
    });
  });

  it('flipping bits isolated test case', () => {
    expect.assertions(1);

    const input = 9;
    const expected = 4294967286;

    const answer = flippingBits(input);

    console.debug(`luckBalance(${input}) solution found: ${answer}`);

    expect(answer).toStrictEqual(expected);
  });
});
