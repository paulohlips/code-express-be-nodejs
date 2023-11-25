import UserDto from "../dto/UserDto";
import User from "../entity/User";

export default interface IUserRepository {
  create (user: User): Promise<UserDto>
  findById (userId: string): Promise<UserDto | undefined>
}