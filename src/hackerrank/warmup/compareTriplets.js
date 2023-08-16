/**
 * @link Problem definition [[docs/hackerrank/warmup/compareTriplets.md]]
 */

export function compareTriplets(a, b) {
  const awards = [0, 0];

  if (a.length !== b.length) {
    throw new Error('Wrong comparition length');
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      awards[0] += 1;
    } else if (a[i] < b[i]) {
      awards[1] += 1;
    }
  }

  return awards;
}

export default { compareTriplets };
