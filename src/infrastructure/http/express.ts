import express, { Request, Response, json } from "express"
import ExpressAdapter from "../../adapter/ExpressAdapter"
import FindUserController from "../../controller/UserController/FindUserController"
import CreateUserController from "../../controller/UserController/CreateUserController"

const app = express()
app.use(express.json())
const port = 3000

app.post('/user', ExpressAdapter.create(CreateUserController.createUser))
app.get('/user/:userId', ExpressAdapter.create(FindUserController.findUser))


app.listen(port, () => {
  `Express server running on port ${3000}`
})