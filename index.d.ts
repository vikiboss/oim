import chunk from './array/chunk';
import format from './date/format';
import formatDateDiff from './date/formatDateDiff';
import isEmptyObject from './object/isEmptyObject';
import left from './string/left';
import mid from './string/mid';
import rand from './array/rand';
import random from './number/random';
import right from './string/right';
import shuffle from './array/shuffle';
import sum from './array/sum';
import wait from './other/wait';

export interface Oim {
  chunk: typeof chunk;
  format: typeof format;
  formatDateDiff: typeof formatDateDiff;
  isEmptyObject: typeof isEmptyObject;
  left: typeof left;
  mid: typeof mid;
  rand: typeof rand;
  random: typeof random;
  right: typeof right;
  shuffle: typeof shuffle;
  sum: typeof sum;
  wait: typeof wait;
}

declare const oim: Oim;

export default oim;
