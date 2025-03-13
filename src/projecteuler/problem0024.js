/**
 * @link Problem definition [[docs/projecteuler/problem0024.md]]
 */

import { logger as console } from '../logger.js';

const factorial = (n) => {
  let i = n;
  let out = 1;
  while (i > 1) {
    out *= i;
    i -= 1;
  }
  return out;
};

const permute = (symbols, target) => {
  const choices = symbols.split('');
  let answer = '';
  let min = 0;

  while (choices.length > 0) {
    let index = 0;
    const combos = factorial(choices.length - 1);
    min += combos;
    while (target > min) {
      index += 1;
      min += combos;
    }
    answer += choices.splice(index, 1);
    min -= combos;
  }

  return answer;
};

function problem0024(inputElements, inputPermutationToFind) {
  const permutationFound = permute(inputElements, inputPermutationToFind);

  console.debug(`result ${String(permutationFound)}`);

  return permutationFound;
}

export default { problem0024 };
export { problem0024 };
