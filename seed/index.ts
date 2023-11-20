import { faker } from "@faker-js/faker"
import { join } from "path"
import { writeFile } from "fs/promises"
import User from "../src/core/entity/User"
import BlogPost from "../src/core/entity/BlogPost"

const seederBaseFolder = join(__dirname, "../", "../", "/seed", "/mocks")
console.log({ __dirname })

const user = new User(
  faker.person.firstName() ,
  faker.internet.email() ,
  faker.internet.password(),
  faker.person.bio(),
)

const blogPost = new BlogPost(
  faker.commerce.productName(),
  faker.commerce.productDescription(),
  faker.string.uuid(),
  "draft",
  ["TypeScript", "NodeJS"]
)

const write = (filename: string, data: Object) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

;(async () => {
  await write("users.json", [user]),
  await write("blogPost.json", (blogPost))
})()