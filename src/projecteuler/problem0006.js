/**
 * @link Problem definition [[docs/projecteuler/problem0006.md]]
 */
// ////////////////////////////////////////////////////////////////////////////
// Solution found:
// Sum of first 100 squares = 338350
// Base for Square Of Sum of first 100 = 5050
// Square Of Sum of first 100 = 25502500
// Difference found 25502500 - 338350 =  25164150
// ////////////////////////////////////////////////////////////////////////////

import { logger as console } from '../logger.js';

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

  console.debug(`Sum of first ${_top} squares = ${sumOfSquares}`);
  console.debug(
    `Base for Square Of Sum of first ${_top} = ${baseForSquareOfSum}`
  );
  console.debug(`Square Of Sum of first ${_top} = ${squareOfSum}`);

  console.debug(
    `Difference found ${squareOfSum} - ${sumOfSquares} =  ${
      squareOfSum - sumOfSquares
    }`
  );

  console.log('Problem 0006 result: %i', answer);
  return answer;
}

export default problem0006;
export { problem0006 };
