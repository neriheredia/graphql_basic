import "dotenv/config";
import { connect } from "mongoose";

export const dbConnect = async () => {
  const DB_URL = process.env.DATABASE_MONGODB_LOCAL;

  await connect(DB_URL)
    .then(() => {
      console.log("🚀 Database connected");
    })
    .catch((err) => {
      console.log("Database ERROR!!!", err);
    });
};
