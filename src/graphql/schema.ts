import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

// Import module schemas and resolvers
import { userSchema, userResolvers } from "../modules/user";
import { todoSchema, todoResolvers } from "../modules/todo";
import { rootTypeDefs } from "./rootSchema";

// Merge type definitions and resolvers
const typeDefs = mergeTypeDefs([rootTypeDefs, userSchema, todoSchema]);
const resolvers = mergeResolvers([userResolvers, todoResolvers]);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
