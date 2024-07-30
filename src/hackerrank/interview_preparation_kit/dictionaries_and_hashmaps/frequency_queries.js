/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/frequency-queries.md]]
 */

export function freqQuery(queries) {
  const result = [];
  const dataMap = {};
  const freqMap = {};

  const __INITIAL__ = 0;
  const __INSERT__ = 1;
  const __DELETE__ = 2;
  const __SELECT__ = 3;

  const __NOT_FOUND__ = 0;
  const __FOUND__ = 1;

  queries.forEach((query) => {
    const [operation, data] = query;

    const currentFreqValue = dataMap?.[data] ?? __INITIAL__;

    switch (operation) {
      case __INSERT__:
        {
          // map of values
          dataMap[data] = currentFreqValue + 1;

          // map of frequencies
          const newFreqKey = currentFreqValue + 1;
          if (freqMap?.[newFreqKey]) {
            freqMap[newFreqKey].push(data);
          } else {
            freqMap[newFreqKey] = [data];
          }

          if (freqMap?.[currentFreqValue]) {
            freqMap[currentFreqValue] = freqMap[currentFreqValue].filter(
              (f) => f !== data
            );
          }
        }
        break;
      case __DELETE__:
        {
          // map of values
          dataMap[data] = Math.max(0, currentFreqValue - 1);

          // map of frequencies
          const newFreqKey = currentFreqValue - 1;

          if (newFreqKey > 0) {
            if (freqMap?.[newFreqKey]) {
              freqMap[newFreqKey].push(data);
            } else {
              freqMap[newFreqKey] = [data];
            }
          }

          if (freqMap?.[currentFreqValue]) {
            freqMap[currentFreqValue] = freqMap[currentFreqValue].filter(
              (f) => f !== data
            );

            if (freqMap[currentFreqValue].length === 0) {
              delete freqMap?.[currentFreqValue];
            }
          }
        }
        break;
      case __SELECT__: {
        if (freqMap?.[data]) {
          result.push(__FOUND__);
        } else {
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
