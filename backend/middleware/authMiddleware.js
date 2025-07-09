const jwt=require('jsonwebtoken');

function authMiddleware(req,res,next){
    const token=req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.json("Token required")
    }

    try{
        const decoded=jwt.verify(token,"mysecret");
        req.user=decoded;
        next();
    }
    catch{
        res.json("Invalid token")
    }
}

module.exports=authMiddleware;