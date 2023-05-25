import UserModel from "../../models/User.js";

export const userServices = {
  createUser: async (user) => {
    const newUser = await UserModel.create(user);
    return newUser;
  },
  getUsers: async () => {
    const users = await UserModel.find({});
    return users;
  },
  getUserByEmail: async (email) => {
    const user = await UserModel.findOne({ email });

    return user;
  },
};
