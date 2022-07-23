/**
 * Calculate the sum of an array that consist of numbers
 *
 * @since 0.1.10
 * @param {Array<Number>} array An array that consist of numbers.
 * @return {number} Return the sum of numbers in arrays.
 * @example
 *
 * oim.sum([0, 5, -2]);
 *    // => 3
 */
const sum = (array) => array.reduce((p, n) => p + n, 0);

module.exports = sum;
