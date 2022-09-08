const { gql } = require("apollo-server-express");

const typeDefs = gql`
  #TYPES
  enum Status {
    TO_DO
    IN_PROGRESS
    DONE
    ARCHIVED
  }

  type User {
    id: Int!
    email: String!
  }

  type Task {
    id: Int!
    user: User!
    title: String!
    description: String!
    status: Status!
  }

  #QUERIES
  type Query {
    getAllTasks: [Task!]!
    getTask(id: Int): Task
    login(email: String!, password: String!): String
  }

  #MUTATIONS
  type Mutation {
    createTask(title: String!, description: String!, status: Status!): Task!
    updateTask(
      id: Int!
      title: String
      description: String
      status: Status
    ): Task!
  }
`;

module.exports = { typeDefs };
