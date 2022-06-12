import { collatz } from './helpers/index.js';
import logger from './logger.js';

function problem0014(bottom = 1, top = 10) {
  // const top = 1000000;
  if (bottom <= 1) throw new Error('bottom must be a positive integer');

  let maxSequence = [];

  for (let i = bottom; i < top; i++) {
    // const i = 40;
    let c = i;
    const sequence = [];
    sequence.push(c);
    do {
      c = collatz(c);
      sequence.push(c);
      // console.log(`sequence of ${i}: ${c}`);
    } while (c !== 1);

    logger.info(`sequence of ${i}: ${sequence}`);

    if (sequence.length > maxSequence.length) {
      maxSequence = sequence;
    }
  }

  logger.info(
    `Large sequence found: ${maxSequence} has ${maxSequence.length} elements`
  );

  if (maxSequence.length > 0) return maxSequence[0];

  return null;
}

export default problem0014;
export { problem0014 };

// problem0014();
