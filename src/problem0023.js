/**
 *
 * Non-abundant sums

 *
 * https://projecteuler.net/problem=23
 *
 * A perfect number is a number for which the sum of its proper
 * divisors is exactly equal to the number. For example, the sum
 * of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
 * which means that 28 is a perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors is
 * less than n and it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the
 * smallest number that can be written as the sum of two abundant numbers is 24.
 * By mathematical analysis, it can be shown that all integers greater
 * than 28123 can be written as the sum of two abundant numbers.
 * However, this upper limit cannot be reduced any further by analysis
 * even though it is known that the greatest number that cannot be expressed
 *  as the sum of two abundant numbers is less than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as
 * the sum of two abundant numbers.
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result: 4179871
 * ////////////////////////////////////////////////////////////////////////////
 */

import util from 'util';
import { abundance, ___DIVISORS_ABUNDANT___, sum } from './helpers/index.js';

export function problem0023(_DEBUG) {
  if (_DEBUG) {
    util.inspect.defaultOptions.maxArrayLength = null;
    util.inspect.defaultOptions.colors = true;
    util.inspect.defaultOptions.depth = null;
    util.inspect.defaultOptions.showHidden = false;
  }

  const underLimit = 12;
  const superLimit = 28123;
  const allNumsList = [];
  const nonAbundantList = [];

  for (let i = 1; i < underLimit; i++) {
    allNumsList.push(i);
  }

  // Produce a list of abundant numbers below limit
  for (let i = underLimit; i <= superLimit; i++) {
    const abundancyOf = abundance(i);

    if (abundancyOf === ___DIVISORS_ABUNDANT___) {
      nonAbundantList.push(i);
    }

    allNumsList.push(i);
  }

  if (_DEBUG) {
    console.log(
      'all nums list size:',
      allNumsList.length,
      `=>`,
      util.inspect(allNumsList, {})
    );

    console.log(
      'non abundant nums list:',
      nonAbundantList.length,
      `=>`,
      util.inspect(nonAbundantList, {})
    );
  }

  let sumsAbundantNums = [];

  // Produce a list of sums of pair of abundant numbers below limit
  for (let i = 0; i < nonAbundantList.length; i++) {
    // console.log(`${i} => ${nonAbundantList[i]}`);

    for (
      let j = 0;
      nonAbundantList[i] + nonAbundantList[j] <= superLimit &&
      j < nonAbundantList.length;
      j++
    ) {
      sumsAbundantNums.push(nonAbundantList[i] + nonAbundantList[j]);
    }
  }

  // filter duplicates
  sumsAbundantNums = [...new Set(sumsAbundantNums)];

  if (_DEBUG) {
    console.log(
      'sumsAbundantNums size:',
      sumsAbundantNums.length,
      `result`,
      util.inspect(sumsAbundantNums, {})
    );
  }

  // All numbers below limit that not present in list of sums of pair of abundant numbers
  const found = allNumsList.filter((x) => !sumsAbundantNums.includes(x));

  if (_DEBUG) {
    console.log(
      'found size:',
      found.length,
      'found =>',
      util.inspect(found, {})
    );
  }

  const result = sum(found);

  if (_DEBUG) {
    console.log(`result`, result);
  }

  return result;
}

export default { problem0023 };
