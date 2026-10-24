import { findUserByEmail,registerUser } from "../repositories/userRepository.js";
import AppError from "../utils/appError.js";
import { userRegisterType } from "../utils/zodAuthValidator.js";
import  BcryptService from "../utils/bcryptJs.js";
class AuthService{

     async signUp(registrationDetail:userRegisterType){
          const normalizedEmail = registrationDetail.email.toLowerCase()
          const existingUser = await findUserByEmail(normalizedEmail)

          if(existingUser){
               throw new AppError('User with this Email address already exists',409)
          }

          const hashPassword = await BcryptService.hashPassword(registrationDetail.password)


          
          





     }

     async login(){

     }

     async handleRefreshToken(){

     }

     private generateUserTokenResponse(){
          
     }

}

export default new AuthService()