// @flow

import 'source-map-support/register';

type Message = 'car' | 'cdr';

type Pair = (message: Message) => any;

/**
 * Check if something is pair
 * @example
 * const pair = cons(5, 'hello');
 * isPair(pair); // true
 * isPair(5); // false
 */
export const isPair = (pair: ?Pair): boolean => typeof pair === 'function' && pair.pair;

export const checkPair = (pair: ?Pair): void => {
  if (!isPair(pair)) {
    const value = typeof pair === 'object' ? JSON.stringify(pair, null, 2) : String(pair);
    throw new Error(`Argument must be pair, but it was '${value}'`);
  }
};

/**
 * Build pair
 * @example
 * const pair = cons(5, 'hello');
 * @example
 * const pair = cons(cons(1, null), 'world');
 */
export const cons = (a: any, b: any): Pair => {
  const pair = (message: Message) => {
    switch (message) {
      case 'car':
        return a;
      case 'cdr':
        return b;
      default:
        throw new Error(`Unknown message '${message}'`);
    }
  };
  pair.pair = true;
  return pair;
};

/**
 * Get car (first element) from pair
 * @example
 * const pair = cons(5, 'hello');
 * car(pair); // 5
 */
export const car = (pair: Pair): any => {
  checkPair(pair);
  return pair('car');
};

/**
 * Get cdr (second element) from pair
 * @example
 * const pair = cons(5, 'hello');
 * cdr(pair); // hello
 */
export const cdr = (pair: Pair): any => {
  checkPair(pair);
  return pair('cdr');
};

/**
 * Convert pair to string (recursively)
 * @example
 * toString(cons('', 10)); // ('', 10)
 */
export const toString = (pair: Pair): string => {
  checkPair(pair);
  const rec = (p) => {
    if (!isPair(p)) {
      return String(p);
    }
    const left = car(p);
    const right = cdr(p);
    return `(${rec(left)}, ${rec(right)})`;
  };

  return rec(pair);
};
