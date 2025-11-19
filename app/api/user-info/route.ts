import { connectDB } from "@/config/db";
import { UserInfo } from "@/model/user-info.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (req: NextRequest) => {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        console.log("User ID:", id);

        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, message: "Not a valid ID" },
                { status: 400 }
            );
        }

        const reqBody = await req.json();
        const { level, preference } = reqBody;

        const userInfo = await UserInfo.findOne({ userId: id });

        if (userInfo) {
            userInfo.level = level;
            userInfo.preference = preference;

            await userInfo.save();

            return NextResponse.json(
                {
                    success: true,
                    message: "User info updated successfully",
                    data: userInfo,
                },
                { status: 200 }
            );
        }

        const newInfo = await UserInfo.create({
            userId: id.toString(),
            level,
            preference,
        });


        await newInfo.save({
            validateBeforeSave: false
        })

        return NextResponse.json(
            {
                success: true,
                message: "User info created successfully",
                data: newInfo,
            },
            { status: 201 }
        );
    } catch (error) {
        console.log("error while creating user info:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
};
