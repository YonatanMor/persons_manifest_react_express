import mongoose from "mongoose";

const connectDB = () => {
  // Connect to MongoDB database
  mongoose
    .connect(`mongodb://127.0.0.1:27017/personsDB`)
    .then(() => console.log("Connected to personsDB"))
    .catch((error) => console.log(error));
};

export default connectDB;
