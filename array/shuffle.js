const rand = require('./rand.js');

/**
 * Returns the randomly ordered primitive array.
 *
 * In fact, this function uses the `oim.rand()` function directly.
 *
 * @since 0.1.0
 * @param {Array<T>} array The array to manipulate.
 * @returns {Array<T>} Returns the randomly ordered primitive array.
 * @example
 *
 * oim.shuffle([1, 2, 3])
 *    // => [3, 1, 2]
 */
const shuffle = (array) => rand(array, array.length);

module.exports = shuffle;
