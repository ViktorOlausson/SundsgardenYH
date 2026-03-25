import express from "express";
import "dotenv/config";
// import { PrismaClient } from "../src/generated/client.js";
import { PrismaClient } from "./src/generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    }
    res.status(500).send("Unknown error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
