import express, { Request, Response } from 'express'
import connectDB from './db/mongoDB_connection';
const app = express();
import dotenv from "dotenv"
dotenv.config({ path: "./.env" })

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on Port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("Error MongoDb Connection Failed index.ts : ", err)
        process.exit(1)
    })







// ; (async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`);
//         console.log(connectionInstance)
//         app.on("error", (err) => {
//             console.log("Error in Express : index.ts : ", err)
//         })
//         app.get("/", (req, res) => {
//             res.json(`${connectionInstance.Mongoose}`)
//         })
//         app.listen(process.env.PORT, () => {
//             console.log("App is listening on Port :", process.env.PORT)
//         })
//     } catch (error) {
//         console.error("Error : Index.ts : ", error)
//         throw error
//     }
// })()
