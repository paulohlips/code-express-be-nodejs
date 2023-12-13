import CreateUserUseCase from "../../../core/useCase/User/CreateUserUseCase"
import UserRepositoryInMemory from "../../../infrastructure/repository/UserRepositoryInMemory"
import PasswordHashService from "../../../infrastructure/service/PasswordHashService"
import CreateUserValidationService from "./CreateUserValidation"
import ValidationError from "../../../errors/validationError"

interface Input {
  username: string
  email: string
  password: string
  bio?: string
}

export default class CreateUserController {
  static async createUser (params: any, { username, email, password, bio }: Input ) {

    try {
      await CreateUserValidationService.validateInput({ username, email, password, bio })
      const userRepository = new UserRepositoryInMemory()
      const passwordHashService = new PasswordHashService()
      const createUserUseCase = new CreateUserUseCase(userRepository, passwordHashService)
      const result = await createUserUseCase.execute(username, email, password, bio)

      return {
        data: result
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        return {
          statusMessage: 'error',
          message: 'Validation failed.',
          errors: error.errors,
          httpCode: 400
        }
      }
    }
  }
}