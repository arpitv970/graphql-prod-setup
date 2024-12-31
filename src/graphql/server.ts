import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { schema } from "./schema";
// import { buildContext } from "./context";

export const createApolloServer = async () => {
  const server = new ApolloServer({
    schema,
  });

  await server.start();

  /* ----- TODO: create proper context ----- */
  // return expressMiddleware(server, {
  //   context: buildContext,
  // });

  return expressMiddleware(server);
};
