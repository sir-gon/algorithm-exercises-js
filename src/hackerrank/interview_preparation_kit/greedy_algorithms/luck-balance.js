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
}

export function luckBalance(k, contests) {
  // Write your code here
  let importantContests = [];
  const nonimportantContests = [];

  contests.forEach((contest) => {
    const [luck, important] = [...contest];
    if (important === 1) {
      importantContests.push(new Contest(luck, important));
    } else {
      nonimportantContests.push(new Contest(luck, important));
    }
  });

  importantContests = dynamicSort(importantContests, [
    { property: 'important', order: 'desc' },
    { property: 'luck', order: 'desc' }
  ]);

  let total = 0;
  const size = importantContests.length;
  const cut = Math.min(k, size);

  for (let i = 0; i < cut; i++) {
    total += importantContests[i].luck;
  }

  for (let i = cut; i < size; i++) {
    total -= importantContests[i].luck;
  }

  nonimportantContests.forEach((contest) => {
    total += contest.luck;
  });

  return total;
}

export default { luckBalance };
