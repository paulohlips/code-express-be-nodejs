import BlogPostDTO from "../dto/BlogPostDTO"

export default interface IBlogPostRepository {
  create (blogPost: BlogPostDTO): Promise<BlogPostDTO>
  findById (postId?: string): Promise<BlogPostDTO | undefined>
}