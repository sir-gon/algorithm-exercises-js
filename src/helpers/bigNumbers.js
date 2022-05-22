export const bigNum = (strNumber, base = 10) => {
  const result = [];
  let i;

  for (i = 0; i < strNumber.length; i++) {
    result.push(parseInt(strNumber.charAt(i), base));
  }

  return result;
};

export const bigSum = (strNumberA, strNumberB) => {
  const result = [];

  const a = bigNum(strNumberA).reverse();
  const b = bigNum(strNumberB).reverse();

  let sum = 0;
  let carry = 0;
  let digit = 0;

  // adjust numbers length
  if (a.length > b.length) {
    for (let i = b.length; i < a.length; i++) {
      b.push(0);
    }
  } else if (b.length > a.length) {
    for (let i = a.length; i < b.length; i++) {
      a.push(0);
    }
  }

  // do the sum
  for (let i = 0; i < a.length; i++) {
    if (i < b.length) {
      sum = a[i] + b[i] + carry;

      if (sum < 10) {
        digit = sum;
        carry = 0;
      } else {
        digit = Math.floor(sum % 10);
        carry = Math.floor(sum / 10);
      }

      result.push(digit);
    }
  }
  if (carry > 0) result.push(carry);

  return result
    .reverse()
    .reduce((previous, current) => `${previous}${current}`, '');
};

export const bigSumMany = (strNumberArr) => {
  let result = '0';

  for (let i = 0; i < strNumberArr.length; i++) {
    result = bigSum(result, strNumberArr[i]);
  }

  return result;
};

export const bigMultiplyRowToBigNum = (strNumber, multiplierDigit) => {
  const number = bigNum(strNumber).reverse();
  const result = [];

  let mul = 0;
  let carry = 0;
  let digit = 0;

  for (let i = 0; i < number.length; i++) {
    mul = number[i] * multiplierDigit + carry;

    if (mul < 10) {
      digit = mul;
      carry = 0;
    } else {
      digit = Math.floor(mul % 10);
      carry = Math.floor(mul / 10);
    }

    result.push(digit);
  }
  if (carry > 0) result.push(carry);

  return result.reverse();
};

export const bigMultiplyRowToString = (strNumber, multiplierDigit) =>
  bigMultiplyRowToBigNum(strNumber, multiplierDigit).reduce(
    (previous, current) => `${previous}${current}`,
    ''
  );

export const bigMultiply = (strMultiply, strNumMultiplier) => {
  const result = [];
  // const bigNumMultiply = bigNum(strMultiply).reverse();
  const bigNumMultiplier = bigNum(strNumMultiplier).reverse();

  for (let i = 0; i < bigNumMultiplier.length; i++) {
    result.push([]);
    result[i] = [];

    // padding position by row
    for (let j = 0; j < i; j++) {
      result[i].push(0);
    }

    // Product of miltiply digits as rows by every multiplier digit
    result[i] = result[i].concat(
      bigMultiplyRowToBigNum(strMultiply, bigNumMultiplier[i]).reverse()
    );

    // Transform row of digits to string
    result[i] = result[i]
      .reverse()
      .reduce((previous, current) => `${previous}${current}`, '');
  }
  return bigSumMany(result);
};

export const bigPower = (strBase, intExp) => {
  let result = '1';

  for (let i = 0; i < intExp; i++) {
    result = bigMultiply(result, strBase);
  }

  return result;
};

export const bigFactorial = (number) => {
  // check number as int

  let acum = '1';

  for (let multiplier = 1; multiplier <= number; multiplier++) {
    acum = bigMultiply(acum, `${multiplier}`);
  }

  return acum;
};

export default {
  bigNum,
  bigSum,
  bigSumMany,
  bigMultiplyRowToBigNum,
  bigMultiplyRowToString,
  bigMultiply,
  bigPower
};
