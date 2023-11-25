import UserDto from "../../core/dto/UserDto";
import User from "../../core/entity/User";
import IUserRepository from "../../core/repository/IUserRepository";

const users: UserDto[] = [
  {
    username: "Shanie",
    email: "Tyrese2@gmail.com",
    password: "08I2ZCsL5zHvYh2",
    bio: "author",
    userId: "595f4c6c-d52f-4f76-a6ee-f616e5ab4279",
    joinDate: new Date()
  },
  {
    username: "Evans",
    email: "Madonna4@yahoo.com",
    password: "AH5Dcn0rFNITKu9",
    bio: "geek",
    userId: "3a08c9b6-2960-47f7-bdc7-8cb4c72e53ed",
    joinDate: new Date()
  }
]

export default class UserRepositoryInMemory implements IUserRepository {
  async create(user: User): Promise<UserDto> {
    users.push(user)
    return Promise.resolve({
      userId: user.userId,
      username: user.username,
      email: user.email,
      bio: user?.bio,
      joinDate: user.joinDate
    })
  }

  async findById (userId: string): Promise<UserDto | undefined> {
    return Promise.resolve(users.find(user => user.userId === userId))
  }
}