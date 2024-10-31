import dotenv from 'dotenv';
import {connectMongo} from "./db/connectMongo.js";
import app from "./app.js";

dotenv.config();

const start = async () => {
    try{
        await connectMongo();
        const port = process.env.PORT || 8000;
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch(error){
        console.log("Error starting MongoDB");
        process.exit(1);
    }
}

await start();