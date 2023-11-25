export default interface UserDto {
  userId: string
  username: string
  email: string
  password: string
  bio?: string
  joinDate: Date
}