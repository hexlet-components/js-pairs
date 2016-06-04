import * as listModule from './list';
import * as pairModule from './pair';

export const cons = pairModule.cons;
export const car = pairModule.car;
export const cdr = pairModule.cdr;
export const toString = pairModule.toString;

export const list = listModule;
