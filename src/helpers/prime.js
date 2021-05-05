// Prime checker
function isPrime(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function primeListGenerator(a = 2, b) {
  const result = [];

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

export { isPrime, primeListGenerator };
export default { isPrime, primeListGenerator };
