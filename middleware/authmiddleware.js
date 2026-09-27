const jwt = require("jsonwebtoken");
const authmiddleware = (req, res, next)=>{

   try {
     const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({msg: "Token is missing "});
    }

    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token , "mysecretKey");
    req.user = decode;




    console.log("Authentication is done ");
    next();
   } catch (error) {
    res.status(401).json({msg: "Invalid or expired token"});
    
   }
    

}
module.exports = authmiddleware;