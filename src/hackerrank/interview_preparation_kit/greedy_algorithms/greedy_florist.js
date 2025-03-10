/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/greedy-florist.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/greedy-florist-solution-notes.md]]
 */

function getMinimumCost(k, c) {
  const flowers = c.map((x) => x).sort((a, b) => b - a);

  let total = 0;

  let i = 0;
  flowers.forEach((flowerCost) => {
    const position = Math.floor(i / k);

    total += (position + 1) * flowerCost;
    i += 1;
  });

  return total;
}

export default { getMinimumCost };
export { getMinimumCost };
