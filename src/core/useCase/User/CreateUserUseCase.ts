import UserDto from "../../dto/UserDto"
import User from "../../entity/User"
import IUserRepository from "../../repository/IUserRepository"
import { IPasswordHashService } from "../../service/IPasswordHashService"

const passwordHashSalt = 10

export default class CreateUserUseCase {
  constructor (private readonly userRepository: IUserRepository, private readonly passwordHashService: IPasswordHashService) {}

  async execute (username: string, email: string, password: string, bio?: string): Promise<UserDto> {
    const hashedPassword = await this.passwordHashService.createPasswordHash(password, passwordHashSalt)
    const user = new User(username, email, hashedPassword, bio)
    console.log(user)
    return await this.userRepository.create(user)
  }
}