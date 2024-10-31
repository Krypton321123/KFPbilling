import mongo from "mongoose";
import mongoose from "mongoose";

export const connectMongo = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_CONNECTION_URI + "/" + process.env.DB_NAME);
        console.log(`Connected to Mongo Db at ${process.env.MONGO_CONNECTION_URI} and using ${process.env.DB_NAME}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}