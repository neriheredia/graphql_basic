import { gql } from "graphql-tag";

const models = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String!
    gender: String!
    lastName: String!
  }
`;

export default models;
