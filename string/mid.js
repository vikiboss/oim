/**
 * Returns a Promise to wait for the specified milliseconds.
 *
 * @since 0.1.4
 * @param {string} string The string to manipulate.
 * @param {string} start The start string to find.
 * @param {string} end The end string to find.
 * @param {boolean} [greedy=false] The number of milliseconds to wait.
 * @returns {Promise<null>} Returns a Promise to wait for the specified milliseconds.
 * @example
 *
 * oim.mid("ooimm", "o", "m");
 *    // => "oi"
 *
 * oim.mid("ooimm", "o", "m", true);
 *    // => "oim"
 */
const mid = (string, start, end, greedy = false) => {
  const front = string.indexOf(start);
  const back = greedy ? string.lastIndexOf(end) : string.indexOf(end);
  return string.slice(front + start.length, back);
};

module.exports = mid;
