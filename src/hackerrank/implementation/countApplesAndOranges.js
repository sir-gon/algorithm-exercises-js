/**
 * @link Problem definition [[docs/hackerrank/implementation/countApplesAndOranges.md]]
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let cApples = 0;
  let cOranges = 0;

  for (const apple of apples) {
    if (a + apple >= s && a + apple <= t) {
      cApples += 1;
    }
  }

  for (const orange of oranges) {
    if (b + orange >= s && b + orange <= t) {
      cOranges += 1;
    }
  }

  const result = [cApples, cOranges];

  return result.join('\n');
}

export default { countApplesAndOranges };
export { countApplesAndOranges };
