/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/greedy_algorithms/luck-balance.md]]
 */

function dynamicSort(array, sortBy) {
  const initialValue = 0;
  return array.sort((a, b) =>
    sortBy.reduce((result, current) => {
      const { property, order = 'asc' } = current;

      let comparison = 0;
      if (a[property] > b[property]) {
        comparison = 1;
      } else if (a[property] < b[property]) {
        comparison = -1;
      }

      if (order === 'desc') {
        comparison *= -1;
      }

      return comparison;
    }, initialValue)
  );
}

class Contest {
  constructor(luck, important) {
    this.luck = luck;
    this.important = important;
  }

  getLuck() {
    return this.luck;
  }

  isImportant() {
    return this.important !== 0;
  }
}

function luckBalance(k, contests) {
  let importantContests = [];
  const nonimportantContests = [];

  for (const contestData of contests) {
    const [luck, important] = [...contestData];
    const contest = new Contest(luck, important);
    if (contest.isImportant()) {
      importantContests.push(contest);
    } else {
      nonimportantContests.push(contest);
    }
  }

  importantContests = dynamicSort(importantContests, [
    { property: 'important', order: 'desc' },
    { property: 'luck', order: 'desc' }
  ]);

  let total = 0;
  const size = importantContests.length;
  const cut = Math.min(k, size);

  for (let i = 0; i < cut; i++) {
    total += importantContests[i].getLuck();
  }

  for (let i = cut; i < size; i++) {
    total -= importantContests[i].getLuck();
  }

  for (const contest of nonimportantContests) {
    total += contest.luck;
  }

  return total;
}

export default { luckBalance };
export { luckBalance };
