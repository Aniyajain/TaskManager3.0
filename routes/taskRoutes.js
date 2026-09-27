const express = require("express");
const router = express.Router();

const {taskcreate , deleteTask , updatetask , getAlltask} = require("../controllers/TaskController");

router.post("/createTask" , taskcreate);
router.delete("/deletetask/:id" , deleteTask);
router.put("/updatetask" , updatetask);
router.get("/alltasks" , getAlltask);

module.exports = router;