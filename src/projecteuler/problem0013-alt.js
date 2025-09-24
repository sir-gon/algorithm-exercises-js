/**
 * @link Problem definition [[docs/projecteuler/problem0013.md]]
 */

import { logger as console } from '../logger.js';

function problem0013alt(arrayOfNumbers, numberOfFirstDigits) {
  const radix = 10;

  let sum = BigInt(0);

  arrayOfNumbers.forEach((num) => {
    sum += BigInt(num);
  });

  console.debug(`Sum: ${sum}`);

  const firstDigits = Number.parseInt(
    sum.toString().slice(0, numberOfFirstDigits),
    radix
  );

  console.log(
    `First ${numberOfFirstDigits} digits of huge sume are ${firstDigits}`
  );

  return firstDigits;
}

export default problem0013alt;
export { problem0013alt };
