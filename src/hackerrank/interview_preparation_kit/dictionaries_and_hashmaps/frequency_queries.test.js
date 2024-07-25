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
  }
];

describe('frequency_queries', () => {
  it('freqQuery test cases', () => {
    expect.assertions(1);

    TEST_CASES.forEach((value) => {
      const answer = freqQuery(value.input);

      console.debug(`checkMagazine(${value.input}) solution found: ${answer}`);

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
