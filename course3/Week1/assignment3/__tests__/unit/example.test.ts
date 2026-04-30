import { describe, expect, it } from "vitest";

const getUser = () => ({
  id: 1,
  name: "Alice",
});

const divide = (a: number, b: number) => a / b;

const reverseString = (str: string) => str.split("").reverse().join("");

const contains = <T>(arr: T[], val: T) => arr.includes(val);

const countWord = (str: string) => str.trim().split(" ").length;

const toBollean = (val: 0 | 1): boolean => Boolean(val);

const getLast = (arr: number[]) => arr[arr.length - 1];

const powerOf = (base: number, exp: number): number => base ** exp;

const flatten = <T>(arr: T[]): T[] => arr.flat(Infinity) as T[];

describe("example test", () => {
  it("checks that Vitest is working", () => {
    expect(
      flatten([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([1, 2, 3, 4]);
    expect(flatten([[1, [2]], [3]])).toEqual([1, 2, 3]);
  });
});
