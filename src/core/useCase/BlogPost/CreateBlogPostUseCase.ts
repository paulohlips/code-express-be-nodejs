import IBlogPostRepository from "../../repository/IBlogPostRepository"
import BlogPostDTO from "../../dto/BlogPostDTO"
import BlogPost from "../../entity/BlogPost"
import CreateBlogPostDTO from "../../dto/BlogPost/CreateBlogPostDTO"

export default class CreateBlogPostUseCase {
  constructor (private readonly blogPostRepository: IBlogPostRepository) { }

    async execute ({ authorId, content, status, title, tags }: CreateBlogPostDTO): Promise<BlogPostDTO> {
      const blogPost = new BlogPost(title, content, authorId, status, tags)
      return await this.blogPostRepository.create(blogPost)
  }
}