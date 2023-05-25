import models from "./models.js";
import mutations from "./mutations.js";
import queries from "./queries.js";
import resolvers from "./resolvers.js";
import { loginUserInput, registerUserInput } from "./inputs.js";

export default {
  userResolvers: resolvers,
  userTypeDefs: [models, mutations, loginUserInput, queries, registerUserInput],
};
