import mongoose from "mongoose";

// Create User Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    cell: {
        type: String,
        trim: true
    },
    photo: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        default: "Male"
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    },
},{
    timestapms: true
});



// export Schema
export default mongoose.model("User", userSchema);