/**
 * @link Problem definition [[docs/hackerrank/implementation/sockMerchant.md]]
 */

import { logger as console } from '../../logger.js';

function sockMerchant(n, ar) {
  let result = 0;

  const matches = {};

  ar.forEach((v) => {
    matches[v] = matches?.[v] ? matches[v] + 1 : 1;
  });

  console.debug(matches);

  for (const [k, value] of Object.entries(matches)) {
    console.debug(`k: ${k}, value: ${value}`);

    result += Math.floor(value / 2);
  }

  return result;
}

export default { sockMerchant };
export { sockMerchant };
