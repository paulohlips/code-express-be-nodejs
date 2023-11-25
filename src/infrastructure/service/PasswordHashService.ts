import { hash, compare, genSalt } from "bcrypt"
import { IPasswordHashService } from "../../core/service/IPasswordHashService"

export default class PasswordHashService implements IPasswordHashService {
  async createPasswordHash(password: string, saltRounds: number): Promise<string> {
    const salt = await genSalt(saltRounds)
    return hash(password, salt)
  }

  checkPassword (password: string, hash: string): Promise<boolean> {
    return compare(password, hash)
  }
}