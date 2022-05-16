/**
 * Number letter counts
 *
 * https://projecteuler.net/problem=18
 *
 *
 * Maximum path sum I
 *
 * By starting at the top of the triangle below and
 * moving to adjacent numbers on the row below, the maximum total
 * from top to bottom is 23.
 *
 * 3
 * 7 4
 * 2 4 6
 * 8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom of the triangle below:
 *
 * 75
 * 95 64
 * 17 47 82
 * 18 35 87 10
 * 20 04 82 47 65
 * 19 01 23 75 03 34
 * 88 02 77 73 07 63 67
 * 99 65 04 28 06 16 70 92
 * 41 41 26 56 83 40 80 70 33
 * 41 48 72 33 47 32 37 16 94 29
 * 53 71 44 65 25 43 91 52 97 51 14
 * 70 11 33 28 77 73 17 78 39 68 17 57
 * 91 71 52 38 17 14 91 43 58 50 27 29 48
 * 63 66 04 68 89 53 67 30 73 16 69 87 40 31
 * 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 *
 * NOTE: As there are only 16384 routes, it is possible to solve
 * this problem by trying every route. However, Problem 67, is the
 * same challenge with a triangle containing one-hundred rows; it
 * cannot be solved by brute force, and requires a clever method! ;o)
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * ResultNode found:
 * ////////////////////////////////////////////////////////////////////////////
 */

import { problem0018 } from './problem0018.js';
import data from './data/problem0018.json';

class BNode {
  constructor(value, l, r) {
    if (value instanceof BNode) {
      this.value = value.getValue();
      return;
    }
    if (typeof value === 'number') {
      this.value = value;
      return;
    }

    this.l = l instanceof BNode ? l : undefined;
    this.r = r instanceof BNode ? r : undefined;

    this.getValue = () => this.value;
  }

  getValue() {
    return this.value;
  }

  setLeft(left) {
    if (left instanceof BNode) {
      this.l = left;
      return;
    }
    if (typeof left === 'number') {
      this.l = new BNode(left);
      return;
    }

    throw new Error('left Value must be a number or BNode');
  }

  setRigth(right) {
    if (right instanceof BNode) {
      this.r = right;
      return;
    }
    if (typeof right === 'number') {
      this.r = new BNode(right);
      return;
    }

    throw new Error('rigth Value must be a number or BNode');
  }

  isLeaft() {
    if (!this.l && !this.r) return true;

    return false;
  }
}

function buildBNodeTree(dataTree, i, j) {
  if (!dataTree) return null;

  if (dataTree[i] && dataTree[i][j]) {
    const resultNode = new BNode(dataTree[i][j]);

    if (dataTree[i + 1] && dataTree[i + 1][j] && dataTree[i + 1][j + 1]) {
      // Next left coordinates: [i + 1][j]
      resultNode.setLeft(buildBNodeTree(dataTree, i + 1, j));

      // Next rigth coordinates: [i + 1][j + 1]
      resultNode.setRigth(buildBNodeTree(dataTree, i + 1, j + 1));
    }

    return resultNode;
  }
  return null;
}

function buildBNodeTreeWeigth(
  dataTree,
  i,
  j,
  rootValue = 0,
  leafCollector = null
) {
  if (!dataTree) return null;

  if (dataTree[i] && dataTree[i][j]) {
    const resultNode = new BNode(dataTree[i][j] + rootValue);

    if (dataTree[i + 1] && dataTree[i + 1][j] && dataTree[i + 1][j + 1]) {
      // Next left coordinates: [i + 1][j]
      resultNode.setLeft(
        buildBNodeTreeWeigth(
          dataTree,
          i + 1,
          j,
          resultNode.getValue(),
          leafCollector
        )
      );

      // Next rigth coordinates: [i + 1][j + 1]
      resultNode.setRigth(
        buildBNodeTreeWeigth(
          dataTree,
          i + 1,
          j + 1,
          resultNode.getValue(),
          leafCollector
        )
      );
    }

    if (resultNode.isLeaft()) {
      if (leafCollector) leafCollector.push(resultNode.getValue());
    }

    return resultNode;
  }
  return null;
}

const DEBUG =
  process.env._DEBUG === 'true' || process.env.DEBUG === '1' || false;

describe('problem 0018', () => {
  it('problem 0018 solution found', () => {
    expect.assertions(1);

    const solutionFound = null;

    console.log('data', data);

    // const valuesTree = buildBNodeTree(data, 0, 0);
    const leafs = [];
    const weightsTree = buildBNodeTreeWeigth(data, 0, 0, 0, leafs);

    // console.log('data', JSON.stringify(valuesTree, null, 4));
    // console.log('data', JSON.stringify(weightsTree, null, 4));
    console.log('leafs count', leafs.length, 'leafs', leafs);

    const max = leafs.reduce((a, b) => (a > b ? a : b));

    console.log('max', max);

    const calculated = problem0018(data, DEBUG);

    console.log(`PROBLEM 0018 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
