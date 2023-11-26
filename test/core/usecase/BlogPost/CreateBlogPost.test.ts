import mockedBlogPost  from "../../../../seed/mocks/blogPost.json"
import BlogPost from "../../../../src/core/entity/BlogPost"
import IBlogPostRepository from "../../../../src/core/repository/IBlogPostRepository"
import CreateBlogPost from "../../../../src/core/useCase/BlogPost/CreateBlogPost"
import GetBlogPostUseCase from "../../../../src/core/useCase/BlogPost/FindBlogPost"
import BlogPostRepositoryInMemory from "../../../../src/infrastructure/repository/BlogPostRepositoryInMemory"

const { title, content, authorId, status, tags } = mockedBlogPost

describe('CreateBloPostUseCase test suite', () => {
  let blogPostRepository: IBlogPostRepository
  let createBlogPostUseCase: CreateBlogPost
  let getBlogPostUseCase: GetBlogPostUseCase
  beforeEach(() => {
    blogPostRepository = new BlogPostRepositoryInMemory()
    createBlogPostUseCase = new CreateBlogPost(blogPostRepository)
    getBlogPostUseCase = new GetBlogPostUseCase(blogPostRepository)
  })
  test("should find a blog post with valid author", async () => {
    const post = new BlogPost(authorId, title, content, status, tags)

    await createBlogPostUseCase.execute(post)
    const postCreated = await getBlogPostUseCase.execute(post.postId)

    expect(postCreated?.postId).toEqual(post.postId)
    expect(postCreated?.authorId).toEqual(post.authorId)
  })
})