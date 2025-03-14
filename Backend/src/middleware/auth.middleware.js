import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const protectRoute = async (req,res,next) =>{
    try {
        const tokenvariable = req.cookies.jwt;
        if(!tokenvariable){
            return res.status(401).json({message: "Unauthorized - No Tokenn provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({message: "Unauthorized: Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.send(500).json({message: "Internal server error"});
    }
}
