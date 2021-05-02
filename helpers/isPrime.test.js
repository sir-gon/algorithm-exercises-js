import { isPrime } from './isPrime.js';

describe('number is prime', () => {
  it('some numbers are prime', () => {
    expect.assertions(9);

    expect(isPrime(1)).toStrictEqual(true);
    expect(isPrime(2)).toStrictEqual(true);
    expect(isPrime(7)).toStrictEqual(true);
    expect(isPrime(13)).toStrictEqual(true);
    expect(isPrime(29)).toStrictEqual(true);

    expect(isPrime(4)).toStrictEqual(false);
    expect(isPrime(10)).toStrictEqual(false);
    expect(isPrime(100)).toStrictEqual(false);
    expect(isPrime(3000)).toStrictEqual(false);
  });
});
