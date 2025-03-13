/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase.md]]
 * @see Solution Notes: [[docs/hackerrank/interview_preparation_kit/recursion_and_backtracking/ctci-recursive-staircase-solution-notes.md]]
 */

const TOP_LIMIT = 10 ** 10 + 7;
const STEPSLIMIT = 3;

class StepPerms {
  TOP_LIMIT = 1;

  STEPS_LIMIT = 1;

  CACHE = {};

  constructor(topLimit, stepsLimit) {
    this.TOP_LIMIT = topLimit;
    this.STEPS_LIMIT = stepsLimit;
  }

  stepPermsComputWithCache(nSteps) {
    if (nSteps >= 0 && nSteps <= 2) {
      return nSteps;
    }

    const keys = new Set(Object.keys(this.CACHE));
    let result = 0;

    for (let i = 1; i <= Math.min(this.STEPS_LIMIT, nSteps); i++) {
      const searchKey = nSteps - i;
      if (!keys.has(searchKey.toString())) {
        this.CACHE[searchKey] = this.stepPermsComputWithCache(searchKey);
      }

      result += this.CACHE[searchKey];
    }

    return result + (nSteps <= this.STEPS_LIMIT ? 1 : 0);
  }
}

function stepPerms(n) {
  const stairs = new StepPerms(TOP_LIMIT, STEPSLIMIT);

  return stairs.stepPermsComputWithCache(n) % TOP_LIMIT;
}

export default { stepPerms, StepPerms };
export { stepPerms, StepPerms };
