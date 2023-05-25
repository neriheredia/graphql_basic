import { gql } from "graphql-tag";

const mutations = gql`
  extend type Mutation {
    registerUser(input: RegisterUserInput): User!
    loginUser(input: LoginUserInput): User!
  }
`;

export default mutations;
