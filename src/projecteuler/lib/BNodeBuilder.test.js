import { describe, expect, it } from '@jest/globals';
import { BNode } from './BNode.js';
import { BNodeBuilder } from './BNodeBuilder.js';

const data = [[75], [95, 64]];
describe('class BNodeBuilder for binary trees', () => {
  it('tree of BNode: building tree with null value', () => {
    expect.assertions(1);

    const tree = BNodeBuilder.buildBNodeTree();

    expect(tree).toBeNull();
  });

  it('tree of BNode: building tree with values', () => {
    expect.assertions(1);

    const tree = BNodeBuilder.buildBNodeTree(data, 0, 0);

    const comparedTree = new BNode(75, new BNode(95), new BNode(64));

    expect(tree).toMatchObject(comparedTree);
  });

  it('tree of BNode: building tree with invalid coordinates', () => {
    expect.assertions(2);

    // invalid coordinates
    expect(BNodeBuilder.buildBNodeTree(data, 0, 5)).toBeNull();
    expect(BNodeBuilder.buildBNodeTree(data, 5, 5)).toBeNull();
  });
});

describe('class BNodeBuilder for binary weight trees', () => {
  it('tree of BNode: building weigth tree with null value', () => {
    expect.assertions(1);

    const tree = BNodeBuilder.buildBNodeTreeWeigth();

    expect(tree).toBeNull();
  });

  it('tree of BNode: building weigth tree with values', () => {
    expect.assertions(1);

    const tree = BNodeBuilder.buildBNodeTreeWeigth(data, 0, 0);

    const comparedTree = new BNode(75, new BNode(170), new BNode(139));

    expect(tree).toMatchObject(comparedTree);
  });

  it('tree of BNode: building weigth tree with invalid coordinates', () => {
    expect.assertions(2);

    // invalid coordinates
    expect(BNodeBuilder.buildBNodeTreeWeigth(data, 0, 5)).toBeNull();
    expect(BNodeBuilder.buildBNodeTreeWeigth(data, 5, 5)).toBeNull();
  });
});
