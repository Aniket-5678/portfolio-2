import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
       lowercase: true
    },
    message: {
        type:String,
        required: true
    }



}, {timestamps: true})

export default mongoose.model("Users", userSchema)