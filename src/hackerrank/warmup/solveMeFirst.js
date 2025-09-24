/**
 * @link Problem definition [[docs/hackerrank/warmup/solveMeFirst.md]]
 */

function solveMeFirst(inputLines) {
  let result = 0;
  const radix = 10;

  inputLines.forEach((v) => {
    result += Number.parseInt(v, radix);
  });

  return result;
}

export default { solveMeFirst };
export { solveMeFirst };
