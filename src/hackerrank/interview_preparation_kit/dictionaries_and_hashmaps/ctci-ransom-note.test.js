import { describe, expect, it } from '@jest/globals';
import { logger as console } from '../../../logger.js';

import { checkMagazine, checkMagazineText } from './ctci-ransom-note.js';
import TEST_CASES from './ctci-ransom-note.testcases.json';

describe('ctci_ransom_note', () => {
  it('checkMagazine test cases', () => {
    expect.assertions(4);

    for (const value of TEST_CASES) {
      const answer = checkMagazineText(value.magazine, value.note);
      checkMagazine(value.magazine, value.note);

      console.debug(
        `checkMagazine(${value.magazine}, ${value.note}) solution found: ${answer}`
      );

      expect(answer).toStrictEqual(value.expected);
    }

    expect(TEST_CASES).toHaveLength(3);
  });
});
