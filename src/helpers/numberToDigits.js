function numberToDigits(toDecimal) {
  let value = toDecimal.valueOf();
  const result = [];
  let res;

  while (value >= 1) {
    res = Math.floor(value % 10);

    result.push(res);

    value /= 10;
  }

  result.reverse();

  return result;
}

function countDigits(decimal) {
  return numberToDigits(decimal).length;
}

export default numberToDigits;
export { countDigits, numberToDigits };
