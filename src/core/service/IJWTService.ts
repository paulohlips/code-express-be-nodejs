export default interface IJWTService {
  createToken (userId: string): string
}