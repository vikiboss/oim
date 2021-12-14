/**
 * Produces a random number between `min` and `max` bounds.
 *
 * @since 0.1.0
 * @param {number} [min=0] The min integer bound.
 * @param {number} [max=1] The max integer bound.
 * @return {number} Return the random integer.
 * @example
 *
 * oim.random(0, 5);
 *    // => 3
 */
const random = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = random;
