import { randomUUID } from "crypto"
export default class User {
  userId: string
  joinDate: Date

  constructor (
    readonly username: string,
    readonly email: string,
    readonly password: string,
    readonly bio?: string
  ) {
    this.checkRequiredDateValidation(email, username, password)
    this.userId = randomUUID()
    this.joinDate = new Date()
  }

  private checkRequiredDateValidation (email: string, username: string, password: string) {
    if (!this.isValidEmail(email)) throw new Error("Invalid email")
    if (username.length < 3) throw new Error("Choose an username greater than 3 characters")
    if (password.length < 3) throw new Error("Choose a password greater than 3 characters")
  }

  private isValidEmail (email: string): boolean {
    return (/^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
  }
}