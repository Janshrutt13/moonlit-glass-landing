import jwt from "jsonwebtoken";

const authMiddleware = (req,res,next) => {
    const token = req.header("Authorization")?.replace("Bearer " , "");
    if(!token) return res.status(401).json({ message : "Authorization denied!"});

    try{
      const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
      req.user = decoded; // attach to user id
      next();
    }catch(err){
       return res.status(401).json({ message : "token not verified!"})
    }
};

export default authMiddleware;