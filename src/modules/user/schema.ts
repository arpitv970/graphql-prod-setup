export const userSchema = `
type User {
  id: ID!
  name: String!
  username: String!
  email: String!
  phone: String!
  website: String!
  todos: [Todo]
}

extend type Query {
  getAllUsers: [User]
  getUserByID(id: ID!): User
}
`;
