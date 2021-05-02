// WARNING: this is an exploratorial helper, NOT A SOLUTION

import { isPrime } from './helpers/isPrime.js';

const top = 20;

// Just to test end condition. Is divisible by all, but not the minimal.
// test = 1*2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17*18*19*20

// Only with Prime numbers? Nope, this doesn't satisfies the condition
const test = 1 * 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19 * 20;

console.log(`${test}`);

const primes = [];

for (let i = 1; i <= top; i++) {
  const prime = isPrime(i);

  console.log(`${i} is Prime? ${prime}`);

  if (prime) primes.push(i);
}

console.log(primes);
