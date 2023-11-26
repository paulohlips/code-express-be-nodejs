import mockedBlogPost  from "../../../../seed/mocks/blogPost.json"
import BlogPost from "../../../../src/core/entity/BlogPost"
import IBlogPostRepository from "../../../../src/core/repository/IBlogPostRepository"
import CreateBlogPost from "../../../../src/core/useCase/BlogPost/CreateBlogPostUseCase"
import GetBlogPostUseCase from "../../../../src/core/useCase/BlogPost/FindBlogPostUseCase"
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
    const post = await createBlogPostUseCase.execute({ authorId, title, content, status, tags })
    const foundPost = await getBlogPostUseCase.execute(post.postId)

    expect(foundPost?.postId).toEqual(post.postId)
    expect(foundPost?.authorId).toEqual(post.authorId)
  })
})