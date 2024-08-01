import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { minimumBribesTransform, TOO_CHAOTIC_ERROR } from './new_year_chaos.js';

const TEST_CASES = [
  { title: 'Test Case 0-0', input: [2, 1, 5, 3, 4], expected: '3' },
  {
    title: 'Test Case 0-1',
    input: [2, 5, 1, 3, 4],
    expected: TOO_CHAOTIC_ERROR
  },
  {
    title: 'Test Case 1-1',
    input: [5, 1, 2, 3, 7, 8, 6, 4],
    expected: TOO_CHAOTIC_ERROR
  },
  { title: 'Test Case 1-2', input: [1, 2, 5, 3, 7, 8, 6, 4], expected: '7' },
  { title: 'Test Case 2', input: [1, 2, 5, 3, 4, 7, 8, 6], expected: '4' }
];

describe('new_year_chaos', () => {
  it('minimumBribes Test Cases', () => {
    expect.assertions(5);

    TEST_CASES.forEach((value) => {
      const answer = minimumBribesTransform(value.input);

      console.debug(
        `minimumBribesTransform(${value.input}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(value.expected);
    });
  });
});
