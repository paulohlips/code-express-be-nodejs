import FindAllBlogPostUseCase from "../../../core/useCase/BlogPost/FindAllBlogPostUseCase"
import BlogPostRepositoryInMemory from "../../../infrastructure/repository/BlogPostRepositoryInMemory"

interface InputParams {
  tag?: string
}

export default class FindAllBlogPostController {
  static async findAllBlogPosts (params: any, body: any, queryParams: InputParams) {
    try {
      const userRepository = new BlogPostRepositoryInMemory()
      const findBlogPostUseCase = new FindAllBlogPostUseCase(userRepository)
      return await findBlogPostUseCase.execute(queryParams.tag)
    } catch (error) {
      console.error(`Error on FindAllBlogPostController.findAllBlogPosts :`, error)
      return {
        status: "fail",
        httpCode: 500
      }
    }
  }
}