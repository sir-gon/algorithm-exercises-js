/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase-solution-notes.md]]
 */

const TOP_LIMIT = 10 ** 10 + 7;
const STEPS_LIMIT = 3;
const CACHE = {};

export function stepPermsComputWithCache(nSteps, stepsLimit) {
  if (nSteps >= 0 && nSteps <= 2) {
    return nSteps;
  }

  const keys = new Set(Object.keys(CACHE));
  let result = 0;

  for (let i = 1; i <= Math.min(stepsLimit, nSteps); i++) {
    const searchKey = nSteps - i;
    if (!keys.has(searchKey)) {
      CACHE[searchKey] = stepPermsComputWithCache(searchKey, stepsLimit);
    }

    result += CACHE[searchKey];
  }

  return result + (nSteps <= stepsLimit ? 1 : 0);
}

export function stepPerms(n) {
  return stepPermsComputWithCache(n, STEPS_LIMIT) % TOP_LIMIT;
}

export default { stepPerms, stepPermsComputWithCache };
