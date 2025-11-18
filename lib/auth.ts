import { sendEmail } from "@/utils/send-email";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from 'mongodb'


const client = new MongoClient(`${process.env.MONGODB_URI!}/mentor-bhai`);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            prompt: "select_account",
        },
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: false,
        sendVerificationEmail: async ({ user, url }) => {
            const link = `${process.env.BETTER_AUTH_URL!}/api/auth/verify-email?token=${encodeURIComponent(url.split('token=')[1])}`
            await sendEmail({
                to: user.email,
                subject: 'Verify your email',
                link,
                name: user.name
            })
        }

    },

});