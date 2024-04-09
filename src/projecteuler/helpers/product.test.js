import { describe, expect, it } from '@jest/globals';
import { product } from './product.js';

describe('product of all numbers in array', () => {
  it('product of some positive, negative or zero integers', () => {
    expect.assertions(1);
    expect(product([0, -1, 2, -3, 4])).toBe(0);
  });

  it('product of some consecutives positive integers', () => {
    expect.assertions(1);

    expect(product([1, 2, 3, 4])).toBe(24);
  });

  it('product of some positive or negative integers', () => {
    expect.assertions(1);
    expect(product([-1, -2, 1, 2])).toBe(4);
  });

  it('product of empty list', () => {
    expect.assertions(2);

    expect(product()).toBe(0);
    expect(product([])).toBe(0);
  });
});
