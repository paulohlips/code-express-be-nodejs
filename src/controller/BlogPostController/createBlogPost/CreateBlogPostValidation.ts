import { IsString, IsOptional, Length, validateOrReject, IsUUID, IsArray } from "class-validator"
import ValidationError from "../../../errors/validationError"

class CreateBlogPostValidation {
  @IsString()
  @Length(3, 100)
  title!: string

  @IsString()
  @Length(20)
  content!: string

  @IsUUID()
  authorId!: string

  @IsString()
  @IsOptional()
  status?: string

  @IsArray()
  @IsOptional()
  tags?: string[]

  constructor (obj: Input) {
    Object.assign(this, obj)
  }
}

interface Input {
  title: string
  content: string
  authorId: string
  status?: string
  tags?: string[]
}

export default class CreateBlogPostValidationService {
  static async validateInput(input: Input): Promise<void> {
    try {
      const inputValidator = new CreateBlogPostValidation(input)
      return await validateOrReject(inputValidator)
    } catch (error) {
      if (Array.isArray(error) && error.length > 0) {
        throw new ValidationError('Validation failed.', error)
      }
      throw error
    }
  }
}

