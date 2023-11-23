import UserDto from "../../core/dto/UserDto";
import User from "../../core/entity/User";
import IUserRepository from "../../core/repository/IUserRepository";

const users: User[] = []
export default class UserRepositoryInMemory implements IUserRepository {
  async create(user: User): Promise<UserDto> {
    users.push(user)
    return Promise.resolve({
      userId: user.userId,
      username: user.username,
      email: user.email,
      bio: user.bio,
      joinDate: user.joinDate
    })
  }
}