/**
 * Largest product in a series
 *
 * https://projecteuler.net/problem=8
 *
 *
 * The four adjacent digits in the 1000-digit _number that have the greatest
 * product are 9 × 9 × 8 × 9 = 5832.
 *
 * 73167176531330624919225119674426574742355349194934
 * 96983520312774506326239578318016984801869478851843
 * 85861560789112949495459501737958331952853208805511
 * 12540698747158523863050715693290963295227443043557
 * 66896648950445244523161731856403098711121722383113
 * 62229893423380308135336276614282806444486645238749
 * 30358907296290491560440772390713810515859307960866
 * 70172427121883998797908792274921901699720888093776
 * 65727333001053367881220235421809751254540594752243
 * 52584907711670556013604839586446706324415722155397
 * 53697817977846174064955149290862569321978468622482
 * 83972241375657056057490261407972968652414535100474
 * 82166370484403199890008895243450658541227588666881
 * 16427171479924442928230863465674813919123162824586
 * 17866458359124566529476545682848912883142607690042
 * 24219022671055626321111109370544217506941658960408
 * 07198403850962455444362981230987879927244284909188
 * 84580156166097919133875499200524063689912560717606
 * 05886116467109405077541002256983155200055935729725
 * 71636269561882670428252483600823257530420752963450
 *
 * Find the thirteen adjacent digits in the 1000-digit _number that have
 * the greatest product. What is the value of this product?
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
import logger from '../logger.js';

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
    logger.debug(
      `Product beetwen ${i} and ${i + _interval} is: ${currentProduct}`
    );

    if (currentProduct > max) {
      max = currentProduct;
    }
  }

  logger.info(
    `The the greatest product of ${_interval} consecutive digits is: ${max}`
  );

  return max;
}

export default problem0008;
export { problem0008 };
