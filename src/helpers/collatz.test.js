import { collatz } from './collatz.js';

describe('collatz sequence', () => {
  it('next value of collatz sequence', () => {
    expect.assertions(8);

    // 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

    expect(collatz(13)).toStrictEqual(40);
    expect(collatz(40)).toStrictEqual(20);
    expect(collatz(20)).toStrictEqual(10);
    expect(collatz(5)).toStrictEqual(16);
    expect(collatz(16)).toStrictEqual(8);
    expect(collatz(8)).toStrictEqual(4);
    expect(collatz(4)).toStrictEqual(2);
    expect(collatz(2)).toStrictEqual(1);
  });
});
