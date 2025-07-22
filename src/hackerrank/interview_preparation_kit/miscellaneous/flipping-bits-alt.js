/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/miscellaneous/flipping-bits.md]]
 * @see Solution notes [[docs/hackerrank/interview_preparation_kit/miscellaneous/flipping-bits-alt-solution-notes.md]]
 */

function flippingBitsAlt(n) {
  // eslint-disable-next-line no-bitwise
  return ~n >>> 0;
}

export default { flippingBitsAlt };
export { flippingBitsAlt };
