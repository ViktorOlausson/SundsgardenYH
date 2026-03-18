import express from "express";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();
const app = express();
const PORT = 3333;
const { Pool } = pg;

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
// });
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.get("/allPlayers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Players");
    res.status(200).json(result.rows);
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
