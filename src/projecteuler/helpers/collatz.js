/*
 * Collatz sequence
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 * example:
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 */

export const collatz = (n) => {
  if (n % 2 === 0) {
    return n / 2;
  }
  return 3 * n + 1;
};

export default { collatz };
