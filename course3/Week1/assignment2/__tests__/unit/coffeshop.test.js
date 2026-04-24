import { createDrink, prepareOrder } from "../../src/server";

describe("coffee shop unit test", () => {
  test("createDrink return correct type and price for latte", () => {
    const result = createDrink("latte");

    expect(result).toEqual({
      type: "latte",
      price: 45,
    });
  });

  test("createDrink returns undefined price for unknown drinkt type", () => {
    const result = createDrink("tea");

    expect(result).toEqual({
      type: "tea",
      price: undefined,
    });
  });

  test("prepareOrder return a ticket number between 0 and 999", () => {
    const result = prepareOrder({ type: "latte", price: 45 });

    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(999);
  });
});
