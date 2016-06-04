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
  const rec = (p) => {
    if (pair === null) {
      return '';
    }
    const head = car(p);
    const tail = cdr(p);
    if (isPair(tail)) {
      return `${head}, ${rec(tail)}`;
    } else if (tail === null) {
      return head;
    }
    return `${head}, ${tail}`;
  };

  return `(${rec(pair)})`;
};
