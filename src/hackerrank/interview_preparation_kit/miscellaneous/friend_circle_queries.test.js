import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { maxCircle } from './friend_circle_queries.js';
import TEST_CASES from './friend_circle_queries.testcases.json';

describe('friend_circle_queries', () => {
  it('maxCircle test cases', () => {
    expect.assertions(5);

    TEST_CASES.forEach((test) => {
      const answer = maxCircle(test.arr);

      console.debug(`maxCircle(${test.arr}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    });

    expect(TEST_CASES).toHaveLength(4);
  });
});
