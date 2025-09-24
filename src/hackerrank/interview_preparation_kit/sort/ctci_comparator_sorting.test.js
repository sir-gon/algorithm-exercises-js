import { describe, expect, it } from '@jest/globals';

import { Player } from './ctci_comparator_sorting.Player.js';

import {
  SortablePlayer,
  comparatorSorting,
  comparatorSortingPrint
} from './ctci_comparator_sorting.js';
import TEST_CASES from './ctci_comparator_sorting.testcases.json';

describe('comparatorSorting', () => {
  it('test_player', () => {
    expect.assertions(1);

    const _NAME_ = 'name';
    const _SCORE_ = 0;

    const aPlayer = new Player(_NAME_, _SCORE_);
    const aPlayerAsString = aPlayer.toString();
    const aExpected = 'name 0';

    expect(aExpected).toStrictEqual(aPlayerAsString);
  });

  it('test_comparator_sorting', () => {
    expect.assertions(9);

    for (const test of TEST_CASES) {
      const players = [];

      for (const player of test.input) {
        players.push(new SortablePlayer(player.name, player.score));
      }

      expect(comparatorSorting(players)).toStrictEqual(test.sorted);
      expect(comparatorSortingPrint(players)).toBeUndefined();
    }

    expect(TEST_CASES).toHaveLength(4);
  });
});
