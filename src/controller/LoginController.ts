import LoginUseCase from "../core/useCase/Login/LoginUseCase"
import UserRepositoryInMemory from "../infrastructure/repository/UserRepositoryInMemory"
import JWTService from "../infrastructure/service/JWTService"
import PasswordHashService from "../infrastructure/service/PasswordHashService"

interface InputBody {
  email: string
  password: string
}

interface Output {
  token: string
}

export default class LoginController {

  static async login (paramters: any, body: InputBody): Promise<Output> {
    const userRepository = new UserRepositoryInMemory()
    const passwordHashService = new PasswordHashService()
    const jwtService =  new JWTService ()
    const loginUseCase = new LoginUseCase(userRepository, passwordHashService, jwtService)

    const token = await loginUseCase.execute(body.email, body.password)
    return { token }
  }
}