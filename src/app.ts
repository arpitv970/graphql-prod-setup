import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express, { Request, Response } from "express";
import cors from "cors";

const startServer = async () => {
  const app = express();
  const PORT = process.env.PORT || 8000;

  const server = new ApolloServer({
    typeDefs: `
type User {
  id: ID!
  name: String!
  username: String!
  email: String!
  phone: String!
  website:String!
  todos: [Todo]
}

type Todo {
  id: ID!
  title: String!
  completed: Boolean
  user: User!
}

type Query {
  getTodos: [Todo]
  getAllUsers: [User]
  getUserByID(id: ID!): User
}
`,
    resolvers: {
      User: {
        todos: async (user) => {
          // Fetch todos and filter by user.id
          const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);

          if (!res.ok) {
            throw new Error("Failed to fetch todos");
          }

          const data = await res.json();

          // Filter todos belonging to the user
          return data.filter((todo: any) => todo.userId === user.id);
        },
      },
      Query: {
        getTodos: async () => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);

          if (!res.ok) {
            throw new Error("Failed to fetch todos");
          }

          const data = await res.json();
          return data;
        },
        getAllUsers: async () => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

          if (!res.ok) {
            throw new Error("Failed to fetch users");
          }

          const data = await res.json();
          return data;
        },
        getUserByID: async (parent, { id }) => {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
          );

          if (!res.ok) {
            throw new Error("Failed to fetch user");
          }

          const data = await res.json();
          return data;
        },
      },
    },
  });

  app.use(express.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () =>
    console.log(`GraphQL server is spinned at PORT: ${PORT}`),
  );
};

startServer();
