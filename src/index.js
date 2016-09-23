// @flow

type Message = 'car' | 'cdr';
type Pair = (message: Message) => any;

export const cons = (a: any, b: any) => (message: Message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};

export const car = (pair: Pair) => pair('car');
export const cdr = (pair: Pair) => pair('cdr');

export const isPair = (pair: ?Pair) => typeof pair === 'function';

export const toString = (pair: ?Pair) => {
  if (pair === null) {
    return '()';
  }
  if (!isPair(pair)) {
    throw new Error(`Argument must be pair, but it was '${String(pair)}'`);
  }

  const rec = p => {
    if (!isPair(p)) {
      return p;
    }
    const head = car(p);
    const tail = cdr(p);
    return `(${rec(head)}, ${rec(tail)})`;
  };

  return rec(pair);
};
