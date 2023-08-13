/**
 * @link Problem definition [[docs/projecteuler/problem0014.md]]
 */

import { logger as console } from '../logger.js';
import { collatz } from './helpers/index.js';

function problem0014(bottom = 1, top = 10) {
  if (bottom < 1) throw new Error('bottom must be a positive integer');
  if (bottom >= top)
    throw new Error('top must be and integer, higher than bottom');

  let maxSequence = [];

  for (let i = bottom; i < top; i++) {
    let c = i;
    const sequence = [];
    sequence.push(c);
    do {
      c = collatz(c);
      sequence.push(c);
    } while (c !== 1);

    console.debug(`sequence of ${i}: ${sequence}`);

    if (sequence.length > maxSequence.length) {
      maxSequence = sequence;
    }
  }

  console.debug(
    `Large sequence found: ${maxSequence} has ${maxSequence.length} elements`
  );

  // return firt element
  return [...new Set(maxSequence)].shift();
}

export default problem0014;
export { problem0014 };
