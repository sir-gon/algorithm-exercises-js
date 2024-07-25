/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/frequency-queries.md]]
 */

// Complete the freqQuery function below.
export function freqQuery(queries) {
  const result = [];
  const dataMap = {};

  const __INITIAL__ = 0;
  const __INSERT__ = 1;
  const __DELETE__ = 2;
  const __SELECT__ = 3;

  queries.forEach((query) => {
    const [operation, data] = query;

    const current = dataMap?.[data] ?? __INITIAL__;

    switch (operation) {
      case __INSERT__:
        dataMap[data] = current + 1;
        break;
      case __DELETE__:
        dataMap[data] = Math.max(0, current - 1);
        break;
      case __SELECT__:
        for (const [key, value] of Object.entries(dataMap)) {
          console.log(key, value);
          if (value === data) {
            result.push(1);
            break;
          }
        }
        if (result.length === 0) {
          result.push(0);
        }
        break;
      default:
        throw new Error('Invalid operation');
    }
  });

  return result;
}

export default { freqQuery };
