export function chunk<T>(array: Array<T>, size?: number): Array<Array<T>>;
export function format(date?: Date, formatStr?: string): string;
export function formatDateDiff(millisecond: number, isZh?: boolean): string;
export function left(string: string, sub: string, greed = false): string;
export function mid(string: string, start: string, end: string, greed?: boolean): string;
export function rand<T>(array: Array<T>): Array<T> | T;
export function random(min?: number, max?: number): number;
export function right(string: string, sub: string, greed = false): string;
export function shuffle(array: Array<any>): Array<any>;
export function wait(ms: number): Promise<undefined>;

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
