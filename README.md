# js-pairs

[![github action status](https://github.com/hexlet-components/js-pairs/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-pairs/actions)

## Install

```sh
npm install @hexlet/pairs
```

## Usage example

```javascript
import {
  cons, car, cdr, toString, isPair,
} from '@hexlet/pairs';

const pair = cons(3, 5);

isPair(pair); // true

car(pair); // 3
cdr(pair); // 5

toString(pair); // (3, 5)
```
For more information, see the [Full Documentation](https://github.com/hexlet-components/js-pairs/tree/master/docs)
