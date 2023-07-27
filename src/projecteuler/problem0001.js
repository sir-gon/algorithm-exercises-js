import { logger as console } from '../logger.js';

function problem0001(_top) {
  let total = 0;

  for (let i = 0; i < _top; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.debug(`i = ${i}`);
      total += i;
    }
  }

  console.log(`TOTAL = ${total}`);

  return total;
}

export default problem0001;
export { problem0001 };
