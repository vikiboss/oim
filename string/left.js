/**
 * Returns the string on the left side of the specified sub string.
 *
 * @since 0.1.5
 * @param {string} string The string to manipulate.
 * @param {string} sub The specified sub string.
 * @param {boolean} [greed=false] Whether to use greed mode.
 * @returns {string} Returns the string on the left side of the specified sub string.
 * @example
 *
 * oim.left("ooimm", "m");
 *    // => "ooi"
 *
 * oim.left("ooimm", "i", true);
 *    // => "ooim"
 */
const left = (string, sub, greed = false) => {
  const index = greed ? string.lastIndexOf(sub) : string.indexOf(sub);
  if (index === -1) return '';
  return string.slice(0, index);
};

module.exports = left;
