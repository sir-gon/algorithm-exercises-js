/**
 * @link Problem definition [[docs/hackerrank/implementation/breakingRecords.md]]
 */

function breakingRecords(scores) {
  if (scores.length === 0) {
    throw new Error('Empty input');
  }

  let min = scores[0];
  let max = scores[0];
  let i;

  const recordsBottom = [];
  const recordsTop = [];

  for (i = 0; i < scores.length; i++) {
    if (scores[i] < min) {
      min = scores[i];
      recordsBottom.push(scores[i]);
    }
    if (scores[i] > max) {
      max = scores[i];
      recordsTop.push(scores[i]);
    }
  }

  return [recordsTop.length, recordsBottom.length];
}

export default { breakingRecords };
export { breakingRecords };
