import mongoose from "mongoose";

const connectToDb = async () => {
  await mongoose.connect(process.env.connectionString);
  console.log("database connected");
};

export default connectToDb;
