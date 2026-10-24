import jwt from 'jsonwebtoken'
import {env} from '../utils/envValidator.js'

interface UserTokenInfo {
     id: string,
     name: string,
     email: string,
}
class JwtService{

     createAccessToken(userPayload:UserTokenInfo){
          return jwt.sign(userPayload, env.JWT_ACCESS_TOKEN, {expiresIn: '15m'})
     }

     createRefreshToken(userPayload:UserTokenInfo){
           return jwt.sign(userPayload, env.JWT_REFRESH_TOKEN, {expiresIn: '7d'})
     }

     verifyAccessToken(token: string){
         return jwt.verify(token, env.JWT_ACCESS_TOKEN ) as UserTokenInfo
     }

     verifyRefreshToken(token: string){
            return jwt.verify(token, env.JWT_REFRESH_TOKEN ) as UserTokenInfo
     }

}


export default new JwtService()