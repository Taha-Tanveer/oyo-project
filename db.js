import mongoose from "mongoose";

const URI =process.env.MONGO_URI;

const connectDb = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Database Connected ....");
};

export default connectDb;
