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
    expect.assertions(7);

    expect(bigSum('2', '2')).toStrictEqual('4');
    expect(bigSum('12', '12')).toStrictEqual('24');
    expect(bigSum('123', '321')).toStrictEqual('444');

    expect(bigSum('249', '654')).toStrictEqual('903');
    expect(bigSum('349', '854')).toStrictEqual('1203');

    expect(bigSum('3491', '854')).toStrictEqual('4345');
    expect(
      bigSum('12345678901234567890', '12345678901234567890')
    ).toStrictEqual('24691357802469135780');
  });

  it('bigSumMany examples', () => {
    expect.assertions(8);

    expect(bigSumMany(['2', '2'])).toStrictEqual('4');
    expect(bigSumMany(['12', '12'])).toStrictEqual('24');
    expect(bigSumMany(['123', '321'])).toStrictEqual('444');

    expect(bigSumMany(['2', '2', '2'])).toStrictEqual('6');
    expect(bigSumMany(['349', '854'])).toStrictEqual('1203');

    expect(bigSumMany(['349', '854', '213', '543'])).toStrictEqual('1959');
    expect(
      bigSumMany(['12345678901234567890', '12345678901234567890'])
    ).toStrictEqual('24691357802469135780');
    expect(
      bigSumMany([
        '12345678901234567890',
        '12345678901234567890',
        '12345678901234567890',
        '12345678901234567890'
      ])
    ).toStrictEqual('49382715604938271560');
  });

  it('bigMultiplyRowToBigNum examples', () => {
    expect.assertions(8);

    expect(bigMultiplyRowToBigNum('2', 2)).toStrictEqual([4]);
    expect(bigMultiplyRowToBigNum('12', 2)).toStrictEqual([2, 4]);
    expect(bigMultiplyRowToBigNum('12', 4)).toStrictEqual([4, 8]);
    expect(bigMultiplyRowToBigNum('999', 9)).toStrictEqual([8, 9, 9, 1]);

    expect(bigMultiplyRowToString('2', 2)).toStrictEqual('4');
    expect(bigMultiplyRowToString('12', 2)).toStrictEqual('24');
    expect(bigMultiplyRowToString('12', 4)).toStrictEqual('48');
    expect(bigMultiplyRowToString('999', 9)).toStrictEqual('8991');
  });

  it('bigMultiply examples', () => {
    expect.assertions(4);

    expect(bigMultiply('2', '2')).toStrictEqual('4');
    expect(bigMultiply('2', '22')).toStrictEqual('44');

    expect(bigMultiply('999', '999')).toStrictEqual('998001');
    expect(
      bigMultiply('12345678901234567890', '12345678901234567890')
    ).toStrictEqual('152415787532388367501905199875019052100');
  });

  it('bigPower examples', () => {
    expect.assertions(4);

    expect(bigPower('2', 2)).toStrictEqual('4');
    expect(bigPower('2', 4)).toStrictEqual('16');
    expect(bigPower('2', 5)).toStrictEqual('32');
    expect(bigPower('2', 1000)).toStrictEqual(
      '10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376'
    );
  });

  it('bigFactorial examples', () => {
    expect.assertions(4);

    expect(bigFactorial('2')).toStrictEqual('2');
    expect(bigFactorial('3')).toStrictEqual('6');
    expect(bigFactorial('5')).toStrictEqual('120');
    expect(bigFactorial('10')).toStrictEqual('3628800');
  });
});
