import { findUserByEmail,registerUser } from "../repositories/userRepository.js";
import AppError from "../utils/appError.js";
import { userRegisterType } from "../utils/zodAuthValidator.js";
import  BcryptService from "../utils/bcryptJs.js";
import JwtService from '../utils/jwt.js'
class AuthService{

     async signUp(registrationDetail:userRegisterType){
          const normalizedEmail = registrationDetail.email.toLowerCase()
          const existingUser = await findUserByEmail(normalizedEmail)

          if(existingUser){
               throw new AppError('User with this Email address already exists',409)
          }

          const hashPassword = await BcryptService.hashPassword(registrationDetail.password)

          const newlyRegisteredUser = await registerUser({...registrationDetail, email: normalizedEmail, password: hashPassword })

          return this.generateUserTokenResponse(newlyRegisteredUser)

          




          

          
          





     }

     async login(){

     }

     async handleRefreshToken(){

     }

     private generateUserTokenResponse(user: any){

          const {password, ...safeUser} = user.toObject()
          const payload = {
                   id: safeUser.id,
                   name: safeUser.name,
                   email: safeUser.email,
          }

          const accessToken = JwtService.createAccessToken(payload)
          const refreshToken = JwtService.createRefreshToken(payload)

          return {
                data: user,
                accessToken: accessToken,
                refreshToken: refreshToken
          }
          
     }

}

export default new AuthService()