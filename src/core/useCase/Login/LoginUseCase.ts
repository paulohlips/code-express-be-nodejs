import IUserRepository from "../../repository/IUserRepository";
import IJWTService from "../../service/IJWTService";
import { IPasswordHashService } from "../../service/IPasswordHashService";

export default class LoginUseCase {
  constructor (
    private readonly userRepository: IUserRepository,
    private readonly passwordHashService: IPasswordHashService,
    private readonly jwtService: IJWTService
  ) {}

  async execute (userName: string, password: string) {
    const user = await this.userRepository.findByUserName(userName)

    if (!user) {
      throw new Error("userName or password invalid")
    }

    const passwordIsValid = await this.passwordHashService.checkPassword(password, user.password)

    if (!passwordIsValid) {
      throw new Error("userName or password invalid")
    }

    return this.jwtService.createToken(user.userId)
  }
}