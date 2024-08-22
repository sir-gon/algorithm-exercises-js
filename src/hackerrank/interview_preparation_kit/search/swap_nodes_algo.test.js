import { describe, expect, it } from '@jest/globals';

import { Tree, swapNodes } from './swap_nodes_algo.js';
import TESTCASES from './swap_nodes_algo.testcases.json';

describe('swap_nodes_algo', () => {
  it('testbuildTree_empty', () => {
    expect.assertions(2);

    const tInput = [];
    const tree = new Tree(tInput);
    const expected = [1];

    expect(tree.flatTree()).toStrictEqual(expected);
    expect(tree.getRoot()).not.toBeNull();
  });

  it('testbuild_malformed_tree', () => {
    expect.assertions(1);

    const input = [[], []];
    const tree = new Tree(input);
    const tresult = tree.flatTree();
    const expected = [1];

    expect(tresult).toStrictEqual(expected);
  });

  it('build tree and flattened tree test cases', () => {
    expect.assertions(4);

    TESTCASES.forEach((test) => {
      const tree = new Tree(test.nodes);
      const tresult = tree.flatTree();

      expect(tresult).toStrictEqual(test.flattened);
    });
  });

  it('swapNodes test cases', () => {
    expect.assertions(4);

    TESTCASES.forEach((test) => {
      const tresult = swapNodes(test.nodes, test.queries);

      expect(tresult).toStrictEqual(test.expected);
    });
  });
});
