import { findUserByEmail } from "../repositories/userRepository.js";
import { userRegisterType } from "../utils/zodAuthValidator.js";

class AuthService{

     async signIn(registrationDetail:userRegisterType){
          const normalizedEmail = registrationDetail.email.toLowerCase()
          const existingUser = await findUserByEmail(normalizedEmail)

          if(existingUser){
               throw new AppError()
          }



     }

     async login(){

     }

     async handleRefreshToken(){

     }

}

export default new AuthService()