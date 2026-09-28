const task = require("../models/Taskschema");

const taskcreate = async(req, res)=>{
    try {
        const tasks = await task.create({...req.body, userId : req.user.userId});

        res.status(201).json({msg:"task created"});
        
    } catch (error) {
        res.status(500).json({msg: error});
        
    }
}

const deleteTask = async(req , res)=>{
    try {
        const deletetask = await task.findByIdAndDelete({
            _id : req.params.id,
            userId : req.user.userId,
        });

        res.status(200).json({msg: "task deleted successfully"});

        
    } catch (error) {
        res.status(500).json({msg: "not deleted" , error});
        
    }
}

const updatetask = async(req, res)=>{
    try {
        const update = await task.findByIdAndUpdate({_id : req.params.id , userId : req.user.userId, }, req.body);

        res.status(200).json({msg: "updated successfully"});
        
    } catch (error) {
        res.status(500).json({msg: "updation did not happened" , error});
        
    }
}
const getAlltask = async(req, res)=>{
    try {
        const gettask = await task.find({userId : req.user.userId});
        res.status(200).json({msg: "here is all tasks" , task: gettask}); 
        
    } catch (error) {
        res.status(500).json({msg: "error in getting all tasks" , error});
        
    }
}
module.exports = {taskcreate , deleteTask , updatetask , getAlltask};