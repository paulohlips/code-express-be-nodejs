import IUserRepository from "../../../../src/core/repository/IUserRepository"
import FindUserUseCase from "../../../../src/core/useCase/User/FindUserUseCase"
import UserRepositoryInMemory from "../../../../src/infrastructure/repository/UserRepositoryInMemory"

describe("FindUserUseCase", () => {
  let userRepository: IUserRepository
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory()

  })
  test("should find a specific user by userId", async () => {
    const userId = "595f4c6c-d52f-4f76-a6ee-f616e5ab4279"
    const findUserUseCase = new FindUserUseCase(userRepository)
    const user = await findUserUseCase.execute(userId)
    expect(user?.userId).toEqual(userId)
  })

  test("should return undefined if user not found", async () => {
    const userId = "595f4c6c"
    const findUserUseCase = new FindUserUseCase(userRepository)
    const user = await findUserUseCase.execute(userId)
    expect(user).toBeUndefined()
  })
})