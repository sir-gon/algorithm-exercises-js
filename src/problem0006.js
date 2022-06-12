// problem0006.js

// The sum of the squares of the first ten natural numbers is,
// [image unavailable]
// The square of the sum of the first ten natural numbers is,
// [image unavailable]
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
// [image unavailable]
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

import logger from './logger.js';

function problem0006() {
  const top = 100;
  const bottom = 1;

  let sumOfSquares = 0;
  let baseForSquareOfSum = 0;
  let squareOfSum = 0;

  for (let i = bottom; i <= top; i++) {
    // logger.info(`${i}^2 = ${Math.pow(i, 2)}`);
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
