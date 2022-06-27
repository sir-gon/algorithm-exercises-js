/**
 * Names scores
 *
 * https://projecteuler.net/problem=22
 *
 * Using names.txt https://projecteuler.net/project/resources/p022_names.txt
 * (right click and 'Save Link/Target As...'),
 * a 46K text file containing over five-thousand first names,
 * begin by sorting it into alphabetical order.
 * Then working out the alphabetical value for
 * each name, multiply this value by its alphabetical position
 * in the list to obtain a name score.
 *
 * For example, when the list is sorted into
 * alphabetical order, COLIN, which
 * is worth 3 + 15 + 12 + 9 + 14 = 53, is the
 * 938th name in the list. So, COLIN would obtain
 * a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

// ////////////////////////////////////////////////////////////////////////////
// See:
//    - src/data/p022_names.txt
//    - src/data/p022_names.json
// ////////////////////////////////////////////////////////////////////////////

import logger from './logger.js';
import names from './data/p022_names.json';
import { wordScore } from './helpers/wordScore.js';

export function problem0022() {
  names.sort((a, b) => a.localeCompare(b));

  let result = 0;
  let i;

  for (i = 0; i < names.length; i++) {
    result += (i + 1) * wordScore(names[i]);
  }

  logger.info(`result`, result);

  return result;
}

export default { problem0022 };
