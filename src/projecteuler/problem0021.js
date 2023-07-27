// ////////////////////////////////////////////////////////////////////////////
// Result found: 31626
//
// Amicable numbers found:
// amicableNumbers [
//      '220',  '284',
//      '1184', '1210',
//      '2620', '2924',
//      '5020', '5564',
//      '6232', '6368'
//    ]
// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';

import { divisors, bigSumMany } from './helpers/index.js';

export function problem0021(_start, _limit) {
  const data = {};

  for (let i = _start; i <= _limit; i++) {
    data[i] = `${divisors(i).reduce((x, y) => x + y, 0) - i}`;
  }

  const amicableNumbers = [];

  Object.entries(data).forEach((entry) => {
    const [index, value] = entry;

    if (
      value &&
      data[index] &&
      data[data[index]] &&
      index !== data[index] &&
      index === data[data[index]]
    ) {
      amicableNumbers.push(`${index}`);
    }
  });

  console.log(`result`, data);
  console.log(`amicableNumbers`, amicableNumbers);

  return bigSumMany(amicableNumbers);
}

export default { problem0021 };
