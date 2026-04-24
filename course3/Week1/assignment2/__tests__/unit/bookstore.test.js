import { findBook, reserveStock, confirmPurchase } from "../../src/bookStore";

describe("Bookstore unit tests", () => {
  test("findBook returns correct book and price", () => {
    const result = findBook("dune");

    expect(result).toEqual({
      title: "dune",
      price: 89,
    });
  });

  test("findBook returns undefined price for unknown book", () => {
    const result = findBook("harry potter");

    expect(result).toEqual({
      title: "harry potter",
      price: undefined,
    });
  });

  test("reserveStock returns a reservation code between 1000 and 9999", () => {
    const result = reserveStock({ title: "dune", price: 89 });

    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(1000);
    expect(result).toBeLessThanOrEqual(9999);
  });

  test("confirmPurchase throws error with falsy reservation code", () => {
    expect(() => confirmPurchase(null, 89)).toThrow("Invalid reservation");
  });
});
