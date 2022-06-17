/**
 * Sum square difference
 *
 * https://projecteuler.net/problem=6
 *
 * The sum of the squares of the first ten natural numbers is,
 *
 * 1² * 2² * ... * 10² = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 * 2 * ... * 10)² = 3025
 *
 * Hence the difference between the sum of the squares of the
 * first ten natural numbers and the square of the sum is
 * 3025 - 385.
 *
 * Find the difference between the sum of the squares of the
 * first one hundred natural numbers and the square of the sum.
 *
 * ////////////////////////////////////////////////////////////////////////////
 * Solution found:
 * Sum of first 100 squares = 338350
 * Base for Square Of Sum of first 100 = 5050
 * Square Of Sum of first 100 = 25502500
 * Difference found 25502500 - 338350 =  25164150
 * ////////////////////////////////////////////////////////////////////////////
 */

import logger from './logger.js';

function problem0006() {
  const top = 100;
  const bottom = 1;

  let sumOfSquares = 0;
  let baseForSquareOfSum = 0;
  let squareOfSum = 0;

  for (let i = bottom; i <= top; i++) {
    sumOfSquares += i ** 2;
    baseForSquareOfSum += i;
  }

  squareOfSum = baseForSquareOfSum ** 2;

  logger.info(`Sum of first ${top} squares = ${sumOfSquares}`);
  logger.info(`Base for Square Of Sum of first ${top} = ${baseForSquareOfSum}`);
  logger.info(`Square Of Sum of first ${top} = ${squareOfSum}`);

  logger.info(
    `Difference found ${squareOfSum} - ${sumOfSquares} =  ${
      squareOfSum - sumOfSquares
    }`
  );

  return squareOfSum - sumOfSquares;
}

export default problem0006;
export { problem0006 };
