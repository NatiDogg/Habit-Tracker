import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name:{
        type: String,
        trim: true,
        required: true,
        
     },
     email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
         lowercase: true,

     },
     password: {
        type: String,
        required: true
     },
     provider:{
         type: String,
         enum: ["local", "google"],
         default: 'local'
     }
},{timestamps: true})

const userModel = mongoose.models.Users || mongoose.model('Users', userSchema)

export default userModel