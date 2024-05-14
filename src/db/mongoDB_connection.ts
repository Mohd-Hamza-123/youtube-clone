import mongoose from "mongoose";
import { MONGODB_URI } from "..";
import { dbName } from "../constants";

const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${dbName}`)
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error in ConnectDB in mongoDB_connections.ts : ", error)
        process.exit(1);
    }
}


export default connectDB