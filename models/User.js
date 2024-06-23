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
        default: null
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
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
export default mongoose.models.User || mongoose.model("User", userSchema);