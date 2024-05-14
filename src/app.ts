import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"


const app = express()


const limit = "16kb"

// middlewares configurations
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }))
app.use(express.json({ limit }))
app.use(express.urlencoded({ limit, extended: true }))
app.use(express.static("public"))
app.use(cookieParser())




export { app }