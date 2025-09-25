/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/stacks_and_queues/balanced-brackets.md]]
 */

const __YES__ = 'YES';
const __NO__ = 'NO';

function isBalancedCompute(s) {
  const pairs = { '{': '}', '(': ')', '[': ']' };
  const brackets = [];

  for (const letter of s.split('')) {
    if (letter in pairs) {
      brackets.push(letter);
    } else if (brackets.length > 0 && pairs[brackets.at(-1)] === letter) {
      brackets.pop();
    } else {
      return false;
    }

    console.debug(letter);
  }

  return brackets.length <= 0;
}

function isBalanced(s) {
  return isBalancedCompute(s) ? __YES__ : __NO__;
}

export default { isBalanced };
export { isBalanced };
