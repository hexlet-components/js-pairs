export const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};

export const car = (pair) => pair('car');
export const cdr = (pair) => pair('cdr');

export const isPair = (pair) => typeof pair === 'function';

export const toString = (pair) => {
  if (pair === null) {
    return '()';
  }
  if (!isPair(pair)) {
    throw new Error(`Argument must be pair, but it was '${pair}'`);
  }
  
  const rec = (p) => {
    if (!isPair(p)) {
      return p;
    }
    const head = car(p);
    const tail = cdr(p);
    return `(${rec(head)}, ${rec(tail)})`;
  };

  return rec(pair);
};
