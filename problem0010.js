// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

///////////////////////////////////////////////////////////////////////////////

import { isPrime, sum } from './helpers/index.js'

let top = 2000000;
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

} while (i < top) 

console.log(`primes count: ${primes.length}`)
console.log(`Sum of primes below ${top} is: ${sum(primes)}`)