/**
 * @link Problem definition [[docs/hackerrank/implementation/betweenTwoSets.md]]
 */

function isFactor(n, group) {
  let result = true;
  let i = 0;

  if (group.length === 0) return false;

  do {
    if (n % group[i] !== 0) {
      result = false;
    }

    i += 1;
  } while (i < group.length && result);

  return result;
}

function factorOf(n, group) {
  let result = true;
  let i = 0;

  if (group.length === 0) return false;

  do {
    if (group[i] % n !== 0) {
      result = false;
    }

    i += 1;
  } while (i < group.length && result);

  return result;
}

function getTotalX(a, b) {
  let max = 0;
  for (const j of b) {
    if (j > max) max = j;
  }

  const result = [];

  for (let i = 1; i <= max; i++) {
    if (isFactor(i, a) && factorOf(i, b)) {
      result.push(i);
    }
  }

  return result.length;
}

export default { getTotalX, isFactor, factorOf };
export { getTotalX, isFactor, factorOf };
