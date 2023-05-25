import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = model("User", UserSchema);

export default UserModel;
