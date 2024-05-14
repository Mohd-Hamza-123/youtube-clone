import dotenv from "dotenv"
import connectDB from "./db/mongoDB_connection"
import { app } from "./app"


dotenv.config({ path: "./env" })
export const MONGODB_URI = process.env.MONGODB_URI
export const port = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.on("error", () => {
            console.log("Express connection Error in index.ts")
        })
        app.listen(port, () => {
            console.log("App is listening on port :", port)
        })
    })
    .catch((err) => {
        console.log("Error : App is not listening - index.ts")
        throw err
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
