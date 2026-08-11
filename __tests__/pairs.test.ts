import { describe, expect, it } from "vitest";
import { car, cdr, cons, toString } from "../src/index.ts";

describe("Pair", () => {
  it("#cons", () => {
    const pair = cons(3, 4);
    expect(car(pair)).toBe(3);
    expect(cdr(pair)).toBe(4);
  });

  it("#toString", () => {
    const pair = cons(10, -10);
    expect(toString(pair)).toBe("(10, -10)");
  });

  it("#toString2", () => {
    const pair = cons(cons(3, 5), cons(1, null));
    expect(toString(pair)).toBe("((3, 5), (1, null))");
  });

  it("#toString3", () => {
    const pair = cons(10, cons(1, 10));
    expect(toString(pair)).toBe("(10, (1, 10))");
  });

  it("#checkPair", () => {
    expect(() => {
      // @ts-expect-error - runtime guard should throw when value is not a pair
      car(345);
    }).toThrowErrorMatchingSnapshot("car of a number");

    expect(() => {
      // @ts-expect-error - runtime guard should throw when value is not a pair
      cdr("asdf");
    }).toThrowErrorMatchingSnapshot("cdr of a string");

    expect(() => {
      // @ts-expect-error - runtime guard should throw when value is not a pair
      cdr(() => "ehu");
    }).toThrowErrorMatchingSnapshot("cdr of a function");

    expect(() => {
      // @ts-expect-error - runtime guard should throw when value is not a pair
      car({ key: "value" });
    }).toThrowErrorMatchingSnapshot("car of a plain object");
  });
});
