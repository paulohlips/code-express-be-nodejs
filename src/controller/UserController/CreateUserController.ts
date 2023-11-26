import CreateUserUseCase from "../../core/useCase/User/CreateUserUseCase"
import FindUserUseCase from "../../core/useCase/User/FindUserUseCase"
import UserRepositoryInMemory from "../../infrastructure/repository/UserRepositoryInMemory"
import PasswordHashService from "../../infrastructure/service/PasswordHashService"

interface InputBody {
  username: string
  email: string
  password: string
  bio?: string
}

export default class CreateUserController {
  static async createUser (params: any, { username, email, password, bio }: InputBody ) {
    const userRepository = new UserRepositoryInMemory()
    const passwordHashService = new PasswordHashService()
    const createUserUseCase = new CreateUserUseCase(userRepository, passwordHashService)
    return await createUserUseCase.execute(username, email, password, bio)
  }
}