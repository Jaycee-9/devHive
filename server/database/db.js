import mongoose from "mongoose";

const connectToDb = async () => {
  await mongoose.connect(
    "mongodb+srv://devHive:PZXYee24RSALv1c7@cluster0.lcqoswa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("database connected");
};

export default connectToDb;
