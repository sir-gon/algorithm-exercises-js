/**
 * @link Problem definition [[docs/projecteuler/problem0016alt.md]]
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

function problem0016alt(base, exponent) {
  const radix = 10;
  const newBase = BigInt(base);
  let powerOf = BigInt(1);

  for (let i = 1; i <= exponent; i++) {
    powerOf *= newBase;
  }

  const strPower = powerOf.toString();

  console.log(`Power found: (${strPower})`);

  const digits = strPower.split('');

  let result = 0;
  digits.forEach((num) => {
    result += Number.parseInt(num, radix);
  });

  console.log(`Sum of Digits: (${result})`);

  return `${result}`;
}

export default problem0016alt;
export { problem0016alt };
