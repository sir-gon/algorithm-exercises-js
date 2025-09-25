/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/2d_array.md]]
 */

function gethourGlass(arr, positionX, positionY) {
  return [
    // top
    arr[positionX - 1][positionY - 1],
    arr[positionX - 1][positionY],
    arr[positionX - 1][positionY + 1],
    // middle
    arr[positionX][positionY],
    // bottom
    arr[positionX + 1][positionY - 1],
    arr[positionX + 1][positionY],
    arr[positionX + 1][positionY + 1]
  ];
}

function hourglassSum(arr) {
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
export { hourglassSum };
