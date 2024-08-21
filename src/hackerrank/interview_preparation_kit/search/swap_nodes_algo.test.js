import { describe, expect, it } from '@jest/globals';

import { Node } from '../../lib/Node.js';
import {
  buildTree,
  flatTree,
  swapBranch,
  swapNodes,
  __INITIAL_LEVEL__
} from './swap_nodes_algo.js';
import TEStCASES from './swap_nodes_algo.testcases.json';

describe('swap_nodes_algo', () => {
  it('testbuildTree_empty', () => {
    expect.assertions(1);

    const tInput = [];
    const toTest = buildTree(tInput);
    const tresult = flatTree(toTest);
    const expected = [1];

    expect(tresult).toStrictEqual(expected);
  });

  it('testbuild_malformed_tree', () => {
    expect.assertions(1);

    const input = [[], []];
    const toTest = buildTree(input);
    const tresult = flatTree(toTest);
    const expected = [1];

    expect(tresult).toStrictEqual(expected);
  });

  it('testswapBranch empty', () => {
    expect.assertions(1);

    const tInput = null;
    const tresult = swapBranch(tInput);
    const expected = null;

    expect(tresult).toStrictEqual(expected);
  });

  it('testswapBranch', () => {
    expect.assertions(1);

    const tInput = new Node(__INITIAL_LEVEL__);
    tInput.left = new Node(2);
    tInput.right = new Node(3);
    const tresult = flatTree(swapBranch(tInput));
    const expected = [3, 1, 2];

    expect(tresult).toStrictEqual(expected);
  });

  it('build tree and flattened tree test cases', () => {
    expect.assertions(4);

    TEStCASES.forEach((test) => {
      const toTest = buildTree(test.nodes);
      const tresult = flatTree(toTest);

      expect(tresult).toStrictEqual(test.flattened);
    });
  });

  it('swapNodes test cases', () => {
    expect.assertions(4);

    TEStCASES.forEach((test) => {
      const tresult = swapNodes(test.nodes, test.queries);

      expect(tresult).toStrictEqual(test.expected);
    });
  });
});
