import express from "express";
import { z } from "zod";

const app = express();
const PORT = 3000;

app.use(express.json());

type personResponse = {};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const randomPersonResponseSchema = z.object({
  results: z.array(
    z.object({
      name: z.object({
        first: z.string(),
        last: z.string(),
      }),
      location: z.object({
        country: z.string(),
      }),
    }),
  ),
});

app.get("/random-person", async (req, res) => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const validRandomPerson = randomPersonResponseSchema.safeParse(data);
    if (!validRandomPerson.success) {
      return res.status(500).json({
        message: "Failed to validate user",
        details: validRandomPerson.error,
      });
    }
    const user = validRandomPerson.data.results[0];
    res.json({
      name: `${user?.name.first} ${user?.name.last}`,
      country: user?.location.country,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch user",
    });
  }
});
