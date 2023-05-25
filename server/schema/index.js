import { gql } from "graphql-tag";
import user from "./user/index.js";

const { userResolvers, userTypeDefs } = user;

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default {
  resolvers: [userResolvers],
  typeDefs: [userTypeDefs, typeDefs],
};
