import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { rotLeft, rotLeftOne } from './ctci_array_left_rotation.js';

const ROT_LEFT_ONE_TEST_CASES = [
  { numbers: [1, 2, 3, 4, 5], expected: [2, 3, 4, 5, 1] },
  { numbers: [2, 3, 4, 5, 1], expected: [3, 4, 5, 1, 2] },
  { numbers: [3, 4, 5, 1, 2], expected: [4, 5, 1, 2, 3] },
  { numbers: [4, 5, 1, 2, 3], expected: [5, 1, 2, 3, 4] },
  { numbers: [5, 1, 2, 3, 4], expected: [1, 2, 3, 4, 5] }
];

const ROT_LEFT_TEST_CASES = [
  { numbers: [1, 2, 3, 4, 5], d_rotations: 4, expected: [5, 1, 2, 3, 4] }
];

describe('ctci_array_left_rotation', () => {
  it('rotLeftOne Test Cases', () => {
    expect.assertions(5);

    ROT_LEFT_ONE_TEST_CASES.forEach((value) => {
      const answer = rotLeftOne(value.numbers);

      console.debug(`rotLeftOne(${value.numbers}) solution found: ${answer}`);

      expect(answer).toStrictEqual(value.expected);
    });
  });

  it('rotLeft Test cases', () => {
    expect.assertions(1);

    ROT_LEFT_TEST_CASES.forEach((value) => {
      const answer = rotLeft(value.numbers, value.d_rotations);

      console.debug(`rotLeft(${value.numbers}) solution found: ${answer}`);

      expect(answer).toStrictEqual(value.expected);
    });
  });
});
