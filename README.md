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

### TypeScript

Full type definitions ship with the package:

```ts
import { cons, car } from '@hexlet/pairs'
import type { Pair } from '@hexlet/pairs'

const pair: Pair<number, string> = cons(1, 'hexlet')
const left = car(pair) // type: number
```

For more information, see the [Full Documentation](https://github.com/hexlet-components/js-pairs/tree/master/docs)

## Development

- `npm test` &mdash; run Vitest
- `npm run lint` &mdash; ESLint (JS + TS)
- `npm run typecheck` &mdash; strict TypeScript diagnostics
- `npm run build` &mdash; emit ESM artifacts to `dist/`

---

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io?utm_source=github&utm_medium=link&utm_campaign=js-pairs)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io?utm_source=github&utm_medium=link&utm_campaign=js-pairs).
