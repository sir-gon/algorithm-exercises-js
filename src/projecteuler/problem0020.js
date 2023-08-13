/**
 * @link Problem definition [[docs/projecteuler/problem0020.md]]
 */
// ////////////////////////////////////////////////////////////////////////////
// Result found:
//      Factorial of 100! =
//            93326215443944152681699238856266700490715968264381621
//            46859296389521759999322991560894146397615651828625369
//            7920827223758251185210916864000000000000000000000000
// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';

import { bigFactorial, bigSumMany } from './helpers/bigNumbers.js';

export function problem0020(_limit) {
  const strFactorial = bigFactorial(_limit);

  console.log(`Factorial of ${_limit}!:`, strFactorial);

  const result = bigSumMany(strFactorial);

  return result;
}

export default { problem0020 };
