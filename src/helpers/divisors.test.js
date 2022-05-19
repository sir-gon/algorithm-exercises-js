import {
  divisors,
  abundancy,
  ___DIVISORS_DEFICIENT___,
  ___DIVISORS_PERFECT___,
  ___DIVISORS_ABUNDANT___
} from './divisors.js';

describe('divisors of a number', () => {
  it('divisors of a number of some consecutives positive integers', () => {
    expect.assertions(4);

    expect(divisors(1)).toStrictEqual([1]);
    expect(divisors(2)).toStrictEqual([1, 2]);

    expect(divisors(10)).toStrictEqual([1, 2, 5, 10]);
    expect(divisors(12)).toStrictEqual([1, 2, 3, 4, 6, 12]);
  });

  it('abundancy of a integer number', () => {
    expect.assertions(3);

    expect(abundancy(10)).toStrictEqual(___DIVISORS_DEFICIENT___);
    expect(abundancy(12)).toStrictEqual(___DIVISORS_ABUNDANT___);
    expect(abundancy(28)).toStrictEqual(___DIVISORS_PERFECT___);
  });
});
