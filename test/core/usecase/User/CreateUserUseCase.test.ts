import users from "../../../../seed/mocks/users.json"
import IUserRepository from "../../../../src/core/repository/IUserRepository"
import { IPasswordHashService } from "../../../../src/core/service/IPasswordHashService"
import CreateUserUseCase from "../../../../src/core/useCase/User/CreateUserUseCase"
import UserRepositoryInMemory from "../../../../src/infrastructure/repository/UserRepositoryInMemory"
import PasswordHashService from "../../../../src/infrastructure/service/PasswordHashService"

const [user] = users
const { username, email, password, bio } = user
describe("CreateUserUseCase test suite", () => {
  let passwordHashService: IPasswordHashService
  let userRepositoryMemory:IUserRepository
  beforeEach(() => {
    passwordHashService = new PasswordHashService()
    userRepositoryMemory = new UserRepositoryInMemory()
  })
  test('should create user with success', async () => {
    const useCase = new CreateUserUseCase(userRepositoryMemory, passwordHashService)
    const result = await useCase.execute(username, email, password, bio)
    expect(result.userId).toBeDefined()
    expect(result.username).toBe(username)
  })

  test('should create user without bio with success', async () => {
    const useCase = new CreateUserUseCase(userRepositoryMemory, passwordHashService)
    const result = await useCase.execute(username, email, password)
    expect(result.bio).toBeUndefined()
  })

  test('should throw error when bio is invalid', async () => {
    const userRepositoryMemory = new UserRepositoryInMemory()
    const useCase = new CreateUserUseCase(userRepositoryMemory, passwordHashService)
    await expect(() => useCase.execute("us", email, password, bio)).rejects.toThrow("Choose an username greater than 3 characters")
  })
})