/**
 * @link Problem definition [[docs/hackerrank/implementation/migratoryBirds.md]]
 */

import { logger as console } from '../../logger.js';

export function migratoryBirds(arr) {
  if (arr.length === 0) {
    throw new Error('Empty input');
  }

  const map = {};
  let max = arr[0];

  for (const bird of arr) {
    console.debug(`bird ${bird}`);

    if (!map[bird]) {
      map[bird] = 1;
    } else {
      map[bird] += 1;
    }

    console.debug(`bird = ${bird} ~> map[bird] = ${map[bird]}`);
    console.debug(`max = ${max} ~> map[max] = ${map[max]}`);

    if (map[bird] > map[max] || (map[bird] === map[max] && bird < max))
      max = bird;
  }

  console.debug(`map: ${map}`);

  return max;
}

export default { migratoryBirds };
