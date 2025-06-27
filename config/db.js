import mongoose from "mongoose";

export const connectDB = async () => {
await mongoose
  .connect(
    "mongodb+srv://sfenil446:tbylQRmUHksY00TY@cluster0.2rqxeuf.mongodb.net/food-del"
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
}