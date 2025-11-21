import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = 5000;

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});