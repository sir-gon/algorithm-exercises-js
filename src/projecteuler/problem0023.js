/**
 * Non-abundant sums
 *
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
 */

import { logger as console } from '../logger.js';

import { abundance, ___DIVISORS_ABUNDANT___, sum } from './helpers/index.js';

export function problem0023(_underLimit, _superLimit) {
  const allNumsList = [];
  const nonAbundantList = [];

  for (let i = 1; i < _underLimit; i++) {
    allNumsList.push(i);
  }

  // Produce a list of abundant numbers below limit
  for (let i = _underLimit; i <= _superLimit; i++) {
    const abundancyOf = abundance(i);

    if (abundancyOf === ___DIVISORS_ABUNDANT___) {
      nonAbundantList.push(i);
    }

    allNumsList.push(i);
  }

  console.debug(`all nums list size: ${allNumsList.length} => ${allNumsList}`);

  console.debug(
    `abundant nums list: ${nonAbundantList.length} => ${nonAbundantList}`
  );

  let sumsAbundantNums = [];

  // Produce a list of sums of pair of abundant numbers below limit
  for (let i = 0; i < nonAbundantList.length; i++) {
    // console.log(`${i} => ${nonAbundantList[i]}`);

    for (
      let j = 0;
      nonAbundantList[i] + nonAbundantList[j] <= _superLimit &&
      j < nonAbundantList.length;
      j++
    ) {
      sumsAbundantNums.push(nonAbundantList[i] + nonAbundantList[j]);
    }
  }

  // filter duplicates
  sumsAbundantNums = [...new Set(sumsAbundantNums)];

  console.debug(
    `sumsAbundantNums size: ${sumsAbundantNums.length}. result => ${sumsAbundantNums}`
  );

  // All numbers below limit that not present in list of sums of pair of abundant numbers
  const found = allNumsList.filter((x) => !sumsAbundantNums.includes(x));

  console.debug(`found size: ${found.length}, found => ${found}`);

  const result = sum(found);

  console.log(`result ${result}`);

  return result;
}

export default { problem0023 };
