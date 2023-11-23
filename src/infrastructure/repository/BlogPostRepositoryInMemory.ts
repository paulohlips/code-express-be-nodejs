import BlogPostDTO from "../../core/dto/BlogPostDTO";
import IBlogPostRepository from "../../core/repository/IBlogPostRepository"

const posts: BlogPostDTO[] = []

export default class BlogPostRepositoryMemory implements IBlogPostRepository {
  async create(blogPost: BlogPostDTO): Promise<BlogPostDTO> {
    posts.push(blogPost)
    return blogPost
  }

  async findById (postId?: string | undefined): Promise<BlogPostDTO | undefined> {
    const post = postId ? posts.find(post => post.postId === postId) : undefined
    return Promise.resolve(post)
  }
}