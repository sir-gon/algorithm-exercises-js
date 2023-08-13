/**
 * @link Problem definition [[docs/projecteuler/problem0011.md]]
 */

import { logger as console } from '../logger.js';
import { maximum } from './helpers/index.js';

function problem0011(_squareMatrix, _interval) {
  let max = 0;

  const quadrantSize = _interval;
  const matrixLimit = _squareMatrix.length - (_interval - 1);

  for (let i = 0; i < matrixLimit; i++) {
    for (let j = 0; j < matrixLimit; j++) {
      console.debug(`start point => i: ${i}, j: ${j}`);

      // reset diagonals
      let diag1Acum = 1;
      let diag2Acum = 1;
      for (let k = 0; k < quadrantSize; k++) {
        console.debug(`diag1 coordinate: (i, j) = (${i + k}, ${j + k})`);
        console.debug(
          `diag2 coordinate: (i, j) = (${i + k}, ${j + (quadrantSize - 1) - k})`
        );
        diag1Acum *= _squareMatrix[i + k][j + k];
        diag2Acum *= _squareMatrix[i + k][j + (quadrantSize - 1) - k];

        max = maximum(diag1Acum, max);
        max = maximum(diag2Acum, max);

        // reset lines
        let verticalAcum = 1;
        let horizontalAcum = 1;
        for (let l = 0; l < quadrantSize; l++) {
          console.debug(`vertical coordinate: (i, j) = (${i + k}, ${j + l})`);
          console.debug(`horizontal coordinate: (i, j) = (${i + l}, ${j + k})`);

          verticalAcum *= _squareMatrix[i + k][j + l];
          horizontalAcum *= _squareMatrix[i + l][j + k];

          max = maximum(verticalAcum, max);
          max = maximum(horizontalAcum, max);
        }
      }
    }
  }

  console.log(`Maximum product: ${max}`);

  return max;
}

export default problem0011;
export { problem0011 };
