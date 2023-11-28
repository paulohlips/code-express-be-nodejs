import express, { Request, Response, json } from "express"
import ExpressAdapter from "../../adapter/ExpressAdapter"
import FindUserController from "../../controller/UserController/FindUserController"
import CreateUserController from "../../controller/UserController/CreateUserController"
import CreateBlogPostController from "../../controller/BlogPostController/CreateBlogPostController"
import FindBlogPostController from "../../controller/BlogPostController/FindBlogPostController"
import AuthMiddleware from "../../middleware/AuthMiddleware"
import LoginController from "../../controller/LoginController"

const app = express()
app.use(express.json())
const port = 3000

// login route
app.post('/login', ExpressAdapter.create(LoginController.login))
app.use(AuthMiddleware.check)
app.post('/user', ExpressAdapter.create(CreateUserController.createUser))
app.get('/user/:userId', ExpressAdapter.create(FindUserController.findUser))
app.post('/post', ExpressAdapter.create(CreateBlogPostController.createBlogPost))
app.get('/post/:postId', ExpressAdapter.create(FindBlogPostController.findBlogPost))

app.listen(port, () => {
  `Express server running on port ${3000}`
})