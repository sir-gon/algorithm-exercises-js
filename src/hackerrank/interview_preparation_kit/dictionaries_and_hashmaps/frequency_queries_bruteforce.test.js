import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { freqQuery } from './frequency_queries_bruteforce.js';
import SMALL_TEST_CASES from './frequency_queries_testcases.json';

describe('frequency_queries', () => {
  it('freqQuery test cases', () => {
    expect.assertions(5);

    for (const value of SMALL_TEST_CASES) {
      const answer = freqQuery(value.input);

      console.debug(`freqQuery(${value.input}) solution found: ${answer}`);

      expect(answer).toStrictEqual(value.expected);
    }

    expect(SMALL_TEST_CASES).toHaveLength(4);
  });

  it('freqQuery border case', () => {
    expect.assertions(1);

    expect(() => {
      freqQuery([[4, 1]]);
    }).toThrow('Invalid operation');
  });
});
