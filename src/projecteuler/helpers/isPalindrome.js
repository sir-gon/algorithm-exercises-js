export const isPalindrome = (n) =>
  n.toString().split('').reverse().join('') === n.toString();

export default { isPalindrome };
