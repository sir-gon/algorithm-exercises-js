/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/sort/ctci-comparator-sorting.md]]
 */

import { Player } from './ctci_comparator_sorting.Player.js';

export class SortablePlayer extends Player {
  name = '';

  score = 0;

  constructor(name, score) {
    super();

    this.name = name;
    this.score = score;
  }

  comparator(bPlayer) {
    if (this.score > bPlayer.score) {
      return -1;
    }
    if (this.score < bPlayer.score) {
      return 1;
    }
    if (this.name < bPlayer.name) {
      return -1;
    }
    if (this.name > bPlayer.name) {
      return 1;
    }

    return 0;
  }
}

export function comparatorSorting(players) {
  const sortedPlayers = [...players].sort((a, b) => a.comparator(b));

  return sortedPlayers.map((player) => player.toString());
}

export function comparatorSortingPrint(players) {
  console.log(comparatorSorting(players)?.join('\n'));
}

export default { Player, SortablePlayer, comparatorSorting };
