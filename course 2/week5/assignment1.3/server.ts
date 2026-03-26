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

app.get("/userlanguages", async (req, res) => {
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

app.get("/userlanguages/:language", async (req, res) => {
  try {
    const language = req.params.language;
    const users = await prisma.user.findMany({
      where: { languages: { has: language } },
    });
    res.json(users);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message,
        reason: "parse to json",
      });
    }
    res.status(500).send("Unknown error");
  }
});

app.post("/userlanguages", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      // data: {
      //   email: req.body.email,
      //   name: req.body.name,
      //   age: req.body.age,
      //   languages: req.body.languages,
      // },
      data: req.body,
    });
    res.json(newUser);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message,
      });
    }
    res.status(500).send("Unknown error");
  }
});

app.put("/userlanguages/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const updatedUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: req.body,
    });
    res.json(updatedUser);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message,
      });
    }
    res.status(500).send("Unknown error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
