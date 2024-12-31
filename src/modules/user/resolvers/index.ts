import { User } from "../interface";
import { fetchAllUsers, fetchUserByID } from "../services/user.service";

export const userResolvers = {
  Query: {
    getAllUsers: () => fetchAllUsers(),
    getUserByID: (_: unknown, { id }: { id: string }) => fetchUserByID(id),
  },
  User: {
    todos: async (user: User) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const todos = await res.json();
      return todos.filter((todo: any) => todo.userId === user.id);
    },
  },
};
