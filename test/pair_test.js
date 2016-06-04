import assert from 'assert';
import { cons, car, cdr, toString } from '../src/index.js';

describe('Pair', () => {
  it('#cons', () => {
    const pair = cons(3, 4);
    assert.equal(car(pair), 3);
    assert.equal(cdr(pair), 4);
  });

  it('#toString', () => {
    const pair = cons(10, -10);
    assert.equal(toString(pair), '(10, -10)');
  });
});
