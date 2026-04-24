import express from "express";
// import { PrismaClient } from "./generated/prisma/client.js";
// import { PrismaPg } from "@prisma/adapter-pg";
// import "dotenv/config";

const app = express();
app.use(express.json());
const PORT = 3000;
// const connectionString = process.env.DATABASE_URL;

// if (!connectionString) {
//   throw new Error("DATABASE_URL is not set");
// }

// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});
