import FindBlogPostUseCase from "../../core/useCase/BlogPost/FindBlogPostUseCase"
import BlogPostRepositoryInMemory from "../../infrastructure/repository/BlogPostRepositoryInMemory"

interface InputParams {
  postId: string
}

export default class FindBlogPostController {
  static async findBlogPost ({ postId }: InputParams ) {
    const blogPostRepository = new BlogPostRepositoryInMemory()
    const findBlogPostUseCase = new FindBlogPostUseCase(blogPostRepository)
    return await findBlogPostUseCase.execute(postId)
  }
}