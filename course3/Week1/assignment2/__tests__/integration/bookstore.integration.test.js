import { buyBook } from "../../src/bookStore";

describe("Bookstore integration test", () => {
  test("buyBook dune completes the full flow", () => {
    const result = buyBook("dune");

    expect(result.success).toBe(true);
  });
});
