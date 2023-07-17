/**
 * Large sum
 *
 * https://projecteuler.net/problem=13
 *
 * Work out the first ten digits of the sum of the following
 * one-hundred 50-digit numbers.
 *
 * See: src/data/problem0013.json
 */

import logger from '../logger.js';

import { problem0013 } from './problem0013.js';
import inputNums from './data/problem0013.json' assert { type: 'json' };

describe('problem 0013', () => {
  it('problem 0013 solution found', () => {
    expect.assertions(1);

    const solutionFound = 5537376230;
    const firtsDigits = 10;

    const calculated = problem0013(inputNums, firtsDigits);

    logger.info(`PROBLEM 0013 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
