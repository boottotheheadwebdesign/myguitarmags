import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    return connection;
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}