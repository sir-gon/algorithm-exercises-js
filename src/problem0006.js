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
 */

// ////////////////////////////////////////////////////////////////////////////
// Solution found:
// Sum of first 100 squares = 338350
// Base for Square Of Sum of first 100 = 5050
// Square Of Sum of first 100 = 25502500
// Difference found 25502500 - 338350 =  25164150
// ////////////////////////////////////////////////////////////////////////////

import logger from './logger.js';

function problem0006(_bottom = 1, _top = 100) {
  let answer = 0;

  let sumOfSquares = 0;
  let baseForSquareOfSum = 0;
  let squareOfSum = 0;

  for (let i = _bottom; i <= _top; i++) {
    sumOfSquares += i ** 2;
    baseForSquareOfSum += i;
  }

  squareOfSum = baseForSquareOfSum ** 2;
  answer = squareOfSum - sumOfSquares;

  logger.debug(`Sum of first ${_top} squares = ${sumOfSquares}`);
  logger.debug(
    `Base for Square Of Sum of first ${_top} = ${baseForSquareOfSum}`
  );
  logger.debug(`Square Of Sum of first ${_top} = ${squareOfSum}`);

  logger.debug(
    `Difference found ${squareOfSum} - ${sumOfSquares} =  ${
      squareOfSum - sumOfSquares
    }`
  );

  logger.info('Problem 0006 result: %i', answer);
  return answer;
}

export default problem0006;
export { problem0006 };
