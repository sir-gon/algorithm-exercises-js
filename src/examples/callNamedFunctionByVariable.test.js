import { describe, expect, it } from '@jest/globals';
import objTest from './callNamedFunctionByVariable.js';

describe('calling function from object', () => {
  it('calling function from object as a variable', () => {
    expect.assertions(2);

    const funcName = 'testCall';
    const func = objTest[funcName];

    expect(func).toStrictEqual(expect.any(Function));
    expect(objTest[funcName]()).toBe(true);
  });
});
