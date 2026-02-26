import express from "express";

const app = express();
const PORT = 4000;

app.get("/greet", (req, res) => {
  res.send("Welcome developer!");
});

app.use(express.json());

app.post("/greet", (req, res) => {
  const greeting = req.body;

  console.log(greeting);

  res.json({ message: "greeting added", greet: greeting });
  //res.send(greeting);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
