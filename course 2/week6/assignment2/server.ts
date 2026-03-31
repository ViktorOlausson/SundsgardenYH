import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const app = express();
app.use(express.json());
const PORT = 3000;
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = await prisma.product.create({ data: req.body });
    res.json(newProduct);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message,
      });
    }
    res.status(500).send("Unknown error");
  }
});

app.get("/products", async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;

    const products = await prisma.product.findMany({
      where: {
        price: {
          gte: minPrice ? Number(minPrice) : undefined,
          lte: maxPrice ? Number(maxPrice) : undefined,
        },
        category: category ? { name: { equals: String(category) } } : undefined,
      },
      include: { category: true },
    });
    res.json(products);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message,
      });
    }
    res.status(500).send("Unknown error");
  }
});

app.patch("/products/:productId", async (req, res) => {
  try {
    const update = await prisma.product.update({
      where: { id: Number(req.params.productId) },
      data: req.body,
    });
    res.json(update);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message,
      });
    }
    res.status(500).send("Unknown error");
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const deleteProduct = await prisma.product.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(deleteProduct);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message,
      });
    }
    res.status(500).send("Unknown error");
  }
});
