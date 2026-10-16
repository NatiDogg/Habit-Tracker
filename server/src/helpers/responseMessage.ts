import type { Response } from "express"
export const sendResponse = <T extends Record<string, any>>(res:Response, success: boolean, statusCode: number, message: string, payload?: T)=>{
      res.status(statusCode).json({
        success: success,
        message: message,
        ...payload
       
      })
}