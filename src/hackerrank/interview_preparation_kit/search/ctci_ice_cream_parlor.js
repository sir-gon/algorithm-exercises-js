/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/search/ctci-ice-cream-parlor.md]]
 */

function whatFlavorsCompute(cost, money) {
  const cache = {};
  const RADIX = 10;

  for (const [key, price] of Object.entries(cost)) {
    const i = parseInt(key, RADIX);
    const diff = money - price;

    if (Number.isInteger(cache?.[diff])) {
      return [i + 1, cache[diff] + 1].sort((a, b) => a - b);
    }

    cache[price] = i;
  }

  return [];
}

function whatFlavors(cost, money) {
  console.log(whatFlavorsCompute(cost, money)?.join(' '));
}

export default { whatFlavorsCompute, whatFlavors };
export { whatFlavorsCompute, whatFlavors };
