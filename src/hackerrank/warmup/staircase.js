/**
 * @link Problem definition [[docs/hackerrank/warmup/staircase.md]]
 */

function staircase(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        line += ' ';
      } else {
        line += '#';
      }
    }

    result.push(line);
  }

  return result.join(`\n`);
}

export default { staircase };
export { staircase };
