import { collatz } from './collatz.js';

describe('collatz sequence', () => {
  it('next value of collatz sequence', () => {
    expect.assertions(8);

    // 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

    expect(collatz(13)).toBe(40);
    expect(collatz(40)).toBe(20);
    expect(collatz(20)).toBe(10);
    expect(collatz(5)).toBe(16);
    expect(collatz(16)).toBe(8);
    expect(collatz(8)).toBe(4);
    expect(collatz(4)).toBe(2);
    expect(collatz(2)).toBe(1);
  });
});
