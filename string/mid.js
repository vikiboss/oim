/**
 * Return the middle text of given string.
 *
 * @since 0.1.4
 * @param {string} string The string to manipulate.
 * @param {string} start The start string to find.
 * @param {string} end The end string to find.
 * @param {boolean} [greed=false] Whether to use greed mode.
 * @returns {string} Return the middle text of given string.
 * @example
 *
 * oim.mid("ooimm", "o", "m");
 *    // => "oi"
 *
 * oim.mid("ooimm", "o", "m", true);
 *    // => "oim"
 */
const mid = (string, start, end, greed = false) => {
  const front = string.indexOf(start);
  const back = greed ? string.lastIndexOf(end) : string.indexOf(end, front);
  if (front === -1 || back === -1 || front + start.length >= back) return '';
  return string.slice(front + start.length, back);
};

module.exports = mid;
