/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/arrays/new_year_chaos.md]]
 */

export const TOO_CHAOTIC_ERROR = 'Too chaotic';

export function minimumBribes(q) {
  let bribes = 0;
  let i = 0;

  q.forEach((value) => {
    const position = i + 1;
    if (value - position > 2) {
      throw new Error(TOO_CHAOTIC_ERROR);
    }

    const fragment = q.slice(Math.max(value - 2, 0), i);

    fragment.forEach((k) => {
      if (k > value) {
        bribes += 1;
      }
    });
    i += 1;
  });

  return bribes;
}

export function minimumBribesTransform(queue) {
  try {
    return minimumBribes(queue);
  } catch (e) {
    return TOO_CHAOTIC_ERROR;
  }
}

export default { minimumBribes, minimumBribesTransform, TOO_CHAOTIC_ERROR };
