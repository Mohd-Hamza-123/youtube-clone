import mongoose from "mongoose";
import { dbName } from "../constants";



const connectDB = async () => {


    try {
        const db_connection_Instance = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`);
        console.log("zzz : " + db_connection_Instance.connection.host);
    } catch (error) {
        console.log("Error: mongoDB_connection.ts : ", error)
    }
}

export default connectDB
