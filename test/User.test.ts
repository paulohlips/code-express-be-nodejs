import User from "../src/core/entity/User";

describe("User test suite", () => {
  test("should create new user successfully", () => {
    const user = new User("paulohlips", "910@gmail.com", "password", "There is my bio info")
    expect(user.userId).toBeDefined()
    expect(user.joinDate).toBeDefined()
  })

  test("should not create new user with invalid email", () => {
    expect(() => new User("paulohlips", "0@gmail.com", "password", "There is my bio info"))
    .toThrow ("Invalid email")
  })
})