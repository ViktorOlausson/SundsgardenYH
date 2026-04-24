import { createDrink, orderDrink } from "../../src/server";

describe("Coffee shop integration test", () => {
  test("orderDrink latte completes the full flow", () => {
    const result = orderDrink("latte");

    expect(result).toBe(true);
  });
});
