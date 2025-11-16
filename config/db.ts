import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI!}/mentor-bhai`);
        if (conn) {
            console.log(`MongoDB connected successfully at host : ${conn.connection.host}`)
        }
    } catch (error) {
        console.log(`Error while connecting mongoDB : ${error}`);
        process.exit(1)
    }
}