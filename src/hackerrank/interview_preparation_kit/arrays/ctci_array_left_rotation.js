/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/ctci_array_left_rotation.md]]
 */

function rotLeftOne(aNumbers) {
  const first = aNumbers.shift();
  if (first !== undefined) {
    aNumbers.push(first);
  }

  return aNumbers;
}

function rotLeft(aNumbers, dRotations) {
  let output = [...aNumbers];

  for (let i = 0; i < dRotations; i++) {
    output = rotLeftOne(output);
  }

  return output;
}

export default { rotLeft, rotLeftOne };
