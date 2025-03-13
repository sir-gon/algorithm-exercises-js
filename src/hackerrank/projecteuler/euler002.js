/**
 * @link Problem definition [[docs/hackerrank/projecteuler/euler002.md]]
 */

function fiboEvenSum(n) {
  let fibo1 = 1n;
  let fibo2 = 1n;
  let total = 0n;

  while (fibo1 + fibo2 < n) {
    const fibo = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibo;

    if (fibo % 2n === 0n) {
      total += fibo;
    }
  }

  return total;
}

function euler002(n) {
  return fiboEvenSum(n);
}

export default { euler002 };
export { euler002 };
