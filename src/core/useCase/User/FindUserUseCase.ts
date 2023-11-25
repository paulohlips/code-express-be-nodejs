import IUserRepository from "../../repository/IUserRepository";

export default class FindUserUseCase {
  constructor (private readonly userRepository: IUserRepository) {}

  async execute(userId: string) {
    return await this.userRepository.findById(userId)
  }
}