import { describe, expect, it } from '@jest/globals';

import { countSwaps, SortableGroup } from './ctci_bubble_sort.js';
import TEST_CASES from './ctci_bubble_sort.testcases.json';

describe('countSwaps', () => {
  it('build tree and flattened tree test cases', () => {
    expect.assertions(7);

    TEST_CASES.forEach((test) => {
      const sortable = new SortableGroup(test.input);
      const resultSort = sortable.bubble_sort().group;
      const resultPrint = countSwaps(test.input);

      expect(resultPrint).toBeUndefined();
      expect(resultSort).toStrictEqual(test.sorted);
    });

    expect(TEST_CASES).toHaveLength(3);
  });
});
