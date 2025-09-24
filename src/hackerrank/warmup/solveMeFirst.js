/**
 * @link Problem definition [[docs/hackerrank/warmup/solveMeFirst.md]]
 */

function solveMeFirst(inputLines) {
  let result = 0;
  const radix = 10;

  for (const v of inputLines) {
    result += Number.parseInt(v, radix);
  }

  return result;
}

export default { solveMeFirst };
export { solveMeFirst };
