import { describe, expect, it } from '@jest/globals';

import { Node } from '../../lib/Node.js';
import { Tree, swapNodes, __INITIAL_LEVEL__ } from './swap_nodes_algo.js';
import TESTCASES from './swap_nodes_algo.testcases.json';

describe('swap_nodes_algo', () => {
  it('testbuildTree_empty', () => {
    expect.assertions(4);

    const input = [];
    const tree = new Tree(input);
    const expected = [1];

    expect(tree.flatTree()).toStrictEqual(expected);
    expect(tree.getRoot()).not.toBeNull();
    expect(tree.getRoot()).toBeInstanceOf(Node);
    expect(tree.getRoot().data).toBe(__INITIAL_LEVEL__);
  });

  it('testbuild_malformed_tree', () => {
    expect.assertions(4);

    const input = [[], []];
    const tree = new Tree(input);
    const tresult = tree.flatTree();
    const expected = [__INITIAL_LEVEL__];

    expect(tresult).toStrictEqual(expected);
    expect(tree.getRoot()).not.toBeNull();
    expect(tree.getRoot()).toBeInstanceOf(Node);
    expect(tree.getRoot().data).toBe(__INITIAL_LEVEL__);
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
