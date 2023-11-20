import { randomUUID } from "crypto"

export default class BlogPost {
  postId: string
  publicationDate: Date
  lastModifiedDate: Date

  constructor (
    readonly title: string,
    readonly content: string,
    readonly authorId: string,
    readonly status: string,
    readonly tags?: string[]
  ) {
    this.checkRequiredData()
    this.postId = randomUUID()
    this.publicationDate = new Date()
    this.lastModifiedDate = new Date()
  }

  private checkRequiredData () {
    if (this.title.length < 3) throw new Error("Title may be greater than 3 characters")
    if (this.content.length < 20) throw new Error("Content may be greater than 20 characters")
  }
}