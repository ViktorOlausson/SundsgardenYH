import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import { z } from "zod";

dotenv.config();
const app = express();
const PORT = 3333;
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

const playerSchema = z.object({
  id: z.number({ message: "Player must have valid id" }),
  name: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" })
    .max(50, { message: "name cannot contain more than 50 characters" }),
  join_date: z.coerce.date().transform((date) =>
    new Intl.DateTimeFormat("sv-SE", {
      timeZone: "Europe/Stockholm",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date),
  ),
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.get("/all-players", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Players");
    const players = result.rows.map((row) => playerSchema.parse(row));
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.post("/all-players", async (req, res) => {
  const validPlayer = playerSchema.safeParse(req.body);

  if (!validPlayer.success) {
    return res.status(400).json({ error: validPlayer.error });
  }
  const { id, name, join_date } = validPlayer.data;

  try {
    const result = await pool.query(
      `INSERT INTO Players (id, name, join_date)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [id, name, join_date],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.put("/all-players/:id", async (req, res) => {
  const validPlayer = playerSchema.safeParse(req.body);

  if (!validPlayer.success) {
    return res.status(400).json({ error: validPlayer.error });
  }
  const { id, name, join_date } = validPlayer.data;

  try {
    const result = await pool.query(
      `UPDATE Players
       SET name = $1, join_date = $2
       WHERE id = $3
       RETURNING *`,
      [name, join_date, id],
    );

    if (result.rowCount === 0) {
      res.status(404).json({
        message: "Player not found",
      });
      return;
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.get("/players-scores", async (req, res) => {
  try {
    const result = await pool.query(`SELECT p.name, s.score, g.title
FROM Players AS p
INNER JOIN Scores AS s
ON p.id = s.player_id
INNER JOIN Games AS g
ON g.id = s.game_id`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/top-players", async (req, res) => {
  try {
    const result = await pool.query(`SELECT p.name, SUM(s.score) AS total_score
FROM Players AS p
INNER JOIN Scores AS s
ON p.id = s.player_id
GROUP BY p.id, p.name
ORDER BY total_score DESC
LIMIT 3`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/inactive-players", async (req, res) => {
  try {
    const result = await pool.query(`SELECT p.id, p.name
FROM Players as p
LEFT OUTER JOIN Scores as s
on p.id = s.player_id
WHERE s.player_id IS NULL`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/pop-gerne", async (req, res) => {
  try {
    const result = await pool.query(`SELECT g.gerne, COUNT(*) AS play_count
FROM Scores AS s
INNER JOIN Games AS g
ON s.game_id = g.id
GROUP BY g.gerne
ORDER BY play_count DESC`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/new-players", async (req, res) => {
  try {
    const result = await pool.query(`SELECT p.name, p.join_date
FROM Players AS P
WHERE p.join_date > '2026-02-17'`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.delete("/player/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(
      "DELETE FROM Players WHERE id = $1 RETURNING *",
      [id],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json({ message: "Player deleted" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
