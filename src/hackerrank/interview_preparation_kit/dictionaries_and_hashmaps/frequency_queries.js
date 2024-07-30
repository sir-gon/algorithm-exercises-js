/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/dictionaries_and_hashmaps/frequency-queries.md]]
 */

export function updateFrequency(frequencyMap, data, currentFreq, newFreq) {
  const freqMap = frequencyMap;

  if (newFreq > 0) {
    if (freqMap?.[newFreq]) {
      freqMap[newFreq].push(data);
    } else {
      freqMap[newFreq] = [data];
    }
  }

  if (freqMap?.[currentFreq]) {
    freqMap[currentFreq] = freqMap[currentFreq].filter((f) => f !== data);

    if (freqMap[currentFreq].length === 0) {
      delete freqMap?.[currentFreq];
    }
  }

  return freqMap;
}

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

    const currentFreq = dataMap?.[data] ?? __INITIAL__;
    let newFreq = currentFreq + 1;

    switch (operation) {
      case __INSERT__:
        // map of values
        dataMap[data] = currentFreq + 1;

        // map of frequencies
        newFreq = currentFreq + 1;
        break;
      case __DELETE__:
        // map of values
        dataMap[data] = Math.max(0, currentFreq - 1);

        // map of frequencies
        newFreq = currentFreq - 1;

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

    if (operation === __INSERT__ || operation === __DELETE__) {
      updateFrequency(freqMap, data, currentFreq, newFreq);
    }
  });

  return result;
}

export default { freqQuery };
