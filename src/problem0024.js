/**
 * Lexicographic Permutations
 *
 * https://projecteuler.net/problem=24
 *
 * A permutation is an ordered arrangement of objects.
 * For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
 * If all of the permutations are listed numerically or alphabetically,
 * we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
 *
 * 012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

import logger from './logger.js';

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

export function problem0024(inputElements, inputPermutationToFind) {
  const permutationFound = permute(inputElements, inputPermutationToFind);

  logger.debug(`result ${String(permutationFound)}`);

  return permutationFound;
}

export default { problem0024 };
