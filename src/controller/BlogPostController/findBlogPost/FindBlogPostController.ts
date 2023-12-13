import FindBlogPostUseCase from "../../../core/useCase/BlogPost/FindBlogPostUseCase"
import ValidationError from "../../../errors/validationError"
import BlogPostRepositoryInMemory from "../../../infrastructure/repository/BlogPostRepositoryInMemory"
import FindBlogPostValidationService from "./FindBlogPostValidation"

interface InputParams {
  postId: string
}

export default class FindBlogPostController {
  static async findBlogPost ({ postId }: InputParams ) {
    try {
      await FindBlogPostValidationService.validateInput({ postId })
      const userRepository = new BlogPostRepositoryInMemory()
      const findBlogPostUseCase = new FindBlogPostUseCase(userRepository)
      return await findBlogPostUseCase.execute(postId)
    } catch (error) {
      if (error instanceof ValidationError) {
        return {
          statusMessage: 'error',
          message: 'Validation failed.',
          errors: error.errors,
          httpCode: 400
        }
      }
    }
  }
}