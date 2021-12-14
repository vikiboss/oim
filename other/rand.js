import random from '../number/random';
/**
 * Returns an element(or array contains multiple random elements) from given array.
 *
 * @since 0.1.0
 * @param {Array} array The array to consult.
 * @param {number} [n=1] The number of elements to pick randomly, default to 1.
 * @returns {any} Returns the random element (or an array with the length meeting).
 * @example
 *
 * rand([1, 2, 3])
 *    // => a random element in the given array.
 *
 * rand([1, 2, 3], 2)
 *    // => two random elements in the given array.
 */
const rand = (array, n = 1) => {
  n = Math.min(array.length, n);
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return array[random(0, array.length - 1)];
  } else {
    let index = -1;
    const lastIndex = array.length - 1;
    const result = array.concat();
    while (++index < array.length) {
      const rand = random(index, lastIndex);
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result.slice(0, n);
  }
};

export default rand;
