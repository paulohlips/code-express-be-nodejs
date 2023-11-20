import { faker } from "@faker-js/faker"
import { join } from "path"
import { writeFile } from "fs/promises"
import User from "../src/core/entity/User"

const seederBaseFolder = join(__dirname, "../", "../", "/seed", "/mocks")
console.log({ __dirname })

const user = new User(
  faker.person.firstName() ,
  faker.internet.email() ,
  faker.internet.password(),
  faker.person.bio(),
)

const write = (filename: string, data: Object) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

;(async () => {
  await write("users.json", [user])
})()