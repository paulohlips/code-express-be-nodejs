import { IsString, IsUUID, validateOrReject } from "class-validator"
import ValidationError from "../../../errors/validationError"

class FindUserValidation {
  @IsUUID()
  userId!: string

  constructor (obj: Input) {
    Object.assign(this, obj)
  }
}

interface Input {
  userId:string
}

export default class FindUserValidationService {
  static async validateInput(input: Input): Promise<void> {
    try {
      const inputValidator = new FindUserValidation(input)
      return await validateOrReject(inputValidator)
    } catch (error) {
      if (Array.isArray(error) && error.length > 0) {
        throw new ValidationError('Validation failed.', error)
      }
      throw error
    }
  }
}

