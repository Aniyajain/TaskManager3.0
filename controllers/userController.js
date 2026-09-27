const user = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userLogin = async(req, res)=>{
    try {
        const existingUser = await user.findOne({email : req.body.email});

        if(!existingUser){
          return res.status(404).json({msg: "User not found with this email"});
        }
        
        const passwordCorrect = await bcrypt.compare(req.body.password , existingUser.password);

        if(!passwordCorrect){
           return res.status(401).json({msg: "Invalid password"});
        }
const token = jwt.sign({
    userId : existingUser._id
}, "mysecretKey");
        

        res.status(200).json({msg: "Login successfully " , token :token });
        
    } catch (error) {
        res.status(500).json({msg: "Error in Login" , error});

        
    }

}

const userRegister = async(req, res)=>{
    try {

        const existingUser = await user.findOne({email: req.body.email});
        if(existingUser){
            return res.status(409).json({msg: "user with this email already exists"});
        }
        const hashpassword = await bcrypt.hash(req.body.password , 10);

        const createuser = await user.create({
            name : req.body.name,
            email: req.body.email,
            password : hashpassword,
        });
        res.status(201).json({msg: "User created successfullyy"});
        
    } catch (error) {
        res.status(500).json({msg: "Error in registration" , error});
        
    }


}

module.exports = {userRegister , userLogin};