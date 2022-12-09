/**
 * Largest palindrome product
 *
 * https://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit
 * numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

/// ////////////////////////////////////////////////////////////////////////////
// NOTES ABOUT THE SOLUTION:
// This solution cycles to test all pairs of factors between 111 and 999 that meet the condition of generating a palindrome and saves the largest found.
// I think there must be another optimal solution to avoid testing all cases
// cutting the loop around the largest factor pair
// That's why I thought about doing the loop from highest to lowest.
/// ////////////////////////////////////////////////////////////////////////////

/// ////////////////////////////////////////////////////////////////////////////

import logger from './logger.js';

import { isPalindrome } from './helpers/index.js';

function problem0004(_bottom, _top) {
  let i;
  let j;
  let foundi;
  let foundj;
  let foundPalindrome;

  // Find all cases
  let cycles = 0;

  i = _top;
  while (i >= _bottom) {
    j = i;
    while (j >= _bottom && (!foundj || j >= foundj)) {
      cycles += 1;

      if (isPalindrome(j * i)) {
        logger.debug(`FOUND: ${i} x ${j} = ${j * i} is Palindrome`);

        if (!foundPalindrome || i * j > foundPalindrome) {
          foundi = i;
          foundj = j;
          foundPalindrome = i * j;
        }
      } else {
        // console.log(`FOUND: ${i} x ${j} = ${j * i} is NOT Palindrome`);
      }

      j -= 1;
    }

    i -= 1;
  }

  logger.info(
    `Problem 0004 Largest Palindrome  => ${foundi} 𝗑 ${foundj} = ${foundPalindrome} in ${cycles} cycles`
  );

  return foundPalindrome;
}

export default problem0004;
export { problem0004 };
