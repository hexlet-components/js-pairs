import {
  cons,
  car,
  cdr,
  toString,
} from '../src';

describe('Pair', () => {
  it('#cons', () => {
    const pair = cons(3, 4);
    expect(car(pair)).toBe(3);
    expect(cdr(pair)).toBe(4);
  });

  it('#toString', () => {
    const pair = cons(10, -10);
    expect(toString(pair)).toBe('(10, -10)');
  });

  it('#toString2', () => {
    const pair = cons(cons(3, 5), cons(1, null));
    expect(toString(pair)).toBe('((3, 5), (1, null))');
  });

  it('#toString3', () => {
    const pair = cons(10, cons(1, 10));
    expect(toString(pair)).toBe('(10, (1, 10))');
  });

  it('#checkPair', () => {
    expect(() => {
      car(345);
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      cdr('asdf');
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      cdr(() => 'ehu');
    }).toThrowErrorMatchingSnapshot();

    expect(() => {
      car({ key: 'value' });
    }).toThrowErrorMatchingSnapshot();
  });
});
