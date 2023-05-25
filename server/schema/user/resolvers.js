import { GraphQLError } from "graphql";
import { userServices } from "./service.js";

const resolvers = {
  Mutation: {
    loginUser: async (_parent, { input }) => {
      const { email, password } = input;

      const user = await userServices.getUserByEmail(email);

      if (!user) {
        throw new GraphQLError("Invalid credentials");
      }

      return user;
    },
    registerUser: async (_parent, { input }) => {
      const savedUser = await userServices.createUser(input);

      return savedUser;
    },
  },
  Query: {
    getAllUsers: async () => {
      const users = await userServices.getUsers();

      return users;
    },
  },
};

export default resolvers;
