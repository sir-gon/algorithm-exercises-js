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
  i = _top;
  do {
    j = _top;
    do {
      if (isPalindrome(j * i)) {
        logger.info(`FOUND: ${i} x ${j} = ${j * i} is Palindrome`);

        if (!foundPalindrome || i * j > foundPalindrome) {
          foundi = i;
          foundj = j;
          foundPalindrome = i * j;
        }
      } else {
        // console.log(`FOUND: ${i} x ${j} = ${j * i} is NOT Palindrome`);
      }

      j -= 1;
    } while (j >= _bottom /* && !(found1 && found2) */);

    i -= 1;
  } while (i >= _bottom /* && !(found1 && found2) */);

  logger.info(
    `Largest Palindrome => ${foundi} 𝗑 ${foundj} = ${foundPalindrome}`
  );

  return foundPalindrome;
}

export default problem0004;
export { problem0004 };
