import { describe, expect, it } from '@jest/globals';

import { Tree, swapNodes } from './swap_nodes_algo.js';
import BIG_TEST_CASES from './swap_nodes_algo.big.testcases.json';

describe('swap_nodes_algo', () => {
  it('build_tree and plain test cases', () => {
    expect.assertions(2);

    for (const test of BIG_TEST_CASES) {
      const tree = new Tree(test.nodes);
      const tresult = tree.flatTree();

      expect(tresult).toStrictEqual(test.flattened);
    }

    expect(BIG_TEST_CASES).toHaveLength(1);
  });

  it('swapNodes test cases', () => {
    expect.assertions(2);

    for (const test of BIG_TEST_CASES) {
      const tResult = swapNodes(test.nodes, test.queries);

      expect(tResult).toStrictEqual(test.expected);
    }

    expect(BIG_TEST_CASES).toHaveLength(1);
  });
});
