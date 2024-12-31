import { fetchTodos, fetchTodosByUserID } from "../services/todo.service";

export const todoResolvers = {
  Query: {
    getTodos: () => fetchTodos(),
    getTodosByUserID: (_: unknown, { userId }: { userId: string }) =>
      fetchTodosByUserID(userId),
  },
};
