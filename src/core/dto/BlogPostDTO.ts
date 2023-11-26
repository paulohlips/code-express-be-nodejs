export default interface BlogPostDTO {
    postId: string,
    title: string,
    content: string,
    authorId: string,
    status: string,
    publicationDate?: Date,
    lastModifiedDate?: Date,
    tags?: string[]
}