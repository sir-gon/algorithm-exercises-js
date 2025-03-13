/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/crush.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/arrays/crush_optimized-solution-notes.md]]
 */

import { logger as console } from '../../../logger.js';

function arrayManipulation(n, queries) {
  const LENGTH = n + 1;
  const SURROGATE_VALUE = 0;
  const result = Array(LENGTH).fill(SURROGATE_VALUE);
  let maximum = 0;

  queries.forEach((query) => {
    const [aStart, bEnd, kValue] = query;
    console.debug(`start -> ${result}`);

    for (let i = aStart; i <= bEnd; i++) {
      result[i] += kValue;
      console.debug(`result -> ${result}`);
    }
  });

  result.forEach((value) => {
    maximum = Math.max(value, maximum);
  });

  return maximum;
}

export default { arrayManipulation };
export { arrayManipulation };
