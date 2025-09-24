import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { maxMin } from './angry_children.js';

import TEST_CASES from './angry_children.testcases.json';

describe('angry_children', () => {
  it('maxMin test cases', () => {
    expect.assertions(5);

    for (const test of TEST_CASES) {
      const answer = maxMin(test.k, test.arr);

      console.debug(`maxMin(${test.k}, ${test.arr}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    }

    expect(TEST_CASES).toHaveLength(4);
  });
});
