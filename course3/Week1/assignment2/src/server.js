// import express from "express";
// // import { PrismaClient } from "./generated/prisma/client.js";
// // import { PrismaPg } from "@prisma/adapter-pg";
// // import "dotenv/config";

// const app = express();
// app.use(express.json());
// const PORT = 3000;
// // const connectionString = process.env.DATABASE_URL;

// // if (!connectionString) {
// //   throw new Error("DATABASE_URL is not set");
// // }

// // const adapter = new PrismaPg({ connectionString });
// // const prisma = new PrismaClient({ adapter });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:3000`);
// });

// app.get("/ping", (req, res) => {
//   res.json({ message: "pong" });
// });

export function createDrink(type) {
  const menu = {
    latte: 45,
    espresso: 30,
    cappuccino: 50,
  };
  return { type, price: menu[type] };
}

export function prepareOrder(drink) {
  console.log(`Preparing ${drink.type}`);
  return Math.floor(Math.random() * 1000);
}

export function processPayment(ticketNumber, amount) {
  if (!ticketNumber) {
    throw new Error("No ticket number provided");
  }

  console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);
  return true;
}

export function orderDrink(drinkType) {
  const drink = createDrink(drinkType);
  const ticketNumber = prepareOrder(drink);
  return processPayment(ticketNumber, drink.price);
}

module.exports = {
  createDrink,
  prepareOrder,
  processPayment,
  orderDrink,
};
