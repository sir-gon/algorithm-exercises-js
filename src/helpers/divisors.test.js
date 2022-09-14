import {
  divisors,
  divisorsUnique,
  abundance,
  nextPrimeFactor,
  primeFactors,
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

  it('next prime factor of a target number', () => {
    expect.assertions(5);

    expect(nextPrimeFactor(1)).toStrictEqual({
      'factor': 1,
      'carry': 1,
      'cycles': 0
    });
    expect(nextPrimeFactor(2)).toStrictEqual({
      'factor': 2,
      'carry': 1,
      'cycles': 1
    });
    expect(nextPrimeFactor(4)).toStrictEqual({
      'factor': 2,
      'carry': 2,
      'cycles': 1
    });
    expect(nextPrimeFactor(9)).toStrictEqual({
      'factor': 3,
      'carry': 3,
      'cycles': 2
    });
    expect(nextPrimeFactor(7)).toStrictEqual({
      'factor': 7,
      'carry': 1,
      'cycles': 6
    });
  });

  it('prime factors of number', () => {
    expect.assertions(5);

    expect(primeFactors(1)).toStrictEqual({ 'factors': [1], 'cycles': 1 });
    expect(primeFactors(2)).toStrictEqual({ 'factors': [2], 'cycles': 1 });
    expect(primeFactors(6)).toStrictEqual({ 'factors': [2, 3], 'cycles': 3 });
    expect(primeFactors(12)).toStrictEqual({
      'factors': [2, 2, 3],
      'cycles': 4
    });
    expect(primeFactors(120)).toStrictEqual({
      'factors': [2, 2, 2, 3, 5],
      'cycles': 9
    });
  });

  it('abundance of a integer number', () => {
    expect.assertions(3);

    expect(abundance(10)).toStrictEqual(___DIVISORS_DEFICIENT___);
    expect(abundance(12)).toStrictEqual(___DIVISORS_ABUNDANT___);
    expect(abundance(28)).toStrictEqual(___DIVISORS_PERFECT___);
  });
});
