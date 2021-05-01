/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

 function problem0001(_DEBUG = true) {
  let total = 0;
  const top = 1000;

  for (let i = 0; i < top; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if(_DEBUG) console.log(`i = ${i}`);
      total += i;
    }
  }

  if(_DEBUG) console.log(`TOTAL = ${total}`);

  return total;
}

export default problem0001;
export { problem0001 };
