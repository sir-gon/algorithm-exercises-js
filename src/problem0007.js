// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

import { isPrime } from './helpers/index.js';

function problem0007(_DEBUG) {
  const top = 10001;
  const bottom = 1;

  const primes = [];
  let i = bottom;

  do {
    i += 1;

    if (isPrime(i)) {
      primes.push(i);
      if (_DEBUG)
        console.log(`Prime found ${i} put in position: ${primes.length}`);
    }
  } while (primes.length < top);

  if (_DEBUG) console.log(`primes count: ${primes.length}`);
  if (_DEBUG)
    console.log(`${top} prime number is: ${primes[primes.length - 1]}`);

  return primes[primes.length - 1];
}

export default problem0007;
export { problem0007 };
