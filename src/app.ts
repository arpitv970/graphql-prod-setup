import express from "express";
import cors from "cors";
import { createApolloServer } from "./graphql/server";

const startServer = async () => {
  const app = express();
  const PORT = process.env.PORT || 8000;

  app.use(express.json());
  app.use(cors());

  // Initialize Apollo Server
  const apolloServer = await createApolloServer();
  app.use("/graphql", apolloServer);

  app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}/graphql`),
  );
};

startServer();
