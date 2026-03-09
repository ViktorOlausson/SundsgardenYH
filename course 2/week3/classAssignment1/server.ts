import express from "express";
import { email, z, type TypeOf } from "zod";

const app = express();
const PORT = 3000;

app.use(express.json());

const userSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1).max(100),
  email: z.email(),
  age: z.number().int().positive().optional(),
  role: z.enum(["admin", "user", "guest"]),
  createdAt: z.coerce.date(),
});

type user = z.infer<typeof userSchema>;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.post("/safeUser", (req, res) => {
  try {
    const validUser = userSchema.safeParse(req.body);
    if (!validUser.success) {
      return res.status(400).json({
        message: "Failed to validate user",
        details: validUser.error,
      });
    }
    const user = validUser.data;
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      role: user.role,
      createdAt: user.createdAt,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to post user",
      details: err,
    });
  }
});
