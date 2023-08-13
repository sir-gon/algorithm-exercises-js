/**
 * @link Problem definition [[docs/projecteuler/problem0023.md]]
 */

import { logger as console } from '../logger.js';
import { abundance, ___DIVISORS_ABUNDANT___, sum } from './helpers/index.js';

export function problem0023(_underLimit, _superLimit) {
  const allNumsList = [];
  const abundantNumberList = [];

  for (let i = 1; i < _underLimit; i++) {
    allNumsList.push(i);
  }

  // Produce a list of abundant numbers below limit
  for (let i = _underLimit; i <= _superLimit; i++) {
    const abundancyOf = abundance(i);

    if (abundancyOf === ___DIVISORS_ABUNDANT___) {
      abundantNumberList.push(i);
    }

    allNumsList.push(i);
  }

  console.debug(`all nums list size: ${allNumsList.length} => ${allNumsList}`);

  console.debug(
    `abundant nums list: ${abundantNumberList.length} => ${abundantNumberList}`
  );

  let sumsAbundantNums = [];

  // Produce a list of sums of pair of abundant numbers below limit
  for (const abundantNumber of abundantNumberList) {
    for (
      let j = 0;
      abundantNumber + abundantNumberList[j] <= _superLimit &&
      j < abundantNumberList.length;
      j++
    ) {
      sumsAbundantNums.push(abundantNumber + abundantNumberList[j]);
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
