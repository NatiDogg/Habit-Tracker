import userModel from "../models/userModel.js";
import { Types } from "mongoose";
export const findUserByEmail = (email: string)=>{
     return userModel.findOne({email: email})
}