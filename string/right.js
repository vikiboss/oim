/**
 * Returns the string on the right side of the specified sub string.
 *
 * @since 0.1.5
 * @param {string} string The string to manipulate.
 * @param {string} sub The specified sub string.
 * @param {boolean} [greed=false] Whether to use greed mode.
 * @returns {string} Returns the string on the right side of the specified sub string.
 * @example
 *
 * oim.right("ooimm", "m");
 *    // => ""
 *
 * oim.right("ooimm", "m", true);
 *    // => "m"
 */
const right = (string, sub, greed = false) => {
  const index = greed ? string.indexOf(sub) : string.lastIndexOf(sub);
  if (index === -1) return '';
  return string.slice(index + sub.length, string.length);
};

module.exports = right;
