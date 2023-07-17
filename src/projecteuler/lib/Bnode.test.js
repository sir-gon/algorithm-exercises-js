import { BNode } from './BNode.js';

describe('class BNode for binary trees', () => {
  it('class BNode basic value', () => {
    expect.assertions(4);

    const testNodeA = new BNode(5);
    const testNodeB = new BNode(testNodeA);
    const testNodeC = new BNode().setValue(5);
    const testNodeD = new BNode().setValue(testNodeC);

    expect(testNodeA.getValue()).toBe(5);
    expect(testNodeB.getValue()).toBe(5);
    expect(testNodeC.getValue()).toBe(5);
    expect(testNodeD.getValue()).toBe(5);
  });

  it('class BNode left value', () => {
    expect.assertions(2);

    const valueA = 'A';
    const valueLeft = 'Z';

    const testNodeA = new BNode(valueA);
    testNodeA.setLeft(valueLeft);

    const testNodeB = new BNode('B');

    testNodeB.setLeft(testNodeA);

    expect(testNodeA.getLeft().getValue()).toStrictEqual(valueLeft);

    expect(testNodeB.getLeft().getValue()).toStrictEqual(valueA);
  });

  it('class BNode right value', () => {
    expect.assertions(2);

    const valueA = 'A';
    const valueRight = 'Z';

    const testNodeA = new BNode(valueA);
    testNodeA.setRight(valueRight);

    const testNodeB = new BNode('B');

    testNodeB.setRight(testNodeA);

    expect(testNodeA.getRight().getValue()).toStrictEqual(valueRight);

    expect(testNodeB.getRight().getValue()).toStrictEqual(valueA);
  });

  it('class BNode leaf condition', () => {
    expect.assertions(3);

    const valueA = 'A';

    const testNodeA = new BNode(valueA);

    const testNodeB = new BNode('B');
    const testNodeC = new BNode('C');

    testNodeA.setLeft(testNodeB);
    testNodeA.setRight(testNodeC);

    expect(testNodeA.isLeaft()).toBe(false);
    expect(testNodeB.isLeaft()).toBe(true);
    expect(testNodeB.isLeaft()).toBe(true);
  });
});
