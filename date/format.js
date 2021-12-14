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
const format = (date = new Date(), formatStr = 'YYYY/MM/DD HH:mm:ss') => {
  // millisecond
  const SSS = String(date.getMilliseconds()).padStart(3, '0');
  const SS = String(Math.round(Number(SSS) / 10));
  const S = String(Math.round(Number(SSS) / 100));

  // second
  const s = String(date.getSeconds());
  const ss = s.padStart(2, '0');

  // minute
  const m = String(date.getMinutes());
  const mm = m.padStart(2, '0');

  // hour
  const hour = date.getHours();
  const h = String(hour % 12);
  const hh = h.padStart(2, '0');
  const H = String(hour);
  const HH = H.padStart(2, '0');

  // day
  const D = String(date.getDate());
  const DD = D.padStart(2, '0');

  // month
  const MON_MAP = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  const month = date.getMonth();
  const M = String(month + 1);
  const MM = M.padStart(2, '0');
  const MMM = MON_MAP[month];

  // year
  const YYYY = String(date.getFullYear());
  const YY = YYYY.slice(2);

  const map = { SSS, SS, S, ss, s, mm, m, hh, h, HH, H, DD, D, MMM, MM, M, YYYY, YY };

  for (const [k, v] of Object.entries(map)) {
    formatStr = formatStr.replace(new RegExp(k, 'g'), v);
  }

  return formatStr;
};

module.exports = format;
