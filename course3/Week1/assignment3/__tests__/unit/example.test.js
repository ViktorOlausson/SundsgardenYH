import { describe, expect, it } from "vitest";

const getUser = () => ({
  id: 1,
  name: "Alice",
});

describe("example test", () => {
  it("checks that Vitest is working", () => {
    expect(getUser()).toEqual({ id: 1, name: "Alice" });
  });
});
