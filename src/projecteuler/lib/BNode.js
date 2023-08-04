export default class BNode {
  constructor(value, l, r) {
    this.value = null;
    this.l = null;
    this.r = null;

    this.setValue(value);
    this.setLeft(l);
    this.setRight(r);
  }

  setValue(value) {
    if (value instanceof BNode) {
      this.value = value.getValue();
    } else {
      this.value = value;
    }

    return this;
  }

  getValue() {
    return this.value;
  }

  setLeft(left) {
    if (left === null || left === undefined) {
      this.l = null;

      return;
    }

    if (left instanceof BNode) {
      this.l = left;
    } else {
      this.l = new BNode(left);
    }
  }

  getLeft() {
    return this.l;
  }

  setRight(right) {
    if (right === null || right === undefined) {
      this.r = null;

      return;
    }

    if (right instanceof BNode) {
      this.r = right;
    } else {
      this.r = new BNode(right);
    }
  }

  getRight() {
    return this.r;
  }

  isLeaft() {
    return !this.l && !this.r;
  }
}

export { BNode };
