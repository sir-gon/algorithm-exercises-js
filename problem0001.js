/**
 * https://projecteuler.net/problem=1
 *
 * Multiples of 3 and 5
 */

function problem0001(_top, _DEBUG = true) {
  let total = 0;

  for (let i = 0; i < _top; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (_DEBUG) console.log(`i = ${i}`);
      total += i;
    }
  }

  if (_DEBUG) console.log(`TOTAL = ${total}`);

  return total;
}

export default problem0001;
export { problem0001 };
