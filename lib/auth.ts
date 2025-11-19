import { sendEmail } from "@/utils/send-email";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from 'mongodb'
import ejs from "ejs";
import path from "path";


const client = new MongoClient(`${process.env.MONGODB_URI!}/mentor-bhai`);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        minPasswordLength: 8,
        maxPasswordLength: 20,
        resetPasswordTokenExpiresIn: 120,
        sendResetPassword: async ({ user, url }) => {

            const templatePath = path.join(process.cwd(), "views", "reset-email.ejs");

            const html = await ejs.renderFile(templatePath, {
                name: user.name,
                link: url,
            });
            await sendEmail({
                to: user.email,
                subject: 'Reset your password',
                html,
            })
        },
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
        expiresIn: 120,
        sendVerificationEmail: async ({ user, url }) => {

            const link = `${process.env.BETTER_AUTH_URL!}/api/auth/verify-email?token=${encodeURIComponent(url.split('token=')[1])}`
            const templatePath = path.join(process.cwd(), "views", "email-verification.ejs");

            const html = await ejs.renderFile(templatePath, {
                name: user.name,
                link,
            });

            await sendEmail({
                to: user.email,
                subject: 'Verify your email',
                html
            })
        },

    },

});
