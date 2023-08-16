/**
 * @link Problem definition [[docs/hackerrank/implementation/countingValleys.md]]
 */

import { logger as console } from '../../logger.js';

export function countingValleys(steps, path) {
  const stepList = path.split('');
  let altitude = 0;
  let valleys = 0;

  console.debug(stepList);

  stepList.forEach((step) => {
    if (step === 'D') {
      if (altitude === 0) {
        valleys += 1;
      }
      altitude -= 1;
    }
    if (step === 'U') {
      altitude += 1;
    }
  });

  return valleys;
}

export default { countingValleys };
