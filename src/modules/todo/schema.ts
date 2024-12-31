export const todoSchema = `
type Todo {
  id: ID!
  title: String!
  completed: Boolean
  userId: ID!
}

extend type Query {
  getTodos: [Todo]
  getTodosByUserID(userId: ID!): [Todo]
}
`;
