import { logger as console } from '../logger.js';

import { divisors, isPrime } from './helpers/index.js';

function problem0003(_top) {
  const divs = divisors(_top);
  let i;

  // not-unique divisors are always even, then the middle term is:
  const middle = Math.ceil(divs.length / 2) - 1;

  // check half divisors, each is Prime? wich is largest?
  let maxPrimeFactor;

  console.log(`Divisors of ${_top}: ${divs}`);

  i = middle;
  do {
    const prime = isPrime(divs[i]);

    console.debug(`${divs[i]} is Prime? ${prime}`);

    if (prime) maxPrimeFactor = divs[i];

    i -= 1;
  } while (i >= 0 && !maxPrimeFactor);

  console.log(`${maxPrimeFactor}`); // Solution found 6857

  return maxPrimeFactor;
}

export default problem0003;
export { problem0003 };
