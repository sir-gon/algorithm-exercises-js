/**
 * @link Problem definition [[docs/hackerrank/implementation/jumpingOnClouds.md]]
 */

import { logger as console } from '../../logger.js';

export function jumpingOnClouds(c) {
  let result = 0;
  let key = 0;

  console.debug(c);

  while (key < c.length) {
    if (key + 2 < c.length && c[key + 2] === 0) {
      result += 1;
      key += 2;
    } else if (key + 1 < c.length && c[key + 1] === 0) {
      result += 1;
      key += 1;
    } else {
      key += 1;
    }
  }

  return result;
}

export default { jumpingOnClouds };
