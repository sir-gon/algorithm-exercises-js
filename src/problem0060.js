import { isPrime } from './helpers/index.js';

const top = 5;
const primes = [3];
let currentPrime = 3;

function testPrimeConcat(a, b) {
  const test1 = `${a}${b}`;
  const test2 = `${b}${a}`;

  const tResult1 = isPrime(parseInt(test1, 10));
  const tResult2 = isPrime(parseInt(test2, 10));

  console.log(
    `${test1}? is Prime? ${tResult1} | ${test2}? is Prime? ${tResult2}`
  );

  return tResult1 && tResult2;
}

do {
  let found;
  let i = currentPrime;

  if (isPrime(i)) {
    do {
      found = testPrimeConcat(i, currentPrime);

      if (found) {
        currentPrime = i;
        primes.push(i);
      }
    } while (!found);
  }

  i += 1;
} while (primes.length < top);
