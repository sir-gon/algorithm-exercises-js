/**
 * Power digit sum
 *
 * https://projecteuler.net/problem=16
 *
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found:
 *  Digits: 10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376
 *  Sum: 1366
 * ////////////////////////////////////////////////////////////////////////////
 */

import logger from './logger.js';

import { bigPower, bigSumMany } from './helpers/index.js';

function problem0016(base, exponent) {
  const strPower = bigPower(base, exponent);

  logger.info(`Digits of power found: (${strPower})`);

  const result = bigSumMany(strPower);

  logger.info(`Sum of Digits: (${result})`);

  return result;
}

export default problem0016;
export { problem0016 };
