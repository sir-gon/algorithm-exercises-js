/**
 * Counting Sundays
 *
 * https://projecteuler.net/problem=19
 *
 * You are given the following information, but you may prefer
 * to do some research for yourself.
 *
 * *  1 Jan 1900 was a Monday.
 * *  Thirty days has September,
 *    April, June and November.
 *    All the accumulatedRemainder have thirty-one,
 *    Saving __FEBRUARY__KEY__ alone,
 *    Which has twenty-eight, rain or shine.
 *    And on leap years, twenty-nine.
 * *  A leap year occurs on any year evenly divisible by 4,
 *    but not on a century unless it is divisible by 400.
 *
 * How many Sundays fell on the first of the month during the
 * twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

import logger from './logger.js';
import { daysInMonth, __SUNDAY__ } from './constants/datetime.js';

const __FEBRUARY__KEY__ = 'FEBRUARY';

export function problem0019(
  _dayOfWeek = __SUNDAY__,
  _sinceYear = 1901,
  _untilYear = 2000
) {
  let resultCount = 0;
  let accumulatedRemainder = 0;
  let excess = 0;

  for (let y = 1900; y <= _untilYear; y++) {
    const leap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 1 : 0;
    daysInMonth[__FEBRUARY__KEY__] = 28 + leap;

    for (const [month, days] of Object.entries(daysInMonth)) {
      logger.debug(`Month: ${month} | days: ${days}`);

      accumulatedRemainder += days % 7;
      if (accumulatedRemainder % 7 === _dayOfWeek) {
        if (y <= _sinceYear) {
          excess += 1;
        }
        resultCount += 1;
      }
    }
  }

  logger.info(`result ${String(resultCount)}`);

  return resultCount - excess;
}

export default { problem0019 };
