export default interface UserCreatedDto {
  userId: string
  username: string
  email: string
  bio?: string
  joinDate: Date
}