import  AuthService  from "../services/authService.js";
import type { Request,Response } from "express";
import { registerSchema } from "../utils/zodAuthValidator.js";
import { sendResponse } from "../helpers/responseMessage.js";
import { handleError } from "../helpers/handleError.js";
export const signInUserHandler = async(req:Request, res:Response)=>{
       
        const parsedData = registerSchema.safeParse(req.body)

        if(!parsedData.success){
             const fieldErrors = parsedData.error.flatten().fieldErrors;
              const firstErrorKey = Object.keys(fieldErrors)[0] as keyof typeof fieldErrors;
               const errorMessage = fieldErrors[firstErrorKey]?.[0] || "Invalid input data";
           return  sendResponse(res,false,400,errorMessage)
        }
       try {

            const result = await AuthService.signUp(parsedData.data)

            return sendResponse(res, true,201, 'User Registered Successfully', result)

        
       } catch (error: unknown) {
         
             return handleError(res, error)
       }
}

export const loginUserHandler = async(req:Request, res:Response)=>{
      try {
        
      } catch (error: unknown) {
               return handleError(res, error)
      }
}

export const logOutUserHandler = async(req:Request, res:Response)=>{
      try {
        
      } catch (error: unknown) {
            return handleError(res, error)
      }
}
export const refreshTokenHandler = async(req:Request, res:Response)=>{
      try {
        
      } catch (error: unknown) {
                    return handleError(res, error)
      }
}

