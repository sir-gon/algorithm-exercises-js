/**
 * Counting Sundays
 *
 * https://projecteuler.net/problem=19
 *
 * You are given the following information, but you may prefer
 * to do some research for yourself.
 *
 * *  1 Jan 1900 was a Monday.
 * *  Thirty days has September,
 *    April, June and November.
 *    All the rest have thirty-one,
 *    Saving February alone,
 *    Which has twenty-eight, rain or shine.
 *    And on leap years, twenty-nine.
 * *  A leap year occurs on any year evenly divisible by 4,
 *    but not on a century unless it is divisible by 400.
 *
 * How many Sundays fell on the first of the month during the
 * twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

import { logger as console } from '../logger.js';

import { __SUNDAY__ } from './constants/datetime.js';
import { problem0019 } from './problem0019.js';

describe('problem 0019', () => {
  it('problem 0019 partial', () => {
    expect.assertions(1);

    const solutionFound = 2;

    const sinceInput = 1900;
    const untilInput = 1901;

    const calculated = problem0019(__SUNDAY__, sinceInput, untilInput);

    console.log(`PROBLEM 0019 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0019 solution found', () => {
    expect.assertions(1);

    const solutionFound = 171;

    const sinceInput = 1901;
    const untilInput = 2000;

    const calculated = problem0019(__SUNDAY__, sinceInput, untilInput);

    console.log(`PROBLEM 0019 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });

  it('problem 0019 solution found with default values', () => {
    expect.assertions(1);

    const solutionFound = 171;

    const calculated = problem0019();

    console.log(`PROBLEM 0019 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
