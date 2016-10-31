// @flow

type Message = 'car' | 'cdr';

type Pair = (message: Message) => any;

/**
 * Build pair
 * @example
 * const pair = cons(5, 'hello');
 * @example
 * const pair = cons(cons(1, null), 'world');
 **/
export const cons = (a: any, b: any): Pair => (message: Message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};

/**
 * Get car (first element) from pair
 * @example
 * const pair = cons(5, 'hello');
 * car(pair); // 5
 **/
export const car = (pair: Pair) => pair('car');

/**
 * Get cdr (second element) from pair
 * @example
 * const pair = cons(5, 'hello');
 * cdr(pair); // hello
 **/
export const cdr = (pair: Pair) => pair('cdr');

/**
 * Check if something is pair
 * @example
 * const pair = cons(5, 'hello');
 * isPair(pair); // true
 * isPair(5); // false
 **/
export const isPair = (pair: ?Pair) => typeof pair === 'function';

/**
 * Convert pair to string (recursively)
 * @example
 * toString(cons('', 10)); // ('', 10)
 **/
export const toString = (pair: Pair) => {
  if (!isPair(pair)) {
    throw new Error(`Argument must be pair, but it was '${String(pair)}'`);
  }

  const rec = p => {
    if (!isPair(p)) {
      return String(p);
    }
    const left = car(p);
    const right = cdr(p);
    return `(${rec(left)}, ${rec(right)})`;
  };

  return rec(pair);
};
