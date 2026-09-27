
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/taskManager").then(()=>{console.log("MongoDB is Connected Sucessfully ")}).catch((error)=>{console.log("MongoDB connection error" , error);})

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

app.use("/api", taskRoutes);

app.listen(5000 , ()=>{
    console.log("Server  is running on port 5000");
});
