import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
import connectDB from "./db.js";
import todoRoutes from "./ROUTES/TodoRoutes.js";

const PORT = 4000;
app.use(cors());    
app.use(bodyParser.json());
dotenv.config();
app.use("/todo", todoRoutes);
connectDB();


app.get("/", (req, res) => {
    // res.send("Hello World");
    res.json({message: "Hello World"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})