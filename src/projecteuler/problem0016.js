/**
 * @link Problem definition [[docs/projecteuler/problem0016.md]]
 */
// ////////////////////////////////////////////////////////////////////////////
// Result found:
//  Digits:
//      1071508607186267320948425049060001810561404811705
//      5336074437503883703510511249361224931983788156958
//      5812759467291755314682518714528569231404359845775
//      7469857480393456777482423098542107460506237114187
//      7954182153046474983581941267398767559165543946077
//      0629145711964776865421676604298316526243868372056
//      68069376
//  Sum: 1366
// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';

import { bigPower, bigSumMany } from './helpers/index.js';

function problem0016(base, exponent) {
  const strPower = bigPower(base, exponent);

  console.log(`Digits of power found: (${strPower})`);

  const result = bigSumMany(strPower);

  console.log(`Sum of Digits: (${result})`);

  return result;
}

export default problem0016;
export { problem0016 };
