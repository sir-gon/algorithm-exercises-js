/**
 * @link Problem definition [[docs/hackerrank/projecteuler/euler001.md]]
 */

// Function to return gcd of a and b
function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
}

function sumAp(n, d) {
  // Number of terms
  const _n = Math.floor(n / d);

  return Math.floor((_n * (1 + _n) * d) / 2);
}

// Function to find the sum of all multiples of a and b below n
function euler001(a, b, n) {
  // Since, we need the sum of multiples less than N
  const _n = n - 1;
  const lcm = Math.floor((a * b) / gcd(a, b));

  return sumAp(_n, a) + sumAp(_n, b) - sumAp(_n, lcm);
}

export default { euler001 };
export { euler001 };
