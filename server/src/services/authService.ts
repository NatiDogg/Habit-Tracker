import { findUserByEmail,registerUser } from "../repositories/userRepository.js";
import AppError from "../utils/appError.js";
import { userRegisterType } from "../utils/zodAuthValidator.js";

class AuthService{

     async signUp(registrationDetail:userRegisterType){
          const normalizedEmail = registrationDetail.email.toLowerCase()
          const existingUser = await findUserByEmail(normalizedEmail)

          if(existingUser){
               throw new AppError('User with this Email address already exists',409)
          }

          
          





     }

     async login(){

     }

     async handleRefreshToken(){

     }

}

export default new AuthService()