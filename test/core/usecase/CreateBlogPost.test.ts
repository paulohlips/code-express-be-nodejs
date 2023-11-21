import mockedBlogPost  from "../../../seed/mocks/blogPost.json"
import BlogPost from "../../../src/core/entity/BlogPost"
import CreateBlogPost from "../../../src/core/useCase/BlogPostUseCase/CreateBlogPost"
import GetBlogPostUseCase from "../../../src/core/useCase/BlogPostUseCase/GetBlogPost"
import BlogPostRepositoryMemory from "../../../src/infrastructure/repository/BlogPostRepositoryMemory"

const { title, content, authorId, status, tags } = mockedBlogPost

describe('CreateBloPostUseCase test suite', () => {
  test("should create a blog post with valid author", async () => {
    const blogPostRepository = new BlogPostRepositoryMemory()
    const createBlogPostUseCase = new CreateBlogPost(blogPostRepository)
    const getBlogPostUseCase = new GetBlogPostUseCase(blogPostRepository)
    const post = new BlogPost(authorId, title, content, status, tags)

    await createBlogPostUseCase.execute(post)
    const postCreated = await getBlogPostUseCase.execute(post.postId)

    expect(postCreated?.postId).toEqual(post.postId)
    expect(postCreated?.authorId).toEqual(post.authorId)
  })
})