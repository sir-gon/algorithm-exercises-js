import { bigNum } from './bigNumbers.js';

const _CENTS_ = 'hundred';
const _MILLS_ = 'thousand';

const dictionary = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '100': 'hundred',
  '1000': 'thousand'
};

const bigNumToWord = (value, bigValue) => {
  /// 1 to 19
  if (bigValue.length <= 2 && value > 0 && value <= 19) {
    return dictionary[value];
  }

  /// 20 to 99
  if (bigValue.length === 2 && value >= 20 && value <= 99) {
    const dec = Math.floor(value / 10) * 10;
    const unit = Math.floor(value % 10);

    if (unit === 0) {
      return `${dictionary[dec]}`;
    }

    return `${dictionary[dec]}-${dictionary[unit]}`;
  }

  /// 100 to 999
  if (bigValue.length === 3) {
    const rest = Math.floor(value % 100);
    if (rest === 0) {
      return `${dictionary[bigValue[0]]} ${_CENTS_}`;
    }

    return `${dictionary[bigValue[0]]} ${_CENTS_} and ${bigNumToWord(rest, [
      bigValue[1],
      bigValue[2]
    ])}`;
  }

  /// up to 1000
  if (value === 1000) {
    return `${dictionary[bigValue[0]]} ${_MILLS_}`;
  }

  throw new Error('invalid value');
};

// public functions
export const numberToWord = (n) => {
  if (!n) return '';

  const value = n.valueOf();
  const bigValue = bigNum(`${value}`);

  return bigNumToWord(value, bigValue);
};

export default { numberToWord };
