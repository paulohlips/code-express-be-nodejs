import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import authConfig from "../config/auth"

export default class AuthMiddleware {
  static check (request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
      return response.status(401).json({ error: "Token not provided" })
    }

    const [, token] = authHeader.split(" ")

    try {
      jwt.verify(token, authConfig.secret)
      return next()
    } catch (err) {
      return response.status(401).json({ error: "Invalid Token" })
    }
  }
}