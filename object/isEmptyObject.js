/**
 * Returns the chunk array.
 *
 * @since 0.1.10
 * @param {Object} obj The obejct to manipulate.
 * @returns {boolean} Returns a boolean that points wether it's an empty pure object.
 * @example
 *
 * oim.isEmptyObj({});
 *    // => true
 * oim.isEmptyObj(new Boolean());
 *    // => true
 */
const isEmptyObj = (obj) => {
  if (typeof obj !== 'object' || obj === null) return false;
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
};

module.exports = isEmptyObj;
