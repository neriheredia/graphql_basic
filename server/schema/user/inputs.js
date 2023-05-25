import { gql } from "graphql-tag";

export const registerUserInput = gql`
  input RegisterUserInput {
    email: String!
    firstName: String!
    gender: String!
    lastName: String!
    password: String!
  }
`;

export const loginUserInput = gql`
  input LoginUserInput {
    email: String!
    password: String!
  }
`;
