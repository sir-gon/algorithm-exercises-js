/**
 *
 * <TITLE>
 *
 * https://projecteuler.net/problem=XX
 *
 * <DESCRIPTION>
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result sumsAbundantNums:
 * ////////////////////////////////////////////////////////////////////////////
 */

import util from 'util';
import {
  abundance,
  ___DIVISORS_DEFICIENT___,
  ___DIVISORS_PERFECT___,
  ___DIVISORS_ABUNDANT___
} from './helpers/index.js';

util.inspect.defaultOptions.maxArrayLength = null;
util.inspect.defaultOptions.colors = true;
util.inspect.defaultOptions.depth = null;
util.inspect.defaultOptions.showHidden = false;

export function problem0023(_DEBUG) {
  const result = null;

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

    if (
      abundancyOf !== ___DIVISORS_DEFICIENT___ &&
      abundancyOf !== ___DIVISORS_PERFECT___
    ) {
      nonAbundantList.push(i);
    }

    allNumsList.push(i);
  }

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

  console.log(
    'sumsAbundantNums size:',
    sumsAbundantNums.length,
    `result`,
    util.inspect(sumsAbundantNums, {})
  );



  if (_DEBUG) {
    console.log(`result`, result);
  }

  return result;
}

export default { problem0023 };
