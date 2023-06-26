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

import { problem0024 } from './problem0024.js';

describe('problem 0024', () => {
  it('problem 0024 solution found small case', () => {
    expect.assertions(1);

    const solutionFound = ['A', 'D', 'C', 'B'];
    const inputElements = 'ABCD'.split('');
    const inputPermutationToFind = 6;

    const calculated = problem0024(inputElements, inputPermutationToFind);

    logger.info(`PROBLEM 0024 solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });

  it('problem 0024 solution found full solution', () => {
    expect.assertions(1);

    const solutionFound = ['2', '7', '8', '3', '9', '1', '5', '4', '6', '0'];
    const inputElements = '0123456789'.split('');
    const inputPermutationToFind = 1000000;

    const calculated = problem0024(inputElements, inputPermutationToFind);

    logger.info(`PROBLEM 0024 solution found: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
