import assert from 'assert';
import * as pairs from './src/index.js';

describe('Pairs', () => {
  it('#cons', () => {
    const pair = pairs.cons(3, 4);
    assert.equal(pairs.car(pair), 3);
    assert.equal(pairs.cdr(pair), 4);
  });

  it('#toString', () => {
    const pair = pairs.cons(10, -10);
    assert.equal(pairs.toString(pair), '(10, -10)');
  });
});
