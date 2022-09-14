import {
  divisors,
  divisorsUnique,
  abundance,
  ___DIVISORS_DEFICIENT___,
  ___DIVISORS_PERFECT___,
  ___DIVISORS_ABUNDANT___
} from './divisors.js';

describe('divisors of a number', () => {
  it('divisors of a number', () => {
    expect.assertions(4);

    expect(divisors(1)).toStrictEqual([1]);
    expect(divisors(2)).toStrictEqual([1, 2]);

    expect(divisors(9)).toStrictEqual([1, 3, 3, 9]);
    expect(divisors(16)).toStrictEqual([1, 2, 4, 4, 8, 16]);
  });

  it('divisors of a number without repeated factors', () => {
    expect.assertions(4);

    expect(divisorsUnique(1)).toStrictEqual([1]);
    expect(divisorsUnique(2)).toStrictEqual([1, 2]);

    expect(divisorsUnique(10)).toStrictEqual([1, 2, 5, 10]);
    expect(divisorsUnique(16)).toStrictEqual([1, 2, 4, 8, 16]);
  });

  it('abundance of a integer number', () => {
    expect.assertions(3);

    expect(abundance(10)).toStrictEqual(___DIVISORS_DEFICIENT___);
    expect(abundance(12)).toStrictEqual(___DIVISORS_ABUNDANT___);
    expect(abundance(28)).toStrictEqual(___DIVISORS_PERFECT___);
  });
});
