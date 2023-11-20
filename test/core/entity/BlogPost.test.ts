import mockedBlogPost  from "../../../seed/mocks/blogPost.json"
import BlogPost from "../../../src/core/entity/BlogPost"

const { title, content, authorId, status, tags } = mockedBlogPost
describe("BlogPost entity test suite", () => {
  let newBlogPost: BlogPost
  beforeEach(() => {
    newBlogPost = new BlogPost(title, content, authorId, status, tags)
  })
  test("should create new blog post successfully", () => {
    expect(newBlogPost.authorId).toBeDefined()
    expect(newBlogPost.postId).toBeDefined()
  })

  test("should not create new blogPost with invalid title length", () => {
    expect(() => new BlogPost("ti", content, authorId, status, tags))
    .toThrow ("Title may be greater than 3 characters")
  })

  test("should not create new blogPost with invalid content length", () => {
    expect(() => new BlogPost(title, "content", authorId, status, tags))
    .toThrow ("Content may be greater than 20 characters")
  })
})