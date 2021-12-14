/**
 * A time format function similar to dayjs.format().
 *
 * @since 0.1.0
 * @param {Date} [date=new Date()] The date to format.
 * @param {string} [formatStr='YYYY/MM/DD HH:mm:ss'] The format string which following the rules of dayjs.
 * @returns {string} Return the formated string.
 * @example
 *
 * format(new Date('2020/02/07 02:07'), "YY-M-D H:m");
 *    // => '19-2-7 2:7'
 */
const format = (date = new Date(), formatStr = 'YYYY/MM/DD HH:mm:ss') => {
  // millisecond
  const SSS = String(date.getMilliseconds()).slice(0, 3);
  const SS = String(SSS.slice(0, 2));
  const S = String(SS.slice(0, 1));

  // second
  const ss = String(date.getSeconds()).padStart(2, '0');
  const s = String(date.getSeconds());

  // minute
  const mm = String(date.getMinutes()).padStart(2, '0');
  const m = String(date.getMinutes());

  // hour
  const hh = String(date.getHours() % 12).padStart(2, '0');
  const h = String(date.getHours() % 12);
  const HH = String(date.getHours()).padStart(2, '0');
  const H = String(date.getHours());

  // day
  const DD = String(date.getDate()).padStart(2, '0');
  const D = String(date.getDate());

  // month
  const MON_MAP = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  const MMM = MON_MAP[date.getMonth()];
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const M = String(date.getMonth() + 1);

  // year
  const YYYY = String(date.getFullYear());
  const YY = String(date.getFullYear()).slice(2);

  const map = { SSS, SS, S, ss, s, mm, m, hh, h, HH, H, DD, D, MMM, MM, M, YYYY, YY };

  for (const [k, v] of Object.entries(map)) {
    formatStr = formatStr.replace(new RegExp(k, 'g'), v);
  }

  return formatStr;
};

export default format;
