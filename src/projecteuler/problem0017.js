/**
 * @link Problem definition [[docs/projecteuler/problem0017.md]]
 */

import { logger as console } from '../logger.js';
import { numberToWord } from './helpers/index.js';

export default function problem0017(init, last) {
  let replaced;
  let word;
  let acum = 0;

  for (let i = init; i <= last; i++) {
    word = numberToWord(i);
    replaced = word.replace(/[^a-z0-9]/gi, '');

    acum += replaced.length;

    console.debug(`acum: ${acum} => word: ${word}`);
  }

  console.log(`acum => ${acum}`);

  return acum;
}

export { problem0017 };
