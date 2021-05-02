// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

/// ////////////////////////////////////////////////////////////////////////////

import { isPrime, sum } from './helpers/index.js';

function problem0010(_DEBUG) {
  const top = 2000000;
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
  } while (i < top);

  if (_DEBUG) console.log(`primes count: ${primes.length}`);
  if (_DEBUG) console.log(`Sum of primes below ${top} is: ${sum(primes)}`);

  return sum(primes);
}

export default problem0010;
export { problem0010 };

problem0010(true);
