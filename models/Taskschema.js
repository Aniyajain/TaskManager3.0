const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    Task: String,
    completed : Boolean,
    // createdAt : Date,
    // updatedAt: Date,
    userId : {
       type: mongoose.Schema.Types.ObjectId,
       ref : "user"
    },
}, {timestamps: true});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;