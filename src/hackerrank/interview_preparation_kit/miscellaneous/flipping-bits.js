/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/miscellaneous/flipping-bits.md]]
 */

const __BINARY_BASE__ = 2;
const __NUMBER_SIZE_IN_BITS__ = 32;

function flippingBits(n) {
  let nBinaryStr = n.toString(__BINARY_BASE__);
  nBinaryStr = nBinaryStr.padStart(__NUMBER_SIZE_IN_BITS__, '0');

  let resultBinStr = '';

  nBinaryStr.split('').forEach((binDigit) => {
    if (binDigit === '1') {
      resultBinStr += '0';
    } else {
      resultBinStr += '1';
    }
  });

  return Number.parseInt(resultBinStr, __BINARY_BASE__);
}

export default { flippingBits };
export { flippingBits };
