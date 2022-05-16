/**
 * TODO create a unit-test suit
 */

export class BNode {
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

export function buildBNodeTree(dataTree, i, j) {
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

export function buildBNodeTreeWeigth(
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

export default {
  BNode,
  buildBNodeTree,
  buildBNodeTreeWeigth
};
