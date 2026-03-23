import express from "express";

const app = express();

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

let todos: Todo[] = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Walk dog", completed: true },
];

app.use(express.json());

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Get single todo
app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id as string));
  res.json(todo);
});

// Add new todo
app.post("/todos", (req, res) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
  };

  todos.push(newTodo);
  res.json(newTodo);
});

// Delete todo
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id !== parseInt(req.params.id as string));
  res.json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
