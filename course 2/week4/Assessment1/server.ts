import express, { Request, Response } from "express";

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
app.get("/todos", (_req: Request, res: Response) => {
  res.json(todos);
});

// Get single todo
app.get("/todos/:id", (req: Request, res: Response) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id as string));
  res.json(todo);
});

// Add new todo
app.post("/todos", (req: Request, res: Response) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
  };

  todos.push(newTodo);
  res.json(newTodo);
});

// Delete todo
app.delete("/todos/:id", (req: Request, res: Response) => {
  todos = todos.filter((t) => t.id !== parseInt(req.params.id as string));
  res.json({ message: "Deleted" });
});

app.listen(3000);
