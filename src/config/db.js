import mongoose from "mongoose";
import { message } from "statuses";

const connectdb = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB succesfully connected : ${connect.connection.host}`);
    }catch(err){
        console.log({ message : 'MongoDB conection error'});
        process.exit(1);
    }
};

export default connectdb;