import rand from './rand';
/**
 * Returns the randomly ordered primitive array.
 *
 * In fact, this function uses the `oim.rand()` function directly.
 *
 * @since 0.1.0
 * @param {Array} array The array to consult.
 * @returns {Array} RReturns the randomly ordered primitive array.
 * @example
 *
 * oim.shuffle([1, 2, 3])
 *    // => [3, 1, 2]
 */
const shuffle = (array) => rand(array, array.length);

export default shuffle;
