import mongoose, { Mongoose } from "mongoose";

const habitSchema = new mongoose.Schema({
    
       title: {
        type: String,
        required: true,
        trim: true
       },
       description:{
          type: String,
            trim: true
       },
       user:{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Users',
           required: true
       },

       targetDays:{
           type: [String],
            enum: [
               "Monday",
               "Tuesday",
               "Wednesday",
               "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
           required: true
       },

       icon:{
          type: String,
          default: "CircleCheck"
       },
       color: {
          type: String,
         default: "purple"
       }

    

      
},{timestamps: true})

const habitModel = mongoose.models.Habits || mongoose.model("Habits", habitSchema)

export default habitModel