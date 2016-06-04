import assert from 'assert';
import { list } from '../src/index.js';

describe('List', () => {
  it('#l', () => {
    const numbers = list.l(3, 4, 5);
    assert.equal(list.toString(numbers), '(3, 4, 5)');
  });

  it('#reverse', () => {
    const numbers = list.l(3, 4, 5);
    assert.equal(list.toString(list.reverse(numbers)), '(5, 4, 3)');
  });

  it('#map', () => {
    const numbers = list.l(3, 4, 5);
    const numbers2 = list.map(n => n + 2, numbers);
    assert.equal(list.toString(numbers2), '(5, 6, 7)');
  });

  it('#filter', () => {
    const numbers = list.l(3, 4, 5, 8);
    const numbers2 = list.filter(n => n % 2 === 0, numbers);
    assert.equal(list.toString(numbers2), '(4, 8)');
  });

  it('#reduce', () => {
    const numbers = list.l(3, 4, 5, 8);
    assert.equal(list.length(numbers), 4);
  });

  it('#reduce', () => {
    const numbers = list.l(3, 4, 5, 8);
    const count = list.reduce((n, acc) => acc + 1, 0, numbers);
    assert.equal(count, 4);
  });

  it('#append', () => {
    const numbers = list.l(3, 4, 5, 8);
    const numbers2 = list.l(3, 2, 9);
    assert.equal(list.toString(list.append(numbers, numbers2)), '(3, 4, 5, 8, 3, 2, 9)');
  });

  it('#isEqual', () => {
    const numbers = list.l(3, 4, 5, 8);
    const numbers2 = list.l(3, 4, 5, 8);
    const numbers3 = list.l(3, 2, 9);
    assert.ok(list.isEqual(numbers, numbers2));
    assert.ok(!list.isEqual(numbers2, numbers3));
  });
});

