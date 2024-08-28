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
    expect.assertions(2);

    const aPlayer = new Player();
    const aPlayerAsString = aPlayer.toString();
    const aExpected = '';

    expect(aExpected).toStrictEqual(aPlayerAsString);

    const bPlayer = new Player();
    const comparatorAnswerExpected = 0;

    expect(aPlayer.comparator(bPlayer)).toStrictEqual(comparatorAnswerExpected);
  });

  it('test_comparator_sorting', () => {
    expect.assertions(8);

    TEST_CASES.forEach((test) => {
      const players = [];

      for (const player of test.input) {
        players.push(new SortablePlayer(player.name, player.score));
      }

      expect(comparatorSorting(players)).toStrictEqual(test.sorted);
      expect(comparatorSortingPrint(players)).toBeUndefined();
    });
  });
});
