export type Pair<T, U> = {
  (message: 'car'): T
  (message: 'cdr'): U
  pair: true
}

/**
 * Build pair
 * @example
 * const pair = cons(5, 'hello');
 * @example
 * const pair = cons(cons(1, null), 'world');
 */
export const cons = <T, U>(left: T, right: U): Pair<T, U> => {
  const pair = ((message: string) => {
    switch (message) {
      case 'car':
        return left
      case 'cdr':
        return right
      default:
        throw new Error(`Unknown message '${message}'`)
    }
  }) as Pair<T, U>

  pair.pair = true
  return pair
}

/**
 * Check if something is pair
 * @example
 * const pair = cons(5, 'hello');
 * isPair(pair); // true
 * isPair(5); // false
 */
export const isPair = (value: unknown): value is Pair<unknown, unknown> =>
  typeof value === 'function' && (value as Partial<Pair<unknown, unknown>>).pair === true

export function checkPair(value: unknown): asserts value is Pair<unknown, unknown> {
  if (!isPair(value)) {
    const printable = typeof value === 'object' && value !== null
      ? JSON.stringify(value, null, 2)
      : String(value)

    throw new Error(`Argument must be pair, but it was '${printable}'`)
  }
}

/**
 * Get car (first element) from pair
 * @example
 * const pair = cons(5, 'hello');
 * car(pair); // 5
 */
export const car = <T>(pair: Pair<T, unknown>): T => {
  checkPair(pair)
  return pair('car')
}

/**
 * Get cdr (second element) from pair
 * @example
 * const pair = cons(5, 'hello');
 * cdr(pair); // hello
 */
export const cdr = <U>(pair: Pair<unknown, U>): U => {
  checkPair(pair)
  return pair('cdr')
}

/**
 * Convert pair to string (recursively)
 * @example
 * toString(cons('', 10)); // ('', 10)
 */
export const toString = (pair: Pair<unknown, unknown>): string => {
  checkPair(pair)

  const rec = (value: unknown): string => {
    if (!isPair(value)) {
      return String(value)
    }

    const left = car(value)
    const right = cdr(value)
    return `(${rec(left)}, ${rec(right)})`
  }

  return rec(pair)
}
