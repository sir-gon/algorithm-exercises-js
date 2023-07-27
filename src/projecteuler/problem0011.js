import { logger as console } from '../logger.js';
import { maximum } from './helpers/index.js';

function problem0011(_squareMatrix, _interval) {
  const top = _squareMatrix.length;

  let max = 0;
  let acum;

  for (let i = 0; i < top; i++) {
    for (let j = 0; j < top; j++) {
      acum = 1;

      if (i < top - (_interval - 1)) {
        console.debug(
          `---- VERTICAL ------------------------------------------`
        );
        // vertical
        for (let k = 0; k < _interval; k++) {
          console.debug(
            `row: i ${i + k}, column: ${j}, _interval ${k} => ${
              _squareMatrix[i + k][j]
            }`
          );

          acum *= _squareMatrix[i + k][j];
        }

        max = maximum(acum, max);
      }

      acum = 1;
      if (j < top - (_interval - 1)) {
        console.debug(
          `---- HORIZONTAL ----------------------------------------`
        );
        // horizontal
        for (let k = 0; k < _interval; k++) {
          console.debug(
            `row: i ${i}, column: ${j + k} => ${_squareMatrix[i][j + k]}`
          );
          acum *= _squareMatrix[i][j + k];
        }

        max = maximum(acum, max);
      }

      acum = 1;
      if (i + (_interval - 1) < top && j + (_interval - 1) < top) {
        // diagonal top left -> bottom right
        console.debug(
          `---- DIAG \\ ---------------------------------------------`
        );
        for (let k = 0; k < _interval; k++) {
          console.debug(
            `diag: (${i + k}, ${j + k}) => ${_squareMatrix[i + k][j + k]}`
          );
          acum *= _squareMatrix[i + k][j + k];
        }

        max = maximum(acum, max);
      }

      acum = 1;
      if (i + (_interval - 1) < top && j + (_interval - 1) < top) {
        // diagonal top rigth -> bottom left
        console.debug(
          `---- DIAG / ---------------------------------------------`
        );
        for (let k = 0; k < _interval; k++) {
          console.debug(
            `diag: (${i + k}, ${j + (_interval - 1) - k}) => ${
              _squareMatrix[i + k][j + (_interval - 1) - k]
            }`
          );
          acum *= _squareMatrix[i + k][j + (_interval - 1) - k];
        }

        max = maximum(acum, max);
      }
    }
  }

  console.log(`Maximum product: ${max}`);

  return max;
}

export default problem0011;
export { problem0011 };
