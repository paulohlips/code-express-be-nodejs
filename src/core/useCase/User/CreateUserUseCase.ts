import UserDto from "../../dto/UserDto";
import User from "../../entity/User";
import IUserRepository from "../../repository/IUserRepository";

export default class CreateUserUseCase {
  constructor (private readonly userRepository: IUserRepository) {}

  async execute (username: string, email: string, password: string, bio: string): Promise<UserDto> {
    const user = new User(username, email, password, bio)
    return await this.userRepository.create(user)
  }
}