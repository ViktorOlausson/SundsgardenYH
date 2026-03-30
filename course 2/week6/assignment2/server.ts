import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});
