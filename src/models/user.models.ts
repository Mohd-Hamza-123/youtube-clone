import mongoose, { Schema, model } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "..";
console.log("xxx ", ACCESS_TOKEN_SECRET)
const usersSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            index: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: [true, "This Field is required"],
            unique: true,
            lowercase: true,

        },
        fullname: {
            type: String,
            required: [true, "This Field is required"],
            unique: true,
            index: 1,
        },
        password: {
            type: String,
            required: [true, "This field is required"]
        },
        avatar: {
            type: String,
            required: true,
        },
        coverImage: {
            type: String
        },
        refreshToken: {
            type: String
        },
        watchHistory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video"
            }
        ]
    },
    { timestamps: true }
)

usersSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

usersSchema.methods.isPasswordCorrect = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}

usersSchema.methods.generateAccessToken = function () {
    if (!ACCESS_TOKEN_SECRET) return
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
usersSchema.methods.generateRefreshToken = function () {
    if (!REFRESH_TOKEN_SECRET) return
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = model("User", usersSchema)