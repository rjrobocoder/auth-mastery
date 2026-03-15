import mongoose from "mongoose";
import { Types } from "mongoose";

const sessionSchema = new mongoose.Schema({
    user: {
        type: Types.ObjectId,
        ref: "users",
        required: [ true, "User is required"]
    },
    refreshTokenHash: {
        type: String,
        required: [ true, "Refresh token is required" ]
    },
    ip: {
        type: String,
        required: [ true, "IP address is required" ]
    },
    userAgent: {
        type: String,
        required: [ true, "User agent is required" ]
    },
    revoked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const sessionModel = mongoose.model("sessions", sessionSchema)

export default sessionModel;