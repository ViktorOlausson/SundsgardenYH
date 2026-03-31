import "dotenv/config";
// import { PrismaClient } from "../generated/client.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
async function seed() {
  const electronics = await prisma.category.create({
    data: { name: "Electronics" },
  });
  const books = await prisma.category.create({ data: { name: "Books" } });
  const productA = await prisma.product.create({
    data: {
      name: "Headphones",
      price: 599,
      stock: 25,
      categoryId: electronics.id,
    },
  });
  const productB = await prisma.product.create({
    data: { name: "Novel", price: 149, stock: 100, categoryId: books.id },
  });
  const alice = await prisma.customer.create({
    data: { name: "Alice", email: "alice@example.com" },
  });
  const bob = await prisma.customer.create({
    data: { name: "Bob", email: "bob@example.com" },
  });
  const order1 = await prisma.order.create({ data: { customerId: alice.id } });
  await prisma.orderItem.create({
    data: { orderId: order1.id, productId: productA.id, quantity: 1 },
  });
  await prisma.orderItem.create({
    data: { orderId: order1.id, productId: productB.id, quantity: 2 },
  });
  const order2 = await prisma.order.create({ data: { customerId: bob.id } });
  await prisma.orderItem.create({
    data: { orderId: order2.id, productId: productB.id, quantity: 1 },
  });
  console.log("Seeding finished");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
