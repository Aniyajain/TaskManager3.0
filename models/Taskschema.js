const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    Task: String,
    completed : Boolean,
    // createdAt : Date,
    // updatedAt: Date,
}, {timestamps: true});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;