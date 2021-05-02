// problem0003.js

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

import { divisors, isPrime } from './helpers/index.js';

function problem0003(_top, _DEBUG) {
  let middle;
  let divs = divisors(_top, _DEBUG);
  let i;

  if (divs.length % 2 === 0)
  {
    middle = (divs.length/2) -1;
  } else {
    middle = (divs.length) - 1;
  }

  // check half divisors, each is Prime? wich is largest?
  let maxPrimeFactor;

  i = middle;
  do
  {
    let prime = isPrime(divs[i]);

    if (_DEBUG) console.log(`${divs[i]} is Prime? ${prime}`)

    if(prime)
    maxPrimeFactor = divs[i];

    i--;
  } while(i >= 0 && !maxPrimeFactor)

  if (_DEBUG) console.log(`${maxPrimeFactor}`) // Solution found 6857

  return maxPrimeFactor;
}

export default problem0003;
export { problem0003 };
