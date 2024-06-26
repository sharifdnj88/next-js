import mongoose from "mongoose";

// create connection
const mongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connection Successfull");
    } catch (error) {
        console.log(error.message);
    }
}

// export connection
export default mongoDBConnect;