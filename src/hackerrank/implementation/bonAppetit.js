/**
 * @link Problem definition [[docs/hackerrank/implementation/bonAppetit.md]]
 */

import { logger as console } from '../../logger.js';

function bonAppetit(bill, k, b) {
  const totalSum = bill.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const billActual = (totalSum - bill[k]) / 2;
  const account = b - billActual;

  let result;
  if (account === 0) {
    result = 'Bon Appetit';
  } else {
    result = `${account}`;
  }

  console.log(result);
  return result;
}

export default { bonAppetit };
export { bonAppetit };
