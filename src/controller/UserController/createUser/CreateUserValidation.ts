import { IsString, IsEmail, IsOptional, Length, validateOrReject } from "class-validator"
import ValidationError from "../../../errors/validationError"

class CreateUserValidation {
  @IsString()
  @Length(3, 30)
  username!: string

  @IsEmail()
  email!: string

  @IsString()
  @Length(6, 30)
  password!: string

  @IsOptional()
  @IsString()
  bio?: string

  constructor (obj: Input) {
    Object.assign(this, obj)
  }
}

interface Input {
  username: string
  email: string
  password: string
  bio?: string
}

export default class CreateUserValidationService {
  static async validateInput(input: Input): Promise<void> {
    try {
      const inputValidator = new CreateUserValidation(input)
      return await validateOrReject(inputValidator)
    } catch (error) {
      if (Array.isArray(error) && error.length > 0) {
        throw new ValidationError('Validation failed.', error)
      }
      throw error
    }
  }
}

