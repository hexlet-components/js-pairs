# js-pairs

[![github action status](https://github.com/hexlet-components/js-pairs/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-pairs/actions)

## Install

```sh
npm install @hexlet/pairs --save
```

## Using

```javascript
import { cons, car, cdr, toString } from '@hexlet/pairs';

const pair = cons(3, 5);
car(pair); // 3
cdr(pair); // 5
toString(pair); // (3, 5)
```
