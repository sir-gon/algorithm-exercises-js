/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci_fibonacci_numbers.md]]
 */

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

export default { fibonacci };
export { fibonacci };
