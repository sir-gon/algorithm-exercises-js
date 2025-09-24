import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { rotLeft } from './ctci_array_left_rotation.js';

import ROT_LEFT_TEST_CASES from './ctci_array_left_rotation.testcases.json';

describe('ctci_array_left_rotation', () => {
  it('rotLeft Test cases', () => {
    expect.assertions(9);

    for (const test of ROT_LEFT_TEST_CASES) {
      const answer = rotLeft(test.input, test.d_rotations);

      console.debug(`rotLeft(${test.numbers}) solution found: ${answer}`);

      expect(answer).toStrictEqual(test.expected);
    }

    expect(ROT_LEFT_TEST_CASES).toHaveLength(8);
  });
});
