import UserDto from "../dto/User/UserDto";
import UserCreatedDto from "../dto/User/UserCreatedDTO";
import User from "../entity/User";

export default interface IUserRepository {
  create (user: User): Promise<UserCreatedDto>
  findById (userId: string): Promise<UserDto | undefined>
  findByUserName (userName: string): Promise<UserDto | undefined>
}