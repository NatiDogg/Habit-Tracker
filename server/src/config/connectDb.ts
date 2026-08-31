import mongoose from "mongoose";
import {env} from '../utils/envValidator.js'
const connectToDb = async()=>{
      try {
         await mongoose.connect(env.MONGODB_URL)
         console.log("Database connected successfully!")
      } catch (error) {
         console.log(`Database Connection Failed: ${error}`)
      }
}

export default connectToDb