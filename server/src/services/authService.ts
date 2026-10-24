import { userRegisterType } from "../utils/zodAuthValidator.js";

class AuthService{

     async signIn(registrationDetail:userRegisterType){
          const normalizedEmail = registrationDetail.email.toLowerCase()
          const existingUser 



     }

     async login(){

     }

     async handleRefreshToken(){

     }

}

export default new AuthService()