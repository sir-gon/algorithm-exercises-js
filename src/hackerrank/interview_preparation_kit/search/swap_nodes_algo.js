/**
 * @link Problem export functioninition [[docs/hackerrank/interview_preparation_kit/search/swap-nodes-algo.md]]
 */

import { logger as console } from '../../../logger.js';
import { Node } from '../../lib/Node.js';

// CONSTANTS
export const __INITIAL_LEVEL__ = 1;
export const __ROOT_VALUE__ = 1;
export const __LEAF_VALUE__ = -1;
const __RADIX__ = 10;

export function callbackCollectNodes(root, collect, level) {
  if (root) {
    if (collect?.[level] === undefined) {
      // eslint-disable-next-line no-param-reassign
      collect[level] = [root];
    } else {
      collect[level].push(root);
    }
  }
}

export function traverseInOrderCollector(root, collect, level, callbackFn) {
  if (root?.left !== null) {
    traverseInOrderCollector(root?.left, collect, level + 1, callbackFn);
  }

  callbackFn(root, collect, level);

  if (root?.right !== null) {
    traverseInOrderCollector(root?.right, collect, level + 1, callbackFn);
  }

  return collect;
}

export function buildTree(indexes) {
  const indexesCopy = [...indexes];
  const root = new Node(__ROOT_VALUE__);
  let currentLevel = 1;
  const nodeCollector = {};
  nodeCollector[currentLevel] = [root];

  while (indexesCopy.length > 0) {
    nodeCollector = {};

    traverseInOrderCollector(
      root,
      nodeCollector,
      __INITIAL_LEVEL__,
      callbackCollectNodes
    );

    const lastLevel = parseInt(
      Object.keys(nodeCollector)
        .sort((a, b) => parseInt(b, __RADIX__) - parseInt(a, __RADIX__))
        .shift(),
      __RADIX__
    );

    const levelSize = Math.min(
      indexesCopy.length,
      nodeCollector[currentLevel]?.length
    );

    const nextLevel = currentLevel + 1;

    if (levelSize > 0) {
      nodeCollector[nextLevel] = [];
    }

    for (let i = 0; i < levelSize; i++) {
      const currentNode = nodeCollector[currentLevel][i];
      const newElement = indexesCopy.shift();

      if ((newElement?.[0] ?? __LEAF_VALUE__) !== __LEAF_VALUE__) {
        currentNode.left = new Node(newElement[0]);
        nodeCollector[nextLevel].push(currentNode.left);
      }
      if ((newElement?.[1] ?? __LEAF_VALUE__) !== __LEAF_VALUE__) {
        currentNode.right = new Node(newElement[1]);
        nodeCollector[nextLevel].push(currentNode.right);
      }
    }

    if (nodeCollector[nextLevel].length > 0) {
      currentLevel = nextLevel;
    }
  }

  return root;
}

export function flatTree(root) {
  const nodeCollector = [];

  function traverseInOrderFlat(node) {
    if (node?.left !== null) {
      traverseInOrderFlat(node?.left);
    }

    if (node) {
      nodeCollector.push(node);
    }

    if (node?.right !== null) {
      traverseInOrderFlat(node?.right);
    }
  }

  traverseInOrderFlat(root);

  const output = [];
  nodeCollector.forEach((node) => {
    output.push(node.data);
  });

  return output;
}

export function swapNodes(indexes, queries) {
  const tree = buildTree(indexes);
  const output = [];
  let nodeCollector = {};

  traverseInOrderCollector(
    tree,
    nodeCollector,
    __INITIAL_LEVEL__,
    callbackCollectNodes
  );

  nodeCollector = Object.fromEntries(
    Object.entries(nodeCollector).sort(
      ([a], [b]) => parseInt(a, __RADIX__) - parseInt(b, __RADIX__)
    )
  );

  let flattenedTree = flatTree(tree);

  console.debug(`Plain tree: ${flattenedTree}`);

  for (const query of queries) {
    for (const [level, nodeList] of Object.entries(nodeCollector)) {
      const tLevel = parseInt(level, __RADIX__);

      if (tLevel % query === 0) {
        for (const node of nodeList) {
          // swap branches
          [node.left, node.right] = [node.right, node.left];
        }
      }
    }

    flattenedTree = flatTree(tree);
    output.push(flattenedTree);
  }

  return output;
}

export default { swapNodes, __INITIAL_LEVEL__ };
