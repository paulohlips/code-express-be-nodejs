import {validateOrReject, IsUUID } from "class-validator"
import ValidationError from "../../../errors/validationError"

class FindBlogPostValidation {
  @IsUUID()
  postId!: string

  constructor (obj: Input) {
    Object.assign(this, obj)
  }
}

interface Input {
  postId: string
}

export default class FindBlogPostValidationService {
  static async validateInput(input: Input): Promise<void> {
    try {
      const inputValidator = new FindBlogPostValidation(input)
      return await validateOrReject(inputValidator)
    } catch (error) {
      if (Array.isArray(error) && error.length > 0) {
        throw new ValidationError('Validation failed.', error)
      }
      throw error
    }
  }
}

