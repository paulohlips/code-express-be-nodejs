import jwt from "jsonwebtoken"
import IJWTService from "../../core/service/IJWTService"
import authConfig from "../../config/auth"

export default class JWTService implements IJWTService {
  createToken(payload: string): string {
    return jwt.sign({ userId: payload } , authConfig.secret, {
      expiresIn: authConfig.expiresIn
    })
  }
}