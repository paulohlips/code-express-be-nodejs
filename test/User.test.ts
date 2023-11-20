import User from "../src/core/entity/User";
import mockedUser  from "../seed/mocks/users.json";

const [user] = mockedUser
describe("User test suite", () => {
  let newUser: User
  beforeEach(() => {
    newUser = new User(user.username, user.email, user.password, user.bio)
  })
  test("should create new user successfully", () => {
    expect(newUser.userId).toBeDefined()
    expect(newUser.joinDate).toBeDefined()
  })

  test("should not create new user with invalid email", () => {
    const user = Object.create(newUser)
    expect(() => new User(user.username, "0@gmail.com", user.password, user.bio))
    .toThrow ("Invalid email")
  })

  test("should not create new user with invalid username length", () => {
    expect(() => new User("ph", user.email, user.password, user.bio))
    .toThrow ("Choose a username greater than 3 characters")
  })

  test("should not create new user with invalid password length", () => {
    expect(() => new User(user.username, user.email, "12", user.bio))
    .toThrow ("Choose a password greater than 3 characters")
  })

/*   test("Should create a new blog post with valid user", () => {
    const user = new User("paulohlips", "910@gmail.com", "password", "There is my bio info")
    const post = {
      title: "First blog post",

    }
    const blogPost = new CreateBlogPost(user.userId, )
    expect(blogPost.postId).toBeDefined()
    expect(blogPost.authorId).toBe(user.userId)
  }) */
})