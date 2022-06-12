import logger from './logger.js';

import num from './data/problem0013.json';

function problem0013() {
  const divisor = 1000000000000000000000000000000000000000;
  const top = 10000000000;
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i] / divisor;
  }

  logger.info(sum);

  while (sum > top) {
    sum = Math.trunc(sum / 10);
    logger.info(sum);
  }

  logger.info(`First 10 digits of huge sume are ${sum}`);

  return sum;
}

export default problem0013;
export { problem0013 };
