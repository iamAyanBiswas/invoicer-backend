import mongoose from "mongoose";

async function dbConnect() {
    let connectMongodb = await mongoose.connect(`mongodb+srv://${process.env.ADMIN}:${process.env.PASSWORD}@cluster0.xudil8j.mongodb.net/${process.env.DB}`); 
    try {
        if (connectMongodb) {
            console.log("DB connect sucessfull: ", connectMongodb.Connection.host);
        }
    }
    catch (err) {
        console.log("DB Not connect");
    }
}

export default dbConnect;