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
export function chunk<T>(array: Array<T>, size?: number): Array<Array<T>>;

/**
 * A time format function similar to dayjs.format().
 *
 * @since 0.1.0
 * @param {Date} [date=new Date()] The date to format.
 * @param {string} [formatStr='YYYY/MM/DD HH:mm:ss'] The format string which following the rules of dayjs.
 * @returns {string} Return the formated string.
 * @example
 *
 * oim.format(new Date('2020/02/07 02:07'), "YY-M-D H:m");
 *    // => '19-2-7 2:7'
 */
export function format(date?: Date, formatStr?: string): string;

/**
 * Return a string of time span. (30 days pre month and 360 days pre year by default)
 *
 * @since 0.1.0
 * @param {number} millisecond The date diff milliseconds.
 * @param {boolean} [isZh=true] The date diff milliseconds.
 * @returns {string} Return the random integer.
 * @example
 *
 * oim.formatDateDiff(new Date('2020/02/07 02:07') - new Date('2001/04/07 04:07'));
 *    // => '19年1月9天22时'
 *
 * oim.formatDateDiff(new Date('2020/02/07 02:07', false) - new Date('2001/04/07 04:07'));
 *    // => '19y1mo9d22h'
 */
export function formatDateDiff(millisecond: number, isZh?: boolean): string;

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
export function left(string: string, sub: string, greed?: boolean): string;

/**
 * Return the middle text of given string.
 *
 * @since 0.1.4
 * @param {string} string The string to manipulate.
 * @param {string} start The start string to find.
 * @param {string} end The end string to find.
 * @param {boolean} [greed=false] Whether to use greed mode.
 * @returns {string} Return the middle text of given string.
 * @example
 *
 * oim.mid("ooimm", "o", "m");
 *    // => "oi"
 *
 * oim.mid("ooimm", "o", "m", true);
 *    // => "oim"
 */
export function mid(string: string, start: string, end: string, greed?: boolean): string;

/**
 * Returns an element(or array contains multiple random elements) from given array.
 *
 * @since 0.1.0
 * @param {Array<T>} array The array to manipulate.
 * @param {number} [n=1] The number of elements to pick randomly, default to 1.
 * @returns {Array<T>|T} Returns the random element (or an array with the length meeting).
 * @example
 *
 * oim.rand([1, 2, 3]);
 *    // => 2
 *
 * oim.rand([1, 2, 3], 2);
 *    // => [1, 3]
 */
export function rand<T>(array: Array<T>, n?: number): Array<T> | T;

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
export function random(min?: number, max?: number): number;

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
 *    // => "ooi"
 *
 * oim.right("ooimm", "i", true);
 *    // => "ooim"
 */
export function right(string: string, sub: string, greed?: boolean): string;

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
 * oim.shuffle([1, 2, 3]);
 *    // => [3, 1, 2]
 */
export function shuffle<T>(array: Array<T>): Array<T>;

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
export function wait(ms?: number): Promise<undefined>;

export interface Oim {
  chunk: typeof chunk;
  format: typeof format;
  formatDateDiff: typeof formatDateDiff;
  left: typeof left;
  mid: typeof mid;
  rand: typeof rand;
  random: typeof random;
  right: typeof right;
  shuffle: typeof shuffle;
  wait: typeof wait;
}

declare const oim: Oim;

export default oim;
