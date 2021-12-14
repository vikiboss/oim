export function format(date?: Date, formatStr?: string): string;
export function formatDateDiff(millisecond: number, isZh?: boolean): string;
export function rand(array: Array<any>): any;
export function random(min?: number, max?: number): number;
export function shuffle(array: Array<any>): Array<any>;

export interface Oim {
  format: typeof format;
  formatDateDiff: typeof formatDateDiff;
  rand: typeof rand;
  random: typeof random;
  shuffle: typeof shuffle;
}

declare const oim: Oim;

export default oim;
