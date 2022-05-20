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
 * Result found:
 * ////////////////////////////////////////////////////////////////////////////
 */

import {
  abundance,
  ___DIVISORS_DEFICIENT___,
  ___DIVISORS_PERFECT___
} from './helpers/index.js';

export function problem0023(_DEBUG) {
  const result = null;

  const underLimit = 12;
  const superLimit = 28123;
  const nonAbundantList = {};

  for (let i = underLimit; i <= superLimit; i++) {
    const abundancyOf = abundance(i);

    if (
      abundancyOf !== ___DIVISORS_DEFICIENT___ &&
      abundancyOf !== ___DIVISORS_PERFECT___
    ) {
      nonAbundantList[i] = i;
    }
  }

  // console.log(divisors(16));

  console.log(`result`, nonAbundantList);

  if (_DEBUG) {
    console.log(`result`, result);
  }

  return result;
}

export default { problem0023 };
