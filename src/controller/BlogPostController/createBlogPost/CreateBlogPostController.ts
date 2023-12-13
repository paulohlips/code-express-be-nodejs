import CreateBlogPostUseCase from "../../../core/useCase/BlogPost/CreateBlogPostUseCase"
import ValidationError from "../../../errors/validationError"
import BlogPostRepositoryInMemory from "../../../infrastructure/repository/BlogPostRepositoryInMemory"

interface Input {
  title: string
  content: string
  authorId: string
  status: string
  tags: string[]
}

export default class CreateBlogPostController {
  static async createBlogPost (params: any, { title, content, authorId, status, tags }: Input ) {
    try {
      const userRepository = new BlogPostRepositoryInMemory()
      const createBlogPostUseCase = new CreateBlogPostUseCase(userRepository)
      return await createBlogPostUseCase.execute({ title, content, authorId, status, tags })
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