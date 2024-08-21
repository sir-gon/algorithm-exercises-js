/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/ctci-ice-cream-parlor.md]]
 */

export function whatFlavorsBruteforceCompute(cost, money) {
  const RADIX = 10;

  for (const key of Object.keys(cost)) {
    const i = parseInt(key, RADIX);
    const x = cost[i];

    const budget = money - x;

    for (let j = i + 1; j < cost.length; j++) {
      if (budget - cost[j] === 0) {
        console.log(`${i + 1} ${j + 1}`);
        return [i + 1, j + 1];
      }
    }
  }

  return [];
}

export function whatFlavors(cost, money) {
  console.log(whatFlavorsBruteforceCompute(cost, money)?.join(' '));
}

export default { whatFlavorsBruteforceCompute, whatFlavors };