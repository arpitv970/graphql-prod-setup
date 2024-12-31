import { Todo } from "../interface";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
};

export const fetchTodosByUserID = async (userId: string): Promise<Todo[]> => {
  const todos = await fetchTodos();
  return todos.filter((todo) => todo.userId === userId);
};
