import UserDto from "../../core/dto/User/UserDto";
import User from "../../core/entity/User";
import IUserRepository from "../../core/repository/IUserRepository";

const users: UserDto[] = [
  {
    username: "Evans",
    email: "Madonna4@yahoo.com",
    password: "$2b$10$L/bk8IxE9/rWdvPJ1nfxaOggdFvXeKe2cq3eN3lq9oa.Rdj2AtVn6",
    bio: "geek",
    userId: "3a08c9b6-2960-47f7-bdc7-8cb4c72e53ed",
    joinDate: new Date()
  }
]

export default class UserRepositoryInMemory implements IUserRepository {
  async create(user: User): Promise<UserDto> {
    users.push(user)
    return Promise.resolve(user)
  }

  async findById (userId: string): Promise<UserDto | undefined> {
    return Promise.resolve(users.find(user => user.userId === userId))
  }

  async findByEmail (email: string): Promise<UserDto | undefined> {
    return Promise.resolve(users.find(user => user.email === email))
  }
}