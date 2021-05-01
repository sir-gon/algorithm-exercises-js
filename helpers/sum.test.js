import { sum } from './sum.js';

describe('Sum all numbers in array', () => {

  test('Sum of some consecutives positive integers', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  test('Sum of some positive or negative integers', () => {
    expect(sum([-1, -2, 1, 2])).toBe(0);
  });


});
