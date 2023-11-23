import users from "../../../../seed/mocks/users.json"
import CreateUserUseCase from "../../../../src/core/useCase/User/CreateUserUseCase"
import UserRepositoryInMemory from "../../../../src/infrastructure/repository/UserRepositoryInMemory"

const [user] = users
const { username, email, password, bio } = user
describe("CreateUserUseCase test suite", () => {
  test('should create user with success', async () => {
    const userRepositoryMemory = new UserRepositoryInMemory()
    const useCase = new CreateUserUseCase(userRepositoryMemory)
    const result = await useCase.execute(username, email, password, bio)
    expect(result.userId).toBeDefined()
    expect(result.username).toBe(username)
  })

  test('should throw error when password is invalid', async () => {
    const userRepositoryMemory = new UserRepositoryInMemory()
    const useCase = new CreateUserUseCase(userRepositoryMemory)
    await expect(() => useCase.execute(username, email, 'pa', bio)).rejects.toThrow("Choose a password greater than 3 characters")
  })

  test('should throw error when bio is invalid', async () => {
    const userRepositoryMemory = new UserRepositoryInMemory()
    const useCase = new CreateUserUseCase(userRepositoryMemory)
    await expect(() => useCase.execute("us", email, password, bio)).rejects.toThrow("Choose an username greater than 3 characters")
  })
})