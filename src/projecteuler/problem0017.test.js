/**
 * Number letter counts
 *
 * https://projecteuler.net/problem=17
 *
 *
 * If the numbers 1 to 5 are written out in words:
 * one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19
 * letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written
 * out in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342
 * (three hundred and forty-two) contains 23 letters and
 * 115 (one hundred and fifteen) contains 20 letters. The use of "and"
 * when writing out numbers is in compliance with British usage.
 */

import logger from '../logger.js';

import { problem0017 } from './problem0017.js';

describe('problem 0017', () => {
  it('problem 0017 solution found', () => {
    expect.assertions(1);

    const init = 1;
    const last = 1000;
    const solutionFound = 21124;

    const calculated = problem0017(init, last);

    logger.info(`PROBLEM 0017 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
