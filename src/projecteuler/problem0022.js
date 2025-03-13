/**
 * @link Problem definition [[docs/projecteuler/problem0022.md]]
 */

import { logger as console } from '../logger.js';
import { wordScore } from './helpers/wordScore.js';

function problem0022(listOfNames) {
  listOfNames.sort((a, b) => a.localeCompare(b));

  let result = 0;
  let i;

  for (i = 0; i < listOfNames.length; i++) {
    result += (i + 1) * wordScore(listOfNames[i]);
  }

  console.log(`result`, result);

  return result;
}

export default { problem0022 };
export { problem0022 };
