import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
    await mongoose.connect(MONGO_URL, {
        dbName: "todoApp",
    }).then(()=>{
        console.log("Connected to the database");
    }).catch((err)=>{
        console.log("Error connecting to the database", err);
    })
}

export default connectDB;