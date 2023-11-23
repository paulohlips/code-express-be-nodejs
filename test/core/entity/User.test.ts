import User from "../../../src/core/entity/User"
import mockedUser  from "../../../seed/mocks/users.json"

const [user] = mockedUser
const { username, email, password, bio } = user
describe("User entity test suite", () => {
  let newUser: User
  beforeEach(() => {
    newUser = new User(username, email, password, bio)
  })
  test("should create new user successfully", () => {
    expect(newUser.userId).toBeDefined()
    expect(newUser.joinDate).toBeDefined()
  })

  test("should not create new user with invalid email", () => {
    expect(() => new User(username, "0@gmail.com", password, bio))
    .toThrow ("Invalid email")
  })

  test("should not create new user with invalid username length", () => {
    expect(() => new User("ph", email, password, bio))
    .toThrow ("Choose an username greater than 3 characters")
  })

  test("should not create new user with invalid password length", () => {
    expect(() => new User(username, email, "12", bio))
    .toThrow ("Choose a password greater than 3 characters")
  })
})