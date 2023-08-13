/**
 * @link Problem definition [[docs/projecteuler/problem0008.md]]
 */
/// ///////////////////////////////////////////////////////////////////////////
// About solution:
// A integer _number with 1000 digits in javascript node.js is translated to
// special type "Infinity", so it can't be operated as _number.
//
// This solution runs through the _number as an array of 1-character
// strings that each digit represents.
//
// NOTE: In javascript it is not necessary to do type casting
// to operate _numbers in strings.
//
// Solution found:
//    The the greatest product of 13 consecutive digits is: 23514624000
/// ///////////////////////////////////////////////////////////////////////////

import { product } from './helpers/index.js';
import { logger as console } from '../logger.js';

function problem0008(_number, _interval) {
  const digits = _number.toString().split('');
  const bottom = 0;
  const top = digits.length;

  let max = 0;

  for (let i = bottom; i < top - _interval; i++) {
    const digitsSet = [];

    for (let j = 0; j < _interval; j++) {
      digitsSet.push(digits[i + j]);
    }

    const currentProduct = product(digitsSet);
    console.debug(
      `Product beetwen ${i} and ${i + _interval} is: ${currentProduct}`
    );

    if (currentProduct > max) {
      max = currentProduct;
    }
  }

  console.log(
    `The the greatest product of ${_interval} consecutive digits is: ${max}`
  );

  return max;
}

export default problem0008;
export { problem0008 };
