/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase-solution-notes.md]]
 */

const TOP_LIMIT = 10 ** 10 + 7;
const STEPS_LIMIT = 3;

export function stepPermsComputWithCache(nSteps, cache, stepsLimit) {
  if (nSteps >= 0 && nSteps <= 2) {
    return nSteps;
  }

  const keys = new Set(Object.values(cache));
  let result = 0;

  for (let i = 1; i <= Math.min(stepsLimit, nSteps); i++) {
    const searchKey = nSteps - i;
    if (!keys.has(searchKey)) {
      cache[searchKey] = stepPermsComputWithCache(searchKey, cache, stepsLimit);
    }

    result += cache[searchKey];
  }

  return result + (nSteps <= stepsLimit ? 1 : 0);
}

export function stepPerms(n) {
  const initialCache = {};
  return stepPermsComputWithCache(n, initialCache, STEPS_LIMIT) % TOP_LIMIT;
}

export default { stepPerms, stepPermsComputWithCache };
