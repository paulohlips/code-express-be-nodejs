import IBlogPostRepository from "../../../src/core/repository/IBlogPostRepository"
import BlogPostDTO from "../dto/BlogPostDTO"

export default class CreateBlogPost {
  constructor (private readonly blogPostRepository: IBlogPostRepository) { }

    async execute (input: BlogPostDTO): Promise<BlogPostDTO> {
      return await this.blogPostRepository.create(input)
  }
}