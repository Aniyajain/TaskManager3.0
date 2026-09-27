// const express = require("express");

const logger = (req, res , next)=>{
    console.log("authentiction of logger is done");
    next();
    

};

module.exports = logger;