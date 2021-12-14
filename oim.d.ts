export function chunk<T>(array: Array<T>, size?: number): Array<Array<T>>;
export function format(date?: Date, formatStr?: string): string;
export function formatDateDiff(millisecond: number, isZh?: boolean): string;
export function rand<T>(array: Array<T>): Array<T> | T;
export function mid(string: string, start: string, end: string, greedy?: boolean): string;
export function random(min?: number, max?: number): number;
export function shuffle(array: Array<any>): Array<any>;
export function wait(ms: number): Promise<undefined>;

export interface Oim {
  chunk: typeof chunk;
  format: typeof format;
  formatDateDiff: typeof formatDateDiff;
  mid: typeof mid;
  rand: typeof rand;
  random: typeof random;
  shuffle: typeof shuffle;
  wait: typeof wait;
}

declare const oim: Oim;

export default oim;
