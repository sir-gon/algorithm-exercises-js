import { sum } from './sum.js';

describe('sum all numbers in array', () => {
  it('sum of some consecutives positive integers', () => {
    expect.assertions(1);

    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it('sum of some positive or negative integers', () => {
    expect.assertions(1);
    expect(sum([-1, -2, 1, 2])).toBe(0);
  });

  it('sum of empty list', () => {
    expect.assertions(2);

    expect(sum()).toBe(0);
    expect(sum([])).toBe(0);
  });
});
