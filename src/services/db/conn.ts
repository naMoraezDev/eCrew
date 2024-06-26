import mongoose from "mongoose";

export async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://labcompy:5UBaPPB6aIOK4gW7@labcluster.db0cqt9.mongodb.net/?retryWrites=true&w=majority&appName=labCluster"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
