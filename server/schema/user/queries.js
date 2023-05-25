import { gql } from "graphql-tag";

const queries = gql`
  extend type Query {
    getAllUsers: [User!]!
  }
`;

export default queries;
