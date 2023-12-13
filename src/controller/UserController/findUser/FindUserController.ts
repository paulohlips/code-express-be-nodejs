import FindUserUseCase from "../../../core/useCase/User/FindUserUseCase"
import ValidationError from "../../../errors/validationError"
import UserRepositoryInMemory from "../../../infrastructure/repository/UserRepositoryInMemory"
import FindUserValidationService from "./FindUserValidation"

interface InputParams {
  userId: string
}

export default class FindUserController {
  static async findUser ({ userId }: InputParams ) {
    try {
      await FindUserValidationService.validateInput({ userId })
      const userRepository = new UserRepositoryInMemory()
      const findUserUseCase = new FindUserUseCase(userRepository)
      return await findUserUseCase.execute(userId)
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