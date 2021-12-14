/**
 * Returns a Promise to wait for the specified milliseconds.
 *
 * @since 0.1.4
 * @param {number} [ms=1000] The number of milliseconds to wait.
 * @returns {Promise<null>} Returns a Promise to wait for the specified milliseconds.
 * @example
 *
 * await oim.await(3000);
 */
const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = wait;
