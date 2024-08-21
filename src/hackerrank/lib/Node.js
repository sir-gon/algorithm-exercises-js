/* istanbul ignore file */

export class Node {
  left;

  right;

  data;

  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

export default { Node };
