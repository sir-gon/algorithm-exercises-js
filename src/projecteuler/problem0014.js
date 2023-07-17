/**
 * Longest Collatz sequence
 *
 * https://projecteuler.net/problem=14
 *
 *
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * Although it has not been proved yet (Collatz Problem), it is thought that all
 * starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

import logger from '../logger.js';

import { collatz } from './helpers/index.js';

function problem0014(bottom = 1, top = 10) {
  // const top = 1000000;
  if (bottom < 1) throw new Error('bottom must be a positive integer');
  if (bottom >= top)
    throw new Error('top must be and integer, higher than bottom');

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

    logger.debug(`sequence of ${i}: ${sequence}`);

    if (sequence.length > maxSequence.length) {
      maxSequence = sequence;
    }
  }

  logger.debug(
    `Large sequence found: ${maxSequence} has ${maxSequence.length} elements`
  );

  // return firt element
  return [...new Set(maxSequence)].shift();
}

export default problem0014;
export { problem0014 };

// problem0014();
