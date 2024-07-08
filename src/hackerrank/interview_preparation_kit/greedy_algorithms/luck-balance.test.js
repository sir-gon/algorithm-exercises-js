import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { luckBalance } from './luck-balance.js';

const TEST_CASES = [
  {
    'title': 'Sample Test case 0',
    'k': 3,
    'contests': [
      [5, 1],
      [2, 1],
      [1, 1],
      [8, 1],
      [10, 0],
      [5, 0]
    ],
    'expected': 29
  },
  {
    'title': 'Sample Test case 1',
    'k': 5,
    'contests': [
      [13, 1],
      [10, 1],
      [9, 1],
      [8, 1],
      [13, 1],
      [12, 1],
      [18, 1],
      [13, 1]
    ],
    'expected': 42
  },
  {
    'title': 'Sample Test case 1',
    'k': 2,
    'contests': [
      [5, 1],
      [4, 0],
      [6, 1],
      [2, 1],
      [8, 0]
    ],
    'expected': 21
  }
];

describe('luck-balance', () => {
  it('luckBalance test cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((test) => {
      const answer = luckBalance(test.k, test.contests);

      console.debug(
        `luckBalance(${test.k}, ${test.contests}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(test.expected);
    });
  });
});
