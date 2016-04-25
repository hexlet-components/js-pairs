import assert from 'assert';
import * as pairs from './src/index.js';

describe('Pairs', () => {
  it('should works', () => {
    const pair = pairs.cons(3, 4);
    assert.equal(pairs.car(pair), 3);
    assert.equal(pairs.cdr(pair), 4);
  });
});
