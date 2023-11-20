import { randomUUID } from "crypto"

export default class User {
  userId: string
  joinDate: Date

  constructor (
    private readonly username: string,
    private readonly email: string,
    private readonly password: string,
    private readonly bio?: string
  ) {
    if (!this.isValidEmail(email)) throw new Error("Invalid email")
    this.userId = randomUUID()
    this.joinDate = new Date()
  }

  private isValidEmail (email: string): boolean {
    return (/^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
  }
}