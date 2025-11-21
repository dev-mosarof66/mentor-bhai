import { connectDB } from "@/config/db";
import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";


connectDB();

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);

        const searchParam = url.searchParams.get("token");
        const token = searchParam?.split("&")[0];
        console.log(token);

        if (!token) {
            return NextResponse.redirect(`${url.origin}/verify-email?invalid-token=true`);
        }

        const result = await auth.api.verifyEmail({ query: { token } });

        if (!result) {
            return NextResponse.redirect(`${url.origin}/verify-email?invalid-token=true`);
        }

        return NextResponse.redirect(`${url.origin}/verify-email?success=true`);
    } catch (error) {
        console.log("Internal server while verifying email:", error);
        const url = new URL(req.url);
        return NextResponse.redirect(`${url.origin}/not-found`);
    }
}
