// Prime checker
export const isPrime = (n) => {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

export const primeListGenerator = (a, b = 2) => {
  const result = [];

  if (!a || !b || a < 2 || b < 2 || b < a) return result;

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
};

export default { isPrime, primeListGenerator };
