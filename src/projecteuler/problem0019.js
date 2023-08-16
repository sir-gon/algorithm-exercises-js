/**
 * @link Problem definition [[docs/projecteuler/problem0019.md]]
 */
import { logger as console } from '../logger.js';
import { daysInMonth, __SUNDAY__ } from '../constants/index.js';

const __FEBRUARY__KEY__ = 'FEBRUARY';

export function problem0019(
  _dayOfWeek = __SUNDAY__,
  _sinceYear = 1901,
  _untilYear = 2000
) {
  const initYear = 1900;
  let resultCount = 0;
  let accumulatedRemainder = 0;
  let excess = 0;

  for (let year = initYear; year <= _untilYear; year++) {
    const leap =
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0;
    daysInMonth[__FEBRUARY__KEY__] = 28 + leap;

    for (const [month, days] of Object.entries(daysInMonth)) {
      console.debug(`Year: ${year} | Month: ${month} | days: ${days}`);

      accumulatedRemainder += days % 7;
      if (accumulatedRemainder % 7 === _dayOfWeek) {
        if (year <= _sinceYear) {
          excess += 1;
        }
        resultCount += 1;
      }
    }
  }

  console.log(
    `Problem0019 result: (${resultCount} - ${excess}) => ${
      resultCount - excess
    }`
  );

  return resultCount - excess;
}

export default { problem0019 };
