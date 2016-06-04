import * as list from './list';

export const isContains = (set, element) => list.isContains(set, element);

export const conj = (set, element) => {
  return isContains(set, element) ? set : list.cons(element, set);
};

export const disj = (set, element) =>
  list.filter(e => e !== element, set);

export const make = (...elements) => {
  return elements.reverse().reduce((acc, item) => {
    return isContains(acc, item) ? acc : conj(acc, item);
  }, null);
};

export const toString = (set) => list.toString(set);
