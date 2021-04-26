// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

import { isPrime } from './helpers/isPrime.js'

let top = 10001;
let bottom = 1;

let primes = [];
let i = bottom;

do {

    i++

    if(isPrime(i))
    {
        primes.push(i);
        console.log(`Prime found ${i} put in position: ${primes.length}`)
    }

} while (primes.length < top) 

console.log(`primes count: ${primes.length}`)
console.log(`${top} prime number is: ${primes[primes.length-1]}`)