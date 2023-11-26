import CreateBlogPostUseCase from "../../core/useCase/BlogPost/CreateBlogPostUseCase"
import BlogPostRepositoryInMemory from "../../infrastructure/repository/BlogPostRepositoryInMemory"

interface InputBody {
  title: string
  content: string
  authorId: string
  status: string
  tags: string[]
}

export default class CreateBlogPostController {
  static async createBlogPost (params: any, { title, content, authorId, status, tags }: InputBody ) {
    const userRepository = new BlogPostRepositoryInMemory()
    const createBlogPostUseCase = new CreateBlogPostUseCase(userRepository)
    return await createBlogPostUseCase.execute({ title, content, authorId, status, tags })
  }
}