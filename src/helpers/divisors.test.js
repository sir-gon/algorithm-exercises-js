import { divisors } from './divisors.js';

describe('divisors of a number', () => {
  it('divisors of a number of some consecutives positive integers', () => {
    expect.assertions(4);

    expect(divisors(1)).toStrictEqual([1]);
    expect(divisors(2)).toStrictEqual([1, 2]);

    expect(divisors(10)).toStrictEqual([1, 2, 5, 10]);
    expect(divisors(12)).toStrictEqual([1, 2, 3, 4, 6, 12]);
  });
});
