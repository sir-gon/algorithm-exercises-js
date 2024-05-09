import { BNode } from './BNode.js';

export default class BNodeBuilder extends BNode {
  static buildBNodeTree(dataTree, i, j) {
    if (!dataTree) return null;

    if (dataTree[i]?.[j]) {
      const resultNode = new BNode(dataTree[i][j]);

      if (dataTree?.[i + 1]?.[j] && dataTree?.[i + 1]?.[j + 1]) {
        // Next left coordinates: [i + 1][j]
        resultNode.setLeft(BNodeBuilder.buildBNodeTree(dataTree, i + 1, j));

        // Next rigth coordinates: [i + 1][j + 1]
        resultNode.setRight(
          BNodeBuilder.buildBNodeTree(dataTree, i + 1, j + 1)
        );
      }

      return resultNode;
    }
    return null;
  }

  static buildBNodeTreeWeigth(
    dataTree,
    i,
    j,
    rootValue = 0,
    leafCollector = null
  ) {
    if (!dataTree) return null;

    if (dataTree[i]?.[j]) {
      const resultNode = new BNode(dataTree[i][j] + rootValue);

      if (dataTree[i + 1] && dataTree[i + 1][j] && dataTree[i + 1][j + 1]) {
        // Next left coordinates: [i + 1][j]
        resultNode.setLeft(
          BNodeBuilder.buildBNodeTreeWeigth(
            dataTree,
            i + 1,
            j,
            resultNode.getValue(),
            leafCollector
          )
        );

        // Next rigth coordinates: [i + 1][j + 1]
        resultNode.setRight(
          BNodeBuilder.buildBNodeTreeWeigth(
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
}

export { BNodeBuilder };
