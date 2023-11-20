import User from "../src/core/entity/User";

describe("Blog post test suite", () => {
  test("Should create a new blog post with valid user", () => {
    const user = new User("paulohlips", "910@gmail.com", "password", "There is my bio info")
  })
});