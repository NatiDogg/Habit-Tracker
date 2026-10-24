import userModel from "../models/userModel.js";
import { Types } from "mongoose";


const mongoDbIdType = (id: string)=>{
    return new Types.ObjectId(id)
}


export const findUserByEmail = (email: string)=>{
     return userModel.findOne({email: email})
}

export const findUserById = (userId: string)=>{
     const id = mongoDbIdType(userId)
     return userModel.findById(id)
}