import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { freqQuery } from './frequency_queries.js';

const TEST_CASES = [
  {
    title: 'Sample Test Case 0',
    input: [
      [1, 5],
      [1, 6],
      [3, 2],
      [1, 10],
      [1, 10],
      [1, 6],
      [2, 5],
      [3, 2]
    ],
    expected: [0, 1]
  },
  {
    title: 'Sample Test Case 1',
    input: [
      [3, 4],
      [2, 1003],
      [1, 16],
      [3, 1]
    ],
    expected: [0, 1]
  },
  {
    title: 'Sample Test Case 2',
    input: [
      [1, 3],
      [2, 3],
      [3, 2],
      [1, 4],
      [1, 5],
      [1, 5],
      [1, 4],
      [3, 2],
      [2, 4],
      [3, 2]
    ],
    expected: [0, 1, 1]
  },
  {
    title: 'Sample Test Case 3',
    input: [
      [1, 3],
      [1, 38],
      [2, 1],
      [1, 16],
      [2, 1],
      [2, 2],
      [1, 64],
      [1, 84],
      [3, 1],
      [1, 100],
      [1, 10],
      [2, 2],
      [2, 1],
      [1, 67],
      [2, 2],
      [3, 1],
      [1, 99],
      [1, 32],
      [1, 58],
      [3, 2]
    ],
    expected: [1, 1, 0]
  }
];

describe('frequency_queries', () => {
  it('freqQuery test cases', () => {
    expect.assertions(4);

    TEST_CASES.forEach((value) => {
      const answer = freqQuery(value.input);

      console.debug(`freqQuery(${value.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(value.expected);
    });
  });

  it('freqQuery border case', () => {
    expect.assertions(1);

    expect(() => {
      freqQuery([[4, 1]]);
    }).toThrow('Invalid operation');
  });
});
