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
     },
     profile: {
        type: String,
        default: function(): string{
              const name = this.name ? encodeURIComponent(this.name) : 'user'
                 return `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;
        } 
     }
},{timestamps: true})

const userModel = mongoose.models.User || mongoose.model('User', userSchema)

export default userModel