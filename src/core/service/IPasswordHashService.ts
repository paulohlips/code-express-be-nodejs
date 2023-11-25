export interface IPasswordHashService {
  createPasswordHash (password: string, salt: number): Promise<string>
  checkPassword (password: string, hash: string): Promise<boolean>
}