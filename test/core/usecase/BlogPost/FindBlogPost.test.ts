import mockedBlogPost  from "../../../../seed/mocks/blogPost.json"
import BlogPost from "../../../../src/core/entity/BlogPost"
import IBlogPostRepository from "../../../../src/core/repository/IBlogPostRepository"
import CreateBlogPost from "../../../../src/core/useCase/BlogPost/CreateBlogPostUseCase"
import FindBlogPostUseCase from "../../../../src/core/useCase/BlogPost/FindBlogPostUseCase"
import BlogPostRepositoryInMemory from "../../../../src/infrastructure/repository/BlogPostRepositoryInMemory"

const { title, content, authorId, status, tags } = mockedBlogPost

describe('CreateBloPostUseCase test suite', () => {
  let blogPostRepository: IBlogPostRepository
  let createBlogPostUseCase: CreateBlogPost
  let findBlogPostUseCase: FindBlogPostUseCase
  beforeEach(() => {
    blogPostRepository = new BlogPostRepositoryInMemory()
    createBlogPostUseCase = new CreateBlogPost(blogPostRepository)
    findBlogPostUseCase = new FindBlogPostUseCase(blogPostRepository)
  })

  test("should find a blog post with valid postId", async () => {
    const createdPost = await createBlogPostUseCase.execute({ authorId, title, content, status, tags })
    const foundBlogPost = await findBlogPostUseCase.execute(createdPost.postId)
    expect(foundBlogPost?.postId).toEqual(createdPost.postId)
    expect(foundBlogPost?.authorId).toEqual(createdPost.authorId)
  })

  test("should return undefined when post doest exist", async () => {
    const foundBlogPost = await findBlogPostUseCase.execute("wrong_post_id")

    expect(foundBlogPost).toBeUndefined()
  })
})