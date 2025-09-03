import { Timestamp } from "bson";
import mongoose from "mongoose";

const userschema = mongoose.Schema({
    Username : {
        type : String,
        required : true,
        unique : true
    },
    Email : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true
    }    
},
{ timestamps : true}
);

const User = mongoose.model(User, userschema);

export default User;