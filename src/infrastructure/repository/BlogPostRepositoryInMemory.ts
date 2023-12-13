import BlogPostDTO from "../../core/dto/BlogPostDTO";
import IBlogPostRepository from "../../core/repository/IBlogPostRepository"

const posts: BlogPostDTO[] = [
  {
    title: "Ergonomic Concrete Soap",
    content: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    authorId: "a76ab10c-cde9-412a-bf30-c3c841054460",
    status: "draft",
    tags: [
      "TypeScript",
      "NodeJS"
    ],
    postId: "bac8a84e-f9f6-4a63-8a22-05025f27a5c4",
    publicationDate: new Date(),
    lastModifiedDate: new Date()
  }
]

export default class BlogPostRepositoryMemory implements IBlogPostRepository {
  async create(blogPost: BlogPostDTO): Promise<BlogPostDTO> {
    posts.push(blogPost)
    return blogPost
  }

  async findById (postId: string | undefined): Promise<BlogPostDTO | undefined> {

    const post = posts.find(post => post.postId === postId)
    return Promise.resolve(post)
  }

  async find(tag?: string | undefined): Promise<BlogPostDTO[]> {
    if(!tag) {
      return Promise.resolve(posts)
    }

    console.log({
      tag
    })

    const foundPosts =  posts.filter(post =>
      post.tags?.some(item => item.toLowerCase().includes(tag.toLowerCase()))
    )
    return Promise.resolve(foundPosts)
  }
}