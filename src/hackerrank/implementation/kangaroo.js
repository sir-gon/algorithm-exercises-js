/**
 * @link Problem definition [[docs/hackerrank/implementation/kangaroo.md]]
 */

function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    if (x1 !== x2) return 'NO';
    return 'YES';
  }

  const x = (x2 - x1) / (v1 - v2);

  if (Number.isInteger(x)) {
    if (x >= 0) return 'YES';
  }

  return 'NO';
}

export default { kangaroo };
export { kangaroo };
