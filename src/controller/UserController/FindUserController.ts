import FindUserUseCase from "../../core/useCase/User/FindUserUseCase"
import UserRepositoryInMemory from "../../infrastructure/repository/UserRepositoryInMemory"

interface InputParams {
  userId: string
}

export default class FindUserController {
  static async findUser ({ userId }: InputParams ) {
    const userRepository = new UserRepositoryInMemory()
    const findUserUseCase = new FindUserUseCase(userRepository)
    return await findUserUseCase.execute(userId)
  }
}