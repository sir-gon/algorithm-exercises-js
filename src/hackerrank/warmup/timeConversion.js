/**
 * @link Problem definition [[docs/hackerrank/warmup/timeConversion.md]]
 */

function timeConversion(s) {
  let meridian = s.substring(s.length - 2, s.length);
  meridian = meridian.toLowerCase();

  const timeStr = s.substring(0, s.length - 2);
  const time = timeStr.split(':');
  let hour = parseInt(time[0], 10);

  if (hour >= 12) {
    hour = 0;
  }

  if (meridian === 'pm') {
    hour += 12;
  }

  time[0] = hour.toString().padStart(2, '0');

  const conversion = time.join(':');

  return conversion;
}

export default { timeConversion };
export { timeConversion };
