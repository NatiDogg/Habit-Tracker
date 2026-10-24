import userModel from "../models/userModel.js";
import { Types } from "mongoose";
import { userRegisterType } from "../utils/zodAuthValidator.js";
import AppError from "../utils/appError.js";


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

export const registerUser = async(userDetails:userRegisterType)=>{
   
       try {
          const newlyCreatedUser = await userModel.create(userDetails)

          return newlyCreatedUser
       } catch (error:any) {
            if(error.code === 11000){
              throw new AppError('User with this Email address already exists', 409);
            }

            throw error
       }
      
}