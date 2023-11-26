export default interface CreateBlogPostDTO {
  title: string
  content: string
  authorId: string
  status: string
  tags: string[]
}