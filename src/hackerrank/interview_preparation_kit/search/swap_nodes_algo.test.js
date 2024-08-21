import { describe, expect, it } from '@jest/globals';

import { buildTree, flatTree, swapNodes } from './swap_nodes_algo.js';
import TESTCASES from './swap_nodes_algo.testcases.json';

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

  it('build tree and flattened tree test cases', () => {
    expect.assertions(4);

    TESTCASES.forEach((test) => {
      const toTest = buildTree(test.nodes);
      const tresult = flatTree(toTest);

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
