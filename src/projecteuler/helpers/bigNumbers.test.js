import {
  bigMultiply,
  bigMultiplyRowToString,
  bigMultiplyRowToBigNum,
  bigNum,
  bigSum,
  bigSumMany,
  bigPower,
  bigFactorial
} from './bigNumbers.js';

describe('bigNumber operations', () => {
  it('bigNum examples', () => {
    expect.assertions(4);

    expect(bigNum('2')).toStrictEqual([2]);
    expect(bigNum('122')).toStrictEqual([1, 2, 2]);
    expect(bigNum('1234567890')).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(
      bigNum('12345678901234567890123456789012345678901234567890')
    ).toStrictEqual([
      /* eslint-disable prettier/prettier */
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0
      /* eslint-enable prettier/prettier */
    ]);
  });

  it('bigSum examples', () => {
    expect.assertions(5);

    expect(bigSum('2', '2')).toBe('4');
    expect(bigSum('12', '12')).toBe('24');
    expect(bigSum('249', '654')).toBe('903');
    expect(bigSum('3491', '854')).toBe('4345');
    expect(bigSum('12345678901234567890', '12345678901234567890')).toBe(
      '24691357802469135780'
    );
  });

  it('bigSumMany examples', () => {
    expect.assertions(5);

    expect(bigSumMany(['2', '2'])).toBe('4');
    expect(bigSumMany(['123', '321'])).toBe('444');

    expect(bigSumMany(['2', '2', '2'])).toBe('6');

    expect(bigSumMany(['349', '854', '213', '543'])).toBe('1959');

    expect(
      bigSumMany([
        '12345678901234567890',
        '12345678901234567890',
        '12345678901234567890',
        '12345678901234567890'
      ])
    ).toBe('49382715604938271560');
  });

  it('bigMultiplyRowToBigNum examples', () => {
    expect.assertions(4);

    expect(bigMultiplyRowToBigNum('2', 2)).toStrictEqual([4]);
    expect(bigMultiplyRowToBigNum('12', 2)).toStrictEqual([2, 4]);
    expect(bigMultiplyRowToBigNum('12', 4)).toStrictEqual([4, 8]);
    expect(bigMultiplyRowToBigNum('999', 9)).toStrictEqual([8, 9, 9, 1]);
  });

  it('bigMultiplyRowToString examples', () => {
    expect.assertions(4);

    expect(bigMultiplyRowToString('2', 2)).toBe('4');
    expect(bigMultiplyRowToString('12', 2)).toBe('24');
    expect(bigMultiplyRowToString('12', 4)).toBe('48');
    expect(bigMultiplyRowToString('999', 9)).toBe('8991');
  });

  it('bigMultiply examples', () => {
    expect.assertions(4);

    expect(bigMultiply('2', '2')).toBe('4');
    expect(bigMultiply('2', '22')).toBe('44');

    expect(bigMultiply('999', '999')).toBe('998001');
    expect(bigMultiply('12345678901234567890', '12345678901234567890')).toBe(
      '152415787532388367501905199875019052100'
    );
  });

  it('bigPower examples', () => {
    expect.assertions(4);

    expect(bigPower('2', 2)).toBe('4');
    expect(bigPower('2', 4)).toBe('16');
    expect(bigPower('2', 5)).toBe('32');
    expect(bigPower('2', 1000)).toBe(
      '10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376'
    );
  });

  it('bigFactorial examples', () => {
    expect.assertions(4);

    expect(bigFactorial('2')).toBe('2');
    expect(bigFactorial('3')).toBe('6');
    expect(bigFactorial('5')).toBe('120');
    expect(bigFactorial('10')).toBe('3628800');
  });
});
