/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/ctci-ice-cream-parlor.md]]
 */

export function whatFlavorsCompute(cost, money) {
  let ans1;
  let ans2;

  const RADIX = 10;
  const CACHE = {};

  for (const price of cost) {
    CACHE[price] = Number.isInteger(CACHE[price]) ? CACHE[price] + 1 : 1;
  }

  for (const key of Object.keys(cost)) {
    const i = parseInt(key, RADIX);

    const v1 = cost[i];
    const v2 = money - v1;

    if (v1 !== v2 && CACHE?.[v1] && CACHE?.[v2]) {
      ans1 = v1;
      ans2 = v2;
      break;
    }

    if (v1 === v2 && CACHE?.[v1] && CACHE[v1] > 1) {
      ans1 = v1;
      ans2 = v1;
      break;
    }
  }

  const result = new Set();
  for (const key of Object.keys(cost)) {
    const x = parseInt(key, RADIX);

    if (cost[x] === ans1 || cost[x] === ans2) {
      result.add(x + 1);
    }
  }

  return Array.from(result);
}

export function whatFlavors(cost, money) {
  console.log(whatFlavorsCompute(cost, money)?.join(' '));
}

export default { whatFlavorsCompute, whatFlavors };
