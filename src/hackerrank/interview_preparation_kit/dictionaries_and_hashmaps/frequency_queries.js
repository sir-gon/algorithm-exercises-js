/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/frequency-queries.md]]
 */

export function freqQuery(queries) {
  const result = [];
  const dataMap = {};

  const __INITIAL__ = 0;
  const __INSERT__ = 1;
  const __DELETE__ = 2;
  const __SELECT__ = 3;

  const __NOT_FOUND__ = 0;
  const __FOUND__ = 1;

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
      case __SELECT__: {
        let i = 0;
        const entries = Object.entries(dataMap);

        for (const [key, value] of entries) {
          console.log(key, value);
          if (value === data) {
            result.push(__FOUND__);
            break;
          }
          i += 1;
        }
        if (i === entries.length) {
          result.push(__NOT_FOUND__);
        }
        break;
      }
      default:
        throw new Error('Invalid operation');
    }
  });

  return result;
}

export default { freqQuery };
