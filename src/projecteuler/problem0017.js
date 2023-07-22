/**
 * Number letter counts
 *
 * https://projecteuler.net/problem=17
 *
 *
 * If the numbers 1 to 5 are written out in words:
 * one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19
 * letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written
 * out in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342
 * (three hundred and forty-two) contains 23 letters and
 * 115 (one hundred and fifteen) contains 20 letters. The use of "and"
 * when writing out numbers is in compliance with British usage.
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
