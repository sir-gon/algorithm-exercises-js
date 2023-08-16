/**
 * @link Problem definition [[docs/hackerrank/implementation/minimumAbsoluteDifference.md]]
 */

import { logger as console } from '../../logger.js';

export function minimumAbsoluteDifference(arr) {
  if (arr.length === 0) {
    throw new Error('Empty input');
  }

  const sortedNums = [...arr].sort((a, b) => a - b);
  console.log(`sortedNums: ${sortedNums}`);

  let result = Math.abs(sortedNums[0] - sortedNums[1]);

  for (let i = 0; i < sortedNums.length - 1; i++) {
    const a = sortedNums[i];
    const b = sortedNums[i + 1];

    const diff = Math.abs(a - b);

    console.debug(
      `(i: ${i}, i+1: ${i + 1}) => |a - b| = |${a} - ${b}| = ${diff}`
    );

    result = Math.min(result, diff);
  }

  return result;
}

export default { minimumAbsoluteDifference };
