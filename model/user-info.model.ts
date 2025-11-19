import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            default: null
        },
        level: {
            type: String,
            enum: ['basic', 'advance', 'intermediate'],
            default: 'basic'
        },
        preference: {
            type: String,
            enum: ['academic', 'ielts'],
            default: 'academic'
        }

    },
    { timestamps: true }
);

export const UserInfo = models.UserInfo || model("UserInfo", userSchema);
