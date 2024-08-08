import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { checkMagazine } from './ctci-ransom-note.js';

const TEST_CASES = [
  {
    title: 'Sample Test Case 0',
    magazine: ['give', 'me', 'one', 'grand', 'today', 'night'],
    note: ['give', 'one', 'grand', 'today'],
    expected: 'Yes'
  },
  {
    title: 'Sample Test Case 1',
    magazine: ['two', 'times', 'three', 'is', 'not', 'four'],
    note: ['two', 'times', 'two', 'is', 'four'],
    expected: 'No'
  },
  {
    title: 'Sample Test',
    magazine: ['two', 'two', 'times', 'three', 'is', 'not', 'four'],
    note: ['two', 'times', 'two', 'is', 'four'],
    expected: 'Yes'
  }
];

describe('ctci_ransom_note', () => {
  it('checkMagazine test cases', () => {
    expect.assertions(3);

    TEST_CASES.forEach((value) => {
      const answer = checkMagazine(value.magazine, value.note);

      console.debug(
        `checkMagazine(${value.magazine}, ${value.note}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(value.expected);
    });
  });
});
