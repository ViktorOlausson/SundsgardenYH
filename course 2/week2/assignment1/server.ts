import express from "express";
//sample data
// kName = Korean Name
// eName = english Name
let TkdKicks = [
  { id: 1, kName: "Ap Chagi", eName: "Front Kick", difficulty: "Easy" },
  { id: 2, kName: "Dolloy Chagi", eName: "Round Kick", difficulty: "Medium" },
  {
    id: 3,
    kName: "Bandae Dolloy Chagi",
    eName: "Reverse Round Kick",
    difficulty: "Hard",
  },
];

const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get(`/TkdKicks`, (req, res) => {
  res.json(TkdKicks);
});

app.get(`/TkdKick/:id`, (req, res) => {
  const kickId = parseInt(req.params.id);
  const kick = TkdKicks.find((k) => k.id === kickId);
  if (!kick) {
    return res.status(404).json({ message: "Kick not found" });
  }
  res.json({ message: "Kick found", kick });
});

app.post("/TkdKicks", (req, res) => {
  const newKick = {
    id: TkdKicks.length + 1,
    kName: req.body.kName,
    eName: req.body.eName,
    difficulty: req.body.difficulty,
  };
  TkdKicks.push(newKick);
  res.json({ message: "new kick added", kick: newKick });
});

app.put("/TkdKick/:id", (req, res) => {
  const kickId = parseInt(req.params.id);
  const kick = TkdKicks.find((k) => k.id === kickId);
  if (!kick) {
    return res.status(404).json({ message: "Kick not found" });
  }
  kick.kName = req.body.kName || kick.kName;
  kick.eName = req.body.eName || kick.eName;
  kick.difficulty = req.body.difficulty || kick.difficulty;
  res.json({ message: "kick updated", kick: kick });
});

app.delete("/TkdKick/:id", (req, res) => {
  const kickId = parseInt(req.params.id);
  TkdKicks = TkdKicks.filter((k) => k.id !== kickId);
  res.json({ message: "kick deleted" });
});
