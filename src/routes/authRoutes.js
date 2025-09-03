import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register User or check for existing one
export const registeruser = async(req,res) => {
    try{
       const {email,password} = req.body;

       //check for existing user
       const existing = User.findOne({email});
       if(existing) return res.json({ message : "User already exists!"});

       //Hash the password
       const hashedpassword = await bcrypt.hash(password,10);

       //save new user
       const newuser = new User({username , email , password : hashedpassword});
       await newuser.save();

       return res.status(201).json({ message : "User succesfully registered!"})

    }catch(err){
        return res.status(500).json({ message : "Cannot register user"});
    }
};

//Login the user
export const loginuser = async(req,res) => {
    
}