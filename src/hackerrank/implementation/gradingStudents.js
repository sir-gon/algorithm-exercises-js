/**
 * @link Problem definition [[docs/hackerrank/implementation/gradingStudents.md]]
 */

export function gradingStudents(grades) {
  const minimum = 38;
  const roundTo = 5;
  const result = [];
  let modulus;

  for (let i = 0; i < grades.length; i++) {
    result.push(grades[i]);

    if (grades[i] >= minimum) {
      modulus = grades[i] % roundTo;
      if (modulus >= 3) {
        result[i] = grades[i] + (roundTo - modulus);
      }
    }
  }

  return result;
}

export default { gradingStudents };
