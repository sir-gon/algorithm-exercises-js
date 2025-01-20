/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/2d_array.md]]
 */

export function gethourGlass(arr, positionX, positionY) {
  const result = [];

  // top
  result.push(arr[positionX - 1][positionY - 1]);
  result.push(arr[positionX - 1][positionY]);
  result.push(arr[positionX - 1][positionY + 1]);
  // middle
  result.push(arr[positionX][positionY]);
  // bottom
  result.push(arr[positionX + 1][positionY - 1]);
  result.push(arr[positionX + 1][positionY]);
  result.push(arr[positionX + 1][positionY + 1]);
  return result;
}

export function hourglassSum(arr) {
  let matrixSize = 0;

  if (arr?.[0]) {
    matrixSize = arr.length;
  }

  const matrixStartIndex = 1;
  const matrixStopIndex = matrixSize - 2;

  console.debug(`matrix size ${matrixSize}`);

  let maxHourglassSum = null;

  // recorrido
  for (let i = matrixStartIndex; i <= matrixStopIndex; i++) {
    for (let j = matrixStartIndex; j <= matrixStopIndex; j++) {
      // hourglass centers
      console.debug(`posicion (${i},${j}): ${arr[i][j]}`);

      const houglassValues = gethourGlass(arr, i, j);

      const thisHourglassSum = houglassValues.reduce((a, b) => a + b, 0);

      console.debug(houglassValues, `thisHourglassSum: ${thisHourglassSum}`);

      if (
        maxHourglassSum === undefined ||
        maxHourglassSum === null ||
        thisHourglassSum > maxHourglassSum
      ) {
        maxHourglassSum = thisHourglassSum;
      }
    }
  }

  return maxHourglassSum;
}

export default { hourglassSum };
