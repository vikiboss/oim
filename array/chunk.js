/**
 * Returns the chunk array.
 *
 * @since 0.1.4
 * @param {Array<T>} array The array to manipulate.
 * @param {number} [n=2] The size of each chunk.
 * @returns {Array<T>} Returns the chunk array.
 * @example
 *
 * oim.chunk([1, 2, 3, 4, 5], 2);
 *    // => [[1, 2], [3, 4], [5]]
 */
const chunk = (array, size = 2) => {
  const length = array.length;
  if (!length || size < 1) return [];
  let [index, resindex] = [0, 0];
  const result = new Array(Math.ceil(length / size));
  while (index < length) result[resindex++] = array.slice(index, (index += size));
  return result;
};

module.exports = chunk;
