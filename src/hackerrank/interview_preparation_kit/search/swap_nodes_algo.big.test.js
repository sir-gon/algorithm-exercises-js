import { describe, expect, it } from '@jest/globals';

import { swapNodes, buildTree, flatTree } from './swap_nodes_algo.js';
import BIG_TEST_CASES from './swap_nodes_algo.big.testcases.json';

describe('swap_nodes_algo', () => {
  it('build_tree and plain test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const toTest = buildTree(test.nodes);
      const tResult = flatTree(toTest);

      expect(tResult).toStrictEqual(test.flattened);
    });
  });

  it('swapNodes test cases', () => {
    expect.assertions(1);

    BIG_TEST_CASES.forEach((test) => {
      const tResult = swapNodes(test.nodes, test.queries);

      expect(tResult).toStrictEqual(test.expected);
    });
  });
});
