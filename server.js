
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const authmiddleware = require("./middleware/authmiddleware");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/taskManager").then(()=>{console.log("MongoDB is Connected Sucessfully ")}).catch((error)=>{console.log("MongoDB connection error" , error);})

const taskRoutes = require("./routes/taskRoutes");
const userRoute = require("./routes/userRoute");


app.use(express.json());
// app.use( "/api", logger , taskRoutes);
app.use(logger);

app.use("/api", authmiddleware, taskRoutes);
// app.use("/auth" , userRoute);
app.use("/auth" , userRoute);

app.listen(5000 , ()=>{
    console.log("Server  is running on port 5000");
});
