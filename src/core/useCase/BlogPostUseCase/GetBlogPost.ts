import BlogPostDTO from "../../dto/BlogPostDTO";
import IBlogPostRepository from "../../repository/IBlogPostRepository";

export default class GetBlogPostUseCase {
  constructor (private readonly blogPostRepository: IBlogPostRepository) {}

  async execute (postId: string): Promise<BlogPostDTO | undefined> {
    return await this.blogPostRepository.findById(postId)
  }
}