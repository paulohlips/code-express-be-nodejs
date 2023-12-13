import BlogPostDTO from "../../dto/BlogPostDTO";
import IBlogPostRepository from "../../repository/IBlogPostRepository";

export default class GetBlogPostUseCase {
  constructor (private readonly blogPostRepository: IBlogPostRepository) {}

  async execute (tag?: string): Promise<BlogPostDTO[] | undefined> {
    return await this.blogPostRepository.find(tag)
  }
}