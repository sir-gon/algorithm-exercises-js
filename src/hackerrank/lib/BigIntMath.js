/* istanbul ignore file */

class BigIntMath {
  static max(...values) {
    if (values.length === 0) {
      return null;
    }

    if (values.length === 1) {
      return values[0];
    }

    let max = values[0];
    for (let i = 1; i < values.length; i++) {
      if (values[i] > max) {
        max = values[i];
      }
    }
    return max;
  }

  static min(...values) {
    if (values.length === 0) {
      return null;
    }

    if (values.length === 1) {
      return values[0];
    }

    let min = values[0];
    for (let i = 1; i < values.length; i++) {
      if (values[i] < min) {
        min = values[i];
      }
    }
    return min;
  }

  static sign(value) {
    if (value > 0n) {
      return 1n;
    }
    if (value < 0n) {
      return -1n;
    }
    return 0n;
  }

  static abs(value) {
    if (this.sign(value) === -1n) {
      return -value;
    }
    return value;
  }

  // https://stackoverflow.com/questions/53683995/javascript-big-integer-square-root/58863398#58863398
  static rootNth(value, k = 2n) {
    if (value < 0n) {
      throw Error('negative number is not supported');
    }

    let o = 0n;
    let x = value;
    let limit = 100;

    while (x ** k !== k && x !== o && limit > 0) {
      limit -= 1;
      o = x;
      x = ((k - 1n) * x + value / x ** (k - 1n)) / k;
    }

    return x;
  }

  static sqrt(value) {
    return BigIntMath.rootNth(value);
  }
}

export default { BigIntMath };
export { BigIntMath };
