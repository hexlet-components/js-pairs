import assert from 'assert';
import { set } from '../src/index.js';

describe('Set', () => {
  it('#toString', () => {
    const numbers = set.make(3, 4, 3, 5, 5);
    assert.equal(set.toString(numbers), '(4, 3, 5)');
  });

  it('#conj', () => {
    const numbers = set.make(3, 4, 3, 5, 5);
    assert.ok(!set.isContains(numbers, 0));
    const numbers2 = set.conj(numbers, 0);
    assert.ok(set.isContains(numbers2, 0));
  });

  it('#disj', () => {
    const numbers = set.make(3, 4, 3, 5, 5);
    assert.ok(set.isContains(numbers, 4));
    const numbers2 = set.disj(numbers, 4);
    assert.ok(!set.isContains(numbers2, 4));
  });
});
