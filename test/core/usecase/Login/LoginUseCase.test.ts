import IUserRepository from "../../../../src/core/repository/IUserRepository";
import IJWTService from "../../../../src/core/service/IJWTService";
import { IPasswordHashService } from "../../../../src/core/service/IPasswordHashService";
import LoginUseCase from "../../../../src/core/useCase/Login/LoginUseCase";
import UserRepositoryInMemory from "../../../../src/infrastructure/repository/UserRepositoryInMemory";
import JWTService from "../../../../src/infrastructure/service/JWTService";
import PasswordHashService from "../../../../src/infrastructure/service/PasswordHashService";

describe("LoginUseCase test suite", () => {
  const userInMemory =   {
    username: "Evans",
    email: "Madonna4@yahoo.com",
    password: "AH5Dcn0rFNITKu9"
  }

  let userRepository: IUserRepository
  let passwordHashService: IPasswordHashService
  let loginUseCase: LoginUseCase
  let jWTService: IJWTService
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory()
    passwordHashService = new PasswordHashService()
    jWTService = new JWTService()
    loginUseCase = new LoginUseCase(userRepository, passwordHashService, jWTService)
  })

  test("Should login with success", async () => {
    const jwt = await loginUseCase.execute(userInMemory.username, userInMemory.password)
    expect(jwt).toBeDefined()
  })

  test("Should login fail when user not found", async () => {
    jest.spyOn(userRepository, "findByUserName").mockReturnValueOnce(Promise.resolve(undefined))
    expect(() => loginUseCase.execute(userInMemory.username, userInMemory.password))
    .rejects.toThrow(new Error("userName or password invalid"))
  })

  test("Should login fail when password is incorrect", async () => {
    jest.spyOn(passwordHashService, "checkPassword").mockReturnValueOnce(Promise.resolve(false))
    expect(() => loginUseCase.execute(userInMemory.username, "0123"))
    .rejects.toThrow(new Error("userName or password invalid"))
  })
})