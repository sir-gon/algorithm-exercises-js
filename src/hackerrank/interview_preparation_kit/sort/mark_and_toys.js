/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/sort/mark-and-toys.md]]
 */

export function maximumToys(prices, k) {
  const group = [...prices];
  group.sort((a, b) => a - b);

  let budget = k;
  const shoppingCart = [];

  while (group.length > 0 && budget >= 0) {
    const currentItem = group.shift();
    budget -= currentItem;
    if (budget >= 0) {
      shoppingCart.push(currentItem);
    }
  }

  return shoppingCart.length;
}

export default { maximumToys };
