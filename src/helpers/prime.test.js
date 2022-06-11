import { isPrime, primeListGenerator } from './prime.js';

describe('number is prime', () => {
  it('some numbers are prime', () => {
    expect.assertions(10);

    expect(isPrime(1)).toBe(false);
    expect(isPrime(1)).toBe(false);

    expect(isPrime(2)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(29)).toBe(true);

    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(100)).toBe(false);
    expect(isPrime(3000)).toBe(false);
  });

  it('generate a list of prime numbers', () => {
    expect.assertions(2);

    expect(primeListGenerator(2, 10)).toStrictEqual([2, 3, 5, 7]);
    expect(primeListGenerator(3, 20)).toStrictEqual([3, 5, 7, 11, 13, 17, 19]);
  });

  it('border case generate minimal prime list', () => {
    expect.assertions(1);

    expect(primeListGenerator()).toStrictEqual([]);
  });
});
